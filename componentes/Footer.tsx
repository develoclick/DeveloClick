"use client";

import Link from "next/link";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const serviceHrefs = ["/servicios", "/servicios", "/servicios", "/servicios", "/servicios"];
const companyHrefs = ["/nosotros", "/servicios", "/precios", "/contacto"];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="relative overflow-hidden bg-[#07182d] text-white">
      {/* glow background */}
      <div className="absolute top-0 left-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#E63946]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E63946] font-bold text-xl">D</div>
              <span className="text-xl font-bold tracking-tight">DeveloClick</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              {t.footer.description}
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] text-slate-400">{t.footer.servicesHeading.toUpperCase()}</h3>
            <ul className="mt-6 space-y-4">
              {t.footer.services.map((item, index) => (
                <li key={item}>
                  <Link href={serviceHrefs[index]} className="text-sm text-slate-300 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] text-slate-400">{t.footer.companyHeading.toUpperCase()}</h3>
            <ul className="mt-6 space-y-4">
              {t.footer.company.map((item, index) => (
                <li key={item}>
                  <Link href={companyHrefs[index]} className="text-sm text-slate-300 hover:text-white transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] text-slate-400">{t.footer.contactHeading.toUpperCase()}</h3>
            <div className="mt-6 space-y-5 text-sm text-slate-300">
              <p className="flex gap-3">
                <MapPin size={18} className="text-[#E63946]" /> {t.footer.location}
              </p>
              <p className="flex gap-3">
                <Mail size={18} className="text-[#E63946]" /> hola@develoclick.com
              </p>
              <p className="flex gap-3">
                <Phone size={18} className="text-[#E63946]" /> +51 912 345 678
              </p>
              <Link
                href="/#cotizador"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#E63946] px-5 py-3 text-sm font-display font-bold hover:bg-red-700 transition"
              >
                {t.footer.cta} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>{t.footer.copyright}</p>
          <div className="flex gap-6">
            <Link href="/privacidad">{t.footer.privacy}</Link>
            <Link href="/terminos">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
