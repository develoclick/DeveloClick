import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

/**
 * Bloque de cierre del blog.
 *
 * Antes era un formulario de newsletter que mostraba "¡Listo!" sin transmitir
 * los datos a ningún sitio: cada suscriptor se perdía en silencio. Como no hay
 * proveedor de email marketing conectado, se sustituye por un acceso real al
 * único canal operativo (el cotizador) y al correo directo. No se promete un
 * servicio que no existe.
 */
export default function NewsletterSection() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-4">
      <div className="relative overflow-hidden rounded-3xl bg-brand-navy px-8 py-14 text-center elev-3 sm:px-14 sm:py-16">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(189,31,35,0.3),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,0.2),transparent_45%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"
        />

        <div className="relative z-10 mx-auto max-w-xl">
          <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-white/10 text-brand-red-400">
            <Mail size={22} />
          </div>

          <h2 className="type-h2 mt-5 text-white">
            ¿Quieres aplicar estas ideas en tu empresa?
          </h2>

          <p className="mt-4 text-base leading-8 text-slate-300">
            Cuéntanos tu proyecto en dos minutos y te respondemos con una
            propuesta concreta en menos de 24 horas hábiles.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto#cotizador"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red-600 px-7 py-4 text-sm font-bold text-white elev-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-red-700 sm:w-auto"
            >
              Abrir el cotizador
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="mailto:develoclick@gmail.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
            >
              develoclick@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
