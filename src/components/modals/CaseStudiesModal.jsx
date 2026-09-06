'use client';

import { CASE_STUDIES } from '@/data/contentData';
import { soundFx } from '@/utils/sound';
import { ArrowRight, BarChart3, TrendingUp, X } from 'lucide-react';

export default function CaseStudiesModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-white/20 p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white font-semibold">
              PROVEN RESULTS
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Case Studies & Measurable Turnarounds
            </h2>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] font-mono text-white font-bold uppercase tracking-wider">
                    {cs.industry} • {cs.growthStage}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{cs.clientType}</h3>
                </div>
                <div className="px-3 py-1 rounded-md bg-zinc-200/10 text-white text-xs font-mono font-bold">
                  VERIFIED AUDIT
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs text-slate-300">
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="font-mono text-slate-400 uppercase mb-1">Challenge & Symptoms:</div>
                  <p>{cs.challenge}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5">
                  <div className="font-mono text-white uppercase mb-1">Root Cause & Solution:</div>
                  <p>{cs.approach}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-200/10 border border-zinc-200/20 text-white">
                  <div className="font-mono text-white uppercase mb-1 flex items-center space-x-1">
                    <TrendingUp className="w-3 h-3" />
                    <span>Outcome:</span>
                  </div>
                  <p className="font-bold">{cs.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

