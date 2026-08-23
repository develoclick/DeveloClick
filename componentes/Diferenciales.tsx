"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Target,
  Layers,
  Headphones,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const icons: LucideIcon[] = [Sparkles, Layers, Target, Cpu, Headphones];

export default function DiferencialesRediseñado() {
  const { t } = useLanguage();
  const diferenciales = t.diferenciales.items.map((item, index) => ({
    ...item,
    number: String(index + 1).padStart(2, "0"),
    icon: icons[index],
  }));

  return (
    <section className="relative w-full overflow-hidden bg-brand-navy py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        {/* Encabezado Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-red-400/25 bg-white/5 px-4 py-1.5 elev-1 mb-4">
            <span className="text-[11px] font-extrabold tracking-[0.18em] text-brand-red-400 uppercase">
              {t.diferenciales.badge}
            </span>
          </div>

          <h2 className="type-h2 mt-5 text-white">
            {t.diferenciales.title1}{" "}
            <span className="text-brand-red-400">
              {t.diferenciales.titleHighlight}
            </span>{" "}
            {t.diferenciales.title2}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {t.diferenciales.paragraph}
          </p>
        </motion.div>

        {/* Banner Hero / Principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-brand-navy-800 elev-3 mb-16 p-8 dark:ring-1 dark:ring-white/10 sm:p-12 lg:p-16"
        >
          {/* Fondo con imagen y overlay degradado */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[url('/imagenes/equipo-corporativo.jpg')] bg-cover bg-center opacity-30 mix-blend-luminosity scale-105" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07182D] via-[#07182D]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="inline-block text-[11px] font-extrabold tracking-[0.18em] text-brand-red-400 uppercase mb-3">
              {t.diferenciales.bannerEyebrow}
            </span>
            <h3 className="type-h3 text-white">
              {t.diferenciales.bannerTitle1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-brand-red-600">
                {t.diferenciales.bannerTitleHighlight}
              </span>
            </h3>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {t.diferenciales.bannerParagraph}
            </p>
          </div>
        </motion.div>

        {/* Grid de Tarjetas Estilo Bento Moderno (5 Items + 1 CTA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {diferenciales.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-navy-800 p-8 border border-white/10 shadow-xl hover:border-brand-red-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Número de fondo flotante */}
                <span className="absolute top-4 right-6 text-6xl font-black text-white/5 group-hover:text-brand-red-400/15 transition-colors duration-300 select-none">
                  {item.number}
                </span>

                <div>
                  {/* Icono con contenedor estilizado */}
                  <div className="inline-flex items-center justify-center h-14 w-14 rounded-3xl bg-white/5 text-white group-hover:bg-brand-red-600 group-hover:text-white transition-all duration-300 elev-1 mb-6">
                    <Icon size={26} />
                  </div>

                  <h4 className="type-h4 text-white mb-3">{item.title}</h4>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Línea inferior indicadora en hover */}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-brand-red-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}

          {/* Tarjeta CTA Final Integrada en el Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-gradient-to-br from-brand-red-600 to-[#d61f2f] p-8 text-white shadow-xl shadow-brand-red-600/25"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-[10px] font-bold tracking-[0.18em] uppercase mb-4 backdrop-blur-sm">
                {t.diferenciales.ctaBadge}
              </span>
              <h4 className="type-h4 mb-3">{t.diferenciales.ctaTitle}</h4>
            </div>

            <div className="mt-8">
              <a
                href="/contacto"
                className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-white px-6 py-4 text-sm font-bold text-[#07182D] elev-2 transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {t.diferenciales.ctaButton} <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
