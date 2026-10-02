'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Search, 
  PencilRuler, 
  Wrench, 
  ShieldCheck, 
  Rocket, 
  CheckCircle2
} from 'lucide-react';

export default function HomeFrameworkPreview() {
  const [activePhase, setActivePhase] = useState(0);

  const steps = [
    { 
      num: '01', 
      title: 'Diagnose', 
      tagline: 'Root-Cause Discovery',
      desc: 'Deep-dive analysis uncovering hidden bottlenecks across sales velocity, working capital, and founder operational load.',
      deliverable: 'Diagnostic Scorecard & Friction Map',
      icon: Search 
    },
    { 
      num: '02', 
      title: 'Design', 
      tagline: 'Systems Engineering',
      desc: 'Architecting custom operating procedures, KPI scoreboards, and multi-tier delegation matrices for every department.',
      deliverable: 'Institutional Blueprint & SOP Library',
      icon: PencilRuler 
    },
    { 
      num: '03', 
      title: 'Deploy', 
      tagline: 'Execution & Adoption',
      desc: 'Embedding directly inside your operations to install workflows, train department heads, and eliminate execution friction.',
      deliverable: 'Embedded Workflow Activation',
      icon: Wrench 
    },
    { 
      num: '04', 
      title: 'Govern', 
      tagline: 'Autonomous Cadence',
      desc: 'Establishing strict weekly executive rhythms, automated reporting dashboards, and real-time compliance safeguards.',
      deliverable: 'Management Cadence & Risk Controls',
      icon: ShieldCheck 
    },
    { 
      num: '05', 
      title: 'Scale', 
      tagline: 'Exponential Expansion',
      desc: 'Expanding new divisions, products, and regional markets with zero proportional increase in founder working hours.',
      deliverable: 'Self-Sustaining Growth Engine',
      icon: Rocket 
    }
  ];

  return (
    <section className="py-14 sm:py-32 px-4 sm:px-6 bg-white border-y border-zinc-200 relative overflow-hidden">
      {/* SOFT AMBIENT LIGHT GLOWS */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-100/60 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-100/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#0084FF] font-bold mb-3 sm:mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] animate-pulse" />
            <span>SECTION 04 — HOW WE WORK</span>
          </div>
          <h2 className="text-2xl sm:text-5xl font-black text-zinc-950 tracking-tight leading-tight">
            The 5-Phase Architecture Framework
          </h2>
          <p className="mt-3 sm:mt-4 text-zinc-600 text-xs sm:text-base leading-relaxed">
            From uncovering invisible bottlenecks to establishing self-operating institutional governance.
          </p>
        </div>

        {/* 2-COLUMN ARCHITECTURAL SHOWCASE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 sm:mb-16">
          
          {/* LEFT: SCALARK ARCHITECTURAL LOGO DISPLAY */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[480px] rounded-2xl sm:rounded-3xl bg-white border border-zinc-200 p-5 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.07)] group overflow-hidden">
              
              {/* Subtle architectural grid pattern */}
              <div 
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(rgba(0,0,0,0.4) 1px, transparent 1px)`,
                  backgroundSize: '24px 24px'
                }}
              />

              {/* CARD TOP BAR */}
              <div className="relative z-10 flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    SYSTEM EMBLEM ACTIVE
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 font-semibold">
                  REF // ARCH-05
                </span>
              </div>

              {/* SCALARK LOGO WITH MASKED CITYSCAPE (MATCHING REFERENCE ON WHITE) */}
              <div className="relative z-10 w-full aspect-square max-w-[260px] sm:max-w-[340px] mx-auto flex items-center justify-center my-2">
                {/* Soft Backlight Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/40 to-blue-100/40 rounded-full blur-2xl scale-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none" />
                
                {/* Primary Masked City Logo Image */}
                <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/assets/scalark-logo-city-exact-shadow.png"
                    alt="SCALARK Institutional Architecture Logo Mark"
                    fill
                    sizes="(max-width: 768px) 260px, 400px"
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* EMBLEM METADATA BADGE */}
              <div className="relative z-10 pt-4 mt-2 border-t border-zinc-100">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-zinc-950 tracking-wide">
                      SCALARK ARCHITECTURE
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-0.5">
                      Civil infrastructure model for enterprises
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-mono font-black text-[#0084FF]">
                      5-PHASE RUNTIME
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 font-semibold">
                      100% AUTONOMOUS
                    </div>
                  </div>
                </div>
              </div>

              {/* PHASE QUICK SELECTOR PILLS */}
              <div className="relative z-10 mt-5 pt-4 border-t border-zinc-100 flex items-center justify-between gap-1.5">
                {steps.map((s, idx) => (
                  <button
                    key={s.num}
                    onClick={() => setActivePhase(idx)}
                    className={`flex-1 py-1.5 px-1 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-all text-center ${
                      activePhase === idx 
                        ? 'bg-[#0084FF] text-white shadow-md shadow-blue-500/25 scale-105' 
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200/80 hover:text-zinc-950'
                    }`}
                  >
                    P{s.num}
                  </button>
                ))}
              </div>

            </div>
          </div>

          {/* RIGHT: THE 5 PHASES TIMELINE */}
          <div className="lg:col-span-7 space-y-3.5">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activePhase === idx;

              return (
                <div
                  key={s.num}
                  onClick={() => setActivePhase(idx)}
                  className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50/90 via-white to-blue-50/50 border-[#0084FF]/50 shadow-[0_12px_32px_rgba(0,132,255,0.14)] scale-[1.01]'
                      : 'bg-white border-zinc-200/90 hover:border-zinc-300 hover:bg-zinc-50/60 shadow-sm'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Phase Number & Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all ${
                      isActive
                        ? 'bg-[#0084FF] text-white shadow-md shadow-blue-600/30'
                        : 'bg-zinc-100 border border-zinc-200/80 text-zinc-600'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Phase Details */}
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className={`text-xs font-mono font-black ${
                          isActive ? 'text-[#0084FF]' : 'text-zinc-500'
                        }`}>
                          PHASE {s.num}
                        </span>
                        <span className="text-zinc-300">•</span>
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                          {s.tagline}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-zinc-950">
                        {s.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed max-w-xl">
                        {s.desc}
                      </p>
                      
                      {/* Deliverable Badge */}
                      <div className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-mono text-zinc-500">
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-600' : 'text-zinc-400'}`} />
                        <span>Deliverable: <strong className="text-zinc-900 font-semibold">{s.deliverable}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div className="hidden sm:block shrink-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[#0084FF] text-white translate-x-1 shadow-sm'
                        : 'text-zinc-400 bg-zinc-100'
                    }`}>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
          <Link
            href="/how-we-work"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#0084FF] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0070E0] transition-all duration-200 shadow-xl active:scale-95"
          >
            <span>Explore Full 5-Phase Methodology</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
          
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white border border-zinc-300 text-zinc-900 font-bold text-xs uppercase tracking-wider hover:bg-zinc-50 hover:border-zinc-400 transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>Schedule Architecture Call</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
