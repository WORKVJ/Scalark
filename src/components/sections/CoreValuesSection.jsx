'use client';

import { useState, useEffect } from 'react';
import { Layers, ShieldCheck, Globe2, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CoreValuesSection() {
  const { t, isRtl } = useLanguage();
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const DURATION = 5000; // 5 seconds per active card
  const INTERVAL_STEP = 50;

  const cardVisuals = [
    {
      icon: Layers,
      bgGradient: 'from-[#0A1E4A] via-[#0D2963] to-[#06122C]',
      activeBorder: 'border-[#0084FF]/60',
      activeShadow: 'shadow-[0_20px_50px_rgba(0,132,255,0.25)]',
      accentColor: '#0084FF'
    },
    {
      icon: ShieldCheck,
      bgGradient: 'from-[#082845] via-[#0E355B] to-[#041628]',
      activeBorder: 'border-sky-400/60',
      activeShadow: 'shadow-[0_20px_50px_rgba(56,189,248,0.22)]',
      accentColor: '#38BDF8'
    },
    {
      icon: Globe2,
      bgGradient: 'from-[#121E3D] via-[#1A2C59] to-[#091024]',
      activeBorder: 'border-indigo-400/60',
      activeShadow: 'shadow-[0_20px_50px_rgba(99,102,241,0.22)]',
      accentColor: '#818CF8'
    }
  ];

  const values = (t.coreValues?.values || []).map((v, i) => ({
    ...v,
    ...cardVisuals[i % cardVisuals.length]
  }));

  // Auto-cycle through active cards, pausing on hover
  useEffect(() => {
    if (isPaused || values.length === 0) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveCard((curr) => (curr + 1) % values.length);
          return 0;
        }
        return prev + (INTERVAL_STEP / DURATION) * 100;
      });
    }, INTERVAL_STEP);

    return () => clearInterval(timer);
  }, [isPaused, values.length]);

  const handleSelectCard = (index) => {
    setActiveCard(index);
    setProgress(0);
  };

  return (
    <section className="relative z-20 w-full py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/50 to-white text-black overflow-hidden border-t border-slate-200/80">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          {t.coreValues?.eyebrow && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-[#0084FF] text-xs font-semibold tracking-wider uppercase mb-3.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF]" />
              {t.coreValues.eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight">
            <span className="text-[#0B1A3A]">{t.coreValues?.headingPart1}</span>
            <span className="text-[#0084FF]">{t.coreValues?.headingPart2}</span>
          </h2>
          {t.coreValues?.subtitle && (
            <p className="mt-3.5 text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
              {t.coreValues.subtitle}
            </p>
          )}
        </div>

        {/* Horizontal Accordion with Auto-Expand on Hover */}
        <div
          className="flex flex-col md:flex-row gap-5 sm:gap-6 max-w-5xl mx-auto items-stretch justify-center w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {values.map((val, idx) => {
            const isActive = activeCard === idx;
            const IconComponent = val.icon || Layers;

            return (
              <div
                key={val.id}
                onMouseEnter={() => handleSelectCard(idx)}
                onClick={() => handleSelectCard(idx)}
                style={{
                  flex: isActive ? '2.4 1 0%' : '1 1 0%',
                  transition:
                    'flex 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
                }}
                className={`relative rounded-3xl p-7 sm:p-9 cursor-pointer select-none flex flex-col justify-between min-h-[260px] md:min-h-[440px] text-white text-start bg-gradient-to-br ${val.bgGradient} border ${
                  isActive
                    ? `${val.activeBorder} ${val.activeShadow} ring-2 ring-blue-400/20`
                    : 'border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] opacity-90 hover:opacity-100 hover:border-white/25'
                }`}
              >
                {/* Top Subtle Progress Line for Active Card */}
                <div className="absolute top-0 inset-x-0 h-1 bg-white/10 rounded-t-3xl overflow-hidden">
                  {isActive && (
                    <div
                      className="h-full bg-gradient-to-r from-blue-400 to-sky-300 transition-all duration-75 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  )}
                </div>

                {/* Card Top Row */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/90">
                      {val.num ? `${val.num} • ` : ''}{val.tag || 'PRINCIPLE'}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center text-white shadow-inner">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-white font-bold tracking-tight leading-snug mb-3">
                    {val.title}
                  </h3>

                  {/* Description (reveals smoothly when active) */}
                  <div
                    className={`transition-all duration-500 ease-out overflow-hidden ${
                      isActive
                        ? 'opacity-100 max-h-96 translate-y-0 mt-3'
                        : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none mt-0'
                    }`}
                  >
                    <p className="text-xs sm:text-[13px] md:text-sm text-slate-200/95 leading-relaxed font-normal mb-4">
                      {val.description}
                    </p>

                    {/* Operational Points */}
                    {val.points && val.points.length > 0 && (
                      <div className="space-y-2 pt-3 border-t border-white/10">
                        {val.points.map((pt, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-center gap-2 text-xs sm:text-[13px] text-white/90 font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer State Label */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] tracking-wider uppercase font-semibold text-slate-300/80">
                  <span>
                    {isActive
                      ? isRtl
                        ? 'معيار معتمد'
                        : 'Scalark Operating Standard'
                      : isRtl
                      ? 'مرر للاطلاع'
                      : 'Hover to Expand'}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? 'bg-[#0084FF] shadow-[0_0_8px_#0084FF]' : 'bg-white/30'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {values.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectCard(idx)}
              aria-label={`Show principle ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCard === idx
                  ? 'w-8 bg-[#0084FF]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
