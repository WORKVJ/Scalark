'use client';

import { Check } from 'lucide-react';
import { soundFx } from '@/utils/sound';

export default function WhyScalarkSection({ t }) {
  const pillars = [
    {
      title: 'BUSINESS THINKING',
      desc: 'We look at the commercial reality behind the problem. No theoretical textbook models that ignore market economics.',
      tag: 'Commercial Focus'
    },
    {
      title: 'OPERATIONAL THINKING',
      desc: 'We understand that a strategy must work inside the day-to-day business with your existing people and workflows.',
      tag: 'Practical Reality'
    },
    {
      title: 'TECHNOLOGY ARCHITECTURE',
      desc: 'We use technology where it improves visibility, efficiency, and control — never for the sake of complexity.',
      tag: 'Right-fit Tech'
    },
    {
      title: 'MEASUREMENT & KPIS',
      desc: 'We convert expectations into measurable daily, weekly, and monthly indicators so progress is undisputed.',
      tag: 'Radical Visibility'
    },
    {
      title: 'ACTIVE EXECUTION',
      desc: 'We focus on practical on-ground implementation — not just leaving you with a 50-page slide deck.',
      tag: 'Direct Practice'
    }
  ];

  return (
    <section id="why-scalark" className="py-28 md:py-36 bg-[#030303] border-t border-white/10">
      {/* GLOBAL COMMERCIAL HUBS BAR (NATYA PARTNERS TICKER STYLE) */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-24 pb-16 border-b border-white/5">
        <h4 className="text-xs sm:text-sm font-semibold text-zinc-500 uppercase tracking-widest mb-10 font-mono">
          Engineered for Global Enterprise Operations
        </h4>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 md:gap-24 text-lg sm:text-xl md:text-2xl font-bold tracking-wider text-zinc-400/90 font-mono">
          <span className="hover:text-white transition-colors cursor-pointer">DUBAI</span>
          <span className="text-zinc-700 font-light">/</span>
          <span className="hover:text-white transition-colors cursor-pointer">LONDON</span>
          <span className="text-zinc-700 font-light">/</span>
          <span className="hover:text-white transition-colors cursor-pointer">SINGAPORE</span>
          <span className="text-zinc-700 font-light">/</span>
          <span className="hover:text-white transition-colors cursor-pointer">MUMBAI</span>
          <span className="text-zinc-700 font-light">/</span>
          <span className="hover:text-white transition-colors cursor-pointer">RIYADH</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER (NATYA STYLE) */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4 block font-mono">
            SECTION 07 — WHY SCALARK?
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Advice Is Easy.
            <br />
            <span className="text-zinc-500">Execution Is Hard.</span>
          </h3>
          <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed">
            There is no shortage of consultants, accountants, software companies or agencies. SCALARK brings these disciplines together around one objective: Building a better business.
          </p>
        </div>

        {/* 5 CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#161618] to-[#09090b] border border-white/10 shadow-2xl flex flex-col justify-between hover:border-white/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs text-white font-bold px-3 py-1 rounded-full bg-zinc-200/10 border border-zinc-200/20">
                    0{idx + 1}
                  </span>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                    {pillar.tag}
                  </span>
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-white mb-3">
                  {pillar.title}
                </h4>

                <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center space-x-2 text-xs text-white font-medium">
                <Check className="w-4 h-4" />
                <span>SCALARK Execution Standard</span>
              </div>
            </div>
          ))}

          {/* SUMMARY CALLOUT CARD */}
          <div className="p-8 md:p-10 rounded-[2.5rem] bg-gradient-to-br from-[#12241d] to-[#09090b] border border-zinc-200/30 shadow-2xl flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-white font-bold block mb-4">
                THE OBJECTIVE
              </span>
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Building a Better Business.
              </h4>
              <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-normal">
                Connecting strategy, people, sales, operations, finance, and technology into a single, scalable operating engine.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-white/10">
              <span className="text-xs font-mono text-white font-semibold">Integrated Systems Practice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

