"use client";

import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function PreciosHero() {
  const { t } = useLanguage();
  const p = t.preciosHero;
  return (
    <section className="relative w-full bg-white dark:bg-[#07182d] py-24 overflow-hidden transition-colors duration-300">
      <div
        className="absolute inset-0 z-0 opacity-[0.4] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="flex items-center justify-center gap-3 text-[#E63946] font-bold tracking-[0.2em] text-[11px] uppercase mb-6">
          <div className="h-[2px] w-8 bg-[#E63946]" />
          {p.badge}
          <div className="h-[2px] w-8 bg-[#E63946]" />
        </div>

        <h1 className="text-5xl md:text-7xl font-display font-bold text-[#07182d] dark:text-white mb-6 tracking-tight">
          {p.title1} <span className="text-[#E63946]">{p.titleHighlight}</span>
        </h1>

        <p className="mx-auto text-slate-500 dark:text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed">
          {p.subtitle}
        </p>
      </div>
    </section>
  );
}
