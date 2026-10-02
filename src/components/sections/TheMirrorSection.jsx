'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Award, Clock, DollarSign, TrendingDown, Users, CheckCircle, ShieldAlert, AlertTriangle, ArrowRight } from 'lucide-react';
import AnimatedCounter from '@/components/common/AnimatedCounter';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function TheMirrorSection({ t }) {
  const [activeCard, setActiveCard] = useState(0);

  const painCards = [
    {
      num: '01',
      icon: Clock,
      title: '“Everything comes back to me.”',
      body: 'Employees need approval for every minor task. You are constantly fighting operational fires, chasing payments, and managing details. The business stalls the moment you step away.',
      symptom: 'Owner Bottleneck',
      riskTag: 'High Risk: Growth Ceiled',
      frictionLevel: '94% Owner Lock',
      frictionPercent: '94%',
      rootCause: 'Absence of delegated authority matrices and documented operational SOPs.'
    },
    {
      num: '02',
      icon: TrendingDown,
      title: '“Our sales team is busy, but where is the revenue?”',
      body: 'Leads arrive and quotations go out, but conversion rates remain unpredictable, erratic, and disconnected from the amount of effort spent by the sales team.',
      symptom: 'Unpredictable Revenue',
      riskTag: 'Active Funnel Leakage',
      frictionLevel: '82% Pipeline Drag',
      frictionPercent: '82%',
      rootCause: 'Broken qualification funnels and missing sales pipeline governance.'
    },
    {
      num: '03',
      icon: Users,
      title: '“We have employees, but we don\'t have a system.”',
      body: 'People work hard every day, but priorities are blurry. There are no measurable KPIs, clear ownership boundaries, or structured reporting cadences.',
      symptom: 'Role Ambiguity',
      riskTag: 'Zero Accountability Cadence',
      frictionLevel: '78% Execution Friction',
      frictionPercent: '78%',
      rootCause: 'Undefined performance metrics and missing departmental milestones.'
    },
    {
      num: '04',
      icon: DollarSign,
      title: '“I don\'t really know where my money is going.”',
      body: 'Revenue looks respectable on paper, but cash flow, unexpected overheads, and delayed reporting create constant financial blindspots.',
      symptom: 'Financial Blindspots',
      riskTag: 'Margin Vulnerability',
      frictionLevel: '89% Capital Blindspot',
      frictionPercent: '89%',
      rootCause: 'Lack of real-time unit economics and management accounting visibility.'
    }
  ];

  const scrollToDiagnostic = () => {
    const el = document.getElementById('contact-diagnosis');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="the-mirror" className="relative py-14 sm:py-32 bg-[#F5F5F7] text-black overflow-hidden">
      
      {/* 1. GROWMEDLINK SIGNATURE OVERLAPPING STAT CAPSULE BANNER WITH ANIMATED COUNTERS */}
      <ScrollReveal direction="up" distance={45} duration={800} className="max-w-5xl mx-auto px-4 sm:px-6 mb-14 sm:mb-24">
        <div className="relative rounded-2xl sm:rounded-[2.5rem] bg-[#FFFFFF] p-5 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 border-2 sm:border-4 border-white ring-1 ring-black/5">
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] rounded-2xl sm:rounded-[2.5rem] pointer-events-none" />

          {/* LEFT STAT */}
          <div className="text-center md:text-left space-y-1 relative z-10">
            <div className="text-3xl sm:text-5xl font-black text-black tracking-tight font-tech">
              <AnimatedCounter end={100} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-black font-sans">
              Systems Engineered
            </div>
            <p className="text-xs text-black/80 max-w-[200px] font-medium mx-auto md:mx-0">
              Replacing intuitive guesswork across UAE, UK, Singapore & India
            </p>
          </div>

          {/* ELEVATED 3D OVERLAPPING CENTER CARD */}
          <div className="relative md:-my-18 z-20 w-full md:w-auto min-w-0 md:min-w-[320px] rounded-2xl sm:rounded-3xl bg-[#081B4E] text-white p-5 sm:p-8 shadow-[0_30px_70px_rgba(4,14,46,0.6)] border-2 border-[#0084FF]/50 text-center transform hover:scale-105 transition-all duration-300 card-sheen">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#0084FF]/20 border-2 border-[#0084FF] text-[#0084FF] flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-[0_0_20px_rgba(0,132,255,0.4)]">
              <Award className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
            </div>
            <div className="text-3xl sm:text-5xl font-black text-white tracking-tight font-tech mb-1">
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-[#0084FF] mb-2 font-tech">
              Predictability Rate
            </div>
            <p className="text-xs text-zinc-300 leading-relaxed font-medium">
              First-Attempt Systems Operationalization without operational downtime.
            </p>
          </div>

          {/* RIGHT STAT */}
          <div className="text-center md:text-right space-y-1 relative z-10">
            <div className="text-4xl sm:text-5xl font-black text-black tracking-tight font-tech">
              <AnimatedCounter end={65} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-black font-sans">
              Owner Time Recovered
            </div>
            <p className="text-xs text-black/80 max-w-[200px] md:ml-auto font-medium">
              Freed from tactical firefighting to drive strategic expansion
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* 2 & 3. CONCAVE BENTO GRID (EXACTLY MATCHING REFERENCE IMAGE) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_1fr] gap-4 sm:gap-5 items-stretch">
          
          {/* CENTER HEADER (DESKTOP: ROW 1, COLS 2-3 | MOBILE/MD: TOP FULL WIDTH) */}
          <div className="col-span-1 md:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:self-end lg:pb-8 text-center mb-8 lg:mb-0">
            <ScrollReveal direction="up" distance={25} delay={50}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-mono font-bold text-[#0084FF] mb-3">
                <span>THE OPERATIONAL MIRROR</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-black leading-[1.15] font-sans">
                Business Bottlenecks,{' '}
                <span className="relative inline-block px-3 sm:px-4 py-0.5 rounded-full bg-blue-100/90 text-[#0084FF] font-black">
                  Made Obvious
                </span>
              </h2>
              <div className="mt-3 flex flex-col items-center">
                <p className="text-xs sm:text-base text-zinc-600 max-w-md mx-auto font-medium leading-relaxed">
                  Operational friction is not accidental. It is systematic. Here is how underlying constraints hold back ambitious companies.
                </p>
                {/* DELICATE WAVY SQUIGGLE ACCENT UNDERLINE */}
                <svg className="w-20 h-3 text-[#0084FF] mt-2.5" viewBox="0 0 80 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 6 Q 12 1, 22 6 T 42 6 T 62 6 T 78 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
            </ScrollReveal>
          </div>

          {/* CARD 01: TALL DARK CARD (DESKTOP: COL 1, ROWS 1-2) */}
          <div className="col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-2 flex flex-col h-full">
            <ScrollReveal direction="up" distance={35} delay={100} className="h-full flex flex-col">
              <div className="h-full relative rounded-[28px] sm:rounded-[32px] bg-[#071330] text-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 group min-h-[480px]">
                
                {/* 3D DARK FLUID RIPPLE TEXTURE SVG */}
                <div className="absolute inset-0 pointer-events-none opacity-25">
                  <svg className="w-full h-full object-cover" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-50,200 C100,280 250,150 450,280 C350,420 150,380 -50,550 Z" fill="url(#darkWave)" />
                    <path d="M-100,100 C150,120 200,320 500,220 C420,380 280,480 -80,480 Z" stroke="rgba(255,255,255,0.08)" strokeWidth="1.5" />
                    <path d="M-80,150 C170,170 220,370 520,270" stroke="rgba(0,132,255,0.2)" strokeWidth="2" />
                    <path d="M-60,200 C190,220 240,420 540,320" stroke="rgba(56,189,248,0.15)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="darkWave" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0084FF" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#061233" stopOpacity="0.8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="relative z-10">
                  {/* NUMBER BADGE (1) */}
                  <div className="w-9 h-9 rounded-full bg-white text-[#071330] font-black text-sm flex items-center justify-center shadow-lg mb-4">
                    1
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-300 bg-white/10 border border-white/15 px-2.5 py-1 rounded-full inline-block mb-3">
                    01 • Owner Bottleneck
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-3 font-sans">
                    “Everything comes back to me.”
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    Employees need approval for every minor task. You are constantly fighting operational fires while the business stalls the moment you step away.
                  </p>
                </div>

                <div className="relative z-10 pt-5 mt-5 border-t border-white/10 space-y-3">
                  <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10">
                    <div className="flex items-center justify-between text-[10px] font-tech font-bold uppercase tracking-wider mb-1.5">
                      <span className="text-zinc-400">Operational Drag</span>
                      <span className="text-[#38BDF8] font-black flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] animate-ping" />
                        94% Owner Lock
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-black/40 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#0084FF] to-[#38BDF8] rounded-full w-[94%]" />
                    </div>
                  </div>
                  <div className="text-[11px] font-medium text-zinc-400 leading-tight">
                    <span className="text-sky-300 font-bold">Likely Root Cause:</span> Absence of delegated authority matrices & SOPs.
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* CARD 02: SHORT LIGHT CARD (DESKTOP: COL 2, ROW 2) */}
          <div className="col-span-1 lg:col-start-2 lg:row-start-2 flex flex-col h-full">
            <ScrollReveal direction="up" distance={35} delay={160} className="h-full flex flex-col">
              <div className="h-full relative rounded-[28px] sm:rounded-[32px] bg-white text-black p-6 sm:p-7 flex flex-col justify-between shadow-xl border border-zinc-200/90 hover:border-[#0084FF]/40 transition-all min-h-[290px]">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    {/* NUMBER BADGE (2) */}
                    <div className="w-8 h-8 rounded-full bg-black text-white font-black text-xs flex items-center justify-center shadow-md">
                      2
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded-full border border-zinc-200">
                      02 • Revenue Drag
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-black tracking-tight leading-snug mb-2 font-sans">
                    “Our sales team is busy, but where is the revenue?”
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                    Leads arrive and quotations go out, but conversion rates remain unpredictable and disconnected from sales effort.
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-zinc-500 font-semibold">82% Pipeline Drag</span>
                  <span className="text-[#0084FF] font-bold">Missing Funnel Governance</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* CARD 03: SHORT 3D FLUID WAVE GRAPHIC CARD (DESKTOP: COL 3, ROW 2) */}
          <div className="col-span-1 lg:col-start-3 lg:row-start-2 flex flex-col h-full">
            <ScrollReveal direction="up" distance={35} delay={220} className="h-full flex flex-col">
              <div 
                onClick={scrollToDiagnostic}
                className="h-full relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#0A39A2] text-white p-6 sm:p-7 flex flex-col justify-between shadow-xl overflow-hidden group min-h-[290px] hover:shadow-2xl transition-all cursor-pointer"
              >
                
                {/* 3D FLUID WAVE RIBBON BACKGROUND SVG */}
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <svg className="w-full h-full object-cover" viewBox="0 0 350 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-20,120 C80,40 180,180 370,80 C310,210 160,230 -20,240 Z" fill="url(#waveRibbon)" />
                    <path d="M0,100 C100,20 200,160 380,60" stroke="rgba(255,255,255,0.4)" strokeWidth="3" />
                    <path d="M-10,130 C90,50 190,190 370,90" stroke="rgba(56,189,248,0.6)" strokeWidth="2.5" />
                    <path d="M-20,160 C80,80 180,220 360,120" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="waveRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" />
                        <stop offset="100%" stopColor="#082B7A" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="relative z-10 flex items-start justify-between gap-3">
                  {/* NUMBER BADGE (3) */}
                  <div className="w-8 h-8 rounded-full bg-white text-[#0284C7] font-black text-xs flex items-center justify-center shadow-lg">
                    3
                  </div>

                  {/* CIRCULAR GLASS ARROW BUTTON MATCHING REFERENCE IMAGE */}
                  <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:bg-white group-hover:text-[#0284C7] transition-all">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                <div className="relative z-10 mt-auto pt-4">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-200 bg-white/15 px-2.5 py-0.5 rounded-full inline-block mb-1.5 backdrop-blur-sm">
                    03 • Role Ambiguity
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white tracking-tight leading-snug mb-1 font-sans">
                    “We have employees, but no system.”
                  </h3>
                  <p className="text-[11px] sm:text-xs text-blue-100/85 leading-relaxed font-normal">
                    Priorities remain blurry with zero accountability cadence or structured KPI milestones.
                  </p>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* CARD 04: TALL VIBRANT ACCENT CARD (DESKTOP: COL 4, ROWS 1-2) */}
          <div className="col-span-1 lg:col-start-4 lg:row-start-1 lg:row-span-2 flex flex-col h-full">
            <ScrollReveal direction="up" distance={35} delay={280} className="h-full flex flex-col">
              <div className="h-full relative rounded-[28px] sm:rounded-[32px] bg-gradient-to-b from-[#0084FF] via-[#0070E0] to-[#0845B5] text-white p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#38BDF8]/40 group min-h-[480px]">
                
                {/* SUBTLE GLOW OVERLAY */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* NUMBER BADGE (4) */}
                  <div className="w-9 h-9 rounded-full bg-white text-[#0084FF] font-black text-sm flex items-center justify-center shadow-lg mb-4">
                    4
                  </div>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-white/20 border border-white/30 px-2.5 py-1 rounded-full inline-block mb-3 backdrop-blur-sm">
                    04 • Financial Blindspots
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-3 font-sans">
                    “I don't really know where my money is going.”
                  </h3>

                  {/* EDITORIAL TEXT WITH SIGNATURE INLINE WHITE PILL BADGES MATCHING REFERENCE IMAGE */}
                  <p className="text-xs sm:text-sm text-blue-50 leading-relaxed font-normal mb-3">
                    Revenue looks respectable, but{' '}
                    <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-white text-[#081B4E] font-bold text-[11px] sm:text-xs mx-0.5 shadow-sm">
                      cash flow leaks
                    </span>{' '}
                    and delayed reporting create{' '}
                    <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-white text-[#081B4E] font-bold text-[11px] sm:text-xs mx-0.5 shadow-sm">
                      financial blindspots
                    </span>{' '}
                    without real-time{' '}
                    <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full bg-white text-[#081B4E] font-bold text-[11px] sm:text-xs mx-0.5 shadow-sm">
                      unit economics
                    </span>.
                  </p>
                </div>

                <div className="relative z-10 pt-5 mt-5 border-t border-white/20 space-y-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-sm">
                    <div className="flex items-center justify-between text-[10px] font-tech font-bold uppercase tracking-wider mb-1.5">
                      <span className="text-blue-100">Capital Blindspot</span>
                      <span className="text-white font-black flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        89% Risk Index
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full w-[89%]" />
                    </div>
                  </div>
                  <div className="text-[11px] font-medium text-blue-100 leading-tight">
                    <span className="text-white font-bold">Likely Root Cause:</span> Missing management accounting & unit margin control.
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>

        {/* BOTTOM ACTION PROMPT */}
        <div className="mt-10 sm:mt-14 rounded-2xl sm:rounded-3xl bg-[#081B4E] text-white p-5 sm:p-10 text-center max-w-4xl mx-auto shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#0084FF]/40">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-lg sm:text-2xl font-black text-white font-sans">
              Recognize your business in any of these?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 font-medium">
              We help founders build systems tailored to their exact stage of growth.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto shrink-0">
            <Link
              href="/who-we-help"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all flex items-center justify-center gap-1.5 border border-white/15"
            >
              <span>See Who We Help</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 bg-[#0084FF] hover:bg-[#0070E0] text-white font-black uppercase text-xs tracking-wider rounded-full transition-all shadow-lg active:scale-95 flex items-center justify-center gap-1.5"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

