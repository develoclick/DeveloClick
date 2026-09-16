"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import simbolo from "@/public/imagenes/develoclick_simbolo.png";
import { fotos } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

/**
 * Composición fotográfica del hero.
 *
 * Tres capas a distinta profundidad: cada una se mueve una cantidad diferente
 * con el puntero y con el scroll, lo que produce el efecto parallax. Detrás,
 * el símbolo del logo gira muy despacio como anillo de marca.
 *
 * El puntero se escucha en window y solo escribe motion values (sin estado de
 * React), así que no provoca renders.
 */
export default function HeroCollage() {
  const { t, lang } = useLanguage();

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [mx, my]);

  const { scrollY } = useScroll();
  const scrollBack = useTransform(scrollY, [0, 700], [0, -40]);
  const scrollFront = useTransform(scrollY, [0, 700], [0, -110]);

  const backX = useTransform(sx, (v) => v * -18);
  const backY = useTransform(sy, (v) => v * -18);
  const midX = useTransform(sx, (v) => v * 12);
  const midY = useTransform(sy, (v) => v * 12);
  const frontX = useTransform(sx, (v) => v * 30);
  const frontY = useTransform(sy, (v) => v * 30);

  return (
    <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[34rem]">
      {/* Anillo de marca: el símbolo del logo */}
      <motion.div
        aria-hidden
        className="rm-static pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[118%] -translate-x-1/2 -translate-y-1/2 opacity-[0.07] dark:opacity-[0.12]"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <Image src={simbolo} alt="" sizes="600px" className="h-auto w-full" />
      </motion.div>

      {/* Capa trasera: dashboard */}
      <motion.div
        style={{ x: backX, y: backY }}
        className="rm-static absolute left-0 top-[4%] w-[40%]"
      >
        <motion.div style={{ y: scrollBack }} className="rm-static">
          <Image
            src={fotos.dashboard.src}
            alt={fotos.dashboard.alt[lang]}
            placeholder="blur"
            sizes="(max-width: 1024px) 38vw, 14rem"
            className="aspect-square h-auto w-full rounded-3xl object-cover elev-2"
          />
        </motion.div>
      </motion.div>

      {/* Capa media: foto principal */}
      <motion.div
        style={{ x: midX, y: midY }}
        className="rm-static absolute right-0 top-0 w-[74%]"
      >
        <div className="relative overflow-hidden rounded-[2rem] elev-3">
          <Image
            src={fotos.equipoEstrategia.src}
            alt={fotos.equipoEstrategia.alt[lang]}
            placeholder="blur"
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 1024px) 70vw, 26rem"
            className="aspect-[4/5] h-auto w-full object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-ink/40 via-transparent to-transparent"
          />
        </div>
      </motion.div>

      {/* Capa frontal: web responsive */}
      <motion.div
        style={{ x: frontX, y: frontY }}
        className="rm-static absolute bottom-0 left-[6%] w-[52%]"
      >
        <motion.div style={{ y: scrollFront }} className="rm-static">
          <Image
            src={fotos.webResponsive.src}
            alt={fotos.webResponsive.alt[lang]}
            placeholder="blur"
            sizes="(max-width: 1024px) 50vw, 18rem"
            className="aspect-[4/3] h-auto w-full rounded-3xl border-4 border-white object-cover elev-3 dark:border-brand-ink"
          />
        </motion.div>
      </motion.div>

      {/* Tarjetas flotantes */}
      <motion.div
        className="absolute -left-4 top-[46%] z-20 hidden items-center gap-2 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 elev-3 backdrop-blur-xl dark:border-white/10 dark:bg-brand-navy-800/85 sm:flex"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShieldCheck
          size={18}
          className="shrink-0 text-brand-red-600 dark:text-brand-red-400"
        />
        <div>
          <p className="text-xs font-bold leading-tight text-brand-navy dark:text-white">
            {t.hero.floatingBadge2Title}
          </p>
          <p className="text-[10px] leading-tight text-slate-500 dark:text-slate-400">
            {t.hero.floatingBadge2Text}
          </p>
        </div>
      </motion.div>

      <motion.div
        className="absolute -right-3 bottom-[22%] z-20 hidden items-center gap-2 rounded-2xl border border-white/60 bg-white/85 px-4 py-3 elev-3 backdrop-blur-xl dark:border-white/10 dark:bg-brand-navy-800/85 sm:flex"
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
          className="shrink-0 text-brand-red-600 dark:text-brand-red-400"
        />
        <div>
          <p className="text-xs font-bold leading-tight text-brand-navy dark:text-white">
            {t.hero.floatingBadgeTitle}
          </p>
          <p className="text-[10px] leading-tight text-slate-500 dark:text-slate-400">
            {t.hero.floatingBadgeText}
          </p>
        </div>
      </motion.div>
    </div>
  );
}
