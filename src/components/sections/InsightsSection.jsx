'use client';

import { useState } from 'react';
import { INSIGHTS_ARTICLES } from '@/data/contentData';
import { soundFx } from '@/utils/sound';
import { ArrowRight, Clock, X } from 'lucide-react';

export default function InsightsSection() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sales & Revenue', 'Operations', 'Finance', 'Technology', 'Performance', 'Crisis Management'];

  const filteredArticles = selectedCategory === 'All'
    ? INSIGHTS_ARTICLES
    : INSIGHTS_ARTICLES.filter((a) => a.category === selectedCategory);

  const openArticle = (art) => {
    soundFx.playClick();
    setActiveArticle(art);
  };

  const closeArticle = () => {
    soundFx.playClick();
    setActiveArticle(null);
  };

  return (
    <section id="insights" className="py-28 md:py-36 px-6 bg-[#061233] border-t border-[#0E37A4]/25">
      <div className="max-w-7xl mx-auto">
        {/* HEADER (NATYA STYLE) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs md:text-sm font-semibold tracking-widest uppercase text-blue-300 mb-4 block font-mono">
            SECTION 17 — EXECUTIVE INSIGHTS
          </span>
          <h3 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6">
            Better Businesses Start
            <br />
            <span className="text-[#0E37A4]">With Better Thinking.</span>
          </h3>
          <p className="text-base sm:text-xl text-blue-100/80 font-normal leading-relaxed">
            Not a generic company blog. Practical analyses solving the real structural friction that growing businesses confront every day.
          </p>
        </div>

        {/* CATEGORY SELECTOR PILLS */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                soundFx.playClick();
                setSelectedCategory(cat);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all ${
                selectedCategory === cat
                  ? 'bg-[#0E37A4] text-white shadow-lg shadow-[#0E37A4]/40 scale-105 border border-[#0E37A4]'
                  : 'bg-[#081B4E]/60 text-blue-200 hover:text-white border border-[#0E37A4]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ARTICLES GRID (NATYA CARD FORMAT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              onClick={() => openArticle(art)}
              onMouseEnter={() => soundFx.playHover()}
              className="p-8 rounded-[2rem] bg-gradient-to-br from-[#091E58] to-[#061233] border border-[#0E37A4]/35 shadow-2xl flex flex-col justify-between hover:border-[#0E37A4] transition-all duration-500 cursor-pointer hover:-translate-y-1 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-blue-200 px-3 py-1 rounded-full bg-[#0E37A4]/25 border border-[#0E37A4]/40">
                    {art.category}
                  </span>
                  <span className="text-xs text-blue-200/60 font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {art.readTime}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-white group-hover:text-white transition-colors mb-3 leading-snug">
                  {art.title}
                </h4>

                <p className="text-sm text-blue-100/70 leading-relaxed font-normal mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[#0E37A4]/20 flex items-center justify-between text-xs text-zinc-300 font-medium group-hover:text-white">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARTICLE READER MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#061233]/90 backdrop-blur-2xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-[2.5rem] bg-[#081B4E] border border-[#0E37A4]/50 p-8 sm:p-12 shadow-2xl max-h-[85vh] overflow-y-auto">
            <button
              onClick={closeArticle}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-200 px-3 py-1 rounded-full bg-[#0E37A4]/25 border border-[#0E37A4]/40">
                {activeArticle.category} • {activeArticle.readTime}
              </span>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                {activeArticle.title}
              </h3>

              <div className="p-4 rounded-2xl bg-[#061233] border border-[#0E37A4]/30 text-xs text-blue-100 italic">
                "{activeArticle.summary}"
              </div>

              <div className="text-sm text-zinc-300 leading-relaxed space-y-4 pt-2 font-normal">
                <p>{activeArticle.content}</p>
                <p className="text-zinc-400">
                  Building structured, repeatable processes ensures that knowledge is institutionalized across the organization rather than bottlenecked in individual memory or founder intuition.
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-end">
                <button
                  onClick={closeArticle}
                  className="px-6 py-2.5 rounded-full bg-[#0E37A4] hover:bg-[#0A2A7E] text-white font-semibold text-xs uppercase tracking-wider transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

