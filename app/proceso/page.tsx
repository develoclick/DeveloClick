import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import ProcesoContenido from "@/componentes/proceso/ProcesoContenido";
import ProyectoCta from "@/componentes/ProyectoCta";
import Footer from "@/componentes/Footer";
import BreadcrumbJsonLd from "@/componentes/ui/BreadcrumbJsonLd";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Proceso",
  description:
    "Cómo trabajamos: seis fases —descubrimiento, estrategia, diseño, desarrollo, lanzamiento y optimización— con un entregable concreto al final de cada una.",
  alternates: { canonical: "/proceso" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/proceso`,
    title: "Proceso | DeveloClick",
    description:
      "Seis fases con un entregable concreto al final de cada una. Siempre sabes dónde está tu proyecto.",
  },
};

export default function Proceso() {
  return (
    <main>
      <BreadcrumbJsonLd name="Proceso" path="/proceso" />
      <Navbar />
      <ProcesoContenido />
      <ProyectoCta />
      <Footer />
    </main>
  );
}
