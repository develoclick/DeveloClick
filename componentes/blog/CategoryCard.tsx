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
          ? "border-[#E63946] bg-[#E63946]/5 dark:bg-[#E63946]/10 shadow-lg shadow-[#E63946]/10"
          : "border-slate-100 dark:border-white/10 bg-white dark:bg-white/[0.03] hover:border-[#E63946]/30 hover:shadow-lg"
      }`}
    >
      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 ${
        active ? "bg-[#E63946] text-white" : "bg-slate-50 dark:bg-white/5 text-[#07182D] dark:text-white group-hover:bg-[#E63946] group-hover:text-white"
      }`}>
        <Icon size={22} />
      </div>

      <h3 className="mt-4 text-base font-bold text-[#07182D] dark:text-white tracking-tight">{name}</h3>
      <p className="mt-1.5 text-xs leading-5 text-slate-500 dark:text-slate-400">{description}</p>

      <div className="mt-4 flex w-full items-center justify-between">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {count} {count === 1 ? "artículo" : "artículos"}
        </span>
        <ArrowRight size={14} className={`transition-all duration-300 ${active ? "text-[#E63946] translate-x-0.5" : "text-slate-300 dark:text-slate-600 group-hover:text-[#E63946] group-hover:translate-x-0.5"}`} />
      </div>
    </motion.button>
  );
}
