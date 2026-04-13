"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0a1e42] relative border-t border-white/5 pt-16 pb-8">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#d4a843]/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#0f2a5c]/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Layout (Brand + 4 Columns) */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-8 xl:gap-12 mb-16">
          
          {/* Brand & Intro (Takes ~1/3 space on large screens) */}
          <div className="lg:w-1/3 flex flex-col items-start xl:pr-10">
            {/* Logo container strictly constrained in size */}
            <div className="relative w-48 h-20 mb-5 group">
              <Image 
                src="/logos/Transparent.png" 
                alt="Bab-Ul-Ilm Logo" 
                fill
                className="object-contain object-left brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" 
                sizes="192px"
                priority
              />
            </div>
            
            <p className="text-[15px] font-light leading-relaxed text-white/50 mb-8 max-w-md">
              The Gate of Knowledge — Pakistan&apos;s leading virtual school for quality education. Bridging the gap between traditional wisdom and digital innovation.
            </p>

            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#d4a843] hover:bg-[#d4a843]/10 hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#d4a843] hover:bg-[#d4a843]/10 hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641 0 12.017 0z" /></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-[#d4a843] hover:bg-[#d4a843]/10 hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>

          {/* 4 Link Columns Grid (Takes ~2/3 space on large screens) */}
          <div className="lg:w-2/3 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            
            {/* Column 1: Quick Links */}
            <div>
              <h4 className="text-white font-medium text-[15px] mb-6 tracking-wide relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#d4a843] rounded-full" />
              </h4>
              <ul className="space-y-3.5 text-[14px] font-light text-white/60">
                <li><Link href="/#why-us" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Why Us</Link></li>
                <li><Link href="/#features" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Features</Link></li>
                <li><Link href="/#about" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">About Us</Link></li>
                <li><Link href="/#chairman" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Chairman Message</Link></li>
                <li><Link href="/apply" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">Admissions</Link></li>
              </ul>
            </div>

            {/* Column 2: Programs */}
            <div>
              <h4 className="text-white font-medium text-[15px] mb-6 tracking-wide relative inline-block">
                Programs
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#d4a843] rounded-full" />
              </h4>
              <ul className="space-y-3.5 text-[14px] font-light text-white/60">
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Pre Classes (PG–KG)</span></li>
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Primary (1st–5th)</span></li>
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Middle Standard</span></li>
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Pre-9th</span></li>
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Matriculation</span></li>
              </ul>
            </div>

            {/* Column 3: Courses */}
            <div>
              <h4 className="text-white font-medium text-[15px] mb-6 tracking-wide relative inline-block">
                Courses
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#d4a843] rounded-full" />
              </h4>
              <ul className="space-y-3.5 text-[14px] font-light text-white/60">
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Graphic Designing</span></li>
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Web Designing</span></li>
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Web Development</span></li>
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Quran Learning</span></li>
                <li><span className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300 cursor-pointer">Spoken English</span></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="text-white font-medium text-[15px] mb-6 tracking-wide relative inline-block">
                Contact
                <span className="absolute -bottom-2 left-0 w-8 h-[2px] bg-[#d4a843] rounded-full" />
              </h4>
              <ul className="space-y-4 text-[13px] sm:text-[14px] font-light text-white/60">
                <li className="flex items-start gap-3 group">
                  <span className="text-[#d4a843] mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </span>
                  <span className="hover:text-white transition-colors cursor-pointer">+92 345 6621 055</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-[#d4a843] mt-0.5 group-hover:scale-110 transition-transform">
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span className="break-all hover:text-white transition-colors cursor-pointer">admin@babulilm.com</span>
                </li>
                <li className="flex items-start gap-3 group">
                  <span className="text-[#d4a843] mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </span>
                  <span className="leading-snug hover:text-white transition-colors">Lahore Sargodha Road,<br/>Chowki Sukheki, Hafizabad</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Deep Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-white/40 tracking-wide">
            © {new Date().getFullYear()} Bab-Ul-Ilm Virtual School. All rights reserved.
          </p>
          <div className="flex gap-6 text-[13px] text-white/30">
            <span className="hover:text-white/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

