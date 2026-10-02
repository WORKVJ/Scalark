'use client';

import { ChevronsRight, Quote, Shield, X, ArrowUpRight } from 'lucide-react';

export default function AboutModal({ onClose, t }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#061233]/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl rounded-3xl bg-[#081B4E] border-2 border-[#0084FF] p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto text-white">
        <div className="flex items-center justify-between pb-6 border-b border-[#0084FF]/30 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-[#0084FF] flex items-center justify-center text-white font-black">
              <ChevronsRight className="w-5 h-5 stroke-[3]" />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-blue-300 font-bold">
                ORGANISATION & DOCTRINE
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                About SCALARK
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6 text-sm text-blue-100/90 leading-relaxed">
          <div className="p-6 rounded-2xl bg-[#0084FF] text-white shadow-lg">
            <h3 className="text-lg sm:text-xl font-black mb-1">
              Businesses Don't Stagnate Because They Lack Effort.
            </h3>
            <p className="text-blue-100 font-medium text-xs sm:text-sm">
              “Entrepreneurs work hard. Teams work hard. Owners take enormous personal risks. But effort alone cannot replace an institutional system. As a business grows, yesterday's informal habits become today's operational bottlenecks.”
            </p>
          </div>

          <p className="text-blue-100/80 text-sm sm:text-base">
            SCALARK was built to replace ad-hoc founder heroics with institutional systems architecture. From business foundation and accounting to sales pipelines, operations, KPIs, SOPs, and technology infrastructure, we connect each domain so the enterprise operates as a cohesive, predictable organization.
          </p>

          <div className="p-6 rounded-2xl bg-[#061233]/70 border border-[#0084FF]/40 flex items-start space-x-4">
            <Quote className="w-6 h-6 text-blue-400 shrink-0 mt-1" />
            <div>
              <p className="text-white italic text-sm sm:text-base leading-relaxed">
                “Businesses don't need more complexity. They need profound operational clarity. SCALARK is built to help founders understand what is actually happening inside their business, diagnose the true root causes, and build systems that support enduring scale.”
              </p>
              <div className="mt-3 text-xs font-mono text-blue-300 font-bold">
                SCALARK Systems Architecture
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

