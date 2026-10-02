'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Compass, CheckCircle2 } from 'lucide-react';

export const SQUAD_MEMBERS = [
  {
    id: 'squad-1',
    name: 'SHIRIN SHARAF',
    role: 'HEAD OF PROCESS ENGINEERING',
    specialty: 'SOP Mapping, Operational Cadence & Bottleneck Eradication',
    bgGradient: 'from-[#FF5A1F] via-[#E04006] to-[#B82B00]',
    solidColor: '#FF5A1F',
    accentColor: '#FF7A45',
    image: '/assets/squad/squad_shirin.jpg',
    domain: 'OPERATIONS',
    metric: '65% Time Freed'
  },
  {
    id: 'squad-2',
    name: 'RISWAN K.M.',
    role: 'REVENUE ENGINE ARCHITECT',
    specialty: 'Predictable Sales Pipelines, B2B Funnels & Conversion Cadence',
    bgGradient: 'from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A]',
    solidColor: '#2563EB',
    accentColor: '#60A5FA',
    image: '/assets/squad/squad_riswan.jpg',
    domain: 'REVENUE',
    metric: '3.4x Pipeline'
  },
  {
    id: 'squad-3',
    name: 'HAMAS V.A.',
    role: 'FINANCIAL SYSTEMS DIRECTOR',
    specialty: 'Unit Economics, Cash-Flow Triage & Profit Margin Governance',
    bgGradient: 'from-[#F59E0B] via-[#D97706] to-[#92400E]',
    solidColor: '#F59E0B',
    accentColor: '#FBBF24',
    image: '/assets/squad/squad_hamas.jpg',
    domain: 'FINANCE',
    metric: '100% Cash Visibility'
  },
  {
    id: 'squad-4',
    name: 'THANZEER P.',
    role: 'CHIEF SYSTEMS ARCHITECT',
    specialty: 'Enterprise Governance, 120-Point Audit & Business Autonomy',
    bgGradient: 'from-[#0084FF] via-[#091E58] to-[#061233]',
    solidColor: '#0084FF',
    accentColor: '#60A5FA',
    image: '/assets/squad/squad_thanzeer.jpg',
    domain: 'FOUNDATION',
    metric: '4.62x Valuation Multiple'
  },
  {
    id: 'squad-5',
    name: 'ABDUL ALI',
    role: 'COMMERCIAL STRATEGY HEAD',
    specialty: 'Institutional Scaling, Distribution Networks & Partnership Models',
    bgGradient: 'from-[#9333EA] via-[#7E22CE] to-[#581C87]',
    solidColor: '#9333EA',
    accentColor: '#C084FC',
    image: '/assets/squad/squad_abdul.jpg',
    domain: 'SALES',
    metric: '+38% Net Margin'
  },
  {
    id: 'squad-6',
    name: 'NEHAL VERMA',
    role: 'ORGANIZATION CADENCE LEAD',
    specialty: 'KPI Accountability Matrices, Executive Playbooks & Hiring SOPs',
    bgGradient: 'from-[#EC4899] via-[#DB2777] to-[#9D174D]',
    solidColor: '#EC4899',
    accentColor: '#F472B6',
    image: '/assets/squad/squad_nehal.jpg',
    domain: 'GOVERNANCE',
    metric: '98% Autonomy Rate'
  }
];

