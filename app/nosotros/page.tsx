import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import NosotrosHero from "@/componentes/NosotrosHero";
import NosotrosValores from "@/componentes/NosotrosValores";
import Testimonios from "@/componentes/Testimonios";
import ProyectoCta from "@/componentes/ProyectoCta";
import Footer from "@/componentes/Footer";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce al equipo detrás de DeveloClick: estrategas, diseñadores y desarrolladores enfocados en construir productos digitales que generan resultados medibles.",
  alternates: { canonical: "/nosotros" },
};

export default function Nosotros() {
  return (
    <main className="pt-20">
      <Navbar />
      <NosotrosHero />
      <NosotrosValores />
      <Testimonios />
      <ProyectoCta />
      <Footer />
    </main>
  );
}
