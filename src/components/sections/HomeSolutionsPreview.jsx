'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, BarChart3, DollarSign, Users, CheckCircle2, ChevronRight, Sparkles, ArrowUpRight } from 'lucide-react';

export default function HomeSolutionsPreview() {
  const [activePillar, setActivePillar] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const DURATION = 4500; // 4.5s auto-cycle per pillar
  const INTERVAL_STEP = 50;

  const pillars = [
    {
      id: 'operations',
      num: '01',
      shortTitle: 'Operations',
      title: 'Operations & Process',
      subtitle: 'Owner Independence',
      headlineMetric: '65% Less Firefighting',
      desc: 'Standardized workflows and delegation matrices so your business functions with institutional discipline when you are not in the room.',
      icon: Layers,
      image: '/assets/system-card.jpg',
      color: 'border-emerald-500/40 hover:border-emerald-500',
      activeRing: '#10B981',
      badgeColor: 'text-emerald-300 border-emerald-500/30 bg-emerald-500/15',
      highlights: [
        'Standard Operating Procedures (SOPs)',
        'Delegation & Authority Architecture',
        'Process Bottleneck Elimination',
        'Management Control Cadence'
      ]
    },
    {
      id: 'revenue',
      num: '02',
      shortTitle: 'Revenue',
      title: 'Sales & Revenue Systems',
      subtitle: 'Predictable Conversion',
      headlineMetric: '3.2x Pipeline Predictability',
      desc: 'Convert erratic sales activity into a governed, measurable revenue engine with clear pipeline accountability and qualification rigor.',
      icon: BarChart3,
      image: '/assets/phone-dashboard.jpg',
      color: 'border-cyan-500/40 hover:border-cyan-500',
      activeRing: '#06B6D4',
      badgeColor: 'text-cyan-300 border-cyan-500/30 bg-cyan-500/15',
      highlights: [
        'Sales Pipeline Architecture',
        'Lead Qualification & Follow-up SOPs',
        'Conversion Governance & Review Cadence',
        'Sales Team KPI Accountability'
      ]
    },
    {
      id: 'finance',
      num: '03',
      shortTitle: 'Finance',
      title: 'Finance & Unit Economics',
      subtitle: 'Real-Time Visibility',
      headlineMetric: '100% Cash Runway Clarity',
      desc: 'Eliminate financial blindspots with real-time management accounts, margin protection protocols, and forward cash runway dashboards.',
      icon: DollarSign,
      image: '/assets/kinetic-mesh.jpg',
      color: 'border-blue-500/40 hover:border-blue-500',
      activeRing: '#3B82F6',
      badgeColor: 'text-blue-300 border-blue-500/30 bg-blue-500/15',
      highlights: [
        'Unit Economics & Margin Optimization',
        'Real-Time Cash-Flow Visibility',
        'Cost-Control & Expense Thresholds',
        'Management Reporting Cadence'
      ]
    },
    {
      id: 'organization',
      num: '04',
      shortTitle: 'People',
      title: 'Organization & People',
      subtitle: 'Cadence & Autonomy',
      headlineMetric: 'Zero Single-Point Bottlenecks',
      desc: 'Build crystal-clear role definitions, measurable ownership KPIs, and weekly management review rhythms that drive unassisted execution.',
      icon: Users,
      image: '/assets/hero-boardroom.jpg',
      color: 'border-indigo-500/40 hover:border-indigo-500',
      activeRing: '#818CF8',
      badgeColor: 'text-indigo-300 border-indigo-500/30 bg-indigo-500/15',
      highlights: [
        'Role Definitions & Responsibility Matrix',
        'Departmental KPI Target Governance',
        'Weekly Performance Review Cadence',
        'Succession & Autonomous Scaling'
      ]
    }
  ];

  // Auto-cycle through pillars
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActivePillar((curr) => (curr + 1) % pillars.length);
          return 0;
        }
        return prev + (INTERVAL_STEP / DURATION) * 100;
      });
    }, INTERVAL_STEP);

    return () => clearInterval(timer);
  }, [isPaused, pillars.length]);

  const handleSelect = (idx) => {
    setActivePillar(idx);
    setProgress(0);
  };

  return (
    <section id="home-solutions-preview" className="py-14 sm:py-24 px-4 sm:px-6 bg-[#061233] border-t border-white/10 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#0E37A4]/25 via-blue-600/15 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#0E37A4]/40 text-xs font-mono uppercase tracking-widest text-blue-300 font-bold mb-4">
              <span>SECTION 03 — STRATEGIC PILLARS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              4 Pillars of Business Architecture
            </h2>
            <p className="mt-3 text-zinc-300 text-xs sm:text-base max-w-xl leading-relaxed">
              SCALARK addresses the 4 core domains that dictate whether a business stalls in founder firefighting or scales into an institutional platform.
            </p>
          </div>

          <Link
            href="/solutions"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-200 shadow-md shrink-0 active:scale-95 group"
          >
            <span>Explore All 4 Solutions</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Desktop Expanding Horizontal Accordion Container */}
        <div
          className="hidden lg:flex gap-4 sm:gap-5 w-full items-stretch justify-center h-[520px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {pillars.map((p, idx) => {
            const isActive = activePillar === idx;
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                onClick={() => handleSelect(idx)}
                style={{
                  flex: isActive ? '3.4 1 0%' : '1 1 0%',
                  transition: 'flex 0.65s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.65s ease, border-color 0.65s ease'
                }}
                className={`relative rounded-3xl overflow-hidden p-6 sm:p-8 cursor-pointer select-none flex flex-col justify-between border bg-[#081B4E] transition-all duration-300 group ${
                  isActive
                    ? `border-[#0E37A4] shadow-[0_20px_50px_rgba(14,55,164,0.35)] ring-2 ring-blue-500/30`
                    : 'border-[#0E37A4]/25 hover:border-[#0E37A4]/60 opacity-85 hover:opacity-100'
                }`}
              >
                {/* Background Image for Active Pillar */}
                <div
                  className={`absolute inset-0 z-0 overflow-hidden pointer-events-none transition-opacity duration-700 ${
                    isActive ? 'opacity-35 scale-105' : 'opacity-10 scale-100'
                  }`}
                >
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061233] via-[#081B4E]/85 to-[#061233]/70" />
                </div>

                {/* Pillar Header */}
                <div className="relative z-10 flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="font-tech text-xs font-black uppercase tracking-wider text-zinc-400">
                      PILLAR {p.num}
                    </span>
                    {isActive && (
                      <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${p.badgeColor} animate-fade-in`}>
                        {p.subtitle}
                      </span>
                    )}
                  </div>

                  <div
                    className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0E37A4] text-white shadow-[0_0_20px_rgba(14,55,164,0.6)] scale-110'
                        : 'bg-white/5 border border-[#0E37A4]/30 text-zinc-400 group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                </div>

                {/* Pillar Content Body */}
                <div className="relative z-10 my-auto">
                  {/* Title */}
                  <h3
                    className={`font-sans font-black text-white tracking-tight transition-all duration-300 ${
                      isActive
                        ? 'text-2xl sm:text-3xl leading-snug mb-3'
                        : 'text-xl leading-tight opacity-90'
                    }`}
                  >
                    {isActive ? p.title : p.title}
                  </h3>

                  {/* Active Pillar Expanded Details */}
                  {isActive ? (
                    <div className="space-y-4 pt-1 animate-fade-in">
                      {/* Metric Callout Banner */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-blue-500/15 border border-blue-400/30">
                        <Sparkles className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                        <span className="text-xs font-mono font-bold text-blue-200">
                          {p.headlineMetric}
                        </span>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal max-w-xl">
                        {p.desc}
                      </p>

                      {/* Capabilities Checklist */}
                      <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/10">
                        {p.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mt-2">
                      {p.desc}
                    </p>
                  )}
                </div>

                {/* Pillar Footer CTA */}
                <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-zinc-300">
                  <span className="font-mono text-[11px] text-zinc-400">
                    {isActive ? 'SCALARK ARCHITECTURE' : 'CLICK TO EXPAND'}
                  </span>

                  <Link
                    href={`/solutions#${p.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`inline-flex items-center gap-1.5 transition-colors ${
                      isActive ? 'text-white hover:text-blue-300' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Accordion View (Screen < lg) */}
        <div className="flex lg:hidden flex-col gap-4">
          {pillars.map((p, idx) => {
            const isActive = activePillar === idx;
            const Icon = p.icon;

            return (
              <div
                key={p.id}
                onClick={() => handleSelect(idx)}
                className={`rounded-2xl bg-[#081B4E] border p-5 transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'border-[#0E37A4] shadow-xl ring-2 ring-blue-500/20'
                    : 'border-[#0E37A4]/25 opacity-90'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-[#0E37A4] text-white' : 'bg-white/5 text-zinc-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">
                        PILLAR {p.num}
                      </span>
                      <h4 className="text-base font-bold text-white">
                        {p.title}
                      </h4>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                    {p.subtitle}
                  </span>
                </div>

                {isActive && (
                  <div className="pt-4 mt-4 border-t border-white/10 space-y-3 animate-fade-in">
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/5">
                      {p.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href={`/solutions#${p.id}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-300 hover:text-white"
                      >
                        <span>Explore Full Solution Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Navigation Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {pillars.map((_, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              aria-label={`Select Pillar ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                activePillar === idx
                  ? 'w-8 bg-[#0E37A4]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
