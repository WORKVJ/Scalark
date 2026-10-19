'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  ArrowUpRight, 
  Quote
} from 'lucide-react';

export const FOUNDER_REELS = [
  {
    id: 'reel-1',
    speaker: 'DR. ANANYA SEN',
    fullName: 'Dr. Ananya Sen',
    role: 'Director of Clinical Operations',
    company: 'Vanguard Healthcare Networks',
    industry: 'Healthcare & Clinical Networks',
    stage: 'Mid-Market Enterprise (12 Hubs)',
    caption: '“SCALARK replaced fragmented manual logs with automated workflow pipelines, cutting specimen turnaround by 68%.”',
    quoteHighlight: 'turned operational chaos into institutional discipline',
    subQuote: 'with automated workflow pipelines and zero billing lag.',
    duration: '0:54',
    metric: '+38% Net Margin',
    tag: 'HEALTHCARE NETWORK',
    accent: '#0084FF',
    challenge: 'Expanding across 12 diagnostic locations led to severe sample tracking errors, 45-day billing backlogs, and constant frontline escalations.',
    rootCause: 'Siloed laboratory management software with zero inter-branch communication protocols and delayed executive telemetry.',
    approach: 'Standardized specimen transfer checklists, unified billing SLAs, and created an automated executive dashboard showing daily unit economics per hub.',
    outcome: 'Sample processing lag dropped to under 12 hours, cash flow became fully predictable, and clinical network margins expanded by 38%.'
  },
  {
    id: 'reel-2',
    speaker: 'VIKRAM MALHOTRA',
    fullName: 'Vikram Malhotra',
    role: 'Founder & Group Managing Director',
    company: 'Malhotra Enterprise Holdings',
    industry: 'Conglomerate & Private Equity',
    stage: 'Institutional Scale (₹85 Cr ARR)',
    caption: '“I was trapped in daily escalations. SCALARK installed owner independence and expanded our valuation multiple to 4.62x.”',
    quoteHighlight: 'installed institutional governance & owner freedom',
    subQuote: 'expanding our enterprise valuation multiple to 4.62x.',
    duration: '1:12',
    metric: '65% Time Recovered',
    tag: 'SCALE & VALUATION',
    accent: '#70A52E',
    challenge: 'Group founder was putting in 16-hour workdays personally signing off on routine operational decisions, creating a massive executive bottleneck.',
    rootCause: 'Lack of formalized department accountability scorecards and absence of delegated financial authority thresholds.',
    approach: 'Engineered 48 institutional SOPs, installed executive tier-2 governance cadences, and linked department KPIs directly to quarterly performance scorecards.',
    outcome: 'Founder intervention dropped by 65%, strategic M&A velocity doubled, and external institutional audit benchmarked business at 4.62x valuation multiple.'
  },
  {
    id: 'reel-3',
    speaker: 'ROHAN & KUNAL',
    fullName: 'Rohan Deshmukh & Kunal Verma',
    role: 'Co-Founders',
    company: 'Kinetix Logistics Platforms',
    industry: 'Supply Chain & Logistics Tech',
    stage: 'High-Growth Tech Startup',
    caption: '“Our runaway monthly burn was pure process waste. SCALARK diagnosed leakages and restored cash profitability in 45 days.”',
    quoteHighlight: 'our high burn was pure process waste',
    subQuote: 'SCALARK showed our burn was process waste, not growth spend.',
    duration: '0:35',
    metric: '45-Day Cash Recovery',
    tag: 'TECH STARTUP',
    accent: '#8B5CF6',
    challenge: 'Rapid team expansion led to a monthly cash-burn crisis; the co-founders faced a 3-month runway deadline without unit economics clarity.',
    rootCause: 'Operational leakages across unintegrated software platforms and customer acquisition costs outstripping lifetime cash collection.',
    approach: 'Conducted an emergency 14-day operational and financial audit, cut 9 redundant subscriptions, and refocused the sales team on high-margin enterprise accounts.',
    outcome: 'Monthly burn reduced by 52%, operational profitability reached in 45 days, and secured follow-on expansion capital with clean institutional systems.'
  },
  {
    id: 'reel-4',
    speaker: 'RAJESH SHARMA',
    fullName: 'Rajesh Sharma',
    role: 'Chief Executive Officer',
    company: 'Precision Industrial Tooling',
    industry: 'Industrial Tooling & Manufacturing',
    stage: 'Multi-Location Manufacturing',
    caption: '“I was solving every factory crisis myself. Now our documented SOPs run with 99.4% predictability across every shift.”',
    quoteHighlight: 'I was solving every factory crisis myself',
    subQuote: 'Now our documented SOPs run with 99.4% predictability.',
    duration: '0:58',
    metric: '99.4% Autonomy Rate',
    tag: 'INDUSTRIAL SME',
    accent: '#F59E0B',
    challenge: 'High rework rates and scrap waste during overnight shifts; shop-floor supervisors waited for the CEO to personally approve setup changes.',
    rootCause: 'Zero standardized work instructions for tooling calibrations, causing tribal knowledge dependencies.',
    approach: 'Deployed digital visual inspection checkpoints at each machine cell, trained shift leads on rapid escalation protocols, and implemented daily scrap audits.',
    outcome: 'Scrap defect rate decreased by 84%, production throughput surged 32%, and the manufacturing unit ran completely self-sufficiently.'
  },
  {
    id: 'reel-5',
    speaker: 'GIRISH & MOHAN',
    fullName: 'Girish Nambiar & Mohan Iyer',
    role: 'Managing Partners',
    company: 'Metro FMCG & Distribution Group',
    industry: 'Omnichannel FMCG & Retail',
    stage: 'Expansion Stage (6 Hubs)',
    caption: '“When you build real SOPs and accountability matrices, frontline teams take full ownership of their dispatch numbers.”',
    quoteHighlight: 'when you build real culture and KPIs',
    subQuote: 'everyone owns their numbers and respects the process.',
    duration: '0:49',
    metric: '98% Staff Adoption',
    tag: 'SUPPLY CHAIN',
    accent: '#06B6D4',
    challenge: 'Prior attempts to install expensive enterprise systems failed because warehouse staff bypassed digital forms and defaulted to chaotic manual notes.',
    rootCause: 'Management mandated complex technology before documenting ground workflow steps or training supervisory tier leads.',
    approach: 'Co-designed simplified mobile SOP checklists with warehouse team leaders, backed by weekly milestone reviews and performance incentives.',
    outcome: 'Same-day dispatch accuracy rose to 99.1%, inventory shrinkage plummeted to zero, and warehouse team morale reached all-time highs.'
  },
  {
    id: 'reel-6',
    speaker: 'PRIYA SUNDARAM',
    fullName: 'Priya Sundaram',
    role: 'Managing Principal',
    company: 'Sundaram Advisory & Governance',
    industry: 'Institutional Advisory',
    stage: 'High-End Consulting Group',
    caption: '“SCALARK systematized our client onboarding and delivery architecture, allowing us to triple client intake without hiring partner tiers.”',
    quoteHighlight: 'tripled client intake without hiring partner tiers',
    subQuote: 'while institutionalizing our advisory frameworks.',
    duration: '1:05',
    metric: '3.2x Capacity Expansion',
    tag: 'ADVISORY & SERVICES',
    accent: '#EC4899',
    challenge: 'Partners were overloaded with project delivery handoffs and administrative reporting, limiting senior partner business development.',
    rootCause: 'Unstructured delivery templates and inconsistent peer-review cadences across client accounts.',
    approach: 'Engineered an institutional delivery playbook, installed automated status telemetry, and delegated recurring reporting to operations analysts.',
    outcome: 'Partner billable capacity doubled, client delivery NPS reached 94, and firm revenues grew 3.2x in 12 months.'
  },
  {
    id: 'reel-7',
    speaker: 'ARJUN MEHTA',
    fullName: 'Arjun Mehta',
    role: 'Head of Global Operations',
    company: 'Maritime Gateway Logistics',
    industry: 'Maritime & Freight Logistics',
    stage: 'Global Terminal Operations',
    caption: '“Container transit coordination went from constant firefighting to clockwork precision across 4 international ports.”',
    quoteHighlight: 'from constant firefighting to clockwork precision',
    subQuote: 'across 4 international terminal ports.',
    duration: '0:48',
    metric: '72% Bottleneck Elimination',
    tag: 'PORT INFRASTRUCTURE',
    accent: '#3B82F6',
    challenge: 'Vessel turnaround delays and customs clearance misalignments caused penalty fees exceeding $200k quarterly.',
    rootCause: 'Manual spreadsheet handoffs between harbor masters, customs brokers, and inland trucking fleets.',
    approach: 'Built unified terminal dispatch protocols and instituted automated pre-arrival customs verification pipelines.',
    outcome: 'Terminal clearance cycle dropped by 72%, zero demurrage penalties incurred over 3 quarters, saving $850k in operational leakage.'
  }
];

