"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import ThemeToggle from "@/componentes/ThemeToggle";
import LanguageSwitcher from "@/componentes/i18n/LanguageSwitcher";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white/90 dark:bg-[#07182d]/90 backdrop-blur-xl border-b transition-shadow duration-300 ${
        scrolled
          ? "border-gray-200 dark:border-white/10 elev-1"
          : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/imagenes/develoclick_logo_PNG.png"
            alt="DeveloClick"
            // El archivo mide 905x276 (ratio 3.279). Declarar 200x40 (ratio 5)
            // no coincidía con el original y Next avisaba de la deformación.
            width={200}
            height={61}
            className="h-auto w-[150px] object-contain sm:w-[200px]"
            priority
          />
        </Link>

        {/* BOTON MOBILE / TABLET */}
        <button
          className="lg:hidden text-gray-700 dark:text-slate-200"
          onClick={() => setOpen(!open)}
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* MENU COLAPSABLE (móvil + tablet) / EN LÍNEA (desktop) */}
        <div
          className={`absolute lg:static top-20 left-0 w-full lg:w-auto bg-white dark:bg-[#07182d] lg:bg-transparent items-center gap-1 border-b border-gray-200 dark:border-white/10 lg:border-0 ${open ? "flex flex-col p-6" : "hidden"} lg:flex`}
        >
          <NavItem href="/">{t.nav.inicio}</NavItem>
          <NavItem href="/servicios">{t.nav.servicios}</NavItem>
          <NavItem href="/nosotros">{t.nav.nosotros}</NavItem>
          <NavItem href="/precios">{t.nav.precios}</NavItem>
          <NavItem href="/contacto">{t.nav.contacto}</NavItem>
          <NavItem href="/blog">{t.nav.blog}</NavItem>

          {/* Paridad móvil: el CTA y los controles también existen aquí */}
          <div className="mt-6 flex w-full flex-col items-stretch gap-4 lg:hidden">
            <Link
              href="/#cotizador"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-brand-red-600 px-6 py-4 text-center font-display text-sm font-bold text-white elev-2 transition hover:bg-[#c1303b]"
            >
              {t.nav.cotizar}
            </Link>
            <div className="flex items-center justify-center gap-3">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        {/* ACTIONS (solo desktop, donde sí hay espacio) */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link
            href="/#cotizador"
            className="rounded-xl bg-brand-red-600 px-6 py-3 font-display text-sm font-bold text-white elev-2 transition hover:bg-[#c1303b]"
          >
            {t.nav.cotizar}
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-gray-600 dark:text-slate-300 px-4 py-2 rounded-xl transition hover:text-brand-red-600 dark:hover:text-brand-red-400 hover:bg-red-50 dark:hover:bg-white/5"
    >
      {children}
    </Link>
  );
}
