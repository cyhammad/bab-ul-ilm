"use client";

import { motion } from "motion/react";

const feeData = [
  {
    category: "Pre School",
    levels: "KG, KG1, KG2",
    admissionOrig: "10,000",
    admissionNew: "8,000",
    tuitionOrig: "6,500",
    tuitionNew: "5,500",
    resourceOrig: "9,000",
    resourceNew: "FREE",
  },
  {
    category: "Primary School",
    levels: "Grade 1 - 5",
    admissionOrig: "10,000",
    admissionNew: "8,000",
    tuitionOrig: "7,500",
    tuitionNew: "6,500",
    resourceOrig: "9,000",
    resourceNew: "FREE",
  },
  {
    category: "Lower Secondary",
    levels: "Grade 6 - 8 & Pre 9th",
    admissionOrig: "10,000",
    admissionNew: "8,000",
    tuitionOrig: "7,500",
    tuitionNew: "6,500",
    resourceOrig: "9,900",
    resourceNew: "FREE",
  },
  {
    category: "Secondary School",
    levels: "Grade 9 - 10",
    admissionOrig: "10,000",
    admissionNew: "8,000",
    tuitionOrig: "8,500",
    tuitionNew: "7,500",
    resourceOrig: "Included",
    resourceNew: "FREE",
    note: "Books / Notes are not included"
  },
  {
    category: "Learn Holy Quran",
    levels: "Nazra, Hifz, Translation & Tafseer",
    admissionOrig: "5,000",
    admissionNew: "4,000",
    tuitionOrig: "5,500",
    tuitionNew: "4,500",
    resourceOrig: "4,900",
    resourceNew: "FREE",
  }
];

export function FeeStructure() {
  return (
    <section id="fees" className="relative py-16 md:py-24 bg-[#F1F3F6] overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-[11px] tracking-[0.25em] uppercase text-red-500 font-bold mb-4 bg-red-50 px-3 py-1 rounded-full">
            Limited Time Discount Offer
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
              className="bg-white rounded-2xl border border-stone-200 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group"
            >
              {/* Discount Tag */}
              <div className="absolute top-0 right-0 py-1.5 px-3 bg-red-500 text-white text-[10px] font-black uppercase tracking-wider translate-x-0 group-hover:bg-[#d4a843] transition-colors">
                Discount Active
              </div>

              <div className="md:w-1/3 text-center md:text-left">
                <h3 className="font-cormorant text-2xl font-bold text-[#0f2a5c] mb-1">{item.category}</h3>
                <p className="text-xs text-stone-400 font-medium tracking-wide uppercase">{item.levels}</p>
                {item.note && <p className="text-[10px] text-[#d4a843] font-bold mt-2 italic">* {item.note}</p>}
              </div>

              <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-10 md:w-2/3">
                <div className="text-center min-w-[100px]">
                  <div className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">One-Time Admission</div>
                  <div className="text-xs line-through text-stone-300 font-medium mb-1">Rs {item.admissionOrig}</div>
                  <div className="text-xl font-bold text-[#0f2a5c]">Rs {item.admissionNew}</div>
                </div>
                
                <div className="text-center min-w-[100px]">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#d4a843] mb-2">Monthly Tuition</div>
                  <div className="text-xs line-through text-[#d4a843]/30 font-medium mb-1">Rs {item.tuitionOrig}</div>
                  <div className="text-xl font-bold text-[#0f2a4c]">Rs {item.tuitionNew}</div>
                </div>

                <div className="text-center min-w-[100px]">
                  <div className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-2">Digital Resource</div>
                  <div className="text-xs line-through text-stone-300 font-medium mb-1">{item.resourceOrig.includes('Rs') ? item.resourceOrig : `Rs ${item.resourceOrig}`}</div>
                  <div className="text-xl font-bold text-green-600 tracking-wider">FREE</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-stone-400 text-sm font-light italic">
            * Limited time offer for current academic term. Admission fees are non-refundable.
            Digital Resource charges are completely waived for new enrollments.
          </p>
        </div>
      </div>
    </section>
  );
}
