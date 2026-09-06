'use client';

import { soundFx } from '@/utils/sound';
import { ArrowRight, Building, Compass, Flame, Rocket, TrendingUp, Users, X } from 'lucide-react';

export default function WhoWeHelpModal({ onClose }) {
  const audiences = [
    {
      title: 'Startups (0 - 2 yrs)',
      lead: 'You need structure before complexity arrives.',
      desc: 'SCALARK can help you build the foundation for sustainable growth, avoiding expensive early missteps.',
      cta: 'Explore Startup Solutions →',
      icon: Rocket
    },
    {
      title: 'Entrepreneurs',
      lead: 'You have the ambition.',
      desc: 'We help turn that ambition into a structured, self-sustaining business where you are not the bottleneck.',
      cta: 'Explore Entrepreneur Solutions →',
      icon: Compass
    },
    {
      title: 'SMEs (Established)',
      lead: 'You have established operations.',
      desc: 'Now you need better systems, institutional performance, management dashboards, and true scalability.',
      cta: 'Explore SME Solutions →',
      icon: Building
    },
    {
      title: 'MSMEs',
      lead: 'You don\'t need unnecessary complexity.',
      desc: 'You need practical, cost-efficient systems that fit the real size and day-to-day cadence of your business.',
      cta: 'Explore MSME Solutions →',
      icon: Users
    },
    {
      title: 'Growing Organisations',
      lead: 'Growth creates new challenges.',
      desc: 'We help your organisation evolve with scale, creating operational capacity instead of chaotic overhead.',
      cta: 'Prepare to Scale →',
      icon: TrendingUp
    },
    {
      title: 'Businesses in Crisis',
      lead: 'When pressure increases, knowing what to fix first matters.',
      desc: 'Cash flow triage, operational stabilization, and objective root-cause turnaround plans.',
      cta: 'Start a Recovery Assessment →',
      icon: Flame
    }
  ];

  const handleCta = (title) => {
    soundFx.playClick();
    onClose();
    const el = document.getElementById('contact-diagnosis');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      window.dispatchEvent(new CustomEvent('prefill-stage', { detail: title }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-white/20 p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white font-semibold">
              ORGANISATIONAL PROFILES
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Who We Help
            </h2>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {audiences.map((aud, i) => {
            const Icon = aud.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-zinc-200/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-zinc-200/10 border border-zinc-200/20 flex items-center justify-center text-white mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1.5">{aud.title}</h3>
                  <p className="text-xs text-white font-medium mb-2">{aud.lead}</p>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{aud.desc}</p>
                </div>
                <button
                  onClick={() => handleCta(aud.title)}
                  className="text-xs font-bold text-white hover:text-white flex items-center space-x-1.5 transition-colors pt-3 border-t border-white/10"
                >
                  <span>{aud.cta}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

