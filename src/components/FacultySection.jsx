"use client";

import Link from "next/link";
import { motion } from "motion/react";

const subjects = [
  { name: "English", icon: "Aa" },
  { name: "Urdu", icon: "اُ" },
  { name: "Mathematics", icon: "∑" },
  { name: "Science", icon: "⚛" },
  { name: "Computer Science", icon: "</>" },
  { name: "Islamiat", icon: "☪" },
  { name: "Social Studies", icon: "🌍" },
  { name: "Physics", icon: "⚡" },
  { name: "Chemistry", icon: "⚗" },
  { name: "Biology", icon: "🧬" },
  { name: "Pakistan Studies", icon: "🏛" },
  { name: "Quran Learning", icon: "📖" },
];

export function FacultySection() {
  return (
    <section id="faculty" className="relative py-24 md:py-32 bg-white border-t border-stone-100 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-[#d4a843] font-bold mb-4">
            Professional Faculty
          </span>
          <h2 className="font-cormorant text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-[#0f2a5c] tracking-tight leading-tight">
            Join Bab-Ul-Ilm Team
          </h2>
          <div className="w-12 h-[2px] bg-[#d4a843] mx-auto mt-6" />
          <p className="mx-auto mt-6 max-w-xl text-stone-400 text-base font-light">
            We are looking for passionate educators with a minimum B.A/B.Sc degree and 1 year of online teaching experience.
          </p>
        </div>

        {/* Requirements Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f2a5c] rounded-2xl p-6 md:p-8 mb-12 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4a843]/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#d4a843]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Qualification</div>
                <div className="text-sm font-semibold text-white">B.A / B.Sc Degree</div>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4a843]/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#d4a843]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Experience</div>
                <div className="text-sm font-semibold text-white">1 Year Online Teaching</div>
              </div>
            </div>
            <div className="w-px h-8 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#d4a843]/15 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#d4a843]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">Environment</div>
                <div className="text-sm font-semibold text-white">Remote / Online</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Subject Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {subjects.map((subject, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group relative bg-[#F8FAFC] border border-stone-200 rounded-xl p-5 hover:border-[#d4a843]/40 hover:shadow-lg hover:shadow-[#d4a843]/5 hover:-translate-y-0.5 transition-all duration-300 cursor-default"
            >
              <div className="text-2xl mb-3 grayscale group-hover:grayscale-0 transition-all duration-300" aria-hidden>
                {subject.icon}
              </div>
              <h4 className="text-sm font-bold text-[#0f2a5c] mb-1">{subject.name}</h4>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4a843] animate-pulse" />
                <span className="text-[10px] font-bold text-[#d4a843] uppercase tracking-wider">Hiring</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/apply"
            className="inline-flex items-center gap-3 h-14 px-10 rounded-full bg-[#0f2a5c] text-white font-semibold text-sm tracking-wide transition-all hover:bg-[#0a1e42] hover:shadow-2xl hover:shadow-[#0f2a5c]/20 active:scale-95"
          >
            Apply Now
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}
