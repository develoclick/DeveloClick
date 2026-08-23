"use client";

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Transición entre rutas.
 *
 * `children` llega como prop desde el layout (Server Component), así que las
 * páginas siguen renderizándose en servidor: este cliente solo envuelve.
 *
 * Solo se animan `opacity` y `transform`, ambas compuestas por GPU, para no
 * provocar reflow ni saltos de maquetación.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  if (reduceMotion) return <>{children}</>;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
