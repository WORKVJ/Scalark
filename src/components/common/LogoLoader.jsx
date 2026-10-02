'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function LogoLoader() {
  const [mounted, setMounted] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Elegant brief brand presentation
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1100);

    const cleanup = setTimeout(() => {
      setMounted(false);
    }, 1750);

    return () => {
      clearTimeout(timer);
      clearTimeout(cleanup);
    };
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
      <div className="absolute w-[450px] h-[450px] bg-gradient-to-b from-[#0084FF]/25 via-[#38BDF8]/15 to-transparent rounded-full blur-[110px] pointer-events-none animate-pulse" />

      {/* CENTER LOGO & WORDMARK ONLY */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 animate-fade-in">
        {/* LOGO EMBLEM */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 mb-4 flex items-center justify-center">
          <div className="absolute inset-0 rounded-2xl bg-[#0084FF]/25 blur-xl animate-pulse" />
          <Image
            src="/logo_white_transparent.png"
            alt="SCALARK"
            width={112}
            height={112}
            className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-[0_4px_30px_rgba(0,132,255,0.7)]"
            priority
          />
        </div>

        {/* SCALARK BRAND WORDMARK ONLY */}
        <h1 className="text-3xl sm:text-4xl font-black tracking-[0.32em] text-white uppercase font-sans pl-1 drop-shadow-[0_2px_15px_rgba(0,132,255,0.4)]">
          SCALARK
        </h1>
      </div>
    </div>
  );
}
