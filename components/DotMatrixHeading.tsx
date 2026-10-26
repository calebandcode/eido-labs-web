"use client";

import React, { useState, useEffect } from "react";

interface DotMatrixHeadingProps {
  line1?: string;
  line2?: string;
}

export default function DotMatrixHeading({
  line1 = "Frontier R&D Lab",
  line2 = "Robotics & AI Systems",
}: DotMatrixHeadingProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [shimmerIndex, setShimmerIndex] = useState(-1);

  // Subtle ambient shimmer effect across characters
  useEffect(() => {
    const interval = setInterval(() => {
      const allLength = line1.length + line2.length;
      const rand = Math.floor(Math.random() * allLength);
      setShimmerIndex(rand);
      setTimeout(() => setShimmerIndex(-1), 300);
    }, 2400);

    return () => clearInterval(interval);
  }, [line1, line2]);

  return (
    <div
      className="relative select-none text-center cursor-default group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1
        className="text-[34px] sm:text-[48px] md:text-[60px] lg:text-[68px] leading-[1.15] tracking-normal text-white/95 font-['Doto',monospace] transition-all duration-300 font-normal"
        style={{
          fontFamily: "'Doto', monospace",
          fontVariationSettings: "'ROND' 0, 'wght' 400",
          textShadow: isHovered
            ? "0 0 25px rgba(255, 255, 255, 0.45), 0 0 50px rgba(255, 255, 255, 0.2)"
            : "0 0 16px rgba(255, 255, 255, 0.12)",
        }}
      >
        <span className="block whitespace-nowrap">
          {line1.split("").map((char, i) => (
            <span
              key={`l1-${i}`}
              className={`inline-block transition-all duration-200 ${
                shimmerIndex === i ? "text-white scale-105" : ""
              } hover:text-white hover:scale-105`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
        <span className="block whitespace-nowrap mt-0.5 sm:mt-1">
          {line2.split("").map((char, i) => (
            <span
              key={`l2-${i}`}
              className={`inline-block transition-all duration-200 ${
                shimmerIndex === line1.length + i ? "text-white scale-105" : ""
              } hover:text-white hover:scale-105`}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </span>
      </h1>
    </div>
  );
}
