import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";

export type ArticleCardData = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  date: string;
  author: string;
  category: string;
  readingTime: number;
};

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleCard({
  post,
  featured = false,
}: {
  post: ArticleCardData;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-100 dark:border-white/10 bg-white dark:bg-white/[0.03] elev-1 transition-all duration-300 hover:-translate-y-1 hover:elev-3 hover:border-brand-red-500/30 ${
        featured ? "sm:col-span-2 sm:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${featured ? "aspect-[16/10] sm:aspect-auto sm:w-1/2" : "aspect-[16/10]"}`}
      >
        <Image
          src={post.cover}
          alt={post.coverAlt}
          fill
          sizes={
            featured
              ? "(max-width: 640px) 100vw, 50vw"
              : "(max-width: 640px) 100vw, 33vw"
          }
          className="object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full bg-white/90 dark:bg-brand-ink/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red-600 dark:text-brand-red-400 elev-2 backdrop-blur-md">
            {post.category}
          </span>
        </div>
      </div>

      <div
        className={`flex flex-1 flex-col p-6 sm:p-7 ${featured ? "sm:justify-center" : ""}`}
      >
        <div className="flex items-center gap-3 text-[11px] font-semibold text-slate-400 dark:text-slate-500">
          <span>{formatDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300 dark:bg-slate-600" />
          <span className="flex items-center gap-1">
            <Clock size={12} /> {post.readingTime} min de lectura
          </span>
        </div>

        <h3
          className={`type-h3 mt-3 text-brand-navy dark:text-white transition-colors group-hover:text-brand-red-600 dark:hover:text-brand-red-400 ${featured ? " " : ""}`}
        >
          {post.title}
        </h3>

        <p
          className={`mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400 ${featured ? "line-clamp-3" : "line-clamp-2"}`}
        >
          {post.excerpt}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <User size={13} /> {post.author}
          </span>
          <span className="flex items-center gap-1 text-xs font-bold text-brand-red-600 dark:text-brand-red-400">
            Leer más{" "}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