// Staggered height and wave offset configuration
const STAGGER_CONFIG = [
  { height: 'h-[360px] sm:h-[390px]', offset: 'translate-y-5 sm:translate-y-7' },
  { height: 'h-[390px] sm:h-[425px]', offset: '-translate-y-2 sm:-translate-y-3' },
  { height: 'h-[370px] sm:h-[405px]', offset: 'translate-y-4 sm:translate-y-5' },
  { height: 'h-[405px] sm:h-[440px]', offset: 'translate-y-0 sm:translate-y-0' }, // Center hero
  { height: 'h-[360px] sm:h-[390px]', offset: 'translate-y-5 sm:translate-y-7' },
  { height: 'h-[390px] sm:h-[425px]', offset: '-translate-y-2 sm:-translate-y-3' },
  { height: 'h-[370px] sm:h-[405px]', offset: 'translate-y-4 sm:translate-y-5' }
];

export default function FounderReelsCarousel() {
  const [activeIdx, setActiveIdx] = useState(3);
  const [isAutoMoving, setIsAutoMoving] = useState(true);
  const [isUserHovering, setIsUserHovering] = useState(false);
  const [selectedReel, setSelectedReel] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(35);
  const scrollRef = useRef(null);

  // Seamless infinite loop: duplicate array
  const displayReels = [...FOUNDER_REELS, ...FOUNDER_REELS];

  const activeReel = FOUNDER_REELS[activeIdx % FOUNDER_REELS.length] || FOUNDER_REELS[0];

  // Auto-rotate spotlight when auto-moving and not hovered
  useEffect(() => {
    if (!isAutoMoving || isUserHovering || selectedReel) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % FOUNDER_REELS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoMoving, isUserHovering, selectedReel]);

  // Audio progress bar simulation in modal
  useEffect(() => {
    if (!selectedReel) return;
    const interval = setInterval(() => {
      setPlaybackProgress((prev) => (prev >= 98 ? 10 : prev + 2));
    }, 350);
    return () => clearInterval(interval);
  }, [selectedReel]);

  const handleManualScroll = (direction) => {
    if (direction === 'left') {
      setActiveIdx((prev) => (prev > 0 ? prev - 1 : FOUNDER_REELS.length - 1));
    } else {
      setActiveIdx((prev) => (prev < FOUNDER_REELS.length - 1 ? prev + 1 : 0));
    }
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative select-none">
      
      {/* NAVIGATION & AUTO-MOVE CONTROLS */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 mb-6 px-4">
        
        {/* HINT BADGE */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-mono text-zinc-600 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#70A52E] animate-ping" />
          <span>Verified Founder Quotes • Hover to Inspect</span>
        </div>

        {/* BUTTON CONTROLS */}
        <div className="flex items-center gap-2">
          {/* AUTO-MOVE TOGGLE BUTTON */}
          <button
            onClick={() => setIsAutoMoving(!isAutoMoving)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200/90 text-xs font-mono font-bold text-zinc-800 transition-all shadow-sm"
            title={isAutoMoving ? 'Pause auto-moving' : 'Resume auto-moving'}
          >
            {isAutoMoving ? (
              <>
                <Pause className="w-3.5 h-3.5 text-zinc-600" />
                <span>Pause Motion</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-[#70A52E] fill-[#70A52E]" />
                <span>Auto-Move</span>
              </>
            )}
          </button>

          {/* MANUAL PREV / NEXT */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleManualScroll('left')}
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 hover:text-black transition-all shadow-sm"
              aria-label="Previous quote"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 hover:text-black transition-all shadow-sm"
              aria-label="Next quote"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CONTINUOUS AUTO-MOVING STAGGERED WAVE TRACK */}
      <div 
        ref={scrollRef}
        onMouseEnter={() => setIsUserHovering(true)}
        onMouseLeave={() => setIsUserHovering(false)}
        className="w-full overflow-hidden no-scrollbar py-8 px-4 relative"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Soft white gradient edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* INFINITE MARQUEE ROW OF TYPOGRAPHIC QUOTE CARDS (NO PHOTOS) */}
        <div 
          className={`flex items-center gap-4 sm:gap-6 min-w-max will-change-transform ${
            isAutoMoving ? 'animate-reel-scroll' : ''
          } hover:[animation-play-state:paused]`}
          style={{ width: 'max-content' }}
        >
          {displayReels.map((reel, idx) => {
            const originalIdx = idx % FOUNDER_REELS.length;
            const config = STAGGER_CONFIG[originalIdx % STAGGER_CONFIG.length];
            const isCurrent = activeIdx === originalIdx;

            return (
              <div
                key={`${reel.id}-${idx}`}
                onClick={() => {
                  setActiveIdx(originalIdx);
                  setSelectedReel(reel);
                }}
                onMouseEnter={() => setActiveIdx(originalIdx)}
                className={`relative w-[270px] sm:w-[310px] md:w-[335px] ${config.height} ${config.offset} rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 shrink-0 group flex flex-col justify-between p-6 sm:p-7 select-none border ${
                  isCurrent 
                    ? 'border-[#70A52E] bg-gradient-to-b from-[#151D14] via-[#0E150D] to-[#070B06] ring-2 ring-[#70A52E]/60 shadow-[0_25px_60px_rgba(112,165,46,0.22)] scale-105 z-20' 
                    : 'border-zinc-800/80 bg-gradient-to-b from-[#141923] via-[#0E121B] to-[#07090E] shadow-[0_12px_32px_rgba(0,0,0,0.12)] hover:border-zinc-700 hover:scale-[1.02] z-10'
                }`}
              >
                {/* SUBTLE CORNER AMBIENT GLOW */}
                <div 
                  className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-2xl pointer-events-none transition-opacity duration-500 ${
                    isCurrent ? 'opacity-30 bg-[#70A52E]' : 'opacity-10 bg-blue-500 group-hover:opacity-20'
                  }`}
                />

                {/* CARD TOP ROW: TAG & DURATION */}
                <div className="flex items-center justify-between gap-2 relative z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-emerald-400 border border-emerald-500/20 backdrop-blur-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    {reel.tag}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-zinc-400 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                    {reel.duration}
                  </span>
                </div>

                {/* CARD MIDDLE: LARGE EXECUTIVE QUOTE */}
                <div className="my-auto py-2 relative z-10">
                  <div className="text-[#70A52E] font-serif text-3xl sm:text-4xl leading-none select-none opacity-90 mb-2">
                    “
                  </div>
                  <p className="text-sm sm:text-[15px] font-sans font-medium text-zinc-100 leading-snug tracking-tight">
                    {reel.caption.replace(/^[“"]|[”"]$/g, '')}
                  </p>
                  
                  {/* METRIC BADGE */}
                  <div className="inline-flex items-center gap-1.5 mt-3.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/25 text-[11px] font-mono font-bold text-emerald-300">
                    <CheckCircle2 className="w-3 h-3 text-[#70A52E]" />
                    <span>{reel.metric}</span>
                  </div>
                </div>

                {/* CARD FOOTER: NAME & ROLE / COMPANY (MATCHING USER REQUEST) */}
                <div className="pt-3.5 border-t border-white/10 mt-auto relative z-10">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-sans font-black uppercase tracking-wider text-white">
                      {reel.speaker}
                    </h4>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                      isCurrent 
                        ? 'bg-[#70A52E] text-white' 
                        : 'bg-white/10 text-zinc-400 group-hover:bg-white/20 group-hover:text-white'
                    }`}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <p className="text-[11px] sm:text-xs text-zinc-400 font-sans mt-0.5 line-clamp-1">
                    {reel.role} • <strong className="text-zinc-200 font-semibold">{reel.company}</strong>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOUNDER NAME & DETAILS UNDERNEATH SPOTLIGHT */}
      <div className="mt-8 sm:mt-12 text-center max-w-xl mx-auto px-4">
        <h3 className="text-xl sm:text-3xl font-black uppercase tracking-wider text-zinc-950 font-sans transition-all duration-300">
          {activeReel.speaker}
        </h3>
        
        <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">
          {activeReel.role} • <strong className="text-zinc-800">{activeReel.company}</strong>
        </p>

        {/* AUDITED BREAKTHROUGH PILL */}
        <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/90 text-xs font-mono font-bold text-zinc-800 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#70A52E] animate-pulse" />
          <span className="text-[#0084FF]">{activeReel.tag}</span>
          <span className="text-zinc-300">•</span>
          <span>{activeReel.metric}</span>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-zinc-600 italic max-w-md mx-auto leading-relaxed">
          {activeReel.caption}
        </p>
      </div>

      {/* INTERACTIVE CASE AUDIT MODAL (NO PHOTOS) */}
      {selectedReel && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#061233]/85 backdrop-blur-xl animate-fadeIn"
          onClick={() => setSelectedReel(null)}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] border border-zinc-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedReel(null)}
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-zinc-900/70 hover:bg-zinc-900 text-white transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* LEFT COLUMN: ARCHITECTURAL STATEMENT & TELEMETRY (NO PHOTOS) */}
            <div className="w-full md:w-[360px] shrink-0 bg-gradient-to-b from-[#0F172A] via-[#0A0F1D] to-[#060912] text-white p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-zinc-800">
              
              {/* TOP HEADER */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#70A52E] animate-ping" />
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#70A52E] uppercase">
                    SCALARK AUDIT ARCHIVE
                  </span>
                </div>

                <div className="text-5xl font-serif text-[#70A52E] leading-none mb-3 opacity-90">
                  “
                </div>

                <blockquote className="text-sm sm:text-base font-sans font-medium text-white leading-relaxed mb-6">
                  {selectedReel.caption.replace(/^[“"]|[”"]$/g, '')}
                </blockquote>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                    Audited Outcome
                  </div>
                  <div className="text-base font-mono font-bold text-emerald-400">
                    {selectedReel.metric}
                  </div>
                </div>
              </div>

              {/* FOOTER - SPEAKER DETAILS & AUDIO SIMULATION */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-sans font-black uppercase text-white tracking-wide">
                      {selectedReel.speaker}
                    </h4>
                    <p className="text-xs text-zinc-400 mt-0.5">
                      {selectedReel.role}
                    </p>
                    <p className="text-xs font-semibold text-emerald-400">
                      {selectedReel.company}
                    </p>
                  </div>

                  <button
                    onClick={() => setIsMuted(!isMuted)}
                    className="p-2.5 rounded-full bg-white/10 hover:bg-[#70A52E] text-white transition-colors border border-white/10"
                    title={isMuted ? 'Unmute audio' : 'Mute audio'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  </button>
                </div>

                {/* AUDIO PROGRESS BAR */}
                <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#70A52E] to-emerald-400 transition-all duration-300"
                    style={{ width: `${playbackProgress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500 mt-1.5">
                  <span>Audited Statement</span>
                  <span>{selectedReel.duration}</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: DETAILED CASE AUDIT BREAKDOWN */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[560px] flex flex-col justify-between bg-white text-zinc-900">
              <div>
                {/* HEADER INFO */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-zinc-100 text-zinc-800 border border-zinc-200">
                    {selectedReel.stage}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">
                    {selectedReel.industry}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-zinc-950 tracking-tight mb-1">
                  {selectedReel.speaker}
                </h3>
                <div className="text-sm font-semibold text-[#0084FF] mb-6">
                  {selectedReel.role} • {selectedReel.company}
                </div>

                {/* 3-TIER ARCHITECTURAL BREAKDOWN */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-600 mb-1">
                      01 • The Operational Bottleneck
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      {selectedReel.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-600 mb-1">
                      02 • Root Cause Diagnosis
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      {selectedReel.rootCause}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-600 mb-1">
                      03 • SCALARK Systems Intervention
                    </div>
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      {selectedReel.approach}
                    </p>
                  </div>
                </div>

                {/* AUDITED OUTCOME HIGHLIGHT */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800">
                      Audited Business Outcome
                    </div>
                    <div className="text-sm font-bold text-zinc-900 mt-0.5">
                      {selectedReel.outcome}
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="pt-6 border-t border-zinc-200 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-zinc-500">
                  Ready to uncover the bottlenecks in your business?
                </div>
                <a
                  href="/contact"
                  onClick={() => setSelectedReel(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0084FF] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#0070E0] transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Book Architecture Diagnostic</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
