'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  X,
  Layers,
  BarChart3,
  DollarSign,
  Users,
  Search,
  Globe2,
  Calendar,
  Check
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const SERVICE_ICONS = {
  sops: Layers,
  revenue: BarChart3,
  finance: DollarSign,
  governance: Users,
  audit: Search,
  expansion: Globe2
};

export default function CoreValuesSection() {
  const { t, isRtl } = useLanguage();
  const sData = t.servicesSection || {};
  const baseServices = sData.services || [];
  // Duplicate for seamless infinite gliding stream
  const services = [...baseServices, ...baseServices];

  const [selectedService, setSelectedService] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollRef = useRef(null);
  const animRef = useRef(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollStartRef = useRef(0);

  // Smooth step scroll via buttons
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 360;
    const current = scrollRef.current.scrollLeft;
    let target;

    if (isRtl) {
      target = direction === 'next' ? current - scrollAmount : current + scrollAmount;
    } else {
      target = direction === 'next' ? current + scrollAmount : current - scrollAmount;
    }

    scrollRef.current.scrollTo({
      left: target,
      behavior: 'smooth'
    });
  };

  // Continuous fluid auto-gliding animation loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || baseServices.length === 0) return;

    let lastTime = performance.now();
    // Brisk, smooth speed: 70 pixels/second (active & fluid, not sluggish!)
    const SPEED_PPS = 70;

    const loop = (currentTime) => {
      const dt = Math.min(0.05, (currentTime - lastTime) / 1000);
      lastTime = currentTime;

      if (!isPaused && !selectedService && !isDraggingRef.current && el) {
        const step = SPEED_PPS * dt;

        if (isRtl) {
          el.scrollLeft -= step;
          const half = el.scrollWidth / 2;
          if (Math.abs(el.scrollLeft) >= half) {
            el.scrollLeft = 0;
          }
        } else {
          el.scrollLeft += step;
          const half = el.scrollWidth / 2;
          if (el.scrollLeft >= half) {
            el.scrollLeft = 0;
          }
        }
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isPaused, selectedService, isRtl, baseServices.length]);

  // Touch and drag support
  const onMouseDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollStartRef.current = scrollRef.current?.scrollLeft || 0;
  };

  const onMouseMove = (e) => {
    if (!isDraggingRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startXRef.current) * 1.5;
    scrollRef.current.scrollLeft = scrollStartRef.current - walk;
  };

  const onMouseUp = () => {
    isDraggingRef.current = false;
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    if (selectedService) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedService]);

  return (
    <section className="relative z-20 w-full py-16 sm:py-24 bg-white text-black overflow-hidden border-t border-zinc-200">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        
        {/* 1. SECTION TITLE WITH HANDWRITTEN ANNOTATION (MATCHING REFERENCE IMAGE) */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight uppercase flex items-center">
            <span className="text-[#1F1F21] mr-3 sm:mr-4 rtl:mr-0 rtl:ml-3 rtl:ml-4">
              {sData.headingPart1?.trim() || 'OUR'}
            </span>
            <span className="text-[#70A52E]">{sData.headingPart2?.trim() || 'SERVICES'}</span>
          </h2>

          {/* Handwritten Annotation + Curved Arrow */}
          <div className="flex items-center gap-2 text-red-500 pt-1 select-none">
            <svg
              className="w-10 sm:w-12 h-6 text-red-500 rtl:-scale-x-100"
              viewBox="0 0 45 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M3 19 C 14 19, 28 3, 40 7"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M33 5 L 41 7 L 38 14"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span
              className="text-sm sm:text-base text-red-600 font-semibold tracking-wide italic"
              style={{ fontFamily: 'var(--font-geist-sans), cursive, sans-serif' }}
            >
              {sData.annotation || 'Services we offer'}
            </span>
          </div>
        </div>

        {/* 2. TWO-COLUMN LAYOUT (LEFT BRIEF + RIGHT CONTINUOUS AUTO-MOVING CAROUSEL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: TITLE, INTRO & EXPLORE CTA */}
          <div className="lg:col-span-4 space-y-5 text-start">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#70A52E] leading-tight tracking-tight">
              {sData.sideTitle || 'Systems Engineered for Enterprise Scale'}
            </h3>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-normal">
              {sData.sideDesc ||
                'SCALARK architects institutional operations, sales engines, and financial governance to replace founder bottlenecks with sustainable, autonomous enterprise scale across Saudi Arabia, UAE, and India.'}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-2xl bg-[#70A52E] hover:bg-[#5f8f26] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg active:scale-95"
              >
                <span>{sData.exploreBtn || 'Explore Services'}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>

              {/* Slider Prev / Next Controls */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => scroll('prev')}
                  className="w-10 h-10 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 text-black flex items-center justify-center transition-all shadow-sm active:scale-90 cursor-pointer"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('next')}
                  className="w-10 h-10 rounded-full border border-zinc-300 bg-white hover:bg-zinc-100 text-black flex items-center justify-center transition-all shadow-sm active:scale-90 cursor-pointer"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-5 h-5 rtl:rotate-180" />
                </button>
              </div>
            </div>

            <p className="text-[11px] text-zinc-400 font-medium">
              💡 {sData.clickHint || 'Click any card for full systems blueprint'}
            </p>
          </div>

          {/* RIGHT COLUMN: HORIZONTAL FLUID AUTO-MOVING CAROUSEL */}
          <div
            className="lg:col-span-8 overflow-hidden relative select-none cursor-grab active:cursor-grabbing"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              setIsPaused(false);
              onMouseUp();
            }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
          >
            <div
              ref={scrollRef}
              className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-none py-4 px-1"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {services.map((service, idx) => {
                const IconComponent = SERVICE_ICONS[service.id] || Layers;

                return (
                  <div
                    key={`${service.id}-${idx}`}
                    onClick={() => setSelectedService(service)}
                    className="w-[285px] sm:w-[320px] md:w-[340px] shrink-0 rounded-[26px] bg-[#1F1F21] text-white shadow-[0_15px_40px_rgba(0,0,0,0.12)] border border-zinc-800/80 hover:border-[#70A52E] hover:shadow-[0_20px_50px_rgba(112,165,46,0.22)] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between overflow-hidden group"
                  >
                    {/* TOP SECTION: EMERALD / TEAL GRADIENT BANNER (MATCHING REFERENCE) */}
                    <div className="relative p-5 sm:p-6 bg-gradient-to-br from-[#0F5342] via-[#0D4436] to-[#082C23] border-b border-white/10 flex flex-col justify-between min-h-[195px] overflow-hidden">
                      {/* Ambient corner light accent */}
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                      {/* Header Row: Big Acronym + Right Badge Icon */}
                      <div className="flex items-start justify-between gap-3 relative z-10 mb-3">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-300 font-bold block mb-1">
                            {service.badge}
                          </span>
                          <h4 className="text-3xl sm:text-4xl font-black text-white tracking-tight font-sans uppercase">
                            {service.acronym}
                          </h4>
                        </div>

                        <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white shadow-inner group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-emerald-300" />
                        </div>
                      </div>

                      {/* Checklist Sub-points (Matching Reference Image) */}
                      <div className="space-y-1.5 relative z-10 pt-2 border-t border-white/15">
                        {service.points.slice(0, 3).map((pt, pIdx) => (
                          <div
                            key={pIdx}
                            className="flex items-center gap-2 text-[11px] sm:text-xs text-white/95 font-medium truncate"
                          >
                            <span className="w-3.5 h-3.5 rounded-full bg-emerald-400/25 border border-emerald-300 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5 text-white stroke-[3]" />
                            </span>
                            <span className="truncate">{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* BOTTOM SECTION: CHARCOAL BASE (MATCHING REFERENCE) */}
                    <div className="p-5 sm:p-6 bg-[#1F1F21] text-start flex flex-col justify-between flex-1">
                      <div>
                        {/* Title in #70A52E Green */}
                        <h5 className="text-base sm:text-lg font-bold text-[#70A52E] mb-2 leading-snug font-sans group-hover:text-emerald-400 transition-colors">
                          {service.title}
                        </h5>

                        {/* Short Description */}
                        <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed font-normal line-clamp-3">
                          {service.shortDesc}
                        </p>
                      </div>

                      {/* Card Footer: Detail Link */}
                      <div className="pt-4 mt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-semibold text-zinc-400 group-hover:text-white transition-colors">
                        <span>{isRtl ? 'عرض تفاصيل النظام' : 'View Full Details'}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#70A52E] group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CURVED DOTTED WAVE ACCENT (MATCHING BOTTOM OF REFERENCE IMAGE) */}
            <div className="flex justify-end pt-4 pr-6 select-none pointer-events-none">
              <svg className="w-28 h-6 text-[#70A52E]" viewBox="0 0 120 24" fill="currentColor">
                <circle cx="10" cy="18" r="3.5" opacity="0.4" />
                <circle cx="28" cy="19" r="4" opacity="0.6" />
                <circle cx="48" cy="19.5" r="4.5" opacity="0.8" />
                <circle cx="68" cy="19.5" r="5" />
                <circle cx="88" cy="19" r="4.5" opacity="0.8" />
                <circle cx="106" cy="17.5" r="4" opacity="0.6" />
              </svg>
            </div>
          </div>

        </div>

      </div>

      {/* 3. SERVICE DETAIL MODAL (OPENED ON CARD CLICK) */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="w-full max-w-2xl rounded-3xl bg-[#18181B] border border-zinc-700 text-white shadow-2xl p-6 sm:p-9 relative max-h-[90vh] overflow-y-auto text-start"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-zinc-800">
              <div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#70A52E]/20 text-[#70A52E] border border-[#70A52E]/40 mb-2 inline-block">
                  {selectedService.badge} • {selectedService.acronym}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-sans">
                  {selectedService.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="w-9 h-9 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer shrink-0"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Detailed Overview */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#70A52E] font-bold mb-2">
                  {isRtl ? 'نظرة شاملة على النظام' : 'System Overview'}
                </h4>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                  {selectedService.detailedOverview}
                </p>
              </div>

              {/* Standard Deliverables */}
              {selectedService.deliverables && (
                <div className="p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#70A52E]" />
                    <span>{isRtl ? 'المخرجات والأنظمة المعتمدة' : 'Key Architecture Deliverables'}</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedService.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#70A52E] mt-2 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Grid: Who this is for + Measurable Outcome */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold block mb-1">
                    {isRtl ? 'الفئة المستهدفة' : 'Who This Is For'}
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {selectedService.whoFor}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-950/30 border border-emerald-800/40">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                    {isRtl ? 'الأثر والنتيجة الملموسة' : 'Audited Outcome'}
                  </span>
                  <p className="text-xs text-emerald-200 font-semibold leading-relaxed">
                    {selectedService.outcome}
                  </p>
                </div>
              </div>

              {/* Timeline */}
              {selectedService.timeline && (
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
                  <Calendar className="w-4 h-4 text-[#70A52E]" />
                  <span>
                    {isRtl ? 'الجدول الزمني المقدر:' : 'Estimated Deployment:'}{' '}
                    <strong className="text-white">{selectedService.timeline}</strong>
                  </span>
                </div>
              )}
            </div>

            {/* Modal Footer CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 mt-6 border-t border-zinc-800">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-5 py-2.5 rounded-full bg-zinc-800 hover:bg-zinc-700 text-xs font-semibold text-zinc-300 transition-colors cursor-pointer text-center"
              >
                {sData.modalClose || 'Close'}
              </button>

              <Link
                href="/contact"
                onClick={() => setSelectedService(null)}
                className="px-7 py-3 rounded-full bg-[#70A52E] hover:bg-[#5f8f26] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 text-center shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{sData.modalBookCta || 'Schedule System Consultation →'}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
