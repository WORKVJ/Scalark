'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  Compass,
  CheckCircle2,
  Layers,
  BarChart3,
  DollarSign,
  Building2,
  TrendingUp,
  Users
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const getDomainIcon = (domain = '') => {
  const d = domain.toUpperCase();
  if (d.includes('OPERATION') || d.includes('عمليات')) return Layers;
  if (d.includes('REVENUE') || d.includes('إيرادات')) return BarChart3;
  if (d.includes('FINANCE') || d.includes('مالية')) return DollarSign;
  if (d.includes('FOUNDATION') || d.includes('أساس')) return Building2;
  if (d.includes('SALES') || d.includes('مبيعات')) return TrendingUp;
  if (d.includes('GOVERNANCE') || d.includes('حوكمة')) return Users;
  return Layers;
};

export const SQUAD_MEMBERS = [
  {
    id: 'squad-1',
    name: 'SHIRIN SHARAF',
    role: 'HEAD OF PROCESS ENGINEERING',
    specialty: 'SOP Mapping, Operational Cadence & Bottleneck Eradication',
    deliverables: ['SOP Documentation & Workflows', 'Bottleneck Root-Cause Elimination', 'Autonomous Operations'],
    bgGradient: 'from-[#FF5A1F] via-[#E04006] to-[#B82B00]',
    solidColor: '#FF5A1F',
    accentColor: '#FF7A45',
    domain: 'OPERATIONS',
    metric: '65% Time Freed'
  },
  {
    id: 'squad-2',
    name: 'RISWAN K.M.',
    role: 'REVENUE ENGINE ARCHITECT',
    specialty: 'Predictable Sales Pipelines, B2B Funnels & Conversion Cadence',
    deliverables: ['B2B Sales Pipeline Architecture', 'Conversion Governance Cadence', 'Lead Qualification SOPs'],
    bgGradient: 'from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A]',
    solidColor: '#2563EB',
    accentColor: '#60A5FA',
    domain: 'REVENUE',
    metric: '3.4x Pipeline'
  },
  {
    id: 'squad-3',
    name: 'HAMAS V.A.',
    role: 'FINANCIAL SYSTEMS DIRECTOR',
    specialty: 'Unit Economics, Cash-Flow Triage & Profit Margin Governance',
    deliverables: ['Unit Economics & Margins', 'Forward Cash Runway Clarity', 'Cost-Control & Spend Thresholds'],
    bgGradient: 'from-[#F59E0B] via-[#D97706] to-[#92400E]',
    solidColor: '#F59E0B',
    accentColor: '#FBBF24',
    domain: 'FINANCE',
    metric: '100% Cash Visibility'
  },
  {
    id: 'squad-4',
    name: 'THANZEER P.',
    role: 'CHIEF SYSTEMS ARCHITECT',
    specialty: 'Enterprise Governance, 120-Point Audit & Business Autonomy',
    deliverables: ['120-Point Diagnostic Audit', 'Founder-Free Autonomy Architecture', 'Enterprise Valuation Multiples'],
    bgGradient: 'from-[#0084FF] via-[#091E58] to-[#061233]',
    solidColor: '#0084FF',
    accentColor: '#60A5FA',
    domain: 'FOUNDATION',
    metric: '2.8x Valuation & Revenue'
  },
  {
    id: 'squad-5',
    name: 'ABDUL ALI',
    role: 'COMMERCIAL STRATEGY HEAD',
    specialty: 'Institutional Scaling, Distribution Networks & Partnership Models',
    deliverables: ['Cross-Border Expansion Systems', 'Distribution Channel Architecture', 'Net Margin & Pricing Governance'],
    bgGradient: 'from-[#9333EA] via-[#7E22CE] to-[#581C87]',
    solidColor: '#9333EA',
    accentColor: '#C084FC',
    domain: 'SALES',
    metric: '+38% Net Margin'
  },
  {
    id: 'squad-6',
    name: 'NEHAL VERMA',
    role: 'ORGANIZATION CADENCE LEAD',
    specialty: 'KPI Accountability Matrices, Executive Playbooks & Hiring SOPs',
    deliverables: ['Role Scorecards & KPI Reviews', 'Executive Leadership Playbooks', 'Talent Hiring & Onboarding SOPs'],
    bgGradient: 'from-[#EC4899] via-[#DB2777] to-[#9D174D]',
    solidColor: '#EC4899',
    accentColor: '#F472B6',
    domain: 'GOVERNANCE',
    metric: '98% Autonomy Rate'
  }
];

