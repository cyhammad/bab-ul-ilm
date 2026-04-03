"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center pt-28 pb-20 md:pt-36 lg:pt-40 overflow-hidden bg-[#FDFCFB]">
      {/* Subtle Background Textures */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-[#EFEDEB] to-transparent" />
        <div 
          className="absolute inset-0 opacity-[0.02]" 
          style={{ 
            backgroundImage: `radial-gradient(#0F2A5C 0.5px, transparent 0.5px)`, 
            backgroundSize: '24px 24px' 
          }} 
        />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        className="relative z-10 w-full max-w-5xl px-6 text-center"
      >
        {/* Elegant Badge */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
          }}
          className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full border border-[#0F2A5C]/10 bg-white/50 backdrop-blur-sm shadow-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#D4A843]" />
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#0F2A5C]/70">
            Pakistan&apos;s Leading Virtual Campus
          </span>
        </motion.div>

        {/* Premium Typography */}
        <motion.h1
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
          }}
          className="font-cormorant text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-light text-[#0F2A5C] leading-[0.95] tracking-[-0.02em]"
        >
          Elevating Education.
          <br />
          <span className="italic font-medium text-[#D4A843]">Redefining</span> Excellence.
        </motion.h1>

        <motion.p
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
          }}
          className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-stone-600 font-light leading-relaxed font-sans"
        >
          Providing high-quality STEM-integrated schooling from Nursery to Pre-9th, 
          bridging the gap between traditional wisdom and digital innovation.
        </motion.p>

        {/* Refined CTAs */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.4 } }
          }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button className="group relative h-14 w-full sm:w-auto px-10 rounded-full bg-[#0F2A5C] text-white text-[15px] font-medium transition-all hover:bg-[#1a3f7a] hover:shadow-2xl hover:shadow-[#0F2A5C]/20 active:scale-95">
            Begin Journey
          </button>
          <button className="h-14 w-full sm:w-auto px-10 rounded-full border border-[#0F2A5C]/15 text-[#0F2A5C] text-[15px] font-medium transition-all hover:bg-stone-50 active:scale-95">
            Explore Faculty
          </button>
        </motion.div>
      </motion.div>

      {/* Hero Image Showcase - Staggered layout */}
      <div className="relative mt-20 md:mt-28 w-full max-w-7xl px-4 flex justify-center perspective-1000">
        <div className="flex items-end justify-center gap-4 sm:gap-6 md:gap-10">
          
          {/* Side Image Left */}
          <motion.div
            initial={{ y: 200, opacity: 0, rotateY: 10 }}
            animate={{ y: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-[120px] sm:w-[180px] md:w-[240px] lg:w-[300px] mb-12 sm:mb-20 md:mb-24"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 transform -rotate-2">
              <Image
                src="/images/2.jpg"
                alt="Student 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
            </div>
          </motion.div>

          {/* Central Prominent Image */}
          <motion.div
            initial={{ y: 250, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="z-20 w-[180px] sm:w-[260px] md:w-[340px] lg:w-[420px]"
          >
            <div className="aspect-[1/1.2] relative overflow-hidden rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] ring-1 ring-black/10">
              <Image
                src="/images/1.png"
                alt="Main Student"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 300px, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A5C]/40 to-transparent" />
              
              {/* Floating Element over Image */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hidden md:block">
                <p className="text-white text-xs font-light tracking-wide italic">
                  &ldquo;Nurturing minds through STEM and character.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Side Image Right */}
          <motion.div
            initial={{ y: 200, opacity: 0, rotateY: -10 }}
            animate={{ y: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="w-[120px] sm:w-[180px] md:w-[240px] lg:w-[300px] mb-8 sm:mb-14 md:mb-16"
          >
            <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/5 transform rotate-2">
              <Image
                src="/images/3.jpg"
                alt="Student 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 150px, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-[#0F2A5C]/40 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#0F2A5C]/40 to-transparent" />
      </motion.div>
    </section>
  );
}
