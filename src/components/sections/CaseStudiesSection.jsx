'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CASE_STUDIES } from '@/data/contentData';
import { Quote, ArrowUpRight, CheckCircle2, Star, Sparkles, Film, FileText } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import FounderReelsCarousel from '@/components/common/FounderReelsCarousel';

export default function CaseStudiesSection({ t }) {
  const [viewMode, setViewMode] = useState('reels'); // 'reels' | 'reports'

  return (
    <section id="case-studies" className="py-14 sm:py-32 px-4 sm:px-6 bg-white text-zinc-950 relative overflow-hidden border-t border-zinc-200">
      
      {/* SOFT AMBIENT LIGHTING */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-purple-100/60 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER: CLEAN TOP-LEFT EDITORIAL STYLE MATCHING REFERENCE IMAGE 2 */}
        <ScrollReveal direction="up" distance={30} className="mb-8 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-[#0E37A4]/20 text-[10px] sm:text-xs font-mono font-bold text-[#0E37A4] mb-3 sm:mb-4 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#0E37A4]" />
                <span>VERIFIED CLIENT OUTCOMES & INTERVIEWS</span>
              </div>

              <h2 className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight text-zinc-950 leading-tight">
                Discover inspiring journeys of founders who eliminated operational chaos, recovered executive time, and scaled with SCALARK.
              </h2>
            </div>

            {/* VIEW TOGGLE PILL: FOUNDER REELS VS WRITTEN REPORTS */}
            <div className="inline-flex items-center p-1 rounded-full bg-zinc-100 border border-zinc-200/90 shrink-0 shadow-sm self-start sm:self-auto">
              <button
                onClick={() => setViewMode('reels')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap ${
                  viewMode === 'reels'
                    ? 'bg-[#0E37A4] text-white shadow-md'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <Film className="w-3.5 h-3.5" />
                <span>Founder Stories</span>
              </button>
              <button
                onClick={() => setViewMode('reports')}
                className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap ${
                  viewMode === 'reports'
                    ? 'bg-[#0E37A4] text-white shadow-md'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Audit Reports</span>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* VIEW 01: STAGGERED MONOCHROME REEL CAROUSEL (IMAGE 2 TYPE) */}
        {viewMode === 'reels' && (
          <ScrollReveal direction="up" distance={20}>
            <FounderReelsCarousel />
          </ScrollReveal>
        )}

        {/* VIEW 02: 3 DISTINCTIVE DETAILED AUDIT CASE CARDS */}
        {viewMode === 'reports' && (
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 animate-fadeIn">
            {CASE_STUDIES.map((cs, idx) => (
              <ScrollReveal
                key={cs.id}
                direction="up"
                distance={40}
                delay={idx * 120}
                className="h-full"
              >
                <div className="h-full rounded-3xl bg-white border border-zinc-200 p-8 flex flex-col justify-between shadow-lg hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-200">
                        {cs.industry}
                      </span>
                      <div className="flex text-amber-500 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    <h3 className="text-2xl font-black text-zinc-950 tracking-tight mb-1">
                      {cs.clientType}
                    </h3>
                    <span className="text-xs text-zinc-500 font-mono font-bold block mb-4">
                      {cs.growthStage}
                    </span>

                    <p className="text-sm text-zinc-600 leading-relaxed mb-6 font-medium italic">
                      "{cs.challenge}"
                    </p>

                    <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 text-xs mb-6">
                      <div>
                        <span className="text-zinc-500 font-bold">Root Cause: </span>
                        <span className="text-zinc-900 font-medium">{cs.rootCause}</span>
                      </div>
                      <div className="pt-2 border-t border-zinc-200">
                        <span className="text-[#0E37A4] font-bold">Our Approach: </span>
                        <span className="text-zinc-900 font-medium">{cs.approach}</span>
                      </div>
                    </div>
                  </div>

                  {/* VERIFIED OUTCOME PILL FOOTER */}
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-wider font-mono text-zinc-400 font-bold">Audited Result</div>
                        <div className="text-xs font-black text-zinc-950">
                          {cs.outcome}
                        </div>
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 group-hover:scale-110 group-hover:bg-[#0E37A4] group-hover:text-white transition-all">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
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
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0E37A4] hover:bg-[#0A2A7E] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-xl hover:scale-105"
          >
            <span>Explore All Client Case Studies</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