export const SQUAD_MEMBERS_AR = [
  {
    id: 'squad-1',
    name: 'شيرين شرف',
    role: 'رئيسة هندسة الإجراءات',
    specialty: 'توثيق الإجراءات القياسية (SOPs)، وإيقاع العمليات والقضاء على الاختناقات',
    deliverables: ['توثيق إجراءات العمل القياسية (SOPs)', 'القضاء على جذور الاختناقات', 'حوكمة العمليات المستقلة'],
    bgGradient: 'from-[#FF5A1F] via-[#E04006] to-[#B82B00]',
    solidColor: '#FF5A1F',
    accentColor: '#FF7A45',
    domain: 'العمليات',
    metric: 'استعادة 65% من الوقت'
  },
  {
    id: 'squad-2',
    name: 'رضوان ك. م.',
    role: 'مهندس محرك الإيرادات',
    specialty: 'هندسة مسارات المبيعات، ومسارات B2B وإيقاع التحويل التجاري',
    deliverables: ['هندسة مسارات مبيعات B2B', 'حوكمة إيقاع التحويل التجاري', 'إجراءات تأهيل العملاء'],
    bgGradient: 'from-[#2563EB] via-[#1D4ED8] to-[#1E3A8A]',
    solidColor: '#2563EB',
    accentColor: '#60A5FA',
    domain: 'الإيرادات',
    metric: 'مضاعفة خط المبيعات 3.4x'
  },
  {
    id: 'squad-3',
    name: 'حماس ف. أ.',
    role: 'مدير الأنظمة المالية',
    specialty: 'اقتصاديات الوحدة، وإنقاذ التدفق النقدي، وحوكمة هوامش الربحية',
    deliverables: ['اقتصاديات الوحدة والهوامش', 'وضوح التدفق النقدي المستقبلي', 'حوكمة حدود وسقوف الإنفاق'],
    bgGradient: 'from-[#F59E0B] via-[#D97706] to-[#92400E]',
    solidColor: '#F59E0B',
    accentColor: '#FBBF24',
    domain: 'المالية',
    metric: 'وضوح السيولة 100%'
  },
  {
    id: 'squad-4',
    name: 'تنزير ب.',
    role: 'كبير مهندسي النظم',
    specialty: 'الحوكمة المؤسسية، والتدقيق الشامل (120 نقطة)، واستقلالية العمل عن المؤسس',
    deliverables: ['تدقيق تشخيصي مؤسسي 120 نقطة', 'بنية استقلالية المؤسس', 'مضاعفة تقييم الشركة'],
    bgGradient: 'from-[#0084FF] via-[#091E58] to-[#061233]',
    solidColor: '#0084FF',
    accentColor: '#60A5FA',
    domain: 'الأساس المؤسسي',
    metric: 'مضاعفة التقييم 2.8x'
  },
  {
    id: 'squad-5',
    name: 'عبد العلي',
    role: 'رئيس الاستراتيجية التجارية',
    specialty: 'التوسع المؤسسي، وشبكات التوزيع ونماذج الشراكات الاستراتيجية',
    deliverables: ['أنظمة التوسع الإقليمي', 'بنية قنوات التوزيع', 'حوكمة الهوامش الصافية والتسعير'],
    bgGradient: 'from-[#9333EA] via-[#7E22CE] to-[#581C87]',
    solidColor: '#9333EA',
    accentColor: '#C084FC',
    domain: 'المبيعات',
    metric: '+38% هامش صافي'
  },
  {
    id: 'squad-6',
    name: 'نيهال فيرما',
    role: 'مسؤولة إيقاع المنظمة',
    specialty: 'مصفوفات مساءلة مؤشرات الأداء (KPIs)، وأدلة القيادة التنفيذية، وإجراءات التوظيف',
    deliverables: ['بطاقات قياس ومساءلة الأدوار', 'أدلة القيادة التنفيذية', 'إجراءات استقطاب وتأهيل المواهب'],
    bgGradient: 'from-[#EC4899] via-[#DB2777] to-[#9D174D]',
    solidColor: '#EC4899',
    accentColor: '#F472B6',
    domain: 'الحوكمة',
    metric: 'استقلالية تشغيلية 98%'
  }
];

