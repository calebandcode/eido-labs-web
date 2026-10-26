"use client";

import React, { useState } from "react";

interface StatutoryObject {
  letter: string;
  category: "hardware" | "software" | "education" | "enterprise";
  title: string;
  tag: string;
  description: string;
  keywords: string[];
}

const STATUTORY_OBJECTS: StatutoryObject[] = [
  {
    letter: "A",
    category: "hardware",
    title: "Robotics & Autonomous Systems",
    tag: "AUTONOMOUS SYSTEMS",
    description:
      "To design, develop, assemble, produce, supply and support robotic devices, autonomous and remotely operated systems, intelligent machines, companion and service robots, automated equipment, control systems, sensors and related hardware and software.",
    keywords: ["Companion Robots", "Sensors", "Control Systems", "Service Robots", "Autonomous Machines"],
  },
  {
    letter: "B",
    category: "software",
    title: "Artificial Intelligence & Intelligent Agents",
    tag: "APPLIED AI / ML",
    description:
      "To design, develop, deploy, maintain, license and commercialise software, artificial intelligence and machine learning applications, intelligent agents, cloud services, APIs, mobile and web applications, developer tools, databases and other digital products and services.",
    keywords: ["Intelligent Agents", "Cloud APIs", "Machine Learning", "Developer Tools", "Data Infrastructure"],
  },
  {
    letter: "C",
    category: "software",
    title: "Spatial Computing, IoT & Digital Twins",
    tag: "SPATIAL & VISION",
    description:
      "To research, develop, provide and commercialise solutions involving virtual, augmented and mixed reality, spatial computing, Internet of Things, connected devices, digital twins, simulation, computer vision, edge computing and other emerging technologies.",
    keywords: ["Digital Twins", "Computer Vision", "VR/AR/MR", "Edge Computing", "IoT Telemetry"],
  },
  {
    letter: "D",
    category: "hardware",
    title: "Embedded Systems & Modular Hardware",
    tag: "EMBEDDED HARDWARE",
    description:
      "To design, prototype, assemble, produce, import, distribute and support electronic devices, embedded systems, computing equipment, smart consumer electronics, development boards, robotics components, modular hardware and related products and accessories.",
    keywords: ["Development Boards", "Modular Hardware", "Electronics Prototyping", "Computing Equipment"],
  },
  {
    letter: "E",
    category: "education",
    title: "Educational Technology & Capacity Building",
    tag: "EDTECH & R&D TRAINING",
    description:
      "To develop, operate and commercialise educational technology platforms, e-learning systems, digital curricula and learning products; and to provide training, workshops, research programmes and capacity-building services in software development, artificial intelligence, robotics, electronics and related technical disciplines.",
    keywords: ["Curricula", "Technical Workshops", "Research Fellowships", "Capacity Building"],
  },
  {
    letter: "F",
    category: "enterprise",
    title: "Technology Advisory & Systems Integration",
    tag: "SYSTEMS INTEGRATION",
    description:
      "To provide technology advisory, software development, systems integration, product design, technical training, research, digital transformation and automation services to individuals, businesses, institutions and public or private organisations.",
    keywords: ["Digital Transformation", "Advisory", "Product Design", "Institutional Automation"],
  },
  {
    letter: "G",
    category: "enterprise",
    title: "Intellectual Property & Inventions",
    tag: "IP & PROPRIETARY TECH",
    description:
      "To create, acquire, register, protect, hold, license, assign and commercialise patents, inventions, designs, trademarks, copyrights, software, know-how, research outputs and proprietary technologies, subject to applicable laws.",
    keywords: ["Patents", "Invention Filing", "Proprietary Know-How", "Licensing"],
  },
  {
    letter: "H",
    category: "hardware",
    title: "Component Supply & Robotics Distribution",
    tag: "SUPPLY & INSTRUMENTATION",
    description:
      "To buy, sell, import, export, supply and distribute computer hardware, software, electronic components, robotics kits, sensors, tools and other products and materials related to the Company's objects.",
    keywords: ["Robotics Kits", "Electronic Components", "Sensors & Actuators", "Specialized Tools"],
  },
  {
    letter: "I",
    category: "enterprise",
    title: "Strategic Ventures & Subsidiaries",
    tag: "VENTURES & INVESTMENTS",
    description:
      "To establish, incorporate, acquire, own, manage and dispose of interests in subsidiaries, joint ventures and other enterprises whose activities are related or complementary to the Company's business, subject to applicable laws.",
    keywords: ["Subsidiary Incubation", "Joint Ventures", "Strategic Synergies"],
  },
  {
    letter: "J",
    category: "enterprise",
    title: "Technology Transfer & Research Partnerships",
    tag: "TECH TRANSFER & COLLABORATION",
    description:
      "To enter into contracts, partnerships, research collaborations and technology-transfer arrangements; to acquire, lease, hold and dispose of property and equipment; and to do all other lawful things incidental or conducive to the attainment of the foregoing objects.",
    keywords: ["Technology Transfer", "Academic Consortia", "Research Collaborations"],
  },
];

