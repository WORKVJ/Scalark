'use client';

import Link from 'next/link';
import { ArrowRight, Quote, Globe, Shield, Sparkles } from 'lucide-react';

export default function HomeAboutPreview() {
  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 bg-[#06080E] border-t border-white/10 relative">
      <div className="max-w-6xl mx-auto rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#121624] via-[#0E121E] to-[#0A0D16] border border-white/10 p-5 sm:p-14 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
          {/* LEFT STORY */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono uppercase tracking-widest text-[#A78BFA] font-bold">
              <span>SECTION 06 — ABOUT SCALARK</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Businesses don't stall from lack of effort.
              <span className="text-zinc-500 block">They stall from lack of systems.</span>
            </h2>

            <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
              Entrepreneurs work hard. Teams work hard. But as complexity multiplies, yesterday's informal habits become today's operational bottlenecks. SCALARK was established to replace founder firefighting with institutional operational architecture.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all duration-200 shadow-md active:scale-95"
              >
                <span>Read About Our Mission</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* RIGHT BADGE / PRESENCE */}
          <div className="lg:col-span-5 bg-black/40 border border-white/10 rounded-2xl p-6 space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-[#8B5CF6]/20 text-[#A78BFA] flex items-center justify-center font-bold">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block font-bold">
                  GLOBAL REACH
                </span>
                <span className="text-sm font-bold text-white">
                  5 Key Commercial Regions
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs font-mono text-zinc-300">
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Middle East</span>
                <span className="text-white font-bold">Dubai & Riyadh</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Europe</span>
                <span className="text-white font-bold">London, UK</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-white/5">
                <span>Southeast Asia</span>
                <span className="text-white font-bold">Singapore</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span>South Asia</span>
                <span className="text-white font-bold">Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
