"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: "what-is-ajo-digital",
    question: "What is Ajo Digital?",
    answer:
      "Ajo Digital is a mobile infrastructure platform that digitizes the traditional Alajo (daily thrift collection) system in Nigeria. It transforms manual paper-based savings into a transparent, offline-first digital ledger equipped with instant SMS receipts and zero-custody bank routing.",
  },
  {
    id: "zero-custody",
    question: "Does Ajo Digital hold or pool our money?",
    answer:
      "No. We operate on a strict zero-custody architecture. For remote payments, dedicated virtual accounts route funds directly into the collector's personal bank account within 24 hours. The platform acts solely as an intelligent ledger and never holds, pools, or delays your capital.",
  },
  {
    id: "offline-ledger",
    question: "How does the offline ledger work inside dense markets?",
    answer:
      "Collectors can log physical cash collections on the street even with zero internet or cellular connectivity. Transactions are encrypted and queued locally on the mobile device, then automatically synced and SMS receipts delivered the moment network connection is restored.",
  },
  {
    id: "contributor-experience",
    question: "Do market contributors need smartphones or an app?",
    answer:
      "Not at all. Contributors receive instant SMS text receipts on any basic phone after every payment, completely replacing the fragile ₦500 paper card. Smartphone users can also open a secure, lightweight 'Digital Passbook' web link to view their balance without downloading an app or remembering passwords.",
  },
  {
    id: "zones-and-routes",
    question: "What are operational Circles?",
    answer:
      "Circles allow collectors to organize their clients into structured geographic zones (like Main Gate, Tomato Section, or Textile Lane). This streamlines daily physical walks, prevents skipped stalls, and eliminates manual evening tally errors.",
  },
];

export default function FaqSection() {
  // First two items open by default
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "what-is-ajo-digital": true,
    "zero-custody": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="w-full max-w-[560px] mx-auto mt-16 sm:mt-20 px-4 pb-12 select-none">
      {/* Section Header with Scroll Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-8"
      >
        <h2 className="font-editorial text-3xl sm:text-4xl text-zinc-900 tracking-tight font-normal">
          Frequently asked questions
        </h2>
        <p className="text-zinc-500 text-xs sm:text-sm mt-2.5 max-w-[460px] mx-auto leading-relaxed">
          Everything you need to know about Ajo Digital, offline-first ledgers, and zero-custody thrift routing.
        </p>
      </motion.div>

      {/* Accordion List with Staggered Entrance */}
      <div className="flex flex-col gap-3 text-left">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = !!openItems[item.id];

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-[#f4f4f5] transition-colors duration-200 overflow-hidden hover:bg-[#ededef]"
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 select-none cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-zinc-900 text-sm sm:text-base leading-snug">
                  {item.question}
                </span>

                <motion.div
                  animate={{ rotate: isOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 rounded-full bg-zinc-900 text-white flex items-center justify-center shrink-0 shadow-sm"
                >
                  {isOpen ? (
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <Plus className="w-3.5 h-3.5 stroke-[2.5]" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
