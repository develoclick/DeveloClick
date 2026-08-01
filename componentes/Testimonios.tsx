"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const accentColors = ["bg-[#E63946]", "bg-[#07182D]", "bg-emerald-600"];

function initialsOf(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function Testimonios() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#07182d] py-20 transition-colors duration-300 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-[#E63946]/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#07182D]/8 dark:bg-cyan-400/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[11px] font-bold tracking-[0.18em] text-[#E63946] uppercase">{t.testimonios.eyebrow}</p>
          <h2 className="mt-4 text-4xl font-display font-bold tracking-tight text-[#07182D] dark:text-white sm:text-5xl">
            {t.testimonios.title1} <span className="text-[#E63946]">{t.testimonios.titleHighlight}</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            {t.testimonios.paragraph}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.testimonios.items.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-3xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote size={28} className="text-[#E63946]/30" />

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-[#E63946] text-[#E63946]" />
                ))}
              </div>

              <p className="mt-4 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 dark:border-white/10 pt-6">
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${accentColors[index % accentColors.length]} text-sm font-bold text-white`}>
                  {initialsOf(item.name)}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#07182D] dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