export default function RotatingSquadSection() {
  const { currentLang, t, isRtl } = useLanguage();
  const squadInfo = t.squadSection;
  const members = currentLang === 'AR' ? SQUAD_MEMBERS_AR : SQUAD_MEMBERS;

  const [activeMember, setActiveMember] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const containerRef = useRef(null);
  const stageRef = useRef(null);
  const currentRotationRef = useRef(0);
  const targetRotationRef = useRef(0);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animFrameRef = useRef(null);
  const lastScrollYRef = useRef(0);

  const totalMembers = members.length;
  const angleStep = 360 / totalMembers;

  const [radius, setRadius] = useState(380);

  useEffect(() => {
    const updateRadius = () => {
      const w = window.innerWidth;
      if (w < 480) {
        setRadius(190);
      } else if (w < 768) {
        setRadius(270);
      } else if (w < 1024) {
        setRadius(340);
      } else {
        setRadius(380);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const updateActiveIndex = useCallback((rotationDeg) => {
    let normalized = ((-rotationDeg % 360) + 360) % 360;
    const closestIdx = Math.round(normalized / angleStep) % totalMembers;
    setActiveIdx(closestIdx);
  }, [angleStep, totalMembers]);

  // Main animation loop
  useEffect(() => {
    const loop = () => {
      if (!isDraggingRef.current) {
        if (!isHovered) {
          targetRotationRef.current -= 0.12;
        }

        if (Math.abs(velocityRef.current) > 0.05) {
          targetRotationRef.current += velocityRef.current;
          velocityRef.current *= 0.94;
        }
      }

      currentRotationRef.current += (targetRotationRef.current - currentRotationRef.current) * 0.12;

      if (stageRef.current) {
        stageRef.current.style.transform = `rotateY(${currentRotationRef.current}deg)`;
      }

      updateActiveIndex(currentRotationRef.current);
      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isHovered, updateActiveIndex]);

  // Scroll acceleration
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          targetRotationRef.current -= delta * 0.15;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pointer drag events
  const onPointerDown = (e) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    lastXRef.current = startXRef.current;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const onPointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const deltaX = clientX - lastXRef.current;
    const now = performance.now();
    const dt = Math.max(1, now - lastTimeRef.current);

    velocityRef.current = (deltaX / dt) * 14;
    targetRotationRef.current += deltaX * 0.45;

    lastXRef.current = clientX;
    lastTimeRef.current = now;
  };

  const onPointerUp = () => {
    isDraggingRef.current = false;
  };

  const snapToMember = (index) => {
    const currentAngle = targetRotationRef.current;
    let targetAngle = -index * angleStep;

    const diff = (targetAngle - currentAngle) % 360;
    let shortestDiff = diff;
    if (diff > 180) shortestDiff -= 360;
    if (diff < -180) shortestDiff += 360;

    targetRotationRef.current = currentAngle + shortestDiff;
  };

  const rotateToStep = (direction) => {
    if (direction === 'next') {
      targetRotationRef.current -= angleStep;
    } else {
      targetRotationRef.current += angleStep;
    }
  };

  return (
    <section
      ref={containerRef}
      id="systems-architects"
      className="relative py-14 sm:py-24 md:py-32 bg-[#061233] text-white overflow-hidden border-t border-[#0084FF]/25"
      onMouseDown={onPointerDown}
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onMouseLeave={onPointerUp}
      onTouchStart={onPointerDown}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
    >
      {/* AMBIENT RADIAL LIGHTING */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#0084FF]/15 via-[#38BDF8]/10 to-transparent rounded-full blur-[160px] pointer-events-none" />

      {/* SUBTLE ELLIPTICAL AMBIENT DISK */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[340px] rounded-full pointer-events-none opacity-20 border border-white/20"
        style={{
          transform: 'translate(-50%, -50%) rotateX(75deg)',
          backgroundImage: 'radial-gradient(ellipse at center, rgba(255,255,255,0.15) 0%, transparent 70%)',
          maskImage: 'linear-gradient(to top, black, transparent)'
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT COLUMN: ARCHITECTURAL MISSION BRIEF */}
          <div className="lg:col-span-5 text-start space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#081B4E] border border-[#0084FF]/40 text-blue-200 text-xs font-mono uppercase tracking-widest font-bold shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#0084FF]" />
              {squadInfo.badge}
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] font-sans">
              {squadInfo.headlineMain} <br />
              <span className="text-red-500">{squadInfo.headlineAccent}</span><br />
              {squadInfo.headlineSub}
            </h2>

            {/* ROLE PILLARS STRIP */}
            <p className="text-[10px] sm:text-xs font-mono tracking-wider uppercase text-zinc-400 font-semibold leading-relaxed pt-1 sm:pt-2">
              {squadInfo.rolePillars}
            </p>

            <p className="text-zinc-400 text-xs sm:text-base leading-relaxed font-normal">
              {squadInfo.desc}
            </p>

            {/* ACTIVE SQUAD PILL INDICATOR */}
            <div className="pt-2 flex flex-wrap gap-2">
              {members.map((member, idx) => (
                <button
                  key={member.id}
                  onClick={() => snapToMember(idx)}
                  className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${
                    activeIdx === idx
                      ? 'bg-white text-black border-white shadow-lg scale-105'
                      : 'bg-white/[0.04] text-zinc-400 border-white/10 hover:border-white/30 hover:text-white'
                  }`}
                >
                  {member.name.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* INTERACTION CONTROLS */}
            <div className="pt-4 flex items-center gap-4">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-mono text-zinc-300">
                <Compass className="w-3.5 h-3.5 text-red-500 animate-spin" style={{ animationDuration: '8s' }} />
                <span>{squadInfo.controlsBadge}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => rotateToStep('prev')}
                  className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-zinc-400 hover:text-white transition-all active:scale-90 cursor-pointer shadow-md"
                  aria-label="Previous member"
                >
                  <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
                </button>
                <button
                  type="button"
                  onClick={() => rotateToStep('next')}
                  className="p-3 rounded-full bg-white/[0.06] hover:bg-white/[0.15] border border-white/10 text-zinc-400 hover:text-white transition-all active:scale-90 cursor-pointer shadow-md"
                  aria-label="Next member"
                >
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D CYLINDRICAL ROTATING STAGE */}
          <div
            className="lg:col-span-7 h-[360px] sm:h-[500px] md:h-[580px] relative flex items-center justify-center select-none lg:pl-6 cursor-grab active:cursor-grabbing overflow-hidden sm:overflow-visible"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              perspective: radius < 250 ? '750px' : '1300px',
              perspectiveOrigin: '50% 50%'
            }}
          >
            <div
              ref={stageRef}
              className="relative w-full h-full flex items-center justify-center pointer-events-none"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform'
              }}
            >
              {members.map((member, index) => {
                const cardAngle = index * angleStep;
                const DomainIcon = getDomainIcon(member.domain);

                return (
                  <div
                    key={member.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMember(member);
                    }}
                    className="absolute w-[160px] sm:w-[205px] md:w-[245px] h-[260px] sm:h-[325px] md:h-[375px] pointer-events-auto cursor-pointer group"
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: `rotateY(${cardAngle}deg) translateZ(${radius}px) rotateX(-10deg)`,
                      willChange: 'transform'
                    }}
                  >
                    <div 
                      className="relative w-full h-full rounded-2xl sm:rounded-3xl transition-transform duration-300 group-hover:scale-105"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* FRONT FACE (CONTENT ONLY - NO STOCK PHOTOS) */}
                      <div
                        className={`absolute inset-0 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col justify-between border-2 border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden bg-gradient-to-b ${member.bgGradient}`}
                        style={{
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden'
                        }}
                      >
                        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/30 to-transparent rounded-full pointer-events-none" />

                        {/* CARD TOP ROW */}
                        <div className="flex items-center justify-between z-10 gap-1">
                          <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-mono font-black uppercase tracking-wider bg-[#061233]/70 backdrop-blur-md text-white border border-[#0084FF]/40 truncate">
                            {member.domain}
                          </span>
                          <span className="px-1.5 sm:px-2 py-0.5 rounded-full text-[7.5px] sm:text-[9.5px] font-mono font-bold text-white bg-white/20 backdrop-blur-md truncate">
                            {member.metric}
                          </span>
                        </div>

                        {/* MIDDLE AREA: ARCHITECTURE CONTENT (NO IMAGES) */}
                        <div className="relative flex-1 w-full my-2 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#061233]/75 backdrop-blur-md border border-white/15 flex flex-col justify-between overflow-hidden shadow-inner text-start z-10">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-white shrink-0">
                                <DomainIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              </div>
                              <span className="text-[8.5px] sm:text-[9.5px] font-mono uppercase tracking-wider text-white/80 font-bold truncate">
                                {isRtl ? 'التخصص المؤسسي' : 'Architecture Focus'}
                              </span>
                            </div>

                            <p className="text-[9.5px] sm:text-[11px] text-white/95 leading-relaxed font-sans line-clamp-3">
                              {member.specialty}
                            </p>
                          </div>

                          {member.deliverables && (
                            <div className="space-y-1 sm:space-y-1.5 pt-2 border-t border-white/15">
                              {member.deliverables.slice(0, 2).map((item, dIdx) => (
                                <div key={dIdx} className="flex items-center gap-1.5 text-[8px] sm:text-[9.5px] text-white/90 font-medium truncate">
                                  <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/80 shrink-0" />
                                  <span className="truncate">{item}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* CARD BOTTOM ROW: IDENTITY & ROLE */}
                        <div className="bg-[#081B4E]/90 backdrop-blur-md rounded-xl sm:rounded-2xl p-2 sm:p-2.5 border border-[#0084FF]/35 z-10 shadow-lg text-start">
                          <div className="text-[11px] sm:text-xs font-black text-white tracking-tight truncate uppercase">
                            {member.name}
                          </div>
                          <div className="text-[8px] sm:text-[9.5px] font-mono uppercase tracking-wider text-zinc-300 font-bold truncate">
                            {member.role}
                          </div>
                        </div>
                      </div>

                      {/* BACK FACE */}
                      <div
                        className="absolute inset-0 rounded-2xl sm:rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center border-2 border-white/10 shadow-2xl"
                        style={{
                          transform: 'rotateY(180deg)',
                          backfaceVisibility: 'hidden',
                          WebkitBackfaceVisibility: 'hidden',
                          backgroundColor: member.solidColor,
                          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.4) 100%)'
                        }}
                      >
                        <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl bg-[#061233]/70 border border-[#0084FF]/40 backdrop-blur-md flex items-center justify-center mb-2 sm:mb-3 shadow-inner">
                          <span className="text-lg sm:text-xl font-black text-white font-mono">S</span>
                        </div>
                        <div className="text-[11px] sm:text-xs font-mono font-black uppercase tracking-widest text-white/90 text-center">
                          SCALARK
                        </div>
                        <div className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-white/70 text-center mt-1">
                          {isRtl ? 'هندسة نظم الأعمال' : 'SYSTEMS ARCHITECTURE'}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-2 sm:bottom-3 inset-x-0 flex justify-center pointer-events-none px-4">
              <div className="px-3.5 sm:px-4 py-1.5 rounded-full bg-[#081B4E]/90 backdrop-blur-md border border-[#0084FF]/30 text-[9.5px] sm:text-xs font-mono font-bold text-blue-100 tracking-wider shadow-2xl flex items-center gap-2 max-w-[95%] sm:max-w-none">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse shrink-0" />
                <span className="sm:hidden">{squadInfo.swipeHint}</span>
                <span className="hidden sm:inline">{squadInfo.dragHint}</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* SQUAD MEMBER DETAIL MODAL */}
      {activeMember && (() => {
        const ActiveDomainIcon = getDomainIcon(activeMember.domain);

        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061233]/90 backdrop-blur-xl animate-fadeIn"
            onClick={() => setActiveMember(null)}
          >
            <div
              className="w-full max-w-lg rounded-2xl sm:rounded-3xl p-5 sm:p-8 bg-[#081B4E] border border-[#0084FF]/50 shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative max-h-[90vh] overflow-y-auto text-start"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-white/10 text-white border border-white/15">
                  {isRtl ? `${activeMember.domain} • مهندس نظم` : `${activeMember.domain} ARCHITECT`}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveMember(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white flex items-center justify-center text-sm font-mono transition-colors cursor-pointer"
                >
                  ✕
                </button>
              </div>

              <div className="flex items-center gap-4 mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${activeMember.bgGradient} flex items-center justify-center border border-white/20 shadow-md flex-shrink-0 text-white`}>
                  <ActiveDomainIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {activeMember.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-red-400 font-bold">
                    {activeMember.role}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-4 space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                  {isRtl ? 'التخصص التشغيلي' : 'Operational Specialization'}
                </div>
                <p className="text-sm text-zinc-200 font-normal leading-relaxed">
                  {activeMember.specialty}
                </p>
              </div>

              {activeMember.deliverables && (
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 mb-6 space-y-2.5">
                  <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                    {isRtl ? 'المخرجات والأنظمة المعتمدة' : 'Standard Systems & Deliverables'}
                  </div>
                  <div className="space-y-2">
                    {activeMember.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-[13px] text-white/90">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    {isRtl ? `المؤشر المحقق: ${activeMember.metric}` : `Audited Benchmark: ${activeMember.metric}`}
                  </span>
                </div>
                <Link
                  href="/contact"
                  onClick={() => setActiveMember(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black text-xs font-mono font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors text-center shadow-md active:scale-95"
                >
                  {isRtl ? 'استشر فريق المهندسين ←' : 'Consult With Squad →'}
                </Link>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
