"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export type FaqItem = { question: string; answer: string };

export default function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#07182d] py-20 transition-colors duration-300 lg:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-[11px] font-bold tracking-[0.18em] text-[#E63946] uppercase">{t.faq.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-display font-bold tracking-tight text-[#07182D] dark:text-white sm:text-5xl">
            {t.faq.title}
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-2xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/[0.02]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-bold text-[#07182D] dark:text-white sm:text-base">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-[#E63946] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-6 text-slate-500 dark:text-slate-400">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
