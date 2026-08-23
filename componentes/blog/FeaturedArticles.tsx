import ArticleCard, {
  type ArticleCardData,
} from "@/componentes/blog/ArticleCard";

export default function FeaturedArticles({
  posts,
}: {
  posts: ArticleCardData[];
}) {
  if (posts.length === 0) return null;

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-4">
      <div className="max-w-2xl">
        <p className="type-eyebrow text-brand-red-600 dark:text-brand-red-400">
          Destacados
        </p>
        <h2 className="type-h2 mt-3 text-[#07182D] dark:text-white">
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
