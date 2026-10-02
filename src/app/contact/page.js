'use client';

import PageHeader from '@/components/common/PageHeader';
import DiagnosisContactSection from '@/components/sections/DiagnosisContactSection';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Clock, Lock, MessageSquare, Mail, PhoneCall } from 'lucide-react';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      <PageHeader
        badge="DIRECT ADVISORY & INQUIRIES"
        title="Book a Consultation Call"
        subtitle="Connect directly with our principal systems architects. Discuss your operational bottlenecks, team cadence, or revenue architecture in strict confidence."
        breadcrumb={[{ label: 'Contact' }]}
      />

      {/* CORE CONTACT & INTAKE FORM */}
      <DiagnosisContactSection t={t} />

      {/* CONFIDENTIALITY & DIRECT DESK ASSURANCE */}
      <section className="py-16 px-6 max-w-5xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div className="p-6 rounded-2xl bg-[#081B4E] border border-[#0084FF]/30 flex flex-col items-center sm:items-start shadow-md">
            <Lock className="w-5 h-5 text-[#0084FF] mb-3" />
            <h4 className="text-sm font-bold text-white mb-1">Strict Mutual NDA</h4>
            <p className="text-xs text-blue-100/70 leading-relaxed">
              All financial metrics, organizational structures, and business data shared remain strictly confidential.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#081B4E] border border-[#0084FF]/30 flex flex-col items-center sm:items-start shadow-md">
            <Clock className="w-5 h-5 text-[#0084FF] mb-3" />
            <h4 className="text-sm font-bold text-white mb-1">Direct Partner Response</h4>
            <p className="text-xs text-blue-100/70 leading-relaxed">
              Every inquiry is reviewed directly by a principal partner within 24 hours.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-[#081B4E] border border-[#0084FF]/30 flex flex-col items-center sm:items-start shadow-md">
            <ShieldCheck className="w-5 h-5 text-[#0084FF] mb-3" />
            <h4 className="text-sm font-bold text-white mb-1">Zero Sales Pressure</h4>
            <p className="text-xs text-blue-100/70 leading-relaxed">
              We provide practical architectural clarity and honest feasibility assessments.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
