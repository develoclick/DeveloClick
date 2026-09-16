import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import {
  ContactoHero,
  ContactoFaq,
} from "@/componentes/contacto/ContactoContenido";
import ContactoSection from "@/componentes/ContactoSection";
import Cotizador from "@/componentes/Cotizador";
import Footer from "@/componentes/Footer";
import BreadcrumbJsonLd from "@/componentes/ui/BreadcrumbJsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos tu proyecto en 2 minutos y recibe una propuesta con alcance, tiempos y costo estimado. Respondemos en menos de 24 horas hábiles.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contacto`,
    title: "Contacto | DeveloClick",
    description:
      "Cuéntanos tu proyecto en 2 minutos y recibe una propuesta con alcance, tiempos y costo estimado.",
  },
};

/** Canal único de contacto: el Cotizador. */
export default function Contacto() {
  return (
    <main>
      <BreadcrumbJsonLd name="Contacto" path="/contacto" />
      <Navbar />
      <ContactoHero />
      <ContactoSection />
      <Cotizador />
      <ContactoFaq />
      <Footer />
    </main>
  );
}
