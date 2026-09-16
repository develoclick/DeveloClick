"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import BlogSearch from "@/componentes/blog/BlogSearch";
import CategoryCard from "@/componentes/blog/CategoryCard";
import ArticleCard, {
  type ArticleCardData,
} from "@/componentes/blog/ArticleCard";
import { categoryIcons } from "@/componentes/blog/categoryIcons";
import type { CategoryMeta } from "@/lib/blog-categories";

export type SearchablePost = ArticleCardData & {
  tags: string[];
  searchIndex: string;
};

export default function BlogExplorer({
  posts,
  categories,
}: {
  posts: SearchablePost[];
  categories: CategoryMeta[];
}) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const post of posts)
      counts[post.category] = (counts[post.category] ?? 0) + 1;
    return counts;
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((post) => {
      const matchesQuery = q.length === 0 || post.searchIndex.includes(q);
      const matchesCategory =
        !activeCategory || post.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [posts, query, activeCategory]);

  return (
    <div>
      <BlogSearch
        value={query}
        onChange={setQuery}
        resultsCount={query ? filtered.length : undefined}
      />

      <div className="mt-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="type-eyebrow text-brand-red-600 dark:text-brand-red-400">
            Categorías
          </p>
          <h2 className="type-h2 mt-3 text-brand-navy dark:text-white">
            Explora por tema.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat, index) => (
            <CategoryCard
              key={cat.slug}
              icon={categoryIcons[cat.icon]}
              name={cat.name}
              description={cat.description}
              count={categoryCounts[cat.name] ?? 0}
              active={activeCategory === cat.name}
              onClick={() =>
                setActiveCategory((prev) =>
                  prev === cat.name ? null : cat.name,
                )
              }
              index={index}
            />
          ))}
        </div>
      </div>

      <div id="articulos" className="mt-20 scroll-mt-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="type-eyebrow text-brand-red-600 dark:text-brand-red-400">
              {activeCategory ? activeCategory : "Todos los artículos"}
            </p>
            <h2 className="type-h2 mt-3 text-brand-navy dark:text-white">
              {activeCategory
                ? `Artículos sobre ${activeCategory}`
                : "Biblioteca completa."}
            </h2>
          </div>
          {activeCategory && (
            <button
              type="button"
              onClick={() => setActiveCategory(null)}
              className="rounded-xl border border-slate-200 dark:border-white/15 px-4 py-3 text-xs font-bold text-slate-600 dark:text-slate-300 hover:border-brand-red-600 hover:text-brand-red-600 dark:hover:text-brand-red-400 transition"
            >
              Quitar filtro
            </button>
          )}
        </div>

        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-12 flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 dark:border-white/15 py-24 text-center"
          >
            <SearchX size={32} className="text-slate-300 dark:text-slate-600" />
            <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
              No encontramos artículos con esos criterios. Prueba con otra
              búsqueda o quita el filtro de categoría.
            </p>
          </motion.div>
        ) : (
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((post) => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
