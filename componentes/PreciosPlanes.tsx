"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function PreciosPlanes() {
  const { t } = useLanguage();
  const pp = t.preciosPlanes;
  const periods = [pp.perProject, pp.perProject, pp.custom];

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#07182d] py-20 transition-colors duration-300 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {pp.plans.map((plan, index) => {
            const highlighted = index === 1;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col rounded-[2rem] p-8 sm:p-10 transition-all duration-300 ${
                  highlighted
                    ? "bg-[#07182D] text-white shadow-2xl shadow-[#07182D]/30 lg:-translate-y-4"
                    : "bg-white dark:bg-white/[0.03] border border-slate-100 dark:border-white/10 text-[#07182D] dark:text-white shadow-sm"
                }`}
              >
                {highlighted && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-[#E63946] px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                    <Sparkles size={12} /> {pp.mostChosen}
                  </span>
                )}

                <h3 className={`text-xl font-bold tracking-tight ${highlighted ? "text-white" : ""}`}>{plan.name}</h3>
                <p className={`mt-4 text-3xl font-black tracking-tight sm:text-4xl ${highlighted ? "text-white" : ""}`}>
                  {plan.price}
                </p>
                <p className={`mt-1 text-xs font-semibold uppercase tracking-wider ${highlighted ? "text-white/60" : "text-slate-400"}`}>
                  {periods[index]}
                </p>

                <p className={`mt-5 text-sm leading-6 ${highlighted ? "text-white/80" : "text-slate-500 dark:text-slate-400"}`}>
                  {plan.description}
                </p>

                <ul className="mt-7 space-y-3.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={18}
                        className={`mt-0.5 shrink-0 ${highlighted ? "text-[#ff6b74]" : "text-[#E63946]"}`}
                      />
                      <span className={highlighted ? "text-white/90" : "text-slate-600 dark:text-slate-300"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#cotizador"
                  className={`mt-9 inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                    highlighted
                      ? "bg-[#E63946] text-white shadow-lg shadow-[#E63946]/25 hover:bg-[#cf2e3b]"
                      : "bg-slate-50 dark:bg-white/5 text-[#07182D] dark:text-white hover:bg-slate-100 dark:hover:bg-white/10"
                  }`}
                >
                  {pp.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500 dark:text-slate-400">
          {pp.footerNote} <Link href="/#cotizador" className="font-semibold text-[#E63946] hover:underline">{pp.footerLink}</Link> {pp.footerRest}
        </p>
      </div>
    </section>
  );
}
