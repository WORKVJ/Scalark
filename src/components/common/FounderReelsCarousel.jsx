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
  TrendingUp,
  Building2,
  Clock,
  Instagram
} from 'lucide-react';

export const FOUNDER_REELS = [
  {
    id: 'reel-1',
    image: '/assets/reels/founder_reel_1.jpg',
    speaker: 'Elena Vance & Ops Team',
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
    accentColor: '#38BDF8',
    challenge: 'Expanding across 12 diagnostic locations led to severe sample tracking errors, 45-day billing backlogs, and constant frontline escalations.',
    rootCause: 'Siloed laboratory management software with zero inter-branch communication protocols and delayed executive telemetry.',
    approach: 'Standardized specimen transfer checklists, unified billing SLAs, and created an automated executive dashboard showing daily unit economics per hub.',
    outcome: 'Sample processing lag dropped to under 12 hours, cash flow became fully predictable, and clinical network margins expanded by 38%.'
  },
  {
    id: 'reel-2',
    image: '/assets/reels/founder_reel_2.jpg',
    speaker: 'Vikram Malhotra',
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
    accentColor: '#A78BFA',
    challenge: 'Group founder was putting in 16-hour workdays personally signing off on routine operational decisions, creating a massive executive bottleneck.',
    rootCause: 'Lack of formalized department accountability scorecards and absence of delegated financial authority thresholds.',
    approach: 'Engineered 48 institutional SOPs, installed executive tier-2 governance cadences, and linked department KPIs directly to quarterly performance scorecards.',
    outcome: 'Founder intervention dropped by 65%, strategic M&A velocity doubled, and external institutional audit benchmarked business at 4.62x valuation multiple.'
  },
  {
    id: 'reel-3',
    image: '/assets/reels/founder_reel_3.jpg',
    speaker: 'Arun & Sandeep',
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
    accentColor: '#34D399',
    challenge: 'Rapid team expansion led to a monthly cash-burn crisis; the co-founders faced a 3-month runway deadline without unit economics clarity.',
    rootCause: 'Operational leakages across unintegrated software platforms and customer acquisition costs outstripping lifetime cash collection.',
    approach: 'Conducted an emergency 14-day operational and financial audit, cut 9 redundant subscriptions, and refocused the sales team on high-margin enterprise accounts.',
    outcome: 'Monthly burn reduced by 52%, operational profitability reached in 45 days, and secured follow-on expansion capital with clean institutional systems.'
  },
  {
    id: 'reel-4',
    image: '/assets/reels/founder_reel_4.jpg',
    speaker: 'Girish & Mohan',
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
    accentColor: '#FBBF24',
    challenge: 'Prior attempts to install expensive enterprise systems failed because warehouse staff bypassed digital forms and defaulted to chaotic manual notes.',
    rootCause: 'Management mandated complex technology before documenting ground workflow steps or training supervisory tier leads.',
    approach: 'Co-designed simplified mobile SOP checklists with warehouse team leaders, backed by weekly milestone reviews and performance incentives.',
    outcome: 'Achieved 98% digital compliance within 30 days; warehouse dispatch accuracy reached 99.8% across all 6 regional distribution hubs.'
  },
  {
    id: 'reel-5',
    image: '/assets/reels/founder_reel_5.jpg',
    speaker: 'David Henderson',
    role: 'Managing Director & Chairman',
    company: 'Apex Industrial Precision',
    industry: 'Precision Engineering & MSME',
    stage: 'MSME (140 Employees)',
    caption: '“I was solving every single factory dispute myself. Now our documented SOPs run with 99.4% predictability without me.”',
    quoteHighlight: 'I was solving every factory crisis myself',
    subQuote: 'Now our documented SOPs run with 99.4% predictability.',
    duration: '0:58',
    metric: '99.4% Autonomy Rate',
    tag: 'INDUSTRIAL SME',
    accentColor: '#F472B6',
    challenge: 'Owner was personally arbitrating floor squabbles, manually checking tolerances, and holding up shipments whenever traveling out of town.',
    rootCause: 'Tribal knowledge was locked inside senior supervisors’ heads without written quality control gating or clear handover checklists.',
    approach: 'Implemented 28 machine-side visual SOPs, established daily 15-minute standups, and appointed autonomous shift quality captains.',
    outcome: 'Zero factory stoppages during owner absences, rework rate plummeted to 0.6%, and client delivery predictability achieved 99.4%.'
  }
];

