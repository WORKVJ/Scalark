'use client';

import PageHeader from '@/components/common/PageHeader';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HowWeWorkPage() {
  const { t, isRtl } = useLanguage();

  return (
    <div className="flex flex-col">
      <PageHeader
        badge={t.howWeWorkPage?.headerBadge}
        title={t.howWeWorkPage?.headerTitle}
        subtitle={t.howWeWorkPage?.headerSubtitle}
        breadcrumb={[{ label: t.nav.howWeWork }]}
        image="/assets/heroes/hero-how-we-work-blue.jpg"
        insightsMetric="14 Wks"
        insightsLabel={isRtl ? 'متوسط مدة التحول المؤسسي' : 'Full Architecture Deployment'}
        insightsGrowth="+4.2x"
      />

      {/* CORE 5-PHASE INTERACTIVE FRAMEWORK */}
      <HowWeWorkSection t={t} />

      {/* SCALARK DOCTRINE & PHILOSOPHY */}
      <PhilosophySection t={t} />

      {/* PHASE SUMMARY BANNER */}
      <section className="py-24 px-6 bg-[#061233] border-t border-[#0084FF]/25 text-center">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#091E58] to-[#061233] border border-[#0084FF]/40 p-8 sm:p-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300 mb-3 block">
            {t.howWeWorkPage?.auditBadge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            {t.howWeWorkPage?.auditTitle}
          </h2>
          <p className="text-blue-100/70 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            {t.howWeWorkPage?.auditDesc}
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#0084FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl hover:scale-105 inline-flex items-center gap-2"
          >
            <span>{t.howWeWorkPage?.btnCall}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
