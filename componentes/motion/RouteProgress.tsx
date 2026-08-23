"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Barra de progreso de navegación.
 *
 * Aparece al pulsar un enlace interno y desaparece cuando la nueva ruta está
 * montada. Es `pointer-events-none`, así que nunca intercepta clics.
 *
 * El estado "cargando" se deriva durante el render comparando el destino
 * pendiente con la ruta actual, en lugar de sincronizarse con un efecto: así no
 * hay setState en el cuerpo de un efecto ni renders en cascada.
 */
export default function RouteProgress() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [destino, setDestino] = useState<string | null>(null);

  useEffect(() => {
    if (reduceMotion) return;

    const alPulsar = (e: MouseEvent) => {
      // Solo clic primario sin modificadores: lo demás abre en otra pestaña.
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;

      const enlace = (e.target as HTMLElement)?.closest?.("a");
      if (!enlace) return;

      const href = enlace.getAttribute("href");
      if (!href || enlace.target === "_blank") return;
      // Externos, anclas y protocolos especiales no cambian de ruta.
      if (!href.startsWith("/") || href.startsWith("/#")) return;

      const ruta = href.split("#")[0];
      if (ruta === window.location.pathname) return;

      setDestino(ruta);
    };

    document.addEventListener("click", alPulsar);
    return () => document.removeEventListener("click", alPulsar);
  }, [reduceMotion]);

  // Estado derivado: si la ruta ya es el destino, la navegación terminó.
  const cargando = destino !== null && destino !== pathname;

  // Red de seguridad: si la navegación nunca ocurre, la barra no se queda fija.
  useEffect(() => {
    if (!cargando) return;
    const t = window.setTimeout(() => setDestino(null), 6000);
    return () => window.clearTimeout(t);
  }, [cargando]);

  return (
    <AnimatePresence>
      {cargando && (
        <motion.div
          key="route-progress"
          aria-hidden
          className="pointer-events-none fixed inset-x-0 top-0 z-[150] h-[2px] origin-left bg-brand-red-600 dark:bg-brand-red-400"
          initial={{ scaleX: 0, opacity: 1 }}
          // Avanza hasta el 90% y espera: nunca afirma un 100% que no ha ocurrido.
          animate={{ scaleX: 0.9 }}
          exit={{ scaleX: 1, opacity: 0 }}
          transition={{
            scaleX: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.2, delay: 0.1 },
          }}
        />
      )}
    </AnimatePresence>
  );
}
