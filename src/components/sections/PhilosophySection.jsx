'use client';

import Image from 'next/image';
import { ArrowRight, CheckCircle2, GitBranch, Layers, Sparkles } from 'lucide-react';
import { soundFx } from '@/utils/sound';

import Link from 'next/link';

export default function PhilosophySection({ t, openModal }) {
  const systemicConnections = [
    { symptom: 'A sales problem', root: 'may actually be an operations problem.' },
    { symptom: 'An employee problem', root: 'may actually be a KPI problem.' },
    { symptom: 'A cash-flow problem', root: 'may actually be a process problem.' },
    { symptom: 'A technology problem', root: 'may actually be a business-structure problem.' },
    { symptom: 'A growth problem', root: 'may actually be a management problem.' }
  ];

  return (
    <section id="philosophy" className="relative py-14 sm:py-28 bg-[#061233] border-t border-[#0084FF]/25 overflow-hidden">
      {/* CINEMATIC TYPOGRAPHIC BANNER (EXACT NATYA 'ART. ELEVATED.' FULL-BLEED SECTION) */}
      <div className="relative min-h-[300px] sm:min-h-[420px] md:h-[60vh] w-full overflow-hidden mb-14 sm:mb-24 flex items-center justify-center rounded-2xl sm:rounded-[2.5rem] max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-0">
        <div className="absolute inset-0 rounded-2xl sm:rounded-[2.5rem] overflow-hidden border border-[#0084FF]/40 bg-gradient-to-b from-[#091E58] via-[#081846] to-[#061233]">
          {/* PURE KINETIC ARCHITECTURAL MESH (WITHOUT RASTER BACKGROUND IMAGE) */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#0084FF]/35 via-[#38BDF8]/20 to-[#061233]/40 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061233] via-transparent to-[#061233]/80 pointer-events-none" />
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 space-y-3 sm:space-y-4">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-white font-bold px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#061233]/70 border border-[#0084FF]/40 backdrop-blur-md inline-block">
            THE SCALARK DOCTRINE
          </span>
          <h3 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-white drop-shadow-2xl">
            System. <span className="text-[#0084FF]">Engineered.</span>
          </h3>
          <p className="mt-2 sm:mt-4 text-xs sm:text-xl text-blue-100/90 font-medium tracking-tight max-w-xl mx-auto">
            Find the Problem. Fix the System. Scale the Business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* PURPOSE HEADER */}
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <h2 className="text-xs md:text-sm font-semibold tracking-widest uppercase text-blue-300 mb-3 sm:mb-4 font-mono">
            OUR PHILOSOPHY // SECTION 04
          </h2>
          <p className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white">
            The problem is usually not
          </p>
          <p className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-blue-200/60 mt-1 sm:mt-2">
            where you think it is.
          </p>
        </div>

        {/* 2 LARGE PURPOSE CARDS (EXACT NATYA PURPOSE SECTION AESTHETIC) */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-10 mb-12 sm:mb-16">
          {/* LEFT CARD: THE SYSTEMIC DILEMMA */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#091E58] to-[#061233] p-5 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-[#0084FF]/35 flex flex-col justify-between shadow-2xl group hover:border-[#0084FF] transition-all duration-300">
            <div className="relative z-10">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-[#0084FF]/20 border border-[#0084FF]/40 rounded-full flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-md">
                <GitBranch className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
              </div>
              <h4 className="text-xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-3 sm:mb-4">
                Beyond the Symptom.
              </h4>
              <p className="text-xs sm:text-base text-blue-100/80 leading-relaxed font-normal mb-5 sm:mb-8">
                Most consultants treat symptoms in silos. When sales drop, they hire sales trainers. When cash dries up, they seek loans. SCALARK examines the business as an interconnected system.
              </p>

              {/* LIST OF SYSTEMIC CONVERTED POINTS */}
              <div className="space-y-2.5 sm:space-y-3.5">
                {systemicConnections.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 sm:space-x-3 text-xs sm:text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] mt-1.5 sm:mt-2 shrink-0" />
                    <span>
                      <strong className="text-white font-medium">{item.symptom}</strong> {item.root}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[#0084FF]/20 flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-white font-bold">
                DIAGNOSTIC PRINCIPLE
              </span>
              <Link
                href="/about"
                className="text-blue-200 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <span>Read Philosophy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* RIGHT CARD: THE CONNECTED ORGANISM */}
          <div className="relative overflow-hidden bg-gradient-to-br from-[#091E58] to-[#061233] p-5 sm:p-10 rounded-2xl sm:rounded-[2.5rem] border border-[#0084FF]/35 flex flex-col justify-between shadow-2xl group hover:border-[#0084FF] transition-all duration-300">
            <div className="relative z-10">
              <div className="w-11 h-11 sm:w-14 sm:h-14 bg-[#0084FF]/20 border border-[#0084FF]/40 rounded-full flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-md">
                <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-blue-300" />
              </div>
              <h4 className="text-xl sm:text-3xl md:text-4xl font-medium tracking-tight text-white mb-3 sm:mb-4">
                The Connected System.
              </h4>
              <p className="text-xs sm:text-base text-blue-100/80 leading-relaxed font-normal mb-4 sm:mb-6">
                When all departments align under transparent KPIs, automated SOPs, and clear governance, the business scales predictably without owner exhaustion.
              </p>

              {/* 7-PIECE FEEDBACK CHAIN (FROM PDF) */}
              <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-[#061233]/80 border border-[#0084FF]/30 space-y-2 sm:space-y-3">
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-blue-300 font-bold block">
                  THE SCALARK OPERATING CYCLE
                </span>
                <div className="text-xs sm:text-base font-semibold text-white tracking-wide leading-relaxed">
                  Strategy → People → Sales → Operations → Finance → Technology → Performance
                </div>
                <p className="text-[11px] sm:text-xs text-blue-100/70 leading-relaxed pt-1">
                  We don't just ask "What is going wrong?" We ask "Why is it happening?" and "What needs to change so it doesn't keep happening?"
                </p>
              </div>
            </div>

            <div className="pt-6 sm:pt-8 mt-6 sm:mt-8 border-t border-[#0084FF]/20 flex items-center justify-between">
              <Link
                href="/solutions"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-2.5 bg-[#0084FF] text-white font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-[#0070E0] transition-all shadow-md active:scale-95"
              >
                <span>Explore Solutions →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

