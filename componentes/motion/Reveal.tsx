"use client";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  /** Distancia inicial en px. */
  y?: number;
  x?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Aparición al entrar en pantalla, una sola vez.
 *
 * Mismo HTML con o sin movimiento reducido (seguro para la hidratación): con
 * la preferencia activa, MotionConfig omite el desplazamiento y solo funde.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 24,
  x = 0,
  className,
  as = "div",
}: Props) {
  const Tag = motion[as];

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}
