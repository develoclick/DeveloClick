"use client";

import PageHero from "@/componentes/ui/PageHero";
import ServiciosNav from "@/componentes/servicios/ServiciosNav";
import ServicioBloque from "@/componentes/servicios/ServicioBloque";
import { fotos } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import servicios from "@/componentes/i18n/pages/servicios";

/** Cabecera + navegación fija + los 6 bloques de servicio. */
export default function ServiciosContenido() {
  const { t } = useLanguage();
  const s = usePage(servicios);

  return (
    <>
      <PageHero
        page={t.nav.servicios}
        eyebrow={s.hero.eyebrow}
        title={s.hero.title}
        highlight={s.hero.highlight}
        subtitle={s.hero.subtitle}
        chips={s.hero.chips}
        foto={fotos.programacion}
        fotoSecundaria={fotos.disenoUx}
        secondary={{ href: "#web", label: s.hero.secondary }}
      />
      <ServiciosNav />
      {s.servicios.map((servicio, i) => (
        <ServicioBloque key={servicio.id} servicio={servicio} index={i} />
      ))}
    </>
  );
}
