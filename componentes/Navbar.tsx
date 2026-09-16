"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import ThemeToggle from "@/componentes/ThemeToggle";
import LanguageSwitcher from "@/componentes/i18n/LanguageSwitcher";
import Logo from "@/componentes/ui/Logo";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

type NavKey =
  "servicios" | "proceso" | "nosotros" | "precios" | "blog" | "contacto";

/** Seis rutas: cada una profundiza lo que el home resume. El logo lleva al inicio. */
const RUTAS: { href: string; key: NavKey }[] = [
  { href: "/servicios", key: "servicios" },
  { href: "/proceso", key: "proceso" },
  { href: "/nosotros", key: "nosotros" },
  { href: "/precios", key: "precios" },
  { href: "/blog", key: "blog" },
  { href: "/contacto", key: "contacto" },
];

const esActiva = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  // Guarda la ruta en la que se abrió: si la ruta cambia, el menú queda cerrado
  // sin necesidad de sincronizar estado en un efecto.
  const [abiertoEn, setAbiertoEn] = useState<string | null>(null);
  const open = abiertoEn === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape cierra el menú, como se espera de cualquier desplegable.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbiertoEn(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const cerrar = () => setAbiertoEn(null);

  return (
    <nav
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? "border-slate-200 bg-white/90 elev-1 dark:border-white/10 dark:bg-brand-ink/90"
          : "border-transparent bg-white/60 dark:bg-brand-ink/60"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" onClick={cerrar} className="flex items-center">
          <Logo eager className="w-[150px] sm:w-[176px]" />
        </Link>

        {/* Enlaces en línea: desktop */}
        <ul className="hidden items-center gap-1 xl:flex">
          {RUTAS.map(({ href, key }) => {
            const activa = esActiva(pathname, href);
            return (
              <li key={href} className="relative">
                <Link
                  href={href}
                  aria-current={activa ? "page" : undefined}
                  className={`relative block rounded-xl px-3 py-2 text-sm font-semibold transition-colors 2xl:px-4 ${
                    activa
                      ? "text-brand-navy dark:text-white"
                      : "text-slate-600 hover:text-brand-red-600 dark:text-slate-300 dark:hover:text-brand-red-400"
                  }`}
                >
                  {t.nav[key]}
                  {activa && (
                    <motion.span
                      layoutId="nav-activa"
                      aria-hidden
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-red-600 dark:bg-brand-red-400"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/contacto#cotizador"
            className="group inline-flex items-center gap-2 rounded-xl bg-brand-red-600 px-5 py-3 font-display text-sm font-bold text-white elev-2 transition hover:bg-brand-red-700"
          >
            {t.nav.cotizar}
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <button
          type="button"
          className="text-brand-navy dark:text-slate-200 xl:hidden"
          onClick={() => setAbiertoEn(open ? null : pathname)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
          aria-controls="menu-movil"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Menú móvil y tablet */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-movil"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="max-h-[calc(100dvh-5rem)] overflow-y-auto border-t border-slate-200 bg-white px-6 pb-8 pt-2 dark:border-white/10 dark:bg-brand-ink xl:hidden"
          >
            <ul className="flex flex-col">
              {RUTAS.map(({ href, key }, i) => {
                const activa = esActiva(pathname, href);
                return (
                  <motion.li
                    key={href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.25 }}
                  >
                    <Link
                      href={href}
                      onClick={cerrar}
                      aria-current={activa ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-slate-100 py-4 font-display text-lg font-bold dark:border-white/5 ${
                        activa
                          ? "text-brand-red-600 dark:text-brand-red-400"
                          : "text-brand-navy dark:text-white"
                      }`}
                    >
                      {t.nav[key]}
                      <ArrowRight size={18} className="opacity-40" />
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
            <Link
              href="/contacto#cotizador"
              onClick={cerrar}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-brand-red-600 px-6 py-4 font-display text-sm font-bold text-white elev-2 transition hover:bg-brand-red-700"
            >
              {t.nav.cotizar}
              <ArrowRight size={16} />
            </Link>
            <div className="mt-5 flex items-center justify-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
