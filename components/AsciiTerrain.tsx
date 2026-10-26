"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";

// Authentic ASCII art map transcribed faithfully from the design
const AUTHENTIC_ASCII_LINES = [
  "                           .+-::+::--   :-::|:.-*  #+#=+#-::*.#-+",
  "         ...-::...-:-.   :::-=::--   -.-,:- = +",
  "         ...-::  :..-...:  : : ::..",
  "    +*:::=::..  -",
  "    |+=:",
  "    +.-+-.  :*",
  "    -:-:-   .:=:::=..-  =#==:=-",
  "    ...: .==#-  .*  =*==*:=#=++++-   ##=+#+:-:::-::",
  "  -:#===:*=   -::*#  :::::::-  ...:++:#   #:  .:=:",
  " #--##*--:*====   ...:#+==:--:..",
  " -+:--:=:  .=--:=: =   ::++:..-   :++=++=:++-:",
  "    -::*-  ::+-*  -+++   .*===*=#+ -",
  "      ::  .* :   =#+#==+#--#=-",
  "                       :==++-:",
  "             -- =+#=:#=-#--#  -#+=# * -+::: ",
  "    .-.==  --#=. #-.+#-*-*#-+-+++- -#.++-  -+#=:*=#-",
  "+.-#-   -+...++:.#--+#:..:  .. ::  * *  .",
  ".*.-.",
  " ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ",
  " ::..-=-=--=-=--=--===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-::",
  " ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ",
  " ::..-=-=--=-=--=--===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-::",
  " ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ",
  " ::..-=-=--=-=--=--===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-::",
  " ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ",
  " ::..-=-=--=-=--=--===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-::",
  " ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ",
  " ::..-=-=--=-=--=--===-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-::",
  " ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: ",
];

export default function AsciiTerrain() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const [pulsePhase, setPulsePhase] = useState(0);
  const [activeMode, setActiveMode] = useState<"authentic" | "animated">("authentic");

  // Ambient gentle pulse wave
  useEffect(() => {
    let animId: number;
    let start = performance.now();

    const loop = (now: number) => {
      const elapsed = (now - start) / 1000;
      setPulsePhase(elapsed);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos(null);
  };

  // Color mapping based on character density and wave pulse
  const getCharStyle = (char: string, rowIdx: number, colIdx: number, totalCols: number) => {
    if (char === " ") return "text-transparent";

    // High density peaks
    const isPeak = ["#", "*", "@"].includes(char);
    // Medium density
    const isMid = ["+", "=", "|"].includes(char);
    // Low density
    const isLow = [":", "-", "."].includes(char);

    // Mouse distance calculation for interactive hover glow
    let mouseGlow = 0;
    if (mousePos) {
      const normCol = colIdx / totalCols;
      const normRow = rowIdx / AUTHENTIC_ASCII_LINES.length;
      const dist = Math.hypot(normCol - mousePos.x, normRow - mousePos.y);
      if (dist < 0.22) {
        mouseGlow = Math.max(0, 1 - dist / 0.22);
      }
    }

    // Subtle traveling wave
    const waveY = (rowIdx * 0.15 - pulsePhase * 0.8) % Math.PI;
    const waveIntensity = Math.max(0, Math.sin(waveY)) * 0.18;

    if (mouseGlow > 0.4) {
      return "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] font-semibold";
    }

    if (isPeak) {
      return "text-zinc-100 drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]";
    }
    if (isMid) {
      return "text-zinc-300";
    }
    if (isLow) {
      // Bottom matrix lines fade slightly downwards
      if (rowIdx >= 18) {
        const bottomFade = Math.max(0.25, 0.7 - (rowIdx - 18) * 0.035);
        return bottomFade > 0.5 ? "text-zinc-400" : "text-zinc-500";
      }
      return "text-zinc-400";
    }

    return "text-zinc-400";
  };

  // Generate dynamic 3D undulating terrain for animated mode
  const dynamicLines = useMemo(() => {
    if (activeMode !== "animated") return [];
    const rows = 26;
    const cols = 72;
    const chars = " .:-=+*#%@";
    const res: string[] = [];

    for (let r = 0; r < rows; r++) {
      let line = "";
      for (let c = 0; c < cols; c++) {
        // Multi-frequency sine & cosine wave
        const nx = (c - cols / 2) / (cols / 2);
        const ny = (r - rows / 2) / (rows / 2);
        const dist = Math.sqrt(nx * nx + ny * ny);

        const v1 = Math.sin(nx * 5 + pulsePhase * 1.5);
        const v2 = Math.cos(ny * 4 - pulsePhase * 1.2);
        const v3 = Math.sin(dist * 8 - pulsePhase * 2.0);

        let height = (v1 + v2 + v3) / 3; // -1 to 1
        height = (height + 1) / 2; // 0 to 1

        // Edge falloff
        height *= Math.max(0, 1 - dist * 0.8);

        const charIdx = Math.floor(height * (chars.length - 1));
        line += chars[charIdx] || " ";
      }
      res.push(line);
    }
    return res;
  }, [activeMode, pulsePhase]);

  const linesToRender = activeMode === "animated" ? dynamicLines : AUTHENTIC_ASCII_LINES;

  return (
    <div className="relative w-full flex flex-col items-center justify-center my-6 select-none">
      {/* Mode Switcher pill (subtle, non-intrusive) */}
      <div className="flex items-center gap-2 mb-4 opacity-40 hover:opacity-100 transition-opacity">
        <button
          onClick={() => setActiveMode("authentic")}
          className={`text-[11px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded transition-colors ${
            activeMode === "authentic"
              ? "text-white bg-white/10 border border-white/20"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          Authentic Matrix
        </button>
        <span className="text-zinc-700 text-xs">/</span>
        <button
          onClick={() => setActiveMode("animated")}
          className={`text-[11px] font-mono uppercase tracking-widest px-2.5 py-0.5 rounded transition-colors ${
            activeMode === "animated"
              ? "text-white bg-white/10 border border-white/20"
              : "text-zinc-500 hover:text-zinc-300"
          }`}
        >
          Live Terrain
        </button>
      </div>

      {/* Main ASCII Canvas / Display */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-x-auto max-w-full px-4 py-2 cursor-crosshair group"
      >
        {/* Soft radial background glow matching the center */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.05)_0%,transparent_75%)]" />

        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none scanlines opacity-30" />

        <pre
          className="ascii-font text-[10px] sm:text-[12px] md:text-[13.5px] leading-[1.08] tracking-[0.14em] text-center font-mono transition-transform duration-300 group-hover:scale-[1.008]"
          style={{
            textRendering: "geometricPrecision",
          }}
        >
          {linesToRender.map((line, rowIdx) => {
            const totalCols = line.length;
            return (
              <div key={`row-${rowIdx}`} className="whitespace-pre">
                {line.split("").map((char, colIdx) => {
                  const styleClass = getCharStyle(char, rowIdx, colIdx, totalCols);
                  return (
                    <span
                      key={`c-${rowIdx}-${colIdx}`}
                      className={`inline-block transition-colors duration-150 ${styleClass}`}
                    >
                      {char}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </pre>

        {/* Ambient fade-out on the bottom edge into black */}
        <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* Subtle indicator under the ASCII visualization */}
      <div className="flex items-center gap-2 mt-2 text-[10px] font-mono text-zinc-600 tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-pulse" />
        <span>Continuous Autonomous Synthesis · 24/7 Pipeline Active</span>
      </div>
    </div>
  );
}
