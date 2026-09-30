'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ badge, title, subtitle, breadcrumb = [] }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 border-b border-white/[0.08] bg-[#0A0D14] overflow-hidden">
      {/* GLOW ACCENTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#8B5CF6]/15 via-white/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40 -z-10" />

      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* BREADCRUMBS */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-4 sm:mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          {breadcrumb.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-zinc-600" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-white transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-zinc-300 font-semibold">{crumb.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* PILL BADGE */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-tech font-bold uppercase tracking-widest text-[#A78BFA] mb-4 sm:mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#8B5CF6] animate-pulse" />
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
