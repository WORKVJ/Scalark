'use client';

import { Clock, ShieldCheck, TrendingUp, Globe, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

export default function EnterpriseMetricsBar() {
  const metrics = [
    {
      id: 'time-recovered',
      badge: 'OPERATIONAL FREEDOM',
      statDisplay: '65%',
      statHighlight: 'Freed',
      title: 'Founder Time Recovered',
      description: 'Shifting leaders from daily firefighting into strategic capital growth.',
      subtext: 'Audited across 120+ systems',
      icon: Clock,
      highlightColor: 'from-blue-500/20 to-indigo-500/10',
      badgeColor: 'text-blue-300 border-blue-500/30 bg-blue-500/10'
    },
    {
      id: 'autonomy-rate',
      badge: 'GOVERNANCE STANDARD',
      statDisplay: '99.4%',
      statHighlight: 'Autonomy',
      title: 'Process Predictability Rate',
      description: 'Institutional SOP workflows that execute reliably without owner dependency.',
      subtext: 'Zero single-point bottlenecks',
      icon: ShieldCheck,
      highlightColor: 'from-[#0E37A4]/30 to-blue-600/15',
      badgeColor: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/10'
    },
    {
      id: 'valuation-multiple',
      badge: 'CAPITAL READINESS',
      statDisplay: '3.8x – 4.6x',
      statHighlight: 'Target',
      title: 'Valuation Multiple Expansion',
      description: 'Institutionalised businesses command premium EBITDA valuation exits.',
      subtext: 'Exit & investment multiple',
      icon: TrendingUp,
      highlightColor: 'from-indigo-500/20 to-[#0E37A4]/15',
      badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/10'
    },
    {
      id: 'global-footprint',
      badge: 'GLOBAL FOOTPRINT',
      statDisplay: '3 Hubs',
      statHighlight: 'Active',
      title: 'Cross-Border Advisory Desks',
      description: 'Unified management systems deployed across UAE, UK, and Singapore markets.',
      subtext: 'Dubai 🇦🇪 · London 🇬🇧 · Singapore 🇸🇬',
      icon: Globe,
      highlightColor: 'from-blue-600/20 to-sky-500/10',
      badgeColor: 'text-sky-300 border-sky-500/30 bg-sky-500/10'
    }
  ];

  return (
    <section className="enterprise-metrics-bar relative z-20 w-full py-10 sm:py-14 bg-[#061233] border-y border-[#0E37A4]/30 overflow-hidden">
      {/* Ambient decorative lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-[#0E37A4]/20 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/15 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* Top telemetry control header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-[#0E37A4]/20">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-[11px] sm:text-xs font-tech font-bold uppercase tracking-wider text-white">
              VERIFIED ENTERPRISE BENCHMARKS
            </span>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
              SCALARK ARCHITECTURE METRICS
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] font-mono text-zinc-400">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Sparkles className="w-3.5 h-3.5 text-[#0E37A4]" />
              Measurable Operational Results
            </span>
          </div>
        </div>

        {/* 4 High-Impact Stat Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.id}
                className="group relative rounded-2xl bg-gradient-to-b from-[#081B4E]/90 to-[#061233]/95 border border-[#0E37A4]/35 hover:border-[#0E37A4] p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_12px_36px_rgba(14,55,164,0.35)] hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${m.highlightColor} opacity-75 group-hover:opacity-100 transition-opacity`} />

                <div>
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`text-[10px] font-tech font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${m.badgeColor}`}>
                      {m.badge}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#0E37A4]/25 border border-[#0E37A4]/50 flex items-center justify-center text-blue-200 group-hover:text-white group-hover:bg-[#0E37A4] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Bold Numerical Headline */}
                  <div className="mb-2">
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans">
                      {m.statDisplay}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-sm font-bold text-white mb-1.5 font-sans group-hover:text-blue-300 transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed">
                    {m.description}
                  </p>
                </div>

                {/* Subtext Tag */}
                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-300">
                  <span className="flex items-center gap-1.5 truncate">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{m.subtext}</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
