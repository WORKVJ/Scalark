'use client';

import { useState } from 'react';
import { CASE_STUDIES } from '@/data/contentData';
import { Quote, ArrowUpRight, CheckCircle2, Star, Sparkles, Film, FileText } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';
import FounderReelsCarousel from '@/components/common/FounderReelsCarousel';

export default function CaseStudiesSection({ t }) {
  const [viewMode, setViewMode] = useState('reels'); // 'reels' | 'reports'

  const cardThemes = [
    { 
      bg: 'bg-gradient-to-br from-[#003B73] via-[#00274D] to-[#001730]', 
      border: 'border-blue-400/30', 
      tagBg: 'bg-[#FFFFFF] text-black',
      highlight: 'text-white'
    },
    { 
      bg: 'bg-gradient-to-br from-[#0F4C5C] via-[#093540] to-[#041B21]', 
      border: 'border-white/30', 
      tagBg: 'bg-[#FFFFFF] text-black',
      highlight: 'text-white'
    },
    { 
      bg: 'bg-gradient-to-br from-[#1A1A1A] via-[#141414] to-[#0D0D0D]', 
      border: 'border-white/15', 
      tagBg: 'bg-[#FFFFFF] text-black',
      highlight: 'text-zinc-300'
    }
  ];

  return (
    <section id="case-studies" className="py-24 sm:py-32 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      
      {/* AMBIENT LIGHTING */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <ScrollReveal direction="up" distance={30} className="text-center mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-mono font-bold text-zinc-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>VERIFIED CLIENT OUTCOMES & INTERVIEWS</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight">
            REAL BUSINESS <span className="text-zinc-400">STORIES</span><span className="text-emerald-400">.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed">
            Every business hurdle has an architectural root cause. Watch authentic founder interviews and explore how SCALARK diagnosed, structured, and scaled real enterprises.
          </p>

          {/* VIEW TOGGLE PILL: FOUNDER REELS VS WRITTEN REPORTS */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-white/[0.06] border border-white/10 max-w-full">
            <button
              onClick={() => setViewMode('reels')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap ${
                viewMode === 'reels'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span className="sm:hidden">Founder Reels</span>
              <span className="hidden sm:inline">Founder Story Reels (Auto-Scroll)</span>
            </button>
            <button
              onClick={() => setViewMode('reports')}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-mono font-bold transition-all whitespace-nowrap ${
                viewMode === 'reports'
                  ? 'bg-white text-black shadow-lg'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Audit Reports</span>
            </button>
          </div>
        </ScrollReveal>

        {/* VIEW 01: AUTOSCROLLING REEL CAROUSEL */}
        {viewMode === 'reels' && (
          <ScrollReveal direction="up" distance={20}>
            <FounderReelsCarousel />
          </ScrollReveal>
        )}

        {/* VIEW 02: 3 DISTINCTIVE DETAILED AUDIT CASE CARDS */}
        {viewMode === 'reports' && (
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 animate-fadeIn">
          {CASE_STUDIES.map((cs, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            return (
              <ScrollReveal
                key={cs.id}
                direction="up"
                distance={40}
                delay={idx * 120}
                className="h-full"
              >
                <div
                  className={`h-full rounded-3xl ${theme.bg} border ${theme.border} p-8 flex flex-col justify-between shadow-2xl hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden group card-sheen`}
                >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full ${theme.tagBg}`}>
                      {cs.industry}
                    </span>
                    <div className="flex text-[#FFFFFF] gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-[#FFFFFF]" />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-white tracking-tight mb-1">
                    {cs.clientType}
                  </h3>
                  <span className="text-xs text-zinc-300 font-mono font-bold block mb-4">
                    {cs.growthStage}
                  </span>

                  <p className="text-sm text-zinc-200 leading-relaxed mb-6 font-medium italic">
                    "{cs.challenge}"
                  </p>

                  <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-2 text-xs mb-6">
                    <div>
                      <span className="text-zinc-400 font-bold">Root Cause: </span>
                      <span className="text-white font-medium">{cs.rootCause}</span>
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <span className="text-[#FFFFFF] font-bold">Our Approach: </span>
                      <span className="text-white font-medium">{cs.approach}</span>
                    </div>
                  </div>
                </div>

                {/* VERIFIED OUTCOME PILL FOOTER */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#FFFFFF]/20 flex items-center justify-center text-[#FFFFFF] shrink-0">
                      <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-mono text-zinc-300 font-bold">Audited Result</div>
                      <div className="text-xs font-black text-[#FFFFFF]">
                        {cs.outcome}
                      </div>
                    </div>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-[#FFFFFF] group-hover:scale-110 group-hover:bg-[#FFFFFF] group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
            );
          })}
        </div>
        )}
      </div>
    </section>
  );
}

