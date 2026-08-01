import ArticleCard, { type ArticleCardData } from "@/componentes/blog/ArticleCard";

export default function RelatedArticles({ posts }: { posts: ArticleCardData[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="text-[11px] font-bold tracking-[0.18em] text-[#E63946] uppercase">Sigue leyendo</p>
      <h2 className="mt-3 text-2xl font-display font-bold tracking-tight text-[#07182D] dark:text-white sm:text-3xl">
        Artículos relacionados.
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
