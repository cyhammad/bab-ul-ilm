"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { HeroCarousel } from "./HeroCarousel";

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center pt-28 pb-20 md:pt-36 lg:pt-40 overflow-hidden min-h-screen justify-center text-white">
      {/* Background Image with Elegant Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/2.png"
            alt="Campus Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[#0F2A5C]/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F2A5C]/30 via-transparent to-[#0F2A5C]/50" />
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
          className="inline-flex items-center gap-3 px-4 py-1.5 mb-8 rounded-full border border-white/25 bg-white/5 shadow-lg"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#D4A843] animate-pulse" />
          <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-white/90">
            Pakistan&apos;s Leading Virtual Campus
          </span>
        </motion.div>

        {/* Premium Typography */}
        <motion.h1
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
          }}
          className="font-cormorant text-[42px] sm:text-[56px] md:text-[72px] lg:text-[84px] font-light text-white leading-[0.95] tracking-[-0.02em] drop-shadow-2xl"
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
          className="mx-auto mt-8 max-w-2xl text-lg md:text-xl text-white/80 font-light leading-relaxed font-sans"
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
          <Link 
            href="/apply"
            className="group relative h-14 w-full sm:w-auto px-10 rounded-full bg-[#D4A843] text-[#0F2A5C] flex items-center justify-center text-[15px] font-bold tracking-wide transition-all hover:bg-white hover:shadow-2xl active:scale-95"
          >
            Begin Journey
          </Link>
          <Link 
            href="/#faculty"
            className="h-14 w-full sm:w-auto px-10 rounded-full border border-white/30 text-white flex items-center justify-center text-[15px] font-medium transition-all hover:bg-white/10 active:scale-95"
          >
            Explore Faculty
          </Link>
        </motion.div>
      </motion.div>

      {/* Hero Image Showcase - Automatic Carousel */}
      <div className="relative mt-20 md:mt-28 w-full max-w-7xl px-4 flex justify-center perspective-1000">
        <HeroCarousel />
      </div>

    </section>
  );
}
