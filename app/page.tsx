"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import WaitlistForm from "@/components/WaitlistForm";
import AudienceTabs from "@/components/AudienceTabs";
import PhoneMockup from "@/components/PhoneMockup";
import FeatureSection from "@/components/FeatureSection";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [audienceTab, setAudienceTab] = useState<"collectors" | "savers">("collectors");
  const [joinedToast, setJoinedToast] = useState(false);

  const handleWaitlistSuccess = (contact: string) => {
    setJoinedToast(true);
    setTimeout(() => setJoinedToast(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white flex flex-col justify-between relative overflow-x-hidden">
      {/* Top Minimal Navigation Bar */}
      <Navbar />

      {/* Organic, seamless ambient cyan/sky-blue gradient wash - Zero boxy clipping */}
      <div
        className="absolute inset-x-0 top-0 h-[1150px] pointer-events-none -z-0 overflow-hidden select-none flex items-center justify-center"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse 1000px 520px at 50% 510px, rgba(186, 230, 248, 0.62) 0%, rgba(214, 242, 254, 0.38) 35%, rgba(240, 249, 255, 0.12) 65%, transparent 85%)",
            filter: "blur(32px)",
          }}
        />
      </div>

      {/* Main Website Viewport */}
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-12 text-center relative z-10 flex-1">
        {/* Category Pill Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-semibold mb-4 shadow-2xs select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Built on CBN-compliant banking infrastructure • Powered by Wema Bank &amp; Anchor
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-editorial text-4xl sm:text-[50px] lg:text-[54px] text-zinc-900 font-normal tracking-tight leading-[1.12] max-w-2xl mx-auto"
        >
          The digital ledger for Africa&apos;s thrift economy
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-zinc-500 text-xs sm:text-[15px] mt-3.5 max-w-[520px] mx-auto leading-relaxed font-normal"
        >
          Digitizing traditional Alajo daily savings with an offline-first mobile ledger, instant SMS receipts, and zero-custody bank routing across Nigeria.
        </motion.p>

        {/* Email/Phone Waitlist Pill Form */}
        <motion.div
          id="waitlist"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 sm:mt-8 scroll-mt-28"
        >
          <WaitlistForm onSuccess={handleWaitlistSuccess} />
        </motion.div>

        {/* Audience Switcher Tabs: For Collectors vs For Savers */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <AudienceTabs activeTab={audienceTab} onTabChange={setAudienceTab} />
        </motion.div>

        {/* Phone Mockup Section with Ambient Glow and Floating Badges */}
        <div id="how-it-works" className="relative mt-4 scroll-mt-24">
          <PhoneMockup activeTab={audienceTab} />
        </div>

        {/* Problem & Solution Feature Cards */}
        <FeatureSection />

        {/* Frequently Asked Questions Section */}
        <div id="faq" className="scroll-mt-24">
          <FaqSection />
        </div>
      </main>

      {/* Subtle Minimal Footer */}
      <Footer />

      {/* Joined Waitlist Toast Notification */}
      <AnimatePresence>
        {joinedToast && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 bg-zinc-900 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-zinc-700"
          >
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div className="text-xs text-left">
              <div className="font-semibold">Demo APK Download Started!</div>
              <div className="text-zinc-400">Ajo-v0.1.apk is downloading to your device.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
