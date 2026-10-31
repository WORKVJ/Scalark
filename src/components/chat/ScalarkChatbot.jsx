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
import { useLanguage } from '@/context/LanguageContext';

export default function ScalarkChatbot() {
  const { currentLang, t, isRtl } = useLanguage();
  const cb = t.chatbot;

  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const getInitialWelcome = () => [
    {
      id: 'welcome',
      sender: 'bot',
      text: cb.welcome,
      quickReplies: cb.quickReplies
    }
  ];

  const [messages, setMessages] = useState(getInitialWelcome);

  // When language changes, update initial welcome if only welcome message exists
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length <= 1) {
        return getInitialWelcome();
      }
      return prev;
    });
  }, [currentLang]);

  const chatScrollRef = useRef(null);
  const inputRef = useRef(null);

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

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  const getSimpleResponse = (query) => {
    const q = query.toLowerCase();

    if (currentLang === 'AR') {
      if (q.includes('ماذا تقدم') || q.includes('من أنتم') || q.includes('خدمات') || q.includes('سكالارك')) {
        return {
          text: "**سكالارك هي منصة استشارية متخصصة في هندسة نظم الأعمال.**\n\nنقوم بتشخيص الاختناقات التشغيلية الخفية، وضبط التدفق النقدي، وبناء إجراءات قياسية (SOPs) ونظم ذاتية التشغيل لتوسيع الأعمال دون ارتهان العمل بالمؤسس.",
          quickReplies: ["احجز جلسة استراتيجية", "الركائز الأساسية الـ 4", "محادثة مباشرة عبر واتساب"]
        };
      }

      if (q.includes('احجز') || q.includes('مكالمة') || q.includes('استشارة') || q.includes('تواصل')) {
        return {
          text: "يمكنك حجز جلسة تشخيص سرية ومباشرة مع كبار مهندسي النظم لدينا:\n\n• [**حجز موعد استشاري**](/contact)\n• محادثة واتساب المباشرة\n\nهل ترغب في تحديد الموعد الآن؟",
          quickReplies: ["احجز جلسة استراتيجية", "محادثة مباشرة عبر واتساب"]
        };
      }

      if (q.includes('واتساب') || q.includes('whatsapp')) {
        return {
          text: "يمكنك التواصل المباشر مع مكتب الاستشارات عبر واتساب للاستفسارات السرية السريعة:\n\n[**فتح محادثة واتساب**](https://wa.me/?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%B3%D9%83%D8%A7%D9%84%D8%A7%D8%B1%D9%83%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9%20%D8%AA%D8%B7%D9%88%D9%8A%D8%B1%20%D8%A3%D9%86%D8%B8%D9%85%D8%A9%20%D8%B9%D9%85%D9%84%D9%86%D8%A7.)",
          quickReplies: ["احجز جلسة استراتيجية", "ماذا تقدم سكالارك؟"]
        };
      }

      if (q.includes('ركائز') || q.includes('4') || q.includes('محاور') || q.includes('أعمدة')) {
        return {
          text: "تهندس سكالارك 4 ركائز مؤسسية استراتيجية:\n\n1. **العمليات والإنتاجية** (إجراءات SOPs، إيقاع التفويض)\n2. **محرك المبيعات والإيرادات** (توقع الإيرادات، مسارات B2B)\n3. **المالية والتدفق النقدي** (اقتصاديات الوحدة، حماية الهوامش)\n4. **الكادر البشري والحوكمة** (مؤشرات الأداء KPIs، استقلالية المؤسس)",
          quickReplies: ["احجز جلسة استراتيجية", "محادثة مباشرة عبر واتساب"]
        };
      }

      if (q.includes('سعر') || q.includes('تكلفة') || q.includes('أتعاب')) {
        return {
          text: "تُصمم المشاريع وفقاً لمرحلة العمل والتعقيد التشغيلي (من تدقيق تشخيصي مدته أسبوعان إلى تطبيق كامل للأنظمة خلال 90 يوماً).\n\nندعوك لحجز جلسة استكشافية سرية مدتها 30 دقيقة لتقييم الجدوى والعائد الاستثماري المتوقع.",
          quickReplies: ["احجز جلسة استراتيجية", "محادثة مباشرة عبر واتساب"]
        };
      }

      return {
        text: "شكراً لتواصلك مع سكالارك. نحن متخصصون في كشف الاختناقات التشغيلية وبناء أنظمة مؤسسية قابلة للتوسع.\n\nهل ترغب في حجز جلسة استراتيجية أو التواصل معنا مباشرة عبر واتساب؟",
        quickReplies: ["احجز جلسة استراتيجية", "محادثة مباشرة عبر واتساب", "ماذا تقدم سكالارك؟"]
      };
    }

    // Default English Responses
    if (q.includes('what does scalark do') || q.includes('about') || q.includes('service') || q.includes('who are you')) {
      return {
        text: "**SCALARK is a Business Systems Architecture Platform.**\n\nWe diagnose invisible operational bottlenecks, streamline unit cash flows, and build repeatable, self-operating systems so companies scale without founder firefighting.",
        quickReplies: ["Book a Strategy Call", "The 4 Core Pillars", "Direct WhatsApp Chat"]
      };
    }

    if (q.includes('book') || q.includes('call') || q.includes('contact') || q.includes('consult') || q.includes('meeting')) {
      return {
        text: "You can schedule a direct confidential strategy consultation with our architecture team:\n\n• [**Schedule Strategy Session**](/contact)\n• WhatsApp: Instant messaging channel\n\nWould you like to schedule now?",
        quickReplies: ["Book a Strategy Call", "Direct WhatsApp Chat"]
      };
    }

    if (q.includes('whatsapp') || q.includes('direct whatsapp chat')) {
      return {
        text: "You can connect directly with our advisory desk on WhatsApp for confidential inquiries:\n\n[**Open WhatsApp Channel**](https://wa.me/?text=Hello%20SCALARK!%20I%20would%20like%20to%20discuss%20our%20business%20systems.)",
        quickReplies: ["Book a Strategy Call", "What does SCALARK do?"]
      };
    }

    if (q.includes('pillar') || q.includes('4 pillars') || q.includes('core pillars') || q.includes('6 pillars')) {
      return {
        text: "SCALARK architects 4 core institutional pillars:\n\n1. **Operations & Workflow Systems** (SOPs & Bottleneck Eradication)\n2. **Sales & Commercial Engine** (Predictable Pipeline & B2B Funnels)\n3. **Finance & Real-Time Cash Flow** (Unit Economics & Margin Control)\n4. **People & Governance Cadence** (KPI Scorecards & Delegation)",
        quickReplies: ["Book a Strategy Call", "Direct WhatsApp Chat"]
      };
    }

    if (q.includes('pricing') || q.includes('cost') || q.includes('fee')) {
      return {
        text: "Engagements are tailored to your company stage and operational complexity (ranging from 2-week diagnostic audits to 90-day systems implementations).\n\nWe invite you to schedule a confidential 30-minute discovery call to evaluate ROI feasibility.",
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
    if (
      reply === 'Schedule Strategy Session' ||
      reply === 'Book a Strategy Call' ||
      reply === 'احجز جلسة استراتيجية'
    ) {
      setIsOpen(false);
      window.location.href = '/contact';
      return;
    }

    if (
      reply === 'Direct WhatsApp Chat' ||
      reply === 'Open WhatsApp Channel' ||
      reply === 'محادثة مباشرة عبر واتساب' ||
      reply === 'فتح محادثة واتساب'
    ) {
      window.open(
        'https://wa.me/?text=Hello%20SCALARK!%20I%20would%20like%20to%20discuss%20our%20business%20systems.',
        '_blank'
      );
      return;
    }

    handleSendMessage(reply);
  };

  const resetChat = () => {
    setMessages(getInitialWelcome());
  };

  const renderFormattedText = (rawText) => {
    const lines = rawText.split('\n');
    return (
      <div className="space-y-1 text-xs sm:text-[13px] leading-relaxed text-start">
        {lines.map((line, i) => {
          const trimmed = line.trim();
          if (!trimmed) return <div key={i} className="h-1" />;

          const parts = line.split(/(\*\*.*?\*\*|\[.*?\]\(.*?\))/g);
          return (
            <div key={i}>
              {parts.map((part, pIdx) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                  return (
                    <strong key={pIdx} className="font-bold text-zinc-950">
                      {part.slice(2, -2)}
                    </strong>
                  );
                }
                const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
                if (linkMatch) {
                  const [, linkText, linkUrl] = linkMatch;
                  return (
                    <a
                      key={pIdx}
                      href={linkUrl}
                      target={linkUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="text-[#0084FF] underline font-bold hover:text-[#0070E0] inline-flex items-center gap-0.5"
                    >
                      <span>{linkText.replace(/\*\*/g, '')}</span>
                      {linkUrl.startsWith('http') && <ExternalLink className="w-3 h-3 inline" />}
                    </a>
                  );
                }
                return <span key={pIdx}>{part}</span>;
              })}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      {/* FLOATING CHAT LAUNCHER BUTTON */}
      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 rtl:right-auto rtl:left-5 rtl:sm:left-8 z-40 select-none">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#081B4E] border border-[#0084FF]/40 text-white flex items-center justify-center shadow-[0_10px_35px_rgba(4,14,46,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          aria-label={isOpen ? cb.closeTooltip : cb.title}
        >
          {isOpen ? (
            <X className="w-6 h-6 stroke-[2.5]" />
          ) : (
            <>
              <MessageSquare className="w-6 h-6 stroke-[2.2] group-hover:scale-110 transition-transform text-[#0084FF]" />
              <span className="absolute -top-0.5 -right-0.5 rtl:-right-auto rtl:-left-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-[#081B4E] animate-pulse" />
            </>
          )}
        </button>
      </div>

      {/* CHAT WINDOW MODAL */}
      {isOpen && (
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-8 rtl:right-auto rtl:left-4 rtl:sm:left-8 w-[calc(100vw-32px)] sm:w-[380px] md:w-[410px] h-[520px] max-h-[82vh] bg-white rounded-2xl sm:rounded-3xl border border-zinc-200/90 shadow-2xl flex flex-col overflow-hidden z-50 animate-fadeIn select-none"
        >
          {/* HEADER */}
          <div className="p-3.5 sm:p-4 bg-white border-b border-zinc-100 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full bg-[#081B4E] border border-[#0084FF]/30 flex items-center justify-center">
                <Image
                  src="/logo_white_transparent.png"
                  alt="SCALARK"
                  width={22}
                  height={22}
                  className="w-5 h-5 object-contain"
                />
              </div>
              <div className="text-start">
                <h3 className="text-xs sm:text-sm font-bold text-zinc-950 font-sans tracking-tight">
                  {cb.title}
                </h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#70A52E] animate-pulse" />
                  <span className="text-[10px] font-medium text-zinc-500">{cb.status}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {showScrollTop && (
                <button
                  type="button"
                  onClick={scrollToTop}
                  className="px-2.5 py-1 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 hover:text-zinc-950 text-[10px] font-mono flex items-center gap-1 transition-all active:scale-95 cursor-pointer mr-1"
                  title={cb.scrollTopTooltip}
                >
                  <span>{isRtl ? 'الأعلى' : 'Top'}</span>
                  <ArrowUp className="w-2.5 h-2.5" />
                </button>
              )}

              <button
                type="button"
                onClick={resetChat}
                className="w-7 h-7 rounded-lg hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
                title={cb.resetTooltip}
                aria-label="Reset Chat"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-7 h-7 rounded-lg hover:bg-zinc-100 text-zinc-400 hover:text-zinc-700 flex items-center justify-center transition-colors cursor-pointer"
                title={cb.closeTooltip}
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* MESSAGE STREAM */}
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
                        ? 'bg-white border border-zinc-200/80 text-zinc-800 shadow-xs rounded-tl-sm rtl:rounded-tl-2xl rtl:rounded-tr-sm'
                        : 'bg-[#0084FF] text-white font-medium rounded-tr-sm rtl:rounded-tr-2xl rtl:rounded-tl-sm shadow-sm'
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
                          className="px-3 py-1.5 rounded-full bg-white hover:bg-blue-50/50 border border-zinc-200 hover:border-[#0084FF] text-zinc-700 hover:text-[#0084FF] text-[11px] font-medium transition-all shadow-xs active:scale-95 cursor-pointer flex items-center gap-1.5 group"
                        >
                          <span>{qr}</span>
                          <ChevronRight className="w-3 h-3 text-zinc-400 group-hover:text-[#0084FF] rtl:rotate-180" />
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0084FF] animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            )}

            {/* FLOATING TOP BUTTON */}
            {showScrollTop && (
              <button
                type="button"
                onClick={scrollToTop}
                className="sticky bottom-2 ml-auto rtl:ml-0 rtl:mr-auto z-10 px-3 py-1.5 rounded-full bg-white border border-zinc-200 text-zinc-700 shadow-md text-[11px] font-medium flex items-center gap-1 transition-all active:scale-95 cursor-pointer hover:bg-zinc-50 hover:text-[#0084FF] w-fit"
              >
                <ArrowUp className="w-3 h-3" />
                <span>{isRtl ? 'الأعلى' : 'Top'}</span>
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
                placeholder={cb.placeholder}
                className="flex-1 bg-[#F1F5F9] border border-zinc-200 focus:border-[#0084FF] focus:bg-white rounded-xl px-3.5 py-2.5 text-base sm:text-xs text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-[#0084FF] transition-all text-start"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isTyping}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all shrink-0 ${
                  inputValue.trim() && !isTyping
                    ? 'bg-[#0084FF] text-white hover:bg-[#0070E0] active:scale-95 shadow-sm cursor-pointer'
                    : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'
                }`}
                aria-label="Send"
              >
                <Send className="w-3.5 h-3.5 text-white rtl:rotate-180" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
