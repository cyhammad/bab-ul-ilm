"use client";

import { motion } from "motion/react";

const edgeItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Critical Thinking",
    description: "Encouraging students to solve complex problems.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
    title: "Digital Mastery",
    description: "Utilizing a secure, Model-powered LMS and encrypted video hosting.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: "Character Building",
    description: "Ensuring that \"Ilm\" (Knowledge) is always paired with \"Adab\" (Character).",
  },
];

export function AboutUs() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#d4a843]/[0.03] rounded-full blur-[100px]" />

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
            Our Mission & Identity
          </span>
          <h2 className="font-cormorant text-[32px] sm:text-[42px] md:text-[52px] font-semibold text-[#0f2a5c] tracking-tight leading-tight">
            About Bab-Ul-Ilm
          </h2>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 mb-16 md:mb-20">
          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#0f2a5c]/[0.06] flex items-center justify-center text-[#0f2a5c]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[#0f2a5c]">Who We Are</h3>
            </div>
            <p className="text-stone-500 leading-relaxed font-light text-[15px]">
              Bab-Ul-Ilm Virtual School is a pioneer in digital education, dedicated
              to bringing high-quality schooling from the traditional classroom
              directly to your home. Based in Pakistan, we are a registered and
              certified institution providing a seamless learning experience for
              students from PG to 8th Grade and Pre-9th.
            </p>
          </motion.div>

          {/* Our Journey */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-[#d4a843]/10 flex items-center justify-center text-[#d4a843]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="font-cormorant text-xl font-semibold text-[#0f2a5c]">Our Journey & Vision</h3>
            </div>
            <p className="text-stone-500 leading-relaxed font-light text-[15px]">
              Education is evolving, and we believe that geographical boundaries or
              high costs should never stand in the way of a child&apos;s potential. By
              aligning with the Punjab Board (PECTA) and the international Oxford
              Syllabus, we ensure that our students meet both local and global
              academic standards.
            </p>
          </motion.div>
        </div>

        {/* The Bab-Ul-Ilm Edge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#0f2a5c] to-[#1a3f7a] p-8 sm:p-10 md:p-14">
            <h3 className="font-cormorant text-[26px] sm:text-[32px] font-semibold text-white mb-3 tracking-tight">
              The Bab-Ul-Ilm Edge
            </h3>
            <p className="text-white/60 font-light mb-10 max-w-2xl text-[15px]">
              We don&apos;t just teach; we prepare. Our curriculum is deeply integrated
              with STEM and Moral Grooming. We focus on:
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {edgeItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 * i,
                  }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#d4a843] mb-4 transition-all duration-500 group-hover:bg-[#d4a843]/10 group-hover:border-[#d4a843]/30">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-semibold text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
