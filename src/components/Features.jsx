"use client";

import Image from "next/image";
import { motion } from "motion/react";

const features = [
  {
    title: "Live Interactive Classrooms",
    subtitle: "Real-time Engagement, Real-time Results.",
    description:
      "Not just recorded videos! Our live sessions allow students to ask questions, participate in polls, and collaborate with classmates in a safe virtual environment.",
    image: "/images/2.png",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    title: "Automated Progress Reports",
    subtitle: "Instant Feedback for Every Quiz.",
    description:
      "No more waiting for months! Get instant grading and detailed feedback on every assignment to identify and improve weak areas immediately.",
    image: "/images/6.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
  {
    title: "Flexible 24/7 Resource Access",
    subtitle: "Learn Anytime, Anywhere.",
    description:
      "Missed a class? No problem. Every live session is recorded and uploaded automatically to the student's portal for revision.",
    image: "/images/4.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
  {
    title: "Parent Portal & Tracking",
    subtitle: "Stay informed about every milestone.",
    description:
      "Parents can track daily attendance, quiz results, and overall academic performance through our dedicated parent dashboard.",
    image: "/images/3.jpg",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 bg-[#faf8f5] overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a843]/[0.03] rounded-full blur-[100px]" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block text-xs tracking-[0.2em] uppercase text-[#d4a843] font-medium mb-4">
            Student-Centric Approach
          </span>
          <h2 className="font-cormorant text-[32px] sm:text-[42px] md:text-[52px] font-semibold text-[#0f2a5c] tracking-tight leading-tight">
            Platform Features
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-stone-500 text-base sm:text-lg font-light">
            Everything your child needs for an exceptional online learning experience.
          </p>
        </motion.div>

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
              } items-center gap-8 md:gap-14`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden rounded-2xl md:rounded-3xl shadow-lg group">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={600}
                    height={400}
                    className="w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f2a5c]/20 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="w-12 h-12 rounded-xl bg-[#0f2a5c]/[0.06] text-[#0f2a5c] flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-cormorant text-[22px] sm:text-[26px] font-semibold text-[#0f2a5c] mb-2 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[#d4a843] font-medium text-sm mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-stone-500 leading-relaxed font-light text-base">
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
