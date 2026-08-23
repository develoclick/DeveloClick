import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import LegalPage from "@/componentes/LegalPage";
import Footer from "@/componentes/Footer";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Cómo DeveloClick recopila, usa y protege tu información personal.",
  alternates: { canonical: "/privacidad" },
  robots: { index: false, follow: true },
};

export default function Privacidad() {
  return (
    <main className="pt-20">
      <Navbar />
      <LegalPage variant="privacy" />
      <Footer />
    </main>
  );
}
