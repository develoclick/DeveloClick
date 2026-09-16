"use client";

import Image from "next/image";
import { BarChart3, LifeBuoy, Video } from "lucide-react";
import PageHero from "@/componentes/ui/PageHero";
import SectionHeading from "@/componentes/ui/SectionHeading";
import Accordion from "@/componentes/ui/Accordion";
import TiltCard from "@/componentes/motion/TiltCard";
import Reveal from "@/componentes/motion/Reveal";
import Timeline from "@/componentes/proceso/Timeline";
import Comparativa from "@/componentes/proceso/Comparativa";
import { fotos } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import proceso from "@/componentes/i18n/pages/proceso";

const principiosMeta = [
  { icon: Video, foto: fotos.remoto },
  { icon: BarChart3, foto: fotos.testingAb },
  { icon: LifeBuoy, foto: fotos.soporte },
];

export default function ProcesoContenido() {
  const { t, lang } = useLanguage();
  const p = usePage(proceso);

  return (
    <>
      <PageHero
        page={t.nav.proceso}
        eyebrow={p.hero.eyebrow}
        title={p.hero.title}
        highlight={p.hero.highlight}
        subtitle={p.hero.subtitle}
        chips={p.hero.chips}
        foto={fotos.estrategiaCrecimiento}
        fotoSecundaria={fotos.wireframes}
        secondary={{ href: "#fases", label: p.hero.secondary }}
      />

      <Timeline />

      {/* Cómo trabajamos durante el proyecto */}
      <section className="bg-brand-ink py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow={p.principios.eyebrow}
            title={p.principios.title}
            highlight={p.principios.highlight}
            tone="dark"
          />
          <ul className="mt-14 grid gap-6 md:grid-cols-3">
            {p.principios.items.map((item, i) => {
              const { icon: Icon, foto } = principiosMeta[i];
              return (
                <Reveal as="li" key={item.title} delay={i * 0.08}>
                  <TiltCard className="h-full rounded-3xl">
                    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
                      <div className="relative aspect-[16/10] overflow-hidden">
                        <Image
                          src={foto.src}
                          alt={foto.alt[lang]}
                          fill
                          placeholder="blur"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                        <span className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-red-600 text-white">
                          <Icon size={20} />
                        </span>
                      </div>
                      <div className="p-7">
                        <h3 className="type-h4 text-white">{item.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          {item.text}
                        </p>
                      </div>
                    </article>
                  </TiltCard>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <Comparativa />

      <Accordion
        eyebrow={p.faq.eyebrow}
        title={p.faq.title}
        items={p.faq.items}
      />
    </>
  );
}
