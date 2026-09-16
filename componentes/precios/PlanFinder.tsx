"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, RotateCcw, Sparkles } from "lucide-react";
import SectionHeading from "@/componentes/ui/SectionHeading";
import ButtonLink from "@/componentes/ui/ButtonLink";
import { fotos } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import precios from "@/componentes/i18n/pages/precios";

/**
 * Suma de puntos (0–6) -> plan. Cortes elegidos para que una sola respuesta
 * "alta" no salte directo a Enterprise: hace falta complejidad sostenida.
 */
const planPorPuntaje = (total: number) => (total <= 1 ? 0 : total <= 4 ? 1 : 2);

export default function PlanFinder() {
  const { t, lang } = useLanguage();
  const f = usePage(precios).finder;
  const [respuestas, setRespuestas] = useState<number[]>([]);

  const paso = respuestas.length;
  const terminado = paso === f.questions.length;
  const plan = terminado
    ? planPorPuntaje(respuestas.reduce((a, b) => a + b, 0))
    : 0;
  const datosPlan = t.preciosPlanes.plans[plan];

  return (
    <section
      id="recomendador"
      className="scroll-mt-28 bg-brand-ink py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={f.eyebrow}
            title={f.title}
            highlight={f.highlight}
            paragraph={f.paragraph}
            tone="dark"
          />
          <div className="relative mt-10 hidden aspect-[16/10] overflow-hidden rounded-3xl lg:block">
            <Image
              src={fotos.analitica.src}
              alt={fotos.analitica.alt[lang]}
              fill
              placeholder="blur"
              sizes="40vw"
              className="object-cover opacity-80"
            />
          </div>
        </div>

        <div className="relative min-h-[27rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur sm:p-10">
          {/* Progreso */}
          <div className="flex gap-2" aria-hidden>
            {f.questions.map((q, i) => (
              <span
                key={q.q}
                className="h-1 flex-1 overflow-hidden rounded-full bg-white/10"
              >
                <motion.span
                  className="block h-full origin-left bg-brand-red-400"
                  initial={false}
                  animate={{ scaleX: i < paso ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />
              </span>
            ))}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            {!terminado ? (
              <motion.fieldset
                key={`p-${paso}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="mt-8"
              >
                <legend className="font-brand text-xs font-bold uppercase tracking-[0.18em] text-brand-red-400">
                  {f.step} {paso + 1} {f.of} {f.questions.length}
                </legend>
                <p className="type-h3 mt-3 text-white">{f.questions[paso].q}</p>
                <div className="mt-7 space-y-3">
                  {f.questions[paso].options.map((op) => (
                    <button
                      key={op.label}
                      type="button"
                      onClick={() => setRespuestas((r) => [...r, op.score])}
                      className="group flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-left text-sm font-semibold text-slate-200 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-red-400/60 hover:bg-white/[0.08] hover:text-white sm:text-base"
                    >
                      {op.label}
                      <span className="h-5 w-5 shrink-0 rounded-full border-2 border-white/30 transition-colors group-hover:border-brand-red-400 group-hover:bg-brand-red-400/30" />
                    </button>
                  ))}
                </div>
                {paso > 0 && (
                  <button
                    type="button"
                    onClick={() => setRespuestas((r) => r.slice(0, -1))}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
                  >
                    <ArrowLeft size={15} /> {f.back}
                  </button>
                )}
              </motion.fieldset>
            ) : (
              <motion.div
                key="resultado"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8"
                aria-live="polite"
              >
                <p className="font-brand inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-red-400">
                  <Sparkles size={14} /> {f.resultEyebrow}
                </p>
                <p className="font-brand mt-4 text-4xl font-bold uppercase text-white">
                  {datosPlan.name}
                </p>
                <p className="mt-2 font-display text-2xl font-bold text-slate-200">
                  {datosPlan.price}
                </p>
                <p className="mt-4 text-base leading-7 text-slate-300">
                  {f.reasons[plan]}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/contacto#cotizador">
                    {f.resultCta}
                  </ButtonLink>
                  <ButtonLink href="#planes" variant="light" arrow={false}>
                    {f.seePlan}
                  </ButtonLink>
                </div>
                <button
                  type="button"
                  onClick={() => setRespuestas([])}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-white"
                >
                  <RotateCcw size={15} /> {f.restart}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
