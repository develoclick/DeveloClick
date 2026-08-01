"use client";

import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const companies = ["Alaia", "Nortek", "Bienestar+", "Vantia", "Solvex", "Kairos Studio", "Andina Cloud", "Rumbo Digital"];
const longCompanies = [...companies, ...companies];

function CompanySet({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14" aria-hidden={hidden}>
      {longCompanies.map((name, index) => (
        <span
          key={`${name}-${index}`}
          className="whitespace-nowrap text-lg font-black tracking-tight text-slate-300 dark:text-white/15 sm:text-xl"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default function TrustBar() {
  const { t } = useLanguage();
  return (
    <section className="overflow-hidden bg-white dark:bg-[#07182d] py-10 transition-colors duration-300 border-y border-slate-100 dark:border-white/5">
      <p className="mx-auto mb-6 max-w-7xl px-6 text-center text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        {t.trustBar.label}
      </p>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white dark:from-[#07182d] to-transparent sm:w-32" />
        <div className="marquee-track flex">
          <CompanySet />
          <CompanySet hidden />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white dark:from-[#07182d] to-transparent sm:w-32" />
      </div>
    </section>
  );
}
