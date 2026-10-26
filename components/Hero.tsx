"use client";

import React from "react";
import DotMatrixHeading from "./DotMatrixHeading";
import AsciiTerrain from "./AsciiTerrain";

interface HeroProps {
  onOpenDemo: () => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  return (
    <section className="relative w-full flex flex-col items-center justify-start pt-32 sm:pt-36 md:pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
      {/* Background radial gradient glow centered behind hero */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[550px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.035)_0%,transparent_70%)] pointer-events-none" />


      {/* 2. Main Title (Doto Font) */}
      <div className="z-10 mb-5 sm:mb-6">
        <DotMatrixHeading
          line1="Frontier R&D Lab"
          line2="Robotics & AI Systems"
        />
      </div>

      {/* 3. Subtitle / Statutory Mandate */}
      <div className="z-10 max-w-xl mx-auto text-center px-4 mb-7 sm:mb-8">
        <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed tracking-normal">
          Pioneering research, experimentation, and prototyping across Robotics,
          <br className="hidden sm:inline" />{" "}
          Automation, Artificial Intelligence, Machine Learning, and Embedded Systems.
        </p>
      </div>

      {/* 4. Hero CTA Button */}
      <div className="z-10 mb-8 sm:mb-12">
        <button
          onClick={onOpenDemo}
          className="relative group px-5 py-2 sm:px-6 sm:py-2.5 rounded-[6px] border border-white/20 bg-zinc-950/80 hover:bg-zinc-900 hover:border-white/40 text-xs sm:text-sm font-normal text-zinc-100 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] active:scale-[0.98] cursor-pointer"
        >
          <span className="relative z-10">Book A Demo / Inquire</span>
          <div className="absolute inset-0 rounded-[6px] bg-white/[0.02] group-hover:bg-white/[0.06] transition-colors" />
        </button>
      </div>

      {/* 5. Centerpiece ASCII Art / Matrix Topology */}
      <div className="w-full max-w-5xl z-10">
        <AsciiTerrain />
      </div>
    </section>
  );
}
