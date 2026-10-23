'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  ExternalLink,
  ChevronRight,
  ArrowUp
} from 'lucide-react';

export default function ScalarkChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const [messages, setMessages] = useState([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Welcome to SCALARK. How can we assist your business systems today?",
      quickReplies: [
        "What does SCALARK do?",
        "Book a Strategy Call",
        "The 6 Core Pillars",
        "Direct WhatsApp Chat"
      ]
    }
  ]);

  const chatScrollRef = useRef(null);
  const inputRef = useRef(null);

  // Scroll monitoring inside chat container
  const handleChatScroll = () => {
    if (chatScrollRef.current) {
      setShowScrollTop(chatScrollRef.current.scrollTop > 80);
    }
  };

  const scrollToTop = () => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const scrollToBottom = (behavior = 'smooth') => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior
      });
    }
  };

  // Auto-scroll on new message ONLY if near bottom or initial messages
  useEffect(() => {
    if (isOpen && chatScrollRef.current) {
      const isNearBottom =
        chatScrollRef.current.scrollHeight -
        chatScrollRef.current.scrollTop -
        chatScrollRef.current.clientHeight < 180;

      if (isNearBottom || messages.length <= 2) {
        scrollToBottom('smooth');
      }
    }
  }, [messages, isTyping, isOpen]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  // Knowledge base responses for quick simple answers
  const getSimpleResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('what does scalark do') || q.includes('about') || q.includes('service') || q.includes('who are you')) {
      return {
        text: "**SCALARK is a Business Systems Architecture Platform.**\n\nWe diagnose invisible operational bottlenecks, streamline unit cash flows, and build repeatable, self-operating systems so companies scale without founder firefighting.",
        quickReplies: ["Book a Strategy Call", "The 6 Core Pillars", "Direct WhatsApp Chat"]
      };
    }

    if (q.includes('book') || q.includes('call') || q.includes('contact') || q.includes('consult') || q.includes('meeting')) {
      return {
        text: "You can schedule a direct confidential strategy consultation with our architecture team:\n\n• [**Schedule Strategy Session**](/contact)\n• WhatsApp: Instant messaging channel\n\nWould you like to schedule now?",
        quickReplies: ["Schedule Strategy Session", "Direct WhatsApp Chat"]
      };
    }

    if (q.includes('whatsapp') || q.includes('direct whatsapp chat')) {
      return {
        text: "You can connect directly with our advisory desk on WhatsApp for confidential inquiries:\n\n[**Open WhatsApp Channel**](https://wa.me/?text=Hello%20SCALARK!%20I%20would%20like%20to%20discuss%20our%20business%20systems.)",
        quickReplies: ["Book a Strategy Call", "What does SCALARK do?"]
      };
    }

    if (q.includes('pillar') || q.includes('6 pillars') || q.includes('core pillars')) {
      return {
        text: "SCALARK architects 6 core institutional pillars:\n\n1. **Business Growth Architecture**\n2. **Operations & Workflow Systems**\n3. **Finance & Real-Time Cash Flow**\n4. **Sales & Commercial Engine**\n5. **Technology & Automation**\n6. **Performance & Governance Cadence**",
        quickReplies: ["Book a Strategy Call", "Direct WhatsApp Chat"]
      };
    }

    if (q.includes('pricing') || q.includes('cost') || q.includes('fee')) {
      return {
        text: "Engagements are tailored to your company stage and operational complexity (ranging from 2-week diagnostic audits to 90-day systems implementations).\n\nWe invite you to schedule a confidential 30-minute discovery call to evaluate ROI feasibility.",
        quickReplies: ["Book a Strategy Call", "Direct WhatsApp Chat"]
      };
    }

    if (q.includes('5 phase') || q.includes('process') || q.includes('framework')) {
      return {
        text: "Our 5-Phase Architecture Framework:\n\n• **Phase 01: Diagnose** — Audit root causes\n• **Phase 02: Design** — Codify SOPs and KPI metrics\n• **Phase 03: Implement** — Embed workflows in daily operations\n• **Phase 04: Measure** — Real-time performance dashboards\n• **Phase 05: Scale** — Multi-market regional expansion",
        quickReplies: ["Book a Strategy Call", "Direct WhatsApp Chat"]
      };
    }

    return {
      text: "Thank you for reaching out. SCALARK specializes in identifying operational bottlenecks and engineering systems for predictable growth.\n\nWould you like to schedule a strategy session or connect with us on WhatsApp?",
      quickReplies: ["Book a Strategy Call", "Direct WhatsApp Chat", "What does SCALARK do?"]
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const reply = getSimpleResponse(text);
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: reply.text,
        quickReplies: reply.quickReplies
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 500);
  };

  const handleQuickReply = (reply) => {
    if (reply === 'Schedule Strategy Session' || reply === 'Book a Strategy Call') {
      setIsOpen(false);
      window.location.href = '/contact';
      return;
    }

    if (reply === 'Direct WhatsApp Chat' || reply === 'Open WhatsApp Channel') {
      window.open('https://wa.me/?text=Hello%20SCALARK!%20I%20would%20like%20to%20discuss%20our%20business%20systems.', '_blank');
      return;
    }

    handleSendMessage(reply);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        sender: 'bot',
        text: "Chat cleared. How can SCALARK assist your business systems today?",
        quickReplies: [
          "What does SCALARK do?",
          "Book a Strategy Call",
          "Direct WhatsApp Chat"
        ]
      }
    ]);
  };

  // Helper for simple markdown formatting (bold, links, lists)
  const renderFormattedText = (rawText) => {
    const lines = rawText.split('\n');
    return (
      <div className="space-y-1 text-xs sm:text-[13px] leading-relaxed">
        {lines.map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={i} className="h-1" />;

          // Bullet points
          if (trimmed.startsWith('• ') || trimmed.startsWith('- ')) {
            const content = trimmed.substring(2);
            return (
              <div key={i} className="flex items-start gap-2 pl-1">
                <span className="text-[#70A52E] font-bold">•</span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
              </div>
            );
          }

          // Numbered items
          if (/^\d+\.\s/.test(trimmed)) {
            const num = trimmed.match(/^\d+/)[0];
            const content = trimmed.replace(/^\d+\.\s/, '');
            return (
              <div key={i} className="flex items-start gap-2 pl-1">
                <span className="font-semibold text-zinc-700">{num}.</span>
                <span dangerouslySetInnerHTML={{ __html: formatInline(content) }} />
              </div>
            );
          }

          return <p key={i} dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />;
        })}
      </div>
    );
  };

  const formatInline = (str) => {
    return str
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline font-bold text-[#70A52E] hover:text-[#588523] transition-colors">$1</a>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-zinc-950">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-zinc-600">$1</em>');
  };

  return (
    <>
      {/* 1. CLEAN BRAND GREEN CHAT TRIGGER BUTTON ("OPENING TIME") */}
      <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50 pointer-events-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_10px_35px_rgba(112,165,46,0.4)] active:scale-95 cursor-pointer ${
            isOpen
              ? 'bg-[#1F1F21] text-white border-2 border-white/20 hover:bg-black'
              : 'bg-[#70A52E] text-white hover:bg-[#5f8c27] ring-4 ring-[#70A52E]/20 hover:scale-105'
          }`}
          aria-label="Toggle Chat"
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          ) : (
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-white stroke-[2]" />
          )}
        </button>
      </div>

      {/* 2. CLEAN WHITE & BRAND GREEN CHAT WINDOW ("CHATTING TIME") */}
      {isOpen && (
        <div
          data-lenis-prevent
          className="fixed z-50 inset-x-3 bottom-20 sm:inset-auto sm:bottom-22 sm:right-6 w-auto sm:w-[380px] h-[520px] max-h-[82vh] bg-white border border-zinc-200/90 rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_rgba(0,0,0,0.16)] flex flex-col overflow-hidden text-zinc-900 animate-in fade-in duration-200"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3.5 bg-white border-b border-zinc-100 shrink-0 shadow-xs">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-[#70A52E] flex items-center justify-center shadow-xs">
                <Image
                  src="/logo_white_transparent.png"
                  alt="SCALARK"
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950 tracking-tight">SCALARK Systems</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#70A52E] animate-pulse" />
                  <span className="text-[10px] font-medium text-zinc-500">Online • Advisory Desk</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* SCROLL TO TOP BUTTON IN HEADER */}
              {showScrollTop && (
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 text-[10px] font-mono flex items-center gap-1 transition-all active:scale-95 cursor-pointer mr-1"
                  title="Scroll to Top"
                >
                  <span>Top</span>
                  <ArrowUp className="w-2.5 h-2.5" />
                </button>
              )}

              {/* CLEAR CHAT */}
              <button
                type="button"
                onClick={resetChat}
                className="w-7 h-7 rounded-lg hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
                title="Reset Chat"
                aria-label="Reset Chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MESSAGE STREAM (CLEAN LIGHT BACKGROUND WITH BRAND GREEN USER BUBBLES) */}
          <div
            data-lenis-prevent
            ref={chatScrollRef}
            onScroll={handleChatScroll}
            className="flex-1 overflow-y-auto p-4 space-y-3 relative bg-[#F8FAFC]"
            style={{ overscrollBehavior: 'contain', WebkitOverflowScrolling: 'touch' }}
          >
            {messages.map((msg, idx) => {
              const isBot = msg.sender === 'bot';
              return (
                <div
                  key={msg.id || idx}
                  className={`flex flex-col ${isBot ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 sm:p-3.5 rounded-2xl ${
                      isBot
                        ? 'bg-white border border-zinc-200/80 text-zinc-800 shadow-xs rounded-tl-sm'
                        : 'bg-[#70A52E] text-white font-medium rounded-tr-sm shadow-sm'
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>

                  {/* QUICK REPLY PILLS */}
                  {isBot && msg.quickReplies && msg.quickReplies.length > 0 && idx === messages.length - 1 && !isTyping && (
                    <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                      {msg.quickReplies.map((qr, qIdx) => (
                        <button
                          key={qIdx}
                          type="button"
                          onClick={() => handleQuickReply(qr)}
                          className="px-3 py-1.5 rounded-full bg-white hover:bg-emerald-50/50 border border-zinc-200 hover:border-[#70A52E] text-zinc-700 hover:text-[#70A52E] text-[11px] font-medium transition-all shadow-xs active:scale-95 cursor-pointer flex items-center gap-1.5 group"
                        >
                          <span>{qr}</span>
                          <ChevronRight className="w-3 h-3 text-zinc-400 group-hover:text-[#70A52E]" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white border border-zinc-200 text-zinc-400 w-fit shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#70A52E] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#70A52E] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#70A52E] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            {/* FLOATING TOP BUTTON INSIDE MESSAGE STREAM */}
            {showScrollTop && (
              <button
                type="button"
                onClick={scrollToTop}
                className="sticky bottom-2 ml-auto z-10 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-700 shadow-md text-[11px] font-medium flex items-center gap-1 transition-all active:scale-95 cursor-pointer hover:bg-zinc-50 hover:text-[#70A52E] w-fit"
              >
                <ArrowUp className="w-3 h-3" />
                <span>Top</span>
              </button>
            )}
          </div>

          {/* INPUT FORM */}
          <div className="p-3 bg-white border-t border-zinc-100 shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your inquiry..."
                className="flex-1 bg-[#F1F5F9] border border-zinc-200 focus:border-[#70A52E] focus:bg-white rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#70A52E] transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  inputValue.trim() && !isTyping
                    ? 'bg-[#70A52E] text-white hover:bg-[#5f8c27] active:scale-95 shadow-sm cursor-pointer'
                    : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                }`}
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
