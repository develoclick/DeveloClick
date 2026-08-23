"use client";

import {
  createContext,
  useContext,
  useCallback,
  useEffect,
  useSyncExternalStore,
} from "react";
import { dictionary, type Dictionary } from "@/componentes/i18n/dictionary";

export type Lang = "es" | "en";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  t: Dictionary;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const STORAGE_KEY = "develoclick-lang";
const EVENTO = "develoclick:lang";

/**
 * El idioma vive en localStorage, que no existe durante el renderizado en
 * servidor. Leerlo en el primer render provocaba un desajuste de hidratación:
 * el servidor pintaba "Inicio" y el cliente "Home".
 *
 * `useSyncExternalStore` resuelve justamente eso: React usa `getServerSnapshot`
 * mientras hidrata —así el primer render del cliente coincide con el HTML— y
 * solo después consulta `getSnapshot` y vuelve a renderizar si difiere.
 */
const suscribir = (alCambiar: () => void) => {
  window.addEventListener(EVENTO, alCambiar);
  // Mantiene el idioma sincronizado entre pestañas abiertas.
  window.addEventListener("storage", alCambiar);
  return () => {
    window.removeEventListener(EVENTO, alCambiar);
    window.removeEventListener("storage", alCambiar);
  };
};

const leerCliente = (): Lang =>
  window.localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "es";

/** El servidor siempre renderiza en español: es el idioma por defecto del sitio. */
const leerServidor = (): Lang => "es";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang = useSyncExternalStore(suscribir, leerCliente, leerServidor);

  const setLang = useCallback((valor: Lang) => {
    window.localStorage.setItem(STORAGE_KEY, valor);
    window.dispatchEvent(new Event(EVENTO));
  }, []);

  const toggleLang = useCallback(
    () => setLang(lang === "es" ? "en" : "es"),
    [lang, setLang],
  );

  // Refleja el idioma en el atributo lang del documento (accesibilidad y SEO).
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const t = dictionary[lang] as Dictionary;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return ctx;
}
