"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";

export default function CategoryCard({
  icon: Icon,
  name,
  description,
  count,
  active = false,
  onClick,
  index = 0,
}: {
  icon: LucideIcon;
  name: string;
  description: string;
  count: number;
  active?: boolean;
  onClick?: () => void;
  index?: number;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.4) }}
      className={`group relative flex flex-col items-start rounded-3xl border p-6 text-left transition-all duration-300 hover:-translate-y-1 ${
        active
          ? "border-brand-red-600 bg-brand-red-500/5 dark:bg-brand-red-500/10 shadow-lg shadow-brand-red-600/10"
          : "border-slate-100 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-brand-red-500/30 hover:elev-2"
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-3xl transition-all duration-300 ${
          active
            ? "bg-brand-red-600 text-white"
            : "bg-slate-50 dark:bg-white/5 text-brand-navy dark:text-white group-hover:bg-brand-red-600 group-hover:text-white"
        }`}
      >
        <Icon size={22} />
      </div>

      <h3 className="type-h3 mt-4 text-brand-navy dark:text-white">{name}</h3>
      <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400">
        {description}
      </p>

      <div className="mt-4 flex w-full items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
          {count} {count === 1 ? "artículo" : "artículos"}
        </span>
        <ArrowRight
          size={14}
          className={`transition-all duration-300 ${active ? "text-brand-red-600 dark:text-brand-red-400 translate-x-0.5" : "text-slate-300 dark:text-slate-600 group-hover:text-brand-red-600 dark:hover:text-brand-red-400 group-hover:translate-x-0.5"}`}
        />
      </div>
    </motion.button>
  );
}
