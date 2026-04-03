"use client";

import Image from "next/image";
import { motion } from "motion/react";

const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 14.5M14.25 3.104c.251.023.501.05.75.082M19.8 14.5l-2.303 2.456A3.743 3.743 0 0015.15 18H8.85a3.745 3.745 0 00-2.348 1.044L4.2 21.5m15.6-7l.159.169a1.5 1.5 0 01.098 1.906l-3.607 5.084A3 3 0 0114.002 23H9.998a3 3 0 01-2.448-1.341L3.943 16.575a1.5 1.5 0 01.098-1.906L4.2 14.5" />
      </svg>
    ),
    heading: "Coding & Scientific Thinking",
    subheading:
      "We introduce logical thinking and basic technology concepts from the primary years, following Punjab board (PECTA) and Oxford standards.",
    color: "from-[#0f2a5c]/5 to-transparent",
    borderColor: "border-[#0f2a5c]/10",
    iconBg: "bg-[#0f2a5c]/10",
    iconColor: "text-[#0f2a5c]",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    heading: "Interactive Model LMS",
    subheading:
      "A personalized digital dashboard that tracks progress, manages assignments, and organizes all resources in real-time.",
    color: "from-[#d4a843]/15 to-[#d4a843]/5",
    borderColor: "border-[#d4a843]/20",
    iconBg: "bg-[#d4a843]/10",
    iconColor: "text-[#d4a843]",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    heading: "Encrypted Video Hosting",
    subheading:
      "High-definition, secure educational content hosted on private servers (AWS/Vimeo) to ensure maximum safety for your child.",
    color: "from-[#D4A843]/5 to-transparent",
    borderColor: "border-[#D4A843]/10",
    iconBg: "bg-[#D4A843]/10",
    iconColor: "text-[#D4A843]",
  },
];

export function WhyBabulIlm() {
  return (
    <section id="why-us" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0f2a5c]/[0.02] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4a843]/[0.03] rounded-full blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#d4a843] font-medium mb-4">
            The Future-Ready Edition
          </span>
          <h2 className="font-cormorant text-[32px] sm:text-[42px] md:text-[52px] font-semibold text-[#0f2a5c] tracking-tight leading-tight">
            Why Bab-Ul-Ilm?
          </h2>
        </motion.div>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="mx-auto max-w-3xl text-center text-base sm:text-lg text-stone-500 leading-relaxed mb-16 font-light"
        >
          We don&apos;t just teach for today; we prepare for tomorrow. Our virtual campus
          is a hub for innovation, where STEM education meets character building
          to create well-rounded digital citizens. From coding basics to
          scientific inquiry, we bring the future to your screen.
        </motion.p>

        {/* Three Pillar Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl">
            <Image
              src="/images/3.png"
              alt="Why Bab-Ul-Ilm - Three Core Pillars"
              width={1400}
              height={700}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        {/* Three Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1 * i,
              }}
              className={`group relative rounded-2xl border ${pillar.borderColor} bg-gradient-to-b ${pillar.color} p-7 sm:p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#0f2a5c] mb-3">
                {pillar.heading}
              </h3>
              <p className="text-sm text-stone-500 leading-relaxed font-light">
                {pillar.subheading}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
