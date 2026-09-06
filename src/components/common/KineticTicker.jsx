'use client';

import { ArrowUpRight } from 'lucide-react';

export default function KineticTicker({ items = [], speed = 'normal', reverse = false, className = '' }) {
  const defaultItems = [
    'SYSTEM DIAGNOSTICS ACTIVE',
    '99.4% AUTONOMY BENCHMARK',
    'DUBAI 🇦🇪 // LONDON 🇬🇧 // SINGAPORE 🇸🇬',
    'ZERO-FRICTION SALES PIPELINE',
    'ENTERPRISE SOP GOVERNANCE',
    'OWNER TIME FREED 65%',
    'PREDICTABLE UNIT ECONOMICS',
    'SCALARK OPERATING ARCHITECTURE'
  ];

  const displayItems = items.length > 0 ? items : defaultItems;

  return (
    <div className={`w-full overflow-hidden py-4 border-y border-white/10 bg-black/60 backdrop-blur-md relative select-none group ${className}`}>
      {/* Gradient fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div
        className={`flex items-center gap-8 whitespace-nowrap will-change-transform ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        } group-hover:[animation-play-state:paused]`}
      >
        {[...displayItems, ...displayItems, ...displayItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-xs font-tech font-bold uppercase tracking-widest text-zinc-400 hover:text-white transition-colors cursor-default">
            <span>{item}</span>
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6] animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
