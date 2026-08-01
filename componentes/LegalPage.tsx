"use client";

import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function LegalPage({ variant }: { variant: "privacy" | "terms" }) {
  const { t } = useLanguage();
  const legal = t.legal;
  const title = variant === "privacy" ? legal.privacyTitle : legal.termsTitle;
  const intro = variant === "privacy" ? legal.privacyIntro : legal.termsIntro;
  const sections = variant === "privacy" ? legal.privacySections : legal.termsSections;

  return (
    <section className="relative w-full bg-white dark:bg-[#07182d] py-24 transition-colors duration-300">
      <div className="mx-auto max-w-3xl px-6">
        <p className="text-[11px] font-bold tracking-[0.18em] text-[#E63946] uppercase">{legal.updated}</p>
        <h1 className="mt-4 text-4xl font-display font-bold tracking-tight text-[#07182D] dark:text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-500 dark:text-slate-400">{intro}</p>

        <div className="mt-12 space-y-10">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-lg font-bold text-[#07182D] dark:text-white">{section.heading}</h2>
              <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">{section.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
