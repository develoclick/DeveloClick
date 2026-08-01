import ArticleCard, { type ArticleCardData } from "@/componentes/blog/ArticleCard";

export default function FeaturedArticles({ posts }: { posts: ArticleCardData[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-4">
      <div className="max-w-2xl">
        <p className="text-[11px] font-bold tracking-[0.18em] text-[#E63946] uppercase">Destacados</p>
        <h2 className="mt-3 text-3xl font-display font-bold tracking-tight text-[#07182D] dark:text-white sm:text-4xl">
          Lo más leído esta temporada.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {posts.map((post, index) => (
          <ArticleCard key={post.slug} post={post} featured={index === 0} />
        ))}
      </div>
    </section>
  );
}
