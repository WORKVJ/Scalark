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
    <section id="framework" className="py-14 sm:py-32 px-4 sm:px-6 bg-[#061233] text-white overflow-hidden relative">
      {/* AMBIENT BACKGROUND GLOWS */}
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-[#0E37A4]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 -left-32 w-[550px] h-[550px] bg-[#1D56E8]/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-16 relative z-10">
        
        {/* SIGNATURE STADIUM CARD */}
        <ScrollReveal direction="up" distance={45} duration={800}>
          <div className="rounded-2xl sm:rounded-stadium bg-gradient-to-b from-[#091E58]/90 via-[#081846]/95 to-[#061233] p-5 sm:p-12 md:p-16 shadow-[0_30px_90px_rgba(0,0,0,0.85)] border border-[#0E37A4]/35 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            
            {/* LEFT: ARCH-CROPPED VISUAL WITH OVERLAPPING 3D LOGO BADGE */}
            <div className="lg:col-span-5 relative flex justify-center pb-4 sm:pb-0">
              <div className="relative w-full max-w-[280px] sm:max-w-[360px] h-[280px] sm:h-[480px] rounded-t-full rounded-b-2xl sm:rounded-b-3xl overflow-hidden border-2 border-[#0E37A4]/30 shadow-[0_25px_60px_rgba(0,0,0,0.8)] bg-[#061233]">
                <Image
                  src="/assets/hero-boardroom.jpg"
                  alt="SCALARK Enterprise Advisory Boardroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061233]/90 via-[#061233]/30 to-transparent" />
              </div>

              {/* OVERLAPPING 3D LOGO BADGE */}
              <div className="absolute -bottom-2 right-2 sm:right-6 bg-gradient-to-b from-[#0E37A4] to-[#081B4E] text-white p-3 sm:p-5 rounded-2xl sm:rounded-3xl shadow-[0_15px_35px_rgba(14,55,164,0.45)] border-2 border-[#0E37A4]/60 flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#1D56E8] to-[#0E37A4] flex items-center justify-center text-white shadow-md shrink-0">
                  <ChevronsRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-wider text-blue-200">Verified System</div>
                  <div className="text-xs sm:text-sm font-black text-white font-sans">SCALARK 2026</div>
                </div>
              </div>
            </div>

            {/* RIGHT: EDITORIAL & INTERACTIVE 5-PHASE STEPS */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="space-y-2">
                <div className="font-handwritten text-xl sm:text-2xl text-blue-300 font-bold">
                  — How we build your system
                </div>
                <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white leading-tight font-sans">
                  Turning Operational Chaos Into <span className="text-[#0E37A4]">Predictability.</span>
                </h2>
                <p className="text-xs sm:text-base text-blue-100/80 leading-relaxed max-w-xl font-normal">
                  We don't hand over a PowerPoint deck and walk away. Our team embeds within your business to document SOPs, train teams, and implement measurable governance.
                </p>
              </div>

              {/* 5 HORIZONTAL PILL BUTTONS */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2">
                {HOW_WE_WORK_STEPS.map((step, idx) => {
                  const isActive = activeStepIdx === idx;
                  return (
                    <button
                      key={step.step}
                      onClick={() => setActiveStepIdx(idx)}
                      className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 ${
                        isActive
                          ? 'bg-[#0E37A4] text-white shadow-[0_4px_20px_rgba(14,55,164,0.5)] scale-105 border border-[#0E37A4]'
                          : 'bg-[#081B4E]/60 text-blue-200 hover:text-white hover:bg-[#081B4E] border border-[#0E37A4]/30'
                      }`}
                    >
                      {step.step}. {step.title}
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE STEP CARD CONTAINER */}
              <div className="rounded-2xl sm:rounded-3xl bg-[#081B4E]/90 backdrop-blur-xl p-5 sm:p-9 shadow-2xl border border-[#0E37A4]/40 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-tech text-[10px] sm:text-xs font-black uppercase tracking-widest text-blue-300 bg-[#0E37A4]/25 border border-[#0E37A4]/40 px-3 sm:px-3.5 py-1 rounded-full">
                    PHASE {activeStep.step} • {activeStep.title}
                  </span>
                  <span className="text-[11px] sm:text-xs font-tech font-bold text-zinc-400">Step {activeStep.step} of 05</span>
                </div>

                <h3 className="text-lg sm:text-2xl font-black text-white tracking-tight font-sans">
                  {activeStep.subtitle}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                  {activeStep.description}
                </p>

                <div className="pt-3 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                  {activeStep.deliverables.map((del, i) => (
                    <div key={i} className="flex items-center space-x-2.5 text-xs text-zinc-200">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981] shrink-0 stroke-[2.5]" />
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
          <div className="rounded-2xl sm:rounded-3xl bg-[#081B4E] text-white p-5 sm:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center border border-[#0E37A4]/30 card-sheen">
            <div className="lg:col-span-5 space-y-2 sm:space-y-3">
              <span className="text-[10px] sm:text-xs font-tech font-black uppercase tracking-widest text-blue-300 bg-[#0E37A4]/25 px-3 py-1 rounded-full border border-[#0E37A4]/40 inline-block">
                GLOBAL PRESENCE
              </span>
              <h3 className="text-xl sm:text-4xl font-black tracking-tight text-white leading-tight font-sans">
                Advising Across Major Commerce Hubs.
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/70 leading-relaxed font-normal">
                Serving fast-growing businesses, founders, and enterprises across the Middle East, UK, Europe, and Asia.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {hubs.map((hub, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-[#061233]/80 border border-[#0E37A4]/30 text-center space-y-1 hover:border-[#0E37A4] hover:bg-[#061233] transition-all group">
                  <div className="text-lg sm:text-2xl font-black text-white tracking-tight group-hover:text-blue-300 transition-colors">{hub.city}</div>
                  <div className="text-[9px] sm:text-[10px] uppercase font-tech text-zinc-400 font-bold">{hub.region}</div>
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
