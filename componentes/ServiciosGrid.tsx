"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Code2,
  Globe2,
  Layers3,
  LayoutDashboard,
  Megaphone,
  Zap,
  CheckCircle2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const serviceMeta: { id: "web" | "software" | "saas" | "dashboards" | "marketing" | "automation"; icon: LucideIcon; image: string }[] = [
  { id: "web", icon: Globe2, image: "/imagenes/diseño.png" },
  { id: "software", icon: Code2, image: "/imagenes/reunion-estrategica.jpg" },
  { id: "saas", icon: Layers3, image: "/imagenes/diseño.png" },
  { id: "dashboards", icon: LayoutDashboard, image: "/imagenes/reunion-estrategica.jpg" },
  { id: "marketing", icon: Megaphone, image: "/imagenes/diseño.png" },
  { id: "automation", icon: Zap, image: "/imagenes/reunion-estrategica.jpg" },
];

export default function ServiciosGrid() {
  const { t } = useLanguage();
  const services = useMemo(
    () => serviceMeta.map((meta) => ({ ...meta, ...t.serviciosGrid.services[meta.id] })),
    [t]
  );
  const [activeId, setActiveId] = useState(services[0].id);

  const activeService = useMemo(
    () => services.find((s) => s.id === activeId) ?? services[0],
    [activeId, services]
  );

  return (
    <section className="relative w-full overflow-hidden bg-[#FFFFFF] dark:bg-[#07182d] py-20 transition-colors duration-300 lg:py-28">
      {/* Decoración de fondo */}
      <div className="pointer-events-none absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#FF2738]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-40 h-80 w-80 rounded-full bg-[#07182D]/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/80 dark:from-[#07182d]/80 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#FF2738]/15 bg-white dark:bg-white/5 px-4 py-2 shadow-sm">
            <Sparkles size={14} className="text-[#FF2738]" />
            <span className="text-[11px] font-bold tracking-[0.18em] text-[#FF2738] uppercase">
              {t.serviciosGrid.badge}
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-display font-bold leading-[1.02] tracking-[-0.05em] text-[#07182D] dark:text-white sm:text-5xl lg:text-6xl">
            {t.serviciosGrid.title1} <span className="text-[#FF2738]">{t.serviciosGrid.titleHighlight}</span> {t.serviciosGrid.title2}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            {t.serviciosGrid.paragraph}
          </p>
        </motion.div>

        {/* Cards superiores */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-12 grid gap-px overflow-hidden rounded-t-[1.75rem] border-x border-t border-slate-200 dark:border-white/10 bg-slate-200 dark:bg-white/10 md:grid-cols-2 xl:grid-cols-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            const active = activeService.id === service.id;

            return (
              <button
                key={service.id}
                type="button"
                onClick={() => setActiveId(service.id)}
                className={`group relative min-h-[170px] bg-white  p-6 text-left transition-all duration-300 hover:bg-[#FF2738] md:min-h-[180px] xl:min-h-[190px] ${
                  active ? "bg-[#FF2738]" : "bg-[#000000]"
                }`}
              >
                <div
                  className={`mx-auto flex h-12 w-12 items-center justify-center rounded-2xl  border transition-all duration-300 ${
                    active
                      ? "border-white/20 text-black"
                      : "border-[#07182D]/10 dark:border-white/10 bg-white dark:bg-white/5 text-[#07182D] dark:text-white group-hover:border-white/20 group-hover:bg-white/15 group-hover:text-white"
                  }`}
                >
                  <Icon size={22} />
                </div>

                <h3
                  className={`mt-5 text-center text-lg font-extrabold tracking-[-0.03em] transition-colors duration-300 ${
                    active
                      ? "text-black"
                      : "text-[#07182D] dark:text-white group-hover:text-white"
                  }`}
                >
                  {service.title}
                </h3>

                <p
                  className={`mx-auto mt-2 max-w-[18rem] text-center text-sm leading-6 transition-colors duration-300 ${
                    active
                      ? "text-black"
                      : "text-slate-500 group-hover:text-white/85"
                  }`}
                >
                  {service.description}
                </p>

                <div
                  className={`absolute inset-x-0 bottom-0 h-1 transition-all duration-300  ${
                    active
                      ? "bg-white text-black"
                      : "bg-[#FF2738] opacity-100 "
                  }`}
                />
              </button>
            );
          })}
        </motion.div>

        {/* Contenido inferior */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="mt-14 grid items-center gap-10 lg:grid-cols-2"
        >
          {/* Texto */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-[#FF2738] uppercase">
              {t.serviciosGrid.selectedLabel}
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <h3 className="mt-4 text-3xl font-black tracking-[-0.04em] text-[#07182D] dark:text-white sm:text-4xl">
                  {activeService.title}
                </h3>

                <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
                  {activeService.detail}
                </p>

                <div className="mt-8 space-y-4">
                  {t.serviciosGrid.bullets.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 text-[#FF2738]" size={18} />
                      <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="inline-flex items-center gap-2 rounded-2xl bg-[#ff2738] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-[#07182D]/15 transition-transform hover:-translate-y-0.5">
                    {t.serviciosGrid.exploreCta} <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Imagen */}
          <div className="relative">
            <div className="absolute -left-6 top-10 h-32 w-32 rounded-full bg-[#FF2738]/10 blur-3xl" />
            <div className="absolute -right-6 bottom-10 h-40 w-40 rounded-full bg-[#07182D]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white dark:border-white/10 bg-white dark:bg-white/5 shadow-2xl shadow-slate-900/10">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative aspect-[4/3] w-full"
              >
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/75 via-[#07182D]/15 to-transparent" />

                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[#07182D] shadow-lg backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#FF2738]" />
                  Develoclick
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="max-w-md rounded-[1.5rem] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
                    <p className="text-sm leading-6 text-white/85">
                      {t.serviciosGrid.quote}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
