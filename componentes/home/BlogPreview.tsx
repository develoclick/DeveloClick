"use client";

import Link from "next/link";
import Image from "next/image";
import { Clock } from "lucide-react";
import Reveal from "@/componentes/motion/Reveal";
import SectionHeading from "@/componentes/ui/SectionHeading";
import ButtonLink from "@/componentes/ui/ButtonLink";
import { usePage } from "@/componentes/i18n/usePage";
import home from "@/componentes/i18n/pages/home";

export type PostResumen = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  category: string;
  readingTime: number;
};

/**
 * Últimos artículos. Los datos se leen en el servidor (page.tsx) y llegan ya
 * serializados, así que este componente no toca el sistema de archivos.
 */
export default function BlogPreview({ posts }: { posts: PostResumen[] }) {
  const h = usePage(home).blog;
  if (posts.length === 0) return null;

  return (
    <section className="bg-slate-50 py-24 transition-colors duration-300 dark:bg-brand-navy-800 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={h.eyebrow}
            title={h.title}
            highlight={h.highlight}
          />
          <ButtonLink href="/blog" variant="secondary" className="shrink-0">
            {h.link}
          </ButtonLink>
        </div>

        <ul className="mt-14 grid gap-6 md:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal as="li" key={post.slug} delay={i * 0.08}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white elev-1 transition-all duration-300 hover:-translate-y-1 hover:elev-2 dark:border-white/10 dark:bg-brand-ink"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.cover}
                    alt={post.coverAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold text-brand-navy backdrop-blur">
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="type-h4 text-brand-navy transition-colors group-hover:text-brand-red-600 dark:text-white dark:group-hover:text-brand-red-400">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-2 flex-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
                    {post.excerpt}
                  </p>
                  <p className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                    <Clock size={13} /> {post.readingTime} {h.minutes}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
