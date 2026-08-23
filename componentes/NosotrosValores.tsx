"use client";

import { motion } from "framer-motion";
import {
  Compass,
  HeartHandshake,
  LineChart,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const icons: LucideIcon[] = [Compass, LineChart, ShieldCheck, HeartHandshake];

export default function NosotrosValores() {
  const { t } = useLanguage();
  const valores = t.nosotrosValores.valores.map((v, index) => ({
    ...v,
    icon: icons[index],
  }));

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#07182d] py-24 transition-colors duration-300 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="type-eyebrow text-brand-red-600 dark:text-brand-red-400">
            {t.nosotrosValores.eyebrow}
          </p>
          <h2 className="type-h2 mt-4 text-[#07182D] dark:text-white">
            {t.nosotrosValores.title}
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor, index) => {
            const Icon = valor.icon;
            return (
              <motion.div
                key={valor.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-3xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-7 elev-1 hover:border-brand-red-500/30 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-50 dark:bg-white/5 text-[#07182D] dark:text-white group-hover:bg-brand-red-600 group-hover:text-white transition-all duration-300">
                  <Icon size={22} />
                </div>
                <h3 className="type-h3 mt-5 text-[#07182D] dark:text-white">
                  {valor.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {valor.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-6 rounded-3xl border border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-8 sm:grid-cols-4 sm:p-12"
        >
          {t.nosotrosValores.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-black text-brand-red-600 dark:text-brand-red-400 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