export default function RotatingSquadSection() {
  const [activeMember, setActiveMember] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Physics refs for silky-smooth 60fps animation without React re-render overhead
  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const currentRotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef(null);
  const lastScrollYRef = useRef(0);

  const cardCount = SQUAD_MEMBERS.length;
  const angleStep = 360 / cardCount;
  
  // Responsive radius of the 3D cylinder
  const [radius, setRadius] = useState(350);

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setRadius(185);
      } else if (w < 768) {
        setRadius(230);
      } else if (w < 1024) {
        setRadius(290);
      } else {
        setRadius(350);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 1. HIGH-PERFORMANCE PHYSICS ANIMATION LOOP
  useEffect(() => {
    lastTimeRef.current = performance.now();

    const updatePhysics = (time) => {
      const delta = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;

      if (!isDraggingRef.current) {
        // Continuous smooth idle rotation when not dragging or hovering
        if (!isHovered) {
          targetRotationRef.current += 14 * delta; // 14 degrees per second
        }

        // Apply friction/inertia to velocity
        if (Math.abs(velocityRef.current) > 0.05) {
          targetRotationRef.current += velocityRef.current;
          velocityRef.current *= 0.92; // smooth decay
        }
      }

      // Smooth Spring Interpolation (Lerp)
      const diff = targetRotationRef.current - currentRotationRef.current;
      currentRotationRef.current += diff * 0.09;

      // Apply 3D transform directly to the stage DOM element (Pure GPU, 0 React lag)
      if (stageRef.current) {
        // Inclined turntable matching reference image angle
        stageRef.current.style.transform = `rotateX(-14deg) rotateY(${-currentRotationRef.current}deg)`;
      }

      // Calculate which card is currently closest to the front
      const normalizedRot = ((-currentRotationRef.current % 360) + 360) % 360;
      const nearestIdx = Math.round(normalizedRot / angleStep) % cardCount;
      setActiveIdx(nearestIdx);

      animFrameRef.current = requestAnimationFrame(updatePhysics);
    };

    animFrameRef.current = requestAnimationFrame(updatePhysics);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, [angleStep, cardCount, isHovered]);

  // 2. SCROLL-LINKED MOMENTUM ACCELERATION
  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollYRef.current;
        lastScrollYRef.current = currentScrollY;

        // Smooth momentum impulse on scroll
        targetRotationRef.current += scrollDelta * 0.18;
      } else {
        lastScrollYRef.current = window.scrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. FLUID MOUSE & TOUCH DRAG CONTROLS WITH MOMENTUM THROW
  const handlePointerDown = (e) => {
    isDraggingRef.current = true;
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    startXRef.current = clientX;
    lastXRef.current = clientX;
    velocityRef.current = 0;
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    const deltaX = clientX - lastXRef.current;
    lastXRef.current = clientX;

    // Track velocity for flick/momentum throw
    velocityRef.current = -deltaX * 0.35;
    targetRotationRef.current += -deltaX * 0.42;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  // 4. MANUAL BUTTON NAVIGATION WITH SMOOTH SNAPPING
  const rotateToStep = (direction) => {
    const currentNorm = targetRotationRef.current;
    if (direction === 'next') {
      targetRotationRef.current = Math.round(currentNorm / angleStep) * angleStep + angleStep;
    } else {
      targetRotationRef.current = Math.round(currentNorm / angleStep) * angleStep - angleStep;
    }
  };

  const snapToMember = (index) => {
    targetRotationRef.current = index * angleStep;
  };

  return (
    <section
      ref={containerRef}
      id="squad"
      className="py-14 sm:py-32 bg-[#061233] text-white relative overflow-hidden border-t border-[#0084FF]/25"
      onMouseDown={handlePointerDown}
      onMouseMove={handlePointerMove}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      {/* AMBIENT GLOW BACKDROPS */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-blue-600/10 rounded-full blur-[220px] pointer-events-none" />

      {/* SUBTLE 3D ROTATING GRID FLOOR */}
      <div 
        className="absolute bottom-0 inset-x-0 h-48 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
          maskImage: 'linear-gradient(to top, black, transparent)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 items-center">

          {/* LEFT COLUMN: DESGRO-STYLE BOLD TYPOGRAPHY */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 select-none">

            {/* ACCENT BADGE */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[2px] bg-red-500 inline-block" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-zinc-400 font-bold">
                THE ARCHITECTS BEHIND THE SYSTEM
              </span>
            </div>

            {/* DISPLAY HEADLINE MATCHING REFERENCE DESIGN */}
            <h2 className="text-3xl sm:text-6xl md:text-8xl font-black tracking-tighter leading-[0.92] sm:leading-[0.88] text-white">
              SCALARK<br />
              <span className="text-red-500">SYSTEMS</span><br />
              SQUAD
            </h2>

            {/* ROLE PILLARS STRIP */}
            <p className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-zinc-400 font-semibold leading-relaxed pt-1 sm:pt-2">
              SYSTEMS ARCHITECTS • PROCESS ENGINEERS • REVENUE STRATEGISTS • FINANCIAL AUDITORS • GOVERNANCE LEADS
            </p>

            <p className="text-zinc-400 text-xs sm:text-base leading-relaxed font-normal">
              We don't give academic theory. Our cross-functional squad embeds directly into your operations to map workflows, install digital accountability, and free founder bandwidth.
            </p>

            {/* ACTIVE SQUAD PILL INDICATOR */}
            <div className="pt-2 flex flex-wrap gap-2">
              {SQUAD_MEMBERS.map((member, idx) => (
                <button
                  key={member.id}
                  onClick={() => snapToMember(idx)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 border ${
                    activeIdx === idx
                      ? 'bg-white text-black border-white shadow-lg scale-105'
                      : 'bg-white/[0.04] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {member.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* INTERACTION CONTROLS */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono text-zinc-300">
                <Compass className="w-3.5 h-3.5 text-red-500 animate-spin" style={{ animationDuration: '8s' }} />
                <span>3D ROTATING CADENCE</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => rotateToStep('prev')}
                  className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-zinc-400 hover:text-white transition-all active:scale-90 cursor-pointer shadow-md"
                  aria-label="Previous squad member"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => rotateToStep('next')}
                  className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-zinc-400 hover:text-white transition-all active:scale-90 cursor-pointer shadow-md"
                  aria-label="Next squad member"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D CYLINDRICAL ROTATING STAGE */}
          <div
            className="lg:col-span-7 h-[360px] sm:h-[500px] md:h-[580px] relative flex items-center justify-center select-none lg:pl-6 cursor-grab active:cursor-grabbing overflow-hidden sm:overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              perspective: radius < 250 ? '750px' : '1300px',
              perspectiveOrigin: '50% 50%'
            }}
          >
            {/* 3D ROTATING CYLINDER CONTAINER (MUTATED DIRECTLY BY PHYSIC LOOP) */}
            <div
              ref={stageRef}
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
            >
              {SQUAD_MEMBERS.map((member, index) => {
                const cardAngle = index * angleStep;

                return (
                  <div
                    key={member.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMember(member);
                    }}
                    className="absolute w-[155px] sm:w-[195px] md:w-[230px] h-[255px] sm:h-[315px] md:h-[360px] pointer-events-auto cursor-pointer group"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `rotateY(${cardAngle}deg) translateZ(${radius}px) rotateX(-10deg)`,
                      willChange: 'transform'
                    }}
                  >
                    {/* DOUBLE-SIDED CARD WRAPPER */}
                    <div 
                      className="relative w-full h-full rounded-2xl sm:rounded-3xl transition-transform duration-300 group-hover:scale-105"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      
                      {/* FRONT FACE (VISIBLE WHEN FACING CAMERA) */}
                      <div
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col justify-between border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden bg-gradient-to-b ${member.bgGradient}`}
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden'
                        }}
                      >
                        {/* SUBTLE GLOSS HIGHLIGHT */}
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full pointer-events-none" />

                        {/* TOP BADGES */}
                        <div className="flex items-center justify-between z-10 gap-1">
                          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-mono font-black uppercase tracking-wider bg-[#061233]/70 backdrop-blur-md text-white border border-[#0084FF]/40 truncate">
                            {member.domain}
                          </span>
                          <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[7.5px] sm:text-[9.5px] font-mono font-bold text-white bg-white/20 backdrop-blur-md truncate">
                            {member.metric}
                          </span>
                        </div>

                        {/* ARCHITECT PORTRAIT PHOTO */}
                        <div className="relative flex-1 w-full my-1.5 overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 shadow-inner">
                          <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            sizes="(max-width: 640px) 155px, (max-width: 768px) 195px, 230px"
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500 brightness-95 contrast-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* BOTTOM TITLE & ROLE BADGE */}
                        <div className="bg-[#081B4E]/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-3 border border-[#0084FF]/35 z-10 shadow-lg">
                          <div className="text-[11px] sm:text-sm font-black text-white tracking-tight truncate uppercase">
                            {member.name}
                          </div>
                          <div className="text-[8.5px] sm:text-[10px] font-mono uppercase tracking-wider text-zinc-300 font-bold truncate">
                            {member.role}
                          </div>
                        </div>
                      </div>

                      {/* BACK FACE (CLEAN SOLID BRANDED BACK TO PREVENT MIRRORED REVERSED TEXT) */}
                      <div
                        className="absolute inset-0 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center border-2 border-white/10 shadow-2xl"
                        style={{
                          transform: 'rotateY(180deg)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          backgroundColor: member.solidColor,
                          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.4) 100%)'
                        }}
                      >
                        {/* SCALARK BRAND EMBLEM ON REAR */}
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#061233]/70 border border-[#0084FF]/40 backdrop-blur-md flex items-center justify-center mb-2 sm:mb-3 shadow-inner">
                          <span className="text-lg sm:text-xl font-black text-white font-mono">S</span>
                        </div>
                        <div className="text-[11px] sm:text-xs font-mono font-black uppercase tracking-widest text-white/90 text-center">
                          SCALARK
                        </div>
                        <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-white/70 text-center mt-1">
                          SYSTEMS ARCHITECTURE
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* USER INTERACTION PILL HINT AT BOTTOM OF 3D STAGE */}
            <div className="absolute bottom-2 sm:bottom-3 inset-x-0 flex justify-center pointer-events-none px-4">
              <div className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#081B4E]/90 backdrop-blur-md border border-[#0084FF]/30 text-[9.5px] sm:text-xs font-mono font-bold text-blue-100 tracking-wider shadow-2xl flex items-center gap-2 max-w-[95%] sm:max-w-none">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span className="sm:hidden">SWIPE TO ROTATE • TAP TO INSPECT</span>
                <span className="hidden sm:inline">DRAG TO ROTATE • SCROLL TO ACCELERATE • CLICK CARD TO INSPECT</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SQUAD MEMBER DETAIL MODAL */}
      {activeMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061233]/90 backdrop-blur-xl animate-fadeIn"
          onClick={() => setActiveMember(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-[#081B4E] border border-[#0084FF]/50 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                {activeMember.domain} ARCHITECT
              </span>
              <button
                onClick={() => setActiveMember(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center text-sm font-mono transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeMember.bgGradient} p-1 flex items-center justify-center border border-white/20 shadow-md relative overflow-hidden flex-shrink-0`}>
                <Image
                  src={activeMember.image}
                  alt={activeMember.name}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                  {activeMember.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-red-400 font-bold">
                  {activeMember.role}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6 space-y-2">
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                Operational Specialization
              </div>
              <p className="text-sm text-zinc-200 font-normal leading-relaxed">
                {activeMember.specialty}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-mono text-emerald-400 font-bold">
                  Audited Benchmark: {activeMember.metric}
                </span>
              </div>
              <Link
                href="/contact"
                onClick={() => setActiveMember(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors text-center shadow-md active:scale-95"
              >
                Consult With Squad →
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
