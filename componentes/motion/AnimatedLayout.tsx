"use client";

import { MotionConfig } from "framer-motion";
import PageLoader from "@/componentes/motion/PageLoader";
import RouteProgress from "@/componentes/motion/RouteProgress";
import PageTransition from "@/componentes/motion/PageTransition";

/**
 * Punto único de montaje del sistema de movimiento.
 *
 * `children` se recibe como prop, no se importa: eso mantiene todas las páginas
 * como Server Components. Este archivo es el único cliente que envuelve el árbol.
 *
 * `reducedMotion="user"` respeta la preferencia del sistema en TODO el sitio:
 * apaga las animaciones de transform y deja los fundidos, sin cambiar el HTML
 * (seguro para la hidratación). Los transforms ligados a scroll o puntero, que
 * no son animaciones, se congelan con la clase CSS `rm-static`.
 */
export default function AnimatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <RouteProgress />
      <PageLoader />
      <PageTransition>{children}</PageTransition>
    </MotionConfig>
  );
}
