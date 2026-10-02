'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle2, ChevronRight, Activity, Layers, TrendingUp, ShieldCheck, BarChart3, Clock, Sparkles } from 'lucide-react';

export default function HeroSection({ t }) {
  // Active workflow stage in the interactive Systems Console
  const [activeStage, setActiveStage] = useState('diagnose');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // Workflow stages from SCALARK.pdf Section 06 (Page 15 & 16)
  const STAGES = {
    diagnose: {
      id: 'diagnose',
      num: '01',
      title: 'Diagnose',
      tagline: 'Understand Before We Recommend',
      desc: "We examine current operations, sales pipelines, cash-flow visibility, KPIs and employee dependencies to uncover the true root causes — not just the symptoms.",
      metric1: { label: 'Root Causes Identified', value: '14 Core Bottlenecks' },
      metric2: { label: 'Owner Dependency Load', value: '78% Critical' },
      metric3: { label: 'Process Vulnerability', value: 'High Inconsistency' },
      status: 'Diagnostic Scan Complete',
      domains: ['Operations Audit', 'Cash-Flow Visibility', 'Sales Pipeline', 'Leadership Dependencies']
    },
    design: {
      id: 'design',
      num: '02',
      title: 'Design',
      tagline: 'Build the Right Solution',
      desc: "Once the problem is diagnosed, we architect the institutional structure: role responsibilities, SOP frameworks, KPI hierarchies and financial reporting dashboards.",
      metric1: { label: 'Workflow Architecture', value: 'Documented SOPs' },
      metric2: { label: 'Accountability Framework', value: 'Role Clarity 100%' },
      metric3: { label: 'Target Valuation Multiple', value: '3.8x to 4.6x' },
      status: 'Architecture Blueprint Approved',
      domains: ['SOP Mapping', 'Department Structures', 'KPI Definition', 'Technology Planning']
    },
    implement: {
      id: 'implement',
      num: '03',
      title: 'Implement',
      tagline: 'Turn the Plan Into Action',
      desc: "A strategy has zero value if nobody implements it. We embed documented workflows, train teams, configure management systems and align day-to-day operations.",
      metric1: { label: 'Systems Deployed', value: 'Full Implementation' },
      metric2: { label: 'Owner Time Recovered', value: '65% Freed' },
      metric3: { label: 'Team Adoption Rate', value: '94.8% Active' },
      status: 'Operational Deployment Live',
      domains: ['Workflow Automation', 'Reporting Systems', 'Team Execution', 'SOP Governance']
    },
    measure: {
      id: 'measure',
      num: '04',
      title: 'Measure',
      tagline: 'Make Performance Visible',
      desc: "What gets measured gets managed. We establish daily, weekly and monthly KPI review cadences so leadership sees exactly what is improving in real time.",
      metric1: { label: 'Execution Predictability', value: '99.4% On-Track' },
      metric2: { label: 'Financial Visibility', value: 'Real-Time Unit P&L' },
      metric3: { label: 'Conversion Velocity', value: '+180% Pipeline' },
      status: 'KPI Governance Active',
      domains: ['Executive Dashboards', 'Unit Economics', 'Sales Conversions', 'Daily Reporting']
    },
    scale: {
      id: 'scale',
      num: '05',
      title: 'Scale',
      tagline: 'Build for Enduring Growth',
      desc: "Once the foundation operates without founder heroics, the organisation is positioned for sustainable multi-market expansion, acquisitions, and maximum valuation.",
      metric1: { label: 'Enterprise Valuation', value: '4.62x Multiple' },
      metric2: { label: 'Autonomous Capacity', value: 'Self-Operating' },
      metric3: { label: 'Regional Expansion', value: 'Multi-Market Ready' },
      status: 'Institutional Scale Achieved',
      domains: ['Market Expansion', 'Commercial Planning', 'Division Rollouts', 'Enduring Scale']
    }
  };

  const currentStage = STAGES[activeStage] || STAGES.diagnose;

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-20 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#0E4BC9] via-[#155DEC] to-[#0A39A2] text-white selection:bg-[#38BDF8] selection:text-[#081B4E]"
    >
      {/* 1. STRIPE / LINEAR STYLE AMBIENT SPOTLIGHT & BLUEPRINT MESH GRID */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#38BDF8]/40 via-[#0084FF]/25 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. HERO HEADLINE & VALUE PROPOSITION */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center pt-2 sm:pt-4">
        
        {/* PILL BADGE: CORE BRAND PROMISE (SCALARK.PDF PAGE 1) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 hover:border-white/40 transition-colors backdrop-blur-md mb-6 shadow-sm group cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-wide font-sans">
            Find the Problem. Fix the System. Scale the Business.
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-sky-200 group-hover:translate-x-0.5 transition-transform" />
        </div>

        {/* EDITORIAL HEADLINE (EXACTLY FROM SCALARK.PDF PAGE 2) */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.12] sm:leading-[1.08] max-w-4xl mx-auto mb-5 sm:mb-6 text-white font-sans px-2">
          Your business doesn't need more effort.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300">
            It needs a better system.
          </span>
        </h1>

        {/* SUBTITLE (EXACTLY FROM SCALARK.PDF PAGE 2) */}
        <p className="text-xs sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed mb-6 sm:mb-8 px-2">
          SCALARK helps entrepreneurs, startups, SMEs and MSMEs identify what's holding their business back, fix the underlying systems and build a stronger organisation designed for sustainable growth.
        </p>

        {/* DUAL ACTION BUTTONS (HIGH-CONTRAST ENTERPRISE STYLE) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto sm:w-auto">
          {/* PRIMARY BUTTON */}
          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-[#0A39A2] hover:bg-sky-50 font-extrabold text-xs sm:text-sm rounded-full transition-all duration-200 shadow-[0_12px_35px_rgba(0,0,0,0.25)] hover:scale-[1.02] active:scale-95"
          >
            <span>Find What's Holding My Business Back</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>

          {/* SECONDARY BUTTON */}
          <Link
            href="/solutions"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs sm:text-sm rounded-full backdrop-blur-xl transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>Explore How SCALARK Helps</span>
            <ArrowRight className="w-3.5 h-3.5 text-sky-200" />
          </Link>
        </div>

        {/* 6 CORE ARCHITECTURAL DOMAINS (SCALARK.PDF PAGE 3) */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-blue-100/80 uppercase tracking-wider font-semibold">
          <span>Business Growth</span>
          <span className="text-sky-300">•</span>
          <span>Operations</span>
          <span className="text-sky-300">•</span>
          <span>Finance</span>
          <span className="text-sky-300">•</span>
          <span>Sales</span>
          <span className="text-sky-300">•</span>
          <span>Technology</span>
          <span className="text-sky-300">•</span>
          <span>Performance</span>
        </div>
      </div>

      {/* 3. INTERACTIVE ENTERPRISE SYSTEMS CONSOLE (LINEAR / STRIPE STYLE) */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-12 md:mt-16">
        <div className="rounded-3xl bg-[#082260]/85 backdrop-blur-2xl border border-white/20 shadow-[0_25px_80px_rgba(0,10,50,0.4)] p-5 sm:p-7 relative overflow-hidden">
          
          {/* Subtle top inner border highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

          {/* CONSOLE TOP BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/15 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/90 font-bold">
                SCALARK Systems Architecture Console
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-sky-300 font-semibold uppercase tracking-wider">
                Status: {currentStage.status}
              </span>
            </div>
          </div>

          {/* WORKFLOW PIPELINE TABS (SCALARK.PDF SECTION 06: DIAGNOSE -> DESIGN -> IMPLEMENT -> MEASURE -> SCALE) */}
          <div className="flex sm:grid sm:grid-cols-5 gap-1.5 sm:gap-2 mb-6 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {Object.values(STAGES).map((stage) => {
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`px-3 py-2.5 rounded-xl text-left transition-all duration-200 border shrink-0 min-w-[96px] sm:min-w-0 flex-1 sm:flex-initial cursor-pointer ${
                    isActive
                      ? 'bg-[#0084FF] border-[#38BDF8] text-white shadow-lg shadow-blue-500/40'
                      : 'bg-white/10 border-white/15 text-blue-100 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-semibold opacity-90">
                      {stage.num}
                    </span>
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                  <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider font-sans">
                    {stage.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* DYNAMIC ACTIVE STAGE SHOWCASE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* LEFT: STAGE DOCTRINE & SCOPE */}
            <div className="lg:col-span-6 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                Stage {currentStage.num} • {currentStage.tagline}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {currentStage.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed font-normal">
                {currentStage.desc}
              </p>

              {/* DOMAIN TAGS */}
              <div className="pt-2 flex flex-wrap gap-2">
                {currentStage.domains.map((dom, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-white/10 border border-white/20 text-[11px] font-mono text-sky-200 font-semibold"
                  >
                    {dom}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT: 3 LIVE TELEMETRY CARDS */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col justify-between shadow-inner">
                <span className="text-[10px] font-mono text-blue-200 uppercase tracking-wider font-semibold mb-2">
                  {currentStage.metric1.label}
                </span>
                <span className="text-lg font-black text-white tracking-tight font-tech">
                  {currentStage.metric1.value}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col justify-between shadow-inner">
                <span className="text-[10px] font-mono text-blue-200 uppercase tracking-wider font-semibold mb-2">
                  {currentStage.metric2.label}
                </span>
                <span className="text-lg font-black text-white tracking-tight font-tech">
                  {currentStage.metric2.value}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col justify-between shadow-inner">
                <span className="text-[10px] font-mono text-blue-200 uppercase tracking-wider font-semibold mb-2">
                  {currentStage.metric3.label}
                </span>
                <span className="text-lg font-black text-white tracking-tight font-tech">
                  {currentStage.metric3.value}
                </span>
              </div>
            </div>
          </div>

          {/* CONSOLE FOOTER: VERIFIED INSTITUTIONAL BENCHMARKS */}
          <div className="mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-blue-100">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs">
              <div>
                <span className="text-white font-bold">250+</span> Audits Completed
              </div>
              <div>
                <span className="text-white font-bold">65%</span> Owner Time Recovered
              </div>
              <div>
                <span className="text-white font-bold">4.62x</span> Target Multiple
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white font-sans font-bold text-xs transition-colors self-start sm:self-auto"
            >
              <span>Request Diagnostic Audit</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>

        </div>
      </div>

      {/* 4. BUSINESS STAGES ACCREDITATION BAR (SCALARK.PDF SECTION 03) */}
      <div className="relative z-10 w-full pt-14 text-center">
        <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-100/80 mb-4 font-mono">
          ENGINEERED FOR FOUNDERS & LEADERSHIP AT EVERY STAGE
        </div>

        <div className="max-w-5xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono text-white">
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 shadow-sm font-semibold backdrop-blur-md hover:bg-white/25 transition-colors">
            STARTUPS
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 shadow-sm font-semibold backdrop-blur-md hover:bg-white/25 transition-colors">
            NEW ENTREPRENEURS
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 shadow-sm font-semibold backdrop-blur-md hover:bg-white/25 transition-colors">
            GROWING BUSINESSES
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 shadow-sm font-semibold backdrop-blur-md hover:bg-white/25 transition-colors">
            SMES & MSMES
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-white/15 border border-white/25 shadow-sm font-semibold backdrop-blur-md hover:bg-white/25 transition-colors">
            BUSINESSES IN CRISIS
          </span>
        </div>
      </div>

    </section>
  );
}
