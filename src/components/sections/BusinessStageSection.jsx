'use client';

import { useState } from 'react';
import { BUSINESS_STAGES } from '@/data/contentData';
import { soundFx } from '@/utils/sound';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import Link from 'next/link';

export default function BusinessStageSection({ t }) {
  const [activeStageId, setActiveStageId] = useState('growing');

  const activeStage = BUSINESS_STAGES.find((s) => s.id === activeStageId) || BUSINESS_STAGES[0];

  const handleStageSelect = (id) => {
    soundFx.playClick();
    setActiveStageId(id);
  };

  return (
    <section id="business-stage" className="py-14 sm:py-28 px-4 sm:px-6 bg-[#061233] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER (NATYA STYLE) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-blue-300 mb-3 sm:mb-4 block font-mono">
            SECTION 03 — BUSINESS STAGES
          </span>
          <h3 className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-4 sm:mb-6">
            Where Is Your Business Right Now?
          </h3>
          <p className="text-xs sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Every business needs a different kind of support. Choose the stage that best describes you.
          </p>
        </div>

        {/* HORIZONTAL CAPSULE SELECTOR (NATYA CAPSULE TABS) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12">
          {BUSINESS_STAGES.map((stage) => {
            const isActive = activeStage.id === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => handleStageSelect(stage.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-3.5 sm:px-6 py-2 sm:py-3 rounded-full text-[11px] sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-[#0E37A4] text-white shadow-xl scale-105 border border-[#0E37A4]'
                    : 'bg-[#091E58]/80 text-zinc-300 hover:text-white hover:bg-[#0E37A4]/50 border border-white/10'
                }`}
              >
                <span>{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STAGE SPOTLIGHT CARD (NATYA CARD CONTAINER) */}
        <div className="rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#091E58] to-[#061233] border border-[#0E37A4]/40 p-5 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-4 sm:space-y-6">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-white font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 border border-white/20">
                  {activeStage.badge}
                </span>
                <span className="text-blue-300 text-[11px] sm:text-xs font-mono">• Targeted Stage Architecture</span>
              </div>

              <h4 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
                {activeStage.headline}
              </h4>

              <p className="text-sm sm:text-xl text-zinc-200 leading-relaxed font-normal">
                {activeStage.summary}
              </p>

              <p className="text-xs sm:text-base text-zinc-300 leading-relaxed">
                {activeStage.detail}
              </p>

              <div className="pt-2 sm:pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-all shadow-xl active:scale-95"
                >
                  {activeStage.cta}
                </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: CORE METRICS */}
            <div className="lg:col-span-4 p-5 sm:p-8 rounded-xl sm:rounded-[2rem] bg-[#061233]/70 border border-[#0E37A4]/30 space-y-3 sm:space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-2 sm:mb-4">
                KEY FOCUS AREAS
              </span>
              <div className="space-y-2.5 sm:space-y-3">
                {activeStage.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 sm:space-x-3 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                    <span className="font-medium">{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

