"use client";

import { CheckCircle2 } from "lucide-react";
import ParallaxImage from "@/componentes/motion/Parallax";
import Reveal from "@/componentes/motion/Reveal";
import ButtonLink from "@/componentes/ui/ButtonLink";
import { fotos } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import home from "@/componentes/i18n/pages/home";

/** Resumen de Nosotros: historia en una línea, tres principios y enlace. */
export default function NosotrosPreview() {
  const { t } = useLanguage();
  const h = usePage(home).nosotros;
  const n = t.nosotrosHero;

  return (
    <section className="relative overflow-hidden bg-brand-ink py-24 text-white lg:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-brand-red-500/10 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:gap-20">
        <div className="relative">
          <ParallaxImage
            foto={fotos.descubrimiento}
            strength={12}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[4/5] rounded-[2rem] elev-3"
          />
          <ParallaxImage
            foto={fotos.soporte}
            strength={16}
            sizes="(max-width: 1024px) 45vw, 22vw"
            className="absolute -bottom-10 -right-4 hidden aspect-square w-[45%] rounded-3xl border-4 border-brand-ink elev-3 sm:block lg:-right-10"
          />
        </div>

        <Reveal>
          <p className="type-eyebrow flex items-center gap-3 text-brand-red-400">
            <span aria-hidden className="h-px w-8 bg-current" />
            {h.eyebrow}
          </p>
          <h2 className="type-h2 mt-5 text-white">{n.bannerTitle}</h2>
          <p className="type-body-lg mt-5 text-slate-300">
            {n.bannerParagraph}
          </p>

          <ul className="mt-10 space-y-5">
            {t.nosotrosValores.valores.slice(0, 3).map((v) => (
              <li key={v.title} className="flex gap-4">
                <CheckCircle2
                  size={22}
                  className="mt-0.5 shrink-0 text-brand-red-400"
                />
                <div>
                  <p className="font-display text-base font-bold text-white">
                    {v.title}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {v.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <ButtonLink href="/nosotros" variant="light" className="mt-10">
            {h.link}
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
