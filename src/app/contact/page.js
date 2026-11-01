'use client';

import PageHeader from '@/components/common/PageHeader';
import DiagnosisContactSection from '@/components/sections/DiagnosisContactSection';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Clock, Lock } from 'lucide-react';

export default function ContactPage() {
  const { t, isRtl } = useLanguage();
  const cp = t.contactPage;

  return (
    <div className="flex flex-col">
      <PageHeader
        badge={cp.headerBadge}
        title={cp.headerTitle}
        subtitle={cp.headerSubtitle}
        breadcrumb={[{ label: t.nav.bookCall || 'Contact' }]}
        image="/assets/heroes/hero-contact-blue.jpg"
        insightsMetric="24 Hrs"
        insightsLabel={isRtl ? 'زمن الاستجابة المباشر' : 'Executive Response SLA'}
        insightsGrowth="100%"
      />

      {/* CORE CONTACT & INTAKE FORM */}
      <DiagnosisContactSection t={t} />

      {/* CONFIDENTIALITY & DIRECT DESK ASSURANCE */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-start">
          <div className="p-6 rounded-2xl bg-[#081B4E] border border-[#0084FF]/30 flex flex-col items-center sm:items-start shadow-md">
            <Lock className="w-5 h-5 text-[#0084FF] mb-3" />
            <h4 className="text-sm font-bold text-white mb-1">{cp.cardNdaTitle}</h4>
            <p className="text-xs text-blue-100/70 leading-relaxed">
              {cp.cardNdaDesc}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#081B4E] border border-[#0084FF]/30 flex flex-col items-center sm:items-start shadow-md">
            <Clock className="w-5 h-5 text-[#0084FF] mb-3" />
            <h4 className="text-sm font-bold text-white mb-1">{cp.cardPartnerTitle}</h4>
            <p className="text-xs text-blue-100/70 leading-relaxed">
              {cp.cardPartnerDesc}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#081B4E] border border-[#0084FF]/30 flex flex-col items-center sm:items-start shadow-md">
            <ShieldCheck className="w-5 h-5 text-[#0084FF] mb-3" />
            <h4 className="text-sm font-bold text-white mb-1">{cp.cardZeroTitle}</h4>
            <p className="text-xs text-blue-100/70 leading-relaxed">
              {cp.cardZeroDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
