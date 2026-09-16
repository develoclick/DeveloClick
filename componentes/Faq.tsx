"use client";

import Accordion from "@/componentes/ui/Accordion";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

/** FAQ de precios. Los textos también alimentan el JSON-LD FAQPage de /precios. */
export default function Faq() {
  const { t } = useLanguage();
  return (
    <Accordion
      eyebrow={t.faq.eyebrow}
      title={t.faq.title}
      items={t.faq.items.map((i) => ({ q: i.question, a: i.answer }))}
    />
  );
}
