import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import LegalPage from "@/componentes/LegalPage";
import Footer from "@/componentes/Footer";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de los servicios de DeveloClick.",
  alternates: { canonical: "/terminos" },
  robots: { index: false, follow: true },
};

export default function Terminos() {
  return (
    <main className="pt-20">
      <Navbar />
      <LegalPage variant="terms" />
      <Footer />
    </main>
  );
}
