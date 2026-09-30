'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import SmoothScroll from '@/components/common/SmoothScroll';
import ScrollProgressBar from '@/components/common/ScrollProgressBar';
import BackgroundCanvas from '@/components/canvas/BackgroundCanvas';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { MessageSquare } from 'lucide-react';

import ScalarkChatbot from '@/components/chat/ScalarkChatbot';

export default function AppLayout({ children }) {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <div className="relative bg-[#061233] text-white min-h-screen font-sans selection:bg-[#0E37A4] selection:text-white overflow-x-hidden flex flex-col justify-between">
          {/* HARDWARE-ACCELERATED SCROLL PROGRESS BAR */}
          <ScrollProgressBar />

          {/* AMBIENT CANVAS */}
          <BackgroundCanvas />

          {/* FLOATING CAPSULE NAVBAR */}
          <Header />

          {/* MAIN PAGE BODY */}
          <div className="relative z-10 flex-1 flex flex-col">
            {children}
          </div>

          {/* SHARED PREMIUM FOOTER */}
          <Footer />

          {/* SINGLE CLEAN CHAT BUTTON (FIXED TO VIEWPORT) */}
          <ScalarkChatbot />
        </div>
      </SmoothScroll>
    </LanguageProvider>
  );
}
