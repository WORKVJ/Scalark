'use client';

import PageHeader from '@/components/common/PageHeader';
import SolutionsSection from '@/components/sections/SolutionsSection';
import { SOLUTIONS_DATA } from '@/data/contentData';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Layers, Cpu, Shield, TrendingUp, BarChart2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function SolutionsPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="SOLUTIONS & STRATEGIC PILLARS"
        title="Institutional Systems Across 4 Enterprise Pillars"
        subtitle="SCALARK replaces ad-hoc firefighting with synchronized operational architecture across Operations, Revenue, Finance, and Human Capital."
        breadcrumb={[{ label: 'What We Solve' }]}
        image="/who-we-help-hero.jpg"
      />

      {/* 4 INTERACTIVE DUAL-TONE PILLARS */}
      <SolutionsSection t={t} />

      {/* COMPLETE 8-DOMAIN ARCHITECTURAL CATALOGUE */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300 block mb-2 sm:mb-3">
            SYSTEM SPECIFICATIONS
          </span>
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight">
            Comprehensive Systems Catalogue
          </h2>
          <p className="mt-3 sm:mt-4 text-blue-100/70 text-xs sm:text-base leading-relaxed">
            Every system is designed to integrate seamlessly into your existing operations with zero unnecessary friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SOLUTIONS_DATA.map((solution) => (
            <div
              key={solution.id}
              className="rounded-2xl sm:rounded-3xl bg-[#081B4E] border border-[#0084FF]/30 p-5 sm:p-7 flex flex-col justify-between hover:border-[#0084FF] transition-all duration-300 group hover:shadow-[0_15px_40px_rgba(0,132,255,0.3)]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-blue-200/60 font-bold">
                    DOMAIN {solution.num}
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
                <span>Consult on This Domain</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#081B4E] border-t border-[#0084FF]/30 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[11px] sm:text-xs font-tech font-bold uppercase tracking-widest text-blue-300 mb-3">
            TAILORED DEPLOYMENT
          </span>
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Need a Custom Architecture Blueprint?
          </h2>
          <p className="text-blue-100/80 text-xs sm:text-base max-w-xl mb-6 sm:mb-8 leading-relaxed">
            We don't deliver off-the-shelf templates. Every operational roadmap is bespoke to your business model, cash dynamics, and team capability.
          </p>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#0084FF] hover:bg-[#0070E0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Book a Consultation Call</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
