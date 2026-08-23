import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";
import Navbar from "@/componentes/Navbar";
import Footer from "@/componentes/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe o fue movida.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col pt-20">
      <Navbar />

      <section className="flex flex-1 items-center bg-white py-24 transition-colors duration-300 dark:bg-brand-navy">
        <div className="mx-auto w-full max-w-2xl px-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-red-500/10 text-brand-red-600 dark:text-brand-red-400">
            <Compass size={28} />
          </div>

          <p className="type-eyebrow mt-8 text-brand-red-600 dark:text-brand-red-400">
            Error 404
          </p>

          <h1 className="type-display mt-4 text-brand-navy dark:text-white">
            Esta página no existe.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-lg leading-8 text-slate-600 dark:text-slate-400">
            Puede que el enlace esté roto o que la página se haya movido. Desde
            aquí puedes volver al inicio o contarnos tu proyecto.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red-600 px-7 py-4 text-sm font-bold text-white elev-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c1303b] sm:w-auto"
            >
              <ArrowLeft
                size={16}
                className="transition-transform duration-300 group-hover:-translate-x-0.5"
              />
              Volver al inicio
            </Link>
            <Link
              href="/#cotizador"
              className="inline-flex w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-7 py-4 text-sm font-bold text-brand-navy transition-all duration-300 hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              Cuéntanos tu proyecto
            </Link>
          </div>

          <nav className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
            <Link
              href="/servicios"
              className="hover:text-brand-red-600 dark:hover:text-brand-red-400 transition"
            >
              Servicios
            </Link>
            <Link
              href="/precios"
              className="hover:text-brand-red-600 dark:hover:text-brand-red-400 transition"
            >
              Precios
            </Link>
            <Link
              href="/nosotros"
              className="hover:text-brand-red-600 dark:hover:text-brand-red-400 transition"
            >
              Nosotros
            </Link>
            <Link
              href="/blog"
              className="hover:text-brand-red-600 dark:hover:text-brand-red-400 transition"
            >
              Blog
            </Link>
          </nav>
        </div>
      </section>

      <Footer />
    </main>
  );
}
