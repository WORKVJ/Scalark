'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import SmoothScroll from '@/components/common/SmoothScroll';
import BackgroundCanvas from '@/components/canvas/BackgroundCanvas';

// Core Essential Sections
import HeroSection from '@/components/sections/HeroSection';
import TheMirrorSection from '@/components/sections/TheMirrorSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import HowWeWorkSection from '@/components/sections/HowWeWorkSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import RotatingSquadSection from '@/components/sections/RotatingSquadSection';
import DiagnosisContactSection from '@/components/sections/DiagnosisContactSection';

import KineticTicker from '@/components/common/KineticTicker';
import ScrollProgressBar from '@/components/common/ScrollProgressBar';

// Deep-Dive Modals & Drawers
import SolutionsModal from '@/components/modals/SolutionsModal';
import WhoWeHelpModal from '@/components/modals/WhoWeHelpModal';
import CaseStudiesModal from '@/components/modals/CaseStudiesModal';
import InsightsModal from '@/components/modals/InsightsModal';
import AboutModal from '@/components/modals/AboutModal';

import { TRANSLATIONS } from '@/data/translations';
import { MessageSquare } from 'lucide-react';

export default function Home() {
  const [lang, setLang] = useState('EN');
  const [activeModal, setActiveModal] = useState(null); // 'who' | 'solutions' | 'cases' | 'insights' | 'about'

  const t = TRANSLATIONS[lang] || TRANSLATIONS.EN;
  const isRtl = lang === 'AR';

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang.toLowerCase());
  }, [lang, isRtl]);

  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <SmoothScroll>
      <div
        dir={isRtl ? 'rtl' : 'ltr'}
        className="relative bg-black text-white min-h-screen font-sans selection:bg-[#FFFFFF] selection:text-black overflow-x-hidden"
      >
        {/* HARDWARE-ACCELERATED SCROLL PROGRESS BAR */}
        <ScrollProgressBar />

        {/* AMBIENT CANVAS */}
        <BackgroundCanvas />

        {/* FLOATING CAPSULE NAVBAR */}
        <Header
          currentLang={lang}
          setLang={setLang}
          t={t}
          openModal={openModal}
        />

        {/* MAIN HOMEPAGE SECTIONS */}
        <main className="relative z-10 flex flex-col">
          {/* SECTION 01: HERO & 3D FAN-DECK (BLACK CANVAS) */}
          <HeroSection t={t} />

          {/* KINETIC TICKER 01: GLOBAL TELEMETRY MARQUEE */}
          <KineticTicker
            items={[
              'SYSTEM ARCHITECTURE ACTIVE',
              '99.4% AUTONOMY BENCHMARK',
              'DUBAI 🇦🇪 // LONDON 🇬🇧 // SINGAPORE 🇸🇬',
              'ZERO-FRICTION SALES ENGINES',
              'ENTERPRISE SOP GOVERNANCE',
              'OWNER TIME RECOVERED 65%',
              'REAL-TIME UNIT ECONOMICS',
              'PREDICTABILITY RATE 98%'
            ]}
          />

          {/* SECTION 02: THE MIRROR & STAT CAPSULE (LIGHT CANVAS) */}
          <TheMirrorSection t={t} />

          {/* SECTION 03: 4 DUAL-TONE PILLARS (BLACK CANVAS) */}
          <SolutionsSection t={t} />

          {/* KINETIC TICKER 02: 4 PILLARS REVERSE TICKER */}
          <KineticTicker
            reverse={true}
            className="border-[#8B5CF6]/20 bg-black/80"
            items={[
              'PILLAR 01: OPERATIONS & PROCESS ENGINEERING',
              'PILLAR 02: SALES & REVENUE SYSTEMS',
              'PILLAR 03: FINANCE & UNIT ECONOMICS',
              'PILLAR 04: ORGANIZATION & PEOPLE CADENCE',
              'INSTITUTIONAL OWNER INDEPENDENCE'
            ]}
          />

          {/* SECTION 04: WHY SCALARK STADIUM CARD & FRAMEWORK (LIGHT CANVAS) */}
          <HowWeWorkSection t={t} />

          {/* SECTION 05: CASE STUDIES & FOUNDER REELS (AUTOSCROLLING) */}
          <CaseStudiesSection t={t} />

          {/* SECTION 05B: 3D ROTATING SCALARK SYSTEMS SQUAD CAROUSEL */}
          <RotatingSquadSection />

          {/* SECTION 06: SPLIT-PILL CTA & DIAGNOSTIC INTAKE (LIGHT CANVAS) */}
          <DiagnosisContactSection t={t} />
        </main>

        {/* GROWMEDLINK STYLE FOOTER (LIGHT CANVAS) */}
        <Footer
          currentLang={lang}
          setLang={setLang}
          openModal={openModal}
        />

        {/* GROWMEDLINK FLOATING WHATSAPP ADVISORY PILL */}
        <a
          href="https://wa.me/?text=Hello%20SCALARK!%20I%20would%20like%20to%20diagnose%20my%20business%20systems."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-12 h-12 bg-[#FFFFFF] text-black rounded-full shadow-[0_6px_25px_rgba(255,255,255,0.45)] hover:scale-110 active:scale-95 transition-all duration-300"
          aria-label="Consult with SCALARK on WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-black text-transparent" />
        </a>

        {/* MODAL OVERLAYS */}
        {activeModal === 'solutions' && <SolutionsModal onClose={closeModal} />}
        {activeModal === 'who' && <WhoWeHelpModal onClose={closeModal} />}
        {activeModal === 'cases' && <CaseStudiesModal onClose={closeModal} />}
        {activeModal === 'insights' && <InsightsModal onClose={closeModal} />}
        {activeModal === 'about' && <AboutModal onClose={closeModal} t={t} />}
      </div>
    </SmoothScroll>
  );
}
