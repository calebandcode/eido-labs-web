"use client";

import React, { useState, useEffect } from "react";
import {
  Check,
  Signal,
  Wifi,
  Battery,
  Zap,
  ShieldCheck,
  Send,
  Building2,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PhoneMockupProps {
  activeTab?: "collectors" | "savers";
}

export default function PhoneMockup({ activeTab = "collectors" }: PhoneMockupProps) {
  // Live ticking sync counter for collector
  const [syncedEntries, setSyncedEntries] = useState(48);
  const [totalCollected, setTotalCollected] = useState(142500);

  const [task1Completed, setTask1Completed] = useState(true);
  const [task2Completed, setTask2Completed] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTotalCollected((prev) => prev + 500);
      setSyncedEntries((prev) => prev + 1);
    }, 4000);
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
        <div className="bg-white/95 backdrop-blur-md rounded-[20px] p-2.5 sm:p-3 px-3.5 sm:px-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center gap-2.5 hover:shadow-xl transition-all cursor-default">
          <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white shrink-0 shadow-sm transition-transform hover:scale-105">
            {isCollectors ? (
              <Zap className="w-3.5 h-3.5 stroke-[2.5] text-amber-400" />
            ) : (
              <ShieldCheck className="w-3.5 h-3.5 stroke-[2.5] text-emerald-400" />
            )}
          </div>
          <div className="text-left">
            <div className="text-[10px] text-zinc-400 font-medium leading-none">
              {isCollectors ? "Offline Ledger Active" : "Zero-Custody Routing"}
            </div>
            <div className="text-xs sm:text-sm font-bold text-zinc-900 tracking-tight mt-1 tabular-nums">
              {isCollectors ? `₦${totalCollected.toLocaleString()} logged` : "Direct Bank Settlement"}
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
        <div className="bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 sm:py-2 shadow-[0_12px_32px_rgba(0,0,0,0.06)] flex items-center gap-2 hover:shadow-xl transition-all cursor-default">
          <div className="flex items-center -space-x-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
              alt="Contributor"
              className="w-5 h-5 rounded-full border-1.5 border-white object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
              alt="Contributor"
              className="w-5 h-5 rounded-full border-1.5 border-white object-cover"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
              alt="Contributor"
              className="w-5 h-5 rounded-full border-1.5 border-white object-cover"
            />
          </div>

          <div
            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] shadow-sm text-white transition-colors duration-300 ${
              isCollectors ? "bg-emerald-600" : "bg-black"
            }`}
          >
            {isCollectors ? (
              <Send className="w-2.5 h-2.5 stroke-[2.5]" />
            ) : (
              <Check className="w-3 h-3 stroke-[3]" />
            )}
          </div>
          <span className="text-[11px] font-semibold text-zinc-800 pr-1">
            {isCollectors ? "SMS Sent ✓" : "Passbook Live"}
          </span>
        </div>
      </motion.div>

      {/* Main iPhone Pro Chassis with Natural Bottom Fade Mask */}
      <div className="relative">
        <div
          className="relative mx-auto w-[310px] sm:w-[340px] rounded-[48px] sm:rounded-[52px] p-2.5 sm:p-3 bg-gradient-to-b from-[#2e2e33] via-[#1d1d21] to-[#121215] shadow-[0_30px_70px_rgba(0,0,0,0.14)]"
          style={{
            maskImage:
              "linear-gradient(to bottom, black 0%, black 48%, rgba(0,0,0,0.7) 64%, rgba(0,0,0,0.2) 80%, transparent 94%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 48%, rgba(0,0,0,0.7) 64%, rgba(0,0,0,0.2) 80%, transparent 94%)",
          }}
        >
          {/* Side Button Outlines */}
          <div className="absolute -left-[3px] top-28 w-[3px] h-9 bg-zinc-700/80 rounded-l-sm" />
          <div className="absolute -left-[3px] top-40 w-[3px] h-12 bg-zinc-700/80 rounded-l-sm" />
          <div className="absolute -left-[3px] top-56 w-[3px] h-12 bg-zinc-700/80 rounded-l-sm" />
          <div className="absolute -right-[3px] top-36 w-[3px] h-16 bg-zinc-700/80 rounded-r-sm" />

          {/* Screen Bezel & Display */}
          <div className="relative rounded-[38px] sm:rounded-[42px] bg-[#fbfbfd] overflow-hidden pt-2 px-3 sm:px-3.5 pb-24 shadow-inner">
            {/* Status Bar */}
            <div className="flex items-center justify-between px-3 pt-1 text-zinc-900">
              <span className="text-[11px] font-semibold tracking-tight">9:41</span>

              {/* Dynamic Island */}
              <div className="w-24 h-5 bg-black rounded-full mx-auto flex items-center justify-end px-2 gap-1 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#1c1c1e] ring-1 ring-zinc-700/40" />
              </div>

              <div className="flex items-center gap-1.5 text-zinc-900">
                <Signal className="w-3 h-3 stroke-[2]" />
                <Wifi className="w-3 h-3 stroke-[2]" />
                <div className="flex items-center">
                  <Battery className="w-4 h-4 stroke-[2]" />
                </div>
              </div>
            </div>

            {/* Dynamic Screen Contents for Collectors vs Savers with AnimatePresence */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8, filter: "blur(2px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -8, filter: "blur(2px)" }}
                transition={{ duration: 0.28, ease: "easeInOut" }}
              >
                {isCollectors ? (
                  /* COLLECTOR (ALAJO) VIEW */
                  <>
                    {/* Route & Collector Header */}
                    <div className="mt-3 px-1 text-left flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                          Tomato Section • Circle 2
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight leading-tight">
                          Daily Market Route
                        </h3>
                      </div>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200/60">
                        <Zap className="w-2.5 h-2.5 text-amber-500 fill-amber-500" />
                        Offline
                      </span>
                    </div>

                    {/* Quick Summary Pill */}
                    <div className="mt-2.5 px-3 py-2 rounded-xl bg-zinc-100/90 text-left flex items-center justify-between text-[11px]">
                      <span className="text-zinc-500 font-medium">Today&apos;s Tally</span>
                      <span className="font-bold text-zinc-900">₦{totalCollected.toLocaleString()}</span>
                    </div>

                    {/* Section Title */}
                    <div className="mt-3 px-1 text-left">
                      <div className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-2">
                        RECENT COLLECTIONS
                      </div>

                      {/* Entry 1 */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setTask1Completed(!task1Completed)}
                        className="bg-white rounded-2xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] mb-2 transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-zinc-900">
                              Mama Bisi (Stall 14)
                            </span>
                          </div>
                          <span className="font-bold text-xs text-zinc-900">
                            +₦2,000
                          </span>
                        </div>
                        <div className="text-[10px] text-zinc-400 ml-7 mt-0.5">
                          Cash Logged • SMS Receipt Delivered
                        </div>
                        <div className="ml-7 mt-1.5 flex items-center gap-1.5">
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 inline-flex items-center gap-1">
                            <Send className="w-2.5 h-2.5" /> SMS Confirmed
                          </span>
                        </div>
                      </motion.div>

                      {/* Entry 2 */}
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setTask2Completed(!task2Completed)}
                        className="bg-white/90 rounded-2xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] mb-2 transition-all cursor-pointer"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center">
                              <Building2 className="w-2.5 h-2.5" />
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-zinc-900">
                              Iya Chukwudi (Main Gate)
                            </span>
                          </div>
                          <span className="font-bold text-xs text-zinc-900">
                            +₦5,000
                          </span>
                        </div>
                        <div className="text-[10px] text-zinc-400 ml-7 mt-0.5">
                          OPay Virtual Transfer • Zero-Custody
                        </div>
                        <div className="ml-7 mt-1.5">
                          <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">
                            Direct Bank Routing
                          </span>
                        </div>
                      </motion.div>

                      {/* Entry 3 (Pending) */}
                      <div className="bg-white/60 rounded-2xl p-3 shadow-sm opacity-80 text-left">
                        <div className="flex items-center justify-between text-zinc-600">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full border-2 border-zinc-300" />
                            <span className="text-xs font-medium">Alhaji Musa (Textiles)</span>
                          </div>
                          <span className="text-xs font-semibold text-zinc-500">₦3,000</span>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  /* SAVER (CONTRIBUTOR DIGITAL PASSBOOK) VIEW */
                  <>
                    {/* Passbook Header */}
                    <div className="mt-3 px-1 text-left flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-400">
                          Mama Bisi • Stall 14
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-zinc-900 tracking-tight leading-tight">
                          Digital Passbook
                        </h3>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 inline-flex items-center gap-1">
                        <ShieldCheck className="w-2.5 h-2.5" /> Verified
                      </span>
                    </div>

                    {/* Passbook Balance Card */}
                    <div className="mt-2.5 p-3 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 text-white text-left shadow-sm">
                      <div className="text-[10px] text-zinc-400 font-medium">Total Saved This Month</div>
                      <div className="text-xl font-bold tracking-tight mt-0.5">₦62,000.00</div>
                      <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-400 border-t border-white/10 pt-1.5">
                        <span>Alajo: Pa Sunday O.</span>
                        <span>Day 21 of 30</span>
                      </div>
                    </div>

                    {/* Section Title */}
                    <div className="mt-3 px-1 text-left">
                      <div className="text-[10px] font-bold tracking-wider text-zinc-400 uppercase mb-2">
                        PAYMENT HISTORY
                      </div>

                      {/* Entry 1 */}
                      <div className="bg-white rounded-2xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] mb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-zinc-900">Today&apos;s Daily Cash</div>
                              <div className="text-[10px] text-zinc-400">11:32 AM • SMS Confirmed</div>
                            </div>
                          </div>
                          <span className="font-bold text-xs text-emerald-600">+₦2,000</span>
                        </div>
                      </div>

                      {/* Entry 2 */}
                      <div className="bg-white/90 rounded-2xl p-3 shadow-[0_2px_8px_rgba(0,0,0,0.03)] mb-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </div>
                            <div>
                              <div className="text-xs font-semibold text-zinc-900">Yesterday&apos;s Daily Cash</div>
                              <div className="text-[10px] text-zinc-400">11:15 AM • SMS Confirmed</div>
                            </div>
                          </div>
                          <span className="font-bold text-xs text-emerald-600">+₦2,000</span>
                        </div>
                      </div>

                      {/* Entry 3 */}
                      <div className="bg-white/60 rounded-2xl p-2.5 shadow-sm opacity-80">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] text-zinc-500 font-medium">Bank Transfer via OPay</span>
                          <span className="text-xs font-bold text-zinc-700">+₦2,000</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
