'use client';

import PageHeader from '@/components/common/PageHeader';
import WhoWeHelpSection from '@/components/sections/WhoWeHelpSection';
import BusinessStageSection from '@/components/sections/BusinessStageSection';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Zap, Target } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function WhoWeHelpPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="TARGET AUDIENCE & ARCHITECTURE"
        title="Tailored Operational Systems for Every Growth Stage"
        subtitle="Whether you're laying your first foundation or untangling a complex legacy enterprise, SCALARK replaces founder bottlenecks with institutional systems."
        breadcrumb={[{ label: 'Who We Help' }]}
      />

      {/* CORE AUDIENCE GRID */}
      <WhoWeHelpSection t={t} />

      {/* BUSINESS STAGES INTERACTIVE MATRIX */}
      <BusinessStageSection t={t} />

      {/* HIGH IMPACT CTA BANNER */}
      <section className="py-20 px-6 bg-[#061233] border-t border-[#0E37A4]/25 relative overflow-hidden">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#091E58] to-[#061233] border border-[#0E37A4]/40 p-8 sm:p-14 text-center flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-300 font-bold mb-3">
            NOT SURE WHERE TO START?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            Get an Objective Root-Cause Systems Audit
          </h2>
          <p className="text-blue-100/70 text-sm sm:text-base max-w-2xl mb-8 leading-relaxed">
            Our principal systems architects conduct a confidential 45-minute diagnosis session to identify the exact operational constraints holding back your organisation.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#0E37A4] hover:bg-[#0A2A7E] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-2"
          >
            <span>Book a Consultation Call</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </section>
    </div>
  );
}
