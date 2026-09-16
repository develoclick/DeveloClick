"use client";

import Image from "next/image";
import logoColor from "@/public/imagenes/develoclick_logo_PNG.png";
import logoClaro from "@/public/imagenes/develoclick_logo_light.png";
import { usePage } from "@/componentes/i18n/usePage";
import common from "@/componentes/i18n/pages/common";

type Props = {
  /**
   * `auto`: versión a color en modo claro y versión clara en modo oscuro.
   * `light`: siempre la versión clara, para fondos navy fijos (footer, banners).
   */
  tone?: "auto" | "light";
  className?: string;
  /** Solo el logo del navbar, que está en el primer pantallazo. */
  eager?: boolean;
};

/**
 * Logo de marca.
 *
 * El original tiene "CLICK" y el lema en navy: sobre fondos oscuros esas
 * partes desaparecían. La versión clara cambia el navy por blanco y conserva
 * el rojo de marca. Ambas se renderizan y CSS muestra la que corresponde al
 * tema, así no hay parpadeo ni desajuste de hidratación.
 */
export default function Logo({ tone = "auto", className = "", eager }: Props) {
  const c = usePage(common);
  const loading = eager ? "eager" : "lazy";

  if (tone === "light") {
    return (
      <Image
        src={logoClaro}
        alt={c.logoAlt}
        loading={loading}
        sizes="200px"
        className={`h-auto ${className}`}
      />
    );
  }

  return (
    <>
      <Image
        src={logoColor}
        alt={c.logoAlt}
        loading={loading}
        sizes="200px"
        className={`h-auto dark:hidden ${className}`}
      />
      <Image
        src={logoClaro}
        alt={c.logoAlt}
        loading={loading}
        sizes="200px"
        className={`hidden h-auto dark:block ${className}`}
      />
    </>
  );
}
