"use client";

import { motion } from "motion/react";

export function Marquee() {
  const words = [
    "ADMISSIONS OPEN 2024-25",
    "•",
    "STEM INTEGRATED CURRICULUM",
    "•",
    "NURSERY TO PRE-9TH",
    "•",
    "PAKISTAN'S LEADING VIRTUAL CAMPUS",
    "•",
    "JOIN THE FUTURE OF EDUCATION",
    "•"
  ];

  const content = [...words, ...words, ...words, ...words];

  return (
    <div className="relative w-full overflow-hidden bg-[#0F2A5C] py-4 border-y border-[#D4A843]/30 shadow-lg z-20">
      <div className="flex whitespace-nowrap">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center gap-16 px-8"
        >
          {content.map((item, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span
                className={`text-sm md:text-lg font-bold tracking-[0.2em] uppercase ${
                  item === "•" ? "text-[#D4A843]" : "text-white"
                } ${item.includes("ADMISSIONS OPEN") ? "text-[#f0d48a] drop-shadow-[0_0_8px_rgba(212,168,67,0.4)]" : ""}`}
              >
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
