import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import NosotrosContenido from "@/componentes/nosotros/NosotrosContenido";
import Diferenciales from "@/componentes/Diferenciales";
import Testimonios from "@/componentes/Testimonios";
import ProyectoCta from "@/componentes/ProyectoCta";
import Footer from "@/componentes/Footer";
import BreadcrumbJsonLd from "@/componentes/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce cómo trabaja DeveloClick: estrategia, diseño y desarrollo en un solo equipo, enfocado en construir productos digitales que generan resultados medibles.",
  alternates: { canonical: "/nosotros" },
};

export default function Nosotros() {
  return (
    <main>
      <BreadcrumbJsonLd name="Nosotros" path="/nosotros" />
      <Navbar />
      <NosotrosContenido />
      <Diferenciales />
      <Testimonios />
      <ProyectoCta />
      <Footer />
    </main>
  );
}
