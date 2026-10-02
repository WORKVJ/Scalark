'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ badge, title, subtitle, breadcrumb = [], image }) {
  if (image) {
    return (
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 border-b border-white/[0.08] overflow-hidden min-h-[460px] sm:min-h-[520px] flex items-center">
        {/* PHOTOGRAPHIC HERO BACKGROUND (MATCHING REFERENCE IMAGE) */}
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-[75%_25%] md:object-[right_center]"
          />
          {/* CINEMATIC MULTI-LAYER DARK NAVY GRADIENT OVERLAYS FOR MAXIMUM TEXT READABILITY */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#061233] via-[#061233]/92 md:via-[#061233]/75 to-[#061233]/20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061233]/80 via-transparent to-[#061233]" />
          {/* SUBTLE BRAND BLUE GLOW ACCENT */}
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] bg-[#0084FF]/20 rounded-full blur-[100px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl text-left">
            {/* BREADCRUMBS */}
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300 mb-4 sm:mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              {breadcrumb.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-zinc-400" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white font-bold">{crumb.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* PILL BADGE */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-tech font-bold uppercase tracking-widest text-sky-200 mb-4 sm:mb-6 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#0084FF] animate-pulse" />
                <span>{badge}</span>
              </div>
            )}

            {/* TITLE */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans drop-shadow-[0_2px_15px_rgba(0,0,0,0.5)]">
              {title}
            </h1>

            {/* SUBTITLE */}
            {subtitle && (
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-zinc-200 font-normal leading-relaxed max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 border-b border-white/[0.08] bg-gradient-to-b from-[#081845] via-[#091D56] to-[#061233] overflow-hidden">
      {/* GLOW ACCENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#0084FF]/35 via-blue-600/15 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* BREADCRUMBS */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mb-4 sm:mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumb.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-zinc-500" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-zinc-200 font-semibold">{crumb.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* PILL BADGE */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/5 border border-[#0084FF]/40 text-[10px] sm:text-xs font-tech font-bold uppercase tracking-widest text-blue-300 mb-4 sm:mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0084FF] animate-pulse" />
            <span>{badge}</span>
          </div>
        )}

        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white max-w-4xl leading-[1.1] sm:leading-[1.05] font-sans">
          {title}
        </h1>

        {/* SUBTITLE */}
        {subtitle && (
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-zinc-400 max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
