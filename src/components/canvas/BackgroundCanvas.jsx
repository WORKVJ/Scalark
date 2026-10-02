'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BackgroundCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // PARTICLES CREATION
    const particleCount = 75;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities = [];

    // Royal Cobalt (#0084FF) & Crisp White (#FFFFFF)
    const colorWhite = new THREE.Color(0xffffff);
    const colorCobalt = new THREE.Color(0x0e37a4);
    const colorZinc = new THREE.Color(0x71717a);

    for (let i = 0; i < particleCount; i++) {
      // Spread across 3D space
      positions[i * 3] = (Math.random() - 0.5) * 850;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 650;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400;

      // 18% particles are Royal Cobalt Blue, rest are white/zinc
      const isCobalt = Math.random() < 0.18;
      const col = isCobalt ? colorCobalt : (Math.random() < 0.6 ? colorWhite : colorZinc);
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;

      // Gentle floating velocities
      velocities.push({
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.2
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Circle texture for smooth rounded points
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.4, 'rgba(255,255,255,0.8)');
    grad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(16, 16, 16, 0, Math.PI * 2);
    ctx.fill();
    const particleTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 6,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // CONNECTING LINES SYSTEM
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.08,
      blending: THREE.AdditiveBlending
    });

    const maxLineSegments = particleCount * 4;
    const linePositions = new Float32Array(maxLineSegments * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // MOUSE PARALLAX & INTERACTION
    let mouseX = 0;
    let mouseY = 0;
    let targetCameraX = 0;
    let targetCameraY = 0;

    const onMouseMove = (e) => {
      const halfW = window.innerWidth / 2;
      const halfH = window.innerHeight / 2;
      mouseX = (e.clientX - halfW) * 0.15;
      mouseY = (e.clientY - halfH) * 0.15;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // RESIZE HANDLER
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    // ANIMATION LOOP
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera chase
      targetCameraX += (mouseX - targetCameraX) * 0.04;
      targetCameraY += (-mouseY - targetCameraY) * 0.04;
      camera.position.x = targetCameraX;
      camera.position.y = targetCameraY;
      camera.lookAt(0, 0, 0);

      // Update particles
      const pos = particleSystem.geometry.attributes.position.array;
      let lineIndex = 0;

      for (let i = 0; i < particleCount; i++) {
        pos[i * 3] += velocities[i].vx;
        pos[i * 3 + 1] += velocities[i].vy;
        pos[i * 3 + 2] += velocities[i].vz;

        // Bounce boundaries
        if (Math.abs(pos[i * 3]) > 450) velocities[i].vx *= -1;
        if (Math.abs(pos[i * 3 + 1]) > 350) velocities[i].vy *= -1;
        if (Math.abs(pos[i * 3 + 2]) > 220) velocities[i].vz *= -1;

        // Connect nearby points
        for (let j = i + 1; j < particleCount; j++) {
          const dx = pos[i * 3] - pos[j * 3];
          const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
          const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < 13000 && lineIndex < maxLineSegments * 6 - 6) {
            linePositions[lineIndex++] = pos[i * 3];
            linePositions[lineIndex++] = pos[i * 3 + 1];
            linePositions[lineIndex++] = pos[i * 3 + 2];
            linePositions[lineIndex++] = pos[j * 3];
            linePositions[lineIndex++] = pos[j * 3 + 1];
            linePositions[lineIndex++] = pos[j * 3 + 2];
          }
        }
      }

      particleSystem.geometry.attributes.position.needsUpdate = true;
      lineGeometry.setDrawRange(0, lineIndex / 3);
      lineGeometry.attributes.position.needsUpdate = true;

      // Slow overall rotation
      particleSystem.rotation.y += 0.0006;
      particleSystem.rotation.x += 0.0003;
      lineMesh.rotation.y = particleSystem.rotation.y;
      lineMesh.rotation.x = particleSystem.rotation.x;

      renderer.render(scene, camera);
    };

    animate();

    const container = containerRef.current;

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      particleTexture.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Three.js Particle Mesh Canvas */}
      <div ref={containerRef} className="absolute inset-0 opacity-75" />

      {/* Ambient Royal Cobalt & White Glow Accents */}
      <div className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#0084FF]/25 via-[#38BDF8]/10 to-transparent rounded-full blur-[170px]" />
      <div className="absolute top-[40%] -right-40 w-[600px] h-[600px] bg-[#0084FF]/15 rounded-full blur-[200px]" />
    </div>
  );
}

