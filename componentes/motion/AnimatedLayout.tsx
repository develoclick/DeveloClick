"use client";

import PageLoader from "@/componentes/motion/PageLoader";
import RouteProgress from "@/componentes/motion/RouteProgress";
import PageTransition from "@/componentes/motion/PageTransition";

/**
 * Punto único de montaje del sistema de movimiento.
 *
 * `children` se recibe como prop, no se importa: eso mantiene todas las páginas
 * como Server Components. Este archivo es el único cliente que envuelve el árbol.
 */
export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <RouteProgress />
      <PageLoader />
      <PageTransition>{children}</PageTransition>
    </>
  );
}
