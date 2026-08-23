import Link from "next/link";
import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      {...props}
      className="type-h2 mt-12 scroll-mt-28 text-[#07182D] dark:text-white"
    />
  ),
  h3: (props) => (
    <h3
      {...props}
      className="type-h3 mt-8 scroll-mt-28 text-[#07182D] dark:text-white"
    />
  ),
  p: (props) => (
    <p
      {...props}
      className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300"
    />
  ),
  a: ({ href = "", ...props }) => (
    <Link
      href={href}
      className="font-semibold text-brand-red-600 dark:text-brand-red-400 underline decoration-brand-red-600/30 underline-offset-4 hover:decoration-brand-red-600 transition"
      {...props}
    />
  ),
  strong: (props) => (
    <strong {...props} className="font-bold text-[#07182D] dark:text-white" />
  ),
  ul: (props) => (
    <ul
      {...props}
      className="mt-5 space-y-2.5 pl-1 text-base leading-7 text-slate-600 dark:text-slate-300 [&>li]:flex [&>li]:gap-3 [&>li]:before:mt-3 [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:shrink-0 [&>li]:before:rounded-full [&>li]:before:bg-brand-red-600"
    />
  ),
  ol: (props) => (
    <ol
      {...props}
      className="mt-5 list-decimal space-y-2.5 pl-6 text-base leading-7 text-slate-600 dark:text-slate-300 marker:font-bold marker:text-brand-red-600 dark:text-brand-red-400"
    />
  ),
  li: (props) => <li {...props} />,
  blockquote: (props) => (
    <blockquote
      {...props}
      className="mt-8 rounded-3xl border-l-4 border-brand-red-600 bg-slate-50 dark:bg-white/5 px-6 py-5 text-lg font-medium italic leading-relaxed text-[#07182D] dark:text-white"
    />
  ),
  hr: () => <hr className="my-10 border-slate-200 dark:border-white/10" />,
  code: (props) => (
    <code
      {...props}
      className="rounded bg-slate-100 dark:bg-white/10 px-1.5 py-0.5 text-[0.9em] font-mono text-brand-red-600 dark:text-brand-red-400"
    />
  ),
};
