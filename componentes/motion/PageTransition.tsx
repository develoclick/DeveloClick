"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

/**
 * Transición entre rutas.
 *
 * `children` llega como prop desde el layout (Server Component), así que las
 * páginas siguen renderizándose en servidor: este cliente solo envuelve.
 *
 * El árbol es siempre el mismo, con o sin movimiento reducido. Ramificar el
 * render con `useReducedMotion` rompía la hidratación: el servidor no conoce
 * la preferencia y React 19 no corrige atributos desajustados, así que la
 * página quedaba con opacity 0. La reducción la aplica `MotionConfig` en
 * AnimatedLayout (desactiva el desplazamiento y conserva un fundido).
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

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
