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

      {/* 2 & 3. CONCAVE BENTO GRID (EXACTLY MATCHING REFERENCE DESIGN) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_1fr] gap-5 items-end">
          
          {/* CENTER HEADER (DESKTOP: ROW 1, COLS 2-3 | MOBILE/MD: TOP FULL WIDTH) */}
          <div className="col-span-1 md:col-span-2 lg:col-start-2 lg:col-span-2 lg:row-start-1 lg:self-end lg:pb-8 text-center mb-8 lg:mb-0">
            <ScrollReveal direction="up" distance={25} delay={50}>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-black leading-[1.15] font-sans">
                Why manual hustle{' '}
                <span className="relative inline-block px-3.5 sm:px-4 py-0.5 rounded-full bg-blue-100/90 text-[#0084FF] font-black">
                  isn't enough
                </span>
              </h2>
              <div className="mt-3 flex flex-col items-center">
                <p className="text-sm sm:text-base text-zinc-600 max-w-md mx-auto font-medium leading-relaxed">
                  Founders struggle with real-world operational complexity
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
              <div className="h-full min-h-[460px] lg:h-[490px] relative rounded-[32px] bg-[#0E1015] text-white p-7 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl border border-white/10 group text-center">
                
                {/* NUMBER BADGE (1) */}
                <div className="relative z-10 w-11 h-11 rounded-full bg-white text-[#0E1015] font-black text-sm flex items-center justify-center shadow-lg mx-auto">
                  1
                </div>

                <div className="relative z-10 my-auto px-2">
                  <h3 className="text-2xl sm:text-[28px] font-black text-white tracking-tight leading-snug font-sans">
                    Everything stalls when it comes back to the founder
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-4 leading-relaxed font-normal max-w-xs mx-auto">
                    Absence of delegated authority matrices turns the owner into the single point of failure.
                  </p>
                </div>

                <div className="relative z-10 text-[11px] font-mono text-zinc-500 font-semibold tracking-wider uppercase">
                  Owner Bottleneck
                </div>

                {/* 3D DARK FLUID RIPPLE TEXTURE */}
                <div className="absolute inset-x-0 bottom-0 h-44 pointer-events-none opacity-30">
                  <svg className="w-full h-full object-cover" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-40,120 C60,50 160,170 260,90 C360,10 420,140 460,100 L460,200 L-40,200 Z" fill="url(#darkWaveGrad2)" />
                    <path d="M-20,140 C80,80 180,180 280,110 C380,40 430,160 460,130" stroke="rgba(255,255,255,0.15)" strokeWidth="2.5" />
                    <path d="M-30,160 C70,100 170,190 270,130 C370,70 420,180 460,150" stroke="rgba(0,132,255,0.3)" strokeWidth="2" />
                    <defs>
                      <linearGradient id="darkWaveGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0084FF" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#050C1E" stopOpacity="0.9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* CARD 02: SHORT LIGHT CARD (DESKTOP: COL 2, ROW 2) */}
          <div className="col-span-1 lg:col-start-2 lg:row-start-2 flex flex-col h-full">
            <ScrollReveal direction="up" distance={35} delay={160} className="h-full flex flex-col">
              <div className="h-full min-h-[280px] lg:h-[285px] relative rounded-[32px] bg-white text-black p-7 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-zinc-200/80 hover:border-[#0084FF]/40 transition-all text-center">
                
                {/* NUMBER BADGE (2) */}
                <div className="w-10 h-10 rounded-full bg-black text-white font-black text-sm flex items-center justify-center shadow-md mx-auto">
                  2
                </div>

                <div className="my-auto px-2">
                  <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-snug font-sans">
                    Sales activity is busy, but where is the revenue?
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 mt-2.5 leading-relaxed font-normal">
                    Pipeline leaks and unpredictable conversion rates disconnected from daily effort.
                  </p>
                </div>

                <div className="text-[11px] font-mono text-zinc-400 font-semibold tracking-wider uppercase">
                  Revenue Drag
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* CARD 03: SHORT 3D FLUID WAVE GRAPHIC CARD (DESKTOP: COL 3, ROW 2) */}
          <div className="col-span-1 lg:col-start-3 lg:row-start-2 flex flex-col h-full">
            <ScrollReveal direction="up" distance={35} delay={220} className="h-full flex flex-col">
              <div 
                onClick={scrollToDiagnostic}
                className="h-full min-h-[280px] lg:h-[285px] relative rounded-[32px] overflow-hidden shadow-xl group cursor-pointer border border-[#38BDF8]/30 transition-all hover:shadow-2xl"
              >
                
                {/* 3D FULL-BLEED FLUID WAVE RIBBONS */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#082B7A]">
                  <svg className="w-full h-full object-cover opacity-85" viewBox="0 0 350 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-30,160 C50,60 160,220 260,100 C340,-20 380,120 400,80 L400,280 L-30,280 Z" fill="url(#waveRibbonGrad2)" />
                    <path d="M-30,120 C60,30 170,180 270,80 C340,-10 390,90 400,60" stroke="rgba(255,255,255,0.45)" strokeWidth="3.5" />
                    <path d="M-20,150 C70,60 180,200 280,110 C350,20 390,120 400,90" stroke="rgba(56,189,248,0.7)" strokeWidth="3" />
                    <path d="M-30,180 C50,90 160,230 260,140 C340,50 390,150 400,120" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                    <path d="M-20,210 C70,120 180,250 280,170 C350,90 390,180 400,150" stroke="rgba(147,197,253,0.5)" strokeWidth="2.5" />
                    <defs>
                      <linearGradient id="waveRibbonGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.85" />
                        <stop offset="50%" stopColor="#0284C7" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#082B7A" stopOpacity="0.95" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* CENTER FROSTED GLASS ACTION BUTTON MATCHING REFERENCE IMAGE */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
                  <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md border border-white/50 flex items-center justify-center text-white shadow-[0_10px_30px_rgba(0,0,0,0.25)] group-hover:scale-110 group-hover:bg-white group-hover:text-[#0284C7] transition-all duration-300">
                    <ArrowUpRight className="w-7 h-7 stroke-[2.5]" />
                  </div>
                  <div className="mt-4">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white bg-black/30 backdrop-blur-sm px-3.5 py-1 rounded-full border border-white/25 shadow-sm">
                      Explore Systems
                    </span>
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* CARD 04: TALL VIBRANT ACCENT CARD (DESKTOP: COL 4, ROWS 1-2) */}
          <div className="col-span-1 lg:col-start-4 lg:row-start-1 lg:row-span-2 flex flex-col h-full">
            <ScrollReveal direction="up" distance={35} delay={280} className="h-full flex flex-col">
              <div className="h-full min-h-[460px] lg:h-[490px] relative rounded-[32px] bg-gradient-to-b from-[#0084FF] via-[#0070E0] to-[#0845B5] text-white p-7 sm:p-8 flex flex-col justify-between overflow-hidden shadow-2xl border border-[#38BDF8]/40 group text-center">
                
                {/* NUMBER BADGE (3 or 4) */}
                <div className="relative z-10 w-11 h-11 rounded-full bg-white text-[#0084FF] font-black text-sm flex items-center justify-center shadow-lg mx-auto">
                  3
                </div>

                <div className="relative z-10 my-auto px-2">
                  <h3 className="text-2xl sm:text-[28px] font-black text-white tracking-tight leading-snug font-sans">
                    Founders need{' '}
                    <span className="inline-block px-3 py-0.5 rounded-full bg-white text-[#081B4E] font-bold text-base sm:text-lg shadow-sm mx-1 my-1">
                      governed systems
                    </span>{' '}
                    to eliminate{' '}
                    <span className="inline-block px-3 py-0.5 rounded-full bg-white text-[#081B4E] font-bold text-base sm:text-lg shadow-sm mx-1 my-1">
                      daily fires
                    </span>
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100 mt-4 leading-relaxed font-normal max-w-xs mx-auto">
                    Without real-time management accounting and accountability cadence, revenue masks deep margin leaks.
                  </p>
                </div>

                <div className="relative z-10 text-[11px] font-mono text-blue-200 font-semibold tracking-wider uppercase">
                  Predictable Execution
                </div>

                {/* SUBTLE GLOW OVERLAY */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />

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

