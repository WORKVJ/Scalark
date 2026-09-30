'use client';

import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, ArrowUpRight, ShieldCheck, ChevronsRight, Lock } from 'lucide-react';
import ScrollReveal from '@/components/common/ScrollReveal';

export default function DiagnosisContactSection({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    businessType: 'SME',
    challenge: 'Operations',
    message: '',
    contactMethod: 'WhatsApp',
    contactValue: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handlePrefillDiagnosis = (e) => {
      const { challenge, symptom, rootCause } = e.detail;
      setFormData((prev) => ({
        ...prev,
        challenge: challenge || prev.challenge,
        message: `[Diagnostic Context]\nSymptom: ${symptom}\nRoot Cause: ${rootCause}\n\nAdditional Notes:`
      }));
    };

    const handlePrefillStage = (e) => {
      setFormData((prev) => ({
        ...prev,
        businessType: e.detail
      }));
    };

    const handlePrefillSolution = (e) => {
      setFormData((prev) => ({
        ...prev,
        challenge: e.detail,
        message: `Inquiring specifically regarding: ${e.detail} architecture.`
      }));
    };

    window.addEventListener('prefill-diagnosis', handlePrefillDiagnosis);
    window.addEventListener('prefill-stage', handlePrefillStage);
    window.addEventListener('prefill-solution', handlePrefillSolution);

    return () => {
      window.removeEventListener('prefill-diagnosis', handlePrefillDiagnosis);
      window.removeEventListener('prefill-stage', handlePrefillStage);
      window.removeEventListener('prefill-solution', handlePrefillSolution);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#0E37A4', '#1D56E8', '#ffffff']
      });
    }, 700);
  };

  return (
    <section id="contact-diagnosis" className="py-12 sm:py-28 px-4 sm:px-6 bg-[#061233] text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* GROWMEDLINK SIGNATURE SPLIT-PILL CTA CARD */}
        <ScrollReveal direction="up" distance={45} duration={850}>
          <div className="rounded-2xl sm:rounded-[40px] md:rounded-[60px] overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.5)] border-2 sm:border-4 border-[#0E37A4]/50 grid grid-cols-1 lg:grid-cols-12 card-sheen">
          
          {/* LEFT HALF: ROYAL BLUE BANNER */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0E37A4] to-[#081B4E] p-5 sm:p-10 md:p-14 text-white flex flex-col justify-between space-y-6 sm:space-y-8 relative overflow-hidden">
            
            {/* Subtle dot overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

            <div className="space-y-3 sm:space-y-4 relative z-10">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center text-[#0E37A4] shadow-xl">
                <ChevronsRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[3]" />
              </div>

              <span className="text-[10px] sm:text-xs font-mono font-black uppercase tracking-widest text-white bg-white/20 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full inline-block">
                DIRECT ADVISORY DESK
              </span>

              <h2 className="text-2xl sm:text-5xl font-black tracking-tight leading-tight">
                Ready to Fix Your Business System?
              </h2>

              <p className="text-xs sm:text-base font-semibold text-blue-100/90 leading-relaxed">
                Schedule a confidential 1-on-1 operational diagnosis with a senior SCALARK systems architect.
              </p>
            </div>

            <div className="space-y-2.5 sm:space-y-3 pt-5 sm:pt-6 border-t border-white/20 relative z-10">
              <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-black text-white">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 stroke-[3]" />
                <span>Zero-obligation initial root-cause review</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-black text-white">
                <ShieldCheck className="w-4 h-4 text-white shrink-0 stroke-[3]" />
                <span>Strict Non-Disclosure Agreement (NDA)</span>
              </div>
              <div className="flex items-center gap-2.5 text-[11px] sm:text-xs font-black text-white">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0 stroke-[3]" />
                <span>Direct senior partner engagement</span>
              </div>
            </div>
          </div>

          {/* RIGHT HALF: ROYAL NAVY FORM */}
          <div className="lg:col-span-7 bg-[#081B4E] p-5 sm:p-10 md:p-14 text-white">
            {submitted ? (
              <div className="text-center py-10 sm:py-12 space-y-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0E37A4]/30 border-2 border-[#0E37A4] text-white flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(14,55,164,0.5)]">
                  <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl sm:text-3xl font-black text-white">
                  Diagnosis Request Received
                </h3>
                <p className="text-blue-100/80 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white font-black">{formData.name || 'Partner'}</strong>. A senior SCALARK systems architect will review your operational context and reach out via <span className="text-blue-200 font-black">{formData.contactMethod}</span> within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 text-xs font-black uppercase tracking-wider text-white transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-blue-200/80">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 rounded-xl sm:rounded-2xl bg-[#061233]/70 border border-[#0E37A4]/30 text-white placeholder-blue-200/40 focus:outline-none focus:border-[#0E37A4] focus:ring-2 focus:ring-[#0E37A4]/30 transition-all text-base sm:text-sm font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-blue-200/80">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full px-4 py-3 rounded-xl sm:rounded-2xl bg-[#061233]/70 border border-[#0E37A4]/30 text-white placeholder-blue-200/40 focus:outline-none focus:border-[#0E37A4] focus:ring-2 focus:ring-[#0E37A4]/30 transition-all text-base sm:text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-blue-200/80">
                      Country / Location *
                    </label>
                    <input
                      type="text"
                      required
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="e.g. UAE, UK, Singapore, India..."
                      className="w-full px-4 py-3 rounded-xl sm:rounded-2xl bg-[#061233]/70 border border-[#0E37A4]/30 text-white placeholder-blue-200/40 focus:outline-none focus:border-[#0E37A4] focus:ring-2 focus:ring-[#0E37A4]/30 transition-all text-base sm:text-sm font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-blue-200/80">
                      Business Stage
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl sm:rounded-2xl bg-[#061233]/70 border border-[#0E37A4]/30 text-white focus:outline-none focus:border-[#0E37A4] transition-colors text-base sm:text-sm font-medium"
                    >
                      <option value="Startup">Early-Stage Startup</option>
                      <option value="Growing Business">Rapid Growth Business</option>
                      <option value="SME">Established SME</option>
                      <option value="MSME">MSME</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-blue-200/80">
                    Primary Operational Bottleneck
                  </label>
                  <select
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl sm:rounded-2xl bg-[#061233]/70 border border-[#0E37A4]/30 text-white focus:outline-none focus:border-[#0E37A4] transition-colors text-base sm:text-sm font-medium"
                  >
                    <option value="Operations">Operations & Owner Bottlenecks (SOPs)</option>
                    <option value="Sales">Sales Pipeline & Unpredictable Revenue</option>
                    <option value="Finance">Finance, Cash Flow & Unit Economics</option>
                    <option value="Employees">Employee Accountability & KPIs</option>
                    <option value="Technology">Technology & Software Architecture</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 items-end">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-blue-200/80">
                      Preferred Channel
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {['WhatsApp', 'Email', 'Phone'].map((method) => (
                        <button
                          type="button"
                          key={method}
                          onClick={() => setFormData({ ...formData, contactMethod: method })}
                          className={`py-2.5 rounded-xl text-xs font-black border transition-all ${
                            formData.contactMethod === method
                              ? 'bg-[#0E37A4] text-white border-[#0E37A4] shadow-md'
                              : 'bg-[#061233]/70 text-blue-200 border-[#0E37A4]/30 hover:text-white'
                          }`}
                        >
                          {method}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] sm:text-xs font-black uppercase tracking-wider text-blue-200/80">
                      {formData.contactMethod} Detail *
                    </label>
                    <input
                      type="text"
                      required
                      name="contactValue"
                      value={formData.contactValue}
                      onChange={handleChange}
                      placeholder={
                        formData.contactMethod === 'Email'
                          ? 'founder@company.com'
                          : '+971 50 ... / +91 ...'
                      }
                      className="w-full px-4 py-3 rounded-xl sm:rounded-2xl bg-[#061233]/70 border border-[#0E37A4]/30 text-white placeholder-blue-200/40 focus:outline-none focus:border-[#0E37A4] focus:ring-2 focus:ring-[#0E37A4]/30 transition-all text-base sm:text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 sm:py-4 bg-[#0E37A4] hover:bg-[#0A2A7E] text-white font-black uppercase text-xs tracking-wider rounded-full transition-all duration-200 shadow-[0_10px_30px_rgba(14,55,164,0.45)] active:scale-[0.99] flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{submitting ? 'Transmitting Request...' : 'Book Operational Diagnosis'}</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

