'use client';

import { useState } from 'react';
import Image from 'next/image';
import { HOW_WE_WORK_STEPS } from '@/data/contentData';
import { ArrowUpRight, CheckCircle2, Globe, ChevronsRight, ShieldCheck, MapPin, Building } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function HowWeWorkSection({ t }) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = HOW_WE_WORK_STEPS[activeStepIdx];

  const hubs = [
    { city: 'DUBAI', region: 'UAE HQ Advisory', flag: '🇦🇪', status: 'Live Ops' },
    { city: 'LONDON', region: 'UK & Europe Desk', flag: '🇬🇧', status: 'Active' },
    { city: 'SINGAPORE', region: 'APAC Operations', flag: '🇸🇬', status: 'Active' },
    { city: 'RIYADH', region: 'KSA Expansion', flag: '🇸🇦', status: 'Live Ops' }
  ];

  return (
    <section id="framework" className="py-24 sm:py-32 px-6 bg-[#070A12] text-white overflow-hidden relative">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[550px] h-[550px] bg-[#003B73]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-16 relative z-10">
        
        {/* SIGNATURE STADIUM CARD */}
        <ScrollReveal direction="up" distance={45} duration={800}>
          <div className="rounded-[40px] sm:rounded-stadium bg-gradient-to-b from-[#0F1424]/90 via-[#0B0F1A]/95 to-[#070A13] p-8 sm:p-12 md:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-white/12 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* LEFT: ARCH-CROPPED VISUAL WITH OVERLAPPING 3D LOGO BADGE */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[360px] h-[400px] sm:h-[480px] rounded-t-full rounded-b-3xl overflow-hidden border-2 border-white/20 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-black">
                <Image
                  src="/assets/hero-boardroom.jpg"
                  alt="SCALARK Enterprise Advisory Boardroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* OVERLAPPING 3D LOGO BADGE */}
              <div className="absolute -bottom-4 right-4 sm:right-6 bg-gradient-to-b from-[#18132B] to-[#0E0C1B] text-white p-4 sm:p-5 rounded-3xl shadow-[0_15px_35px_rgba(139,92,246,0.45)] border-2 border-[#8B5CF6]/50 flex items-center gap-3 transform hover:scale-105 transition-transform duration-300">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#8B5CF6] flex items-center justify-center text-white shadow-md">
                  <ChevronsRight className="w-6 h-6 stroke-[3]" />
                </div>
                <div>
                  <div className="text-[10px] font-mono font-black uppercase tracking-wider text-[#A78BFA]">Verified System</div>
                  <div className="text-sm font-black text-white font-sans">SCALARK 2026</div>
                </div>
              </div>
            </div>

            {/* RIGHT: EDITORIAL & INTERACTIVE 5-PHASE STEPS */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="font-handwritten text-2xl text-[#8B5CF6] font-bold">
                  — How we build your system
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight font-sans">
                  Turning Operational Chaos Into <span className="text-[#8B5CF6]">Predictability.</span>
                </h2>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal">
                  We don't hand over a PowerPoint deck and walk away. Our team embeds within your business to document SOPs, train teams, and implement measurable governance.
                </p>
              </div>

              {/* 5 HORIZONTAL PILL BUTTONS */}
              <div className="flex flex-wrap gap-2 pt-2">
                {HOW_WE_WORK_STEPS.map((step, idx) => {
                  const isActive = activeStepIdx === idx;
                  return (
                    <button
                      key={step.step}
                      onClick={() => setActiveStepIdx(idx)}
                      className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white shadow-[0_4px_20px_rgba(139,92,246,0.5)] scale-105 border border-white/20'
                          : 'bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {step.step}. {step.title}
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE STEP CARD CONTAINER */}
              <div className="rounded-3xl bg-[#13192B]/90 backdrop-blur-xl p-7 sm:p-9 shadow-2xl border border-white/10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-tech text-xs font-black uppercase tracking-widest text-[#A78BFA] bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 px-3.5 py-1 rounded-full">
                    PHASE {activeStep.step} • {activeStep.title}
                  </span>
                  <span className="text-xs font-tech font-bold text-zinc-400">Step {activeStep.step} of 05</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight font-sans">
                  {activeStep.subtitle}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {activeStep.description}
                </p>

                <div className="pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeStep.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center space-x-2.5 text-xs text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 stroke-[2.5]" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

        {/* 2X2 REGIONAL / HUBS DARK GRID */}
        <ScrollReveal direction="up" distance={40} delay={150}>
          <div className="rounded-3xl bg-[#0E1321] text-white p-8 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 card-sheen">
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs font-tech font-black uppercase tracking-widest text-[#A78BFA] bg-[#8B5CF6]/20 px-3 py-1 rounded-full border border-[#8B5CF6]/30 inline-block">
                GLOBAL PRESENCE
              </span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight font-sans">
                Advising Across Major Commerce Hubs.
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                Serving fast-growing businesses, founders, and enterprises across the Middle East, UK, Europe, and Asia.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {hubs.map((hub, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#141A2D]/80 border border-white/10 text-center space-y-1.5 hover:border-[#8B5CF6]/50 transition-all group">
                  <div className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-[#A78BFA] transition-colors">{hub.city}</div>
                  <div className="text-[10px] uppercase font-tech text-zinc-400 font-bold">{hub.region}</div>
                  <div className="pt-1 flex items-center justify-center gap-1.5 text-[10px] text-zinc-300 font-tech">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>{hub.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
