import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import ServiciosContenido from "@/componentes/servicios/ServiciosContenido";
import Capacidades from "@/componentes/servicios/Capacidades";
import Carrusel from "@/componentes/Carrusel";
import Tecnologias from "@/componentes/Tecnologias";
import ProyectoCta from "@/componentes/ProyectoCta";
import Footer from "@/componentes/Footer";
import BreadcrumbJsonLd from "@/componentes/ui/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web, software a medida, plataformas SaaS, dashboards, publicidad y automatización de procesos. Un solo equipo para cada etapa del ciclo digital de tu negocio.",
  alternates: { canonical: "/servicios" },
};

export default function Servicios() {
  return (
    <main>
      <BreadcrumbJsonLd name="Servicios" path="/servicios" />
      <Navbar />
      <ServiciosContenido />
      <Capacidades />
      <Carrusel />
      <Tecnologias />
      <ProyectoCta />
      <Footer />
    </main>
  );
}
