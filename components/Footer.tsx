"use client";

import React from "react";
import Link from "next/link";
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

            {/* 4 Circular Social Icon Buttons (White background with black icons) */}
            <div className="flex items-center gap-3 mt-6 sm:mt-8">
              {/* Instagram */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center transition-transform shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>

              {/* Facebook */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center transition-transform shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </motion.a>

              {/* X / Twitter */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center transition-transform shadow-md"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </motion.a>

              {/* YouTube */}
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center transition-transform shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
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
                <Link href="#" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
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
              <li>
                <a href="#waitlist" className="hover:text-white transition-colors">
                  Join Waitlist
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-4">
              Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-zinc-400">
              <div>
                <p className="text-zinc-300 font-medium">Balogun Business District</p>
                <p className="text-zinc-500">Lagos Island, Lagos, Nigeria</p>
              </div>

              <div>
                <a
                  href="mailto:hello@ajodigital.com"
                  className="hover:text-white transition-colors block"
                >
                  hello@ajodigital.com
                </a>
              </div>

              <div>
                <a
                  href="tel:+2348002563444"
                  className="hover:text-white transition-colors block font-mono text-xs sm:text-[13px]"
                >
                  +234 (0) 800-AJO-DIGITAL
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Massive Typographic Wordmark Spanning Full Width (Matching Bienes™) with Scroll Reveal */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 sm:mt-20 overflow-hidden"
        >
          <h2 className="font-sans font-bold tracking-tighter text-white leading-[0.82] text-[12.5vw] sm:text-[13.5vw] md:text-[14vw] select-none text-left w-full whitespace-nowrap">
            Ajo Digital<span className="text-[0.42em] align-super font-semibold text-white ml-0.5">™</span>
          </h2>
        </motion.div>

        {/* Bottom Bar: Copyright & Subtle Legal Links */}
        <div className="mt-6 pt-6 border-t border-zinc-900/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p>© 2026 Ajo Digital. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#waitlist" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#waitlist" className="hover:text-zinc-400 transition-colors">
              Terms of Service
            </a>
            <span>•</span>
            <span>Built for Africa&apos;s Street Economy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
