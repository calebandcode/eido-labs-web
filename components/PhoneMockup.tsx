"use client";

import React, { useState, useEffect } from "react";
import {
  Signal,
  Wifi,
  Battery,
  Zap,
  ShieldCheck,
  Eye,
  Settings,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Wallet,
  CreditCard,
  Layers,
  ArrowUpRight,
  Search,
  Scan,
  ArrowRight,
  ArrowLeftRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PhoneMockupProps {
  activeTab?: "collectors" | "savers";
}

export default function PhoneMockup({ activeTab = "collectors" }: PhoneMockupProps) {
  // Live ticking sync counter for collector
  const [totalCollected, setTotalCollected] = useState(38500);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalCollected((prev) => prev + 500);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const isCollectors = activeTab === "collectors";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[340px] sm:max-w-[370px] mx-auto mt-10 sm:mt-12 select-none"
    >
      {/* Floating Badge Left */}
      <motion.div
        initial={{ opacity: 0, x: -35, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, type: "spring", stiffness: 220, damping: 18 }}
        className="absolute -left-5 sm:-left-12 top-12 sm:top-14 z-30 animate-float-badge"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 px-3.5 sm:px-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center gap-2.5 hover:shadow-xl transition-all cursor-default border border-zinc-100">
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-sm transition-transform hover:scale-105">
            {isCollectors ? (
              <Zap className="w-3.5 h-3.5 stroke-[2.5] text-amber-400" />
            ) : (
              <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5] text-emerald-400" />
            )}
          </div>
          <div className="text-left">
            <div className="text-[10px] text-zinc-400 font-medium leading-none">
              {isCollectors ? "Offline Ledger Active" : "Verified Passbook"}
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight mt-1 tabular-nums">
              {isCollectors ? `₦${totalCollected.toLocaleString()} logged` : "₦7,000.00 Saved"}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Badge Right */}
      <motion.div
        initial={{ opacity: 0, x: 35, scale: 0.8 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.45, type: "spring", stiffness: 220, damping: 18 }}
        className="absolute -right-3 sm:-right-8 top-32 sm:top-36 z-30 animate-float-delayed"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 sm:py-2 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center gap-2 hover:shadow-xl transition-all cursor-default border border-zinc-100">
          <div className="flex items-center -space-x-2">
            <div className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[8px] flex items-center justify-center border-1.5 border-white">
              AK
            </div>
            <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-bold text-[8px] flex items-center justify-center border-1.5 border-white">
              BS
            </div>
            <div className="w-5 h-5 rounded-full bg-amber-500 text-white font-bold text-[8px] flex items-center justify-center border-1.5 border-white">
              C
            </div>
          </div>

          <span className="text-[11px] font-semibold text-zinc-800 pr-1">
            {isCollectors ? "3 Payout Requests" : "Streak Active • Day 26"}
          </span>
        </div>
      </motion.div>

      {/* Main iPhone Pro Chassis */}
      <div className="relative">
        <div
          className="relative mx-auto w-[310px] sm:w-[340px] rounded-[48px] sm:rounded-[52px] p-2.5 sm:p-3 bg-gradient-to-b from-[#2e2e33] via-[#1d1d21] to-[#121215] shadow-[0_30px_70px_rgba(0,0,0,0.14)]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 82%, rgba(0,0,0,0.5) 92%, transparent 99%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 82%, rgba(0,0,0,0.5) 92%, transparent 99%)",
          }}
        >
          {/* Side Button Outlines */}
          <div className="absolute -left-[3px] top-28 w-[3px] h-9 bg-zinc-700/80 rounded-l-sm" />
          <div className="absolute -left-[3px] top-40 w-[3px] h-12 bg-zinc-700/80 rounded-l-sm" />
          <div className="absolute -left-[3px] top-56 w-[3px] h-12 bg-zinc-700/80 rounded-l-sm" />
          <div className="absolute -right-[3px] top-36 w-[3px] h-16 bg-zinc-700/80 rounded-r-sm" />

          {/* Screen Bezel & Display */}
          <div className="relative rounded-[38px] sm:rounded-[42px] bg-[#fbfbfd] overflow-hidden pt-2 px-3 sm:px-3.5 pb-10 shadow-inner min-h-[580px] sm:min-h-[610px]">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-3 pt-1 text-zinc-900">
              <span className="text-[11px] font-semibold tracking-tight">
                {isCollectors ? "19:28" : "19:29"}
              </span>

              {/* Dynamic Island */}
              <div className="w-24 h-5 bg-black rounded-full mx-auto flex items-center justify-end px-2 gap-1 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#1c1c1e] ring-1 ring-zinc-700/40" />
              </div>

              <div className="flex items-center gap-1.5 text-zinc-900">
                <Signal className="w-3 h-3 stroke-[2]" />
                <Wifi className="w-3 h-3 stroke-[2]" />
                <div className="flex items-center gap-0.5">
                  <span className="text-[9px] font-bold">51</span>
                  <Battery className="w-3.5 h-3.5 stroke-[2]" />
                </div>
              </div>
            </div>

            {/* Dynamic Screen Contents with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                {isCollectors ? (
                  /* =========================================================
                     ALAJO / COLLECTOR SCREEN (Image 2)
                     ========================================================= */
                  <div className="mt-2.5 text-left">
                    {/* App Header */}
                    <div className="flex items-center justify-between px-1">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black text-zinc-950 tracking-tight">Ajo</span>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#e6f7f2] border border-[#a7f3d0] text-[#065f46] text-[10px] font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Agent</span>
                          <ChevronDown className="w-2.5 h-2.5" />
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <div className="p-1 text-zinc-800">
                          <Scan className="w-4 h-4" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-zinc-300 text-white flex items-center justify-center shadow-xs">
                          <Settings className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Today's Cash Collected */}
                    <div className="mt-4 px-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        <span>TODAY&apos;S CASH COLLECTED</span>
                        <Eye className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      <div className="text-[28px] font-black tracking-tight text-zinc-950 mt-0.5 tabular-nums">
                        ₦{totalCollected.toLocaleString()}.00
                      </div>
                    </div>

                    {/* Two Metric Cards: My Earnings & Payout Pool */}
                    <div className="grid grid-cols-2 gap-2 mt-3.5">
                      <div className="bg-white rounded-2xl p-3 border border-zinc-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                        <div className="w-7 h-7 rounded-lg bg-amber-100/70 text-amber-600 flex items-center justify-center">
                          <Wallet className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-xs font-bold text-zinc-900 mt-2">My Earnings</div>
                        <div className="text-[9px] text-zinc-400 font-medium mt-0.5">
                          ₦16,000 Available
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-3 border border-zinc-100/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
                        <div className="w-7 h-7 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center">
                          <Layers className="w-3.5 h-3.5" />
                        </div>
                        <div className="text-xs font-bold text-zinc-900 mt-2">Payout Pool</div>
                        <div className="text-[9px] text-zinc-400 font-medium mt-0.5">
                          ₦202,500.00 Total
                        </div>
                      </div>
                    </div>

                    {/* 3 Payout Requests Banner */}
                    <div className="mt-3 bg-[#fefce8] border border-[#fef08a] rounded-2xl p-2.5 px-3 flex items-center justify-between shadow-2xs">
                      <div>
                        <div className="text-[8px] font-bold uppercase tracking-wider text-amber-900/80">
                          3 PAYOUT REQUESTS
                        </div>
                        <div className="text-xs font-bold text-zinc-900 mt-0.5">
                          Alhaji Kassim &amp; 2 other
                        </div>
                      </div>
                      <button
                        type="button"
                        className="rounded-full bg-black text-white text-[10px] font-semibold px-3 py-1 flex items-center gap-1 shadow-xs cursor-pointer hover:bg-zinc-800 transition-colors"
                      >
                        <span>Review</span>
                        <ArrowRight className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    {/* Search Bar */}
                    <div className="mt-3 bg-zinc-100/90 rounded-full px-3 py-2 flex items-center gap-2">
                      <Search className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span className="text-[10px] text-zinc-400 font-normal">
                        Search trader, stall, or phone...
                      </span>
                    </div>

                    {/* Filter Tabs */}
                    <div className="mt-2.5 flex items-center gap-1.5 overflow-x-hidden">
                      <span className="bg-black text-white text-[10px] font-semibold px-3 py-1 rounded-full shadow-2xs">
                        All 9
                      </span>
                      <span className="bg-zinc-100 text-zinc-600 text-[10px] font-medium px-2.5 py-1 rounded-full">
                        Pending 9
                      </span>
                      <span className="bg-zinc-100 text-zinc-600 text-[10px] font-medium px-2.5 py-1 rounded-full">
                        Paid 0
                      </span>
                      <span className="bg-[#fef3c7] text-[#92400e] text-[10px] font-medium px-2.5 py-1 rounded-full">
                        Payouts 3
                      </span>
                    </div>

                    {/* Contributor List */}
                    <div className="mt-3 space-y-2">
                      {/* Alhaji Kassim */}
                      <div className="flex items-center justify-between p-1 rounded-xl">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#0d9488] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                            AK
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900">Alhaji Kassim</div>
                            <div className="text-[9px] text-zinc-400">Provision Store • Block C</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-amber-600">₦4,000.00</div>
                          <div className="text-[8px] text-amber-700 font-medium flex items-center gap-1 justify-end">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Payout Req
                          </div>
                        </div>
                      </div>

                      {/* Baba Segun */}
                      <div className="flex items-center justify-between p-1 rounded-xl">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#2563eb] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                            BS
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900">Baba Segun</div>
                            <div className="text-[9px] text-zinc-400">Lockup 12 • Hardware &amp; Tools</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-amber-600">₦3,000.00</div>
                          <div className="text-[8px] text-amber-600 font-medium flex items-center gap-1 justify-end">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Pending
                          </div>
                        </div>
                      </div>

                      {/* Caleb */}
                      <div className="flex items-center justify-between p-1 rounded-xl">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#f59e0b] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                            C
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900">Caleb</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-amber-600">₦1,000.00</div>
                        </div>
                      </div>

                      {/* Chukwuma Electronics */}
                      <div className="flex items-center justify-between p-1 rounded-xl opacity-80">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#ea580c] text-white font-bold text-[11px] flex items-center justify-center shrink-0">
                            CE
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900">Chukwuma Electronics</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-amber-600">₦5,000.00</div>
                        </div>
                      </div>
                    </div>

                    {/* Floating Add Contributor Button */}
                    <div className="mt-3 text-center">
                      <button
                        type="button"
                        className="w-[88%] mx-auto bg-black text-white text-xs font-bold py-2.5 rounded-full shadow-lg cursor-pointer hover:bg-zinc-800 transition-colors"
                      >
                        Add Contributor
                      </button>
                    </div>
                  </div>
                ) : (
                  /* =========================================================
                     SAVER SCREEN (Image 1)
                     ========================================================= */
                  <div className="mt-2.5 text-left">
                    {/* App Header */}
                    <div className="flex items-center justify-between px-1">
                      <span className="text-xl font-black text-zinc-950 tracking-tight">Ajo</span>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#e6f7f2] border border-[#a7f3d0] text-[#0d9488] text-[10px] font-semibold">
                          <ArrowLeftRight className="w-2.5 h-2.5 text-[#0d9488]" />
                          <span>Switch</span>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#f59e0b] text-white font-bold text-xs flex items-center justify-center shadow-2xs">
                          C
                        </div>
                        <div className="w-7 h-7 rounded-full bg-zinc-300 text-white flex items-center justify-center shadow-xs">
                          <Settings className="w-3.5 h-3.5 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Current Savings */}
                    <div className="mt-4 px-1">
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                        <span>CURRENT SAVINGS</span>
                        <Eye className="w-3.5 h-3.5 text-zinc-400" />
                      </div>
                      <div className="text-[28px] font-black tracking-tight text-zinc-950 mt-0.5 tabular-nums">
                        ₦7,000.00
                      </div>
                    </div>

                    {/* Calendar Strip Header */}
                    <div className="mt-3.5 px-1 flex items-center justify-between">
                      <span className="text-xs font-bold text-zinc-900">Oct - Nov 2026</span>
                      <div className="flex items-center gap-1 bg-zinc-100 rounded-full px-1.5 py-0.5">
                        <ChevronLeft className="w-3 h-3 text-zinc-600" />
                        <ChevronRight className="w-3 h-3 text-zinc-600" />
                      </div>
                    </div>

                    {/* 7-Day Horizontal Strip */}
                    <div className="grid grid-cols-7 gap-1 mt-2 text-center">
                      {/* Mon 26 (Active) */}
                      <div className="bg-[#dbeafe] text-[#0369a1] rounded-2xl py-1.5 px-0.5 flex flex-col items-center shadow-2xs">
                        <span className="text-[8px] font-bold">MON</span>
                        <span className="text-xs font-extrabold mt-0.5">26</span>
                        <span className="w-1 h-1 rounded-full bg-amber-500 mt-1" />
                      </div>

                      {/* Tue 27 */}
                      <div className="py-1.5 px-0.5 flex flex-col items-center">
                        <span className="text-[8px] font-bold text-zinc-400">TUE</span>
                        <span className="text-xs font-bold text-zinc-800 mt-0.5">27</span>
                      </div>

                      {/* Wed 28 */}
                      <div className="py-1.5 px-0.5 flex flex-col items-center">
                        <span className="text-[8px] font-bold text-zinc-400">WED</span>
                        <span className="text-xs font-bold text-zinc-800 mt-0.5">28</span>
                      </div>

                      {/* Thu 29 */}
                      <div className="py-1.5 px-0.5 flex flex-col items-center">
                        <span className="text-[8px] font-bold text-zinc-400">THU</span>
                        <span className="text-xs font-bold text-zinc-800 mt-0.5">29</span>
                      </div>

                      {/* Fri 30 */}
                      <div className="py-1.5 px-0.5 flex flex-col items-center">
                        <span className="text-[8px] font-bold text-zinc-400">FRI</span>
                        <span className="text-xs font-bold text-zinc-800 mt-0.5">30</span>
                      </div>

                      {/* Sat 31 */}
                      <div className="py-1.5 px-0.5 flex flex-col items-center">
                        <span className="text-[8px] font-bold text-zinc-400">SAT</span>
                        <span className="text-xs font-bold text-zinc-800 mt-0.5">31</span>
                      </div>

                      {/* Sun 1 */}
                      <div className="py-1.5 px-0.5 flex flex-col items-center">
                        <span className="text-[8px] font-bold text-zinc-400">SUN</span>
                        <span className="text-xs font-bold text-zinc-800 mt-0.5">1</span>
                      </div>
                    </div>

                    {/* What would you like to do? */}
                    <div className="mt-4 px-1">
                      <div className="text-xs font-bold text-zinc-900 mb-2">
                        What would you like to do?
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {/* Pay Thrift Card */}
                        <div className="bg-white rounded-2xl p-3 border border-zinc-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] min-h-[92px] flex flex-col justify-between">
                          <div className="w-8 h-8 rounded-xl bg-pink-100/80 text-pink-500 flex items-center justify-center">
                            <Wallet className="w-4 h-4" />
                          </div>
                          <div className="text-xs font-bold text-zinc-900 mt-3">Pay Thrift</div>
                        </div>

                        {/* Payout Account Card */}
                        <div className="bg-white rounded-2xl p-3 border border-zinc-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] min-h-[92px] flex flex-col justify-between">
                          <div className="w-8 h-8 rounded-xl bg-cyan-100/80 text-teal-600 flex items-center justify-center">
                            <CreditCard className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-zinc-900 mt-3">Payout Account</div>
                            <div className="text-[9px] text-zinc-400">Guaranty • 6789</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Transactions Section */}
                    <div className="mt-4 px-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-zinc-900">Transactions</span>
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
                      </div>

                      <div className="space-y-2">
                        {/* Item 1 */}
                        <div className="flex items-center justify-between py-1">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-zinc-900">Day 20 Collection</div>
                              <div className="text-[9px] text-zinc-400">Processed</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-zinc-900">+ ₦1,000.00</div>
                            <div className="text-[9px] text-zinc-400">Today, Oct 20</div>
                          </div>
                        </div>

                        {/* Item 2 */}
                        <div className="flex items-center justify-between py-1">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-zinc-900">Day 18 Collection</div>
                              <div className="text-[9px] text-zinc-400">Processed</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-zinc-900">+ ₦1,000.00</div>
                            <div className="text-[9px] text-zinc-400">Today, Oct 18</div>
                          </div>
                        </div>

                        {/* Item 3 */}
                        <div className="flex items-center justify-between py-1 opacity-90">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                              <ArrowUpRight className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-zinc-900">Day 18 Collection</div>
                              <div className="text-[9px] text-zinc-400">Processed</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xs font-bold text-zinc-900">+ ₦1,000.00</div>
                            <div className="text-[9px] text-zinc-400">Oct 18 (Advance)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
