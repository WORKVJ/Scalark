'use client';

import { useState } from 'react';
import { SOLUTIONS_DATA } from '@/data/contentData';
import { soundFx } from '@/utils/sound';
import { ArrowRight, Check, ChevronRight, Layers, X } from 'lucide-react';

export default function SolutionsModal({ onClose }) {
  const [selectedSolution, setSelectedSolution] = useState(SOLUTIONS_DATA[0]);

  const handleSelect = (sol) => {
    soundFx.playClick();
    setSelectedSolution(sol);
  };

  const handleCta = (title) => {
    soundFx.playClick();
    onClose();
    const el = document.getElementById('contact-diagnosis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('prefill-solution', { detail: title }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-white/20 p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] flex flex-col">
        {/* HEADER */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 shrink-0">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-200/10 border border-zinc-200/20 flex items-center justify-center text-white">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-white font-semibold">
                SCALARK ARCHITECTURAL CAPABILITIES
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                10 Integrated Business Solutions
              </h2>
            </div>
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

        {/* 2-COLUMN EXPLORER */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 overflow-hidden flex-1">
          {/* LEFT LIST */}
          <div className="md:col-span-5 space-y-1.5 overflow-y-auto pr-2">
            {SOLUTIONS_DATA.map((sol) => {
              const isSelected = selectedSolution.id === sol.id;
              return (
                <button
                  key={sol.id}
                  onClick={() => handleSelect(sol)}
                  className={`w-full text-left p-3.5 rounded-xl transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? 'bg-zinc-200/20 text-white font-bold border border-zinc-200/40'
                      : 'text-slate-300 hover:bg-white/5 hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs text-white font-semibold">
                      {sol.num}
                    </span>
                    <span className="text-sm font-medium">{sol.title}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </button>
              );
            })}
          </div>

          {/* RIGHT DETAIL */}
          <div className="md:col-span-7 p-6 rounded-2xl bg-slate-950/80 border border-white/10 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-white font-bold px-2.5 py-0.5 rounded bg-zinc-200/10 border border-zinc-200/20">
                  SYSTEM {selectedSolution.num} • {selectedSolution.tag}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-white mb-1">
                {selectedSolution.title}
              </h3>
              <p className="text-white font-semibold text-sm mb-3">
                {selectedSolution.subtitle}
              </p>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {selectedSolution.description}
              </p>

              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                Deliverables & Subsystems:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {selectedSolution.items.map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-slate-200">
                    <Check className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => handleCta(selectedSolution.title)}
                className="px-6 py-3 rounded-full bg-white hover:bg-white text-slate-950 font-bold text-xs flex items-center space-x-2 shadow-lg shadow-white/20"
              >
                <span>{selectedSolution.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
