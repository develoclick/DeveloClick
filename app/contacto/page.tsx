import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import ContactoHeader from "@/componentes/ContactoHeader";
import ContactoSection from "@/componentes/ContactoSection";
import Cotizador from "@/componentes/Cotizador";
import Footer from "@/componentes/Footer";
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

export default function Contacto() {
  return (
    <main className="pt-20">
      <Navbar />
      <ContactoHeader />
      {/* Bloque de confianza (cómo funciona) seguido del canal único de contacto */}
      <ContactoSection />
      <Cotizador />
      <Footer />
    </main>
  );
}
