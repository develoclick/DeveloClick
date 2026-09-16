"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import ParallaxImage from "@/componentes/motion/Parallax";
import Reveal from "@/componentes/motion/Reveal";
import ButtonLink from "@/componentes/ui/ButtonLink";
import { servicioMeta } from "@/componentes/servicios/meta";
import { usePage } from "@/componentes/i18n/usePage";
import servicios from "@/componentes/i18n/pages/servicios";

type Servicio = (typeof servicios.es)["servicios"][number];

type Pestana = "features" | "idealFor" | "deliverables";

/**
 * Detalle de un servicio: foto con parallax y tres pestañas para no apilar
 * tres listas seguidas. Los bloques alternan lado para dar ritmo a la página.
 */
export default function ServicioBloque({
  servicio,
  index,
}: {
  servicio: Servicio;
  index: number;
}) {
  const s = usePage(servicios);
  const [pestana, setPestana] = useState<Pestana>("features");
  const baseId = useId();
  const { icon: Icon, foto } = servicioMeta[servicio.id];
  const invertido = index % 2 === 1;

  const pestanas: { id: Pestana; label: string; items: string[] }[] = [
    { id: "features", label: s.includes, items: servicio.features },
    { id: "idealFor", label: s.idealFor, items: servicio.idealFor },
    { id: "deliverables", label: s.deliverables, items: servicio.deliverables },
  ];
  const actual = pestanas.find((p) => p.id === pestana) ?? pestanas[0];

  // Flechas izquierda/derecha entre pestañas (patrón ARIA de tabs).
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const i = pestanas.findIndex((p) => p.id === pestana);
    const next =
      pestanas[
        (i + (e.key === "ArrowRight" ? 1 : -1) + pestanas.length) %
          pestanas.length
      ];
    setPestana(next.id);
    document.getElementById(`${baseId}-tab-${next.id}`)?.focus();
  };

  return (
    <section
      id={servicio.id}
      className={`scroll-mt-36 py-20 transition-colors duration-300 lg:py-28 ${
        invertido
          ? "bg-slate-50 dark:bg-brand-navy-800"
          : "bg-white dark:bg-brand-ink"
      }`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal
          x={invertido ? 24 : -24}
          y={0}
          className={`relative ${invertido ? "lg:order-2" : ""}`}
        >
          <ParallaxImage
            foto={foto}
            strength={10}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[5/4] rounded-[2rem] elev-3"
          >
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-tr from-brand-ink/60 via-transparent to-transparent"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-red-600 text-white elev-2">
                <Icon size={26} />
              </span>
              <span className="font-brand text-4xl font-bold text-white/90">
                0{index + 1}
              </span>
            </div>
          </ParallaxImage>
        </Reveal>

        <Reveal className={invertido ? "lg:order-1" : ""}>
          <p className="type-eyebrow flex items-center gap-3 text-brand-red-600 dark:text-brand-red-400">
            <span aria-hidden className="h-px w-8 bg-current" />
            {servicio.category}
          </p>
          <h2 className="type-h2 mt-5 text-brand-navy dark:text-white">
            {servicio.title}
          </h2>
          <p className="type-body-lg mt-5 text-slate-600 dark:text-slate-400">
            {servicio.description}
          </p>

          <div
            role="tablist"
            aria-label={servicio.category}
            onKeyDown={onKeyDown}
            className="isolate mt-8 inline-flex flex-wrap gap-1 rounded-2xl bg-slate-100 p-1 dark:bg-white/5"
          >
            {pestanas.map((p) => {
              const on = p.id === pestana;
              return (
                <button
                  key={p.id}
                  id={`${baseId}-tab-${p.id}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setPestana(p.id)}
                  className={`relative rounded-xl px-4 py-2 text-sm font-semibold transition-colors ${
                    on
                      ? "text-brand-navy dark:text-white"
                      : "text-slate-500 hover:text-brand-navy dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId={`${baseId}-pill`}
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-xl bg-white elev-1 dark:bg-white/10"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 34,
                      }}
                    />
                  )}
                  {p.label}
                </button>
              );
            })}
          </div>

          <div
            id={`${baseId}-panel`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${pestana}`}
            className="mt-6 min-h-[9.5rem]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={pestana}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.22 }}
                className="space-y-3"
              >
                {actual.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-red-600/10 text-brand-red-600 dark:bg-brand-red-400/15 dark:text-brand-red-400">
                      <Check size={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          <ButtonLink href="/contacto#cotizador" className="mt-8">
            {s.quoteThis}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
