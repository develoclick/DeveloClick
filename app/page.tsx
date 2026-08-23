import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import Hero from "@/componentes/Hero";
import Carrusel from "@/componentes/Carrusel";
import Tecnologias from "@/componentes/Tecnologias";
import ServiciosDestacados from "@/componentes/ServiciosDestacados";
import ServiciosGrid from "@/componentes/ServiciosGrid";
import Diferenciales from "@/componentes/Diferenciales";
import Testimonios from "@/componentes/Testimonios";
import Proceso from "@/componentes/Proceso";
import Cotizador from "@/componentes/Cotizador";
import ProyectoCta from "@/componentes/ProyectoCta";
import Footer from "@/componentes/Footer";

export const metadata: Metadata = {
  title: "DeveloClick — Desarrollo web, software a medida y plataformas SaaS",
  description:
    "Diseñamos y desarrollamos webs, software a medida, dashboards y automatizaciones que convierten visitas en clientes. Cuéntanos tu proyecto y recibe una propuesta en menos de 24 horas.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tecnologias />
      <ServiciosDestacados />
      <Carrusel />
      <ServiciosGrid />
      <Diferenciales />
      <Testimonios />
      <Proceso />
      <Cotizador />
      <ProyectoCta />
      <Footer />
    </div>
  );
}
