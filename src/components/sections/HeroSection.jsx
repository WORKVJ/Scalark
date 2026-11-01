'use client';

import Link from 'next/link';
import { 
  ArrowRight, 
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
      className="relative min-h-screen pt-32 pb-20 overflow-hidden flex flex-col justify-between bg-gradient-to-b from-[#0E4BC9] via-[#155DEC] to-[#0A39A2] text-white selection:bg-[#38BDF8] selection:text-[#081B4E]"
    >
      {/* 1. ELEGANT AMBIENT BACKGROUND */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-b from-[#38BDF8]/30 via-[#0084FF]/20 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* 2. HERO HEADLINE & VALUE PROPOSITION */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full text-center flex flex-col items-center">
        
        {/* SUBTLE EDITORIAL EYEBROW (NO PULSING DOT, NO MONO) */}
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-sky-200 uppercase mb-4">
          {isRtl ? 'استشارات وهندسة نظم الأعمال' : 'Business Systems Architecture'}
        </span>

        {/* EDITORIAL HEADLINE */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] sm:leading-[1.1] max-w-4xl mx-auto mb-6 text-white font-sans px-2">
          {t.hero.titleMain}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300">
            {t.hero.titleAccent}
          </span>
        </h1>

        {/* SUBTITLE */}
        <p className="text-sm sm:text-base md:text-lg text-blue-100/90 max-w-2xl mx-auto font-normal leading-relaxed mb-8 px-2">
          {t.hero.desc}
        </p>

        {/* DUAL ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 w-full max-w-xs sm:max-w-none mx-auto sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-[#0A39A2] hover:bg-sky-50 font-bold text-sm rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
          >
            <span>{t.hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
          </Link>

          <Link
            href="/solutions"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm rounded-full backdrop-blur-md transition-all duration-200 active:scale-95"
          >
            <span>{t.hero.ctaSecondary}</span>
            <ArrowRight className="w-3.5 h-3.5 text-sky-200 rtl:rotate-180" />
          </Link>
        </div>
      </div>

      {/* 3. CORE SERVICES LIST — BESPOKE, CLEAN & PROFESSIONAL */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full mt-14 sm:mt-18">
        
        {/* EDITORIAL SECTION HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6 pb-3 border-b border-white/15 text-start">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
              {isRtl ? 'مجالات العمل والخدمات الرئيسية' : 'Core Practice Areas & Services'}
            </h2>
            <p className="text-xs text-blue-100/75 mt-0.5">
              {isRtl ? 'أنظمة عملية لاستبدال ارتهان العمل بالمؤسس بوضوح تشغيلي مستدام.' : 'Practical systems designed to replace founder firefighting with operational clarity.'}
            </p>
          </div>

          <Link
            href="/solutions"
            className="text-xs font-semibold text-sky-200 hover:text-white transition-colors flex items-center gap-1 shrink-0 group self-start sm:self-auto"
          >
            <span>{isRtl ? 'عرض كافة الحلول' : 'View All Solutions'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform rtl:rotate-180" />
          </Link>
        </div>

        {/* 4 CLEAN CARDS IN ONE ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {coreServices.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.id}
                href="/solutions"
                className="group relative rounded-2xl bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 hover:border-white/40 backdrop-blur-md p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-md text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-sky-200 group-hover:bg-white group-hover:text-[#0A39A2] transition-colors">
                      <Icon className="w-5 h-5 stroke-[2]" />
                    </div>
                    <span className="text-xs font-semibold text-sky-200/50 group-hover:text-white transition-colors">
                      {service.num}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-sky-200 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs text-blue-100/80 leading-relaxed font-normal">
                    {service.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-sky-200 group-hover:text-white transition-colors">
                  <span>{isRtl ? 'تفاصيل الخدمة' : 'Learn More'}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* 4. AUDIENCE STRIP (TASTEFUL, EDITORIAL, NO NEON LIGHTS) */}
      <div className="relative z-10 w-full pt-12 sm:pt-14 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-4 px-6 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md text-center sm:text-start">
          <span className="text-xs font-medium text-sky-200/90 whitespace-nowrap">
            {isRtl ? 'أنظمة مخصصة لكل مرحلة نمو:' : 'Systems tailored for every growth stage:'}
          </span>
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 text-xs font-semibold text-white">
            {[
              { label: isRtl ? 'الشركات الناشئة' : 'Startups' },
              { label: isRtl ? 'رواد الأعمال' : 'Entrepreneurs' },
              { label: isRtl ? 'الشركات النامية' : 'Growing Businesses' },
              { label: isRtl ? 'الشركات الصغيرة والمتوسطة' : 'SMEs & MSMEs' },
              { label: isRtl ? 'الشركات في أزمات' : 'Turnaround & Crisis' },
            ].map((stage) => (
              <button
                key={stage.label}
                type="button"
                onClick={() => scrollTo('who-we-help')}
                className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white hover:text-[#0A39A2] transition-colors cursor-pointer text-xs"
              >
                {stage.label}
              </button>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
