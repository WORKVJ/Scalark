'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  MessageSquare,
  X,
  Send,
  RotateCcw,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function ScalarkChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
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

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
                <span className="text-white/60">•</span>
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
                <span className="font-semibold text-white/80">{num}.</span>
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
      .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="underline font-bold text-white hover:text-zinc-300 transition-colors">$1</a>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-zinc-300">$1</em>');
  };

  return (
    <>
      {/* 1. CLEAN ICON-ONLY CHAT BUTTON (BOTTOM-RIGHT) */}
      <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-50 pointer-events-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-200 shadow-[0_8px_30px_rgba(0,0,0,0.5)] active:scale-95 cursor-pointer ${
            isOpen
              ? 'bg-[#181C26] text-white border border-white/20 hover:bg-[#222736]'
              : 'bg-white text-black hover:bg-zinc-200'
          }`}
          aria-label="Toggle Chat"
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.2]" />
          ) : (
            <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-black stroke-[2]" />
          )}
        </button>
      </div>

      {/* 2. SIMPLE, PROFESSIONAL CHAT WINDOW */}
      {isOpen && (
        <div className="fixed z-50 inset-x-3 bottom-20 sm:inset-auto sm:bottom-22 sm:right-6 w-auto sm:w-[380px] h-[500px] max-h-[80vh] bg-[#0B0E14] border border-white/15 rounded-2xl sm:rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] backdrop-blur-2xl flex flex-col overflow-hidden text-white animate-in fade-in duration-200">
          
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#111622] border-b border-white/10 shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative w-7 h-7 rounded-full bg-white/10 flex items-center justify-center border border-white/15">
                <Image
                  src="/logo_white_transparent.png"
                  alt="SCALARK"
                  width={18}
                  height={18}
                  className="w-4 h-4 object-contain"
                />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">SCALARK Systems</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-[10px] text-zinc-400">Online</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {/* CLEAR CHAT */}
              <button
                onClick={resetChat}
                className="w-7 h-7 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                title="Reset Chat"
                aria-label="Reset Chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              {/* CLOSE BUTTON */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MESSAGE STREAM */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 no-scrollbar">
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
                        ? 'bg-[#151B28] border border-white/10 text-zinc-100 rounded-tl-sm'
                        : 'bg-white text-black font-medium rounded-tr-sm'
                    }`}
                  >
                    {renderFormattedText(msg.text)}
                  </div>

                  {/* QUICK REPLY PILLS */}
                  {isBot && msg.quickReplies && msg.quickReplies.length > 0 && idx === messages.length - 1 && !isTyping && (
                    <div className="flex flex-wrap gap-1.5 mt-2 max-w-[95%]">
                      {msg.quickReplies.map((qr, qIdx) => (
                        <button
                          key={qIdx}
                          onClick={() => handleQuickReply(qr)}
                          className="px-2.5 py-1 rounded-full bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white text-[11px] transition-all active:scale-95 cursor-pointer flex items-center gap-1"
                        >
                          <span>{qr}</span>
                          <ChevronRight className="w-3 h-3 text-zinc-500" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* TYPING INDICATOR */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#151B28] border border-white/10 w-fit text-zinc-400 text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* INPUT FORM */}
          <div className="p-3 bg-[#111622] border-t border-white/10 shrink-0">
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
                className="flex-1 bg-[#07090E] border border-white/15 focus:border-white/40 rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-white placeholder:text-zinc-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  inputValue.trim() && !isTyping
                    ? 'bg-white text-black hover:bg-zinc-200 active:scale-95 shadow-md cursor-pointer'
                    : 'bg-white/10 text-zinc-500 cursor-not-allowed'
                }`}
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
