"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { servicioMeta } from "@/componentes/servicios/meta";
import { usePage } from "@/componentes/i18n/usePage";
import servicios from "@/componentes/i18n/pages/servicios";

/**
 * Barra fija con los 6 servicios. Resalta el que está en pantalla
 * (IntersectionObserver) y permite saltar a cualquiera.
 */
export default function ServiciosNav() {
  const s = usePage(servicios);
  const [activo, setActivo] = useState<string>(s.servicios[0].id);

  useEffect(() => {
    const secciones = s.servicios
      .map((x) => document.getElementById(x.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActivo(visible.target.id);
      },
      // Franja central de la pantalla: el servicio "activo" es el que la cruza.
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5] },
    );
    secciones.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [s.servicios]);

  return (
    <nav
      aria-label={s.navLabel}
      className="sticky top-20 z-30 border-y border-slate-200 bg-white/90 backdrop-blur-xl transition-colors duration-300 dark:border-white/10 dark:bg-brand-ink/90"
    >
      <ul className="isolate mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none] sm:px-6 [&::-webkit-scrollbar]:hidden">
        {s.servicios.map((item) => {
          const Icon = servicioMeta[item.id].icon;
          const on = activo === item.id;
          return (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                aria-current={on ? "location" : undefined}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors ${
                  on
                    ? "text-white"
                    : "text-slate-600 hover:text-brand-navy dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {on && (
                  <motion.span
                    layoutId="servicio-activo"
                    aria-hidden
                    className="absolute inset-0 -z-10 rounded-xl bg-brand-red-600"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                  />
                )}
                <Icon size={16} aria-hidden />
                {item.short}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
