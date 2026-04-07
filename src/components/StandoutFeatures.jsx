"use client";

import { motion } from "motion/react";

const standoutItems = [
  "Expert faculty with sound qualification and teaching experience",
  "Carefully designed study plans supported by frequent assessments",
  "Regular academic and career counseling to support student growth",
  "Emphasis on strengthening core concepts for long-term understanding",
  "Timely and thorough coverage of the complete syllabus",
  "A balanced mix of guided instruction and independent home study",
  "Enriching co-curricular activities that promote holistic development",
];

export function StandoutFeatures() {
  return (
    <section id="standout" className="relative py-24 md:py-32 bg-white overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          <div className="lg:w-1/2">
            <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-[#d4a843] font-bold mb-6">
              The Bab-Ul-Ilm Advantage
            </span>
            <h2 className="font-cormorant text-[42px] sm:text-[52px] md:text-[60px] font-semibold text-[#0f2a5c] tracking-tight leading-[1.1] mb-8">
              Why We Are <br />
              <span className="italic text-[#d4a843]">Standout Specialists</span>
            </h2>
            <p className="text-stone-500 text-lg font-light leading-relaxed mb-10 max-w-lg">
              Our commitment to excellence goes beyond standard curricula. We focus 
              on the holistic growth of students in a high-tech virtual environment.
            </p>
            <div className="h-1 lg:w-48 bg-[#d4a843]/10 rounded-full" />
          </div>

          <div className="lg:w-1/2">
            <div className="grid gap-1.5">
              {standoutItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-stone-100 bg-[#F8FAFC]/50 hover:bg-white hover:border-[#d4a843]/20 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-5 h-5 rounded-full bg-[#0f2a5c] flex items-center justify-center shrink-0 group-hover:bg-[#d4a843] transition-colors">
                    <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-[14px] font-medium text-[#0f2a5c] leading-snug">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
         <div className="absolute top-20 left-10 w-96 h-96 bg-[#d4a843]/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0f2a5c]/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
}
