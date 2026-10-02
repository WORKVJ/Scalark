'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({ badge, title, subtitle, breadcrumb = [], image }) {
  if (image) {
    return (
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 border-b border-zinc-200/80 bg-white text-black overflow-hidden min-h-[460px] sm:min-h-[520px] flex items-center">
        {/* PHOTOGRAPHIC HERO BACKGROUND (MATCHING REFERENCE IMAGE) */}
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover object-[center_right] sm:object-right"
          />
          {/* CRISP WHITE DISSOLVE GRADIENTS FOR PURE WHITE BACKGROUND AND MAXIMUM CONTRAST */}
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/95 md:via-white/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-2xl text-left">
            {/* BREADCRUMBS */}
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-4 sm:mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-black transition-colors font-medium">
                Home
              </Link>
              {breadcrumb.map((crumb, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-zinc-400" />
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-black transition-colors font-medium">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-black font-bold">{crumb.label}</span>
                  )}
                </div>
              ))}
            </div>

            {/* PILL BADGE */}
            {badge && (
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-tech font-bold uppercase tracking-widest text-[#0084FF] mb-4 sm:mb-6 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#0084FF] animate-pulse" />
                <span>{badge}</span>
              </div>
            )}

            {/* TITLE */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-[1.1] font-sans">
              {title}
            </h1>

            {/* SUBTITLE */}
            {subtitle && (
              <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-8 border-b border-zinc-200 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* BREADCRUMBS */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 mb-4 sm:mb-6 uppercase tracking-wider">
          <Link href="/" className="hover:text-black transition-colors font-medium">
            Home
          </Link>
          {breadcrumb.map((crumb, idx) => (
            <div key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-zinc-400" />
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-black transition-colors font-medium">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-black font-bold">{crumb.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* PILL BADGE */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[10px] sm:text-xs font-tech font-bold uppercase tracking-widest text-[#0084FF] mb-4 sm:mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0084FF] animate-pulse" />
            <span>{badge}</span>
          </div>
        )}

        {/* TITLE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-black max-w-4xl leading-[1.1] sm:leading-[1.05] font-sans">
          {title}
        </h1>

        {/* SUBTITLE */}
        {subtitle && (
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-zinc-600 max-w-2xl font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
