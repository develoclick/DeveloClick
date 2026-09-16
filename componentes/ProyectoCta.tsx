"use client";

import { Check } from "lucide-react";
import ParallaxImage from "@/componentes/motion/Parallax";
import Reveal from "@/componentes/motion/Reveal";
import ButtonLink from "@/componentes/ui/ButtonLink";
import Logo from "@/componentes/ui/Logo";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { fotos } from "@/lib/images";

/**
 * Cierre de conversión de cada ruta.
 *
 * Foto a sangre con parallax y velo navy para que el texto conserve contraste
 * AA sobre cualquier zona de la imagen. Un único CTA principal (el cotizador)
 * y uno secundario de menor peso hacia precios.
 */
export default function ProyectoCta() {
  const { t } = useLanguage();
  const p = t.proyectoCta;

  return (
    <section className="bg-white px-4 py-16 transition-colors duration-300 dark:bg-brand-ink sm:px-6 lg:py-24">
      <ParallaxImage
        foto={fotos.crecimiento}
        strength={12}
        sizes="(max-width: 1280px) 100vw, 1280px"
        className="mx-auto max-w-7xl rounded-[2rem] elev-3"
      >
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(100deg,rgba(10,21,38,0.96)_0%,rgba(10,21,38,0.86)_48%,rgba(10,21,38,0.35)_100%)]"
        />
        <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24">
          <Reveal className="max-w-2xl">
            <Logo tone="light" className="w-40 opacity-90" />
            <p className="type-eyebrow mt-10 flex items-center gap-3 text-brand-red-400">
              <span aria-hidden className="h-px w-8 bg-current" />
              {p.badge}
            </p>
            <h2 className="type-h2 mt-5 text-white">
              {p.title1}{" "}
              <span className="text-brand-red-400">{p.titleHighlight}</span>
            </h2>
            <p className="type-body-lg mt-5 max-w-xl text-slate-300">
              {p.paragraph}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contacto#cotizador">{p.ctaPrimary}</ButtonLink>
              <ButtonLink href="/precios" variant="light" arrow={false}>
                {p.ctaSecondary}
              </ButtonLink>
            </div>

            <ul className="mt-12 grid gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
              {p.trust.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-300"
                >
                  <Check size={15} className="shrink-0 text-brand-red-400" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </ParallaxImage>
    </section>
  );
}
