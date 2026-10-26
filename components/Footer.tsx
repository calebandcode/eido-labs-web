"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0c] text-white pt-16 sm:pt-20 pb-8 sm:pb-12 px-6 sm:px-12 mt-20 sm:mt-28 rounded-t-[36px] sm:rounded-t-[48px] border-t border-zinc-800/80 overflow-hidden select-none">
      <div className="max-w-6xl mx-auto">
        {/* Top 3-Column Content Row (Matching Reference) with Scroll Entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start text-left"
        >
          {/* Column 1: Mission blurb + 4 Circular Social Icon Buttons */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              We build mobile infrastructure that modernizes Africa&apos;s traditional thrift economy.
              Offline-first ledger, instant SMS receipts, and zero-custody bank routing for collectors and savers.
            </p>

            {/* Social Link: GitHub */}
            <div className="flex items-center gap-3 mt-6 sm:mt-8">
              {/* GitHub */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center transition-transform shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Column 2: Extra links */}
          <div className="md:col-span-3 md:pl-6">
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
              Extra links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400">
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  For Collectors
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  For Savers
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Corporate & Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
              Corporate & Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm text-zinc-400">
              <div>
                <div className="text-sm font-semibold text-white tracking-tight">
                  EIDO LABS LTD
                </div>
                <div className="text-[11px] font-mono text-emerald-400 font-medium mt-0.5">
                  CAC RC: 9934612
                </div>
              </div>

              <div>
                <p className="text-zinc-300 font-medium text-xs">Corporate Office</p>
                <p className="text-zinc-400 text-xs leading-relaxed mt-0.5">
                  2ND FLOOR, CORPORATE OFFICE WING,<br />
                  NOVARE GATEWAY MALL, MUSA YAR&apos;ADUA<br />
                  EXPRESSWAY, ABUJA, FCT, NIGERIA
                </p>
              </div>

              <div className="pt-0.5">
                <a
                  href="tel:+2347019496298"
                  className="hover:text-white transition-colors block font-mono text-xs sm:text-[13px]"
                >
                  +234 (0) 701-949-6298
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Massive Typographic Wordmark Spanning Full Width (Matching Bienes reference without TM) with Scroll Reveal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 overflow-hidden"
        >
          <h2 className="font-sans font-bold tracking-tighter text-white leading-[0.82] text-[12.5vw] sm:text-[13.5vw] md:text-[14vw] select-none text-left w-full whitespace-nowrap">
            Ajo Digital
          </h2>
        </motion.div>

        {/* Regulatory & Partner Banking Disclaimer (Anchor & Wema Bank Compliance) */}
        <div className="mt-8 pt-6 border-t border-zinc-900/80 text-left">
          <p className="text-[11px] sm:text-xs text-zinc-500 leading-relaxed max-w-4xl">
            AjoDigital is a financial technology platform built by EIDO LABS LTD (RC: 9934612). EIDO LABS LTD is a software company, not a bank. Banking and virtual account services are provided by Wema Bank via Anchor.
          </p>
        </div>

        {/* Bottom Bar: Copyright, Corporate Entity & Subtle Legal Links */}
        <div className="mt-4 pt-4 border-t border-zinc-900/60 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
            <p>© 2026 Ajo Digital.</p>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <span className="text-zinc-400 font-medium">EIDO LABS LTD</span>
            <span className="text-emerald-500/90 font-mono">(CAC RC: 9934612)</span>
            <span className="text-zinc-700 hidden sm:inline">•</span>
            <span>All rights reserved.</span>
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="#waitlist" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#waitlist" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <span className="text-zinc-500">Built for Africa&apos;s Street Economy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