export default function ResearchObjects() {
  const [filter, setFilter] = useState<"all" | "hardware" | "software" | "education" | "enterprise">("all");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const filtered = STATUTORY_OBJECTS.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="objects" className="w-full max-w-7xl mx-auto px-6 sm:px-10 py-24 border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded border border-zinc-800 text-[10px] font-mono tracking-widest uppercase text-zinc-400 mb-3 bg-zinc-950">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>STATUTORY DOSSIER · OBJECTS CLAUSE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight text-white font-['Geist',sans-serif]">
            Company Objects & Research Mandate
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            EIDO LABS LTD is legally established to pioneer foundational research, high-precision prototyping,
            and commercialisation across the physical and digital boundaries of intelligent technology.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-950/80 border border-zinc-800/80 rounded-lg text-xs font-mono">
          <button
            onClick={() => setFilter("all")}
            className={`px-3 py-1.5 rounded transition-colors ${
              filter === "all" ? "bg-zinc-800 text-white font-medium" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            All (10)
          </button>
          <button
            onClick={() => setFilter("hardware")}
            className={`px-3 py-1.5 rounded transition-colors ${
              filter === "hardware" ? "bg-zinc-800 text-white font-medium" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Robotics & Hardware (A, D, H)
          </button>
          <button
            onClick={() => setFilter("software")}
            className={`px-3 py-1.5 rounded transition-colors ${
              filter === "software" ? "bg-zinc-800 text-white font-medium" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            AI & Spatial (B, C)
          </button>
          <button
            onClick={() => setFilter("education")}
            className={`px-3 py-1.5 rounded transition-colors ${
              filter === "education" ? "bg-zinc-800 text-white font-medium" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            EdTech & Training (E)
          </button>
          <button
            onClick={() => setFilter("enterprise")}
            className={`px-3 py-1.5 rounded transition-colors ${
              filter === "enterprise" ? "bg-zinc-800 text-white font-medium" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Enterprise, IP & Transfer (F, G, I, J)
          </button>
        </div>
      </div>

      {/* Grid of Statutory Objects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
        {filtered.map((item) => {
          const isSelected = selectedLetter === item.letter;
          return (
            <div
              key={item.letter}
              onClick={() => setSelectedLetter(isSelected ? null : item.letter)}
              className={`group relative p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-zinc-900/60 border-zinc-500 shadow-[0_0_30px_rgba(255,255,255,0.06)]"
                  : "bg-zinc-950/40 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/30"
              }`}
            >
              {/* Top Row: Letter badge & Tag */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded border border-white/20 bg-white/[0.04] text-white flex items-center justify-center font-mono font-semibold text-xs tracking-wider">
                    {item.letter}
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    OBJECT CLAUSE {item.letter}
                  </span>
                </div>

                <span className="text-[9px] font-mono tracking-wider px-2 py-0.5 rounded border border-zinc-800/80 bg-zinc-900 text-zinc-400 group-hover:text-zinc-200 transition-colors uppercase">
                  {item.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-medium text-white mb-2.5 group-hover:text-zinc-100 transition-colors">
                {item.title}
              </h3>

              {/* Statutory Text */}
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-4">
                {item.description}
              </p>

              {/* Sub-tags */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/[0.04]">
                {item.keywords.map((kw, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors"
                  >
                    #{kw.toLowerCase().replace(/\s+/g, "-")}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Note banner */}
      <div className="mt-8 p-4 rounded-lg border border-zinc-800/60 bg-zinc-950/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-zinc-400">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400" />
          <span>STATUTORY JURISDICTION: REGISTERED IN NIGERIA</span>
        </div>
        <div className="text-zinc-500">
          Corporate Affairs Commission Regulatory Scope · Full Capacity Lab
        </div>
      </div>
    </section>
  );
}
