"use client";

import Image from "next/image";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function ServiciosDestacados() {
  const { t } = useLanguage();
  return (
    <section className="relative overflow-hidden  bg-[#07182D] lg:py-28">

      <div className="pointer-events-none absolute left-0 top-20 h-6 w-6 -translate-x-1/2 rounded-full border border-cyan-400" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3"><span className="h-px w-5 bg-[#E63946]" /><p className="text-[11px] font-bold tracking-[0.17em] text-[#E63946] uppercase">{t.serviciosDestacados.eyebrow}</p><span className="h-px w-5 bg-[#E63946]" /></div>
          <h2 className="mt-5 text-4xl font-display font-bold leading-[1.02] tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
            {t.serviciosDestacados.title1} <span className="text-[#E63946]">{t.serviciosDestacados.titleHighlight}</span> {t.serviciosDestacados.title2}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white sm:text-lg">
            {t.serviciosDestacados.paragraph}
          </p>
        </div>

        <div className="group relative mt-12 min-h-[340px] overflow-hidden rounded-[1.5rem] bg-[#0A192F] shadow-2xl shadow-slate-900/15 sm:min-h-[400px]">
          <Image src="/imagenes/equipo-corporativo.jpg" alt={t.serviciosDestacados.imageAlt} fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover transition duration-700 group-hover:scale-[1.025]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,17,35,0.94)_0%,rgba(4,17,35,0.68)_38%,rgba(4,17,35,0.05)_78%)]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#07182d]/50 to-transparent" />
          <div className="relative flex min-h-[340px] max-w-xl flex-col justify-end p-8 sm:min-h-[400px] sm:p-10 lg:p-12">
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#e63946] uppercase">{t.serviciosDestacados.cardEyebrow}</p>
            <h3 className="mt-4 text-3xl font-display font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl">
              {t.serviciosDestacados.cardTitle}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
              {t.serviciosDestacados.cardParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
