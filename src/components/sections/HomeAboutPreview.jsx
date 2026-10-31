'use client';

import Link from 'next/link';
import { ArrowRight, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HomeAboutPreview() {
  const { t, isRtl } = useLanguage();

  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 bg-[#061233] border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#091E58] via-[#081846] to-[#061233] border border-[#0084FF]/40 p-5 sm:p-14 overflow-hidden relative shadow-2xl">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#0084FF]/25 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* LEFT STORY */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-[#0084FF]/30 text-xs font-mono uppercase tracking-widest text-blue-300 font-bold">
              <span>{t.homeAbout?.badge}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-sans">
              {t.homeAbout?.titleMain}
              <span className="text-zinc-400 block">{t.homeAbout?.titleSub}</span>
            </h2>

            <p className="text-zinc-300 text-xs sm:text-base leading-relaxed">
              {t.homeAbout?.desc}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-200 shadow-md active:scale-95"
              >
                <span>{t.homeAbout?.btnMission}</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5] rtl:rotate-180" />
              </Link>
            </div>
          </div>

          {/* RIGHT BADGE / PRESENCE */}
          <div className="lg:col-span-5 bg-[#061233]/70 border border-[#0084FF]/30 rounded-2xl p-6 space-y-4 shadow-lg text-start">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#0084FF]/30 text-blue-200 flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 block font-bold">
                  {t.homeAbout?.globalReach}
                </span>
                <span className="text-sm font-bold text-white">
                  {t.homeAbout?.marketsCount}
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-xs font-mono text-zinc-300">
              {t.homeAbout?.markets?.map((m, idx) => (
                <div key={idx} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-b-0">
                  <span>{m.country}</span>
                  <span className="text-white font-bold">{m.city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
