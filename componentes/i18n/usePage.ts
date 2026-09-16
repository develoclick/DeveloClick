"use client";

import { useLanguage } from "@/componentes/i18n/LanguageProvider";

/**
 * Devuelve el contenido de una página en el idioma activo.
 *
 * Cada módulo de `i18n/pages` declara `en: typeof es`, así que TypeScript
 * obliga a que ambas traducciones tengan exactamente la misma forma.
 */
export function usePage<T>(content: { es: T; en: T }): T {
  const { lang } = useLanguage();
  return content[lang];
}
