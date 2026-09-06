'use client';

import { useState } from 'react';
import { BUSINESS_STAGES } from '@/data/contentData';
import { soundFx } from '@/utils/sound';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function BusinessStageSection({ t }) {
  const [activeStageId, setActiveStageId] = useState('growing');

  const activeStage = BUSINESS_STAGES.find((s) => s.id === activeStageId) || BUSINESS_STAGES[0];

  const handleStageSelect = (id) => {
    soundFx.playClick();
    setActiveStageId(id);
  };

  const scrollToContactWithStage = (stageName) => {
    soundFx.playClick();
    const el = document.getElementById('contact-diagnosis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('prefill-stage', { detail: stageName }));
    }
  };

  return (
    <section id="business-stage" className="py-28 md:py-36 px-6 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER (NATYA STYLE) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4 block font-mono">
            SECTION 03 — BUSINESS STAGES
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Where Is Your Business Right Now?
          </h3>
          <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed">
            Every business needs a different kind of support. Choose the stage that best describes you.
          </p>
        </div>

        {/* HORIZONTAL CAPSULE SELECTOR (NATYA CAPSULE TABS) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {BUSINESS_STAGES.map((stage) => {
            const isActive = activeStage.id === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => handleStageSelect(stage.id)}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-6 py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'bg-white text-black shadow-xl scale-105'
                    : 'bg-zinc-900/80 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-white/10'
                }`}
              >
                <span>{stage.title}</span>
              </button>
            );
          })}
        </div>

        {/* ACTIVE STAGE SPOTLIGHT CARD (NATYA CARD CONTAINER) */}
        <div className="rounded-[2.5rem] bg-gradient-to-br from-[#151515] to-[#0a0a0a] border border-white/10 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs uppercase tracking-widest text-white font-bold px-3 py-1 rounded-full bg-zinc-200/10 border border-zinc-200/20">
                  {activeStage.badge}
                </span>
                <span className="text-zinc-500 text-xs font-mono">• Targeted Stage Architecture</span>
              </div>

              <h4 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
                {activeStage.headline}
              </h4>

              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed font-normal">
                {activeStage.summary}
              </p>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {activeStage.detail}
              </p>

              <div className="pt-4">
                <button
                  onClick={() => scrollToContactWithStage(activeStage.title)}
                  className="px-8 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-all shadow-xl hover:scale-105"
                >
                  {activeStage.cta}
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: CORE METRICS */}
            <div className="lg:col-span-4 p-8 rounded-[2rem] bg-black/60 border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-4">
                KEY FOCUS AREAS
              </span>
              <div className="space-y-3">
                {activeStage.metrics.map((metric, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-zinc-200">
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

