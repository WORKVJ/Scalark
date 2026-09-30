'use client';

import PageHeader from '@/components/common/PageHeader';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import PhilosophySection from '@/components/sections/PhilosophySection';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Compass, GitMerge } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HowWeWorkPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="EXECUTION FRAMEWORK"
        title="The Proprietary 5-Phase Systems Architecture Framework"
        subtitle="A battle-tested methodology engineered to transition businesses from founder firefighting to institutional self-operating governance."
        breadcrumb={[{ label: 'How We Work' }]}
      />

      {/* CORE 5-PHASE INTERACTIVE FRAMEWORK */}
      <HowWeWorkSection t={t} />

      {/* SCALARK DOCTRINE & PHILOSOPHY */}
      <PhilosophySection t={t} />

      {/* PHASE SUMMARY BANNER */}
      <section className="py-24 px-6 bg-[#061233] border-t border-[#0E37A4]/25 text-center">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-[#091E58] to-[#061233] border border-[#0E37A4]/40 p-8 sm:p-14">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300 mb-3 block">
            PHASE 01: INITIAL DIAGNOSIS
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Begin with a Deep Diagnostic Audit
          </h2>
          <p className="text-blue-100/70 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Before proposing solutions, we conduct a structured diagnostic across your sales, operations, cash flow, and team cadence to pinpoint true systemic root causes.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#0E37A4] hover:bg-[#0A2A7E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl hover:scale-105 inline-flex items-center gap-2"
          >
            <span>Book a Consultation Call</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
