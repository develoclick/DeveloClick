"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "@/componentes/motion/Reveal";
import TiltCard from "@/componentes/motion/TiltCard";
import SectionHeading from "@/componentes/ui/SectionHeading";
import ButtonLink from "@/componentes/ui/ButtonLink";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import home from "@/componentes/i18n/pages/home";

/** Resumen de precios: nombre, rango y para quién es. El detalle vive en /precios. */
export default function PreciosPreview() {
  const { t } = useLanguage();
  const h = usePage(home).precios;
  const pp = t.preciosPlanes;

  return (
    <section className="bg-white py-24 transition-colors duration-300 dark:bg-brand-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow={h.eyebrow}
          title={h.title}
          highlight={h.highlight}
          paragraph={h.paragraph}
          align="center"
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {pp.plans.map((plan, i) => {
            const destacado = i === 1;
            return (
              <Reveal as="li" key={plan.name} delay={i * 0.08}>
                <TiltCard
                  max={5}
                  className={`h-full rounded-3xl ${destacado ? "lg:-translate-y-3" : ""}`}
                >
                  <Link
                    href="/precios"
                    className={`group relative flex h-full flex-col rounded-3xl p-8 transition-colors duration-300 ${
                      destacado
                        ? "bg-brand-ink text-white elev-3 ring-1 ring-brand-red-500/40 dark:bg-brand-navy"
                        : "border border-slate-200 bg-white elev-1 hover:border-brand-red-600/30 dark:border-white/10 dark:bg-white/[0.03]"
                    }`}
                  >
                    {destacado && (
                      <span className="absolute -top-3.5 left-8 inline-flex items-center gap-1.5 rounded-full bg-brand-red-600 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                        <Sparkles size={12} /> {pp.mostChosen}
                      </span>
                    )}
                    <div className="flex items-start justify-between">
                      <h3
                        className={`font-brand text-lg font-bold uppercase tracking-[0.08em] ${
                          destacado
                            ? "text-white"
                            : "text-brand-navy dark:text-white"
                        }`}
                      >
                        {plan.name}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className={`transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                          destacado
                            ? "text-brand-red-400"
                            : "text-brand-red-600 dark:text-brand-red-400"
                        }`}
                      />
                    </div>
                    <p
                      className={`mt-6 text-xs font-semibold uppercase tracking-[0.16em] ${
                        destacado
                          ? "text-slate-400"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {h.from}
                    </p>
                    <p
                      className={`mt-1 font-display text-3xl font-bold tracking-tight ${
                        destacado
                          ? "text-white"
                          : "text-brand-navy dark:text-white"
                      }`}
                    >
                      {plan.price}
                    </p>
                    <p
                      className={`mt-5 flex-1 text-sm leading-6 ${
                        destacado
                          ? "text-slate-300"
                          : "text-slate-600 dark:text-slate-400"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </Link>
                </TiltCard>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-12 text-center">
          <ButtonLink href="/precios" variant="ghost">
            {h.link}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
