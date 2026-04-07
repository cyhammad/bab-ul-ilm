"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous === undefined) return;

    setScrolled(latest > 50);

    if (latest > previous && latest > 150) {
      setHidden(true);
      if (isOpen) setIsOpen(false);
    } else if (latest < previous) {
      setHidden(false);
    }
  });

  return (
    <div className="fixed top-4 md:top-5 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-[95vw] md:max-w-fit pointer-events-none">
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -150, opacity: 0 },
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "circOut" }}
        className="flex flex-col items-center pointer-events-auto"
      >
        <div
          className={`flex w-full md:w-fit items-center justify-between md:justify-center gap-x-6 rounded-full px-5 md:px-6 py-3 text-sm font-medium shadow-xl transition-all duration-300 ${
            scrolled
              ? "bg-[#0f2a5c] text-white"
              : "bg-[#0f2a5c] text-white"
          }`}
        >
          <Link href="/" className="flex items-center shrink-0">
            <span className="font-cormorant text-lg md:text-xl font-bold tracking-tight text-white leading-none">
              Bab-ul<span className="text-[#d4a843]">-Ilm</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-x-6 whitespace-nowrap">
            <Link
              href="/#why-us"
              className="hover:text-[#d4a843] font-light tracking-wide transition-colors"
            >
              Why Us
            </Link>
            <Link
              href="/#features"
              className="hover:text-[#d4a843] font-light tracking-wide transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#about"
              className="hover:text-[#d4a843] font-light tracking-wide transition-colors"
            >
              About
            </Link>
            <Link
              href="/#chairman"
              className="hover:text-[#d4a843] font-light tracking-wide transition-colors"
            >
              Chairman
            </Link>
            <Link
              href="/lms"
              className="rounded-full border border-white/30 bg-white/5 px-5 py-1.5 font-medium tracking-wide transition-all hover:bg-white/10 hover:scale-105 active:scale-95"
            >
              LMS Portal
            </Link>
            <Link
              href="/apply"
              className="rounded-full bg-gradient-to-r from-[#d4a843] to-[#c49835] px-5 py-1.5 text-[#0f2a5c] font-semibold tracking-wide transition-all hover:shadow-lg hover:shadow-[#d4a843]/20 hover:scale-105 active:scale-95"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-[8px]" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-[2px] bg-white rounded-full transition-opacity duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-5 h-[2px] bg-white rounded-full transition-transform duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-[8px]" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden flex flex-col items-center w-full bg-[#0f2a5c] rounded-2xl mt-2 overflow-hidden transition-all duration-300 ease-in-out font-light tracking-wide shadow-2xl ${
            isOpen
              ? "max-h-80 py-2 border border-white/10 opacity-100"
              : "max-h-0 py-0 border-transparent opacity-0"
          }`}
        >
          <Link
            href="/#why-us"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 text-white/80 hover:text-[#d4a843] hover:bg-white/5 transition-colors"
          >
            Why Us
          </Link>
          <Link
            href="/#features"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 text-white/80 hover:text-[#d4a843] hover:bg-white/5 transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#about"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 text-white/80 hover:text-[#d4a843] hover:bg-white/5 transition-colors"
          >
            About
          </Link>
          <Link
            href="/#chairman"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 text-white/80 hover:text-[#d4a843] hover:bg-white/5 transition-colors"
          >
            Chairman
          </Link>
          <Link
            href="/lms"
            onClick={() => setIsOpen(false)}
            className="w-full text-center py-3 text-white/80 hover:text-[#d4a843] hover:bg-white/5 transition-colors"
          >
            LMS Portal
          </Link>
          <div className="px-4 py-3 w-full">
            <Link
              href="/apply"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center py-2.5 rounded-full bg-gradient-to-r from-[#d4a843] to-[#c49835] text-[#0f2a5c] font-semibold"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </motion.nav>
    </div>
  );
};
