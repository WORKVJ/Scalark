'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2, GitBranch, Layers, Sparkles } from 'lucide-react';
import { soundFx } from '@/utils/sound';

export default function PhilosophySection({ t, openModal }) {
  const systemicConnections = [
    { symptom: 'A sales problem', root: 'may actually be an operations problem.' },
    { symptom: 'An employee problem', root: 'may actually be a KPI problem.' },
    { symptom: 'A cash-flow problem', root: 'may actually be a process problem.' },
    { symptom: 'A technology problem', root: 'may actually be a business-structure problem.' },
    { symptom: 'A growth problem', root: 'may actually be a management problem.' }
  ];

  return (
    <section id="philosophy" className="relative py-28 md:py-36 bg-black border-t border-white/10 overflow-hidden">
      {/* CINEMATIC TYPOGRAPHIC BANNER (EXACT NATYA 'ART. ELEVATED.' FULL-BLEED SECTION) */}
      <div className="relative h-[50vh] md:h-[70vh] w-full overflow-hidden mb-24 md:mb-32 flex items-center justify-center rounded-[2.5rem] max-w-7xl mx-auto px-6">
        <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-b from-zinc-950 via-black to-zinc-950">
          {/* PURE KINETIC ARCHITECTURAL MESH (WITHOUT RASTER BACKGROUND IMAGE) */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#FFFFFF]/20 via-[#003B73]/20 to-[#0F4C5C]/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80 pointer-events-none" />
        </div>

        <div className="relative z-10 text-center px-6 space-y-4">
          <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-white font-bold px-4 py-1.5 rounded-full bg-black/60 border border-white/30 backdrop-blur-md inline-block">
            THE SCALARK DOCTRINE
          </span>
          <h3 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white drop-shadow-2xl">
            System. <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">Engineered.</span>
          </h3>
          <p className="mt-4 text-base sm:text-2xl text-zinc-300 font-medium tracking-tight max-w-xl mx-auto">
            Find the Problem. Fix the System. Scale the Business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* PURPOSE HEADER */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-xs md:text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4 font-mono">
            OUR PHILOSOPHY // SECTION 04
          </h2>
          <p className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            The problem is usually not
          </p>
          <p className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-zinc-600 mt-2">
            where you think it is.
          </p>
        </div>

        {/* 2 LARGE PURPOSE CARDS (EXACT NATYA PURPOSE SECTION AESTHETIC) */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 mb-16">
          {/* LEFT CARD: THE SYSTEMIC DILEMMA */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#161618] to-[#09090b] p-8 md:p-12 rounded-[2.5rem] border border-white/10 flex flex-col justify-between shadow-2xl group hover:border-white/30 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                <GitBranch className="w-6 h-6 text-zinc-200" />
              </div>
              <h4 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                Beyond the Symptom.
              </h4>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal mb-8">
                Most consultants treat symptoms in silos. When sales drop, they hire sales trainers. When cash dries up, they seek loans. SCALARK examines the business as an interconnected system.
              </p>

              {/* LIST OF SYSTEMIC CONVERTED POINTS */}
              <div className="space-y-3.5">
                {systemicConnections.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <span>
                      <strong className="text-white font-medium">{item.symptom}</strong> {item.root}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                DIAGNOSTIC PRINCIPLE
              </span>
              <button
                onClick={() => {
                  soundFx.playClick();
                  openModal('about');
                }}
                className="text-zinc-400 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Read Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* RIGHT CARD: THE CONNECTED ORGANISM */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#161618] to-[#09090b] p-8 md:p-12 rounded-[2.5rem] border border-white/10 flex flex-col justify-between shadow-2xl group hover:border-white/30 transition-all duration-500">
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md">
                <Layers className="w-6 h-6 text-zinc-200" />
              </div>
              <h4 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">
                The Connected System.
              </h4>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-normal mb-6">
                When all departments align under transparent KPIs, automated SOPs, and clear governance, the business scales predictably without owner exhaustion.
              </p>

              {/* 7-PIECE FEEDBACK CHAIN (FROM PDF) */}
              <div className="p-6 rounded-2xl bg-black/70 border border-white/5 space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold block">
                  THE SCALARK OPERATING CYCLE
                </span>
                <div className="text-sm sm:text-base font-semibold text-white tracking-wide leading-relaxed">
                  Strategy → People → Sales → Operations → Finance → Technology → Performance
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pt-1">
                  We don't just ask "What is going wrong?" We ask "Why is it happening?" and "What needs to change so it doesn't keep happening?"
                </p>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => {
                  soundFx.playClick();
                  openModal('solutions');
                }}
                className="px-6 py-2.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-all shadow-md"
              >
                Explore 10 Solutions →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

