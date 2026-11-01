'use client';

import { useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  BarChart3,
  DollarSign,
  Users,
  Search,
  Globe2,
  ShieldCheck,
  TrendingUp,
  Clock,
  Compass,
  Check,
  ChevronRight,
  PhoneCall
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SERVICE_ICONS = {
  sops: Layers,
  revenue: BarChart3,
  finance: DollarSign,
  governance: Users,
  audit: Search,
  expansion: Globe2
};

const SERVICE_HERO_BG = {
  sops: '/assets/systems-architecture.jpg',
  revenue: '/assets/phone-dashboard.jpg',
  finance: '/assets/hero-boardroom.jpg',
  governance: '/assets/hero-architect.jpg',
  audit: '/assets/heroes/hero-solutions-v2.jpg',
  expansion: '/assets/heroes/hero-how-we-work-v2.jpg'
};

const IMPLEMENTATION_PHASES = {
  en: [
    {
      num: '01',
      title: 'Forensic Audit & Bottleneck Discovery',
      desc: 'We map existing operational friction points, single-person dependencies, and cash/execution leaks.'
    },
    {
      num: '02',
      title: 'Systems Architecture & Playbook Codification',
      desc: 'Our architects construct bespoke SOPs, delegation matrices, financial models, and governance dashboards.'
    },
    {
      num: '03',
      title: 'Team Integration & Accountability Calibration',
      desc: 'We embed scorecards and standard operating cadences directly into team workflows with zero downtime.'
    },
    {
      num: '04',
      title: 'Institutional Governance & Handover',
      desc: 'Leadership receives autonomous oversight dashboards and weekly management rhythms for sustainable scale.'
    }
  ],
  ar: [
    {
      num: '01',
      title: 'التدقيق الجنائي وكشف الاختناقات',
      desc: 'نرسم خريطة لنقاط الاحتكاك التشغيلي الحالية، ومصادر الاعتماد على المؤسس، ومواطن تسرب الوقت والمال.'
    },
    {
      num: '02',
      title: 'هندسة النظم وتوثيق أدلة العمل',
      desc: 'يقوم خبراؤنا ببناء إجراءات عمل قياسية ومصفوفات تفويض ونماذج مالية ولوحات حوكمة مصممة خصيصاً لشركتك.'
    },
    {
      num: '03',
      title: 'دمج الفريق ومعايرة المساءلة',
      desc: 'ندمج بطاقات قياس الأداء والإيقاعات التشغيلية مباشرة في روتين الفريق دون أي توقف لسير العمل اليومي.'
    },
    {
      num: '04',
      title: 'الحوكمة المؤسسية والتسليم الكامل',
      desc: 'تتولى القيادة إدارة الشركة عبر لوحات تحكم مستقلة وإيقاع إدارة أسبوعي يدعم التوسع المستدام.'
    }
  ]
};

export default function ServiceDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { t, isRtl, currentLang } = useLanguage();

  const serviceId = params?.id;
  const sData = t.servicesSection || {};
  const allServices = sData.services || [];

  // Find the selected service or fallback to first
  const service = useMemo(() => {
    return allServices.find((s) => s.id === serviceId) || allServices[0] || null;
  }, [allServices, serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#040E2A] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{isRtl ? 'الخدمة غير موجودة' : 'Service Not Found'}</h2>
          <Link
            href="/#services"
            className="px-6 py-3 rounded-full bg-[#70A52E] text-white text-sm font-semibold"
          >
            {isRtl ? 'العودة للخدمات' : 'Back to Services'}
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = SERVICE_ICONS[service.id] || Layers;
  const heroImage = SERVICE_HERO_BG[service.id] || '/assets/systems-architecture.jpg';
  const phases = IMPLEMENTATION_PHASES[currentLang] || IMPLEMENTATION_PHASES.en;

  // Other services for bottom navigation
  const otherServices = allServices.filter((s) => s.id !== service.id);

  return (
    <div className="min-h-screen bg-[#040E2A] text-white flex flex-col">
      {/* 1. DEDICATED HERO SECTION WITH INTEGRATED BREADCRUMB */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 px-4 sm:px-8 border-b border-[#0084FF]/20 bg-[#061233] overflow-hidden min-h-[500px] flex items-center">
        {/* Background photo + dark gradient overlays */}
        <div className="absolute inset-0 z-0 select-none">
          <Image
            src={heroImage}
            alt={service.title}
            fill
            priority
            className="object-cover object-center opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r rtl:md:bg-gradient-to-l from-[#040E2A] via-[#040E2A]/90 to-[#040E2A]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#040E2A]/80 via-transparent to-[#040E2A]" />
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-[#70A52E]/15 rounded-full blur-[120px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-3xl text-start">
            
            {/* BACK BUTTON + BREADCRUMBS */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-300 mb-6 uppercase tracking-wider">
              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-all backdrop-blur-md border border-white/10 cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5 rtl:rotate-180" />
                <span>{isRtl ? 'الرجوع للخدمات' : 'Back to Services'}</span>
              </button>

              <span className="text-zinc-500">/</span>

              <Link href="/" className="hover:text-white transition-colors">
                {t.nav?.home || 'Home'}
              </Link>

              <ChevronRight className="w-3 h-3 text-zinc-500 rtl:rotate-180" />

              <Link href="/solutions" className="hover:text-white transition-colors">
                {t.nav?.whatWeSolve || 'Solutions'}
              </Link>

              <ChevronRight className="w-3 h-3 text-zinc-500 rtl:rotate-180" />

              <span className="text-emerald-300 font-bold">{service.acronym}</span>
            </div>

            {/* BADGE & ACRONYM PILL */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold uppercase tracking-widest mb-5 shadow-lg backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{service.badge}</span>
              <span className="text-white/30">•</span>
              <span className="text-white">{service.acronym}</span>
            </div>

            {/* MAIN TITLE */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
              {service.title}
            </h1>

            {/* SHORT SUBTITLE / HOOK */}
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-zinc-200 font-normal leading-relaxed max-w-2xl">
              {service.shortDesc}
            </p>

            {/* PRIMARY HERO CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-[#70A52E] hover:bg-[#5f8f26] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_10px_30px_rgba(112,165,46,0.4)] hover:shadow-[0_15px_40px_rgba(112,165,46,0.6)] active:scale-95 inline-flex items-center gap-2"
              >
                <span>{sData.modalBookCta || 'Schedule System Consultation →'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>

              <Link
                href="/diagnose"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all backdrop-blur-md inline-flex items-center gap-2"
              >
                <Compass className="w-4 h-4 text-emerald-400" />
                <span>{isRtl ? 'تشخيص المؤسسة مجاناً' : 'Free Business Diagnostic'}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THREE-PILLAR AUDITED METRICS BAR */}
      <section className="py-8 bg-[#03091E] border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-start">
            
            {/* Metric 1: Audited Outcome */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                  {isRtl ? 'الأثر والنتيجة الملموسة' : 'Audited Outcome'}
                </span>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">
                  {service.outcome}
                </p>
              </div>
            </div>

            {/* Metric 2: Estimated Deployment */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-bold block mb-1">
                  {isRtl ? 'الجدول الزمني للدمج' : 'Deployment Timeline'}
                </span>
                <p className="text-sm sm:text-base font-bold text-white leading-snug">
                  {service.timeline}
                </p>
              </div>
            </div>

            {/* Metric 3: Who This Is For */}
            <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold block mb-1">
                  {isRtl ? 'الفئة المستهدفة' : 'Engineered For'}
                </span>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {service.whoFor}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. DEEP SYSTEM OVERVIEW & STRATEGIC RATIONALE */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <div className="lg:col-span-5 space-y-6 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#70A52E]/10 border border-[#70A52E]/30 text-[#70A52E] text-xs font-mono font-bold uppercase tracking-wider">
              <IconComponent className="w-3.5 h-3.5" />
              <span>{isRtl ? 'فلسفة النظام المؤسسي' : 'Systems Architecture Doctrine'}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight font-sans">
              {isRtl
                ? 'استبدال اجتهاد الأفراد بنظم مؤسسية لا تتوقف'
                : 'Replacing Individual Heroics With Self-Governing Architecture'}
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              {service.detailedOverview}
            </p>

            {/* Quick checklist points */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                {isRtl ? 'المبادئ الأساسية للتطبيق:' : 'Core Architectural Benchmarks:'}
              </h4>
              {service.points?.map((pt, idx) => (
                <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-zinc-200">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-emerald-300 stroke-[3]" />
                  </span>
                  <span>{pt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* DELIVERABLES CARDS (RIGHT SIDE GRID) */}
          <div className="lg:col-span-7 space-y-6 text-start">
            <div className="rounded-3xl bg-[#081B4E]/60 border border-[#0084FF]/30 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
                    {isRtl ? 'المخرجات الملموسة' : 'Tangible Deliverables'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {isRtl ? 'ما يتم بناؤه وتسليمه لشركتك' : 'What Gets Architected & Deployed'}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-[#70A52E]/15 border border-[#70A52E]/30 flex items-center justify-center text-[#70A52E]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
              </div>

              <div className="space-y-4">
                {service.deliverables?.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#040E2A]/70 border border-white/10 flex items-start gap-4 hover:border-emerald-500/40 transition-colors group"
                  >
                    <span className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 group-hover:bg-[#70A52E] group-hover:text-white transition-colors">
                      {idx + 1}
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-white leading-snug group-hover:text-emerald-300 transition-colors">
                        {item}
                      </p>
                      <p className="text-xs text-zinc-400">
                        {isRtl
                          ? 'نظام رقمي موثق ومدمج في منصات العمل ومساءلة الفريق.'
                          : 'Fully codified, integrated into operational workflows with verified team ownership.'}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. 4-PHASE IMPLEMENTATION METHODOLOGY */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-[#03091E] border-y border-zinc-800">
        <div className="max-w-7xl mx-auto text-start">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#70A52E] block mb-2">
              {isRtl ? 'منهجية التنفيذ المؤسسي' : 'Deployment Methodology'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-sans">
              {isRtl
                ? 'كيف ندمج هذا النظام خطوة بخطوة'
                : 'How We Deploy This System Across Your Enterprise'}
            </h2>
            <p className="mt-3 text-zinc-400 text-xs sm:text-base">
              {isRtl
                ? 'خارطة طريق تنفيذية محكمة تضمن انتقالاً سلساً دون إرباك العمليات القائمة.'
                : 'A structured, battle-tested roadmap ensuring frictionless adoption without disrupting daily business.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#07163D]/60 border border-blue-900/40 relative group hover:border-[#70A52E] transition-all duration-300"
              >
                <span className="text-3xl font-black font-mono text-white/20 group-hover:text-[#70A52E] transition-colors block mb-4">
                  {phase.num}
                </span>
                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-emerald-300 transition-colors">
                  {phase.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EXPLORE OTHER ARCHITECTURAL SYSTEMS (CAROUSEL / GRID) */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full text-start">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#70A52E] block mb-2">
              {isRtl ? 'كتالوج الأنظمة المؤسسية' : 'Comprehensive Systems Catalogue'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight font-sans">
              {isRtl ? 'استكشف بقية الأنظمة المتاحة' : 'Explore Other Core Business Systems'}
            </h2>
          </div>

          <Link
            href="/solutions"
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 transition-colors"
          >
            <span>{isRtl ? 'عرض كل الحلول' : 'View Full Solutions'}</span>
            <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherServices.slice(0, 3).map((other) => {
            const OtherIcon = SERVICE_ICONS[other.id] || Layers;

            return (
              <Link
                key={other.id}
                href={`/services/${other.id}`}
                className="p-6 rounded-3xl bg-[#07163D]/50 border border-white/10 hover:border-[#70A52E] transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30">
                      {other.badge}
                    </span>
                    <OtherIcon className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors font-sans">
                    {other.title}
                  </h3>

                  <p className="text-xs text-zinc-300 line-clamp-2 leading-relaxed mb-4">
                    {other.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-emerald-300">
                  <span>{isRtl ? 'عرض تفاصيل النظام' : 'Inspect Architecture'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 6. BOTTOM CONSULTATION BANNER */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#03091E] to-[#040E2A] border-t border-zinc-800 text-center">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#0F5342]/40 via-[#07163D] to-[#082C23]/40 border border-emerald-500/30 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#70A52E]/20 rounded-full blur-3xl pointer-events-none" />
          
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 mb-3 block">
            {isRtl ? 'جاهز لهندسة نظامك المؤسسي؟' : 'Ready to Engineer Your Business System?'}
          </span>

          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            {isRtl
              ? `احجز جلسة تشخيصية لنظام ${service.title}`
              : `Schedule Diagnostic for ${service.title}`}
          </h2>

          <p className="text-zinc-300 text-xs sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {isRtl
              ? 'تحدث مباشرة مع كبير مهندسي النظم لدينا لتشخيص الثغرات وبناء خطة عمل لدمج هذا النظام في شركتك.'
              : 'Speak directly with our Chief Systems Architect to diagnose bottlenecks and map a structured 90-day deployment blueprint.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#70A52E] hover:bg-[#5f8f26] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(112,165,46,0.5)] active:scale-95 inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{sData.modalBookCta || 'Schedule System Consultation →'}</span>
            </Link>

            <Link
              href="/#services"
              className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all"
            >
              {isRtl ? 'العودة لجميع الخدمات' : 'All Services Carousel'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

