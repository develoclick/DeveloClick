"use client";

import { motion } from "framer-motion";
import { Layers3, MessageSquareMore, Rocket, ArrowRight } from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const items = [
  {
    icon: Layers3,
    color: "from-brand-red-600 to-[#ff6b75]",
  },
  {
    icon: MessageSquareMore,
    color: "from-[#07182D] to-[#13375f]",
  },
  {
    icon: Rocket,
    color: "from-emerald-500 to-emerald-400",
  },
];

export default function Compromiso() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-white py-24 dark:bg-[#07182D] lg:py-32">
      {/* Background */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-brand-red-500/5 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="type-eyebrow inline-flex rounded-full border border-brand-red-500/20 bg-brand-red-500/10 px-4 py-1 text-brand-red-600 dark:text-brand-red-400">
            {t.testimonios.eyebrow}
          </span>

          <h2 className="type-h2 mt-6 text-[#07182D] dark:text-white">
            {t.testimonios.title1}{" "}
            <span className="text-brand-red-600 dark:text-brand-red-400">
              {t.testimonios.titleHighlight}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            {t.testimonios.paragraph}
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {t.testimonios.items.map((item, index) => {
            const Icon = items[index].icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 elev-1 transition-all duration-500 hover:-translate-y-2 hover:border-brand-red-500/30 hover:elev-3 dark:border-white/10 dark:bg-white/[0.03]"
              >
                {/* Glow */}

                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-red-500/10 blur-3xl" />
                </div>

                {/* Icon */}

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${items[index].color} elev-2`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}

                <h3 className="type-h3 mt-8 text-[#07182D] dark:text-white">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>

                {/* Bottom */}

                <div className="mt-8 flex items-center gap-2 font-semibold text-brand-red-600 dark:text-brand-red-400">
                  <span>{t.testimonios.cardTag}</span>

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Highlight */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24 rounded-3xl border border-brand-red-500/15 bg-gradient-to-r from-[#07182D] via-[#0B2545] to-[#07182D] p-10 text-center elev-3"
        >
          <h3 className="type-h3 text-white">{t.testimonios.bottomTitle}</h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/75">
            {t.testimonios.bottomParagraph}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
