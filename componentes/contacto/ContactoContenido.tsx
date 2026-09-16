"use client";

import PageHero from "@/componentes/ui/PageHero";
import Accordion from "@/componentes/ui/Accordion";
import { fotos } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import contacto from "@/componentes/i18n/pages/contacto";

export function ContactoHero() {
  const { t } = useLanguage();
  const c = usePage(contacto);
  const h = t.contactoHeader;
  return (
    <PageHero
      page={t.nav.contacto}
      eyebrow={h.badge}
      title={h.title1}
      highlight={h.titleHighlight}
      subtitle={h.subtitle}
      chips={c.hero.chips}
      foto={fotos.soporte}
      fotoSecundaria={fotos.remoto}
      // El cotizador está en esta misma página: el CTA baja hasta él.
      primaryHref="#cotizador"
      secondary={{ href: "#como-funciona", label: c.hero.secondary }}
    />
  );
}

export function ContactoFaq() {
  const c = usePage(contacto);
  return (
    <Accordion
      eyebrow={c.faq.eyebrow}
      title={c.faq.title}
      items={c.faq.items}
    />
  );
}
