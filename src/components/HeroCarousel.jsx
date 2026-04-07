"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const slides = [
  { image: "/images/1.png", tagline: "Home Based Learning System" },
  { image: "/images/2.png", tagline: "Elevating Excellence" },
  { image: "/images/3.png", tagline: "Future of Learning is Here" },
  { image: "/images/4.jpg", tagline: "World Class Schooling Right at Home" },
  { image: "/images/5.jpg", tagline: "STEM Integrated Curriculum" },
  { image: "/images/6.jpg", tagline: "Interactive Model LMS" },
  { image: "/images/7.jpeg", tagline: "Affordable and Flexible" },
  { image: "/images/8.jpeg", tagline: "More Than Just Academic Learning" },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((idx) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(idx);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const prev = (current - 1 + slides.length) % slides.length;
  const next = (current + 1) % slides.length;

  return (
    <div className="relative w-full max-w-6xl mx-auto select-none text-balanced">
      {/* Carousel Container */}
      <div className="relative flex items-center justify-center h-[240px] sm:h-[300px] md:h-[380px] lg:h-[420px]">

        {/* Left Side Card */}
        <div
          className="absolute left-0 lg:left-4 w-[160px] sm:w-[200px] md:w-[280px] lg:w-[320px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[310px] rounded-2xl overflow-hidden transition-all duration-700 ease-out cursor-pointer hidden sm:block"
          style={{
            opacity: 0.5,
            transform: "scale(0.92)",
          }}
          onClick={() => goTo(prev)}
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[prev].image}
              fill
              className="object-cover"
              alt={slides[prev].tagline}
              sizes="320px"
            />
            <div className="absolute inset-0 bg-[#0F2A5C]/30" />
          </div>
        </div>

        {/* Center Main Card */}
        <div className="relative z-20 w-[300px] sm:w-[380px] md:w-[500px] lg:w-[580px] h-[210px] sm:h-[260px] md:h-[340px] lg:h-[380px] rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/15">
          {/* Preload all images, show current */}
          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: i === current ? 1 : 0 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  fill
                  priority={i < 2}
                  className="object-cover"
                  alt={slide.tagline}
                  sizes="(max-width: 768px) 380px, 580px"
                />
              </div>
            </div>
          ))}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A5C]/70 via-transparent to-[#0F2A5C]/10 z-10" />

          {/* Tagline */}
          <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-7">
            <div key={current} className="text-center animate-fadeSlideUp">
              <p className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide leading-snug drop-shadow-lg">
                {slides[current].tagline}
              </p>
              <div className="mt-3 mx-auto w-10 h-[3px] rounded-full bg-[#D4A843]" />
            </div>
          </div>
        </div>

        {/* Right Side Card */}
        <div
          className="absolute right-0 lg:right-4 w-[160px] sm:w-[200px] md:w-[280px] lg:w-[320px] h-[180px] sm:h-[220px] md:h-[280px] lg:h-[310px] rounded-2xl overflow-hidden transition-all duration-700 ease-out cursor-pointer hidden sm:block"
          style={{
            opacity: 0.5,
            transform: "scale(0.92)",
          }}
          onClick={() => goTo(next)}
        >
          <div className="relative w-full h-full">
            <Image
              src={slides[next].image}
              fill
              className="object-cover"
              alt={slides[next].tagline}
              sizes="320px"
            />
            <div className="absolute inset-0 bg-[#0F2A5C]/30" />
          </div>
        </div>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[5px] rounded-full transition-all duration-500 ${
              current === i
                ? "w-8 bg-[#D4A843]"
                : "w-2 bg-white/25 hover:bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
