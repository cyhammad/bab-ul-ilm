"use client";

import { motion } from "motion/react";

export function AdmissionsCTA() {
  return (
    <section id="admissions" className="relative py-24 md:py-32 bg-[#faf8f5] overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#d4a843]/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#d4a843] font-medium mb-4">
            Admissions Open
          </span>
          <h2 className="font-cormorant text-[32px] sm:text-[42px] md:text-[52px] font-semibold text-[#0f2a5c] tracking-tight leading-tight mb-6">
            Begin Your Child&apos;s Journey
          </h2>
          <p className="mx-auto max-w-2xl text-stone-500 text-base sm:text-lg font-light leading-relaxed mb-10">
            World-class schooling, right at your home. Registered, certified, and
            committed to excellence. We deliver high-quality education designed to
            help your child excel in the digital age.
          </p>

          {/* Required Documents */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
            {["B-Form", "Previous Result", "NOC (if required)", "CNIC"].map(
              (doc, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.05 * i }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#0f2a5c]/10 bg-white px-4 py-2 text-sm text-[#0f2a5c] shadow-sm"
                >
                  <svg className="w-3.5 h-3.5 text-[#d4a843]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {doc}
                </motion.span>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group h-14 w-full sm:w-auto rounded-full bg-gradient-to-r from-[#d4a843] to-[#c49835] px-10 text-base font-semibold tracking-wide text-[#0f2a5c] shadow-lg shadow-[#d4a843]/20 flex items-center justify-center gap-2 transition-shadow hover:shadow-xl hover:shadow-[#d4a843]/30"
            >
              Apply for Admission
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-14 w-full sm:w-auto rounded-full border-2 border-[#0f2a5c]/15 bg-white px-10 text-base tracking-wide text-[#0f2a5c] flex items-center justify-center gap-2 transition-all hover:border-[#0f2a5c]/30"
            >
              Pay Now
            </motion.a>
          </div>

          {/* Curriculum Tags */}
          <div className="mt-12 flex flex-wrap justify-center gap-2">
            {["Punjab (PECTA)", "Oxford", "Combined"].map((curr, i) => (
              <span
                key={i}
                className="text-xs tracking-wide px-3 py-1.5 rounded-full bg-[#0f2a5c]/[0.04] text-[#0f2a5c]/70"
              >
                {curr}
              </span>
            ))}
            {["Morning Session", "Evening Session"].map((time, i) => (
              <span
                key={i}
                className="text-xs tracking-wide px-3 py-1.5 rounded-full bg-[#d4a843]/[0.08] text-[#d4a843]"
              >
                {time}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
