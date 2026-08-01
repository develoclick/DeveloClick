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
        scrolled ? "border-gray-200 dark:border-white/10 shadow-sm" : "border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/imagenes/develoclick_logo_PNG.png"
            alt="DeveloClick"
            width={200}
            height={40}
            className="object-contain"
            priority
          />
        </Link>

        {/* BOTON MOBILE */}
        <button className="md:hidden text-gray-700 dark:text-slate-200" onClick={() => setOpen(!open)} aria-label={open ? t.nav.closeMenu : t.nav.openMenu}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* MENU */}
        <div className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white dark:bg-[#07182d] md:bg-transparent md:flex items-center gap-2 ${open ? "flex flex-col p-6" : "hidden"} md:flex`}>
          <NavItem href="/">{t.nav.inicio}</NavItem>
          <NavItem href="/servicios">{t.nav.servicios}</NavItem>
          <NavItem href="/nosotros">{t.nav.nosotros}</NavItem>
          <NavItem href="/precios">{t.nav.precios}</NavItem>
          <NavItem href="/contacto">{t.nav.contacto}</NavItem>
          <NavItem href="/blog">{t.nav.blog}</NavItem>
          <div className="mt-4 flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Link href="/#cotizador" className="bg-[#E63946] text-white px-6 py-3 rounded-xl font-display font-bold text-sm shadow-lg shadow-red-500/20 hover:bg-red-700 transition">
            {t.nav.cotizar}
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="text-sm text-gray-600 dark:text-slate-300 px-4 py-2 rounded-xl transition hover:text-[#E63946] hover:bg-red-50 dark:hover:bg-white/5">
      {children}
    </Link>
  );
}
