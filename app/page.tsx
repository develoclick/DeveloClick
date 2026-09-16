import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import Hero from "@/componentes/Hero";
import Tecnologias from "@/componentes/Tecnologias";
import ServiciosPreview from "@/componentes/home/ServiciosPreview";
import MarcaGaleria from "@/componentes/home/MarcaGaleria";
import ProcesoPreview from "@/componentes/home/ProcesoPreview";
import NosotrosPreview from "@/componentes/home/NosotrosPreview";
import PreciosPreview from "@/componentes/home/PreciosPreview";
import BlogPreview from "@/componentes/home/BlogPreview";
import ProyectoCta from "@/componentes/ProyectoCta";
import Footer from "@/componentes/Footer";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "DeveloClick — Desarrollo web, software a medida y plataformas SaaS",
  description:
    "Diseñamos y desarrollamos webs, software a medida, dashboards y automatizaciones que convierten visitas en clientes. Cuéntanos tu proyecto y recibe una propuesta en menos de 24 horas.",
  alternates: { canonical: "/" },
};

/**
 * Home: resume cada ruta del navbar y lleva a ella para profundizar.
 * Orden pensado para conversión: promesa → qué hacemos → cómo → quiénes →
 * cuánto cuesta → autoridad (blog) → acción.
 */
export default function Home() {
  const posts = getAllPosts()
    .slice(0, 3)
    .map(
      ({ slug, title, excerpt, cover, coverAlt, category, readingTime }) => ({
        slug,
        title,
        excerpt,
        cover,
        coverAlt,
        category,
        readingTime,
      }),
    );

  return (
    <main>
      <Navbar />
      <Hero />
      <Tecnologias />
      <ServiciosPreview />
      <MarcaGaleria />
      <ProcesoPreview />
      <NosotrosPreview />
      <PreciosPreview />
      <BlogPreview posts={posts} />
      <ProyectoCta />
      <Footer />
    </main>
  );
}
