'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check, ChevronRight, Layers, BarChart3, Activity, Users, X } from 'lucide-react';
import { getSolutionsData } from '@/data/contentData';
import ScrollReveal from '@/components/common/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function SolutionsSection({ t: propT }) {
  const { currentLang, isRtl, t: ctxT } = useLanguage();
  const t = propT || ctxT;
  const solutionsData = getSolutionsData(currentLang);

  const [activeModalSolution, setActiveModalSolution] = useState(null);
  const [expandedCol, setExpandedCol] = useState(0);

  const pillars = [
    {
      id: 'operations',
      num: '01',
      verticalTitle: isRtl ? 'العمليات' : 'OPERATIONS',
      title: isRtl ? 'العمليات وهندسة الإجراءات' : 'Operations & Process Engineering',
      icon: Layers,
      gradient: 'from-[#06281E] via-[#091D17] to-[#060D0A]',
      image: '/assets/pillar-foundation.jpg',
      accent: '#10B981',
      badge: isRtl ? 'استقلالية المؤسس' : 'Owner Independence',
      badgeColor: 'text-emerald-300 bg-emerald-500/15 border-emerald-500/30',
      activeBorder: 'border-emerald-500/70 shadow-[0_25px_60px_rgba(16,185,129,0.25)]',
      iconActive: 'bg-emerald-500/25 text-emerald-300 border-emerald-500/40 shadow-[0_0_15px_rgba(16,185,129,0.3)]',
      ctaBg: 'bg-gradient-to-r from-emerald-600 to-teal-500 shadow-[0_0_20px_rgba(16,185,129,0.5)]',
      description: isRtl 
        ? 'نوثق ونبسط مسارات العمل الأساسية لتعمل الإدارات باستقلالية وانضباط ومعايير موثقة.'
        : 'We document and streamline core workflows so departments operate with autonomy, discipline, and documented standards.',
      keyCapabilities: isRtl
        ? ['إجراءات التشغيل القياسية (SOPs)', 'بنية تفويض الصلاحيات والمسؤوليات', 'القضاء على اختناقات العمليات', 'أنظمة الضبط والرقابة الإدارية']
        : [
            'Standard Operating Procedures (SOPs)',
            'Workflow & Delegation Architecture',
            'Process Bottleneck Elimination',
            'Management Control Systems'
          ],
      associatedSystems: ['operations', 'sop']
    },
    {
      id: 'revenue',
      num: '02',
      verticalTitle: isRtl ? 'الإيرادات' : 'REVENUE',
      title: isRtl ? 'أنظمة المبيعات والإيرادات' : 'Sales & Revenue Systems',
      icon: BarChart3,
      gradient: 'from-[#002B4D] via-[#001D38] to-[#020B14]',
      image: '/assets/systems-architecture.jpg',
      accent: '#06B6D4',
      badge: isRtl ? 'حوكمة مسار العملاء' : 'Funnel Governance',
      badgeColor: 'text-cyan-300 bg-cyan-500/15 border-cyan-500/30',
      activeBorder: 'border-cyan-500/70 shadow-[0_25px_60px_rgba(6,182,212,0.25)]',
      iconActive: 'bg-cyan-500/25 text-cyan-300 border-cyan-500/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]',
      ctaBg: 'bg-gradient-to-r from-cyan-600 to-blue-500 shadow-[0_0_20px_rgba(6,182,212,0.5)]',
      description: isRtl
        ? 'تحويل جهود المبيعات المبعثرة إلى مسار مقاس ومحوكم مع مساءلة واضحة ومؤشرات تحويل دقيقة.'
        : 'Convert erratic sales activities into a measurable, governed pipeline with clear conversion metrics and sales accountability.',
      keyCapabilities: isRtl
        ? ['بنية مسار المبيعات والفرص', 'بروتوكولات تأهيل ومتابعة العملاء', 'حوكمة وإيقاع التحويل الدوري', 'مواءمة مؤشرات أداء فريق المبيعات']
        : [
            'Sales Pipeline Architecture',
            'Lead Qualification & Follow-up Protocols',
            'Conversion Governance & Cadence',
            'Sales Team KPIs & Alignment'
          ],
      associatedSystems: ['sales', 'growth']
    },
    {
      id: 'finance',
      num: '03',
      verticalTitle: isRtl ? 'المالية' : 'FINANCE',
      title: isRtl ? 'المالية واقتصاديات الوحدة' : 'Finance & Unit Economics',
      icon: Activity,
      gradient: 'from-[#0084FF] via-[#091E58] to-[#061233]',
      image: '/assets/phone-dashboard.jpg',
      accent: '#0084FF',
      badge: isRtl ? 'التحكم في الهوامش' : 'Margin Control',
      badgeColor: 'text-blue-300 bg-[#0084FF]/25 border-[#0084FF]/40',
      activeBorder: 'border-[#0084FF] shadow-[0_25px_60px_rgba(0,132,255,0.35)]',
      iconActive: 'bg-[#0084FF]/35 text-blue-200 border-[#0084FF]/50 shadow-[0_0_15px_rgba(0,132,255,0.4)]',
      ctaBg: 'bg-[#0084FF] hover:bg-[#0070E0] shadow-[0_0_20px_rgba(0,132,255,0.5)]',
      description: isRtl
        ? 'استبدال المحاسبة التقليدية المتأخرة بتقارير مالية إدارية واقتصاديات وحدة ورؤية فورية للسيولة.'
        : 'Replace delayed bookkeeping with executive-level management accounting, unit economics, and real-time cash flow foresight.',
      keyCapabilities: isRtl
        ? ['نماذج توقع التدفق النقدي', 'اقتصاديات الوحدة وتحسين الهوامش', 'لوحات القيادة المالية التنفيذية', 'التحكم في التكاليف ورأس المال العامل']
        : [
            'Cash-Flow Forecasting Models',
            'Unit Economics & Margin Optimization',
            'Executive Financial Dashboards',
            'Cost Control & Working Capital'
          ],
      associatedSystems: ['finance']
    },
    {
      id: 'people-tech',
      num: '04',
      verticalTitle: isRtl ? 'الأنظمة' : 'SYSTEMS',
      title: isRtl ? 'الاستراتيجية والتكنولوجيا والمساءلة' : 'Strategy, Tech & Accountability',
      icon: Users,
      gradient: 'from-[#331C04] via-[#211102] to-[#0B0600]',
      image: '/assets/hero-boardroom.jpg',
      accent: '#F59E0B',
      badge: isRtl ? 'التناغم المؤسسي' : 'Enterprise Alignment',
      badgeColor: 'text-amber-300 bg-amber-500/15 border-amber-500/30',
      activeBorder: 'border-amber-500/70 shadow-[0_25px_60px_rgba(245,158,11,0.25)]',
      iconActive: 'bg-amber-500/25 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.3)]',
      ctaBg: 'bg-gradient-to-r from-amber-600 to-orange-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]',
      description: isRtl
        ? 'تمكين قيادة مؤسستك ببطاقات مؤشرات أداء شفافة، وأهداف أقسام واضحة، وبنية برمجية حديثة.'
        : 'Equip your leadership team with clear KPI scorecards, departmental milestones, and modern software infrastructure.',
      keyCapabilities: isRtl
        ? ['أطر مؤشرات الأداء المؤسسية', 'تحديد الأدوار ومصفوفات المسؤولية', 'تحديث البنية البرمجية والتقنية', 'الأهداف الاستراتيجية وخطط النمو']
        : [
            'Institutional KPI Frameworks',
            'Role Definitions & Responsibility Matrix',
            'Software & Tech Stack Modernization',
            'Strategic Milestones & Growth Planning'
          ],
      associatedSystems: ['kpi', 'software', 'foundation']
    }
  ];

  const handlePillarClick = (solId) => {
    const found = solutionsData.find((s) => s.id === solId) || solutionsData[0];
    setActiveModalSolution(found);
  };

  const handleCtaClick = (solutionTitle) => {
    setActiveModalSolution(null);
    const el = document.getElementById('contact-diagnosis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('prefill-solution', { detail: solutionTitle }));
    } else {
      window.location.href = `/contact?service=${encodeURIComponent(solutionTitle)}`;
    }
  };

  return (
    <section id="solutions" className="py-14 sm:py-32 px-4 sm:px-6 bg-[#061233] text-white relative overflow-hidden">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-[#0084FF]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 space-y-10 sm:space-y-16">
        
        {/* SECTION HEADER */}
        <ScrollReveal direction="up" distance={35} className="text-center max-w-3xl mx-auto relative">
          <div className="inline-flex items-center gap-2 font-handwritten text-xl sm:text-2xl text-blue-300 font-bold mb-2 -rotate-1">
            <span>{isRtl ? 'الخدمات التي نهندسها' : 'Services we architect'}</span>
          </div>

          <h2 className="text-2xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight font-sans">
            {isRtl ? (
              <>
                حلولنا المعمارية <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">المؤسسية</span><span className="text-[#0084FF]">.</span>
              </>
            ) : (
              <>
                OUR ARCHITECTURAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-300">SOLUTIONS</span><span className="text-[#0084FF]">.</span>
              </>
            )}
          </h2>
          
          <p className="mt-4 text-base sm:text-lg text-blue-100/80 font-normal max-w-2xl mx-auto">
            {isRtl 
              ? 'عمل واحد. مشاكل متعددة. نهج متكامل واحد. تجمع سكالارك عملياتك ومحرك إيراداتك وضوابطك المالية وكادرك البشري في نظام تشغيل متكامل وقابل للتوسع.'
              : 'One business. Multiple problems. One integrated approach. SCALARK connects your operations, revenue engine, financial controls, and people into a scalable operating system.'
            }
          </p>
        </ScrollReveal>

        {/* EXPANDABLE VERTICAL COLUMNS INTERACTION (DESKTOP) */}
        <ScrollReveal direction="up" distance={40} delay={150} className="hidden lg:flex gap-4 h-[490px] w-full">
          {pillars.map((pillar, idx) => {
            const isExpanded = expandedCol === idx;
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                onMouseEnter={() => setExpandedCol(idx)}
                className={`relative rounded-3xl overflow-hidden p-8 border transition-all duration-500 ease-out cursor-pointer flex flex-col justify-between group text-start ${
                  isExpanded
                    ? `flex-[3.8] bg-gradient-to-br ${pillar.gradient} ${pillar.activeBorder}`
                    : 'flex-[1] bg-[#081B4E] border-[#0084FF]/25 hover:border-[#0084FF]/60'
                }`}
              >
                {/* BACKGROUND IMAGE FOR EXPANDED PILLAR */}
                {isExpanded && (
                  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover object-center opacity-25 scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061233] via-[#061233]/70 to-[#061233]/40" />
                  </div>
                )}

                <div className="flex items-center justify-between relative z-10">
                  <span className={`font-tech text-xs font-black uppercase px-3 py-1 rounded-full border ${
                    isExpanded
                      ? pillar.badgeColor
                      : 'text-blue-200 bg-[#061233]/60 border-[#0084FF]/30'
                  }`}>
                    {isRtl ? `الركيزة ${pillar.num}` : `PILLAR ${pillar.num}`}
                  </span>
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                    isExpanded ? pillar.iconActive : 'bg-white/5 text-blue-200'
                  }`}>
                    <Icon className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-[10px] font-tech uppercase tracking-wider font-bold px-2 py-0.5 rounded-full border ${
                      isExpanded ? pillar.badgeColor : 'text-zinc-500 border-white/5'
                    }`}>
                      {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight mb-3 font-sans">
                    {isExpanded ? pillar.title : pillar.verticalTitle}
                  </h3>
                  {isExpanded && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <p className="text-xs sm:text-sm text-zinc-300 max-w-lg leading-relaxed font-normal">
                        {pillar.description}
                      </p>
                      <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-white/10">
                        {pillar.keyCapabilities.map((cap, i) => (
                          <div key={i} className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-zinc-200">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 stroke-[3]" />
                            <span className="truncate">{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 relative z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePillarClick(pillar.associatedSystems[0]);
                    }}
                    className={`text-xs font-bold font-tech uppercase tracking-wider transition-colors flex items-center gap-1 ${
                      isExpanded ? 'text-white hover:text-blue-300' : 'text-zinc-500'
                    }`}
                  >
                    <span>{isExpanded ? (isRtl ? 'مواصفات وتفاصيل النظام' : 'System Specifications') : (isRtl ? `النظام 0${idx + 1}` : `System 0${idx + 1}`)}</span>
                    {isExpanded && <ChevronRight className="w-3.5 h-3.5 text-blue-400 rtl:rotate-180" />}
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCtaClick(pillar.title);
                    }}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? `${pillar.ctaBg} text-white hover:scale-110`
                        : 'bg-white/10 text-zinc-400 hover:text-white'
                    }`}
                    title={isRtl ? 'استشرنا حول هذا' : 'Consult on this'}
                  >
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5] rtl:rotate-90" />
                  </button>
                </div>
              </div>
            );
          })}
        </ScrollReveal>

        {/* MOBILE & TABLET VIEW */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className={`rounded-2xl sm:rounded-3xl p-6 sm:p-7 border bg-gradient-to-br ${pillar.gradient} ${pillar.activeBorder} flex flex-col justify-between space-y-4 text-start`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-tech font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${pillar.badgeColor}`}>
                    {isRtl ? `الركيزة ${pillar.num}` : `PILLAR ${pillar.num}`} • {pillar.badge}
                  </span>
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${pillar.iconActive}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-white/10">
                  {pillar.keyCapabilities.slice(0, 3).map((cap, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => handleCtaClick(pillar.title)}
                    className="w-full py-2.5 rounded-full bg-[#0084FF] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 active:scale-95"
                  >
                    <span>{isRtl ? 'احجز استشارة حول هذا المجال' : 'Consult on This Pillar'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-90" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* MODAL DIALOG FOR DETAILED SYSTEM VIEW */}
        {activeModalSolution && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setActiveModalSolution(null)}
          >
            <div
              className="relative w-full max-w-xl rounded-3xl bg-[#081B4E] border border-[#0084FF]/40 p-6 sm:p-8 shadow-2xl text-start"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveModalSolution(null)}
                className="absolute top-5 right-5 rtl:right-auto rtl:left-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <span className="text-[10px] font-tech font-black text-blue-300 uppercase tracking-widest bg-[#0084FF]/25 px-3 py-1 rounded-full border border-[#0084FF]/40 inline-block mb-2">
                    {isRtl ? 'مواصفات بنية النظام' : 'System Architecture Specification'}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-sans">
                    {activeModalSolution.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-blue-100/70 mt-1 font-normal">
                    {activeModalSolution.subtitle}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#061233] border border-[#0084FF]/30 space-y-2">
                  <div className="text-xs font-bold text-white uppercase font-tech flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF]" />
                    {isRtl ? 'الوصف التشغيلي' : 'Target Operational Deliverable'}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                    {activeModalSolution.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-bold text-zinc-400 uppercase tracking-wider font-tech">
                    {isRtl ? 'المخرجات والإجراءات الأساسية' : 'Architectural Scope'}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeModalSolution.items?.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-zinc-200">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3 justify-end">
                  <button
                    onClick={() => setActiveModalSolution(null)}
                    className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-bold font-tech uppercase text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    {isRtl ? 'إغلاق' : 'Close'}
                  </button>
                  <button
                    onClick={() => handleCtaClick(activeModalSolution.title)}
                    className="px-6 py-2.5 rounded-full bg-[#0084FF] hover:bg-[#0070E0] text-white font-black text-xs font-tech uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(0,132,255,0.4)]"
                  >
                    {isRtl ? 'تطبيق هذا النظام ←' : 'Implement This System →'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
