"use client";

import React, { useState } from "react";

export default function SocialProof() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const avatars = [
    {
      name: "Sarah Chen",
      role: "Product Designer",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
      fallback: "SC",
      bg: "bg-amber-100 text-amber-800",
    },
    {
      name: "Alex Rivera",
      role: "Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
      fallback: "AR",
      bg: "bg-blue-100 text-blue-800",
    },
    {
      name: "Elena Rostova",
      role: "Engineering Lead",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
      fallback: "ER",
      bg: "bg-rose-100 text-rose-800",
    },
  ];

  return (
    <div className="flex items-center justify-center gap-2.5 mt-5">
      {/* Overlapping circular avatars */}
      <div className="flex items-center -space-x-2">
        {avatars.map((avatar, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer transition-transform duration-200 hover:scale-110 hover:z-30"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={avatar.image}
              alt={avatar.name}
              className="w-7 h-7 rounded-full border-2 border-white object-cover shadow-sm bg-zinc-200"
              onError={(e) => {
                // Graceful fallback to colored circle if offline or network blocks image
                e.currentTarget.style.display = "none";
              }}
            />

            {/* Hover tooltip */}
            {hoveredIdx === idx && (
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 whitespace-nowrap bg-zinc-900 text-white text-[10px] py-0.5 px-2 rounded-md shadow-lg pointer-events-none z-40 animate-fadeIn">
                {avatar.name} • {avatar.role}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Social proof copy */}
      <span className="text-xs text-zinc-600 font-normal tracking-normal">
        Join <span className="font-medium text-zinc-800">+1,000 others</span> on the waitlist
      </span>
    </div>
  );
}
