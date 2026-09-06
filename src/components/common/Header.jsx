'use client';

import { useState, useEffect } from 'react';
import { Globe, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

export default function Header({ currentLang, setLang, t, openModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'the-mirror', 'solutions', 'framework', 'case-studies', 'contact-diagnosis'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectLanguage = (code) => {
    setLang(code);
    setLangDropdownOpen(false);
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'AR', label: 'العربية' },
    { code: 'HI', label: 'हिन्दी' },
    { code: 'ML', label: 'മലയാളം' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out flex justify-center pt-4 sm:pt-6 px-4 pointer-events-none">
      <div
        className="flex justify-between items-center w-full max-w-6xl transition-all duration-300 pointer-events-auto px-4 sm:px-6 py-2.5"
      >
        {/* BRAND LOGO: ULTRA-CLEAN STRIPE/LINEAR STYLE */}
        <div
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-2 cursor-pointer group select-none"
        >
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-white via-zinc-200 to-zinc-400 flex items-center justify-center text-black font-extrabold text-sm tracking-tighter shadow-sm group-hover:scale-105 transition-transform">
            S
          </div>
          <span className="text-lg font-bold tracking-tight text-white font-sans uppercase">
            SCALARK
          </span>
        </div>

        {/* CENTER FLOATING PILL NAVBAR - EXACTLY FROM SCALARK.PDF */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#10131A]/80 backdrop-blur-xl border border-white/[0.08] rounded-full px-3 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          <button
            onClick={() => scrollTo('hero')}
            className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full ${
              activeSection === 'hero'
                ? 'bg-white/10 text-white font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => openModal('who-we-help')}
            className="px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-400 hover:text-white transition-all rounded-full flex items-center gap-1"
          >
            <span>Who We Help</span>
            <ChevronDown className="w-3 h-3 opacity-60" />
          </button>
          <button
            onClick={() => scrollTo('solutions')}
            className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full flex items-center gap-1 ${
              activeSection === 'solutions'
                ? 'bg-white/10 text-white font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <span>What We Solve</span>
            <ChevronDown className="w-3 h-3 opacity-60" />
          </button>
          <button
            onClick={() => scrollTo('framework')}
            className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full ${
              activeSection === 'framework'
                ? 'bg-white/10 text-white font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            How We Work
          </button>
          <button
            onClick={() => scrollTo('case-studies')}
            className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full ${
              activeSection === 'case-studies'
                ? 'bg-white/10 text-white font-semibold'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            Case Studies
          </button>
          <button
            onClick={() => openModal('about')}
            className="px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-400 hover:text-white transition-all rounded-full"
          >
            About
          </button>
        </nav>

        {/* RIGHT CONTROLS: LANGUAGE + HIGH-CONTRAST ENTERPRISE CTA */}
        <div className="flex items-center gap-3">
          {/* LANGUAGE SELECTOR */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="px-2.5 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs text-zinc-400 hover:text-white flex items-center space-x-1.5 transition-colors"
              aria-label="Select Language"
            >
              <Globe className="w-3 h-3 text-zinc-400" />
              <span className="font-mono text-[10px] uppercase font-semibold">{currentLang}</span>
              <ChevronDown className="w-2.5 h-2.5 opacity-60" />
            </button>

            {langDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 rounded-xl bg-[#11141C] border border-white/10 p-1.5 shadow-2xl backdrop-blur-2xl z-50">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => selectLanguage(l.code)}
                    className={`w-full text-left px-3 py-1.5 rounded-lg text-xs flex items-center justify-between transition-colors ${
                      currentLang === l.code
                        ? 'bg-white/15 text-white font-bold'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{l.label}</span>
                    <span className="font-mono text-[10px] opacity-60">{l.code}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* HIGH-CONTRAST ENTERPRISE CTA (STRIPE / LINEAR FINISH) */}
          <button
            onClick={() => scrollTo('contact-diagnosis')}
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white text-black hover:bg-zinc-200 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-95 whitespace-nowrap"
          >
            <span>Diagnose My Business</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </button>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-[#11141C] border border-white/10 flex items-center justify-center text-white shrink-0 active:scale-95 cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#07090E]/98 backdrop-blur-2xl z-50 md:hidden flex flex-col p-6 pt-5 space-y-6 pointer-events-auto overflow-y-auto">
          {/* DRAWER HEADER WITH LOGO & CLOSE BUTTON */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center font-extrabold text-sm">
                S
              </div>
              <span className="text-base font-bold tracking-tight text-white uppercase">
                SCALARK
              </span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="space-y-1 text-base font-semibold">
            <button
              onClick={() => scrollTo('hero')}
              className="w-full text-left text-zinc-200 hover:text-white py-3 border-b border-white/10 flex items-center justify-between"
            >
              <span>Home</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('who-we-help');
              }}
              className="w-full text-left text-zinc-200 hover:text-white py-3 border-b border-white/10 flex items-center justify-between"
            >
              <span>Who We Help</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
            <button
              onClick={() => scrollTo('solutions')}
              className="w-full text-left text-zinc-200 hover:text-white py-3 border-b border-white/10 flex items-center justify-between"
            >
              <span>What We Solve</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
            <button
              onClick={() => scrollTo('framework')}
              className="w-full text-left text-zinc-200 hover:text-white py-3 border-b border-white/10 flex items-center justify-between"
            >
              <span>How We Work</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
            <button
              onClick={() => scrollTo('case-studies')}
              className="w-full text-left text-zinc-200 hover:text-white py-3 border-b border-white/10 flex items-center justify-between"
            >
              <span>Case Studies</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal('about');
              }}
              className="w-full text-left text-zinc-200 hover:text-white py-3 border-b border-white/10 flex items-center justify-between"
            >
              <span>About SCALARK</span>
              <ArrowRight className="w-4 h-4 text-zinc-400" />
            </button>
          </div>

          {/* MOBILE LANGUAGE SELECTOR */}
          <div className="space-y-2 pt-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Language / اللغة
            </span>
            <div className="grid grid-cols-4 gap-2">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => selectLanguage(l.code)}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-mono font-bold transition-colors ${
                    currentLang === l.code
                      ? 'bg-white text-black shadow-md'
                      : 'bg-white/5 text-zinc-400 hover:text-white border border-white/10'
                  }`}
                >
                  {l.code}
                </button>
              ))}
            </div>
          </div>

          {/* MOBILE CTA BUTTON */}
          <div className="pt-2">
            <button
              onClick={() => scrollTo('contact-diagnosis')}
              className="w-full py-3.5 bg-white text-black font-bold text-xs rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Diagnose My Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
