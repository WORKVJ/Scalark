'use client';

import { ArrowUpRight, ChevronsRight, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import FloatingAsterisk3D from '@/components/common/FloatingAsterisk3D';

export default function Footer({ currentLang, setLang, openModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F5F7] text-black pt-24 pb-12 border-t border-zinc-300 relative z-10 overflow-hidden">
      
      {/* DESGRO MEDIA GIANT WATERMARK TEXT IN BACKGROUND */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[12vw] font-black text-black/[0.03] uppercase tracking-tighter whitespace-nowrap -z-10">
        SCALARK 2026
      </div>

      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* DESGRO MEDIA GIANT OUTLINED CALLOUT HEADLINE */}
        <div className="mb-20 pb-12 border-b-2 border-black/10 relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-tech font-black uppercase tracking-widest text-white bg-[#8B5CF6] px-3.5 py-1 rounded-full inline-block shadow-sm">
              GET IN TOUCH
            </span>
            <div className="w-8 h-8 hidden sm:block">
              <FloatingAsterisk3D size={32} color="#8B5CF6" speed="fast" />
            </div>
          </div>

          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] text-black font-sans">
            <span className="text-stroke-black">LET'S</span> BUILD
            <br />
            <span className="text-black">SYSTEMS TOGETHER</span>
            <span className="text-[#8B5CF6]">.</span>
          </h2>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-base sm:text-xl text-zinc-600 font-medium max-w-xl">
              Replace founder firefighting with institutional operational architecture designed for sustainable scale.
            </p>

            <button
              onClick={() => scrollTo('contact-diagnosis')}
              className="px-8 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white font-black uppercase text-xs tracking-wider rounded-full transition-all duration-300 shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <span>Book Diagnosis Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* GROWMEDLINK STYLE 3-COLUMN FOOTER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* LEFT CONTACT & ADVISORY (4 COLS) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-tech font-bold uppercase tracking-wider text-zinc-500">
              Direct Inquiries
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/?text=Hello%20SCALARK!%20I%20would%20like%20to%20diagnose%20my%20business%20systems."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-[#FFFFFF] transition-all shadow-sm group"
              >
                <div className="w-9 h-9 rounded-full bg-[#FFFFFF]/20 text-[#FFFFFF] flex items-center justify-center font-bold">
                  <MessageSquare className="w-4 h-4 text-black" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-tech text-zinc-400 font-bold">WhatsApp Advisory Desk</div>
                  <div className="text-xs font-bold text-black group-hover:text-[#FFFFFF] transition-colors font-sans">Start Instant Chat</div>
                </div>
              </a>

              <a
                href="mailto:connect@scalark.com"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-[#FFFFFF] transition-all shadow-sm group"
              >
                <div className="w-9 h-9 rounded-full bg-zinc-100 text-zinc-700 flex items-center justify-center font-bold">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-tech text-zinc-400 font-bold">Confidential Inquiries</div>
                  <div className="text-xs font-bold text-black group-hover:text-[#FFFFFF] transition-colors font-sans">connect@scalark.com</div>
                </div>
              </a>
            </div>
          </div>

          {/* CENTER DARK CARD: NAVIGATION (4 COLS) */}
          <div className="md:col-span-4 bg-[#1D1D1D] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl card-sheen">
            <div className="space-y-3">
              <span className="text-[10px] font-tech uppercase tracking-widest text-[#FFFFFF] font-bold block">
                EXPLORE SYSTEMS
              </span>
              <ul className="space-y-2 text-xs font-bold text-zinc-300 font-sans">
                <li>
                  <button onClick={() => scrollTo('hero')} className="hover:text-[#FFFFFF] transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('the-mirror')} className="hover:text-[#FFFFFF] transition-colors">
                    The Bottlenecks (Mirror)
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('solutions')} className="hover:text-[#FFFFFF] transition-colors">
                    4 Strategic Pillars
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('framework')} className="hover:text-[#FFFFFF] transition-colors">
                    5-Phase Framework
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo('case-studies')} className="hover:text-[#FFFFFF] transition-colors">
                    Case Studies & Outcomes
                  </button>
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollTo('contact-diagnosis')}
              className="mt-6 w-full py-3.5 bg-[#FFFFFF] hover:bg-[#E4E4E7] text-black font-black uppercase text-[11px] tracking-wider rounded-full transition-colors flex items-center justify-center gap-1 shadow-lg"
            >
              <span>Book Diagnosis</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* RIGHT VIBRANT LIME CARD: GLOBAL PRESENCE (4 COLS) */}
          <div className="md:col-span-4 bg-[#FFFFFF] text-black rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl card-sheen-lime">
            <div className="space-y-2">
              <span className="text-[10px] font-tech uppercase tracking-widest text-black/70 font-bold block">
                GLOBAL REACH
              </span>
              <h4 className="text-xl font-black text-black tracking-tight leading-snug font-sans">
                Advising Enterprises Across 5 Key Regions
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] font-black font-tech">
                <span className="bg-black text-white px-2.5 py-1 rounded-full">DUBAI</span>
                <span className="bg-black text-white px-2.5 py-1 rounded-full">LONDON</span>
                <span className="bg-black text-white px-2.5 py-1 rounded-full">SINGAPORE</span>
                <span className="bg-black text-white px-2.5 py-1 rounded-full">RIYADH</span>
                <span className="bg-black text-white px-2.5 py-1 rounded-full">MUMBAI</span>
              </div>
            </div>

            <div className="pt-6 border-t border-black/15 text-[11px] font-black text-black/80 font-tech">
              © 2026 SCALARK Systems Advisory.
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL ROW & BACK TO TOP */}
        <div className="pt-6 border-t border-zinc-300 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium">
          <div>
            Built with high-precision systems architecture standards.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Terms of Engagement</span>
            <span className="hover:text-black cursor-pointer">NDA Protection</span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#FFFFFF] hover:text-black transition-all shadow-md"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
}

