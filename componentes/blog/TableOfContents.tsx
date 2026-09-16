"use client";

import { useEffect, useState } from "react";
import { List } from "lucide-react";
import type { Heading } from "@/lib/blog";

export default function TableOfContents({ headings }: { headings: Heading[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav
      aria-label="Tabla de contenidos"
      className="rounded-3xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/[0.03] p-6"
    >
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-red-600 dark:text-brand-red-400">
        <List size={14} /> En este artículo
      </div>
      <ul className="mt-4 space-y-2.5 border-l border-slate-100 dark:border-white/10">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.depth === 3 ? "pl-7" : "pl-4"}
          >
            <a
              href={`#${heading.id}`}
              className={`block border-l-2 -ml-px pl-3 text-[13px] leading-5 transition-colors ${
                activeId === heading.id
                  ? "border-brand-red-600 font-semibold text-brand-red-600 dark:text-brand-red-400"
                  : "border-transparent text-slate-500 dark:text-slate-400 hover:text-brand-navy dark:hover:text-white"
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
