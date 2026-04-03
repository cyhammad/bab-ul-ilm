"use client";

import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyBabulIlm } from "@/components/WhyBabulIlm";
import { Features } from "@/components/Features";
import { ChairmanMessage } from "@/components/ChairmanMessage";
import { AboutUs } from "@/components/AboutUs";
import { AdmissionsCTA } from "@/components/AdmissionsCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white text-stone-900">
      <Navbar />
      <HeroSection />
      <WhyBabulIlm />
      <Features />
      <ChairmanMessage />
      <AboutUs />
      <AdmissionsCTA />
      <Footer />
    </main>
  );
}
