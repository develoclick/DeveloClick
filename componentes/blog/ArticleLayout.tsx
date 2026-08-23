import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock, User } from "lucide-react";

function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString("es-PE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function ArticleLayout({
  title,
  category,
  date,
  author,
  authorRole,
  readingTime,
  cover,
  coverAlt,
}: {
  title: string;
  category: string;
  date: string;
  author: string;
  authorRole: string;
  readingTime: number;
  cover: string;
  coverAlt: string;
}) {
  return (
    <header className="relative w-full bg-white dark:bg-[#07182d] pt-8 transition-colors duration-300">
      <div className="mx-auto max-w-4xl px-6">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500"
        >
          <Link
            href="/"
            className="hover:text-brand-red-600 dark:hover:text-brand-red-400 transition"
          >
            Inicio
          </Link>
          <ChevronRight size={12} />
          <Link
            href="/blog"
            className="hover:text-brand-red-600 dark:hover:text-brand-red-400 transition"
          >
            Blog
          </Link>
          <ChevronRight size={12} />
          <span className="text-slate-500 dark:text-slate-400">{category}</span>
        </nav>

        <span className="mt-6 inline-flex items-center rounded-full bg-brand-red-500/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red-600 dark:text-brand-red-400">
          {category}
        </span>

        <h1 className="type-display mt-5 text-[#07182D] dark:text-white">
          {title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-slate-100 dark:border-white/10 pb-8 text-sm text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2 font-semibold text-[#07182D] dark:text-white">
            <User
              size={15}
              className="text-brand-red-600 dark:text-brand-red-400"
            />{" "}
            {author}
            <span className="hidden font-normal text-slate-400 dark:text-slate-500 sm:inline">
              · {authorRole}
            </span>
          </span>
          <span>{formatDate(date)}</span>
          <span className="flex items-center gap-1.5">
            <Clock size={14} /> {readingTime} min de lectura
          </span>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-6">
        <div className="relative aspect-[16/8] overflow-hidden rounded-3xl shadow-2xl ">
          <Image
            src={cover}
            alt={coverAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07182D]/30 via-transparent to-transparent" />
        </div>
      </div>
    </header>
  );
}
