"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { Marquee } from "@/components/Marquee";
import { WhyBabulIlm } from "@/components/WhyBabulIlm";
import { StandoutFeatures } from "@/components/StandoutFeatures";
import { Features } from "@/components/Features";
import { CourseFeatures } from "@/components/CourseFeatures";
import { FeeStructure } from "@/components/FeeStructure";
import { ChairmanMessage } from "@/components/ChairmanMessage";
import { AboutUs } from "@/components/AboutUs";
import { FacultySection } from "@/components/FacultySection";
import { AdmissionsCTA } from "@/components/AdmissionsCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-stone-900">
      <Navbar />
      <HeroSection />
      <Marquee />
      <WhyBabulIlm />
      <StandoutFeatures />
      <Features />
      <CourseFeatures />
      <FeeStructure />
      <ChairmanMessage />
      <AboutUs />
      <FacultySection />
      <AdmissionsCTA />
      <Footer />
    </main>
  );
}
