"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToWaitlist = () => {
    setMobileMenuOpen(false);
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement | null;
    if (emailInput) {
      emailInput.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        emailInput.focus();
      }, 500);
    }
  };

  const navLinks = [
    { name: "How it works", href: "#how-it-works" },
    { name: "Features", href: "#features" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-zinc-100/80 transition-all select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 h-16 sm:h-[70px] flex items-center justify-between">
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#1a252c] hover:opacity-90 transition-opacity"
        >
          {/* Geometric interlocking squares logo */}
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#1a252c] shrink-0"
          >
            {/* Upper-left larger rounded rectangle */}
            <rect
              x="2"
              y="2.5"
              width="13"
              height="13"
              rx="3"
              stroke="currentColor"
              strokeWidth="2.4"
            />
            {/* Lower-right smaller rounded rectangle intersecting */}
            <rect
              x="9.5"
              y="10"
              width="10.5"
              height="10.5"
              rx="2.6"
              stroke="currentColor"
              strokeWidth="2.4"
            />
          </svg>

          {/* Ajo Digital wordmark */}
          <span className="font-bold text-[21px] sm:text-[22px] tracking-[-0.035em] text-[#1a252c] leading-none font-sans flex items-center gap-1.5">
            ajo <span className="font-medium text-zinc-400">digital</span>
          </span>
        </Link>

        {/* Center/Right: Navigation Links & Join Waitlist Button */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[15px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA Button: Join waitlist */}
          <button
            type="button"
            onClick={scrollToWaitlist}
            className="rounded-full bg-black text-white text-xs sm:text-[13px] font-medium px-4 sm:px-5 py-2.5 transition-all duration-200 hover:bg-zinc-800 active:scale-95 shadow-sm cursor-pointer"
          >
            Join waitlist
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={scrollToWaitlist}
            className="rounded-full bg-black text-white text-xs font-medium px-3.5 py-1.5 transition-all hover:bg-zinc-800 active:scale-95 cursor-pointer"
          >
            Join
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-600 hover:text-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-zinc-100 px-6 py-5 flex flex-col gap-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 text-base font-medium text-zinc-700 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            type="button"
            onClick={scrollToWaitlist}
            className="w-full mt-2 rounded-full bg-black text-white text-sm font-medium py-2.5 transition-all hover:bg-zinc-800 active:scale-95 shadow-sm cursor-pointer"
          >
            Join waitlist
          </button>
        </div>
      )}
    </header>
  );
}
