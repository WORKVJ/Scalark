'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
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
  Sparkles,
  Flame
} from 'lucide-react';

export const FOUNDER_REELS = [
  {
    id: 'reel-1',
    image: '/assets/reels/founder_reel_1.jpg',
    speaker: 'ELENA VANCE',
    fullName: 'Elena Vance & Ops Team',
    role: 'Director of Operational Systems',
    company: 'Vanguard Clinical Labs',
    industry: 'Healthcare & Clinical Networks',
    stage: 'Mid-Market Enterprise (12 Hubs)',
    caption: '“SCALARK replaced fragmented manual logs with automated workflow pipelines, cutting specimen turnaround by 68%.”',
    quoteHighlight: 'turned operational chaos into institutional discipline',
    subQuote: 'with automated workflow pipelines and zero billing lag.',
    duration: '0:54',
    metric: '+38% Net Margin',
    tag: 'HEALTHCARE NETWORK',
    challenge: 'Expanding across 12 diagnostic locations led to severe sample tracking errors, 45-day billing backlogs, and constant frontline escalations.',
    rootCause: 'Siloed laboratory management software with zero inter-branch communication protocols and delayed executive telemetry.',
    approach: 'Standardized specimen transfer checklists, unified billing SLAs, and created an automated executive dashboard showing daily unit economics per hub.',
    outcome: 'Sample processing lag dropped to under 12 hours, cash flow became fully predictable, and clinical network margins expanded by 38%.'
  },
  {
    id: 'reel-2',
    image: '/assets/reels/founder_reel_2.jpg',
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
    challenge: 'Group founder was putting in 16-hour workdays personally signing off on routine operational decisions, creating a massive executive bottleneck.',
    rootCause: 'Lack of formalized department accountability scorecards and absence of delegated financial authority thresholds.',
    approach: 'Engineered 48 institutional SOPs, installed executive tier-2 governance cadences, and linked department KPIs directly to quarterly performance scorecards.',
    outcome: 'Founder intervention dropped by 65%, strategic M&A velocity doubled, and external institutional audit benchmarked business at 4.62x valuation multiple.'
  },
  {
    id: 'reel-3',
    image: '/assets/reels/founder_reel_3.jpg',
    speaker: 'ARUN & SANDEEP',
    fullName: 'Arun & Sandeep',
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
    challenge: 'Rapid team expansion led to a monthly cash-burn crisis; the co-founders faced a 3-month runway deadline without unit economics clarity.',
    rootCause: 'Operational leakages across unintegrated software platforms and customer acquisition costs outstripping lifetime cash collection.',
    approach: 'Conducted an emergency 14-day operational and financial audit, cut 9 redundant subscriptions, and refocused the sales team on high-margin enterprise accounts.',
    outcome: 'Monthly burn reduced by 52%, operational profitability reached in 45 days, and secured follow-on expansion capital with clean institutional systems.'
  },
  {
    id: 'reel-4',
    image: '/assets/reels/founder_reel_5.jpg',
    speaker: 'DAVID HENDERSON',
    fullName: 'David Henderson',
    role: 'Chief Executive Officer',
    company: 'Apex Industrial Precision Tooling',
    industry: 'Industrial Tooling & Manufacturing',
    stage: 'Multi-Location Manufacturing',
    caption: '“I was solving every factory crisis myself. Now our documented SOPs run with 99.4% predictability across every shift.”',
    quoteHighlight: 'I was solving every factory crisis myself',
    subQuote: 'Now our documented SOPs run with 99.4% predictability.',
    duration: '0:58',
    metric: '99.4% Autonomy Rate',
    tag: 'INDUSTRIAL SME',
    challenge: 'High rework rates and scrap waste during overnight shifts; shop-floor supervisors waited for the CEO to personally approve setup changes.',
    rootCause: 'Zero standardized work instructions for tooling calibrations, causing tribal knowledge dependencies.',
    approach: 'Deployed digital visual inspection checkpoints at each machine cell, trained shift leads on rapid escalation protocols, and implemented daily scrap audits.',
    outcome: 'Scrap defect rate decreased by 84%, production throughput surged 32%, and the manufacturing unit ran completely self-sufficiently.'
  },
  {
    id: 'reel-5',
    image: '/assets/reels/founder_reel_4.jpg',
    speaker: 'GIRISH & MOHAN',
    fullName: 'Girish & Mohan',
    role: 'Managing Partners',
    company: 'Metro Retail & Distribution Group',
    industry: 'Omnichannel FMCG & Retail',
    stage: 'Expansion Stage (6 Hubs)',
    caption: '“When you build real SOPs and accountability matrices, frontline teams take full ownership of their dispatch numbers.”',
    quoteHighlight: 'when you build real culture and KPIs',
    subQuote: 'everyone owns their numbers and respects the process.',
    duration: '0:49',
    metric: '98% Staff Adoption',
    tag: 'SUPPLY CHAIN',
    challenge: 'Prior attempts to install expensive enterprise systems failed because warehouse staff bypassed digital forms and defaulted to chaotic manual notes.',
    rootCause: 'Management mandated complex technology before documenting ground workflow steps or training supervisory tier leads.',
    approach: 'Co-designed simplified mobile SOP checklists with warehouse team leaders, backed by weekly milestone reviews and performance incentives.',
    outcome: 'Same-day dispatch accuracy rose to 99.1%, inventory shrinkage plummeted to zero, and warehouse team morale reached all-time highs.'
  },
  {
    id: 'reel-6',
    image: '/assets/hero-architect.jpg',
    speaker: 'SARAH STERLING',
    fullName: 'Sarah Sterling',
    role: 'Managing Principal',
    company: 'Sterling Advisory & Governance',
    industry: 'Institutional Advisory',
    stage: 'High-End Consulting Group',
    caption: '“SCALARK systematized our client onboarding and delivery architecture, allowing us to triple client intake without hiring partner tiers.”',
    quoteHighlight: 'tripled client intake without hiring partner tiers',
    subQuote: 'while institutionalizing our advisory frameworks.',
    duration: '1:05',
    metric: '3.2x Capacity Expansion',
    tag: 'ADVISORY & SERVICES',
    challenge: 'Partners were overloaded with project delivery handoffs and administrative reporting, limiting senior partner business development.',
    rootCause: 'Unstructured delivery templates and inconsistent peer-review cadences across client accounts.',
    approach: 'Engineered an institutional delivery playbook, installed automated status telemetry, and delegated recurring reporting to operations analysts.',
    outcome: 'Partner billable capacity doubled, client delivery NPS reached 94, and firm revenues grew 3.2x in 12 months.'
  },
  {
    id: 'reel-7',
    image: '/assets/squad/squad_hamas.jpg',
    speaker: 'MARCUS CHEN',
    fullName: 'Marcus Chen',
    role: 'Head of Global Operations',
    company: 'Apex Logistics & Maritime Gateway',
    industry: 'Maritime & Freight Logistics',
    stage: 'Global Terminal Operations',
    caption: '“Container transit coordination went from constant firefighting to clockwork precision across 4 international ports.”',
    quoteHighlight: 'from constant firefighting to clockwork precision',
    subQuote: 'across 4 international terminal ports.',
    duration: '0:48',
    metric: '72% Bottleneck Elimination',
    tag: 'PORT INFRASTRUCTURE',
    challenge: 'Vessel turnaround delays and customs clearance misalignments caused penalty fees exceeding $200k quarterly.',
    rootCause: 'Manual spreadsheet handoffs between harbor masters, customs brokers, and inland trucking fleets.',
    approach: 'Built unified terminal dispatch protocols and instituted automated pre-arrival customs verification pipelines.',
    outcome: 'Terminal clearance cycle dropped by 72%, zero demurrage penalties incurred over 3 quarters, saving $850k in operational leakage.'
  }
];

