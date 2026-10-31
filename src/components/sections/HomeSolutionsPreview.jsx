'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, BarChart3, DollarSign, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HomeSolutionsPreview() {
  const { t, isRtl } = useLanguage();
  const [activePillar, setActivePillar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const DURATION = 4500; // 4.5s auto-cycle per pillar
  const INTERVAL_STEP = 50;

  const pillarIcons = [Layers, BarChart3, DollarSign, Users];
  const pillarImages = [
    '/assets/system-card.jpg',
    '/assets/phone-dashboard.jpg',
    '/assets/kinetic-mesh.jpg',
    '/assets/hero-boardroom.jpg'
  ];
  const pillarStyles = [
    {
      badgeColor: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/15',
      accentColor: '#10B981'
    },
    {
      badgeColor: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/15',
      accentColor: '#06B6D4'
    },
    {
      badgeColor: 'text-blue-300 border-blue-500/30 bg-blue-500/15',
      accentColor: '#3B82F6'
    },
    {
      badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/15',
      accentColor: '#818CF8'
    }
  ];

  const pillars = (t.homeSolutions?.pillars || []).map((p, idx) => ({
    ...p,
    icon: pillarIcons[idx % pillarIcons.length],
    image: pillarImages[idx % pillarImages.length],
    ...pillarStyles[idx % pillarStyles.length]
  }));

  // Auto-cycle through pillars
  useEffect(() => {
    if (isPaused || pillars.length === 0) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActivePillar((curr) => (curr + 1) % pillars.length);
          return 0;
        }
        return prev + (INTERVAL_STEP / DURATION) * 100;
      });
    }, INTERVAL_STEP);

    return () => clearInterval(timer);
  }, [isPaused, pillars.length]);

  const handleSelect = (idx) => {
    setActivePillar(idx);
    setProgress(0);
  };

  return (
    <section id="home-solutions-preview" className="py-14 sm:py-24 px-4 sm:px-6 bg-[#061233] border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#0084FF]/25 via-blue-600/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#0084FF]/40 text-xs font-mono uppercase tracking-widest text-blue-300 font-bold mb-4">
              <span>{t.homeSolutions?.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight font-sans">
              {t.homeSolutions?.title}
            </h2>
            <p className="mt-3 text-zinc-300 text-xs sm:text-base max-w-xl leading-relaxed">
              {t.homeSolutions?.subtitle}
            </p>
          </div>

          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-200 shadow-md shrink-0 active:scale-95 group"
          >
            <span>{t.homeSolutions?.btnCatalogue}</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
          </Link>
        </div>

        {/* Desktop Expanding Horizontal Accordion Container */}
        <div
          className="hidden lg:flex gap-4 sm:gap-5 w-full items-stretch justify-center h-[520px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {pillars.map((p, idx) => {
            const isActive = activePillar === idx;
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                onClick={() => handleSelect(idx)}
                style={{
                  flex: isActive ? '3.4 1 0%' : '1 1 0%',
                  transition: 'flex 0.65s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.65s ease, border-color 0.65s ease'
                }}
                className={`relative rounded-3xl overflow-hidden p-6 sm:p-8 cursor-pointer select-none flex flex-col justify-between border bg-[#081B4E] transition-all duration-300 group text-start ${
                  isActive
                    ? `border-[#0084FF] shadow-[0_20px_50px_rgba(0,132,255,0.35)] ring-2 ring-blue-500/30`
                    : 'border-[#0084FF]/25 hover:border-[#0084FF]/60 opacity-85 hover:opacity-100'
                }`}
              >
                {/* Background Image for Active Pillar */}
                <div
                  className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-700 ${
                    isActive ? 'opacity-35 scale-105' : 'opacity-10 scale-100'
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061233] via-[#081B4E]/85 to-[#061233]/70" />
                </div>

                {/* Pillar Header */}
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-tech text-xs font-black uppercase tracking-wider text-zinc-400">
                      {isRtl ? `الركيزة ${p.num}` : `PILLAR ${p.num}`}
                    </span>
                    {isActive && (
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${p.badgeColor} animate-fade-in`}>
                        {p.subtitle}
                      </span>
                    )}
                  </div>

                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0084FF] text-white shadow-[0_0_20px_rgba(0,132,255,0.6)] scale-110'
                        : 'bg-white/5 border border-[#0084FF]/30 text-zinc-400 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Pillar Content Body */}
                <div className="relative z-10 my-auto">
                  <h3
                    className={`font-sans font-black text-white tracking-tight transition-all duration-300 ${
                      isActive
                        ? 'text-2xl sm:text-3xl leading-snug mb-3'
                        : 'text-xl leading-tight opacity-90'
                    }`}
                  >
                    {p.title}
                  </h3>

                  {isActive ? (
                    <div className="space-y-4 pt-1 animate-fade-in">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/15 border border-blue-400/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        <span className="text-xs font-mono font-bold text-blue-200">
                          {p.headlineMetric}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal max-w-xl">
                        {p.desc}
                      </p>

                      <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/10">
                        {p.highlights?.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mt-2">
                      {p.desc}
                    </p>
                  )}
                </div>

                {/* Pillar Footer CTA */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-zinc-300">
                  <span className="font-mono text-[11px] text-zinc-400">
                    {isActive ? (isRtl ? 'بنية سكالارك' : 'SCALARK ARCHITECTURE') : (isRtl ? 'انقر للتوسيع' : 'CLICK TO EXPAND')}
                  </span>

                  <Link
                    href={`/solutions#${p.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 transition-colors ${
                      isActive ? 'text-white hover:text-blue-300' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>{isRtl ? 'معرفة المزيد' : 'Learn More'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5] rtl:rotate-90" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion View */}
        <div className="flex lg:hidden flex-col gap-4">
          {pillars.map((p, idx) => {
            const isActive = activePillar === idx;
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                onClick={() => handleSelect(idx)}
                className={`rounded-2xl bg-[#081B4E] border p-5 transition-all duration-300 cursor-pointer text-start ${
                  isActive
                    ? 'border-[#0084FF] shadow-xl ring-2 ring-blue-500/20'
                    : 'border-[#0084FF]/25 opacity-90'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-[#0084FF] text-white' : 'bg-white/5 text-zinc-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                        {isRtl ? `الركيزة ${p.num}` : `PILLAR ${p.num}`}
                      </span>
                      <h4 className="text-base font-bold text-white font-sans">
                        {p.title}
                      </h4>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                    {p.subtitle}
                  </span>
                </div>

                {isActive && (
                  <div className="pt-4 mt-4 border-t border-white/10 space-y-3 animate-fade-in">
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      {p.highlights?.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/solutions#${p.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white"
                      >
                        <span>{isRtl ? 'عرض تفاصيل الحل بالكامل' : 'Explore Full Solution Details'}</span>
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {pillars.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              aria-label={`Select Pillar ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activePillar === idx
                  ? 'w-8 bg-[#0084FF]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
