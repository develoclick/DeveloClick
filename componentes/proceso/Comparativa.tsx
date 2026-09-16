"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, X } from "lucide-react";
import SectionHeading from "@/componentes/ui/SectionHeading";
import Reveal from "@/componentes/motion/Reveal";
import { usePage } from "@/componentes/i18n/usePage";
import proceso from "@/componentes/i18n/pages/proceso";

/**
 * Interruptor entre "plantilla genérica" y "a medida". El usuario compara
 * punto por punto en lugar de leer una tabla estática: más fácil de retener.
 */
export default function Comparativa() {
  const c = usePage(proceso).comparativa;
  const [medida, setMedida] = useState(true);

  return (
    <section className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-brand-navy-800 lg:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          highlight={c.highlight}
          paragraph={c.paragraph}
          align="center"
        />

        <Reveal className="mt-12 flex justify-center">
          <div
            role="radiogroup"
            aria-label={c.eyebrow}
            className="isolate inline-flex rounded-2xl border border-slate-200 bg-white p-1.5 elev-1 dark:border-white/10 dark:bg-brand-ink"
          >
            {[
              { valor: false, label: c.optionA },
              { valor: true, label: c.optionB },
            ].map((op) => {
              const on = medida === op.valor;
              return (
                <button
                  key={op.label}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setMedida(op.valor)}
                  className={`relative rounded-xl px-5 py-3 text-sm font-bold transition-colors sm:px-7 ${
                    on
                      ? "text-white"
                      : "text-slate-600 hover:text-brand-navy dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="comparativa-pill"
                      aria-hidden
                      className={`absolute inset-0 -z-10 rounded-xl ${
                        op.valor ? "bg-brand-red-600" : "bg-slate-500"
                      }`}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                  {op.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white elev-2 dark:border-white/10 dark:bg-brand-ink">
          {c.rows.map((row, i) => (
            <li
              key={row.label}
              className="grid items-center gap-2 border-b border-slate-100 px-6 py-5 last:border-0 dark:border-white/5 sm:grid-cols-[10rem_1fr] sm:gap-6 sm:px-8"
            >
              <span className="font-brand text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {row.label}
              </span>
              <div className="relative min-h-[1.75rem]" aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={`${medida}-${i}`}
                    initial={{ opacity: 0, x: medida ? 12 : -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25, delay: i * 0.03 }}
                    className="flex items-center gap-3 text-base font-semibold text-brand-navy dark:text-white"
                  >
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                        medida
                          ? "bg-brand-red-600 text-white"
                          : "bg-slate-200 text-slate-600 dark:bg-white/10 dark:text-slate-300"
                      }`}
                    >
                      {medida ? <Check size={15} /> : <X size={15} />}
                    </span>
                    {medida ? row.b : row.a}
                  </motion.p>
                </AnimatePresence>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
