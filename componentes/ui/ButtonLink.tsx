import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  className?: string;
  arrow?: boolean;
};

const variants = {
  primary:
    "bg-brand-red-600 text-white elev-2 hover:bg-brand-red-700 hover:-translate-y-0.5",
  secondary:
    "border border-slate-200 bg-white text-brand-navy hover:border-brand-navy/30 hover:-translate-y-0.5 dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10",
  ghost:
    "text-brand-red-600 hover:text-brand-red-700 dark:text-brand-red-400 dark:hover:text-white px-0",
  light:
    "border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 hover:-translate-y-0.5",
};

/** Botón-enlace de marca. Un solo sitio para estilos de CTA en todo el sitio. */
export default function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: Props) {
  const pad = variant === "ghost" ? "py-2" : "px-7 py-4";
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-xl font-display text-sm font-bold transition-all duration-300 ${pad} ${variants[variant]} ${className}`}
    >
      {children}
      {arrow && (
        <ArrowRight
          size={16}
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
