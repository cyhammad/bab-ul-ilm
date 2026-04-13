"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function ChairmanMessage() {
  return (
    <section id="chairman" className="relative py-24 md:py-32 bg-white scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/3"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group">
              <Image
                src="/images/3.png"
                alt="Tauqeer Ahmed Hanjra - Chairman"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a5c]/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#d4a843] font-bold mb-6">
              Leadership Perspective
            </span>
            <h2 className="font-cormorant text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-[#0f2a5c] tracking-tight leading-tight mb-8">
              Chairman Message
            </h2>
            
            <div className="space-y-6 text-stone-500 text-lg font-light leading-relaxed">
              <p className="text-balanced">
                Traditional education is changing, and Bab Ul Ilm Virtual School is leading the way by providing a modern, 
                affordable solution for the millions of children in Pakistan who are out of school due to high costs or 
                distance.
              </p>
              <p className="text-balanced">
                We have removed the barriers of expensive classrooms and long commutes, offering a fully 
                online platform where students can learn with complete flexibility and revisit recorded lectures as many 
                times as needed.
              </p>
              <p className="text-balanced">
                Our mission is to transform quality education into a necessity that is accessible to 
                everyone, focusing on the critical thinking and complex communication skills required for the modern digital 
                workforce.
              </p>
            </div>

            <div className="mt-12">
              <div className="font-cormorant text-2xl font-bold text-[#0f2a5c] tracking-tight">Tauqeer Ahmed Hanjra</div>
              <div className="text-[#d4a843] text-xs uppercase tracking-widest font-black mt-1">Chairman — Bab Ul Ilm Virtual School</div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a843]/[0.03] rounded-full blur-[100px] -z-10" />
    </section>
  );
}
