"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Calendar, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const trustIcons = [ShieldCheck, Zap, Sparkles];

export default function ProyectoCta() {
  const { t } = useLanguage();
  return (
    <section className="relative bg-white px-6 py-24 dark:bg-[#07182d] lg:py-32 overflow-hidden">
      {/* Resplandor de fondo ambiental sofisticado */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-brand-red-500/15 via-indigo-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-[#0A192F] p-8 sm:p-14 lg:p-20 text-center text-white shadow-2xl shadow-black/40 border border-white/10 backdrop-blur-2xl"
        >
          {/* Malla de iluminación sofisticada */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(230,57,70,0.35),transparent_40%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.25),transparent_40%)] pointer-events-none" />

          {/* Patrón de líneas sutiles de fondo (estilo tech grid) */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Badge superior con icono */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 elev-1 mb-6 backdrop-blur-md">
              <Sparkles size={14} className="text-brand-red-400" />
              <span className="text-[11px] font-extrabold tracking-[0.18em] text-brand-red-400 uppercase">
                {t.proyectoCta.badge}
              </span>
            </div>

            {/* Título principal con tipografía moderna */}
            <h2 className="type-h2 mt-4 text-[#ffffff]">
              {t.proyectoCta.title1} <br />
              <span className="text-brand-red-400">
                {t.proyectoCta.titleHighlight}
              </span>
            </h2>

            {/* Descripción */}
            <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-slate-300 font-normal">
              {t.proyectoCta.paragraph}
            </p>

            {/* Botones de acción principales */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#cotizador"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-3xl bg-brand-red-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-red-600/25 transition-all hover:bg-[#cf2e3b] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>{t.proyectoCta.ctaPrimary}</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contacto"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-3xl bg-white/10 hover:bg-white/15 border border-white/15 px-8 py-4 text-sm font-bold text-white elev-2 backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar size={16} className="text-[#ff5863]" />
                <span>{t.proyectoCta.ctaSecondary}</span>
              </Link>
            </div>

            {/* Micro-features de confianza inferiores */}
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {t.proyectoCta.trust.map((item, index) => {
                const Icon = trustIcons[index];
                return (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400"
                  >
                    <Icon size={16} className="text-brand-red-400" />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
