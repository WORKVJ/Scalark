'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, CheckCircle2, ChevronRight, Activity, Layers, TrendingUp, ShieldCheck, BarChart3, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection({ t: propT }) {
  const { currentLang, isRtl, t: ctxT } = useLanguage();
  const t = propT || ctxT;

  // Active workflow stage in the interactive Systems Console
  const [activeStage, setActiveStage] = useState('diagnose');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const STAGES = t.hero.stages || {};
  const currentStage = STAGES[activeStage] || STAGES.diagnose || {
    num: '01',
    title: 'Diagnose',
    tagline: 'Understand Before We Recommend',
    desc: '',
    metric1: { label: '', value: '' },
    metric2: { label: '', value: '' },
    metric3: { label: '', value: '' },
    status: '',
    domains: []
  };

  const stageKeys = ['diagnose', 'design', 'implement', 'measure'];

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
        
        {/* PILL BADGE: CORE BRAND PROMISE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/25 hover:border-white/40 transition-colors backdrop-blur-md mb-6 shadow-sm group cursor-pointer">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold text-white tracking-wide font-sans">
            {t.hero.bannerPill}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-sky-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 transition-transform rtl:rotate-180" />
        </div>

        {/* EDITORIAL HEADLINE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.18] sm:leading-[1.12] max-w-4xl mx-auto mb-5 sm:mb-6 text-white font-sans px-2">
          {t.hero.titleMain}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300">
            {t.hero.titleAccent}
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-xs sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed mb-6 sm:mb-8 px-2">
          {t.hero.desc}
        </p>

        {/* DUAL ACTION BUTTONS (HIGH-CONTRAST ENTERPRISE STYLE) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto sm:w-auto">
          {/* PRIMARY BUTTON */}
          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 bg-white text-[#0A39A2] hover:bg-sky-50 font-extrabold text-xs sm:text-sm rounded-full transition-all duration-200 shadow-[0_12px_35px_rgba(0,0,0,0.25)] hover:scale-[1.02] active:scale-95"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
          </Link>

          {/* SECONDARY BUTTON */}
          <Link
            href="/solutions"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs sm:text-sm rounded-full backdrop-blur-xl transition-all duration-200 shadow-sm active:scale-95"
          >
            <span>{t.hero.ctaSecondary}</span>
            <ArrowRight className="w-3.5 h-3.5 text-sky-200 rtl:rotate-180" />
          </Link>
        </div>

        {/* 6 CORE ARCHITECTURAL DOMAINS */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] font-mono text-blue-100/80 uppercase tracking-wider font-semibold">
          {t.hero.domains.map((dom, i) => (
            <span key={i} className="flex items-center gap-x-4">
              <span>{dom}</span>
              {i < t.hero.domains.length - 1 && <span className="text-sky-300">•</span>}
            </span>
          ))}
        </div>
      </div>

      {/* 3. INTERACTIVE ENTERPRISE SYSTEMS CONSOLE */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full mt-12 md:mt-16">
        <div className="rounded-3xl bg-[#082260]/85 backdrop-blur-2xl border border-white/20 shadow-[0_25px_80px_rgba(0,10,50,0.4)] p-5 sm:p-7 relative overflow-hidden">
          
          {/* Subtle top inner border highlight */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-300/60 to-transparent" />

          {/* CONSOLE TOP BAR */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/15 mb-6">
            <div className="flex items-center gap-3">
              <div className="flex items-center space-x-1.5 rtl:space-x-reverse">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-white/90 font-bold">
                {t.hero.consoleTitle}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[11px] font-mono text-sky-300 font-semibold uppercase tracking-wider">
                {t.hero.consoleStatus}: {currentStage.status}
              </span>
            </div>
          </div>

          {/* WORKFLOW PIPELINE TABS */}
          <div className="flex sm:grid sm:grid-cols-4 gap-1.5 sm:gap-2 mb-6 overflow-x-auto no-scrollbar pb-1 sm:pb-0">
            {stageKeys.map((key) => {
              const stage = STAGES[key];
              if (!stage) return null;
              const isActive = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`px-3 py-2.5 rounded-xl text-start transition-all duration-200 border shrink-0 min-w-[96px] sm:min-w-0 flex-1 sm:flex-initial cursor-pointer ${
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
            <div className="lg:col-span-6 space-y-3 text-start">
              <div className="text-xs font-mono uppercase tracking-wider text-sky-300 font-bold">
                {currentStage.num} • {currentStage.tagline}
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
                {currentStage.tagline}
              </h3>
              <p className="text-xs sm:text-sm text-blue-100/85 leading-relaxed font-normal">
                {currentStage.desc}
              </p>

              {/* DOMAIN TAGS */}
              <div className="pt-2 flex flex-wrap gap-2">
                {currentStage.domains?.map((dom, i) => (
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
              <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col justify-between shadow-inner text-start">
                <span className="text-[10px] font-mono text-blue-200 uppercase tracking-wider font-semibold mb-2">
                  {currentStage.metric1?.label}
                </span>
                <span className="text-lg font-black text-white tracking-tight font-tech">
                  {currentStage.metric1?.value}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col justify-between shadow-inner text-start">
                <span className="text-[10px] font-mono text-blue-200 uppercase tracking-wider font-semibold mb-2">
                  {currentStage.metric2?.label}
                </span>
                <span className="text-lg font-black text-white tracking-tight font-tech">
                  {currentStage.metric2?.value}
                </span>
              </div>

              <div className="p-4 rounded-xl bg-white/10 border border-white/15 flex flex-col justify-between shadow-inner text-start">
                <span className="text-[10px] font-mono text-blue-200 uppercase tracking-wider font-semibold mb-2">
                  {currentStage.metric3?.label}
                </span>
                <span className="text-lg font-black text-white tracking-tight font-tech">
                  {currentStage.metric3?.value}
                </span>
              </div>
            </div>
          </div>

          {/* CONSOLE FOOTER */}
          <div className="mt-6 pt-5 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-blue-100">
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs">
              <div>
                <span className="text-white font-bold">60+</span> {isRtl ? 'شركة مدعومة' : 'Companies Supported'}
              </div>
              <div>
                <span className="text-white font-bold">65%</span> {isRtl ? 'استعادة وقت المؤسس' : 'Owner Time Recovered'}
              </div>
              <div>
                <span className="text-white font-bold">2.8x</span> {isRtl ? 'مضاعفة التقييم والإيرادات' : 'Valuation & Revenue Generated'}
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-sky-300 hover:text-white font-sans font-bold text-xs transition-colors self-start sm:self-auto"
            >
              <span>{isRtl ? 'طلب تدقيق تشخيصي' : 'Request Diagnostic Audit'}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] rtl:rotate-180" />
            </Link>
          </div>

        </div>
      </div>

      {/* 4. BUSINESS STAGES ACCREDITATION BAR */}
      <div className="relative z-10 w-full pt-10 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/[0.12] via-white/[0.18] to-white/[0.12] backdrop-blur-xl border-2 border-white/30 shadow-[0_12px_45px_rgba(0,0,0,0.45)] py-5 sm:py-6 px-4 sm:px-6 lg:px-8 text-center overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_14px_#38BDF8]" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#38BDF8]/25 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#061848]/70 border border-[#38BDF8]/40 mb-4 sm:mb-5 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
              <span className="text-[11px] sm:text-xs font-mono font-extrabold uppercase tracking-widest text-sky-200">
                {isRtl ? 'مصمم لمؤسسي وقيادات الشركات في كل مرحلة' : 'ENGINEERED FOR FOUNDERS & LEADERSHIP AT EVERY STAGE'}
              </span>
            </div>

            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-2 sm:gap-2.5 lg:gap-3">
              {[
                { label: isRtl ? 'الشركات الناشئة' : 'STARTUPS' },
                { label: isRtl ? 'رواد الأعمال الجدد' : 'NEW ENTREPRENEURS' },
                { label: isRtl ? 'الشركات النامية' : 'GROWING BUSINESSES' },
                { label: isRtl ? 'الشركات الصغيرة والمتوسطة' : 'SMES & MSMES' },
                { label: isRtl ? 'الشركات في أزمات' : 'BUSINESSES IN CRISIS' },
              ].map((stage) => (
                <button
                  key={stage.label}
                  type="button"
                  onClick={() => scrollTo('who-we-help')}
                  className="group/pill px-3.5 sm:px-4 lg:px-4.5 py-2 sm:py-2.5 rounded-full bg-white text-[#061848] hover:bg-sky-50 border-2 border-white hover:border-sky-300 shadow-[0_4px_14px_rgba(0,0,0,0.18)] hover:shadow-[0_0_20px_rgba(56,189,248,0.5)] font-mono font-bold text-[11px] sm:text-xs lg:text-[13px] tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5 sm:gap-2 whitespace-nowrap"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] group-hover/pill:scale-125 transition-transform shrink-0" />
                  <span>{stage.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
