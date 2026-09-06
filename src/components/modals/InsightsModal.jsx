'use client';

import { useState } from 'react';
import { INSIGHTS_ARTICLES } from '@/data/contentData';
import { soundFx } from '@/utils/sound';
import { BookOpen, Clock, X } from 'lucide-react';

export default function InsightsModal({ onClose }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl rounded-3xl bg-slate-900 border border-white/20 p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-white font-semibold">
              RESEARCH & SYSTEMIC ESSAYS
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              SCALARK Insights
            </h2>
          </div>
          <button
            onClick={() => {
              soundFx.playClick();
              onClose();
            }}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {selectedArticle ? (
          <div className="space-y-4">
            <button
              onClick={() => setSelectedArticle(null)}
              className="text-xs text-white font-mono hover:underline mb-2 block"
            >
              ← Back to all articles
            </button>
            <span className="text-xs font-mono text-white px-2 py-0.5 rounded bg-zinc-200/10">
              {selectedArticle.category} • {selectedArticle.readTime}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {selectedArticle.title}
            </h3>
            <p className="text-white font-medium text-sm">
              {selectedArticle.summary}
            </p>
            <div className="prose prose-invert text-slate-300 text-sm leading-relaxed pt-4 border-t border-white/10">
              {selectedArticle.content}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {INSIGHTS_ARTICLES.map((art) => (
              <div
                key={art.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedArticle(art);
                }}
                className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-zinc-200/40 cursor-pointer transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-white mb-2">
                    <span>{art.category}</span>
                    <span className="text-slate-500">{art.readTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-white group-hover:text-white transition-colors mb-2">
                    {art.title}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2">{art.summary}</p>
                </div>
                <div className="mt-4 text-xs font-semibold text-white group-hover:underline">
                  Read Essay →
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

