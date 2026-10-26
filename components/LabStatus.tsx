"use client";

import React from "react";

interface LabStatusProps {
  onOpenDemo: () => void;
}

export default function LabStatus({ onOpenDemo }: LabStatusProps) {
  return (
    <section id="genesis" className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-20 border-t border-white/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left column: Narrative & Genesis Position */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/5 text-[10px] font-mono tracking-widest uppercase text-emerald-400 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>FOUNDATIONAL GENESIS PHASE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white mb-4">
            Building Africa&apos;s Advanced Hardware &amp; Machine Intelligence Laboratory
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 font-normal leading-relaxed mb-4">
            EIDO LABS LTD is situated in <span className="text-zinc-200">Nigeria</span> as a specialized deep-technology
            institution. We are establishing foundational research infrastructure, engineering pipelines, and
            prototyping benches across physical robotics, autonomous control, embedded systems, and frontier AI.
          </p>

          <p className="text-sm text-zinc-500 font-normal leading-relaxed mb-8">
            While we are in our initial genesis setup and have not yet commenced commercial deployments, our charter
            is oriented toward long-horizon, high-impact breakthroughs. We welcome inquiries from academic consortia,
            deep-tech investors, and prospective research fellows.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="px-5 py-2.5 rounded-[6px] border border-white/20 bg-zinc-950 hover:bg-zinc-900 hover:border-white/40 text-xs sm:text-sm font-medium text-white transition-all cursor-pointer"
            >
              Inquire / Join Research Network
            </button>
            <a
              href="#contact"
              className="px-4 py-2.5 rounded-[6px] border border-zinc-800 text-xs sm:text-sm font-mono text-zinc-400 hover:text-zinc-200 hover:border-zinc-700 transition-colors"
            >
              View Headquarters Telemetry
            </a>
          </div>
        </div>

        {/* Right column: Interactive Telemetry & Status Cards */}
        <div className="lg:col-span-5 flex flex-col gap-3 font-mono">
          {/* Card 1: Incorporation & Jurisdiction */}
          <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-950/60">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
              Entity Designation &amp; Jurisdiction
            </div>
            <div className="text-sm text-white font-medium">EIDO LABS LTD</div>
            <div className="text-xs text-zinc-400 mt-0.5">
              Registered Office: Situated in Nigeria
            </div>
          </div>

          {/* Card 2: Operating Status */}
          <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-950/60">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">
              Lifecycle Stage
            </div>
            <div className="text-sm text-emerald-400 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Genesis Architecture &amp; R&amp;D Setup</span>
            </div>
            <div className="text-xs text-zinc-400 mt-0.5">
              Pre-commercialization · Laboratory Benchmarking
            </div>
          </div>

          {/* Card 3: Research Divisions */}
          <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-950/60">
            <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">
              Statutory Research Vectors
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs text-zinc-300">
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400">›</span> Robotics Devices
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400">›</span> Intelligent Agents
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400">›</span> Embedded Hardware
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400">›</span> Spatial &amp; Vision
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400">›</span> EdTech &amp; Capacity
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-cyan-400">›</span> Tech Transfer
              </div>
            </div>
          </div>

          {/* Card 4: Collaborative Access */}
          <div className="p-4 rounded-lg border border-white/10 bg-white/[0.02]">
            <div className="text-[10px] text-zinc-400 uppercase tracking-widest mb-1">
              Collaboration Channels
            </div>
            <div className="text-xs text-zinc-300">
              Academic Fellowships · Joint Development Agreements (JDA) · Technology Transfer Consortia
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
