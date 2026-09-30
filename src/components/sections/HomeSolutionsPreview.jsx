'use client';

import Link from 'next/link';
import { ArrowRight, Layers, BarChart3, DollarSign, Users, CheckCircle2 } from 'lucide-react';

export default function HomeSolutionsPreview() {
  const pillars = [
    {
      num: '01',
      title: 'Operations & Process',
      subtitle: 'Owner Independence',
      desc: 'Standardized workflows and delegation matrices so your business functions with discipline when you are not in the room.',
      icon: Layers,
      color: 'border-emerald-500/30 hover:border-emerald-500/70',
      badge: 'text-emerald-400 bg-emerald-500/10',
      highlights: ['Standard Operating Procedures (SOPs)', 'Delegation Architecture', 'Bottleneck Elimination']
    },
    {
      num: '02',
      title: 'Sales & Revenue Systems',
      subtitle: 'Predictable Conversion',
      desc: 'Convert erratic sales activity into a governed, measurable revenue engine with clear pipeline accountability.',
      icon: BarChart3,
      color: 'border-cyan-500/30 hover:border-cyan-500/70',
      badge: 'text-cyan-400 bg-cyan-500/10',
      highlights: ['Sales SOPs & Qualification', 'Pipeline Governance', 'Conversion KPI Tracking']
    },
    {
      num: '03',
      title: 'Finance & Unit Economics',
      subtitle: 'Real-Time Visibility',
      desc: 'Eliminate financial blindspots with real-time management accounts, margin protection, and cash runway dashboards.',
      icon: DollarSign,
      color: 'border-purple-500/30 hover:border-purple-500/70',
      badge: 'text-purple-400 bg-purple-500/10',
      highlights: ['Unit Economics & Margins', 'Cash-Flow Visibility', 'Cost-Control Frameworks']
    },
    {
      num: '04',
      title: 'Organization & People',
      subtitle: 'Cadence & Autonomy',
      desc: 'Build clear role definitions, measurable ownership KPIs, and weekly management rhythms that drive accountability.',
      icon: Users,
      color: 'border-amber-500/30 hover:border-amber-500/70',
      badge: 'text-amber-400 bg-amber-500/10',
      highlights: ['KPI & Target Governance', 'Org Structuring & Ownership', 'Weekly Reporting Cadence']
    }
  ];

  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 bg-[#080B12] border-t border-white/10 relative overflow-hidden">
      {/* GLOW ACCENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-violet-600/10 via-cyan-600/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#A78BFA] font-bold mb-4">
              <span>SECTION 03 — STRATEGIC PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              4 Pillars of Business Architecture
            </h2>
            <p className="mt-3 text-zinc-400 text-xs sm:text-base max-w-xl">
              SCALARK addresses the 4 core domains that dictate whether a business stalls in founder firefighting or scales into an institution.
            </p>
          </div>

          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-200 shadow-md shrink-0 active:scale-95"
          >
            <span>Explore All 4 Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>
        </div>

        {/* 4 PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.num}
                className={`rounded-2xl sm:rounded-3xl bg-[#0D121F] border ${p.color} p-5 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold text-zinc-500">
                      PILLAR {p.num}
                    </span>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${p.badge} uppercase tracking-wider`}>
                      {p.subtitle}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 font-sans">
                    {p.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                    {p.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {p.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/solutions"
                  className="mt-8 pt-4 border-t border-white/5 text-xs font-bold text-zinc-400 group-hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
