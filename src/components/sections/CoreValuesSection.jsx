'use client';

import { useState, useEffect } from 'react';

export default function CoreValuesSection() {
  const [activeCard, setActiveCard] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const DURATION = 4000; // 4 seconds per active card
  const INTERVAL_STEP = 50;

  const values = [
    {
      id: 'systems',
      title: 'Systems\nOver\nHeroes',
      bgClass: 'bg-[#0284C7]',
      shadowClass: 'shadow-[0_20px_45px_rgba(2,132,199,0.35)]',
      description:
        'Every process, operational SOP, and management dashboard is structured to replace founder firefighting with sustainable institutional governance.'
    },
    {
      id: 'integrity',
      title: 'Diagnostic\nIntegrity',
      bgClass: 'bg-[#70A52E]',
      shadowClass: 'shadow-[0_20px_45px_rgba(112,165,46,0.35)]',
      description:
        'We maintain uncompromising diagnostic standards — uncovering true cash-flow, sales, and operational bottlenecks before prescribing solutions.'
    },
    {
      id: 'growth',
      title: 'Border-Free\nGrowth',
      bgClass: 'bg-[#1F1F21]',
      shadowClass: 'shadow-[0_20px_45px_rgba(31,31,33,0.35)]',
      description:
        'We build solid operational systems connecting enterprise growth across regional commercial hubs in Dubai, London, and Singapore.'
    }
  ];

  // Auto-cycle through active cards, automatically expanding width
  useEffect(() => {
    if (isPaused) return;

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

  // SVG circular timer calculations
  const circleRadius = 14;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <section className="relative z-20 w-full py-16 sm:py-24 bg-white text-black overflow-hidden border-t border-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Header matching user's exact uploaded image */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-bold tracking-tight uppercase">
            <span className="text-[#1F1F21]">OUR </span>
            <span className="text-[#70A52E]">CORE VALUES</span>
          </h2>
        </div>

        {/* Horizontal Accordion: Cards automatically expand width when active */}
        <div
          className="flex flex-col md:flex-row gap-5 sm:gap-6 max-w-5xl mx-auto items-stretch justify-center w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {values.map((val, idx) => {
            const isActive = activeCard === idx;

            return (
              <div
                key={val.id}
                onClick={() => handleSelectCard(idx)}
                style={{
                  // On desktop, active card expands to ~2.2x width of inactive cards
                  flex: isActive ? '2.25 1 0%' : '1 1 0%',
                  transition: 'flex 0.65s cubic-bezier(0.25, 1, 0.5, 1), transform 0.65s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.65s cubic-bezier(0.25, 1, 0.5, 1)'
                }}
                className={`core-values-card relative rounded-[28px] p-7 sm:p-9 cursor-pointer select-none flex flex-col justify-start min-h-[220px] md:min-h-[420px] text-white ${val.bgClass} ${
                  isActive
                    ? `${val.shadowClass} ring-4 ring-black/10`
                    : 'shadow-[0_10px_25px_rgba(0,0,0,0.08)] opacity-95 hover:opacity-100'
                }`}
              >
                {/* Top Circle Icon with animated circular progress indicator on Active Card */}
                <div className="mb-7 flex items-center justify-between">
                  <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
                    {isActive ? (
                      <svg className="w-10 h-10 -rotate-90" viewBox="0 0 36 36">
                        <circle
                          cx="18"
                          cy="18"
                          r={circleRadius}
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.3)"
                          strokeWidth="2"
                        />
                        <circle
                          cx="18"
                          cy="18"
                          r={circleRadius}
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="2.5"
                          strokeDasharray={circumference}
                          strokeDashoffset={strokeDashoffset}
                          strokeLinecap="round"
                          className="transition-all duration-75 ease-linear"
                        />
                        <circle cx="18" cy="18" r="3" fill="#FFFFFF" />
                      </svg>
                    ) : (
                      <div className="w-9 h-9 rounded-full border-[1.5px] border-white/80 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full border-[1.5px] border-white/80" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Monospace Typewriter-Style Title matching reference image */}
                <h3
                  className="text-xl sm:text-2xl text-white font-normal leading-snug tracking-wider whitespace-pre-line mb-4 shrink-0"
                  style={{ fontFamily: "'Courier New', Courier, monospace" }}
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

        {/* Pagination Dots for Mobile / Quick Navigation */}
        <div className="flex items-center justify-center gap-2 mt-8 sm:mt-10">
          {values.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectCard(idx)}
              aria-label={`Show value ${idx + 1}`}
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
