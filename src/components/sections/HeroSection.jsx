'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Globe2,
  TrendingUp,
  DollarSign,
  Building2,
  Mountain,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function HeroSection({ t: propT }) {
  const { isRtl, t: ctxT } = useLanguage();
  const t = propT || ctxT;
  const triplio = t.triplio || {};

  // Background visual mode: 'skyline' (modern architectural corporate scale) or 'alpine' (clean minimal mountain)
  const [bgMode, setBgMode] = useState('skyline');

  // Active expanding card index (0 to 3)
  const [activeCard, setActiveCard] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const baseBgImage =
    bgMode === 'skyline'
      ? '/hero-skyline.jpg'
      : '/hero-alpine.jpg';

  const cutoutImage =
    bgMode === 'skyline'
      ? '/hero-skyline-cutout.png'
      : '/hero-alpine-cutout.png';

  // 4 Core Enterprise Scaling Cards (Compact, matching GrowMedLink active expanding card)
  const cards = [
    {
      id: 'ksa',
      title: isRtl ? 'المملكة العربية السعودية' : 'Saudi Arabia (KSA)',
      subtitle: isRtl ? 'هندسة العمليات وإجراءات العمل' : 'Operations & SOP Architecture',
      metric: '98%',
      metricLabel: isRtl ? 'استقلالية تشغيلية' : 'SOP Adoption',
      desc: isRtl
        ? 'توثيق إجراءات العمل ومصفوفات التفويض لتعمل الشركة باستقلالية تامة.'
        : 'Codify standard operating procedures & DoA matrices for autonomous operational scale.',
      icon: Building2,
      link: '/services/sops',
      avatars: [
        '/assets/squad/squad_thanzeer.jpg',
        '/assets/squad/squad_abdul.jpg',
        '/assets/squad/squad_hamas.jpg',
        '/executive-leader.jpg'
      ]
    },
    {
      id: 'uae',
      title: isRtl ? 'الإمارات العربية المتحدة' : 'United Arab Emirates (UAE)',
      subtitle: isRtl ? 'محرك المبيعات والإيرادات' : 'Sales & Revenue Engine',
      metric: '3.4x',
      metricLabel: isRtl ? 'سرعة مسار الصفقات' : 'Pipeline Velocity',
      desc: isRtl
        ? 'حوكمة مسار المبيعات B2B وتأهيل العملاء للتنبؤ الدقيق بالإيرادات.'
        : 'Predictable B2B sales pipeline governance and conversion checkpoints.',
      icon: TrendingUp,
      link: '/services/revenue',
      avatars: [
        '/assets/squad/squad_abdul.jpg',
        '/assets/squad/squad_shirin.jpg',
        '/assets/squad/squad_riswan.jpg',
        '/executive-leader.jpg'
      ]
    },
    {
      id: 'india',
      title: isRtl ? 'الهند والتوسع الإقليمي' : 'India & Cross-Border Hub',
      subtitle: isRtl ? 'مزامنة سلاسل التوريد والتوسع' : 'Cross-Border Expansion Systems',
      metric: '65%',
      metricLabel: isRtl ? 'استعادة وقت المؤسس' : 'Founder Time Saved',
      desc: isRtl
        ? 'ربط العمليات وسلاسل الإمداد والفرق التجارية عبر أسواق الخليج والهند.'
        : 'Multi-jurisdiction architectures linking regional commercial teams & supply chains.',
      icon: Globe2,
      link: '/services/expansion',
      avatars: [
        '/assets/squad/squad_thanzeer.jpg',
        '/assets/squad/squad_nehal.jpg',
        '/assets/squad/squad_hamas.jpg',
        '/executive-leader.jpg'
      ]
    },
    {
      id: 'finance',
      title: isRtl ? 'إدارة السيولة والمالية' : 'Finance & Cash Visibility',
      subtitle: isRtl ? 'حوكمة التدفقات وهوامش الربح' : '13-Week Cash Visibility',
      metric: '100%',
      metricLabel: isRtl ? 'وضوح مالي كامل' : 'Cash Runway Visibility',
      desc: isRtl
        ? 'لوحات تحكم مالية استشرافية واقتصاديات الوحدة وسقوف الإنفاق لحماية السيولة.'
        : 'Real-time forward-looking cash dashboards, unit economics & spend authority gates.',
      icon: DollarSign,
      link: '/services/finance',
      avatars: [
        '/assets/squad/squad_riswan.jpg',
        '/assets/squad/squad_abdul.jpg',
        '/assets/squad/squad_thanzeer.jpg',
        '/executive-leader.jpg'
      ]
    }
  ];

  // Auto-moving card animation loop (cycles every 3.5s with fluid progress bar)
  useEffect(() => {
    if (isPaused) return;

    const INTERVAL = 3500;
    const STEP = 50;
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += STEP;
      setProgress(Math.min(100, (elapsed / INTERVAL) * 100));

      if (elapsed >= INTERVAL) {
        elapsed = 0;
        setProgress(0);
        setActiveCard((prev) => (prev + 1) % cards.length);
      }
    }, STEP);

    return () => clearInterval(timer);
  }, [isPaused, cards.length, activeCard]);

  return (
    <section
      id="hero"
      className="relative min-h-[96vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#02071B] text-white select-none"
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
          Placed at z-10, with buildings rising in front of it!
          ======================================================== */}
      <div className="absolute top-[8%] sm:top-[9%] lg:top-[10%] left-0 right-0 w-full flex justify-center pointer-events-none select-none z-10 px-4">
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
          Creates authentic 3D overlapping depth.
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

        {/* ========================================================
            PROPER SEAMLESS EASED BOTTOM-TO-TOP DARK SHADE
            No diagonal lines, no splotches, 100% smooth gradient
            ======================================================== */}
        <div
          className="absolute inset-x-0 bottom-0 h-[48%] sm:h-[46%] pointer-events-none select-none"
          style={{
            background: `linear-gradient(
              to top,
              #02071B 0%,
              rgba(2, 7, 27, 0.98) 14%,
              rgba(2, 7, 27, 0.82) 28%,
              rgba(2, 7, 27, 0.52) 48%,
              rgba(2, 7, 27, 0.22) 68%,
              rgba(2, 7, 27, 0.05) 86%,
              transparent 100%
            )`
          }}
        />
      </div>

      {/* TOP RIGHT: VISUAL SWITCHER (SKYLINE VS ALPINE) */}
      <div className="absolute top-28 sm:top-24 right-4 sm:right-8 z-40 flex items-center gap-1.5 p-1 rounded-full bg-[#02071B]/80 backdrop-blur-xl border border-white/15 text-xs shadow-xl">
        <button
          type="button"
          onClick={() => setBgMode('skyline')}
          className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all text-[11px] font-semibold cursor-pointer ${
            bgMode === 'skyline'
              ? 'bg-[#70A52E] text-white shadow-md'
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
              ? 'bg-[#70A52E] text-white shadow-md'
              : 'text-zinc-300 hover:text-white'
          }`}
          title="Minimal Alpine Horizon"
        >
          <Mountain className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Alpine</span>
        </button>
      </div>

      {/* TOP CLEARANCE FOR FLOATING NAVBAR */}
      <div className="h-24 sm:h-32 relative z-30" />

      {/* ========================================================
          LAYER 3: FOREGROUND UI ANCHORED STRICTLY TO THE BOTTOM
          Compact size, hugging the bottom side of the screen
          ======================================================== */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto pb-4 sm:pb-6 pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* LEFT COLUMN: COMPACT HEADLINE, PARAGRAPH & GREEN CTA */}
          <div className="lg:col-span-5 text-start space-y-2.5">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-extrabold text-white tracking-tight leading-[1.18] font-sans drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-sm">
              <span className="block">{triplio.headlineLine1 || "Architecting Systems for"}</span>
              <span className="block text-sky-100">{triplio.headlineLine2 || "Sustainable Enterprise Scale."}</span>
            </h2>

            <p className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed font-normal max-w-sm line-clamp-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              {triplio.desc ||
                'SCALARK architects institutional operations, sales engines, and financial governance to replace founder bottlenecks with sustainable, autonomous enterprise scale across Saudi Arabia, UAE, and India.'}
            </p>

            {/* GREEN CTA BUTTON + HANDWRITTEN CURSIVE GUARANTEE */}
            <div className="pt-1 flex flex-wrap items-center gap-3">
              <Link
                href="/solutions"
                className="px-5 py-2.5 rounded-xl bg-[#70A52E] hover:bg-[#5f8f26] text-white font-bold text-[11px] uppercase tracking-wider transition-all shadow-[0_8px_25px_rgba(112,165,46,0.35)] active:scale-95 inline-flex items-center gap-1.5"
              >
                <span>{isRtl ? 'استكشف الأنظمة' : 'Explore Systems'}</span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>

              {/* Cursive handwritten annotation with curved arrow */}
              <div className="flex items-center gap-1.5 text-[#70A52E] select-none">
                <svg
                  className="w-7 h-5 text-[#70A52E] rtl:-scale-x-100"
                  viewBox="0 0 45 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M3 5 C 15 5, 25 20, 38 18"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M30 22 L 39 18 L 34 11"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span
                  className="text-xs text-[#70A52E] font-bold italic tracking-wide"
                  style={{ fontFamily: 'var(--font-geist-sans), cursive, sans-serif' }}
                >
                  {isRtl ? 'ضمان سلامة النظم 100%' : '100% Systems Architecture Integrity'}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: COMPACT EXPANDING ACTIVE CARDS (DOWN SIDE) */}
          <div
            className="lg:col-span-7 flex flex-col justify-end"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* CARDS ROW (REDUCED HEIGHT & PADDING) */}
            <div className="flex items-center gap-2 sm:gap-2.5 w-full">
              {cards.map((card, idx) => {
                const isActive = activeCard === idx;
                const Icon = card.icon;

                return (
                  <div
                    key={card.id}
                    onClick={() => {
                      setActiveCard(idx);
                      setProgress(0);
                    }}
                    className={`transition-all duration-500 ease-out cursor-pointer h-[165px] sm:h-[185px] select-none ${
                      isActive
                        ? 'flex-1 min-w-[260px] sm:min-w-[320px] md:min-w-[360px] rounded-2xl sm:rounded-3xl bg-white text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.65)] border border-white p-3.5 sm:p-4.5 flex flex-col justify-between'
                        : 'w-11 sm:w-13 md:w-14 shrink-0 rounded-xl sm:rounded-2xl bg-[#081026]/95 hover:bg-[#131E3D] border border-white/10 hover:border-[#70A52E]/60 flex items-center justify-center p-1.5'
                    }`}
                  >
                    {isActive ? (
                      /* ================= ACTIVE / EXPANDED COMPACT WHITE CARD ================= */
                      <div className="flex flex-col justify-between h-full text-start">
                        {/* Top Row: Title + Green Domain Icon */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="truncate">
                            <span className="text-[9px] font-mono uppercase tracking-wider text-emerald-700 font-bold block mb-0.5 truncate">
                              {card.subtitle}
                            </span>
                            <h3 className="text-sm sm:text-base font-bold font-sans text-zinc-900 leading-snug truncate">
                              {card.title}
                            </h3>
                          </div>

                          <div className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#70A52E] shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Middle: Short Description Hook */}
                        <p className="text-[11px] text-zinc-600 leading-relaxed font-normal my-1 line-clamp-1">
                          {card.desc}
                        </p>

                        {/* Bottom Row: Avatars Row on Left + Big Metric on Right */}
                        <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                          {/* Overlapping Avatars (Compact 24px) */}
                          <div className="flex items-center -space-x-1.5 rtl:space-x-reverse">
                            {card.avatars.map((av, avIdx) => (
                              <div
                                key={avIdx}
                                className="relative w-6 h-6 rounded-full border border-white overflow-hidden shadow-sm bg-zinc-200"
                              >
                                <Image
                                  src={av}
                                  alt="Leader"
                                  fill
                                  sizes="24px"
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>

                          {/* Metric in #70A52E Green */}
                          <div className="text-end">
                            <span className="text-xl sm:text-2xl font-black font-sans text-[#70A52E] block leading-none">
                              {card.metric}
                            </span>
                            <span className="text-[9px] font-mono text-zinc-500 font-bold block mt-0.5">
                              {card.metricLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ================= INACTIVE / COLLAPSED COMPACT DARK CARD ================= */
                      <div className="flex flex-col items-center justify-center h-full gap-2 text-center">
                        <Icon className="w-4 h-4 text-[#70A52E] transition-transform group-hover:scale-110" />
                        <span className="hidden sm:block text-[8px] font-mono font-bold uppercase text-zinc-400 rotate-90 whitespace-nowrap mt-2">
                          {card.id}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* PROGRESS BAR & PAGINATION INDICATORS (COMPACT, CLOSE TO CARDS) */}
            <div className="w-full flex items-center justify-between gap-3 mt-2.5 pt-1">
              {/* Smooth Filling Progress Line */}
              <div className="flex-1 h-[2px] bg-white/15 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#70A52E] transition-all duration-75 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* 4 Pagination Pill Indicators */}
              <div className="flex items-center gap-1 shrink-0">
                {cards.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => {
                      setActiveCard(dotIdx);
                      setProgress(0);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeCard === dotIdx
                        ? 'w-5 bg-[#70A52E]'
                        : 'w-1.5 bg-white/25 hover:bg-white/50'
                    }`}
                    aria-label={`Go to slide ${dotIdx + 1}`}
                  />
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
