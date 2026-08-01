import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import PreciosHero from "@/componentes/PreciosHero";
import PreciosPlanes from "@/componentes/PreciosPlanes";
import Faq from "@/componentes/Faq";
import ProyectoCta from "@/componentes/ProyectoCta";
import Footer from "@/componentes/Footer";
import { dictionary } from "@/componentes/i18n/dictionary";

export const metadata: Metadata = {
  title: "Precios",
  description:
    "Planes de desarrollo web, software a medida y plataformas SaaS adaptados al alcance real de tu proyecto. Sin plantillas, sin cuotas ocultas.",
  alternates: { canonical: "/precios" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: dictionary.es.faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Precios() {
  return (
    <main className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <PreciosHero />
      <PreciosPlanes />
      <Faq />
      <ProyectoCta />
      <Footer />
    </main>
  );
}