export default function FounderReelsCarousel() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedReel, setSelectedReel] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isMuted, setIsMuted] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(35);
  const scrollRef = useRef(null);

  // Filter reels if category selected, otherwise show all
  const filteredReels = activeCategory === 'ALL' 
    ? FOUNDER_REELS 
    : FOUNDER_REELS.filter(r => r.tag.includes(activeCategory) || r.stage.includes(activeCategory));

  // Loop display array
  const displayReels = [...filteredReels, ...filteredReels, ...filteredReels];

  // Simulated playback progress in modal
  useEffect(() => {
    if (!selectedReel) return;
    const interval = setInterval(() => {
      setPlaybackProgress((prev) => (prev >= 98 ? 10 : prev + 2));
    }, 350);
    return () => clearInterval(interval);
  }, [selectedReel]);

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -340 : 340;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full relative select-none">
      
      {/* SECTION SUBHEADER WITH CONTROLS */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 px-2">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 font-bold">
            Live Intervention Recordings • 5 Audited Case Studies
          </span>
        </div>

        {/* CONTROLS: PLAY/PAUSE + PREV/NEXT ARROWS */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-mono font-medium text-zinc-300 hover:text-white transition-all"
            title={isPlaying ? 'Pause auto-scroll' : 'Resume auto-scroll'}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-zinc-400" />
                <span>Pause Reel</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span>Autoplay</span>
              </>
            )}
          </button>

          <div className="flex items-center gap-1">
            <button
              onClick={() => handleManualScroll('left')}
              className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-400 hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleManualScroll('right')}
              className="p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-400 hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* CONTINUOUS AUTOSCROLLING REEL TRACK */}
      <div 
        ref={scrollRef}
        className="w-full overflow-x-auto no-scrollbar relative py-4"
        style={{ WebkitOverflowScrolling: 'touch' }}
      >
        {/* Soft edge gradient fades for cinematic vignette */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

        <div
          className={`flex items-center gap-6 sm:gap-8 whitespace-nowrap will-change-transform ${
            isPlaying ? 'animate-reel-scroll' : ''
          } hover:[animation-play-state:paused]`}
          style={{ width: 'max-content' }}
        >
          {displayReels.map((reel, index) => (
            <div
              key={`${reel.id}-${index}`}
              onClick={() => setSelectedReel(reel)}
              className="group relative w-[240px] sm:w-[270px] md:w-[285px] h-[430px] sm:h-[480px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/[0.12] hover:border-white/40 shadow-2xl transition-all duration-300 transform hover:-translate-y-2.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)] shrink-0 bg-zinc-950"
            >
              {/* REEL BACKGROUND IMAGE */}
              <div className="absolute inset-0">
                <Image
                  src={reel.image}
                  alt={reel.speaker}
                  fill
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 270px, 285px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 contrast-105"
                  priority={index < 5}
                />
              </div>

              {/* CINEMATIC GRADIENT OVERLAYS */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 group-hover:opacity-85 transition-opacity" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent" />

              {/* TOP HEADER: BADGE + EQUALIZER */}
              <div className="absolute top-4 inset-x-4 flex items-center justify-between z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-black/70 backdrop-blur-md border border-white/20 text-white shadow-lg">
                  {reel.tag}
                </span>

                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                  {/* ANIMATED SOUNDWAVE BARS */}
                  <div className="flex items-center gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDuration: '0.6s' }} />
                    <span className="w-0.5 h-3 bg-emerald-400 rounded-full animate-pulse" style={{ animationDuration: '0.9s' }} />
                    <span className="w-0.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDuration: '0.4s' }} />
                    <span className="w-0.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" style={{ animationDuration: '0.7s' }} />
                  </div>
                  <span className="text-[10px] font-mono text-zinc-300 font-bold">{reel.duration}</span>
                </div>
              </div>

              {/* CENTER PLAY BUTTON HOVER PROMPT */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="w-13 h-13 rounded-full bg-white/15 backdrop-blur-md border border-white/30 flex items-center justify-center text-white shadow-2xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <Play className="w-6 h-6 fill-white translate-x-0.5 text-white" />
                </div>
              </div>

              {/* BOTTOM CONTENT: SUBTITLES & FOUNDER DETAILS */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 z-10 flex flex-col justify-end">
                
                {/* SUBTITLES CAPTIONS (MATCHING USER REFERENCE) */}
                <div className="mb-3 whitespace-normal">
                  <p className="text-[12px] sm:text-[13px] font-semibold text-white/95 leading-snug drop-shadow-md">
                    <span className="text-yellow-300 font-bold">{reel.quoteHighlight} </span>
                    <span className="text-zinc-200">{reel.subQuote}</span>
                  </p>
                </div>

                {/* SPEAKER & ROLE */}
                <div className="pt-2.5 border-t border-white/15 flex items-center justify-between">
                  <div className="overflow-hidden">
                    <div className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                      {reel.speaker}
                    </div>
                    <div className="text-[11px] text-zinc-300 font-medium truncate">
                      {reel.company}
                    </div>
                  </div>

                  {/* AUDITED RESULT BADGE */}
                  <div className="shrink-0 px-2 py-1 rounded-md bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono font-bold">
                    {reel.metric}
                  </div>
                </div>
              </div>

              {/* SUBTLE BRAND WATERMARK */}
              <div className="absolute top-12 right-4 opacity-40 text-[9px] font-mono font-bold tracking-widest text-zinc-400 uppercase pointer-events-none">
                @SCALARK.TALKS
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER HINT */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs font-mono text-zinc-500">
        <span>Hover to pause</span>
        <span>•</span>
        <span>Click any reel to inspect the full case diagnosis</span>
      </div>

      {/* INTERACTIVE REEL DETAIL MODAL */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fadeIn">
          <div 
            className="relative w-full max-w-4xl bg-[#0B0D13] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedReel(null)}
              className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-white/20 text-white transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* LEFT COLUMN: SIMULATED VERTICAL VIDEO PLAYER */}
            <div className="w-full md:w-[380px] shrink-0 bg-black relative flex items-center justify-center overflow-hidden min-h-[360px] md:min-h-[560px]">
              <Image
                src={selectedReel.image}
                alt={selectedReel.speaker}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />

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
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono font-bold text-white uppercase">SCALARK RECORDINGS</span>
              </div>

              {/* AUDIO / MUTE TOGGLE */}
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="absolute bottom-4 right-4 z-10 p-2.5 rounded-full bg-black/70 backdrop-blur-md text-white border border-white/20 hover:bg-black"
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>

              {/* LIVE CAPTION CALLOUT */}
              <div className="absolute bottom-12 inset-x-4 p-4 rounded-xl bg-black/70 backdrop-blur-md border border-white/10 text-center">
                <p className="text-xs font-semibold text-white">
                  "{selectedReel.caption}"
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN: DETAILED CASE AUDIT BREAKDOWN */}
            <div className="flex-1 p-6 sm:p-8 overflow-y-auto max-h-[560px] flex flex-col justify-between">
              <div>
                {/* HEADER INFO */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-white/10 text-white border border-white/15">
                    {selectedReel.stage}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {selectedReel.industry}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-1">
                  {selectedReel.speaker}
                </h3>
                <div className="text-sm font-semibold text-emerald-400 mb-6">
                  {selectedReel.role} • {selectedReel.company}
                </div>

                {/* 3-TIER ARCHITECTURAL BREAKDOWN */}
                <div className="space-y-4 mb-8">
                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-rose-400 mb-1">
                      01 • The Operational Bottleneck
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {selectedReel.challenge}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 mb-1">
                      02 • Root Cause Diagnosis
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {selectedReel.rootCause}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-blue-400 mb-1">
                      03 • SCALARK Systems Intervention
                    </div>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {selectedReel.approach}
                    </p>
                  </div>
                </div>

                {/* AUDITED OUTCOME HIGHLIGHT */}
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                      Audited Business Outcome
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      {selectedReel.outcome}
                    </div>
                  </div>
                </div>
              </div>

              {/* ACTION FOOTER */}
              <div className="pt-6 border-t border-white/10 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs font-mono text-zinc-400">
                  Ready to uncover the bottlenecks in your business?
                </div>
                <a
                  href="#contact-diagnosis"
                  onClick={() => setSelectedReel(null)}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-black text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Diagnose My Business Like This</span>
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
