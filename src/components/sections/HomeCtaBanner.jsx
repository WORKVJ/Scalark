'use client';

import Link from 'next/link';
import { ArrowRight, ShieldCheck, Clock, Lock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HomeCtaBanner() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 bg-[#061233] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-2xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#091E58] to-[#061233] border border-[#0084FF]/40 p-6 sm:p-16 text-center relative overflow-hidden shadow-2xl">
        {/* GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#0084FF]/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#0084FF]/30 text-[10px] sm:text-xs font-mono uppercase tracking-widest text-blue-300 font-bold mb-5 sm:mb-6">
          <span>{t.homeCta?.badge}</span>
        </div>

        <h2 className="text-2xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4 sm:mb-6 font-sans">
          {t.homeCta?.title}
        </h2>

        <p className="text-zinc-300 text-xs sm:text-lg max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed">
          {t.homeCta?.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-white text-black hover:bg-zinc-200 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2"
          >
            <span>{t.homeCta?.btnCall}</span>
            <ArrowRight className="w-4 h-4 stroke-[2.5] rtl:rotate-180" />
          </Link>

          <Link
            href="/who-we-help"
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold text-xs sm:text-sm uppercase tracking-wider rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>{t.homeCta?.btnWho}</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-300 rtl:rotate-180" />
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-zinc-300 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#0084FF]" />
            <span>{t.homeCta?.nda}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#0084FF]" />
            <span>{t.homeCta?.turnaround}</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#0084FF]" />
            <span>{t.homeCta?.principalReview}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
