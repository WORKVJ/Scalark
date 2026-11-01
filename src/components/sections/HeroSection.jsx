'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  TrendingUp, 
  DollarSign, 
  Target 
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection({ t: propT }) {
  const { isRtl, t: ctxT } = useLanguage();
  const t = propT || ctxT;

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const coreServices = [
    {
      id: 'operations',
      num: '01',
      icon: Layers,
      title: isRtl ? 'العمليات والإجراءات القياسية' : 'Operations & SOPs',
      desc: isRtl 
        ? 'توثيق إجراءات العمل ومصفوفات التفويض ليعمل عملك باستقلالية تامة عن المالك.'
        : 'Codify workflows, SOPs, and delegation matrices so your business runs without owner bottlenecks.'
    },
    {
      id: 'sales',
      num: '02',
      icon: TrendingUp,
      title: isRtl ? 'المبيعات والإيرادات' : 'Sales & Revenue',
      desc: isRtl
        ? 'تحويل نشاط المبيعات العشوائي إلى مسار إيرادات منضبط وقابل للتنبؤ والقياس.'
        : 'Transform erratic sales activity into a predictable, governed pipeline with conversion rigor.'
    },
    {
      id: 'finance',
      num: '03',
      icon: DollarSign,
      title: isRtl ? 'المالية والتدفق النقدي' : 'Finance & Cash Flow',
      desc: isRtl
        ? 'تحقيق وضوح مالي فوري لاقتصاديات الوحدة، وهوامش الربح، وتوقعات السيولة النقدية.'
        : 'Gain real-time visibility into unit economics, profit margins, and forward cash runway dashboards.'
    },
    {
      id: 'governance',
      num: '04',
      icon: Target,
      title: isRtl ? 'الكادر والحوكمة' : 'People & Governance',
      desc: isRtl
        ? 'مواءمة القيادة وفرق العمل ببطاقات قياس أداء واضحة، ومؤشرات أداء شفافة، وإيقاع إداري منضبط.'
        : 'Align leadership and teams with clear role scorecards, transparent KPIs, and executive review rhythms.'
    }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 sm:pb-20 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#0E4BC9] via-[#155DEC] to-[#0A39A2] text-white selection:bg-[#38BDF8] selection:text-[#081B4E]"
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

      {/* 3. CORE SERVICES LIST — ULTRA-CLEAN, LIGHTWEIGHT & PROFESSIONAL */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full mt-10 sm:mt-14">
        
        {/* Subtle section title */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-sky-200 font-bold">
              {isRtl ? 'خدمات النظم الاستشارية الرئيسية' : 'CORE PRACTICE AREAS & SERVICES'}
            </span>
          </div>

          <Link
            href="/solutions"
            className="text-xs font-semibold text-sky-200 hover:text-white transition-colors flex items-center gap-1 group"
          >
            <span>{isRtl ? 'عرض كافة الحلول' : 'View All Solutions'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
          </Link>
        </div>

        {/* 4 SLEEK COMPACT CARDS IN ONE ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href="/solutions"
                className="group relative rounded-2xl bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-white/50 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sky-200 group-hover:bg-white group-hover:text-[#0A39A2] transition-colors shadow-sm">
                      <Icon className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <span className="font-mono text-xs font-bold text-sky-200/60 group-hover:text-white transition-colors">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-sky-200 transition-colors font-sans">
                    {service.title}
                  </h3>

                  <p className="text-xs text-blue-100/80 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-semibold text-sky-200 group-hover:text-white transition-colors">
                  <span>{isRtl ? 'تفاصيل النظام' : 'Learn More'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 4. BUSINESS STAGES ACCREDITATION BAR */}
      <div className="relative z-10 w-full pt-10 sm:pt-12 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-white/[0.12] via-white/[0.18] to-white/[0.12] backdrop-blur-xl border-2 border-white/30 shadow-[0_12px_45px_rgba(0,0,0,0.45)] py-4 sm:py-5 px-4 sm:px-6 lg:px-8 text-center overflow-hidden group">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent shadow-[0_0_14px_#38BDF8]" />
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#38BDF8]/25 rounded-full blur-2xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061848]/70 border border-[#38BDF8]/40 mb-3 sm:mb-4 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34D399]" />
              <span className="text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest text-sky-200">
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
