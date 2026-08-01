import Navbar from "@/componentes/Navbar";
import Hero from "@/componentes/Hero";
import TrustBar from "@/componentes/TrustBar";
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


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <TrustBar />
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
