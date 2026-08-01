"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const images = [
  "/imagenes/diseño.png",
  "/imagenes/reunion-estrategica.jpg",
  "/imagenes/transformacion.png",
  "/imagenes/moderno.jpg",
  "/imagenes/automatizacion.jpg",
];

export default function ServiciosDetalle() {
  const { t } = useLanguage();
  const servicios = t.serviciosDetalle.servicios.map((s, index) => ({ ...s, image: images[index] }));

  return (
    <section className="relative w-full overflow-hidden bg-white dark:bg-[#07182d] py-20 transition-colors duration-300 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 space-y-20 lg:space-y-28">
        {servicios.map((servicio, index) => {
          const reversed = index % 2 === 1;
          return (
            <motion.div
              key={servicio.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div className={reversed ? "lg:order-2" : ""}>
                <div className="relative overflow-hidden rounded-[2rem] border border-white shadow-2xl shadow-slate-900/10 aspect-[4/3]">
                  <Image
                    src={servicio.image}
                    alt={servicio.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/70 via-transparent to-transparent" />
                </div>
              </div>

              <div className={reversed ? "lg:order-1" : ""}>
                <p className="text-[11px] font-bold tracking-[0.18em] text-[#E63946] uppercase">{servicio.category}</p>
                <h2 className="mt-4 text-3xl font-display font-bold leading-tight tracking-tight text-[#07182D] dark:text-white sm:text-4xl">
                  {servicio.title}
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-slate-500 dark:text-slate-400">
                  {servicio.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {servicio.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check size={18} className="mt-0.5 shrink-0 text-[#E63946]" />
                      <span className="text-slate-600 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/#cotizador"
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#07182D] dark:bg-[#E63946] px-6 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5"
                >
                  {t.serviciosDetalle.cta} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
