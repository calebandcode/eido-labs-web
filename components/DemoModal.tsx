"use client";

import React, { useEffect } from "react";
import { Download, X, Smartphone, CheckCircle, ExternalLink, ShieldCheck } from "lucide-react";

export const DEMO_APK_URL =
  "https://github.com/calebandcode/ajodigital-demo/releases/download/v0.1.0-demo/Ajo-v0.1.apk";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 select-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-md bg-white border border-zinc-200/80 rounded-[32px] p-6 sm:p-7 shadow-[0_24px_60px_rgba(0,0,0,0.18)] z-10 max-h-[92vh] overflow-y-auto text-left">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-500 hover:text-zinc-900 transition-colors flex items-center justify-center cursor-pointer"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Pre-Release Build
          </span>
          <span className="text-[11px] font-mono text-zinc-400">v0.1.0-demo</span>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
          Download Ajo Digital Demo
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 mt-1.5 leading-relaxed">
          Test the native Android app on your device. Includes the collector route ledger and the saver digital passbook.
        </p>

        {/* Download Action Card */}
        <div className="mt-5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center shadow-xs">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-zinc-900">Ajo-v0.1.apk</div>
              <div className="text-[10px] text-zinc-400 font-mono">Android Package • Direct Release</div>
            </div>
          </div>
          <a
            href={DEMO_APK_URL}
            className="rounded-full bg-black text-white text-xs font-semibold px-4 py-2 hover:bg-zinc-800 transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <span>Download</span>
            <Download className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* What's Included */}
        <div className="mt-5 space-y-2 text-xs text-zinc-600">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Collector Route Ledger</strong>: Offline daily savings collection &amp; instant sync.</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span><strong>Saver Passbook</strong>: Interactive 30-day savings calendar &amp; payment log.</span>
          </div>
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>Built on CBN-compliant banking infrastructure powered by Wema Bank &amp; Anchor.</span>
          </div>
        </div>

        {/* GitHub Release Link */}
        <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-400">
          <span>Hosted on GitHub Releases</span>
          <a
            href="https://github.com/calebandcode/ajodigital-demo/releases"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-700 hover:text-black font-medium inline-flex items-center gap-1 transition-colors"
          >
            <span>Release notes</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
