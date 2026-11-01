'use client';

import PageHeader from '@/components/common/PageHeader';
import SolutionsSection from '@/components/sections/SolutionsSection';
import { getSolutionsData } from '@/data/contentData';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SolutionsPage() {
  const { currentLang, isRtl, t } = useLanguage();
  const solutions = getSolutionsData(currentLang);

  return (
    <div className="flex flex-col">
      <PageHeader
        badge={t.solutionsPage?.headerBadge}
        title={t.solutionsPage?.headerTitle}
        subtitle={t.solutionsPage?.headerSubtitle}
        breadcrumb={[{ label: t.nav.whatWeSolve }]}
        image="/assets/heroes/hero-solutions-blue.jpg"
        insightsMetric="98.4%"
        insightsLabel={isRtl ? 'اعتماد الإجراءات التشغيلية' : 'SOP & Systems Adoption'}
        insightsGrowth="+3.4x"
      />

      {/* 4 INTERACTIVE DUAL-TONE PILLARS */}
      <SolutionsSection t={t} />

      {/* COMPLETE ARCHITECTURAL CATALOGUE */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300 block mb-2 sm:mb-3">
            {t.solutionsPage?.catalogueBadge}
          </span>
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight font-sans">
            {t.solutionsPage?.catalogueTitle}
          </h2>
          <p className="mt-3 sm:mt-4 text-blue-100/70 text-xs sm:text-base leading-relaxed">
            {t.solutionsPage?.catalogueSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              className="rounded-2xl sm:rounded-3xl bg-[#081B4E] border border-[#0084FF]/30 p-5 sm:p-7 flex flex-col justify-between hover:border-[#0084FF] transition-all duration-300 group hover:shadow-[0_15px_40px_rgba(0,132,255,0.3)] text-start"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-blue-200/60 font-bold">
                    {t.solutionsPage?.domainLabel} {solution.num}
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-[#0084FF]/25 border border-[#0084FF]/40 text-blue-200 uppercase tracking-wider font-semibold">
                    {solution.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors font-sans">
                  {solution.title}
                </h3>
                <p className="text-xs text-blue-100/70 mb-5 sm:mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2 mb-6 sm:mb-8">
                  {solution.items.slice(0, 5).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-blue-100/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0084FF] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full py-3 rounded-full bg-[#0084FF]/20 hover:bg-[#0084FF] text-white border border-[#0084FF]/40 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200 active:scale-95"
              >
                <span>{solution.cta || t.solutionsPage?.btnConsultDomain}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#081B4E] border-t border-[#0084FF]/30 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[11px] sm:text-xs font-tech font-bold uppercase tracking-widest text-blue-300 mb-3">
            {t.solutionsPage?.blueprintBadge}
          </span>
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight mb-4 font-sans">
            {t.solutionsPage?.blueprintTitle}
          </h2>
          <p className="text-blue-100/80 text-xs sm:text-base max-w-xl mb-6 sm:mb-8 leading-relaxed">
            {t.solutionsPage?.blueprintDesc}
          </p>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#0084FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2"
          >
            <span>{t.solutionsPage?.btnCall}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
