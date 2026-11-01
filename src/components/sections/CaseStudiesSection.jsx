'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { getCaseStudies } from '@/data/contentData';
import { Star, CheckCircle2, ArrowUpRight, Film, FileText } from 'lucide-react';
import FounderReelsCarousel from '@/components/common/FounderReelsCarousel';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function CaseStudiesSection({ t: propT }) {
  const { currentLang, isRtl, t: ctxT } = useLanguage();
  const t = propT || ctxT;
  const p = t?.caseStudiesSection || t?.caseStudiesPage || {};

  const caseStudies = getCaseStudies(currentLang);

  const [viewMode, setViewMode] = useState('reels'); // 'reels' | 'reports'

  return (
    <section id="case-studies" className="py-14 sm:py-32 px-4 sm:px-6 bg-[#040E2A] text-white relative overflow-hidden border-t border-[#0084FF]/20">
      
      {/* SOFT AMBIENT LIGHTING */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[#0084FF]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <ScrollReveal direction="up" distance={30} className="mb-8 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="max-w-2xl text-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0084FF]/15 border border-[#0084FF]/30 text-[10px] sm:text-xs font-mono font-bold text-blue-300 mb-3 sm:mb-4 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] animate-pulse" />
                <span>{p.badge}</span>
              </div>

              <h2 className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight text-white leading-tight font-sans">
                {p.title}
              </h2>
            </div>

            {/* VIEW TOGGLE PILL */}
            <div className="inline-flex items-center p-1 rounded-full bg-[#061233] border border-[#0084FF]/30 shrink-0 shadow-sm self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode('reels')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                  viewMode === 'reels'
                    ? 'bg-[#0084FF] text-white shadow-md'
                    : 'text-blue-200/70 hover:text-white'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>{p.btnReels}</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('reports')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap cursor-pointer ${
                  viewMode === 'reports'
                    ? 'bg-[#0084FF] text-white shadow-md'
                    : 'text-blue-200/70 hover:text-white'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{p.btnReports}</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* VIEW 01: STAGGERED REEL CAROUSEL */}
        {viewMode === 'reels' && (
          <ScrollReveal direction="up" distance={20}>
            <FounderReelsCarousel />
          </ScrollReveal>
        )}

        {/* VIEW 02: 3 DISTINCTIVE DETAILED AUDIT CASE CARDS */}
        {viewMode === 'reports' && (
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 animate-fadeIn">
            {caseStudies.map((cs, idx) => (
              <ScrollReveal
                key={cs.id}
                direction="up"
                distance={40}
                delay={idx * 120}
                className="h-full"
              >
                <div className="h-full rounded-3xl bg-[#081B4E] border border-[#0084FF]/30 p-8 flex flex-col justify-between shadow-xl hover:-translate-y-2 hover:border-[#0084FF] hover:shadow-[0_20px_50px_rgba(0,132,255,0.25)] transition-all duration-300 relative overflow-hidden group text-start">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#0084FF]/20 text-blue-200 border border-[#0084FF]/40">
                        {cs.industry}
                      </span>
                      <div className="flex text-amber-400 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-white tracking-tight mb-1 font-sans">
                      {cs.clientType}
                    </h3>
                    <span className="text-xs text-blue-200/60 font-mono font-bold block mb-4">
                      {cs.growthStage}
                    </span>

                    <p className="text-sm text-blue-100/80 leading-relaxed mb-6 font-medium italic">
                      "{cs.challenge}"
                    </p>

                    <div className="p-4 rounded-2xl bg-[#061233] border border-[#0084FF]/25 space-y-2 text-xs mb-6">
                      <div>
                        <span className="text-blue-300/70 font-bold">{isRtl ? 'السبب الجذري: ' : 'Root Cause: '}</span>
                        <span className="text-blue-100 font-medium">{cs.rootCause}</span>
                      </div>
                      <div className="pt-2 border-t border-[#0084FF]/20">
                        <span className="text-[#0084FF] font-bold">{isRtl ? 'نهجنا التشغيلي: ' : 'Our Approach: '}</span>
                        <span className="text-blue-100 font-medium">{cs.approach}</span>
                      </div>
                    </div>
                  </div>

                  {/* VERIFIED OUTCOME PILL FOOTER */}
                  <div className="pt-4 border-t border-[#0084FF]/20 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
                        <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider font-mono text-blue-300/60 font-bold">
                          {isRtl ? 'النتيجة المدققة' : 'Audited Result'}
                        </div>
                        <div className="text-xs font-black text-white">
                          {cs.outcome}
                        </div>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-blue-200 group-hover:scale-110 group-hover:bg-[#0084FF] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5] rtl:rotate-90" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        )}

        {/* EXPLORE ALL CASE STUDIES LINK */}
        <div className="mt-14 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0084FF] hover:bg-[#0070E0] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105"
          >
            <span>{p.btnViewCaseStudies}</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5] rtl:rotate-90" />
          </Link>
        </div>
      </div>
    </section>
  );
}
