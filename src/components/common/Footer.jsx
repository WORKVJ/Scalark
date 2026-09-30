'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Mail, MessageSquare, ArrowUp } from 'lucide-react';
import FloatingAsterisk3D from '@/components/common/FloatingAsterisk3D';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer({ currentLang: propLang, setLang: propSetLang }) {
  const { currentLang: ctxLang, setLang: ctxSetLang } = useLanguage();
  const currentLang = propLang || ctxLang;
  const setLang = propSetLang || ctxSetLang;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F5F7] text-black pt-14 sm:pt-24 pb-8 sm:pb-12 border-t border-zinc-300 relative z-10 overflow-hidden">
      
      {/* GIANT WATERMARK TEXT IN BACKGROUND */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none text-[14vw] sm:text-[12vw] font-black text-black/[0.03] uppercase tracking-tighter whitespace-nowrap -z-10">
        SCALARK 2026
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        
        {/* GIANT OUTLINED CALLOUT HEADLINE */}
        <div className="mb-12 sm:mb-20 pb-8 sm:pb-12 border-b-2 border-black/10 relative">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] sm:text-xs font-tech font-black uppercase tracking-widest text-white bg-[#0E37A4] px-3.5 py-1 rounded-full inline-block shadow-sm">
              GET IN TOUCH
            </span>
            <div className="w-7 h-7 sm:w-8 sm:h-8 hidden sm:block">
              <FloatingAsterisk3D size={32} color="#0E37A4" speed="fast" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.0] text-black font-sans">
            <span className="text-stroke-black">LET'S</span> BUILD
            <br />
            <span className="text-black">SYSTEMS TOGETHER</span>
            <span className="text-[#0E37A4]">.</span>
          </h2>

          <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm sm:text-xl text-zinc-600 font-medium max-w-xl">
              Replace founder firefighting with institutional operational architecture designed for sustainable scale.
            </p>

            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#0E37A4] hover:bg-[#0A2A7E] text-white font-black uppercase text-xs tracking-wider rounded-full transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2"
            >
              <span>Book a Consultation Call</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

        {/* 3-COLUMN FOOTER CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          
          {/* LEFT BRAND & CONTACT (4 COLS) */}
          <div className="md:col-span-4 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-3.5 cursor-pointer group select-none"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0E37A4] flex items-center justify-center p-2.5 shadow-md group-hover:scale-105 transition-transform">
                <Image
                  src="/logo_white_transparent.png"
                  alt="SCALARK Logo"
                  width={36}
                  height={36}
                  className="w-auto h-8 object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-black font-sans uppercase block leading-none mb-1">
                  SCALARK
                </span>
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest block">
                  Business Systems Architecture
                </span>
              </div>
            </Link>

            <div className="space-y-3 pt-1">
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
                  <div className="w-9 h-9 rounded-full bg-[#0E37A4]/15 text-[#0E37A4] flex items-center justify-center font-bold">
                    <MessageSquare className="w-4 h-4 text-[#0E37A4]" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-tech text-zinc-400 font-bold">WhatsApp Advisory Desk</div>
                    <div className="text-xs font-bold text-black group-hover:text-[#0E37A4] transition-colors font-sans">Start Instant Chat</div>
                  </div>
                </a>

                <a
                  href="mailto:connect@scalark.com"
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-zinc-200 hover:border-[#0E37A4] transition-all shadow-sm group"
                >
                  <div className="w-9 h-9 rounded-full bg-blue-50 text-[#0E37A4] flex items-center justify-center font-bold">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-tech text-zinc-400 font-bold">Confidential Inquiries</div>
                    <div className="text-xs font-bold text-black group-hover:text-[#0E37A4] transition-colors font-sans">connect@scalark.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* CENTER DARK CARD: NAVIGATION (4 COLS) */}
          <div className="md:col-span-4 bg-[#081B4E] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl card-sheen border border-[#0E37A4]/40">
            <div className="space-y-3">
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src="/logo_white_transparent.png"
                  alt="SCALARK"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
                <span className="text-[10px] font-tech uppercase tracking-widest text-blue-300 font-bold block">
                  EXPLORE SYSTEMS
                </span>
              </div>
              <ul className="space-y-2 text-xs font-bold text-zinc-300 font-sans">
                <li>
                  <Link href="/" className="hover:text-white transition-colors block py-0.5">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/who-we-help" className="hover:text-white transition-colors block py-0.5">
                    Who We Help
                  </Link>
                </li>
                <li>
                  <Link href="/solutions" className="hover:text-white transition-colors block py-0.5">
                    4 Strategic Pillars
                  </Link>
                </li>
                <li>
                  <Link href="/how-we-work" className="hover:text-white transition-colors block py-0.5">
                    5-Phase Framework
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="hover:text-white transition-colors block py-0.5">
                    Case Studies & Outcomes
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition-colors block py-0.5">
                    About SCALARK
                  </Link>
                </li>
              </ul>
            </div>

            <Link
              href="/contact"
              className="mt-6 w-full py-3.5 bg-white hover:bg-zinc-200 text-black font-black uppercase text-[11px] tracking-wider rounded-full transition-colors flex items-center justify-center gap-1 shadow-lg"
            >
              <span>Book a Call</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </Link>
          </div>

          {/* RIGHT VIBRANT ROYAL BLUE CARD: GLOBAL PRESENCE (4 COLS) */}
          <div className="md:col-span-4 bg-[#0E37A4] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl card-sheen">
            <div className="space-y-2">
              <span className="text-[10px] font-tech uppercase tracking-widest text-white/80 font-bold block">
                GLOBAL REACH
              </span>
              <h4 className="text-xl font-black text-white tracking-tight leading-snug font-sans">
                Advising Enterprises Across 5 Key Regions
              </h4>
              <div className="flex flex-wrap gap-1.5 pt-2 text-[11px] font-black font-tech">
                <span className="bg-white/20 text-white px-2.5 py-1 rounded-full">DUBAI</span>
                <span className="bg-white/20 text-white px-2.5 py-1 rounded-full">LONDON</span>
                <span className="bg-white/20 text-white px-2.5 py-1 rounded-full">SINGAPORE</span>
                <span className="bg-white/20 text-white px-2.5 py-1 rounded-full">RIYADH</span>
                <span className="bg-white/20 text-white px-2.5 py-1 rounded-full">MUMBAI</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/20 text-[11px] font-black text-white/80 font-tech">
              © 2026 SCALARK Systems Advisory.
            </div>
          </div>
        </div>

        {/* BOTTOM LEGAL ROW & BACK TO TOP */}
        <div className="pt-6 border-t border-zinc-300 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-medium text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <div className="w-6 h-6 rounded-md bg-[#0E37A4] flex items-center justify-center p-1 shrink-0">
              <Image
                src="/logo_white_transparent.png"
                alt="Logo"
                width={16}
                height={16}
                className="w-auto h-3.5 object-contain"
              />
            </div>
            <span className="text-[11px] sm:text-xs">Built with high-precision systems architecture standards.</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 sm:space-x-6 text-[11px] sm:text-xs">
            <span className="hover:text-black cursor-pointer">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer">Terms of Engagement</span>
          </div>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-[#0E37A4] text-white flex items-center justify-center hover:bg-[#154AE0] transition-all shadow-md cursor-pointer shrink-0"
            title="Scroll to Top"
          >
            <ArrowUp className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  );
}
