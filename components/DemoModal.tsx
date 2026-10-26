"use client";

import React, { useState, useEffect } from "react";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function DemoModal({
  isOpen,
  onClose,
  title = "Initiate Research Collaboration",
}: DemoModalProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [interest, setInterest] = useState("joint-research");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800/90 rounded-xl p-6 sm:p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] z-10 max-h-[92vh] overflow-y-auto">
        {/* Subtle top edge border glow */}
        <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-zinc-400/30 to-transparent" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors p-1"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="inline-block px-2.5 py-0.5 rounded border border-zinc-800 text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-2">
                EIDO LABS LTD · COLLABORATION DESK
              </div>
              <h2 className="text-xl sm:text-2xl font-normal tracking-tight text-white">
                {title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                Connect with our founding engineering team regarding academic consortia, hardware prototyping,
                AI research, or capacity-building programs in Nigeria.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Dr. / Engr. / Full Name"
                    className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@institution.com"
                    className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Affiliation / Institution / Company
                </label>
                <input
                  type="text"
                  value={organization}
                  onChange={(e) => setOrganization(e.target.value)}
                  placeholder="University, Research Body, Tech Venture, or Independent"
                  className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Collaboration Vector
                </label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-sm text-zinc-100 focus:outline-none focus:border-zinc-500 transition-colors cursor-pointer"
                >
                  <option value="joint-research">Joint R&amp;D / Academic Consortia (Objects A &amp; J)</option>
                  <option value="robotics-hardware">Robotics &amp; Embedded Prototyping (Objects A, D, H)</option>
                  <option value="ai-ml">Artificial Intelligence &amp; Intelligent Agents (Object B)</option>
                  <option value="spatial-iot">Spatial Computing, Digital Twins &amp; IoT (Object C)</option>
                  <option value="edtech-training">EdTech &amp; Capacity Building (Object E)</option>
                  <option value="advisory-enterprise">Technology Advisory &amp; Systems Integration (Object F)</option>
                  <option value="ventures-transfer">Strategic Ventures &amp; Tech Transfer (Objects I &amp; J)</option>
                  <option value="general-inquiry">General Inquiry / Genesis Phase Support</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1.5">
                  Brief Inquiry / Scope
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Outline your proposal, questions, or collaboration ideas..."
                  className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-2.5 px-4 rounded-lg bg-zinc-100 hover:bg-white text-black text-sm font-medium transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {loading ? (
                  <span className="inline-block w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                ) : (
                  "Submit Collaboration Inquiry"
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="py-6 text-center">
            <div className="w-12 h-12 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-white mb-2">Inquiry Transmitted</h3>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto">
              Thank you, <span className="text-zinc-200">{name}</span>. Your inquiry has been routed to the
              founding engineering desk at <span className="text-zinc-200">EIDO LABS LTD</span>. We will respond
              to <span className="text-zinc-200">{email}</span> shortly.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-5 py-2 rounded-lg border border-zinc-800 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors"
            >
              Return to Laboratory Overview
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
