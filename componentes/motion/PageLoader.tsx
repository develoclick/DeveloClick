"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

/** Tope visual. Si la página está lista antes, se cierra antes. */
const DURACION_MAXIMA = 1500;
/** Mínimo para que el gesto se lea como intencional y no como un parpadeo. */
const DURACION_MINIMA = 700;

/**
 * Entrada de marca de la primera carga de la sesión.
 *
 * La decisión de mostrarla la toma el script anti-flash del layout ANTES del
 * primer pintado (marca <html class="dc-intro">), no este componente. Eso evita
 * el parpadeo en visitas siguientes y cualquier desajuste de hidratación.
 *
 * Aquí solo se gestiona el cierre, siempre desde un callback (timeout, evento),
 * nunca de forma síncrona al montar.
 *
 * El overlay se superpone al contenido ya renderizado: el HTML completo está en
 * el DOM desde el primer byte, así que no afecta al SEO ni desplaza la maqueta.
 */
export default function PageLoader() {
  const [cerrado, setCerrado] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    if (!html.classList.contains("dc-intro")) return;

    const inicio = performance.now();

    // Solo cambia el estado: la clase `dc-intro` se retira en onExitComplete.
    // Si se quitara aquí, el overlay pasaría a display:none al instante y el
    // fundido de salida no llegaría a renderizarse nunca.
    const cerrar = () => setCerrado(true);

    /** Cierra en cuanto la página esté lista, respetando el mínimo. */
    const cerrarCuandoListo = () => {
      const restante = Math.max(
        0,
        DURACION_MINIMA - (performance.now() - inicio),
      );
      window.setTimeout(cerrar, restante);
    };

    if (document.readyState === "complete") cerrarCuandoListo();
    else window.addEventListener("load", cerrarCuandoListo, { once: true });

    const tope = window.setTimeout(cerrar, DURACION_MAXIMA);
    // Cualquier intención de interactuar cancela la intro de inmediato.
    window.addEventListener("pointerdown", cerrar, { once: true });
    window.addEventListener("keydown", cerrar, { once: true });

    return () => {
      window.clearTimeout(tope);
      window.removeEventListener("load", cerrarCuandoListo);
      window.removeEventListener("pointerdown", cerrar);
      window.removeEventListener("keydown", cerrar);
      html.classList.remove("dc-intro");
    };
  }, []);

  return (
    <AnimatePresence
      // La clase se retira cuando el fundido ha terminado de verse; eso también
      // libera el scroll (html.dc-intro body { overflow:hidden }).
      onExitComplete={() =>
        document.documentElement.classList.remove("dc-intro")
      }
    >
      {!cerrado && (
        <motion.div
          key="intro"
          aria-hidden
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="dc-intro-overlay fixed inset-0 z-[200] items-center justify-center bg-white dark:bg-brand-navy"
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/imagenes/develoclick_logo_PNG.png"
                alt=""
                width={190}
                height={58}
                priority
                className="object-contain"
              />
            </motion.div>

            {/* Trazo de marca: se expande bajo el logo y cierra el gesto. */}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mt-5 h-[2px] w-32 origin-left bg-brand-red-600 dark:bg-brand-red-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
