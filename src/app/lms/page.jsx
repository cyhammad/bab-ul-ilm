"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function LMSPage() {
  return (
    <main className="min-h-screen bg-[#0f2a4c] flex flex-col items-center justify-center text-white px-4">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4a843]/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-2xl w-full text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8 }}
        >
          <div className="relative w-[340px] h-[120px] mx-auto mb-14">
            <Image 
              src="/logos/Transparent.png" 
              alt="Bab-Ul-Ilm Logo" 
              fill 
              className="object-contain" 
            />
          </div>
          
          <span className="inline-block text-[10px] tracking-[0.3em] uppercase text-[#d4a843] font-bold mb-5">
             Secure Portal
          </span>
          <h1 className="font-cormorant text-5xl md:text-6xl font-bold mb-6 italic tracking-tight">Coming Soon</h1>
          <p className="text-white/60 text-lg font-light leading-relaxed mb-12">
            The Bab-Ul-Ilm Model Learning Management System (LMS) is currently under 
            final optimization. We are building a secure, high-tech experience for 
            our students' and faculty.
          </p>

          <Link 
            href="/" 
            className="inline-flex items-center gap-2 h-14 px-10 rounded-xl bg-[#d4a843] hover:bg-[#c49835] text-[#0f2a4c] font-black tracking-widest uppercase transition-all shadow-xl shadow-black/20"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
