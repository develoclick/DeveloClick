"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Mail, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

/**
 * Bloque de confianza previo al Cotizador.
 * Canal único: el Cotizador. El correo aparece como alternativa secundaria.
 * Sin teléfono, sin WhatsApp, sin ubicación: no publicamos datos que no sean reales.
 */
export default function ContactSection() {
  const { t } = useLanguage();
  const cs = t.contactoSection;

  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-white py-24 transition-colors duration-300 dark:bg-brand-ink lg:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-brand-red-500/8 blur-[110px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Encabezado asimétrico: texto a la izquierda, no centrado */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-32 lg:self-start"
          >
            <h2 className="type-h2 text-brand-navy dark:text-white">
              {cs.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-400">
              {cs.paragraph}
            </p>

            {/* Señales de confianza honestas: solo lo que podemos sostener */}
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <Clock
                  size={17}
                  className="shrink-0 text-brand-red-600 dark:text-brand-red-400"
                />
                <span>
                  Respondemos cada solicitud en menos de 24 horas hábiles
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 dark:text-slate-300">
                <ShieldCheck
                  size={17}
                  className="shrink-0 text-brand-red-600 dark:text-brand-red-400"
                />
                <span>
                  Sin compromiso: la propuesta no te obliga a contratar
                </span>
              </div>
            </div>

            <Link
              href="/contacto#cotizador"
              className="group mt-9 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-red-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-600"
            >
              {cs.ctaLabel}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>

          {/* Pasos numerados */}
          <ol className="relative space-y-5">
            <span
              aria-hidden
              className="absolute left-[27px] top-6 bottom-6 hidden w-px bg-gradient-to-b from-brand-red-600/40 via-slate-200 to-transparent dark:via-white/10 sm:block"
            />
            {cs.steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative flex gap-5 rounded-3xl border border-slate-100 bg-white p-6 elev-1 transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.03] sm:p-7"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-brand-navy font-display text-lg font-bold text-white dark:bg-brand-red-600">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="type-h3 text-brand-navy dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}

            {/* Alternativa secundaria: correo, con menor peso visual */}
            <motion.li
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="!mt-8 flex flex-wrap items-center gap-x-3 gap-y-1 pl-1 text-sm"
            >
              <Mail size={16} className="text-slate-400 dark:text-slate-500" />
              <span className="text-slate-500 dark:text-slate-400">
                {cs.emailLabel}
              </span>
              <a
                href={`mailto:${cs.emailValue}`}
                className="font-semibold text-brand-red-600 dark:text-brand-red-400 underline decoration-brand-red-600/30 underline-offset-4 transition hover:decoration-brand-red-600 dark:decoration-brand-red-400/30"
              >
                {cs.emailValue}
              </a>
            </motion.li>
          </ol>
        </div>
      </div>
    </section>
  );
}
