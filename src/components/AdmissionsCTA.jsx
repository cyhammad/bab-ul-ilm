"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function AdmissionsCTA() {
  return (
    <section id="admissions" className="relative py-16 md:py-24 bg-[#0f2a4c] overflow-hidden scroll-mt-20 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
          
          {/* Left - Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 rounded border border-white/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#d4a843] animate-[pulse_3s_infinite]" />
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/90">Enrollment Portal</span>
            </div>

            <h2 className="font-cormorant text-[42px] sm:text-[56px] md:text-[64px] font-semibold tracking-tight leading-[1.05] mb-8">
              Enroll Your Child at
              <br />
              <span className="italic text-[#d4a843]">Bab-Ul-Ilm School</span>
            </h2>

            <p className="text-white/70 text-lg font-light leading-relaxed mb-10 max-w-lg">
              Unlock the future of learning for your child. High-quality STEM education
              delivered directly to your home. Registered, certified, and committed
              to academic excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                href="/apply"
                className="inline-flex items-center justify-center h-14 px-10 rounded-xl bg-[#d4a843] hover:bg-[#c49835] text-[#0f2a4c] font-bold tracking-wide transition-all shadow-xl shadow-black/20"
              >
                Start Application
                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5l6 6m0 0l-6 6m6-6H3.75" />
                </svg>
              </Link>
              <Link
                href="/#fees"
                className="inline-flex items-center justify-center h-14 px-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/20 text-white font-bold tracking-wide transition-all"
              >
                View Fees
              </Link>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/20">
              <div className="flex flex-col">
                <span className="text-[#d4a843] text-2xl md:text-3xl font-black italic">PG–8th</span>
                <span className="text-white/40 text-[9px] uppercase tracking-widest font-black mt-1">Grades</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#d4a843] text-2xl md:text-3xl font-black italic">Hybrid</span>
                <span className="text-white/40 text-[9px] uppercase tracking-widest font-black mt-1">Curricula</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#d4a843] text-2xl md:text-3xl font-black italic">24/7</span>
                <span className="text-white/40 text-[9px] uppercase tracking-widest font-black mt-1">Portal</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[#d4a843] text-2xl md:text-3xl font-black italic">V-Edu</span>
                <span className="text-white/40 text-[9px] uppercase tracking-widest font-black mt-1">Status</span>
              </div>
            </div>
          </div>

          {/* Right - Document Requirements */}
          <div>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] relative border border-stone-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a843]/10 rounded-bl-full" />
              
              <h3 className="font-cormorant text-2xl font-bold text-[#0f2a4c] mb-8 border-b border-stone-100 pb-4">Required Documents</h3>
              
              <div className="space-y-4">
                {[
                  { doc: "Student B-Form", desc: "Child birth registration" },
                  { doc: "Previous Result", desc: "Last year academic card" },
                  { doc: "NOC / Transfer", desc: "From current institution" },
                  { doc: "Guardian ID", desc: "Parent CNIC or identification" },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="group bg-[#f8f9fb] p-5 rounded-2xl border border-stone-100 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-black text-[#0f2a4c]">{item.doc}</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-[#d4a843] group-hover:scale-150 transition-transform" />
                    </div>
                    <span className="text-xs text-stone-400 font-medium">{item.desc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-2xl bg-[#0f2a4c]/5 border border-[#0f2a4c]/10 text-center">
                 <p className="text-[11px] text-[#0f2a4c] font-black tracking-widest uppercase">
                    Admissions: <span className="text-[#d4a843]">admin@babulilm.com</span>
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
