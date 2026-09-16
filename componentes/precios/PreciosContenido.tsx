"use client";

import {
  Check,
  FileText,
  Minus,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import PageHero from "@/componentes/ui/PageHero";
import SectionHeading from "@/componentes/ui/SectionHeading";
import Reveal from "@/componentes/motion/Reveal";
import PlanFinder from "@/componentes/precios/PlanFinder";
import { fotos } from "@/lib/images";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";
import { usePage } from "@/componentes/i18n/usePage";
import precios from "@/componentes/i18n/pages/precios";

const iconosIncluido = [Palette, Sparkles, Smartphone, FileText];

/** Cabecera de precios. Los planes vienen después, en su propio componente. */
export function PreciosHeroSeccion() {
  const { t } = useLanguage();
  const p = usePage(precios);
  const h = t.preciosHero;
  return (
    <PageHero
      page={t.nav.precios}
      eyebrow={h.badge}
      title={h.title1}
      highlight={h.titleHighlight}
      subtitle={h.subtitle}
      chips={p.hero.chips}
      foto={fotos.analitica}
      fotoSecundaria={fotos.saas}
      secondary={{ href: "#recomendador", label: p.hero.secondary }}
    />
  );
}

/** Recomendador + incluido en todos + tabla comparativa. */
export default function PreciosContenido() {
  const { t } = useLanguage();
  const p = usePage(precios);

  return (
    <>
      <PlanFinder />

      <section className="bg-white py-24 transition-colors duration-300 dark:bg-brand-ink lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow={p.incluido.eyebrow}
            title={p.incluido.title}
            highlight={p.incluido.highlight}
            align="center"
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {p.incluido.items.map((item, i) => {
              const Icon = iconosIncluido[i];
              return (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 0.07}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-red-600/30 hover:elev-2 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red-600/10 text-brand-red-600 transition-colors duration-300 group-hover:bg-brand-red-600 group-hover:text-white dark:bg-brand-red-400/15 dark:text-brand-red-400">
                    <Icon size={22} />
                  </span>
                  <h3 className="type-h4 mt-5 text-brand-navy dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {item.text}
                  </p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-brand-navy-800 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <SectionHeading
            eyebrow={p.tabla.eyebrow}
            title={p.tabla.title}
            highlight={p.tabla.highlight}
            align="center"
          />

          {/* En móvil la tabla se desplaza en horizontal dentro de su caja */}
          <Reveal className="mt-12 overflow-x-auto rounded-3xl border border-slate-200 bg-white elev-2 dark:border-white/10 dark:bg-brand-ink">
            <table className="w-full min-w-[36rem] text-left text-sm">
              <caption className="sr-only">
                {p.tabla.title} {p.tabla.highlight}
              </caption>
              <thead>
                <tr className="border-b border-slate-200 dark:border-white/10">
                  <th
                    scope="col"
                    className="px-6 py-5 font-semibold text-slate-500 dark:text-slate-400"
                  >
                    {p.tabla.feature}
                  </th>
                  {t.preciosPlanes.plans.map((plan, i) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className={`px-4 py-5 text-center ${
                        i === 1
                          ? "bg-brand-red-600/5 dark:bg-brand-red-400/10"
                          : ""
                      }`}
                    >
                      <span className="font-brand block text-sm font-bold uppercase text-brand-navy dark:text-white">
                        {plan.name}
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {plan.price}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {p.tabla.rows.map((row) => (
                  <tr
                    key={row.label}
                    className="border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50 dark:border-white/5 dark:hover:bg-white/[0.02]"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-slate-700 dark:text-slate-300"
                    >
                      {row.label}
                    </th>
                    {row.plans.map((incluye, i) => (
                      <td
                        key={i}
                        className={`px-4 py-4 text-center ${
                          i === 1
                            ? "bg-brand-red-600/5 dark:bg-brand-red-400/10"
                            : ""
                        }`}
                      >
                        {incluye ? (
                          <Check
                            size={18}
                            role="img"
                            aria-label={p.tabla.yes}
                            className="mx-auto text-brand-red-600 dark:text-brand-red-400"
                          />
                        ) : (
                          <Minus
                            size={18}
                            role="img"
                            aria-label={p.tabla.no}
                            className="mx-auto text-slate-300 dark:text-slate-600"
                          />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>
    </>
  );
}
