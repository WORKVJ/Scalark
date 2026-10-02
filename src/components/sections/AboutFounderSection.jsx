'use client';

import { ArrowRight, CheckCircle2, Globe2, Quote } from 'lucide-react';
import { soundFx } from '@/utils/sound';

import Link from 'next/link';

export default function AboutFounderSection({ t }) {
  return (
    <section id="about" className="py-14 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#0084FF]/25 bg-[#061233]">
      {/* 2-COLUMN STORY (EXACT NATYA 'THE ACADEMY' AESTHETIC) */}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* LEFT COLUMN: THE TITLE & BADGE */}
        <div className="lg:col-span-5 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#081B4E] rounded-full text-xs font-medium tracking-widest text-blue-200 border border-[#0084FF]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF]" />
            <span>GLOBAL ARCHITECTURE</span>
          </div>

          <h2 className="text-3xl sm:text-6xl font-medium tracking-tight text-white leading-tight">
            About <br />
            <span className="text-[#0084FF]">SCALARK.</span>
          </h2>

          <p className="text-blue-200/70 text-xs sm:text-base font-mono leading-relaxed">
            Global Operations: Dubai • London • Singapore • Mumbai • Riyadh
          </p>
        </div>

        {/* RIGHT COLUMN: MANIFESTO & STORY */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          <p className="text-lg sm:text-3xl text-zinc-100 leading-snug font-medium">
            "Businesses don't fail because they lack effort. Entrepreneurs work hard. Teams work hard. But effort alone doesn't create a scalable organisation."
          </p>

          <p className="text-xs sm:text-base text-blue-100/80 leading-relaxed font-normal">
            As a business grows, yesterday's way of working starts creating today's problems. More employees, more customers, more transactions, and eventually, the owner becomes the system. SCALARK was created to change that.
          </p>

          <p className="text-xs sm:text-base text-blue-100/80 leading-relaxed font-normal">
            We help businesses understand what is holding them back and build the systems, processes, technology, and performance structures needed for sustainable, predictable growth.
          </p>

          {/* FOUNDER QUOTE CARD (NATYA EMBEDDED QUOTE) */}
          <div className="p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-gradient-to-br from-[#091E58] to-[#061233] border border-[#0084FF]/40 space-y-3 sm:space-y-4 shadow-xl">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#0084FF]" />
            <p className="text-sm sm:text-lg text-zinc-100 italic leading-relaxed">
              “I believe businesses don't need more complexity. They need more clarity. SCALARK is built to help organisations understand what is actually happening inside their business and build systems that support their next stage of growth.”
            </p>
            <div className="pt-2 border-t border-[#0084FF]/20 flex flex-wrap items-center justify-between gap-2 text-xs">
              <span className="font-bold text-white tracking-wide">FOUNDER & MANAGING PARTNER</span>
              <span className="font-mono text-blue-300">SCALARK SYSTEMS</span>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/diagnose"
              className="text-white hover:text-blue-200 transition-colors inline-flex items-center gap-2 text-sm sm:text-lg font-medium group"
            >
              <span>Diagnose your business with SCALARK</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

