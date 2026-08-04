"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { dictionary, type Dictionary } from "@/componentes/i18n/dictionary";

export type Lang = "es" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "develoclick-lang";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  return stored === "en" ? "en" : "es";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const setLang = (value: Lang) => setLangState(value);
  const toggleLang = () => setLangState((prev) => (prev === "es" ? "en" : "es"));

  const currentTranslation = dictionary[lang] as Dictionary;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: currentTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return ctx;
}