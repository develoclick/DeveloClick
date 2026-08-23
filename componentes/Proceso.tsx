"use client";

import Image from "next/image";
import {
  BarChart3,
  Code2,
  Compass,
  Lightbulb,
  Palette,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/componentes/i18n/LanguageProvider";

const icons: LucideIcon[] = [
  Compass,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  BarChart3,
];

export default function Proceso() {
  const { t } = useLanguage();
  const phases = t.proceso.phases.map((phase, index) => ({
    ...phase,
    icon: icons[index],
  }));

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#07182d] py-24 transition-colors duration-300 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-5 bg-brand-red-600" />
            <p className="text-[10px] font-bold tracking-[0.18em] text-brand-red-600 dark:text-brand-red-400 uppercase">
              {t.proceso.badge}
            </p>
          </div>
          <h2 className="type-h2 mt-4 text-[#0A192F] dark:text-white">
            {t.proceso.title1}
            <br />
            <span className="text-brand-red-600 dark:text-brand-red-400">
              {t.proceso.titleHighlight}
            </span>
          </h2>
          <p className="mt-5 text-sm leading-6 text-[#64748B] dark:text-slate-400 sm:text-base">
            {t.proceso.paragraph}
          </p>
        </div>

        <div className="group relative mt-11 min-h-[280px] overflow-hidden rounded-3xl bg-[#07182d] shadow-xl sm:min-h-[320px]">
          <Image
            src="/imagenes/equipo-corporativo.jpg"
            alt="Equipo creativo colaborando durante una sesión de trabajo"
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover transition duration-700 group-hover:scale-[1.025]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,24,45,0.87)_0%,rgba(7,24,45,0.62)_42%,rgba(7,24,45,0.28)_100%)]" />
          <div className="relative flex min-h-[280px] max-w-xl flex-col justify-center p-8 sm:min-h-[320px] sm:p-10">
            <p className="type-eyebrow text-brand-red-400">
              {t.proceso.bannerEyebrow}
            </p>
            <h3 className="type-h3 mt-4 text-white">{t.proceso.bannerTitle}</h3>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-200">
              {t.proceso.bannerParagraph}
            </p>
          </div>
        </div>

        <div className="relative mt-12 grid gap-x-8 gap-y-10 md:grid-cols-3">
          <div className="absolute left-[16.66%] right-[16.66%] top-[20px] hidden h-px bg-slate-200 dark:bg-white/10 md:block" />
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            return (
              <article key={phase.title} className="relative">
                <div className="relative z-10 flex items-center gap-3">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full border border-slate-300 bg-white text-[9px] font-bold text-[#0A192F] dark:border-white/20 dark:bg-[#07182d] dark:text-white">
                    {index + 1}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A192F] text-white shadow-lg ">
                    <Icon size={18} />
                  </div>
                </div>
                <div className="ml-9 mt-4 border-l border-slate-200 dark:border-white/10 pl-5">
                  <h3 className="type-h3 text-[#0A192F] dark:text-white">
                    {phase.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-[#64748B] dark:text-slate-400">
                    {phase.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
