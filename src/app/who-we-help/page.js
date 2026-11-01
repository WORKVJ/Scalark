'use client';

import PageHeader from '@/components/common/PageHeader';
import WhoWeHelpSection from '@/components/sections/WhoWeHelpSection';
import BusinessStageSection from '@/components/sections/BusinessStageSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function WhoWeHelpPage() {
  const { t, isRtl } = useLanguage();

  return (
    <div className="flex flex-col">
      <PageHeader
        badge={t.whoWeHelpPage?.headerBadge}
        title={t.whoWeHelpPage?.headerTitle}
        subtitle={t.whoWeHelpPage?.headerSubtitle}
        breadcrumb={[{ label: t.nav.whoWeHelp }]}
        image="/assets/heroes/hero-who-we-help-v2.jpg"
      />

      {/* CORE AUDIENCE GRID */}
      <WhoWeHelpSection t={t} />

      {/* BUSINESS STAGES INTERACTIVE MATRIX */}
      <BusinessStageSection t={t} />

      {/* HIGH IMPACT CTA BANNER */}
      <section className="py-20 px-6 bg-[#061233] border-t border-[#0084FF]/25 relative overflow-hidden">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#091E58] to-[#061233] border border-[#0084FF]/40 p-8 sm:p-14 text-center flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-300 font-bold mb-3">
            {t.whoWeHelpPage?.auditBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            {t.whoWeHelpPage?.auditTitle}
          </h2>
          <p className="text-blue-100/70 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
            {t.whoWeHelpPage?.auditDesc}
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#0084FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <span>{t.whoWeHelpPage?.btnBookCall}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
