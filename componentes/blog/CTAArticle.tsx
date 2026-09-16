import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTAArticle() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-4">
      <div className="rounded-3xl border border-slate-100 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-8 text-center sm:p-12">
        <h2 className="type-h2 text-brand-navy dark:text-white">
          ¿Quieres aplicar estas estrategias en tu empresa?
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400 sm:text-base">
          Conversemos sobre tu proyecto y te mostramos cómo llevar estas ideas
          de la teoría a resultados medibles.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contacto#cotizador"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-red-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-brand-red-600/25 transition-all hover:bg-brand-red-700 hover:-translate-y-0.5 sm:w-auto"
          >
            Solicitar Cotización <ArrowRight size={16} />
          </Link>
          <Link
            href="/contacto"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/15 px-7 py-4 text-sm font-bold text-brand-navy dark:text-white transition-all hover:bg-slate-100 dark:hover:bg-white/10 sm:w-auto"
          >
            <Calendar
              size={16}
              className="text-brand-red-600 dark:text-brand-red-400"
            />{" "}
            Hablar con un Experto
          </Link>
        </div>
      </div>
    </section>
  );
}
