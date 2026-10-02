'use client';

import PageHeader from '@/components/common/PageHeader';
import AboutFounderSection from '@/components/sections/AboutFounderSection';
import RotatingSquadSection from '@/components/sections/RotatingSquadSection';
import Link from 'next/link';
import { ArrowRight, Globe, Shield, Award, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="ORGANISATION & MISSION"
        title="Engineering Institutional Clarity for Scaling Enterprises"
        subtitle="SCALARK replaces founder bottlenecks with institutional operational architecture designed for sustainable, predictable expansion."
        breadcrumb={[{ label: 'About' }]}
      />

      {/* FOUNDER & MANIFESTO STORY */}
      <AboutFounderSection t={t} />

      {/* ARCHITECTS SQUAD CAROUSEL */}
      <RotatingSquadSection />

      {/* GLOBAL FOOTPRINT & PRESENCE */}
      <section className="py-14 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="rounded-2xl sm:rounded-3xl bg-[#081B4E] border border-[#0084FF]/30 p-5 sm:p-14 text-center">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-300 block mb-2 sm:mb-3">
            CROSS-BORDER ADVISORY
          </span>
          <h3 className="text-2xl sm:text-5xl font-black text-white tracking-tight mb-4 sm:mb-6">
            Global Enterprise Reach
          </h3>
          <p className="text-blue-100/70 text-xs sm:text-base max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
            Our systems architecture team deploys across key international commercial hubs, advising founders and management boards across the Middle East, UK, and Asia-Pacific.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 max-w-3xl mx-auto">
            {['DUBAI 🇦🇪', 'LONDON 🇬🇧', 'SINGAPORE 🇸🇬', 'RIYADH 🇸🇦', 'MUMBAI 🇮🇳'].map((city, idx) => (
              <div
                key={idx}
                className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-[#061233]/80 border border-[#0084FF]/30 text-[11px] sm:text-xs font-mono font-bold text-blue-100 tracking-wide"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 bg-[#081B4E] border-t border-[#0084FF]/30 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[11px] sm:text-xs font-tech font-bold uppercase tracking-widest text-blue-300 mb-3">
            DIRECT ENGAGEMENT
          </span>
          <h2 className="text-2xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Partner with SCALARK Systems
          </h2>
          <p className="text-blue-100/70 text-xs sm:text-base max-w-xl mb-6 sm:mb-8 leading-relaxed">
            Schedule a confidential executive diagnosis with our managing partners to evaluate your operational architecture.
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
