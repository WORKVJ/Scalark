'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, ChevronRight, Layers, BarChart3, Activity, Users, X, Sparkles, TrendingUp, MonitorCheck } from 'lucide-react';
import { SOLUTIONS_DATA } from '@/data/contentData';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function SolutionsSection({ t }) {
  const [activeModalSolution, setActiveModalSolution] = useState(null);
  const [expandedCol, setExpandedCol] = useState(0);

  const pillars = [
    {
      id: 'operations',
      num: '01',
      verticalTitle: 'OPERATIONS',
      title: 'Operations & Process Engineering',
      icon: Layers,
      gradient: 'from-[#06281E] via-[#091D17] to-[#060D0A]',
      image: '/assets/pillar-foundation.jpg',
      accent: '#10B981',
      badge: 'Owner Independence',
      badgeColor: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30',
      activeBorder: 'border-emerald-500/70 shadow-[0_25px_60px_rgba(16,185,129,0.25)]',
      iconActive: 'bg-emerald-500/25 text-emerald-300 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
      ctaBg: 'bg-gradient-to-r from-emerald-600 to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]',
      description: 'We document and streamline core workflows so departments operate with autonomy, discipline, and documented standards.',
      keyCapabilities: [
        'Standard Operating Procedures (SOPs)',
        'Workflow & Delegation Architecture',
        'Process Bottleneck Elimination',
        'Management Control Systems'
      ],
      associatedSystems: ['operations', 'sop']
    },
    {
      id: 'revenue',
      num: '02',
      verticalTitle: 'REVENUE',
      title: 'Sales & Revenue Systems',
      icon: BarChart3,
      gradient: 'from-[#002B4D] via-[#001D38] to-[#020B14]',
      image: '/assets/systems-architecture.jpg',
      accent: '#06B6D4',
      badge: 'Funnel Governance',
      badgeColor: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30',
      activeBorder: 'border-cyan-500/70 shadow-[0_25px_60px_rgba(6,182,212,0.25)]',
      iconActive: 'bg-cyan-500/25 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
      ctaBg: 'bg-gradient-to-r from-cyan-600 to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]',
      description: 'Convert erratic sales activities into a measurable, governed pipeline with clear conversion metrics and sales accountability.',
      keyCapabilities: [
        'Sales Pipeline Architecture',
        'Lead Qualification & Follow-up Protocols',
        'Conversion Governance & Cadence',
        'Sales Team KPIs & Alignment'
      ],
      associatedSystems: ['sales', 'growth']
    },
    {
      id: 'finance',
      num: '03',
      verticalTitle: 'FINANCE',
      title: 'Finance & Unit Economics',
      icon: Activity,
      gradient: 'from-[#0084FF] via-[#091E58] to-[#061233]',
      image: '/assets/phone-dashboard.jpg',
      accent: '#0084FF',
      badge: 'Margin Control',
      badgeColor: 'text-blue-300 bg-[#0084FF]/25 border-[#0084FF]/40',
      activeBorder: 'border-[#0084FF] shadow-[0_25px_60px_rgba(0,132,255,0.35)]',
      iconActive: 'bg-[#0084FF]/35 text-blue-200 border-[#0084FF]/50 shadow-[0_0_15px_rgba(0,132,255,0.4)]',
      ctaBg: 'bg-[#0084FF] hover:bg-[#0070E0] shadow-[0_0_20px_rgba(0,132,255,0.5)]',
      description: 'Replace delayed bookkeeping with executive-level management accounting, unit economics, and real-time cash flow foresight.',
      keyCapabilities: [
        'Cash-Flow Forecasting Models',
        'Unit Economics & Margin Optimization',
        'Executive Financial Dashboards',
        'Cost Control & Working Capital'
      ],
      associatedSystems: ['finance']
    },
    {
      id: 'people-tech',
      num: '04',
      verticalTitle: 'SYSTEMS',
      title: 'Strategy, Tech & Accountability',
      icon: Users,
      gradient: 'from-[#331C04] via-[#211102] to-[#0B0600]',
      image: '/assets/hero-boardroom.jpg',
      accent: '#F59E0B',
      badge: 'Enterprise Alignment',
      badgeColor: 'text-amber-300 bg-amber-500/15 border-amber-500/30',
      activeBorder: 'border-amber-500/70 shadow-[0_25px_60px_rgba(245,158,11,0.25)]',
      iconActive: 'bg-amber-500/25 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]',
      ctaBg: 'bg-gradient-to-r from-amber-600 to-orange-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]',
      description: 'Equip your leadership team with clear KPI scorecards, departmental milestones, and modern software infrastructure.',
      keyCapabilities: [
        'Institutional KPI Frameworks',
        'Role Definitions & Responsibility Matrix',
        'Software & Tech Stack Modernization',
        'Strategic Milestones & Growth Planning'
      ],
      associatedSystems: ['kpi', 'software', 'foundation']
    }
  ];

  const handlePillarClick = (solId) => {
    const found = SOLUTIONS_DATA.find((s) => s.id === solId) || SOLUTIONS_DATA[0];
    setActiveModalSolution(found);
  };

  const handleCtaClick = (solutionTitle) => {
    setActiveModalSolution(null);
    const el = document.getElementById('contact-diagnosis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('prefill-solution', { detail: solutionTitle }));
    } else {
      window.location.href = `/contact?service=${encodeURIComponent(solutionTitle)}`;
    }
  };

  return (
    <section id="solutions" className="py-14 sm:py-32 px-4 sm:px-6 bg-[#061233] text-white relative overflow-hidden">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-[#0084FF]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10 sm:space-y-16">
        
        {/* SECTION HEADER */}
        <ScrollReveal direction="up" distance={35} className="text-center max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 font-handwritten text-xl sm:text-2xl text-blue-300 font-bold mb-2 -rotate-1">
            <span>Services we architect</span>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 rotate-12 stroke-[2.5]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M14 9l-6 6m0 0l6 6m-6-6h18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h2 className="text-2xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight font-sans">
            OUR ARCHITECTURAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">SOLUTIONS</span><span className="text-[#0084FF]">.</span>
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-blue-100/80 font-normal max-w-2xl mx-auto">
            One business. Multiple problems. One integrated approach. SCALARK connects your operations, revenue engine, financial controls, and people into a scalable operating system.
          </p>
        </ScrollReveal>

        {/* EXPANDABLE VERTICAL COLUMNS INTERACTION (DESKTOP) */}
        <ScrollReveal direction="up" distance={40} delay={150} className="hidden lg:flex gap-4 h-[490px] w-full">
          {pillars.map((pillar, idx) => {
            const isExpanded = expandedCol === idx;
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setExpandedCol(idx)}
                className={`relative rounded-3xl overflow-hidden p-8 border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between group ${
                  isExpanded
                    ? `flex-[3.8] bg-gradient-to-br ${pillar.gradient} ${pillar.activeBorder}`
                    : 'flex-[1] bg-[#081B4E] border-[#0084FF]/25 hover:border-[#0084FF]/60'
                }`}
              >
                {/* BACKGROUND IMAGE FOR EXPANDED PILLAR */}
                {isExpanded && (
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover object-center opacity-25 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061233] via-[#061233]/70 to-[#061233]/40" />
                  </div>
                )}

                <div className="flex items-center justify-between relative z-10">
                  <span className={`font-tech text-xs font-black uppercase px-3 py-1 rounded-full border ${
                    isExpanded
                      ? pillar.badgeColor
                      : 'text-blue-200 bg-[#061233]/60 border-[#0084FF]/30'
                  }`}>
                    PILLAR {pillar.num}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                    isExpanded ? pillar.iconActive : 'bg-white/5 text-blue-200'
                  }`}>
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Vertical vs Expanded Display */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-tech uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border ${
                      isExpanded ? pillar.badgeColor : 'text-zinc-500 border-white/5'
                    }`}>
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3 font-sans">
                    {isExpanded ? pillar.title : pillar.verticalTitle}
                  </h3>
                  {isExpanded && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/10">
                        {pillar.keyCapabilities.map((cap, i) => (
                          <div key={i} className="flex items-center space-x-2 text-xs text-zinc-200">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                            <span className="truncate">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePillarClick(pillar.associatedSystems[0]);
                    }}
                    className={`text-xs font-bold font-tech uppercase tracking-wider transition-colors flex items-center gap-1 ${
                      isExpanded ? 'text-white hover:text-blue-300' : 'text-zinc-500'
                    }`}
                  >
                    <span>{isExpanded ? 'System Specifications' : `System 0${idx + 1}`}</span>
                    {isExpanded && <ChevronRight className="w-3.5 h-3.5 text-blue-400" />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCtaClick(pillar.title);
                    }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? `${pillar.ctaBg} text-white hover:scale-110`
                        : 'bg-white/10 text-zinc-400 hover:text-white'
                    }`}
                    title="Consult on this"
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </ScrollReveal>

        {/* 4 DUAL-TONE SPLIT CARDS (MOBILE & TABLET VIEW ONLY) */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.id}
                direction="up"
                distance={35}
                delay={idx * 110}
                className="h-full"
              >
                <div
                  className="h-full rounded-2xl sm:rounded-3xl border border-[#0084FF]/30 hover:border-[#0084FF] transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between group bg-[#081B4E]"
                >
                  {/* TOP HALF: GRADIENT BANNER WITH BACKGROUND IMAGE */}
                  <div className={`p-5 sm:p-7 bg-gradient-to-br ${pillar.gradient} relative overflow-hidden min-h-[190px] sm:min-h-[220px] flex flex-col justify-between`}>
                    <div className="absolute inset-0 pointer-events-none">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-cover opacity-25"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061233] via-[#061233]/60 to-transparent" />
                    </div>

                    <div className="flex items-center justify-between relative z-10">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className={`font-tech text-[10px] sm:text-xs font-black uppercase tracking-widest px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border backdrop-blur-md ${pillar.badgeColor}`}>
                          PILLAR {pillar.num}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-tech text-zinc-300 font-bold uppercase tracking-wider bg-white/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full backdrop-blur-md">
                          {pillar.badge}
                        </span>
                      </div>

                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      </div>
                    </div>

                    <div className="my-2.5 sm:my-3 relative z-10">
                      <span className="text-xl sm:text-3xl font-black text-white tracking-tight block leading-tight font-sans">
                        {pillar.title}
                      </span>
                    </div>

                    <div className="space-y-1 sm:space-y-1.5 relative z-10">
                      {pillar.keyCapabilities.slice(0, 3).map((cap, i) => (
                        <div key={i} className="flex items-center space-x-2 text-[11px] sm:text-xs text-zinc-200">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* BOTTOM HALF: ROYAL NAVY BODY */}
                  <div className="p-4 sm:p-6 bg-[#081B4E] flex flex-col justify-between flex-1">
                    <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed mb-4 sm:mb-6 font-normal">
                      {pillar.description}
                    </p>

                    <div className="pt-3 sm:pt-4 border-t border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => handlePillarClick(pillar.associatedSystems[0])}
                        className="text-xs font-bold text-white hover:text-blue-300 transition-colors flex items-center gap-1 uppercase tracking-wider font-tech"
                      >
                        <span>Specifications</span>
                        <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                      </button>

                      <button
                        onClick={() => handleCtaClick(pillar.title)}
                        className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl ${pillar.ctaBg} text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95`}
                        title="Consult on this"
                      >
                        <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* MODAL FOR DETAILED SYSTEM SPECIFICATIONS */}
        {activeModalSolution && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061233]/90 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#081B4E] border border-[#0084FF]/50 rounded-2xl sm:rounded-3xl max-w-xl w-full max-h-[85vh] overflow-y-auto no-scrollbar p-5 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] relative animate-in zoom-in-95 duration-200 text-white">
              <button
                onClick={() => setActiveModalSolution(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <span className="text-[10px] font-tech font-black text-blue-300 uppercase tracking-widest bg-[#0084FF]/25 px-3 py-1 rounded-full border border-[#0084FF]/40 inline-block mb-2">
                    System Architecture Specification
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
                    {activeModalSolution.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/70 mt-1 font-normal">
                    {activeModalSolution.lead}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#061233] border border-[#0084FF]/30 space-y-2">
                  <div className="text-xs font-bold text-white uppercase font-tech flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                    Target Operational Deliverable
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {activeModalSolution.deliverables}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-tech">
                    Architectural Impact
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {activeModalSolution.impact}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setActiveModalSolution(null)}
                    className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-bold font-tech uppercase text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleCtaClick(activeModalSolution.name)}
                    className="px-6 py-2.5 rounded-full bg-[#0084FF] hover:bg-[#0070E0] text-white font-black text-xs font-tech uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,132,255,0.4)]"
                  >
                    Implement This System →
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
