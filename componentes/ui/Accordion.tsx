"use client";

import { useId, useState } from "react";
import { Plus } from "lucide-react";
import SectionHeading from "@/componentes/ui/SectionHeading";

type Item = { q: string; a: string };

type Props = {
  eyebrow: string;
  title: string;
  items: Item[];
  className?: string;
};

/**
 * Preguntas frecuentes accesibles.
 *
 * La altura se anima con `grid-template-rows: 0fr -> 1fr`, que permite
 * transicionar hasta el alto real del contenido sin medirlo en JavaScript.
 * Cada botón controla su panel con aria-expanded / aria-controls.
 */
export default function Accordion({
  eyebrow,
  title,
  items,
  className = "",
}: Props) {
  const [abierto, setAbierto] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      className={`bg-white py-24 transition-colors duration-300 dark:bg-brand-ink lg:py-32 ${className}`}
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          className="lg:sticky lg:top-32 lg:self-start"
        />

        <ul className="space-y-3">
          {items.map((item, i) => {
            const open = abierto === i;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <li
                key={item.q}
                className={`rounded-2xl border transition-colors duration-300 ${
                  open
                    ? "border-brand-red-600/30 bg-slate-50 dark:border-brand-red-400/30 dark:bg-white/[0.04]"
                    : "border-slate-200 bg-white dark:border-white/10 dark:bg-transparent"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setAbierto(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-brand-navy dark:text-white">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      open
                        ? "rotate-45 bg-brand-red-600 text-white"
                        : "bg-slate-100 text-brand-navy dark:bg-white/10 dark:text-white"
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  id={panelId}
                  role="region"
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-7 text-slate-600 dark:text-slate-400">
                      {item.a}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
