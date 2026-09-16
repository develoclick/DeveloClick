"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowDownRight, Check } from "lucide-react";
import ParallaxImage from "@/componentes/motion/Parallax";
import Reveal from "@/componentes/motion/Reveal";
import SectionHeading from "@/componentes/ui/SectionHeading";
import { faseMeta } from "@/componentes/proceso/meta";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import proceso from "@/componentes/i18n/pages/proceso";

/**
 * Las 6 fases en una línea de tiempo vertical.
 *
 * La línea roja se llena a medida que el usuario avanza por la sección
 * (scaleY ligado al scroll), así la lectura se siente como un recorrido.
 */
export default function Timeline() {
  const { t } = useLanguage();
  const p = usePage(proceso).timeline;
  const ref = useRef<HTMLOListElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const progreso = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section
      id="fases"
      className="bg-white py-24 transition-colors duration-300 dark:bg-brand-ink lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={p.eyebrow}
          title={p.title}
          highlight={p.highlight}
          align="center"
        />

        <ol ref={ref} className="relative mt-20">
          {/* Riel y relleno de progreso */}
          <span
            aria-hidden
            className="absolute bottom-0 left-5 top-0 w-px bg-slate-200 dark:bg-white/10 lg:left-1/2"
          />
          <motion.span
            aria-hidden
            style={{ scaleY: progreso }}
            className="rm-static absolute bottom-0 left-5 top-0 w-px origin-top bg-brand-red-600 dark:bg-brand-red-400 lg:left-1/2"
          />

          {t.proceso.phases.map((fase, i) => {
            const { icon: Icon, foto } = faseMeta[i];
            const detalle = p.phases[i];
            const derecha = i % 2 === 1;
            return (
              <li
                key={fase.title}
                className="relative grid gap-8 pb-20 pl-16 last:pb-0 lg:grid-cols-2 lg:gap-24 lg:pl-0"
              >
                {/* Nodo de la fase sobre la línea */}
                <span className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-brand-red-600 text-white elev-2 dark:border-brand-ink lg:left-1/2 lg:-translate-x-1/2">
                  <Icon size={16} />
                </span>

                <Reveal
                  x={derecha ? 24 : -24}
                  y={0}
                  className={derecha ? "lg:order-2" : "lg:text-right"}
                >
                  <p className="font-brand text-sm font-bold uppercase tracking-[0.18em] text-brand-red-600 dark:text-brand-red-400">
                    {p.phase} 0{i + 1}
                  </p>
                  <h3 className="type-h2 mt-3 text-brand-navy dark:text-white">
                    {fase.title}
                  </h3>
                  <p className="type-body-lg mt-4 text-slate-600 dark:text-slate-400">
                    {fase.description}
                  </p>

                  <div
                    className={`mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-left dark:border-white/10 dark:bg-white/[0.03] ${
                      derecha ? "" : "lg:ml-auto"
                    } max-w-md`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                      {p.weDo}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {detalle.weDo.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                        >
                          <Check
                            size={16}
                            className="mt-0.5 shrink-0 text-brand-red-600 dark:text-brand-red-400"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-start gap-2.5 border-t border-slate-200 pt-4 dark:border-white/10">
                      <ArrowDownRight
                        size={18}
                        className="mt-0.5 shrink-0 text-brand-red-600 dark:text-brand-red-400"
                      />
                      <p className="text-sm">
                        <span className="font-bold text-brand-navy dark:text-white">
                          {p.youGet}:
                        </span>{" "}
                        <span className="text-slate-600 dark:text-slate-400">
                          {detalle.youGet}
                        </span>
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal
                  x={derecha ? -24 : 24}
                  y={0}
                  className={derecha ? "lg:order-1" : ""}
                >
                  <ParallaxImage
                    foto={foto}
                    strength={9}
                    sizes="(max-width: 1024px) 90vw, 40vw"
                    className="aspect-[4/5] max-h-[34rem] w-full rounded-[2rem] elev-3"
                  />
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
