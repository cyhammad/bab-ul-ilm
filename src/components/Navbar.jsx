"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "motion/react";

const NAV_LINKS = [
  {
    name: "About",
    href: "/#about",
    submenu: [
      { name: "Our Vision", href: "/#about" },
      { name: "Chairman's Message", href: "/#message" },
      { name: "Why Bab-Ul-Ilm", href: "/#why-us" },
    ],
  },
  {
    name: "Fees",
    href: "/#fees",
    submenu: [
      { name: "Fee Structure", href: "/#fees" },
      { name: "Special Offers", href: "/#fees" },
    ],
  },
  {
    name: "Syllabus",
    href: "/#course-features",
    submenu: [
      { name: "Course Features", href: "/#course-features" },
      { name: "STEM Learning", href: "/#features" },
      { name: "Faculty Recruitment", href: "/#faculty" },
    ],
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
          className={`flex w-full md:w-fit items-center justify-between md:justify-center gap-x-6 rounded-full px-5 md:px-6 py-3 text-sm font-medium shadow-xl transition-all duration-300 bg-[#0f2a5c] text-white`}
        >
          <Link href="/" className="flex items-center shrink-0">
            <span className="font-cormorant text-2xl font-bold tracking-tight text-white italic">
              Bab-Ul-Ilm
            </span>
          </Link>

          {/* Desktop Links with Dropdowns */}
          <div className="hidden md:flex items-center gap-x-1 whitespace-nowrap h-full">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name} 
                className="relative h-full px-4"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1.5 hover:text-[#d4a843] font-light tracking-wide transition-colors text-[15px] py-2"
                >
                  {link.name}
                  <svg 
                    className={`w-3 h-3 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                  </svg>
                </Link>

                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: 10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-52 bg-[#0f2a5c] border border-white/10 rounded-2xl shadow-2xl py-2 overflow-hidden"
                    >
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-5 py-3 text-[13px] font-light text-white/70 hover:text-white hover:bg-white/5 transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-[8px]" : ""}`}></span>
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-5 h-[2px] bg-white rounded-full transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-[8px]" : ""}`}></span>
          </button>
        </div>

        {/* Mobile menu logic fixed to include submenus if needed, but keeping it simple as per user preference for "About, Fees, Syllabus" */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden flex flex-col items-center w-full bg-[#0f2a5c] rounded-2xl mt-2 overflow-hidden font-light tracking-wide shadow-2xl border border-white/10"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="w-full text-center py-4 text-white hover:text-[#d4a843] hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
