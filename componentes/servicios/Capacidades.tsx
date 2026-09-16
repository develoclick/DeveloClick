"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cable,
  Cloud,
  RotateCw,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react";
import Reveal from "@/componentes/motion/Reveal";
import SectionHeading from "@/componentes/ui/SectionHeading";
import { fotos } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import servicios from "@/componentes/i18n/pages/servicios";

const meta = [
  { icon: Cable, foto: fotos.integraciones },
  { icon: ShieldCheck, foto: fotos.ciberseguridad },
  { icon: Cloud, foto: fotos.devops },
  { icon: ShoppingCart, foto: fotos.ecommerce },
];

/**
 * Tarjetas que giran para mostrar por qué importa cada capacidad.
 * Son botones reales: funcionan con clic, toque y teclado.
 */
export default function Capacidades() {
  const c = usePage(servicios).capacidades;
  const { lang } = useLanguage();
  const [giradas, setGiradas] = useState<Record<number, boolean>>({});

  return (
    <section className="relative overflow-hidden bg-brand-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={c.eyebrow}
          title={c.title}
          highlight={c.highlight}
          paragraph={c.paragraph}
          tone="dark"
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.items.map((item, i) => {
            const { icon: Icon, foto } = meta[i];
            const girada = !!giradas[i];
            return (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 0.07}
                className="[perspective:1200px]"
              >
                <button
                  type="button"
                  aria-pressed={girada}
                  onClick={() => setGiradas((g) => ({ ...g, [i]: !g[i] }))}
                  className="relative block h-[22rem] w-full text-left"
                >
                  <motion.span
                    className="relative block h-full w-full [transform-style:preserve-3d]"
                    animate={{ rotateY: girada ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Cara frontal */}
                    <span className="absolute inset-0 flex flex-col justify-end overflow-hidden rounded-3xl border border-white/10 p-6 [backface-visibility:hidden]">
                      <Image
                        src={foto.src}
                        alt={foto.alt[lang]}
                        fill
                        placeholder="blur"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        className="object-cover opacity-60"
                      />
                      <span
                        aria-hidden
                        className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/60 to-transparent"
                      />
                      <span className="relative">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red-600 text-white">
                          <Icon size={20} />
                        </span>
                        <span className="type-h4 mt-4 block text-white">
                          {item.title}
                        </span>
                        <span className="mt-2 block text-sm leading-6 text-slate-300">
                          {item.text}
                        </span>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-red-400">
                          <RotateCw size={13} /> {c.flip}
                        </span>
                      </span>
                    </span>

                    {/* Cara trasera */}
                    <span className="absolute inset-0 flex flex-col justify-center rounded-3xl bg-brand-red-600 p-7 text-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <Icon size={28} className="text-white/80" />
                      <span className="font-brand mt-6 block text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                        {c.flip}
                      </span>
                      <span className="mt-3 block font-display text-xl font-bold leading-snug">
                        {item.why}
                      </span>
                    </span>
                  </motion.span>
                </button>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
