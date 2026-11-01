'use client';

import Link from 'next/link';
import {
  Layers,
  BarChart3,
  DollarSign,
  Users,
  Search,
  Globe2,
  ArrowRight,
  Check,
  Compass
} from 'lucide-react';
import PageHeader from '@/components/common/PageHeader';
import { useLanguage } from '@/context/LanguageContext';

const SERVICE_ICONS = {
  sops: Layers,
  revenue: BarChart3,
  finance: DollarSign,
  governance: Users,
  audit: Search,
  expansion: Globe2
};

export default function ServicesDirectoryPage() {
  const { t, isRtl } = useLanguage();
  const sData = t.servicesSection || {};
  const services = sData.services || [];

  return (
    <div className="flex flex-col min-h-screen bg-[#040E2A] text-white">
      <PageHeader
        badge={isRtl ? 'أنظمة الأعمال المؤسسية' : 'Enterprise Systems Architecture'}
        title={isRtl ? 'كتالوج الخدمات والأنظمة' : 'Our Systems Architecture Services'}
        subtitle={
          sData.sideDesc ||
          'Codified operating procedures, governed revenue engines, and real-time financial visibility engineered for autonomous enterprise scale.'
        }
        breadcrumb={[{ label: isRtl ? 'الخدمات' : 'Services' }]}
        image="/assets/heroes/hero-solutions-v2.jpg"
      />

      <section className="py-16 sm:py-24 px-4 sm:px-6 max-w-7xl mx-auto w-full text-start">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#70A52E] block mb-2">
            {isRtl ? 'الأنظمة الأساسية' : '6 Core Systems'}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-sans">
            {isRtl ? 'اختر النظام المطلوب لشركتك' : 'Select a System to Inspect Full Details'}
          </h2>
          <p className="mt-3 text-zinc-300 text-sm sm:text-base">
            {isRtl
              ? 'انقر على أي نظام للاطلاع على خطة المخرجات والجداول الزمنية والأثر المالي المحقق.'
              : 'Click any service to view its detailed architectural blueprint, deliverables, and audited outcomes.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => {
            const IconComponent = SERVICE_ICONS[service.id] || Layers;

            return (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="rounded-3xl bg-[#081B4E]/60 border border-white/10 hover:border-[#70A52E] transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-[0_20px_50px_rgba(112,165,46,0.25)]"
              >
                {/* TOP BANNER */}
                <div className="p-6 bg-gradient-to-br from-[#0F5342] via-[#0D4436] to-[#082C23] border-b border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold px-3 py-1 rounded-full bg-white/10 border border-white/20">
                      {service.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-emerald-300 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white font-sans uppercase">
                    {service.acronym}
                  </h3>
                </div>

                {/* CONTENT */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-[#70A52E] group-hover:text-emerald-300 transition-colors mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs text-zinc-300 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/10">
                      {service.points?.slice(0, 3).map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-2 text-xs text-zinc-200">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-emerald-400 group-hover:text-white transition-colors">
                    <span>{isRtl ? 'عرض تفاصيل النظام بالكامل' : 'View Full Details'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

