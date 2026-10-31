'use client';

import Link from 'next/link';
import { Building, Compass, Flame, Rocket, TrendingUp, Users } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function WhoWeHelpSection({ t: propT }) {
  const { t: ctxT, isRtl } = useLanguage();
  const t = propT || ctxT;

  const audienceIcons = [Rocket, Compass, Building, Users, TrendingUp, Flame];

  const audiences = (t.whoWeHelpSection?.audiences || []).map((aud, idx) => ({
    ...aud,
    icon: audienceIcons[idx % audienceIcons.length]
  }));

  return (
    <section id="who-we-help" className="py-14 sm:py-28 px-4 sm:px-6 bg-[#061233] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-blue-300 mb-3 sm:mb-4 block font-mono">
            {t.whoWeHelpSection?.badge}
          </span>
          <h3 className="text-2xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-4 sm:mb-6 font-sans">
            {t.whoWeHelpSection?.title1}
            <br />
            <span className="text-zinc-400">{t.whoWeHelpSection?.title2}</span>
          </h3>
          <p className="text-xs sm:text-lg text-zinc-300 font-normal leading-relaxed">
            {t.whoWeHelpSection?.desc}
          </p>
        </div>

        {/* 6 AUDIENCE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-[#091E58] to-[#061233] border border-[#0084FF]/35 shadow-2xl flex flex-col justify-between hover:border-[#0084FF] transition-all duration-300 sm:hover:-translate-y-1 text-start"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-full bg-white/5 border border-[#0084FF]/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-200 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#061233]/70 border border-[#0084FF]/30">
                      {aud.tag}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                    {aud.title}
                  </h4>

                  <p className="text-xs font-semibold text-zinc-200 mb-3 sm:mb-4">
                    {aud.lead}
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-5 sm:mb-6">
                    {aud.desc}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 border-t border-white/5">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-white hover:text-zinc-300 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{aud.cta}</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
