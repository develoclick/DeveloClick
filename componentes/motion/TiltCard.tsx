"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  /** Grados máximos de inclinación. */
  max?: number;
};

/**
 * Tarjeta que se inclina hacia el puntero, con un brillo que lo sigue.
 *
 * Solo responde a ratón: en táctil no hay hover y la inclinación quedaría
 * congelada tras el toque. Con movimiento reducido `rm-static` la deja plana.
 */
export default function TiltCard({ children, className = "", max = 7 }: Props) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 220,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 220,
    damping: 22,
  });
  const glow = useTransform(
    [px, py],
    ([x, y]) =>
      `radial-gradient(420px circle at ${Number(x) * 100}% ${Number(y) * 100}%, rgba(255,255,255,0.14), transparent 60%)`,
  );

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className={`rm-static group/tilt relative ${className}`}
    >
      {children}
      <motion.span
        aria-hidden
        style={{ background: glow }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/tilt:opacity-100"
      />
    </motion.div>
  );
}
