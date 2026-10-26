"use client";

import React, { useState } from "react";
import { Check, Loader2 } from "lucide-react";

interface WaitlistFormProps {
  onSuccess?: (contact: string) => void;
}

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = contact.trim();
    if (!clean || (clean.indexOf("@") === -1 && clean.replace(/\D/g, "").length < 10)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address or phone number");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate seamless async submission
    setTimeout(() => {
      setStatus("success");
      if (onSuccess) onSuccess(clean);
    }, 800);
  };

  return (
    <div className="w-full max-w-[430px] mx-auto select-none">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center rounded-full bg-[#f4f5f7] border border-zinc-200/50 p-1.5 pl-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] transition-all duration-200 focus-within:ring-2 focus-within:ring-zinc-900/10 focus-within:border-zinc-300 focus-within:bg-white">
          <input
            type="text"
            value={contact}
            onChange={(e) => {
              setContact(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            placeholder="Your email or phone number"
            className="w-full bg-transparent text-sm text-zinc-800 placeholder:text-zinc-400 outline-none pr-3 font-normal"
            disabled={status === "loading" || status === "success"}
            required
          />

          <button
            type="submit"
            disabled={status === "loading" || status === "success"}
            className="shrink-0 rounded-full bg-black text-white text-xs font-medium px-5 py-2.5 transition-all duration-200 hover:bg-zinc-800 active:scale-95 disabled:opacity-90 disabled:cursor-not-allowed flex items-center justify-center min-w-[105px] cursor-pointer"
          >
            {status === "loading" ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-white" />
            ) : status === "success" ? (
              <span className="flex items-center gap-1.5 text-emerald-400">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
                Joined
              </span>
            ) : (
              "Join waitlist"
            )}
          </button>
        </div>

        {status === "error" && (
          <p className="text-red-500 text-xs mt-2 text-center animate-fadeIn">
            {errorMessage}
          </p>
        )}

        {status === "success" && (
          <div className="mt-2.5 text-center text-xs text-emerald-700 bg-emerald-50/80 border border-emerald-200/70 rounded-full py-1.5 px-3.5 inline-flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            You&apos;re #1,024 on the Ajo Digital waitlist! We&apos;ll notify you for early access.
          </div>
        )}
      </form>
    </div>
  );
}