// Staggered height and wave offset configuration matching the reference image
const STAGGER_CONFIG = [
  { height: 'h-[330px] sm:h-[360px]', offset: 'translate-y-8 sm:translate-y-10' },
  { height: 'h-[390px] sm:h-[430px]', offset: '-translate-y-3 sm:-translate-y-5' },
  { height: 'h-[350px] sm:h-[380px]', offset: 'translate-y-6 sm:translate-y-8' },
  { height: 'h-[420px] sm:h-[460px]', offset: 'translate-y-0 sm:translate-y-0' }, // Center hero
  { height: 'h-[340px] sm:h-[370px]', offset: 'translate-y-8 sm:translate-y-12' },
  { height: 'h-[390px] sm:h-[430px]', offset: '-translate-y-2 sm:-translate-y-4' },
  { height: 'h-[330px] sm:h-[360px]', offset: 'translate-y-6 sm:translate-y-8' }
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

  // Video progress bar simulation in modal
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
      const scrollAmount = direction === 'left' ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative select-none">
      
      {/* NAVIGATION & AUTO-MOVE CONTROLS */}
      <div className="flex flex-col sm:flex-row items-end sm:items-center justify-between gap-4 mb-6 px-4">
        
        {/* HINT BADGE */}
        <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200/80 text-xs font-mono text-zinc-600">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Interactive Staggered Stream • Hover to Inspect</span>
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
                <Play className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                <span>Auto-Move</span>
              </>
            )}
          </button>

          {/* MANUAL PREV / NEXT */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => handleManualScroll('left')}
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 hover:text-black transition-all shadow-sm"
              aria-label="Previous story"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 text-zinc-700 hover:text-black transition-all shadow-sm"
              aria-label="Next story"
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

        {/* INFINITE MARQUEE ROW */}
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
                className={`relative w-[180px] sm:w-[220px] md:w-[240px] ${config.height} ${config.offset} rounded-2xl sm:rounded-[26px] overflow-hidden cursor-pointer transition-all duration-500 shrink-0 group ${
                  isCurrent 
                    ? 'ring-2 ring-zinc-950/20 shadow-[0_25px_60px_rgba(0,0,0,0.18)] scale-105 z-20' 
                    : 'shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.14)] hover:scale-[1.02] z-10'
                }`}
              >
                {/* PORTRAIT IMAGE IN HIGH-CONTRAST MONOCHROME / GRAYSCALE */}
                <Image
                  src={reel.image}
                  alt={reel.speaker}
                  fill
                  sizes="(max-width: 640px) 180px, 240px"
                  className={`object-cover object-center transition-all duration-700 ${
                    isCurrent 
                      ? 'grayscale-0 contrast-105 scale-105' 
                      : 'grayscale contrast-115 group-hover:grayscale-0 group-hover:scale-105'
                  }`}
                  priority={idx < 5}
                />

                {/* SUBTLE GRADIENT VIGNETTE */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* PLAY BUTTON HOVER PROMPT */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className={`w-11 h-11 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center text-zinc-900 shadow-xl transition-all duration-300 ${
                    isCurrent 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100'
                  }`}>
                    <Play className="w-4 h-4 fill-zinc-900 translate-x-0.5" />
                  </div>
                </div>

                {/* BOTTOM COMPACT DURATION CHIP */}
                <div className="absolute bottom-3 inset-x-3 z-10 text-center">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#061233]/70 backdrop-blur-md text-[10px] font-mono font-bold uppercase tracking-wider text-white border border-[#0084FF]/30">
                    {reel.duration}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* FOUNDER NAME & DETAILS UNDERNEATH (MATCHING REFERENCE "ROBERT ALEX" STYLE) */}
      <div className="mt-8 sm:mt-12 text-center max-w-xl mx-auto px-4">
        <h3 className="text-xl sm:text-3xl font-black uppercase tracking-wider text-zinc-950 font-sans transition-all duration-300">
          {activeReel.speaker}
        </h3>
        
        <p className="text-xs sm:text-sm text-zinc-500 font-medium mt-1">
          {activeReel.role} • <strong className="text-zinc-800">{activeReel.company}</strong>
        </p>

        {/* AUDITED BREAKTHROUGH PILL */}
        <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200/90 text-xs font-mono font-bold text-zinc-800 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#0084FF]">{activeReel.tag}</span>
          <span className="text-zinc-300">•</span>
          <span>{activeReel.metric}</span>
        </div>

        <p className="mt-3 text-xs sm:text-sm text-zinc-600 italic max-w-md mx-auto leading-relaxed">
          {activeReel.caption}
        </p>
      </div>

      {/* INTERACTIVE VIDEO / AUDIT MODAL */}
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

            {/* LEFT COLUMN: SIMULATED VERTICAL VIDEO PLAYER */}
            <div className="w-full md:w-[360px] shrink-0 bg-[#061233] relative flex items-center justify-center overflow-hidden h-[240px] sm:h-[300px] md:min-h-[560px]">
              <Image
                src={selectedReel.image}
                alt={selectedReel.speaker}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061233] via-[#061233]/20 to-[#061233]/40" />

              {/* SIMULATED VIDEO PROGRESS BAR */}
              <div className="absolute bottom-0 inset-x-0 h-1.5 bg-white/20">
                <div 
                  className="h-full bg-emerald-400 transition-all duration-300 relative"
                  style={{ width: `${playbackProgress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-md" />
                </div>
              </div>

              {/* REEL OVERLAY INFO */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#061233]/70 backdrop-blur-md px-3 py-1 rounded-full border border-[#0084FF]/30">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono font-bold text-white uppercase">SCALARK RECORDINGS</span>
              </div>

              {/* AUDIO / MUTE TOGGLE */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 z-10 p-2.5 rounded-full bg-[#061233]/70 backdrop-blur-md text-white border border-[#0084FF]/30 hover:bg-[#0084FF]"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>

              {/* LIVE CAPTION CALLOUT */}
              <div className="absolute bottom-12 inset-x-4 p-4 rounded-xl bg-[#061233]/80 backdrop-blur-md border border-[#0084FF]/30 text-center">
                <p className="text-xs font-semibold text-white">
                  "{selectedReel.caption}"
                </p>
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
