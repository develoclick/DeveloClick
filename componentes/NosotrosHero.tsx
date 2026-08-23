"use client";

import Image from "next/image";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function NosotrosHero() {
  const { t } = useLanguage();
  const n = t.nosotrosHero;
  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#07182d] pt-20 pb-16 transition-colors duration-300 lg:pt-28 lg:pb-20">
      <div
        className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-red-600" />
            <p className="text-[11px] font-bold tracking-[0.18em] text-brand-red-600 dark:text-brand-red-400 uppercase">
              {n.badge}
            </p>
            <span className="h-px w-8 bg-brand-red-600" />
          </div>

          <h1 className="type-display mt-6 text-[#07182D] dark:text-white">
            {n.title1}{" "}
            <span className="text-brand-red-600 dark:text-brand-red-400">
              {n.titleHighlight}
            </span>{" "}
            {n.title2}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg">
            {n.subtitle}
          </p>
        </div>

        <div className="group relative mt-14 min-h-[320px] overflow-hidden rounded-3xl bg-[#0A192F] shadow-2xl sm:min-h-[420px]">
          <Image
            src="/imagenes/reunion-estrategica.jpg"
            alt="Equipo DeveloClick en sesión de estrategia"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,17,35,0.92)_0%,rgba(4,17,35,0.6)_45%,rgba(4,17,35,0.1)_85%)]" />
          <div className="relative flex min-h-[320px] max-w-xl flex-col justify-end p-8 sm:min-h-[420px] sm:p-12">
            <p className="type-eyebrow text-brand-red-600 dark:text-brand-red-400">
              {n.bannerEyebrow}
            </p>
            <h2 className="type-h2 mt-4 text-white">{n.bannerTitle}</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
              {n.bannerParagraph}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
