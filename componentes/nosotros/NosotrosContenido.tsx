"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, animate, motion, useInView } from "framer-motion";
import { Code2, Compass, PenTool } from "lucide-react";
import PageHero from "@/componentes/ui/PageHero";
import SectionHeading from "@/componentes/ui/SectionHeading";
import ParallaxImage from "@/componentes/motion/Parallax";
import Reveal from "@/componentes/motion/Reveal";
import { fotos } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import nosotros from "@/componentes/i18n/pages/nosotros";

const fotosValores = [
  fotos.estrategiaProducto,
  fotos.optimizacion,
  fotos.programacion,
  fotos.lanzamiento,
];

/** Cifra que cuenta hasta su valor la primera vez que entra en pantalla. */
function Cifra({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const enVista = useInView(ref, { once: true, margin: "-60px" });
  const objetivo = parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  const sufijo = value.replace(/[\d.]/g, "");
  const [mostrado, setMostrado] = useState(0);

  useEffect(() => {
    if (!enVista) return;
    const controls = animate(0, objetivo, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setMostrado(v),
    });
    return () => controls.stop();
  }, [enVista, objetivo]);

  return (
    <div className="border-l-2 border-brand-red-600 pl-6 dark:border-brand-red-400">
      <p
        ref={ref}
        className="font-brand text-4xl font-bold tabular-nums text-brand-navy dark:text-white sm:text-5xl"
      >
        {Math.round(mostrado)}
        {sufijo}
      </p>
      <p className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
        {label}
      </p>
    </div>
  );
}

export default function NosotrosContenido() {
  const { t, lang } = useLanguage();
  const n = usePage(nosotros);
  const hero = t.nosotrosHero;
  const valores = t.nosotrosValores;
  const [valor, setValor] = useState(0);

  return (
    <>
      <PageHero
        page={t.nav.nosotros}
        eyebrow={hero.badge}
        title={`${hero.title1} ${hero.titleHighlight}`}
        highlight={hero.title2}
        subtitle={hero.subtitle}
        chips={n.hero.chips}
        foto={fotos.equipoEstrategia}
        fotoSecundaria={fotos.colaborativo}
        secondary={{ href: "#historia", label: n.hero.secondary }}
      />

      {/* Historia */}
      <section
        id="historia"
        className="bg-white px-4 py-16 transition-colors duration-300 dark:bg-brand-ink sm:px-6"
      >
        <ParallaxImage
          foto={fotos.liderazgo}
          strength={12}
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="mx-auto max-w-7xl rounded-[2rem] elev-3"
          imgClassName="object-[70%_center]"
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,21,38,0.95)_0%,rgba(10,21,38,0.82)_50%,rgba(10,21,38,0.2)_100%)]"
          />
          <Reveal className="relative max-w-2xl px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
            <p className="type-eyebrow flex items-center gap-3 text-brand-red-400">
              <span aria-hidden className="h-px w-8 bg-current" />
              {hero.bannerEyebrow}
            </p>
            <h2 className="type-h2 mt-5 text-white">{hero.bannerTitle}</h2>
            <p className="type-body-lg mt-5 text-slate-300">
              {hero.bannerParagraph}
            </p>
          </Reveal>
        </ParallaxImage>
      </section>

      {/* Principios interactivos */}
      <section className="bg-white py-24 transition-colors duration-300 dark:bg-brand-ink lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow={valores.eyebrow} title={valores.title} />

          <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {n.valores.hint}
              </p>
              <ul className="mt-4 space-y-3">
                {valores.valores.map((v, i) => {
                  const on = i === valor;
                  return (
                    <li key={v.title}>
                      <button
                        type="button"
                        aria-pressed={on}
                        onClick={() => setValor(i)}
                        onMouseEnter={() => setValor(i)}
                        className={`w-full rounded-3xl border p-6 text-left transition-all duration-300 ${
                          on
                            ? "border-brand-red-600/30 bg-slate-50 elev-2 dark:border-brand-red-400/30 dark:bg-white/[0.05]"
                            : "border-slate-200 hover:border-slate-300 dark:border-white/10 dark:hover:border-white/20"
                        }`}
                      >
                        <span className="flex items-center gap-4">
                          <span
                            className={`font-brand text-sm font-bold ${
                              on
                                ? "text-brand-red-600 dark:text-brand-red-400"
                                : "text-slate-400"
                            }`}
                          >
                            0{i + 1}
                          </span>
                          <span className="type-h4 text-brand-navy dark:text-white">
                            {v.title}
                          </span>
                        </span>
                        <span
                          className={`grid transition-[grid-template-rows] duration-400 ease-out ${
                            on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <span className="overflow-hidden">
                            <span className="block pl-9 pt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                              {v.description}
                            </span>
                          </span>
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="relative min-h-[24rem] overflow-hidden rounded-[2rem] bg-brand-ink elev-3 lg:min-h-0">
              <AnimatePresence initial={false}>
                <motion.div
                  key={valor}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Image
                    src={fotosValores[valor].src}
                    alt={fotosValores[valor].alt[lang]}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent"
              />
              <p className="font-brand absolute bottom-6 left-6 text-6xl font-bold text-white/90">
                0{valor + 1}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Un solo equipo */}
      <section className="overflow-hidden bg-slate-50 py-24 transition-colors duration-300 dark:bg-brand-navy-800 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-2 gap-4">
            <ParallaxImage
              foto={fotos.estrategiaCrecimiento}
              strength={10}
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="aspect-[3/4] rounded-3xl elev-2"
            />
            <div className="mt-16 space-y-4">
              <ParallaxImage
                foto={fotos.disenoUx}
                strength={14}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="aspect-square rounded-3xl elev-2"
              />
              <ParallaxImage
                foto={fotos.desarrolloEquipo}
                strength={14}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="aspect-square rounded-3xl elev-2"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow={n.equipo.eyebrow}
              title={n.equipo.title}
              highlight={n.equipo.highlight}
              paragraph={n.equipo.paragraph}
            />
            <ul className="mt-10 grid gap-3 sm:grid-cols-3">
              {n.equipo.items.map((item, i) => {
                const Icon = [Compass, PenTool, Code2][i];
                return (
                  <Reveal
                    as="li"
                    key={item}
                    delay={i * 0.08}
                    className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-brand-ink"
                  >
                    <Icon
                      size={22}
                      className="text-brand-red-600 dark:text-brand-red-400"
                    />
                    <p className="mt-3 font-display text-sm font-bold text-brand-navy dark:text-white">
                      {item}
                    </p>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      {/* Cifras verificables */}
      <section className="bg-white py-24 transition-colors duration-300 dark:bg-brand-ink">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow={n.cifras.eyebrow}
            title={n.cifras.title}
            highlight={n.cifras.highlight}
          />
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {valores.stats.map((stat) => (
              <Cifra key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
