'use client';

import HeroSection from '@/components/sections/HeroSection';
import EnterpriseMetricsBar from '@/components/sections/EnterpriseMetricsBar';
import TheMirrorSection from '@/components/sections/TheMirrorSection';
import HomeSolutionsPreview from '@/components/sections/HomeSolutionsPreview';
import HomeFrameworkPreview from '@/components/sections/HomeFrameworkPreview';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import HomeAboutPreview from '@/components/sections/HomeAboutPreview';
import HomeCtaBanner from '@/components/sections/HomeCtaBanner';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* 01. FLAGSHIP HERO WITH INTERACTIVE CONSOLE */}
      <HeroSection t={t} />

      {/* 02. ENTERPRISE PROVEN BENCHMARKS & METRICS */}
      <EnterpriseMetricsBar />

      {/* 03. THE CORE BOTTLENECKS (THE MIRROR) */}
      <TheMirrorSection t={t} />

      {/* 04. 4 STRATEGIC PILLARS OVERVIEW -> LINKS TO /solutions */}
      <HomeSolutionsPreview />

      {/* 05. 5-PHASE ARCHITECTURE ROADMAP -> LINKS TO /how-we-work */}
      <HomeFrameworkPreview />

      {/* 06. FOUNDER STORY REELS & VERIFIED CLIENT OUTCOMES */}
      <CaseStudiesSection t={t} />

      {/* 07. ABOUT SCALARK DOCTRINE & GLOBAL FOOTPRINT -> LINKS TO /about */}
      <HomeAboutPreview />

      {/* 08. FINAL CONSULTATION CTA -> LINKS TO /contact & /who-we-help */}
      <HomeCtaBanner />
    </div>
  );
}
