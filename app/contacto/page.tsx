import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import ContactoHeader from "@/componentes/ContactoHeader";
import ContactoSection from "@/componentes/ContactoSection";
import Footer from "@/componentes/Footer";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Hablemos de tu proyecto. Escríbenos y recibe una respuesta de nuestro equipo en menos de 24 horas hábiles.",
  alternates: { canonical: "/contacto" },
};

export default function Contacto() {
  return (
    <main className="pt-20">
      <Navbar />
      <ContactoHeader />
      <ContactoSection />
      <Footer />
    </main>
  );
}
