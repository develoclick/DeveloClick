"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles, TrendingUp } from "lucide-react";

export default function BlogHero() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-white dark:bg-brand-ink pt-28 pb-24 transition-colors duration-300 lg:pt-36 lg:pb-32">
      {/* Fondo: grid + orbes + blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute -top-24 left-1/4 h-[26rem] w-[26rem] rounded-full bg-brand-red-500/12 blur-[110px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-10 right-1/5 h-[22rem] w-[22rem] rounded-full bg-brand-ink/10 dark:bg-cyan-400/10 blur-[100px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-800 dark:text-slate-200 elev-1 backdrop-blur-md"
        >
          <BookOpen
            size={14}
            className="text-brand-red-600 dark:text-brand-red-400"
          />
          <span>Knowledge Hub DeveloClick</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="type-display mt-7 text-brand-navy dark:text-white"
        >
          Conocimiento que{" "}
          <span className="text-brand-red-600 dark:text-brand-red-400">
            impulsa empresas.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 sm:text-xl"
        >
          Estrategias, innovación, tecnología y casos de éxito para ayudar a las
          empresas a crecer mediante soluciones digitales.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#articulos"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand-red-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-red-600/25 transition-all duration-300 hover:bg-brand-red-700 hover:-translate-y-0.5"
          >
            Explorar artículos
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/15 px-8 py-4 text-sm font-bold text-slate-800 dark:text-white transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10"
          >
            Solicitar asesoría
          </Link>
        </motion.div>

        {/* Floating glass stat cards */}
        <div className="relative mt-16 hidden justify-center gap-6 sm:flex">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.4 },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              },
            }}
            className="flex items-center gap-3 rounded-3xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-brand-navy-800/80 px-5 py-4 elev-3 backdrop-blur-xl"
          >
            <TrendingUp size={20} className="text-emerald-500" />
            <div className="text-left">
              <p className="text-sm font-bold text-brand-navy dark:text-white leading-tight">
                Guías accionables
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                Sin relleno, sin humo
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              y: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              },
            }}
            className="flex items-center gap-3 rounded-3xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-brand-navy-800/80 px-5 py-4 elev-3 backdrop-blur-xl"
          >
            <Sparkles
              size={20}
              className="text-brand-red-600 dark:text-brand-red-400"
            />
            <div className="text-left">
              <p className="text-sm font-bold text-brand-navy dark:text-white leading-tight">
                Casos reales
              </p>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                Análisis original
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
