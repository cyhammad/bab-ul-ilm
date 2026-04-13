"use client";

import Image from "next/image";
import { motion } from "motion/react";

const features = [
  {
    title: "Engaging Online Learning",
    subtitle: "Beyond just video calls.",
    description:
      "Our online classes are designed to be interactive, using high-quality animations and real-time discussions to keep students focused and excited about learning.",
    image: "/images/2.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Secure Student Environment",
    subtitle: "Your child’s safety is our priority.",
    description:
      "We utilize encrypted video hosting to ensure that lectures are only accessible to registered students, maintaining a safe and private digital campus.",
    image: "/images/6.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    title: "Real-Time Academic Monitoring",
    subtitle: "Stay informed about every milestone.",
    description:
      "Parents can track daily attendance, quiz results, and overall academic performance through our dedicated parent dashboard.",
    image: "/images/4.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Expert Online Educators",
    subtitle: "Trained for the digital classroom.",
    description:
      "Our faculty consists of subject experts who are specifically trained in online pedagogy and STEM-integrated teaching methods.",
    image: "/images/3.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-16 md:py-24 bg-[#faf8f5] overflow-hidden scroll-mt-20 border-t border-stone-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-[#d4a843] font-bold mb-4">
             Platform Capabilities
          </span>
          <h2 className="font-cormorant text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-[#0f2a5c] tracking-tight leading-tight">
            Our LMS Features
          </h2>
          <div className="w-12 h-[2px] bg-[#d4a843] mx-auto mt-6" />
        </div>

        {/* Feature Cards - Alternating Layout */}
        <div className="space-y-16 md:space-y-24">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 md:gap-12`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg group">
                  <div className="relative w-full h-[240px] sm:h-[300px] md:h-[340px]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.18] scale-[1.12]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a5c]/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="w-14 h-14 rounded-2xl bg-[#0f2a5c] text-[#d4a843] flex items-center justify-center mb-6 shadow-xl shadow-[#0f2a5c]/10 relative group-hover:scale-110 transition-transform duration-500">
                  <div className="relative z-10">{feature.icon}</div>
                </div>
                <h3 className="font-cormorant text-[28px] sm:text-[32px] font-semibold text-[#0f2a5c] mb-3 tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <div className="inline-block px-3 py-1 rounded-full bg-[#d4a843]/10 text-[#d4a843] text-[10px] font-bold uppercase tracking-wider mb-5">
                  {feature.subtitle}
                </div>
                <p className="text-stone-500 leading-relaxed font-light text-base md:text-lg text-balanced">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
