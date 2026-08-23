"use client";

import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  animate,
  Variants,
} from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Zap,
  ChevronDown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

/**
 * Contador que cuenta hasta su valor.
 *
 * El valor mostrado vive en estado de React y se actualiza desde `onUpdate`,
 * en lugar de renderizar un MotionValue como hijo. Esa segunda forma depende
 * de que Framer mute el nodo de texto por su cuenta y dejaba el número clavado
 * en 0 con esta combinación de versiones; así el render es explícito.
 *
 * Con movimiento reducido la duración es 0: `onUpdate` dispara una sola vez con
 * el valor final, de modo que el dato se ve igual pero sin animación.
 */
function AnimatedStat({
  value,
  label,
  delay,
}: {
  value: string;
  label: string;
  delay: number;
}) {
  const target = parseFloat(value.replace(/[^\d.]/g, "")) || 0;
  const suffix = value.replace(/[\d.]/g, "");
  const reduceMotion = useReducedMotion();
  const [mostrado, setMostrado] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration: reduceMotion ? 0 : 1.8,
      delay: reduceMotion ? 0 : 0.6 + delay,
      ease: "easeOut",
      onUpdate: (v) => setMostrado(v),
    });
    return () => controls.stop();
  }, [target, delay, reduceMotion]);

  return (
    <div className="flex flex-col items-start">
      <p className="text-2xl sm:text-3xl font-black text-[#07182D] dark:text-white tabular-nums">
        {Math.round(mostrado)}
        {suffix}
      </p>
      <p className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 leading-tight">
        {label}
      </p>
    </div>
  );
}

