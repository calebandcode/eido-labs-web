"use client";

import React from "react";
import {
  Check,
  Building2,
  ArrowRight,
  Send,
  Lock,
  ShoppingBag,
  TrendingUp,
  Smartphone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureSection() {
  const scrollToWaitlist = () => {
    const el = document.getElementById("waitlist");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      const input = el.querySelector("input");
      if (input) setTimeout(() => input.focus(), 500);
    }
  };

  return (
    <section
      id="features"
      className="w-full max-w-5xl mx-auto mt-16 sm:mt-24 px-4 sm:px-6 select-none scroll-mt-24"
    >
      {/* Section Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-10 sm:mb-12"
      >
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-semibold mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          The Solution
        </span>
        <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-900 tracking-tight font-normal">
          A smart ledger built for the street
        </h2>
        <p className="text-zinc-500 text-xs sm:text-sm mt-2 max-w-[500px] mx-auto leading-relaxed">
          Modernizing Africa&apos;s paper thrift economy into a fast, transparent mobile infrastructure platform.
        </p>
      </motion.div>

      {/* Mofin-Style 2x2 Bento Grid with Scroll Animations */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 text-left">
        {/* CARD 1 (Top-Left): Pastel Sky Blue - Read-Only Digital Passbook */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
          className="md:col-span-5 rounded-[32px] bg-[#c3ddf2] p-7 sm:p-8 flex flex-col justify-between min-h-[350px] sm:min-h-[390px] relative overflow-hidden shadow-xs border border-blue-200/50 transition-shadow hover:shadow-lg"
        >
          {/* Large Translucent Watermark with subtle float */}
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-2 left-6 text-white/40 font-black text-7xl sm:text-8xl tracking-tighter select-none pointer-events-none"
          >
            AJO
          </motion.div>

          <div className="relative z-10">
            <span className="text-[11px] font-bold tracking-wider uppercase text-blue-900/70">
              SAVER EXPERIENCE
            </span>
          </div>

          <div className="relative z-10 mt-auto">
            <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-zinc-950 tracking-tight leading-tight">
              Digital Passbook
            </h3>
            <p className="text-xs text-blue-950/75 mt-2 max-w-[280px] leading-relaxed">
              Savers monitor their 30-day savings streak, check verified balances, and pay thrift directly via their dedicated Wema virtual account—all through a secure private link without passwords.
            </p>

            <motion.a
              href="https://github.com/calebandcode/ajodigital-demo/releases/download/v0.1.0-demo/Ajo-v0.1.apk"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-black text-white text-xs font-semibold px-5 py-3 hover:bg-zinc-800 transition-colors shadow-sm cursor-pointer"
            >
              <span>Download Demo (v0.1.0)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </motion.div>

        {/* CARD 2 (Top-Right): Soft Grey - Automated SMS Receipts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
          className="md:col-span-7 rounded-[32px] bg-[#f4f5f8] p-7 sm:p-8 flex flex-col justify-between min-h-[350px] sm:min-h-[390px] relative overflow-hidden shadow-xs border border-zinc-200/60 transition-shadow hover:shadow-lg"
        >
          <div>
            <div className="mb-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                INSTANT CONFIRMATION
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Automated SMS Receipts
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 max-w-[380px] leading-relaxed">
              Every cash collection or bank transfer triggers an immediate GSM SMS receipt straight to the contributor&apos;s feature phone via Termii—guaranteeing unshakeable market trust.
            </p>
          </div>

          {/* Visual UI Preview: Phone Edge + Overlapping Floating SMS Receipt Card */}
          <div className="mt-6 pt-2 relative flex items-end justify-between">
            {/* Background Phone Silhouette */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 0.85 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="hidden sm:block w-[210px] h-[195px] rounded-t-[26px] bg-white border-t border-x border-zinc-200/80 p-3.5 shadow-sm absolute right-4 bottom-0 pointer-events-none"
            >
              <div className="flex items-center justify-between text-[9px] text-zinc-400 font-semibold mb-2">
                <span>9:41</span>
                <span>Termii GSM</span>
              </div>
              <div className="text-[10px] font-bold text-zinc-800">SENDER: AJO-THRIFT</div>
              <div className="mt-2 p-2 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-between">
                <span className="text-[10px] text-zinc-500 font-medium">Wema Bank</span>
                <span className="text-[10px] font-bold text-zinc-800">₦28,000.00</span>
              </div>
              <div className="mt-2 text-[9px] text-zinc-400 leading-tight">
                [AJO PROOF] ₦2,000 received for Wed 14.
              </div>
              <div className="mt-2.5 flex items-center justify-center gap-3">
                <div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-bold text-zinc-600">
                  -
                </div>
                <span className="text-xs font-bold text-zinc-900">₦2,000</span>
                <div className="w-5 h-5 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-bold">
                  +
                </div>
              </div>
            </motion.div>

            {/* Overlapping Floating Verified Receipt Card with Spring Pop-In */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0, y: 15 }}
              whileInView={{ scale: 1, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 240, damping: 20, delay: 0.35 }}
              className="relative z-10 w-full sm:max-w-[290px] rounded-2xl bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-zinc-100"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0">
                  MB
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-zinc-900 truncate">Mama Bisi (Stall 14)</div>
                  <div className="text-[10px] text-zinc-400 truncate">Tomato Section • Cycle 2</div>
                </div>
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] ml-auto shrink-0 shadow-2xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-zinc-100">
                <div className="text-[10px] text-zinc-400">Savings Contribution</div>
                <div className="text-lg font-bold text-zinc-900 tabular-nums">₦2,000.00</div>
                <div className="mt-1.5 flex items-center justify-between text-[10px]">
                  <span className="text-zinc-500">Delivered to 0803 ••• 1928</span>
                  <span className="font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                    GSM Network ✓✓
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CARD 3 (Bottom-Left): Slate Grey - Offline-First Market Ledger */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
          className="md:col-span-7 rounded-[32px] bg-[#edf1f6] p-7 sm:p-8 flex flex-col justify-between min-h-[350px] sm:min-h-[390px] relative overflow-hidden shadow-xs border border-zinc-200/60 transition-shadow hover:shadow-lg"
        >
          <div>
            <div className="mb-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-zinc-400">
                STREET-READY ARCHITECTURE
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Offline-First Market Ledger
            </h3>
            <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 max-w-[440px] leading-relaxed">
              Collect physical cash and stamp daily cards deep inside dense, basement market stalls with zero internet connectivity. Transactions commit locally and sync seamlessly once signal returns.
            </p>
          </div>

          {/* Visual UI Preview: Daily Route Walk Cards (Layered Mofin Style) */}
          <div className="mt-6 relative">
            {/* Background Overlapping Settlement Pill Card */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 0.75, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-[88%] sm:w-[320px] rounded-2xl bg-white/70 backdrop-blur-xs p-3 px-4 border border-zinc-200/70 shadow-xs mb-[-12px] ml-4 flex items-center justify-between text-xs"
            >
              <div className="flex items-center gap-2 text-zinc-500">
                <Building2 className="w-3.5 h-3.5" />
                <span>Offline Mode Active</span>
              </div>
              <span className="font-bold text-zinc-800">14 Txns Queued to Sync</span>
            </motion.div>

            {/* Foreground Main Route Progress Card */}
            <div className="relative z-10 rounded-2xl bg-white p-4 sm:p-5 shadow-[0_12px_32px_rgba(0,0,0,0.05)] border border-zinc-100 max-w-[390px]">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400">
                    Daily Collection Route
                  </div>
                  <div className="text-sm font-bold text-zinc-900 mt-0.5">
                    Balogun Block C • Cycle 2
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/50">
                  Active Run
                </span>
              </div>

              {/* Progress Bar & Amount with Smooth Bar Fill */}
              <div className="mt-3.5 pt-3 border-t border-zinc-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-500">Total Collected Today</span>
                  <span className="text-sm font-bold text-zinc-900 tabular-nums">₦142,500.00</span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-100 mt-2 overflow-hidden flex">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "85%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-zinc-900 rounded-full"
                  />
                </div>
                <div className="flex items-center justify-between text-[10px] text-zinc-400 mt-1.5 font-medium">
                  <span>32 of 35 Traders Collected</span>
                  <span>3 Pending</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CARD 4 (Bottom-Right): Pale Mint Green - Automated Escrow & Payouts */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
          className="md:col-span-5 rounded-[32px] bg-[#dff1e9] p-7 sm:p-8 flex flex-col justify-between min-h-[350px] sm:min-h-[390px] relative overflow-hidden shadow-xs border border-emerald-200/50 transition-shadow hover:shadow-lg"
        >
          <div>
            <div className="mb-1">
              <span className="text-[11px] font-bold tracking-wider uppercase text-emerald-900/60">
                SETTLEMENT & TREASURY
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
              Automated Escrow & Payouts
            </h3>
            <p className="text-xs sm:text-sm text-emerald-950/75 mt-1.5 leading-relaxed">
              Collections sit in a bank-backed escrow pool. On Day 30, Day 1 Alajo fees are retained and net payouts sweep directly into trader bank accounts.
            </p>
          </div>

          {/* Visual UI Preview: Sleek Black Card with Radiating Satellite Connection Nodes (Mofin Reference) */}
          <div className="mt-4 pt-1 relative flex items-center justify-center h-[160px]">
            {/* SVG Connecting Curved Lines with Animated Drawing */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 320 180"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Curve to Top-Left */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                d="M 110 80 C 80 75, 55 60, 40 45"
                stroke="#a7d0c0"
                strokeWidth="1.2"
                strokeDasharray="2 3"
              />
              {/* Curve to Top-Center */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                d="M 160 55 C 160 38, 175 25, 205 20"
                stroke="#a7d0c0"
                strokeWidth="1.2"
                strokeDasharray="2 3"
              />
              {/* Curve to Top-Right */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                d="M 215 75 C 245 65, 265 50, 280 40"
                stroke="#a7d0c0"
                strokeWidth="1.2"
                strokeDasharray="2 3"
              />
              {/* Curve to Bottom-Left */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35 }}
                d="M 105 110 C 75 125, 60 140, 45 155"
                stroke="#a7d0c0"
                strokeWidth="1.2"
                strokeDasharray="2 3"
              />
              {/* Curve to Bottom-Center */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                d="M 160 135 C 160 150, 165 162, 175 168"
                stroke="#a7d0c0"
                strokeWidth="1.2"
                strokeDasharray="2 3"
              />
              {/* Curve to Bottom-Right */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.45 }}
                d="M 215 115 C 245 128, 265 142, 280 152"
                stroke="#a7d0c0"
                strokeWidth="1.2"
                strokeDasharray="2 3"
              />
            </svg>

            {/* Center Sleek Black Card */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-[176px] h-[98px] rounded-2xl bg-zinc-900 text-white p-3 shadow-xl relative z-10 flex flex-col justify-between border border-zinc-800"
            >
              <div className="flex items-center justify-between">
                <span className="text-[8px] uppercase tracking-wider text-zinc-400 font-medium">
                  PAYOUT SETTLEMENT
                </span>
                <span className="font-bold text-[11px] tracking-tight text-white">Alhaji Kassim</span>
              </div>

              <div>
                <div className="text-[10px] text-zinc-400 font-mono tracking-wider">
                  30-Day Thrift: ₦120,000
                </div>
                <div className="text-[9px] text-emerald-400 font-medium mt-0.5 truncate">
                  Net Disbursed: ₦116,000 (Access)
                </div>
              </div>
            </motion.div>

            {/* Satellite Circular Badge Nodes popping in with spring scale */}
            {/* Node 1: Top Center */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, type: "spring", stiffness: 280, damping: 18 }}
              className="absolute top-1 right-[34%] w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-emerald-700 z-20 border border-emerald-100"
              title="Termii SMS Alert"
            >
              <Send className="w-3.5 h-3.5" />
            </motion.div>

            {/* Node 2: Top Right */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42, type: "spring", stiffness: 280, damping: 18 }}
              className="absolute top-5 right-3 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-blue-700 z-20 border border-blue-100"
              title="Wema Escrow Pool"
            >
              <Building2 className="w-3.5 h-3.5" />
            </motion.div>

            {/* Node 3: Top Left */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.49, type: "spring", stiffness: 280, damping: 18 }}
              className="absolute top-5 left-3 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-amber-700 z-20 border border-amber-100"
              title="Day 1 Fee Retained"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
            </motion.div>

            {/* Node 4: Bottom Left */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.56, type: "spring", stiffness: 280, damping: 18 }}
              className="absolute bottom-2 left-3 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-cyan-700 z-20 border border-cyan-100"
              title="Instant NIBSS Sweep"
            >
              <TrendingUp className="w-3.5 h-3.5" />
            </motion.div>

            {/* Node 5: Bottom Center */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.63, type: "spring", stiffness: 280, damping: 18 }}
              className="absolute -bottom-1 right-[42%] w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-emerald-700 z-20 border border-emerald-100"
              title="Zero Float Loss"
            >
              <Lock className="w-3.5 h-3.5" />
            </motion.div>

            {/* Node 6: Bottom Right */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, type: "spring", stiffness: 280, damping: 18 }}
              className="absolute bottom-2 right-3 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center text-zinc-700 z-20 border border-zinc-100"
              title="Commercial Bank Settlement"
            >
              <Smartphone className="w-3.5 h-3.5" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
