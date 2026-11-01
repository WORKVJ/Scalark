'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function CoreValuesSection() {
  const { t, isRtl } = useLanguage();
  const [activeCard, setActiveCard] = useState(0);

  const cardColors = [
    { bgClass: 'bg-[#0284C7]', shadowClass: 'shadow-[0_20px_45px_rgba(2,132,199,0.35)]' },
    { bgClass: 'bg-[#70A52E]', shadowClass: 'shadow-[0_20px_45px_rgba(112,165,46,0.35)]' },
    { bgClass: 'bg-[#1F1F21]', shadowClass: 'shadow-[0_20px_45px_rgba(31,31,33,0.35)]' }
  ];

  const values = (t.coreValues?.values || []).map((v, i) => ({
    ...v,
    ...cardColors[i % cardColors.length]
  }));

  const handleSelectCard = (index) => {
    setActiveCard(index);
  };

  return (
    <section className="relative z-20 w-full py-16 sm:py-24 bg-white text-black overflow-hidden border-t border-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight uppercase">
            <span className="text-[#1F1F21]">{t.coreValues?.headingPart1}</span>
            <span className="text-[#70A52E]">{t.coreValues?.headingPart2}</span>
          </h2>
        </div>

        {/* Horizontal Accordion */}
        <div
          className="flex flex-col md:flex-row gap-5 sm:gap-6 max-w-5xl mx-auto items-stretch justify-center w-full"
        >
          {values.map((val, idx) => {
            const isActive = activeCard === idx;

            return (
              <div
                key={val.id}
                onMouseEnter={() => handleSelectCard(idx)}
                onClick={() => handleSelectCard(idx)}
                style={{
                  flex: isActive ? '2.25 1 0%' : '1 1 0%',
                  transition:
                    'flex 0.65s cubic-bezier(0.25, 1, 0.5, 1), transform 0.65s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.65s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
                className={`core-values-card relative rounded-[28px] p-7 sm:p-9 cursor-pointer select-none flex flex-col justify-start min-h-[220px] md:min-h-[420px] text-white text-start ${val.bgClass} ${
                  isActive
                    ? `${val.shadowClass} ring-4 ring-black/10`
                    : 'shadow-[0_10px_25px_rgba(0,0,0,0.08)] opacity-95 hover:opacity-100'
                }`}
              >
                {/* Top Circle Icon (Clean static icon - NO loading animation) */}
                <div className="mb-7 flex items-center justify-between">
                  <div className="w-9 h-9 rounded-full border-[1.5px] border-white/80 flex items-center justify-center">
                    <div
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        isActive ? 'bg-white' : 'border-[1.5px] border-white/80'
                      }`}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl sm:text-2xl text-white font-bold leading-snug whitespace-pre-line mb-4 shrink-0 ${
                    isRtl ? 'font-sans' : 'font-mono'
                  }`}
                  style={!isRtl ? { fontFamily: "'Courier New', Courier, monospace" } : {}}
                >
                  {val.title}
                </h3>

                {/* Description that smoothly reveals when the card expands in width */}
                <div
                  className={`transition-all duration-500 ease-out overflow-hidden ${
                    isActive
                      ? 'opacity-100 max-h-60 translate-y-0 mt-2'
                      : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none mt-0'
                  }`}
                >
                  <p className="text-xs sm:text-[13px] text-white/95 leading-relaxed font-sans font-normal max-w-md">
                    {val.description}
                  </p>
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
              aria-label={`Show item ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeCard === idx
                  ? 'w-8 bg-[#70A52E]'
                  : 'w-2 bg-zinc-300 hover:bg-zinc-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
