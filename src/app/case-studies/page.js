'use client';

import PageHeader from '@/components/common/PageHeader';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function CaseStudiesPage() {
  const { t } = useLanguage();
  const cp = t.caseStudiesPage;

  return (
    <div className="flex flex-col bg-[#040E2A] text-white">
      <PageHeader
        badge={cp.headerBadge}
        title={cp.headerTitle}
        subtitle={cp.headerSubtitle}
        breadcrumb={[{ label: t.nav.caseStudies }]}
        image="/assets/heroes/hero-case-studies-v2.jpg"
      />

      {/* CORE CASE STUDIES & FOUNDER REELS */}
      <CaseStudiesSection t={t} />

      {/* VERIFIED BENCHMARKS METRICS GRID */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="rounded-2xl sm:rounded-3xl bg-[#081B4E] border border-[#0084FF]/30 p-5 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300 block mb-2">
              {cp.benchmarksBadge}
            </span>
            <h3 className="text-xl sm:text-4xl font-black text-white tracking-tight">
              {cp.benchmarksTitle}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 text-center">
            <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#081B4E] border border-[#0084FF]/30">
              <div className="text-2xl sm:text-4xl font-black text-white font-mono mb-1">
                65%
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-blue-200/70">
                {cp.metric1Label}
              </div>
            </div>
            <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#081B4E] border border-[#0084FF]/30">
              <div className="text-2xl sm:text-4xl font-black text-emerald-400 font-mono mb-1">
                +42%
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-blue-200/70">
                {cp.metric2Label}
              </div>
            </div>
            <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#081B4E] border border-[#0084FF]/30">
              <div className="text-2xl sm:text-4xl font-black text-cyan-400 font-mono mb-1">
                99.4%
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-blue-200/70">
                {cp.metric3Label}
              </div>
            </div>
            <div className="p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-[#081B4E] border border-[#0084FF]/30">
              <div className="text-2xl sm:text-4xl font-black text-blue-300 font-mono mb-1">
                2.8x
              </div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-wider text-blue-200/70">
                {cp.metric4Label}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#081B4E] border-t border-[#0084FF]/30 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest text-blue-300 mb-3">
            {cp.ctaBadge}
          </span>
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight mb-4">
            {cp.ctaTitle}
          </h2>
          <p className="text-blue-100/70 text-xs sm:text-base max-w-xl mb-6 sm:mb-8 leading-relaxed">
            {cp.ctaDesc}
          </p>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#0084FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2"
          >
            <span>{cp.btnCall}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}
