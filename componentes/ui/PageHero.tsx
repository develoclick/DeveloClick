"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Check, ChevronRight } from "lucide-react";
import ParallaxImage from "@/componentes/motion/Parallax";
import ButtonLink from "@/componentes/ui/ButtonLink";
import simbolo from "@/public/imagenes/develoclick_simbolo.png";
import simboloClaro from "@/public/imagenes/develoclick_simbolo_light.png";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import common from "@/componentes/i18n/pages/common";
import type { Foto } from "@/lib/images";

type Props = {
  page: string;
  eyebrow: string;
  title: string;
  highlight: string;
  subtitle: string;
  chips: string[];
  foto: Foto;
  fotoSecundaria: Foto;
  secondary: { href: string; label: string };
  /** En /contacto el cotizador está en la misma página. */
  primaryHref?: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Cabecera de las rutas internas.
 *
 * Dos niveles de profundidad: la foto principal se desplaza con el scroll y
 * la composición entera sigue suavemente al puntero. Todo son transforms.
 */
export default function PageHero({
  page,
  eyebrow,
  title,
  highlight,
  subtitle,
  chips,
  foto,
  fotoSecundaria,
  secondary,
  primaryHref = "/contacto#cotizador",
}: Props) {
  const c = usePage(common);
  const { lang } = useLanguage();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const backX = useTransform(sx, (v) => v * -14);
  const backY = useTransform(sy, (v) => v * -14);
  const frontX = useTransform(sx, (v) => v * 22);
  const frontY = useTransform(sy, (v) => v * 22);

  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  const appear = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  });

  return (
    <section
      onPointerMove={onMove}
      className="relative isolate overflow-hidden bg-white pb-20 pt-32 transition-colors duration-300 dark:bg-brand-ink lg:pb-28 lg:pt-40"
    >
      {/* Retícula y resplandor de marca */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-50 dark:opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#e5e7eb 1px, transparent 1px), linear-gradient(90deg, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 30% 20%, black 30%, transparent 75%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand-red-500/10 blur-[120px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <motion.nav aria-label={c.breadcrumb} {...appear(0)}>
            <ol className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-brand-red-600 dark:hover:text-brand-red-400"
                >
                  {c.home}
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight size={13} />
              </li>
              <li
                aria-current="page"
                className="text-brand-navy dark:text-white"
              >
                {page}
              </li>
            </ol>
          </motion.nav>

          <motion.p
            {...appear(0.08)}
            className="type-eyebrow mt-8 flex items-center gap-3 text-brand-red-600 dark:text-brand-red-400"
          >
            <span aria-hidden className="h-px w-8 bg-current" />
            {eyebrow}
          </motion.p>

          <motion.h1
            {...appear(0.16)}
            className="type-display mt-5 text-brand-navy dark:text-white"
          >
            {title}{" "}
            <span className="text-brand-red-600 dark:text-brand-red-400">
              {highlight}
            </span>
          </motion.h1>

          <motion.p
            {...appear(0.24)}
            className="type-body-lg mt-6 max-w-xl text-slate-600 dark:text-slate-400"
          >
            {subtitle}
          </motion.p>

          <motion.ul {...appear(0.32)} className="mt-8 flex flex-wrap gap-2.5">
            {chips.map((chip) => (
              <li
                key={chip}
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                <Check
                  size={13}
                  className="text-brand-red-600 dark:text-brand-red-400"
                />
                {chip}
              </li>
            ))}
          </motion.ul>

          <motion.div
            {...appear(0.4)}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href={primaryHref}>{c.quote}</ButtonLink>
            <ButtonLink href={secondary.href} variant="secondary" arrow={false}>
              {secondary.label}
            </ButtonLink>
          </motion.div>
        </div>

        {/* Composición fotográfica */}
        <motion.div
          className="relative lg:col-span-6"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
        >
          <motion.div
            style={{ x: backX, y: backY }}
            className="rm-static relative ml-auto w-[88%]"
          >
            <ParallaxImage
              foto={foto}
              eager
              strength={8}
              sizes="(max-width: 1024px) 88vw, 44vw"
              className="aspect-[4/5] rounded-[2rem] elev-3 sm:aspect-[5/4] lg:aspect-[4/5]"
            >
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-transparent"
              />
            </ParallaxImage>
          </motion.div>

          <motion.div
            style={{ x: frontX, y: frontY }}
            className="rm-static absolute -bottom-8 left-0 w-[46%] overflow-hidden rounded-3xl border-4 border-white elev-3 dark:border-brand-ink"
          >
            <Image
              src={fotoSecundaria.src}
              alt={fotoSecundaria.alt[lang]}
              placeholder="blur"
              sizes="(max-width: 1024px) 40vw, 20vw"
              className="aspect-square h-auto w-full object-cover"
            />
          </motion.div>

          {/* Sello de marca flotante */}
          <motion.div
            style={{ x: frontX, y: backY }}
            className="rm-static absolute -top-5 left-[8%] flex items-center gap-3 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 elev-2 backdrop-blur-xl dark:border-white/10 dark:bg-brand-navy-800/85"
          >
            <Image src={simbolo} alt="" className="h-9 w-9 dark:hidden" />
            <Image
              src={simboloClaro}
              alt=""
              className="hidden h-9 w-9 dark:block"
            />
            <p className="max-w-[11rem] text-[11px] font-semibold leading-snug text-slate-600 dark:text-slate-300">
              {c.noCommitment}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
