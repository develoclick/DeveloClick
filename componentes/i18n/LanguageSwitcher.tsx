"use client";

import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className={`flex items-center gap-0.5 rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-1 text-xs font-bold ${className}`}
      role="group"
      aria-label="Selector de idioma"
    >
      <button
        type="button"
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 transition ${
          lang === "es"
            ? "bg-[#E63946] text-white"
            : "text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white"
        }`}
      >
        <span aria-hidden>🇪🇸</span> ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
        className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 transition ${
          lang === "en"
            ? "bg-[#E63946] text-white"
            : "text-gray-500 dark:text-slate-400 hover:text-gray-800 dark:hover:text-white"
        }`}
      >
        <span aria-hidden>🇺🇸</span> EN
      </button>
    </div>
  );
}
