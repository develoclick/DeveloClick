import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import ServiciosHero from "@/componentes/ServiciosHero";
import ServiciosDetalle from "@/componentes/ServiciosDetalle";
import Proceso from "@/componentes/Proceso";
import ProyectoCta from "@/componentes/ProyectoCta";
import Footer from "@/componentes/Footer";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Desarrollo web, software a medida, plataformas SaaS, dashboards y automatización de procesos. Un solo equipo para cada etapa del ciclo digital de tu negocio.",
  alternates: { canonical: "/servicios" },
};

export default function Servicios() {
  return (
    <main className="pt-20">
      <Navbar />
      <ServiciosHero />
      <ServiciosDetalle />
      <Proceso />
      <ProyectoCta />
      <Footer />
    </main>
  );
}
