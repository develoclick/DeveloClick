"use client";

import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import Logo from "@/componentes/ui/Logo";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import servicios from "@/componentes/i18n/pages/servicios";

export default function Footer() {
  const { t } = useLanguage();
  const s = usePage(servicios);

  const empresa = [
    { href: "/proceso", label: t.nav.proceso },
    { href: "/nosotros", label: t.nav.nosotros },
    { href: "/precios", label: t.nav.precios },
    { href: "/blog", label: t.nav.blog },
    { href: "/contacto", label: t.nav.contacto },
  ];

  return (
    <footer className="relative overflow-hidden bg-brand-ink text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-brand-red-500/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            {/* Fondo navy fijo: siempre la versión clara del logo */}
            <Link href="/" className="inline-block">
              <Logo tone="light" className="w-52" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h3 className="type-eyebrow text-slate-400">
              {t.footer.servicesHeading}
            </h3>
            <ul className="mt-6 space-y-4">
              {s.servicios.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/servicios#${item.id}`}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="type-eyebrow text-slate-400">
              {t.footer.companyHeading}
            </h3>
            <ul className="mt-6 space-y-4">
              {empresa.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-300 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="type-eyebrow text-slate-400">
              {t.footer.contactHeading}
            </h3>
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <p className="leading-7 text-slate-400">
                {t.footer.contactBlurb}
              </p>
              <a
                href="mailto:develoclick@gmail.com"
                className="flex gap-3 transition hover:text-white"
              >
                <Mail size={18} className="shrink-0 text-brand-red-400" />
                develoclick@gmail.com
              </a>
              <Link
                href="/contacto#cotizador"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-brand-red-600 px-5 py-3 font-display text-sm font-bold text-white transition hover:bg-brand-red-700"
              >
                {t.footer.cta} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="/privacidad" className="transition hover:text-white">
              {t.footer.privacy}
            </Link>
            <Link href="/terminos" className="transition hover:text-white">
              {t.footer.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
