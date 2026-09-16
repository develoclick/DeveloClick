"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import simboloClaro from "@/public/imagenes/develoclick_simbolo_light.png";
import { fotos, type Foto } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const columnas: Foto[][] = [
  [fotos.programacion, fotos.cloud, fotos.remoto],
  [fotos.integraciones, fotos.estrategiaCrecimiento, fotos.ciberseguridad],
  [fotos.conectividad, fotos.devops, fotos.colaborativo],
];

function Columna({
  items,
  y,
  className = "",
}: {
  items: Foto[];
  y: MotionValue<number>;
  className?: string;
}) {
  const { lang } = useLanguage();
  return (
    <motion.div
      style={{ y }}
      className={`rm-static flex flex-col gap-4 ${className}`}
    >
      {items.map((foto) => (
        <div key={foto.alt.es} className="overflow-hidden rounded-3xl">
          <Image
            src={foto.src}
            alt={foto.alt[lang]}
            placeholder="blur"
            sizes="(max-width: 768px) 50vw, 30vw"
            className="aspect-[4/5] h-auto w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );
}

/**
 * Galería de marca: tres columnas de fotos que se desplazan a velocidades
 * distintas con el scroll, con el lema del logo en primer plano.
 */
export default function MarcaGaleria() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lenta = useTransform(scrollYProgress, [0, 1], [60, -120]);
  const rapida = useTransform(scrollYProgress, [0, 1], [180, -300]);

  return (
    <section
      ref={ref}
      aria-label="Code, design & beyond"
      className="relative h-[42rem] overflow-hidden bg-brand-ink sm:h-[48rem]"
    >
      <div className="absolute inset-x-0 -top-24 mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 opacity-60 md:grid-cols-3">
        <Columna items={columnas[0]} y={lenta} />
        <Columna items={columnas[1]} y={rapida} className="mt-24" />
        <Columna items={columnas[2]} y={lenta} className="hidden md:flex" />
      </div>

      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,21,38,0.55)_0%,rgba(10,21,38,0.92)_65%)]"
      />

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        {/* Solo el símbolo: el lema ya va en grande debajo, no se repite */}
        <Image
          src={simboloClaro}
          alt=""
          sizes="112px"
          className="h-24 w-24 sm:h-28 sm:w-28"
        />
        <p className="font-brand mt-8 max-w-3xl text-2xl font-bold uppercase leading-tight tracking-[0.12em] text-white sm:text-4xl">
          Code, design <span className="text-brand-red-400">&amp;</span> beyond
        </p>
      </div>
    </section>
  );
}