export default function HeroDeveloclickBusiness() {
  const { t } = useLanguage();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const spotlightBackground = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(230,57,70,0.12), transparent 70%)`,
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative isolate w-full min-h-screen overflow-hidden bg-white dark:bg-[#07182d] text-slate-900 pt-28 pb-20 transition-colors duration-300 lg:pt-36 font-sans"
    >
      {/* Mouse-tracking spotlight */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        style={{ background: spotlightBackground }}
      />

      {/* Fondo animado: orbes de gradiente + grid sutil */}
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
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <motion.div
          className="absolute -top-24 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-red-500/10 dark:bg-brand-red-500/10 blur-[110px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 h-[26rem] w-[26rem] rounded-full bg-[#07182D]/10 dark:bg-cyan-400/10 blur-[110px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full px-6 sm:px-8 lg:px-12 max-w-[85rem] mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid w-full items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Contenido Principal (Izquierda) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Badge de propuesta de valor */}
            <motion.div
              variants={itemVariants}
              className="mb-6 inline-flex items-center gap-2 self-start rounded-full border border-slate-200/90 dark:border-white/10 bg-white/90 dark:bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-800 dark:text-slate-200 elev-1 backdrop-blur-md"
            >
              <Zap
                size={14}
                className="text-brand-red-600 dark:text-brand-red-400 fill-brand-red-600 dark:fill-brand-red-400"
              />
              <span>{t.hero.badge}</span>
            </motion.div>

            {/* Título de alto impacto comercial */}
            <motion.h1
              variants={itemVariants}
              className="type-display text-[#07182D] dark:text-white"
            >
              {t.hero.titleLine1}{" "}
              <span className="text-brand-red-600 dark:text-brand-red-400">
                {t.hero.titleHighlight}
              </span>{" "}
              {t.hero.titleLine2}
            </motion.h1>

            {/* Subtítulo enfocado en aliviar el dolor del cliente (ahorro de tiempo y foco en ventas) */}
            <motion.p
              variants={itemVariants}
              className="mt-6 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed text-slate-600 dark:text-slate-400"
            >
              {t.hero.subtitlePrefix}{" "}
              <strong className="font-bold text-slate-900 dark:text-white">
                DEVELOCLICK
              </strong>{" "}
              {t.hero.subtitle}
            </motion.p>

            {/* Beneficios clave en formato de checks rápidos */}
            <motion.div
              variants={itemVariants}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 dark:text-slate-300 text-sm font-semibold"
            >
              {t.hero.checks.map((check) => (
                <div key={check} className="flex items-center gap-2">
                  <CheckCircle2
                    size={18}
                    className="shrink-0 text-brand-red-600 dark:text-brand-red-400"
                  />
                  <span>{check}</span>
                </div>
              ))}
            </motion.div>

            {/* Llamados a la acción (CTA Primario y Secundario) */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-brand-red-600 px-8 py-4 text-sm sm:text-base font-bold text-white tracking-[0.18em] shadow-lg shadow-brand-red-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c1303b] hover:elev-3 hover:shadow-brand-red-600/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red-600"
              >
                <span>{t.hero.ctaPrimary}</span>
                <ArrowUpRight
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={18}
                />
              </Link>

              <Link
                href="/nosotros"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/15 px-6 py-4 text-sm sm:text-base font-bold text-slate-800 dark:text-white tracking-[0.18em] transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/10 hover:border-slate-300"
              >
                <span>{t.hero.ctaSecondary}</span>
              </Link>
            </motion.div>

            {/* Estadísticas animadas */}
            <motion.div
              variants={itemVariants}
              className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-slate-200 dark:border-white/10 pt-8"
            >
              {t.hero.stats.map((stat, index) => (
                <AnimatedStat
                  key={stat.label}
                  value={stat.value}
                  label={stat.label}
                  delay={index * 0.15}
                />
              ))}
            </motion.div>
          </div>

          {/* Columna Derecha: Imagen que sobresale del contenedor */}
          <div className="lg:col-span-5 flex flex-col justify-center items-center overflow-visible">
            <motion.div
              variants={itemVariants}
              className="relative grid w-full overflow-visible"
            >
              <div className="relative w-full h-full aspect-[4/3] backdrop-blur-md overflow-visible flex items-center justify-center">
                {/* Contenedor que permite que la imagen sobresalga */}
                <div className="relative w-full h-full rounded-xl overflow-visible bg-slate-100/50 dark:bg-white/5">
                  <Image
                    src="/imagenes/diseño.png"
                    alt="Diseño Develoclick Business"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                    className="object-contain object-center scale-125 lg:scale-135 "
                  />
                </div>

                {/* Floating glass cards */}
                <motion.div
                  className="absolute -left-6 top-6 z-20 hidden sm:flex items-center gap-2 rounded-3xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-[#0A192F]/80 px-4 py-3 elev-3 backdrop-blur-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ShieldCheck
                    size={18}
                    className="text-emerald-500 shrink-0"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#07182D] dark:text-white leading-tight">
                      {t.hero.floatingBadge2Title}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                      {t.hero.floatingBadge2Text}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -right-4 bottom-8 z-20 hidden sm:flex items-center gap-2 rounded-3xl border border-white/60 dark:border-white/10 bg-white/80 dark:bg-[#0A192F]/80 px-4 py-3 elev-3 backdrop-blur-xl"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                  }}
                >
                  <Sparkles
                    size={18}
                    className="text-brand-red-600 dark:text-brand-red-400 shrink-0"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#07182D] dark:text-white leading-tight">
                      {t.hero.floatingBadgeTitle}
                    </p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                      {t.hero.floatingBadgeText}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-8 max-w-xs text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500"
            >
              {t.hero.trustLabel}
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden flex-col items-center gap-1.5 lg:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {t.hero.scrollHint}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown
            size={18}
            className="text-slate-400 dark:text-slate-500"
          />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          className="relative block w-full h-24 lg:h-40"
        >
          <path
            fill="#07182D"
            d="M0,96
 C180,180 360,20 540,80
 C720,140 900,180 1080,110
 C1260,40 1350,60 1440,90
 L1440,180
 L0,180
 Z"
          />
        </svg>
      </div>
    </section>
  );
}
