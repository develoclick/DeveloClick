import ArticleCard, {
  type ArticleCardData,
} from "@/componentes/blog/ArticleCard";

export default function RelatedArticles({
  posts,
}: {
  posts: ArticleCardData[];
}) {
  if (posts.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="type-eyebrow text-brand-red-600 dark:text-brand-red-400">
        Sigue leyendo
      </p>
      <h2 className="type-h2 mt-3 text-[#07182D] dark:text-white">
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
