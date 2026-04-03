"use client";

import { motion } from "motion/react";

export function ChairmanMessage() {
  return (
    <section id="chairman" className="relative py-24 md:py-32 bg-[#0f2a5c] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#d4a843]/5 rounded-full blur-[80px]" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/[0.02] rounded-full blur-[100px]" />
        {/* Large quote mark */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[200px] md:text-[300px] font-cormorant text-white/[0.03] leading-none select-none pointer-events-none">
          &ldquo;
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#d4a843] font-medium mb-6">
            Chairman&apos;s Message
          </span>

          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4a843]/50 to-transparent mx-auto mb-10" />

          <blockquote className="font-cormorant text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-white/90 leading-relaxed font-light italic">
            &ldquo;Traditional education is changing, and Bab Ul Ilm Virtual School is
            leading the way by providing a modern, affordable solution for the
            millions of children in Pakistan who are out of school due to high
            costs or distance. We have removed the barriers of expensive
            classrooms and long commutes, offering a fully online platform where
            students can learn with complete flexibility and revisit recorded
            lectures as many times as needed.&rdquo;
          </blockquote>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="mt-10 flex flex-col items-center"
          >
            {/* Gold line separator */}
            <div className="w-12 h-[2px] bg-gradient-to-r from-[#d4a843] to-[#f0d48a] mb-6" />

            <p className="text-[#d4a843] font-semibold text-lg tracking-wide">
              Tauqeer Ahmed Hanjra
            </p>
            <p className="text-white/50 text-sm font-light mt-1">
              Chairman – Bab Ul Ilm Virtual School
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
