"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/componentes/ui/SectionHeading";
import ButtonLink from "@/componentes/ui/ButtonLink";
import { faseMeta } from "@/componentes/proceso/meta";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import home from "@/componentes/i18n/pages/home";

const INTERVALO = 5000;

/**
 * Resumen interactivo del proceso.
 *
 * Avanza solo entre fases para mostrar el recorrido completo; en cuanto el
 * usuario elige una fase, el avance automático se detiene y manda él.
 */
export default function ProcesoPreview() {
  const { t, lang } = useLanguage();
  const h = usePage(home).proceso;
  const fases = t.proceso.phases;
  const [activa, setActiva] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = window.setInterval(
      () => setActiva((i) => (i + 1) % fases.length),
      INTERVALO,
    );
    return () => window.clearInterval(id);
  }, [auto, fases.length]);

  const elegir = (i: number) => {
    setAuto(false);
    setActiva(i);
  };

  const { foto, icon: Icon } = faseMeta[activa];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 transition-colors duration-300 dark:bg-brand-navy-800 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={h.eyebrow}
            title={h.title}
            highlight={h.highlight}
            paragraph={h.paragraph}
          />
          <ButtonLink href="/proceso" variant="secondary" className="shrink-0">
            {h.link}
          </ButtonLink>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-12">
          {/* Selector de fases */}
          <ol
            className="grid min-w-0 grid-cols-[minmax(0,1fr)] gap-2 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)]"
            onMouseEnter={() => setAuto(false)}
            onFocus={() => setAuto(false)}
          >
            {fases.map((fase, i) => {
              const on = i === activa;
              return (
                <li key={fase.title} className="min-w-0">
                  <button
                    type="button"
                    onClick={() => elegir(i)}
                    aria-pressed={on}
                    className={`relative flex w-full items-center gap-4 overflow-hidden rounded-2xl border px-5 py-4 text-left transition-all duration-300 ${
                      on
                        ? "border-brand-red-600/30 bg-white elev-2 dark:border-brand-red-400/30 dark:bg-white/[0.06]"
                        : "border-transparent hover:bg-white/70 dark:hover:bg-white/[0.03]"
                    }`}
                  >
                    <span
                      className={`font-brand flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold transition-colors duration-300 ${
                        on
                          ? "bg-brand-red-600 text-white"
                          : "bg-white text-brand-navy dark:bg-white/10 dark:text-white"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-base font-bold text-brand-navy dark:text-white">
                        {fase.title}
                      </span>
                      <span className="block truncate text-sm text-slate-500 dark:text-slate-400">
                        {fase.description}
                      </span>
                    </span>
                    {on && auto && (
                      <motion.span
                        key={`barra-${activa}`}
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-brand-red-600 dark:bg-brand-red-400"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: INTERVALO / 1000,
                          ease: "linear",
                        }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>

          {/* Visual de la fase activa */}
          <div className="relative min-h-[26rem] overflow-hidden rounded-[2rem] bg-brand-ink elev-3">
            <AnimatePresence initial={false}>
              <motion.div
                key={activa}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={foto.src}
                  alt={foto.alt[lang]}
                  fill
                  placeholder="blur"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent"
            />

            {/* Región viva persistente; en silencio mientras avanza sola para no
                anunciar cada 5 s a quien usa lector de pantalla. */}
            <div
              className="absolute inset-x-0 bottom-0 p-8 sm:p-10"
              aria-live={auto ? "off" : "polite"}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activa}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red-600 text-white">
                    <Icon size={22} />
                  </span>
                  <p className="font-brand mt-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-red-400">
                    {h.eyebrow} · 0{activa + 1}
                  </p>
                  <h3 className="type-h2 mt-2 text-white">
                    {fases[activa].title}
                  </h3>
                  <p className="mt-3 max-w-md text-base leading-7 text-slate-300">
                    {fases[activa].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
