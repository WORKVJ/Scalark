'use client';

import { useState } from 'react';
import { ArrowUpRight, Award, Clock, DollarSign, TrendingDown, Users, CheckCircle, ShieldAlert, AlertTriangle } from 'lucide-react';
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
    <section id="the-mirror" className="relative py-24 sm:py-32 bg-[#F5F5F7] text-black overflow-hidden">
      
      {/* 1. GROWMEDLINK SIGNATURE OVERLAPPING STAT CAPSULE BANNER WITH ANIMATED COUNTERS */}
      <ScrollReveal direction="up" distance={45} duration={800} className="max-w-5xl mx-auto px-6 mb-24">
        <div className="relative rounded-[2.5rem] bg-[#FFFFFF] p-8 sm:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.08)] flex flex-col md:flex-row items-center justify-between gap-8 border-4 border-white ring-1 ring-black/5">
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px] rounded-[2.5rem] pointer-events-none" />

          {/* LEFT STAT */}
          <div className="text-center md:text-left space-y-1 relative z-10">
            <div className="text-4xl sm:text-5xl font-black text-black tracking-tight font-tech">
              <AnimatedCounter end={100} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm font-black uppercase tracking-wider text-black font-sans">
              Systems Engineered
            </div>
            <p className="text-xs text-black/80 max-w-[200px] font-medium">
              Replacing intuitive guesswork across UAE, UK, Singapore & India
            </p>
          </div>

          {/* ELEVATED 3D OVERLAPPING CENTER CARD */}
          <div className="relative md:-my-18 z-20 w-full md:w-auto min-w-[290px] sm:min-w-[340px] rounded-3xl bg-[#222222] text-white p-8 shadow-[0_30px_70px_rgba(0,0,0,0.6)] border-2 border-white/15 text-center transform hover:scale-105 transition-all duration-300 card-sheen">
            <div className="w-14 h-14 rounded-full bg-[#8B5CF6]/15 border-2 border-[#8B5CF6] text-[#8B5CF6] flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              <Award className="w-7 h-7 stroke-[2.5]" />
            </div>
            <div className="text-4xl sm:text-5xl font-black text-white tracking-tight font-tech mb-1">
              <AnimatedCounter end={98} suffix="%" />
            </div>
            <div className="text-xs font-black uppercase tracking-widest text-[#8B5CF6] mb-2 font-tech">
              Predictability Rate
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed font-medium">
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

      {/* 2. SUNBURST SECTION TITLE */}
      <ScrollReveal direction="up" distance={30} delay={100} className="max-w-4xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 font-handwritten text-2xl text-[#8B5CF6] font-bold mb-2 -rotate-1">
          <span>— Diagnosing the friction</span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-black leading-tight font-sans">
          Business Bottlenecks, <span className="text-[#8B5CF6]">Made Obvious.</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto font-medium">
          Operational friction is not accidental. It is systematic. Here is how underlying bottlenecks manifest inside ambitious companies.
        </p>
      </ScrollReveal>

      {/* 3. FOUR HIGH-CONTRAST BOTTLENECK CARDS */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {painCards.map((card, idx) => {
            const Icon = card.icon;
            const isHovered = activeCard === idx;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                distance={35}
                delay={idx * 110}
                className="h-full"
              >
                <div
                  onMouseEnter={() => setActiveCard(idx)}
                  className={`h-full relative rounded-3xl p-8 sm:p-10 transition-all duration-300 flex flex-col justify-between shadow-xl cursor-pointer ${
                    isHovered
                      ? 'bg-[#1A1A1A] text-white border-2 border-[#FFFFFF] -translate-y-2 shadow-[0_25px_60px_rgba(0,0,0,0.35)]'
                      : 'bg-white text-black border border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold ${isHovered ? 'bg-[#FFFFFF] text-black' : 'bg-zinc-100 text-black'}`}>
                        <Icon className="w-5 h-5 stroke-[2.5]" />
                      </div>
                      <span className="font-tech text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#FFFFFF] text-black">
                        {card.num} • {card.symptom}
                      </span>
                    </div>

                    <span className="text-[10px] font-tech font-bold uppercase text-[#71717A] bg-[#71717A]/10 px-2.5 py-1 rounded-full border border-[#71717A]/20">
                      {card.riskTag}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-4 leading-snug font-sans">
                    {card.title}
                  </h3>

                  <p className={`text-sm sm:text-base leading-relaxed mb-4 font-medium ${isHovered ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {card.body}
                  </p>

                  {/* ANIMATED FRICTION SEVERITY METER */}
                  <div className={`p-3 rounded-2xl mb-6 transition-all duration-300 border ${
                    isHovered ? 'bg-black/60 border-white/15 shadow-inner' : 'bg-zinc-50 border-zinc-200'
                  }`}>
                    <div className="flex items-center justify-between text-[10px] font-tech font-bold uppercase tracking-wider mb-1.5">
                      <span className={isHovered ? 'text-zinc-400' : 'text-zinc-500'}>Operational Drag</span>
                      <span className={`flex items-center gap-1.5 font-black ${isHovered ? 'text-[#8B5CF6]' : 'text-zinc-700'}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isHovered ? 'bg-[#8B5CF6] animate-ping' : 'bg-zinc-400'}`} />
                        {card.frictionLevel}
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-zinc-700/30 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-zinc-300 via-[#8B5CF6] to-[#8B5CF6] rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                        style={{ width: isHovered ? card.frictionPercent : '35%' }}
                      />
                    </div>
                  </div>
                </div>

                <div className={`pt-5 border-t ${isHovered ? 'border-white/10' : 'border-zinc-200'} space-y-1 text-xs`}>
                  <div className="flex items-center gap-1.5 font-black uppercase tracking-wider text-[#FFFFFF] font-tech">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    <span>Likely Root Cause:</span>
                  </div>
                  <p className={`font-medium ${isHovered ? 'text-zinc-300' : 'text-zinc-700'}`}>
                    {card.rootCause}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
        </div>

        {/* BOTTOM ACTION PROMPT */}
        <div className="mt-14 rounded-3xl bg-[#1A1A1A] text-white p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-white/10">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-xl sm:text-2xl font-black text-white font-sans">
              Recognize your business in any of these?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-medium">
              Let's diagnose and re-engineer the system behind it.
            </p>
          </div>
          <button
            onClick={scrollToDiagnostic}
            className="px-7 py-3.5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-black uppercase text-xs tracking-wider rounded-full transition-all shadow-lg hover:scale-105 shrink-0 flex items-center gap-1.5"
          >
            <span>Diagnose Root Cause</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </section>
  );
}

