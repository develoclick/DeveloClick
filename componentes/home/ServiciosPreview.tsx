"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/componentes/motion/Reveal";
import SectionHeading from "@/componentes/ui/SectionHeading";
import ButtonLink from "@/componentes/ui/ButtonLink";
import { servicioMeta } from "@/componentes/servicios/meta";
import { usePage } from "@/componentes/i18n/usePage";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import home from "@/componentes/i18n/pages/home";
import servicios from "@/componentes/i18n/pages/servicios";

/**
 * Posición de cada tarjeta en la cuadrícula bento de escritorio (3 columnas,
 * 3 filas = 9 celdas). Dos tarjetas altas y una ancha ocupan las 9 exactas.
 */
const bento = ["lg:row-span-2", "", "", "", "lg:row-span-2", "lg:col-span-2"];

/** Resumen de servicios del home: cada tarjeta lleva a su sección en /servicios. */
export default function ServiciosPreview() {
  const h = usePage(home).servicios;
  const s = usePage(servicios);
  const { lang } = useLanguage();

  return (
    <section className="bg-white py-24 transition-colors duration-300 dark:bg-brand-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={h.eyebrow}
            title={h.title}
            highlight={h.highlight}
            paragraph={h.paragraph}
          />
          <ButtonLink
            href="/servicios"
            variant="secondary"
            className="shrink-0"
          >
            {h.link}
          </ButtonLink>
        </div>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-3 lg:grid-flow-dense">
          {s.servicios.map((item, i) => {
            const { icon: Icon, foto } = servicioMeta[item.id];
            return (
              <Reveal
                as="li"
                key={item.id}
                delay={i * 0.06}
                className={`min-h-[17rem] ${bento[i]}`}
              >
                <Link
                  href={`/servicios#${item.id}`}
                  className="group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl bg-brand-ink p-6 elev-2 sm:p-7"
                >
                  <Image
                    src={foto.src}
                    alt={foto.alt[lang]}
                    fill
                    placeholder="blur"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-70 transition duration-700 ease-out group-hover:scale-105 group-hover:opacity-50"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/70 to-brand-ink/10"
                  />

                  <span className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-brand-red-600 sm:left-7 sm:top-7">
                    <Icon size={20} />
                  </span>
                  <span className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:rotate-45 group-hover:border-brand-red-400 group-hover:bg-brand-red-600 sm:right-7 sm:top-7">
                    <ArrowUpRight size={18} />
                  </span>

                  <div className="relative">
                    <p className="font-brand text-[11px] font-bold uppercase text-brand-red-400">
                      0{i + 1}
                    </p>
                    <h3 className="type-h3 mt-2 text-white">{item.category}</h3>
                    {/* La descripción se despliega al pasar el cursor; en
                        táctil (sin hover) queda siempre visible. */}
                    <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out [@media(hover:hover)]:grid-rows-[0fr] [@media(hover:hover)]:group-hover:grid-rows-[1fr] [@media(hover:hover)]:group-focus-visible:grid-rows-[1fr]">
                      <p className="overflow-hidden text-sm leading-6 text-slate-300">
                        <span className="block pt-2">{item.description}</span>
                      </p>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
