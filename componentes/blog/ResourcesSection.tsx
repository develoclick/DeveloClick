"use client";

import { motion } from "framer-motion";
import {
  Calculator,
  ClipboardList,
  FileText,
  GraduationCap,
  Layers,
  Lock,
} from "lucide-react";

const resources = [
  {
    icon: ClipboardList,
    title: "Checklist de auditoría web",
    type: "Checklist",
    description:
      "40 puntos para evaluar si tu sitio está listo para convertir.",
  },
  {
    icon: FileText,
    title: "Guía de automatización empresarial",
    type: "Guía",
    description: "Cómo identificar y priorizar qué automatizar primero.",
  },
  {
    icon: Layers,
    title: "Plantilla de proceso de ventas",
    type: "Plantilla",
    description: "Estructura tu embudo comercial antes de elegir un CRM.",
  },
  {
    icon: GraduationCap,
    title: "Whitepaper: IA para pymes",
    type: "Whitepaper",
    description: "Casos de uso reales y accesibles, sin tecnicismos.",
  },
  {
    icon: Calculator,
    title: "Calculadora de ROI de automatización",
    type: "Calculadora",
    description: "Estima cuánto puedes ahorrar automatizando un proceso.",
  },
  {
    icon: FileText,
    title: "Ebook: Landing pages que convierten",
    type: "Ebook",
    description: "La anatomía completa de una página que vende.",
  },
];

export default function ResourcesSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-4">
      <div className="max-w-2xl">
        <p className="type-eyebrow text-brand-red-600 dark:text-brand-red-400">
          Recursos gratuitos
        </p>
        <h2 className="type-h2 mt-3 text-[#07182D] dark:text-white">
          Herramientas listas para usar.
        </h2>
        <p className="mt-4 text-base leading-7 text-slate-500 dark:text-slate-400">
          Guías, checklists y plantillas descargables para aplicar estas
          estrategias sin partir de cero. Muy pronto disponibles.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative flex flex-col rounded-3xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6 elev-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-slate-50 dark:bg-white/5 text-[#07182D] dark:text-white">
                <resource.icon size={20} />
              </div>
              <span className="rounded-full bg-slate-50 dark:bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                {resource.type}
              </span>
            </div>
            <h3 className="type-h3 mt-4 text-[#07182D] dark:text-white">
              {resource.title}
            </h3>
            <p className="mt-1.5 flex-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {resource.description}
            </p>

            <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-slate-400 dark:text-slate-500">
              <Lock size={12} /> Próximamente
            </div>

            <div className="absolute inset-0 rounded-3xl bg-white/40 dark:bg-[#07182d]/40 opacity-0 backdrop-blur-[1px] transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
