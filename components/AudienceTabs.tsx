"use client";

import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface AudienceTabsProps {
  activeTab: "collectors" | "savers";
  onTabChange: (tab: "collectors" | "savers") => void;
}

export default function AudienceTabs({ activeTab, onTabChange }: AudienceTabsProps) {
  return (
    <div className="flex items-center justify-center mt-7 sm:mt-8 select-none">
      <div className="inline-flex p-1.5 rounded-full bg-zinc-100/90 backdrop-blur-md border border-zinc-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.03)] relative">
        {/* Tab 1: For Collectors */}
        <button
          type="button"
          onClick={() => onTabChange("collectors")}
          className={`relative z-10 flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
            activeTab === "collectors"
              ? "text-zinc-950 font-semibold"
              : "text-zinc-500 hover:text-zinc-900"
          }`}
          aria-pressed={activeTab === "collectors"}
        >
          {activeTab === "collectors" && (
            <motion.div
              layoutId="activeAudienceTabPill"
              className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            />
          )}
          <Sparkles
            className={`w-3.5 h-3.5 transition-colors ${
              activeTab === "collectors" ? "text-amber-500" : "text-zinc-400"
            }`}
          />
          <span>For Collectors</span>
        </button>

        {/* Tab 2: For Savers */}
        <button
          type="button"
          onClick={() => onTabChange("savers")}
          className={`relative z-10 flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 cursor-pointer ${
            activeTab === "savers"
              ? "text-zinc-950 font-semibold"
              : "text-zinc-500 hover:text-zinc-900"
          }`}
          aria-pressed={activeTab === "savers"}
        >
          {activeTab === "savers" && (
            <motion.div
              layoutId="activeAudienceTabPill"
              className="absolute inset-0 bg-white rounded-full shadow-sm -z-10"
              transition={{ type: "spring", stiffness: 380, damping: 28 }}
            />
          )}
          <ShieldCheck
            className={`w-3.5 h-3.5 transition-colors ${
              activeTab === "savers" ? "text-emerald-500" : "text-zinc-400"
            }`}
          />
          <span>For Savers</span>
        </button>
      </div>
    </div>
  );
}
