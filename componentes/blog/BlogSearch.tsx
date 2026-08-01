"use client";

import { Search, X } from "lucide-react";

export default function BlogSearch({
  value,
  onChange,
  resultsCount,
}: {
  value: string;
  onChange: (value: string) => void;
  resultsCount?: number;
}) {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <Search size={18} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busca por título, categoría o tema..."
        aria-label="Buscar artículos"
        className="w-full rounded-2xl border border-slate-200 dark:border-white/15 bg-white dark:bg-white/[0.04] py-4 pl-12 pr-12 text-sm text-[#07182D] dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 shadow-sm outline-none transition focus:border-[#E63946] focus:ring-2 focus:ring-[#E63946]/15"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Limpiar búsqueda"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-[#E63946] transition"
        >
          <X size={16} />
        </button>
      )}
      {value && typeof resultsCount === "number" && (
        <p className="mt-3 text-center text-xs font-semibold text-slate-500 dark:text-slate-400">
          {resultsCount === 0
            ? "No encontramos artículos que coincidan con tu búsqueda."
            : `${resultsCount} ${resultsCount === 1 ? "artículo encontrado" : "artículos encontrados"}`}
        </p>
      )}
    </div>
  );
}
