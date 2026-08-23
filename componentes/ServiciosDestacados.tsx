"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

/**
 * Composición asimétrica deliberada: la imagen desborda el contenedor por la
 * derecha y el bloque de texto se apoya sobre ella. Rompe la racha de secciones
 * centradas idénticas detectada en la auditoría.
 *
 * Nota: el encabezado genérico ("Lo que construimos para ti." + su párrafo) se
 * dejó de renderizar aquí porque era literalmente el mismo H2 y el mismo párrafo
 * que ServiciosGrid. Se conserva íntegro el contenido propio de esta sección
 * (cardEyebrow / cardTitle / cardParagraph). Ningún texto fue modificado.
 */
export default function ServiciosDestacados() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-brand-navy py-24 lg:py-32">
      {/* Retícula sutil, anclada al borde: sustituye al blob decorativo genérico */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to right, black 0%, transparent 55%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-0">
          {/* Texto: se superpone a la imagen en desktop */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 lg:col-start-1 lg:row-start-1 lg:mr-[-12%] lg:max-w-xl"
          >
            <div className="rounded-3xl bg-brand-navy-800/90 p-8 elev-3 ring-1 ring-white/10 backdrop-blur-xl sm:p-10 lg:p-12">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-brand-red-400" />
                <p className="type-eyebrow text-brand-red-400">
                  {t.serviciosDestacados.cardEyebrow}
                </p>
              </div>

              <h2 className="type-h2 mt-5 text-white">
                {t.serviciosDestacados.cardTitle}
              </h2>

              <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
                {t.serviciosDestacados.cardParagraph}
              </p>
            </div>
          </motion.div>

          {/* Imagen: desborda el contenedor hacia la derecha */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:col-start-2 lg:row-start-1 lg:mr-[-8vw]"
          >
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl lg:aspect-[5/4]">
              <Image
                src="/imagenes/equipo-corporativo.jpg"
                alt={t.serviciosDestacados.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,45,0.92)_0%,rgba(7,24,45,0.35)_45%,rgba(7,24,45,0)_100%)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
