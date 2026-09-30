'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Globe, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function Header({ currentLang: propLang, setLang: propSetLang }) {
  const { currentLang: ctxLang, setLang: ctxSetLang } = useLanguage();
  const currentLang = propLang || ctxLang;
  const setLang = propSetLang || ctxSetLang;

  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const selectLanguage = (code) => {
    setLang(code);
    setLangDropdownOpen(false);
  };

  const handleNavigate = (href) => {
    setMobileMenuOpen(false);
    if (pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push(href);
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/who-we-help', label: 'Who We Help' },
    { href: '/solutions', label: 'What We Solve' },
    { href: '/how-we-work', label: 'How We Work' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' }
  ];

  const languages = [
    { code: 'EN', label: 'English' },
    { code: 'AR', label: 'العربية' },
    { code: 'HI', label: 'हिन्दी' },
    { code: 'ML', label: 'മലയാളം' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out flex justify-center px-2.5 sm:px-6 ${
      mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
    } ${scrolled ? 'pt-2 sm:pt-3' : 'pt-3 sm:pt-5'}`}>
      <div className={`flex justify-between items-center w-full max-w-6xl transition-all duration-300 pointer-events-auto px-3 sm:px-6 py-2 sm:py-2.5 rounded-full ${
        scrolled 
          ? 'bg-[#0B0E14]/95 backdrop-blur-xl border border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.65)]' 
          : 'bg-[#0B0E14]/75 backdrop-blur-md border border-white/10 shadow-lg'
      }`}>
        
        {/* BRAND LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 sm:gap-3 cursor-pointer group select-none shrink-0"
        >
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/logo_white_transparent.png"
              alt="SCALARK"
              width={40}
              height={40}
              className="w-7 h-7 sm:w-9 sm:h-9 object-contain drop-shadow-[0_2px_10px_rgba(255,255,255,0.25)]"
              priority
            />
          </div>
          <span className="text-base sm:text-xl font-extrabold tracking-tight text-white font-sans uppercase">
            SCALARK
          </span>
        </Link>

        {/* CENTER FLOATING PILL NAVBAR */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#10131A]/80 backdrop-blur-xl border border-white/[0.08] rounded-full px-3 py-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
          {navLinks.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-1.5 text-xs font-medium tracking-wide transition-all rounded-full ${
                  isActive
                    ? 'bg-white/10 text-white font-semibold shadow-inner'
                    : 'text-zinc-400 hover:text-white hover:bg-white/[0.04]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
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

          {/* HIGH-CONTRAST ENTERPRISE CTA */}
          <Link
            href="/contact"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 bg-white text-black hover:bg-zinc-200 text-[11px] sm:text-xs font-bold rounded-full transition-all duration-200 shadow-md hover:scale-[1.02] active:scale-95 whitespace-nowrap"
          >
            <span>Book a Call</span>
            <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </Link>

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
        <div
          data-lenis-prevent
          className="fixed inset-0 bg-[#07090E]/98 backdrop-blur-2xl z-50 md:hidden flex flex-col p-6 pt-5 space-y-6 pointer-events-auto overflow-y-auto"
        >
          {/* DRAWER HEADER WITH LOGO & CLOSE BUTTON */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <button
              type="button"
              onClick={() => handleNavigate('/')}
              className="flex items-center gap-3 cursor-pointer text-left"
            >
              <div className="relative w-9 h-9 flex items-center justify-center">
                <Image
                  src="/logo_white_transparent.png"
                  alt="SCALARK"
                  width={36}
                  height={36}
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-lg font-extrabold tracking-tight text-white uppercase">
                SCALARK
              </span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer active:scale-95"
              aria-label="Close menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* NAVIGATION LINKS */}
          <div className="space-y-1 text-base font-semibold">
            {navLinks.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigate(item.href)}
                className={`w-full py-3.5 border-b border-white/10 flex items-center justify-between transition-colors text-left cursor-pointer active:opacity-70 ${
                  pathname === item.href ? 'text-white font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </button>
            ))}
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
                  type="button"
                  onClick={() => selectLanguage(l.code)}
                  className={`py-2 px-2 text-center rounded-xl text-xs font-mono font-bold transition-colors cursor-pointer active:scale-95 ${
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
              type="button"
              onClick={() => handleNavigate('/contact')}
              className="w-full py-3.5 bg-white text-black font-bold text-xs rounded-full shadow-lg flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <span>Book a Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
