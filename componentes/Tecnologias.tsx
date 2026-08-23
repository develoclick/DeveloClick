"use client";

import React from "react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const technologies = [
  { name: "React", mark: "⦿", color: "text-sky-600 bg-sky-50" },
  { name: "Next.js", mark: "⦿", color: "text-slate-900 bg-slate-100" },
  { name: "Node.js", mark: "⦿", color: "text-emerald-600 bg-emerald-50" },
  { name: "Python", mark: "⦿", color: "text-amber-600 bg-amber-50" },
  { name: "AWS", mark: "⦿", color: "text-orange-600 bg-orange-50" },
  { name: "Figma", mark: "⦿", color: "text-fuchsia-600 bg-fuchsia-50" },
  { name: "Stripe", mark: "⦿", color: "text-violet-600 bg-violet-50" },
  { name: "Supabase", mark: "⦿", color: "text-emerald-600 bg-emerald-50" },
];

const longTechnologySet = [...technologies, ...technologies];

function TechnologySet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-3 pr-3 sm:gap-4 sm:pr-4 bg-[#07182d]"
      aria-hidden={hidden}
    >
      {longTechnologySet.map((tech, index) => (
        <div
          key={`${tech.name}-${index}`}
          className=" group flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:elev-2"
        >
          <span
            className={` flex h-8 min-w-8 items-center justify-center rounded-xl text-xs font-bold text-brand-red-400`}
          >
            {tech.mark}
          </span>
          <span className="whitespace-nowrap text-sm font-bold text-white transition-colors group-hover:text-white sm:text-base">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Tecnologias() {
  const { t } = useLanguage();
  return (
    <section
      className="overflow-hidden bg-[#07182d] py-6"
      aria-label={t.tecnologias.heading}
    >
      {/* Encabezado sutil */}
      <div className="mx-auto mb-4 flex max-w-7xl items-center gap-2 px-6">
        <span className="h-2 w-2 rounded-full bg-brand-red-500 animate-pulse" />
        <p className="type-eyebrow text-white">{t.tecnologias.heading}</p>
      </div>

      {/* Marquee de tecnologías */}
      {/* Marquee de tecnologías */}
      <div className="relative ">
        {/* Máscara de degradado izquierda */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32" />

        <div className="marquee-track flex ">
          <TechnologySet />
          <TechnologySet hidden />
        </div>

        {/* Máscara de degradado derecha */}
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32" />
      </div>
    </section>
  );
}
