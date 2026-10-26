"use client";

import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  initialDays?: number;
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

export default function CountdownTimer({
  initialDays = 200,
  initialHours = 4,
  initialMinutes = 56,
  initialSeconds = 4,
}: CountdownTimerProps) {
  // Total seconds remaining calculated from target
  const [totalSeconds, setTotalSeconds] = useState(
    initialDays * 86400 + initialHours * 3600 + initialMinutes * 60 + initialSeconds
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const units = [
    { label: "DAYS", value: days },
    { label: "HOURS", value: hours },
    { label: "MINUTES", value: minutes },
    { label: "SECONDS", value: seconds },
  ];

  return (
    <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 mt-8 select-none">
      {units.map((unit, index) => (
        <React.Fragment key={unit.label}>
          {/* Countdown Unit Card - Soft Borderless Pill Squircle */}
          <div className="w-[68px] h-[64px] sm:w-[78px] sm:h-[72px] bg-white/75 backdrop-blur-md rounded-[22px] shadow-[0_8px_28px_rgba(0,0,0,0.04)] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
            <span className="text-xl sm:text-2xl font-semibold text-zinc-900 tracking-tight tabular-nums leading-none">
              {unit.value}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-zinc-400 font-bold uppercase mt-1">
              {unit.label}
            </span>
          </div>

          {/* Colon Separator */}
          {index < units.length - 1 && (
            <span className="text-zinc-300 font-bold text-sm sm:text-base px-0.5 sm:px-1 select-none">
              :
            </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
