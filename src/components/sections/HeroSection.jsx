'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Layers,
  Globe2,
  Users,
  ChevronDown,
  ArrowRight,
  Check,
  TrendingUp,
  DollarSign,
  Building2,
  Mountain
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection({ t: propT }) {
  const router = useRouter();
  const { isRtl, t: ctxT } = useLanguage();
  const t = propT || ctxT;
  const triplio = t.triplio || {};
  const cData = triplio.console || {};

  // Background visual mode: 'skyline' (modern architectural corporate scale) or 'alpine' (clean minimal mountain)
  const [bgMode, setBgMode] = useState('skyline');

  // Interactive console states
  const [selectedSystem, setSelectedSystem] = useState(
    cData.systemDefault || 'Operations & SOP Architecture'
  );
  const [selectedMarket, setSelectedMarket] = useState(
    cData.marketDefault || 'Saudi Arabia (KSA)'
  );
  const [selectedScale, setSelectedScale] = useState(
    cData.scaleDefault || '20 - 150 Staff'
  );

  // Dropdown open states
  const [openDropdown, setOpenDropdown] = useState(null); // 'system' | 'market' | 'scale' | null
  const consoleRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (consoleRef.current && !consoleRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleBookSchedule = (e) => {
    e.preventDefault();
    const query = new URLSearchParams({
      focus: selectedSystem,
      market: selectedMarket,
      scale: selectedScale
    }).toString();
    router.push(`/contact?${query}`);
  };

  const systemOptions = cData.systemOptions || [
    'Operations & SOP Architecture',
    'Sales & Revenue Engine',
    'Finance & Cash-Flow Visibility',
    'People & Governance Framework',
    '120-Point Enterprise Diagnostic',
    'Cross-Border Expansion Systems'
  ];

  const marketOptions = cData.marketOptions || [
    'Saudi Arabia (KSA)',
    'United Arab Emirates (UAE)',
    'India (GCC Expansion)',
    'Pan-GCC & Global'
  ];

  const scaleOptions = cData.scaleOptions || [
    '10 - 50 Staff ($1M - $5M)',
    '50 - 200 Staff ($5M - $25M)',
    '200+ Enterprise ($25M+)'
  ];

  const baseBgImage =
    bgMode === 'skyline'
      ? '/hero-skyline.jpg'
      : '/hero-alpine.jpg';

  const cutoutImage =
    bgMode === 'skyline'
      ? '/hero-skyline-cutout.png'
      : '/hero-alpine-cutout.png';

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#040E2A] text-white select-none"
    >
      {/* ========================================================
          LAYER 0: BASE PHOTO BACKGROUND (BEHIND THE NAME)
          ======================================================== */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          key={`base-${baseBgImage}`}
          src={baseBgImage}
          alt="SCALARK Background Sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center"
        />

        {/* TOP ATMOSPHERIC BLUE SKY ENHANCEMENT */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-[#0A266E]/30 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ========================================================
          LAYER 1: GIGANTIC BRAND WATERMARK (BEHIND BUILDINGS)
          Placed at z-10, positioned higher so it never collides with headline!
          ======================================================== */}
      <div className="absolute top-[9%] sm:top-[10%] lg:top-[11%] left-0 right-0 w-full flex justify-center pointer-events-none select-none z-10 px-4">
        <h1
          className="text-[17vw] sm:text-[18vw] lg:text-[19vw] font-black tracking-[-0.035em] text-white uppercase leading-none drop-shadow-[0_12px_45px_rgba(0,0,0,0.3)] opacity-95 transition-transform"
          style={{ fontFamily: 'var(--font-geist-sans), sans-serif' }}
        >
          {triplio.watermark || 'SCALARK'}
        </h1>
      </div>

      {/* ========================================================
          LAYER 2: FOREGROUND BUILDING CUTOUT (IN FRONT OF NAME)
          Placed at z-20: Sky is transparent, buildings are opaque!
          ======================================================== */}
      <div className="absolute inset-0 z-20 pointer-events-none select-none">
        <Image
          key={`cutout-${cutoutImage}`}
          src={cutoutImage}
          alt="SCALARK Foreground Architecture"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top sm:object-center"
        />

        {/* BOTTOM GRADIENT: SEAMLESS DEEP NAVY BASE FOR TEXT READABILITY */}
        <div className="absolute inset-x-0 bottom-0 h-[48%] sm:h-[44%] bg-gradient-to-t from-[#040E2A] via-[#040E2A]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[#040E2A] pointer-events-none" />
      </div>

      {/* TOP RIGHT: CREATIVE VISUAL SWITCHER (SKYLINE VS ALPINE) */}
      <div className="absolute top-28 sm:top-24 right-4 sm:right-8 z-40 flex items-center gap-1.5 p-1 rounded-full bg-[#040E2A]/75 backdrop-blur-xl border border-white/15 text-xs shadow-xl">
        <button
          type="button"
          onClick={() => setBgMode('skyline')}
          className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all text-[11px] font-semibold cursor-pointer ${
            bgMode === 'skyline'
              ? 'bg-[#0084FF] text-white shadow-md'
              : 'text-zinc-300 hover:text-white'
          }`}
          title="Architectural Corporate Skyline"
        >
          <Building2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Skyline</span>
        </button>
        <button
          type="button"
          onClick={() => setBgMode('alpine')}
          className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all text-[11px] font-semibold cursor-pointer ${
            bgMode === 'alpine'
              ? 'bg-[#0084FF] text-white shadow-md'
              : 'text-zinc-300 hover:text-white'
          }`}
          title="Minimal Alpine Horizon"
        >
          <Mountain className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Alpine</span>
        </button>
      </div>

      {/* TOP SPACER (ENSURES FLOATING NAVBAR HAS AMPLE CLEARANCE) */}
      <div className="h-28 sm:h-36 relative z-30" />

      {/* ========================================================
          LAYER 3: FOREGROUND UI CONTENT (ANCHORED TO BOTTOM)
          Placed at z-30 in front of everything, with spacious
          vertical breathing room away from the SCALARK watermark!
          ======================================================== */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto pb-8 sm:pb-12 pt-12 sm:pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* LEFT COLUMN: HERO HEADLINE (EXACT 2-LINE ELEGANT COMPACT COMPOSITION) */}
          <div className="lg:col-span-5 text-start">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[36px] xl:text-[40px] font-extrabold text-white tracking-tight leading-[1.18] font-sans drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] max-w-md">
              <span className="block whitespace-normal sm:whitespace-nowrap">
                {triplio.headlineLine1 || "Architecting Systems for"}
              </span>
              <span className="block text-sky-100 whitespace-normal sm:whitespace-nowrap">
                {triplio.headlineLine2 || "Sustainable Enterprise Scale."}
              </span>
            </h2>
          </div>

          {/* RIGHT COLUMN: FLOATING WHITE INTERACTIVE CONSOLE (MATCHING REFERENCE BOOKING BAR) */}
          <div className="lg:col-span-7 flex justify-end" ref={consoleRef}>
            <div className="w-full bg-white text-zinc-900 rounded-[28px] sm:rounded-full p-2 sm:p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/90 flex flex-col sm:flex-row items-stretch sm:items-center gap-1.5 sm:gap-2 relative">
              
              {/* FIELD 1: CORE FOCUS / SYSTEM (MATCHING "Location" IN REFERENCE) */}
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'system' ? null : 'system')
                  }
                  className="w-full text-start px-3 py-1.5 rounded-2xl hover:bg-zinc-100 transition-colors flex items-center gap-2.5 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-zinc-700 shrink-0">
                    <Layers className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block tracking-wider leading-none mb-1">
                      {cData.systemLabel || 'Core Focus'}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-zinc-900 block truncate">
                      {selectedSystem}
                    </span>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {openDropdown === 'system' && (
                  <div className="absolute bottom-full mb-2 left-0 w-64 sm:w-72 bg-white rounded-2xl shadow-2xl border border-zinc-200 p-2 z-50 animate-fadeIn text-start">
                    <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold px-3 py-1.5 border-b border-zinc-100">
                      {cData.systemLabel || 'Select Core System'}
                    </div>
                    <div className="max-h-48 overflow-y-auto py-1 space-y-0.5">
                      {systemOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setSelectedSystem(opt);
                            setOpenDropdown(null);
                          }}
                          className={`w-full text-start px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                            selectedSystem === opt
                              ? 'bg-emerald-50 text-emerald-800 font-bold'
                              : 'text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          <span className="truncate">{opt}</span>
                          {selectedSystem === opt && (
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* VERTICAL DIVIDER (DESKTOP) */}
              <div className="hidden sm:block w-[1px] h-7 bg-zinc-200" />

              {/* FIELD 2: TARGET REGION (MATCHING "Date" IN REFERENCE) */}
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'market' ? null : 'market')
                  }
                  className="w-full text-start px-3 py-1.5 rounded-2xl hover:bg-zinc-100 transition-colors flex items-center gap-2.5 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-zinc-700 shrink-0">
                    <Globe2 className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block tracking-wider leading-none mb-1">
                      {cData.marketLabel || 'Market'}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-zinc-900 block truncate">
                      {selectedMarket}
                    </span>
                  </div>
                </button>

                {/* Dropdown Menu */}
                {openDropdown === 'market' && (
                  <div className="absolute bottom-full mb-2 left-0 w-60 sm:w-64 bg-white rounded-2xl shadow-2xl border border-zinc-200 p-2 z-50 animate-fadeIn text-start">
                    <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold px-3 py-1.5 border-b border-zinc-100">
                      {cData.marketLabel || 'Select Regional Market'}
                    </div>
                    <div className="py-1 space-y-0.5">
                      {marketOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setSelectedMarket(opt);
                            setOpenDropdown(null);
                          }}
                          className={`w-full text-start px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                            selectedMarket === opt
                              ? 'bg-blue-50 text-blue-800 font-bold'
                              : 'text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          <span className="truncate">{opt}</span>
                          {selectedMarket === opt && (
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* VERTICAL DIVIDER (DESKTOP) */}
              <div className="hidden sm:block w-[1px] h-7 bg-zinc-200" />

              {/* FIELD 3: SCALE & TEAM (MATCHING "Guest" IN REFERENCE) */}
              <div className="relative flex-1">
                <button
                  type="button"
                  onClick={() =>
                    setOpenDropdown(openDropdown === 'scale' ? null : 'scale')
                  }
                  className="w-full text-start px-3 py-1.5 rounded-2xl hover:bg-zinc-100 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-zinc-700 shrink-0">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="truncate flex-1">
                    <span className="text-[10px] uppercase font-mono font-bold text-zinc-400 block tracking-wider leading-none mb-1">
                      {cData.scaleLabel || 'Scale'}
                    </span>
                    <span className="text-xs sm:text-[13px] font-bold text-zinc-900 block truncate">
                      {selectedScale}
                    </span>
                  </div>
                  <ChevronDown className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                </button>

                {/* Dropdown Menu */}
                {openDropdown === 'scale' && (
                  <div className="absolute bottom-full mb-2 right-0 w-60 sm:w-64 bg-white rounded-2xl shadow-2xl border border-zinc-200 p-2 z-50 animate-fadeIn text-start">
                    <div className="text-[10px] font-mono uppercase text-zinc-400 font-bold px-3 py-1.5 border-b border-zinc-100">
                      {cData.scaleLabel || 'Select Company Scale'}
                    </div>
                    <div className="py-1 space-y-0.5">
                      {scaleOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            setSelectedScale(opt);
                            setOpenDropdown(null);
                          }}
                          className={`w-full text-start px-3 py-2 rounded-xl text-xs font-medium flex items-center justify-between transition-colors ${
                            selectedScale === opt
                              ? 'bg-purple-50 text-purple-800 font-bold'
                              : 'text-zinc-700 hover:bg-zinc-100'
                          }`}
                        >
                          <span className="truncate">{opt}</span>
                          {selectedScale === opt && (
                            <Check className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* ACTION BUTTON: DARK PILL (MATCHING "Book schedule" BUTTON IN REFERENCE) */}
              <button
                type="button"
                onClick={handleBookSchedule}
                className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#121826] hover:bg-black text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md active:scale-95 whitespace-nowrap flex items-center justify-center gap-2 group cursor-pointer shrink-0"
              >
                <span>{cData.bookBtn || 'Book schedule'}</span>
                <ArrowRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
              </button>

            </div>
          </div>

        </div>

        {/* 4. BOTTOM ROW: STATS ON LEFT + DESCRIPTIVE PARAGRAPH ON RIGHT (MATCHING REFERENCE BOTTOM STRIP) */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-white/15 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-start">
          
          {/* BOTTOM LEFT: STAT BADGE + 4 CIRCULAR ICONS (MATCHING "300+ Iconic Spots Included" IN REFERENCE) */}
          <div className="lg:col-span-5 flex flex-wrap items-center gap-4">
            <div className="space-y-0.5">
              <span className="text-xl sm:text-2xl font-black text-white font-mono block leading-none">
                {triplio.statNumber || '60+'}
              </span>
              <span className="text-xs text-zinc-300 font-medium block">
                {triplio.statLabel || 'Enterprise Systems Architected'}
              </span>
            </div>

            {/* 4 Circular Action Badges */}
            <div className="flex items-center gap-2 pt-0.5">
              <Link
                href="/services/sops"
                title="Operations & SOPs"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all shadow-sm active:scale-90"
              >
                <Layers className="w-3.5 h-3.5 text-emerald-300" />
              </Link>
              <Link
                href="/services/revenue"
                title="Sales & Revenue"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all shadow-sm active:scale-90"
              >
                <TrendingUp className="w-3.5 h-3.5 text-blue-300" />
              </Link>
              <Link
                href="/services/finance"
                title="Finance & Cash Flow"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all shadow-sm active:scale-90"
              >
                <DollarSign className="w-3.5 h-3.5 text-amber-300" />
              </Link>
              <Link
                href="/services/expansion"
                title="Cross-Border Expansion"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 flex items-center justify-center text-white transition-all shadow-sm active:scale-90"
              >
                <Globe2 className="w-3.5 h-3.5 text-sky-300" />
              </Link>
            </div>
          </div>

          {/* BOTTOM RIGHT: EDITORIAL DESCRIPTIVE PARAGRAPH (MATCHING REFERENCE PARAGRAPH) */}
          <div className="lg:col-span-7">
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
              {triplio.desc ||
                'SCALARK architects institutional operations, sales engines, and financial governance to replace founder bottlenecks with sustainable, autonomous enterprise scale across Saudi Arabia, UAE, and India.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
