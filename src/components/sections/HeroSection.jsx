'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Layers,
  Globe2,
  TrendingUp,
  DollarSign,
  Building2,
  Mountain,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
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

  // 4 Core Enterprise Scaling Cards (Matching GrowMedLink Active Expanding Card Carousel)
  const cards = [
    {
      id: 'ksa',
      title: isRtl ? 'المملكة العربية السعودية' : 'Saudi Arabia (KSA)',
      subtitle: isRtl ? 'هندسة العمليات وإجراءات العمل' : 'Operations & SOP Architecture',
      metric: '98%',
      metricLabel: isRtl ? 'استقلالية تشغيلية' : 'SOP Adoption',
      desc: isRtl
        ? 'توثيق إجراءات العمل ومصفوفات التفويض لتعمل الشركة باستقلالية تامة عن المالك.'
        : 'Codify standard operating procedures and DoA delegation matrices to replace founder bottlenecks.',
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
        ? 'حوكمة مسار المبيعات B2B وتأهيل العملاء المحتملين للتنبؤ الدقيق بالإيرادات.'
        : 'Predictable B2B sales pipeline governance and high-velocity deal conversion checkpoints.',
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
        ? 'ربط العمليات وسلاسل الإمداد والفرق التجارية بين أسواق الخليج والهند.'
        : 'Multi-jurisdiction operational architectures linking supply chains and regional governance.',
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
      subtitle: isRtl ? 'حوكمة التدفقات وهوامش الربح' : '13-Week Forward Cash Runway',
      metric: '100%',
      metricLabel: isRtl ? 'وضوح مالي كامل' : 'Cash Runway Visibility',
      desc: isRtl
        ? 'لوحات تحكم مالية استشرافية واقتصاديات الوحدة وسقوف الإنفاق لحماية السيولة.'
        : 'Real-time forward-looking cash dashboards, unit economics, and spend authority gates.',
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
      className="relative min-h-[96vh] sm:min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#040E2A] text-white select-none"
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

        {/* BOTTOM GRADIENT: SEAMLESS DEEP NAVY BASE FOR TEXT READABILITY */}
        <div className="absolute inset-x-0 bottom-0 h-[50%] sm:h-[46%] bg-gradient-to-t from-[#040E2A] via-[#040E2A]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-[#040E2A] pointer-events-none" />
      </div>

      {/* TOP RIGHT: VISUAL SWITCHER (SKYLINE VS ALPINE) */}
      <div className="absolute top-28 sm:top-24 right-4 sm:right-8 z-40 flex items-center gap-1.5 p-1 rounded-full bg-[#040E2A]/75 backdrop-blur-xl border border-white/15 text-xs shadow-xl">
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
      <div className="h-28 sm:h-36 relative z-30" />

      {/* ========================================================
          LAYER 3: FOREGROUND UI (MATCHING GROWMEDLINK 2ND IMAGE)
          Left: Headline + Paragraph + Green CTA + Cursive Annotation
          Right: Expanding Active Card Moving Carousel + Progress Bar
          ======================================================== */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-auto pb-8 sm:pb-12 pt-8 sm:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          
          {/* LEFT COLUMN: HEADLINE, PARAGRAPH & GREEN CTA WITH CURSIVE ANNOTATION */}
          <div className="lg:col-span-5 text-start space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] font-extrabold text-white tracking-tight leading-[1.15] font-sans drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] max-w-md">
              <span className="block">{triplio.headlineLine1 || "Architecting Systems for"}</span>
              <span className="block text-sky-100">{triplio.headlineLine2 || "Sustainable Enterprise Scale."}</span>
            </h2>

            <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal max-w-md">
              {triplio.desc ||
                'SCALARK architects institutional operations, sales engines, and financial governance to replace founder bottlenecks with sustainable, autonomous enterprise scale across Saudi Arabia, UAE, and India.'}
            </p>

            {/* GREEN CTA BUTTON + HANDWRITTEN CURSIVE GUARANTEE (MATCHING REFERENCE IMAGE 2) */}
            <div className="pt-2 flex flex-col items-start gap-3">
              <Link
                href="/solutions"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#70A52E] hover:bg-[#5f8f26] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(112,165,46,0.4)] hover:shadow-[0_15px_40px_rgba(112,165,46,0.6)] active:scale-95 inline-flex items-center gap-2"
              >
                <span>{isRtl ? 'استكشف الحلول والأنظمة' : 'Explore Systems'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>

              {/* Cursive handwritten annotation with curved arrow (Exact match to Image 2) */}
              <div className="flex items-center gap-2 text-[#70A52E] select-none pt-1">
                <svg
                  className="w-8 sm:w-10 h-6 text-[#70A52E] rtl:-scale-x-100"
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
                  className="text-xs sm:text-sm text-[#70A52E] font-bold italic tracking-wide"
                  style={{ fontFamily: 'var(--font-geist-sans), cursive, sans-serif' }}
                >
                  {isRtl ? 'ضمان سلامة النظم 100%' : '100% Systems Architecture Integrity'}
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: EXPANDING ACTIVE CARDS MOVING CAROUSEL (MATCHING REFERENCE IMAGE 2) */}
          <div
            className="lg:col-span-7 flex flex-col justify-end"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* CARDS ROW */}
            <div className="flex items-center gap-2.5 sm:gap-3 w-full">
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
                    className={`transition-all duration-500 ease-out cursor-pointer h-[230px] sm:h-[260px] select-none ${
                      isActive
                        ? 'flex-1 min-w-[270px] sm:min-w-[340px] md:min-w-[390px] rounded-3xl bg-white text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.6)] border border-white p-5 sm:p-6 flex flex-col justify-between'
                        : 'w-14 sm:w-16 md:w-20 shrink-0 rounded-2xl sm:rounded-3xl bg-[#141C33]/90 hover:bg-[#1D2847] border border-white/10 hover:border-[#70A52E]/60 flex items-center justify-center p-2'
                    }`}
                  >
                    {isActive ? (
                      /* ================= ACTIVE / EXPANDED WHITE CARD ================= */
                      <div className="flex flex-col justify-between h-full text-start">
                        {/* Top Row: Title + Green Domain Icon */}
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-700 font-bold block mb-1">
                              {card.subtitle}
                            </span>
                            <h3 className="text-base sm:text-lg md:text-xl font-bold font-sans text-zinc-900 leading-tight">
                              {card.title}
                            </h3>
                          </div>

                          <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#70A52E] shrink-0">
                            <Icon className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Middle: Short Description Hook */}
                        <p className="text-xs text-zinc-600 leading-relaxed font-normal my-2 line-clamp-2">
                          {card.desc}
                        </p>

                        {/* Bottom Row: Avatars Row on Left + Big Metric on Right (Matching Image 2) */}
                        <div className="pt-3 border-t border-zinc-100 flex items-center justify-between">
                          {/* Overlapping Avatars */}
                          <div className="flex items-center -space-x-2 rtl:space-x-reverse">
                            {card.avatars.map((av, avIdx) => (
                              <div
                                key={avIdx}
                                className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden shadow-sm bg-zinc-200"
                              >
                                <Image
                                  src={av}
                                  alt="Leader"
                                  fill
                                  sizes="32px"
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>

                          {/* Giant Metric in #70A52E Green */}
                          <div className="text-end">
                            <span className="text-2xl sm:text-3xl md:text-4xl font-black font-sans text-[#70A52E] block leading-none">
                              {card.metric}
                            </span>
                            <span className="text-[10px] font-mono text-zinc-500 font-bold block mt-0.5">
                              {card.metricLabel}
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* ================= INACTIVE / COLLAPSED DARK CARD ================= */
                      <div className="flex flex-col items-center justify-center h-full gap-3 text-center">
                        <Icon className="w-6 h-6 text-[#70A52E] transition-transform group-hover:scale-110" />
                        <span className="hidden sm:block text-[9px] font-mono font-bold uppercase text-zinc-400 rotate-90 whitespace-nowrap mt-4">
                          {card.id}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* PROGRESS BAR & PAGINATION INDICATORS (EXACT MATCH TO BOTTOM OF IMAGE 2) */}
            <div className="w-full flex items-center justify-between gap-4 mt-4 pt-2">
              {/* Smooth Filling Progress Line */}
              <div className="flex-1 h-[3px] bg-white/15 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#70A52E] transition-all duration-75 ease-linear rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* 4 Pagination Pill Indicators */}
              <div className="flex items-center gap-1.5 shrink-0">
                {cards.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => {
                      setActiveCard(dotIdx);
                      setProgress(0);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      activeCard === dotIdx
                        ? 'w-6 bg-[#70A52E]'
                        : 'w-2 bg-white/25 hover:bg-white/50'
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
