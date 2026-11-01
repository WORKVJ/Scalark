'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ChevronRight,
  ArrowRight,
  Calendar,
  ArrowUpRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumb = [],
  image,
  ctaText,
  ctaHref = '/contact',
  secondaryCtaText,
  secondaryCtaHref = '/diagnose',
  insightsMetric = '98.4%',
  insightsLabel,
  insightsGrowth = '+3.4x'
}) {
  const { t, isRtl } = useLanguage();

  const heroImage = image || '/assets/heroes/hero-solutions-blue.jpg';

  return (
    <section className="relative w-full pt-28 sm:pt-32 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* ========================================================
          FRAMED ULTRA-MODERN HERO CARD CONTAINER (MATCHING REFERENCE)
          Curved corners, subtle glowing border, deep shadow, and rich blue aesthetic.
          ======================================================== */}
      <div className="relative rounded-[28px] sm:rounded-[36px] lg:rounded-[42px] overflow-hidden border border-[#0084FF]/30 shadow-[0_25px_70px_rgba(2,7,27,0.55)] min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-[#02071B]">
        {/* ========================================================
            BACKGROUND PHOTOGRAPHY WITH LUMINOUS BLUE COLOR GRADING
            Crisp, bright, high-key corporate daylight with blue sapphire ambiance.
            ======================================================== */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <Image
            src={heroImage}
            alt={title || 'SCALARK Enterprise Systems'}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-[center_right] sm:object-right transition-transform duration-700 hover:scale-105"
          />

          {/* Balanced directional fade on text side: left-to-right (right-to-left in RTL) */}
          <div className="absolute inset-y-0 start-0 w-full sm:w-[80%] lg:w-[62%] bg-gradient-to-r rtl:bg-gradient-to-l from-[#02071B]/95 via-[#02071B]/75 to-transparent z-10" />

          {/* Atmospheric corporate sapphire glow overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,132,255,0.22),transparent_65%)] z-10 pointer-events-none" />

          {/* Bottom subtle grounding shadow for bottom bar */}
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#02071B]/90 via-[#02071B]/40 to-transparent z-10" />
        </div>

        {/* ========================================================
            TOP RIGHT: FLOATING INSIGHTS GLASS CARD (MATCHING REFERENCE)
            Neumorphic white/frosted card with progress bar, avatar & big KPI stat.
            ======================================================== */}
        <div className="hidden lg:block absolute top-8 end-8 z-20 w-[275px] rounded-[24px] bg-white/95 text-slate-900 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl border border-white/60 text-start animate-fade-in">
          {/* Header row: "Insights" + green pill */}
          <div className="flex items-center justify-between mb-3">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
              {isRtl ? 'مؤشرات الأداء' : 'Insights'}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-bold shadow-sm">
              <TrendingUp className="w-3 h-3 text-emerald-600" />
              <span>{insightsGrowth}</span>
            </span>
          </div>

          {/* Profile row: Avatar + Name / Market */}
          <div className="flex items-center gap-2.5 py-2 border-b border-slate-100 mb-3">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-slate-200 shadow-sm shrink-0">
              <Image
                src="/assets/squad/squad_thanzeer.jpg"
                alt="Architect"
                fill
                className="object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-bold text-slate-900 truncate">
                {isRtl ? 'محفظة التوسع المؤسسي' : 'Enterprise Growth'}
              </p>
              <p className="text-[10px] text-slate-500 truncate">
                {isRtl ? 'المملكة العربية السعودية والخليج' : 'KSA, UAE & Cross-Border'}
              </p>
            </div>
          </div>

          {/* Progress bar row */}
          <div className="space-y-1.5 mb-2.5">
            <div className="flex items-center justify-between text-[11px] text-slate-600">
              <span className="font-medium">{isRtl ? 'سرعة الأنظمة' : 'System Velocity'}</span>
              <span className="font-mono font-bold text-[#0084FF]">Q4 Target</span>
            </div>
            <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/50">
              <div className="h-full bg-gradient-to-r from-[#0084FF] to-emerald-500 rounded-full w-[88%]" />
            </div>
          </div>

          {/* Big KPI Metric */}
          <div className="pt-1.5 flex items-baseline justify-between border-t border-slate-100/80">
            <span className="text-2xl font-black text-slate-900 font-sans tracking-tight">
              {insightsMetric}
            </span>
            <span className="text-[10px] font-semibold text-slate-500">
              {insightsLabel || (isRtl ? 'حوكمة ذاتية' : 'Autonomous Scale')}
            </span>
          </div>
        </div>

        {/* ========================================================
            MAIN LEFT CONTENT (TYPOGRAPHY, BADGE, BUTTONS, AVATAR CARD)
            ======================================================== */}
        <div className="relative z-20 max-w-2xl text-start pt-2">
          {/* BREADCRUMBS */}
          <div className="flex items-center gap-1.5 text-xs font-mono text-blue-200/70 mb-4 sm:mb-6 uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors font-medium">
              {t.nav?.home || 'Home'}
            </Link>
            {breadcrumb.map((crumb, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3 h-3 text-blue-300/50 rtl:rotate-180" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors font-medium">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white font-bold">{crumb.label}</span>
                )}
              </div>
            ))}
          </div>

          {/* PILL BADGE (MATCHING ★ 24/7 SERVICE AVAILABLE) */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-sky-200 mb-4 sm:mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#0084FF] shadow-[0_0_8px_#0084FF] animate-pulse" />
              <span>★ {badge}</span>
            </div>
          )}

          {/* MAIN HEADLINE */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] font-sans drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            {title}
          </h1>

          {/* SUBTITLE */}
          {subtitle && (
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-blue-100/90 font-normal leading-relaxed max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              {subtitle}
            </p>
          )}

          {/* DUAL ACTION BUTTONS (MATCHING REFERENCE PILLS) */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href={ctaHref}
              className="px-6 py-3 rounded-full bg-[#0084FF] hover:bg-[#0070D8] text-white text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_10px_30px_rgba(0,132,255,0.4)] transition-all hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              <span>{ctaText || (isRtl ? 'حجز جلسة استشارية' : 'Book Architecture Call')}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>

            <Link
              href={secondaryCtaHref}
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-blue-300" />
              <span>{secondaryCtaText || (isRtl ? 'تشخيص الأنظمة المجاني' : 'Free Systems Diagnosis')}</span>
            </Link>
          </div>

          {/* FLOATING CARD 1: AVATARS TRUST PILL (MATCHING REFERENCE BOTTOM LEFT) */}
          <div className="mt-6 sm:mt-8 inline-flex items-center gap-3.5 p-2 sm:p-2.5 px-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl">
            <div className="flex -space-x-2 rtl:space-x-reverse">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image src="/assets/squad/squad_thanzeer.jpg" alt="Partner" fill className="object-cover" />
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image src="/assets/squad/squad_riswan.jpg" alt="Partner" fill className="object-cover" />
              </div>
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-sm">
                <Image src="/assets/squad/squad_hamas.jpg" alt="Partner" fill className="object-cover" />
              </div>
            </div>

            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0">
              <ArrowUpRight className="w-3.5 h-3.5" />
            </div>

            <div className="text-start">
              <p className="text-[11px] sm:text-xs font-bold text-white leading-tight">
                {isRtl ? '+60 نظام مؤسسي معتمد' : '60+ Enterprise Architectures'}
              </p>
              <p className="text-[9px] sm:text-[10px] text-blue-200/80 leading-tight">
                {isRtl ? 'في المملكة والخليج' : 'Across KSA, UAE & Cross-Border'}
              </p>
            </div>
          </div>
        </div>

        {/* ========================================================
            SIGNATURE DOCKED BOTTOM NOTCH BAR (MATCHING REFERENCE BOTTOM)
            Docked commitment on left + specialist architects pill on right.
            ======================================================== */}
        <div className="relative z-20 mt-8 sm:mt-12 pt-4 pb-1 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-start">
          <p className="text-[11px] sm:text-xs text-blue-100/80 font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span>
              {isRtl
                ? 'أنظمة مؤسسية قابلة للنمو تحل محل المركزية الفردية وتضمن الاستدامة التشغيلية'
                : 'Codified institutional systems replacing founder bottlenecks with sustainable scale'}
            </span>
          </p>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shrink-0 shadow-sm">
            <div className="flex -space-x-1.5 rtl:space-x-reverse">
              <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white">
                <Image src="/assets/squad/squad_thanzeer.jpg" alt="Architect" fill className="object-cover" />
              </div>
              <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white">
                <Image src="/assets/squad/squad_riswan.jpg" alt="Architect" fill className="object-cover" />
              </div>
            </div>
            <span>★ {isRtl ? 'كبار مهندسي الأنظمة' : 'Certified Systems Architects'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
