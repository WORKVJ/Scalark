'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LogoLoader() {
  const [mounted, setMounted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter from 0 to 100%
    const startTime = Date.now();
    const duration = 1300; // 1.3 seconds for progress fill

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(Math.round((elapsed / duration) * 100), 100);
      setProgress(pct);

      if (pct >= 100) {
        clearInterval(interval);
        // Begin fade out after progress hits 100%
        setTimeout(() => {
          setFadeOut(true);
        }, 150);

        // Remove from DOM after fade out completes
        setTimeout(() => {
          setMounted(false);
        }, 850);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null;

  return (
    <div
      id="scalark-logo-loader"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#061233] transition-all duration-700 ease-out select-none ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 pointer-events-auto scale-100'
      }`}
      aria-hidden={fadeOut}
    >
      {/* AMBIENT RADIAL GLOW IN BACKGROUND */}
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-b from-[#0084FF]/25 via-[#38BDF8]/15 to-transparent rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* CENTER LOGO & CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* LOGO EMBLEM WITH GLOW */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-5 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-[#0084FF]/20 blur-xl animate-pulse" />
          <Image
            src="/logo_white_transparent.png"
            alt="SCALARK"
            width={96}
            height={96}
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-[0_4px_25px_rgba(0,132,255,0.6)] animate-fade-in"
            priority
          />
        </div>

        {/* BRAND WORDMARK */}
        <h1 className="text-2xl sm:text-3xl font-black tracking-[0.28em] text-white uppercase font-sans mb-1 pl-1">
          SCALARK
        </h1>

        {/* CORE MOTTO */}
        <p className="text-[11px] sm:text-xs font-mono tracking-widest text-sky-200/75 uppercase mb-6">
          Find the Problem • Fix the System • Scale
        </p>

        {/* HIGH-TECH MINIMAL PROGRESS BAR */}
        <div className="w-44 sm:w-52 h-[3px] bg-white/10 rounded-full overflow-hidden relative shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-[#0084FF] via-[#38BDF8] to-white rounded-full transition-all duration-75 ease-out shadow-[0_0_12px_rgba(0,132,255,0.9)]"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* SUBTLE TELEMETRY INDICATOR */}
        <div className="mt-3 flex items-center gap-2 text-[10px] font-mono text-blue-200/50 uppercase tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>System Initialization • {progress}%</span>
        </div>
      </div>
    </div>
  );
}
