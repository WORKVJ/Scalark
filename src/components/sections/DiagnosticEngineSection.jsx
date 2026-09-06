'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { DIAGNOSTIC_QUESTIONS } from '@/data/contentData';
import { soundFx } from '@/utils/sound';
import { ArrowRight, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';

export default function DiagnosticEngineSection({ t }) {
  const [selectedChallenge, setSelectedChallenge] = useState('Sales');
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const challengeCategories = [
    'Sales',
    'Cash Flow',
    'Employees',
    'Operations',
    'Technology',
    'Crisis'
  ];

  const currentQuestions = DIAGNOSTIC_QUESTIONS[selectedChallenge] || DIAGNOSTIC_QUESTIONS.Sales;

  const handleChallengeChange = (cat) => {
    soundFx.playClick();
    setSelectedChallenge(cat);
    setSelectedOptionIdx(null);
    setShowResult(false);
  };

  const handleOptionSelect = (idx) => {
    soundFx.playClick();
    setSelectedOptionIdx(idx);
    setShowResult(true);

    confetti({
      particleCount: 45,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ffffff', '#10b981', '#34d399']
    });
  };

  const resetDiagnostic = () => {
    soundFx.playClick();
    setSelectedOptionIdx(null);
    setShowResult(false);
  };

  const handleRequestDiagnosis = () => {
    soundFx.playClick();
    const el = document.getElementById('contact-diagnosis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      const currentOpt = currentQuestions.options[selectedOptionIdx];
      window.dispatchEvent(
        new CustomEvent('prefill-diagnosis', {
          detail: {
            challenge: selectedChallenge,
            symptom: currentOpt?.text || '',
            rootCause: currentOpt?.diagnosis || ''
          }
        })
      );
    }
  };

  return (
    <section id="diagnosis-tool" className="py-28 md:py-36 px-6 bg-black border-t border-white/10 relative">
      <div className="max-w-5xl mx-auto">
        {/* HEADER (NATYA STYLE) */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-zinc-500 mb-4 block font-mono">
            SECTION 09 & 23 // INTERACTIVE ASSESSMENT
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            What's Your Biggest Business Challenge?
          </h3>
          <p className="text-base sm:text-xl text-zinc-400 font-normal leading-relaxed">
            Select your most acute pressure point to uncover the systemic root cause and actionable recommendation.
          </p>
        </div>

        {/* CONTAINER CARD (NATYA CONTAINER) */}
        <div className="bg-gradient-to-br from-[#151515] to-[#0a0a0a] rounded-[2.5rem] border border-white/10 p-8 sm:p-12 shadow-2xl space-y-10">
          {/* 1. CHALLENGE CATEGORY PILLS (NATYA CAPSULE BUTTON STYLE) */}
          <div>
            <label className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4 block">
              Step 1: Select Your Focus Area
            </label>
            <div className="flex flex-wrap gap-2.5">
              {challengeCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleChallengeChange(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                    selectedChallenge === cat
                      ? 'bg-white text-black shadow-lg scale-[1.02]'
                      : 'bg-black/50 text-zinc-400 border border-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* 2. QUESTION & OPTIONS */}
          <div className="space-y-4 pt-6 border-t border-white/10">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono uppercase tracking-widest text-white font-bold">
                Step 2: Which sounds most like your situation?
              </label>
              {showResult && (
                <button
                  onClick={resetDiagnostic}
                  className="text-xs font-mono text-zinc-500 hover:text-zinc-300 flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-white">
              {currentQuestions.question}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {currentQuestions.options.map((opt, idx) => {
                const isSelected = selectedOptionIdx === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    className={`text-left p-5 rounded-2xl border transition-all duration-300 flex items-start space-x-3.5 ${
                      isSelected
                        ? 'bg-white/10 border-white/80 text-white shadow-xl scale-[1.01]'
                        : 'bg-black/40 border-white/10 text-zinc-300 hover:bg-black/80 hover:border-white/20'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? 'border-white bg-white text-black'
                          : 'border-zinc-600'
                      }`}
                    >
                      {isSelected && <CheckCircle2 className="w-4 h-4" />}
                    </div>
                    <span className="text-sm font-medium leading-relaxed">{opt.text}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. DIAGNOSTIC RESULT & ONE-CLICK INTEL CALLOUT */}
          {showResult && selectedOptionIdx !== null && (
            <div className="pt-6 border-t border-white/10 animate-in fade-in zoom-in-95 duration-300">
              <div className="p-6 md:p-8 rounded-[2rem] bg-black/80 border border-zinc-200/30 space-y-4 shadow-2xl">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-white font-bold px-3 py-1 rounded-full bg-zinc-200/10 border border-zinc-200/20">
                    SCALARK DIAGNOSIS
                  </span>
                  <span className="text-xs font-mono text-zinc-500">{selectedChallenge} System</span>
                </div>

                <h5 className="text-lg md:text-xl font-bold text-white">
                  Identified Root Bottleneck:
                </h5>

                <p className="text-base text-zinc-200 leading-relaxed font-normal">
                  {currentQuestions.options[selectedOptionIdx].diagnosis}
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <p className="text-xs text-zinc-400">
                    Ready to resolve this? We will pre-populate your inquiry directly with this diagnostic context.
                  </p>
                  <button
                    onClick={handleRequestDiagnosis}
                    className="px-6 py-3.5 bg-white text-black font-semibold text-xs uppercase tracking-wider rounded-full hover:bg-zinc-200 transition-all shadow-xl hover:scale-105 shrink-0 text-center"
                  >
                    Request Business Diagnosis →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

