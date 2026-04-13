"use client";

import Image from "next/image";
import { motion } from "motion/react";

const edgeItems = [
  { 
    title: "Critical Thinking", 
    desc: "Encouraging students to solve complex problems through scientific inquiry and logical reasoning." 
  },
  { 
    title: "Digital Mastery", 
    desc: "Utilizing a secure, Model-powered LMS and encrypted video hosting for a seamless learning environment." 
  },
  { 
    title: "Character Building", 
    desc: "Ensuring that 'Ilm' (Knowledge) is always paired with 'Adab' (Character) for holistic growth." 
  },
];

export function AboutUs() {
  return (
    <section id="about" className="relative py-16 md:py-24 bg-[#0F2A5C] scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        
        {/* Top: Header + Intro */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-[#d4a843] font-bold mb-4">
            Our Journey & Vision
          </span>
          <h2 className="font-cormorant text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-white tracking-tight leading-tight">
            Pioneering Digital <br />
            <span className="italic text-[#d4a843]">Education in Pakistan</span>
          </h2>
          <div className="w-12 h-[2px] bg-[#d4a843] mx-auto mt-6" />
        </div>

        {/* Middle: Two-column text + image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-white/70 text-base font-light leading-relaxed"
          >
            <p>
              Bab-Ul-Ilm Virtual School is a pioneer in digital education, dedicated to bringing high-quality 
              schooling from the traditional classroom directly to your home. We are a 
              registered and certified institution providing a seamless learning experience for students from PG 
              to 8th Grade and Pre-9th.
            </p>
            <p>
              Education is evolving, and we believe that geographical boundaries or high costs should never 
              stand in the way of a child&apos;s potential. By aligning with the Punjab Board (PECTA) and the 
              international Oxford Syllabus, we ensure that our students meet both local and global academic 
              standards. Our vision is to eliminate the barriers of traditional schooling—making learning more 
              affordable, flexible, and accessible for the next generation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2.png"
                alt="Our Vision"
                fill
                className="object-cover scale-[1.12]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f2a5c]/50 via-transparent to-transparent" />
            </div>
            {/* Small accent card */}
            <div className="absolute -bottom-6 -left-6 w-[140px] h-[140px] rounded-2xl overflow-hidden shadow-xl border-4 border-[#0f2a5c] hidden md:block">
              <Image
                src="/images/3.jpg"
                alt="Students learning"
                fill
                className="object-cover scale-[1.12]"
                sizes="140px"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom: The Edge — 3 columns */}
        <div>
          <h3 className="font-cormorant text-2xl font-bold italic text-[#d4a843] text-center mb-10">
            The Bab-Ul-Ilm Edge
          </h3>
          <div className="grid sm:grid-cols-3 gap-5">
            {edgeItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white/[0.06] border border-white/[0.08] rounded-2xl p-6 hover:bg-white/[0.1] hover:border-[#d4a843]/25 transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-full bg-[#d4a843]/15 text-[#d4a843] flex items-center justify-center font-bold text-xs ring-1 ring-[#d4a843]/20 mb-4">
                  0{i + 1}
                </div>
                <h4 className="text-sm font-bold tracking-widest uppercase text-white mb-2">{item.title}</h4>
                <p className="text-[13px] text-white/40 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
