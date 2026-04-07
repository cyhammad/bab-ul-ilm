"use client";

import { motion } from "motion/react";

const feeData = [
  {
    category: "Pre School",
    levels: "KG, KG1, KG2",
    admission: "10,000",
    tuition: "6,500",
    resource: "9,000",
  },
  {
    category: "Primary School",
    levels: "Grade 1 - 5",
    admission: "10,000",
    tuition: "7,500",
    resource: "9,000",
  },
  {
    category: "Lower Secondary",
    levels: "Grade 6 - 8 & Pre 9th",
    admission: "10,000",
    tuition: "7,500",
    resource: "9,900",
  },
  {
    category: "Secondary School",
    levels: "Grade 9 - 10",
    admission: "10,000",
    tuition: "8,500",
    resource: "Included",
    note: "Books / Notes are not included"
  },
  {
    category: "Learn Holy Quran",
    levels: "Nazra, Hifz, Translation & Tafseer",
    admission: "5,000",
    tuition: "5,500",
    resource: "4,900",
  }
];

export function FeeStructure() {
  return (
    <section id="fees" className="relative py-24 md:py-32 bg-[#F1F3F6] overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-[#d4a843] font-bold mb-4">
            Transparent Pricing
          </span>
          <h2 className="font-cormorant text-[36px] sm:text-[48px] md:text-[56px] font-semibold text-[#0f2a5c] tracking-tight leading-tight">
            Fee Structure
          </h2>
          <div className="w-12 h-[2px] bg-[#d4a843] mx-auto mt-6" />
        </div>

        <div className="grid gap-6">
          {feeData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="md:w-1/3 text-center md:text-left">
                <h3 className="font-cormorant text-2xl font-bold text-[#0f2a5c] mb-1">{item.category}</h3>
                <p className="text-xs text-stone-400 font-medium tracking-wide uppercase">{item.levels}</p>
                {item.note && <p className="text-[10px] text-[#d4a843] font-bold mt-2 italic">* {item.note}</p>}
              </div>

              <div className="flex flex-wrap justify-center md:justify-end gap-10 md:w-2/3">
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">One-Time Admission</div>
                  <div className="text-xl font-bold text-[#0f2a5c]">Rs {item.admission}</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#d4a843] mb-1">Monthly Tuition</div>
                  <div className="text-xl font-bold text-[#0f2a5c]">Rs {item.tuition}</div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Digital Resource</div>
                  <div className="text-xl font-bold text-[#0f2a5c]">{item.resource === 'Included' ? item.resource : `Rs ${item.resource}`}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-400 text-sm font-light italic">
            * All figures are subject to academic term updates and institutional policies. 
            Digital Resource charges are annual.
          </p>
        </div>
      </div>
    </section>
  );
}
