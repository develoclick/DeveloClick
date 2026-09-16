"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Foto } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

type Props = {
  foto: Foto;
  /** Desplazamiento máximo en % de la altura. 8–14 se lee como profundidad sutil. */
  strength?: number;
  sizes: string;
  className?: string;
  imgClassName?: string;
  /** Solo para la imagen LCP del primer pantallazo. */
  eager?: boolean;
  children?: React.ReactNode;
};

/**
 * Imagen con parallax ligado al scroll.
 *
 * La foto se escala un poco por encima del contenedor para que el
 * desplazamiento vertical nunca deje ver bordes vacíos. Solo se anima
 * `transform`, que el navegador compone en GPU sin recalcular maquetación.
 * Con movimiento reducido la clase `rm-static` congela la capa.
 */
export default function ParallaxImage({
  foto,
  strength = 10,
  sizes,
  className = "",
  imgClassName = "",
  eager = false,
  children,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${strength}%`, `${strength}%`],
  );

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="rm-static absolute inset-0"
        style={{ y, scale: 1 + strength / 45 }}
      >
        <Image
          src={foto.src}
          alt={foto.alt[lang]}
          fill
          sizes={sizes}
          placeholder="blur"
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          className={`object-cover ${imgClassName}`}
        />
      </motion.div>
      {children}
    </div>
  );
}
