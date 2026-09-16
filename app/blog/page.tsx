import type { Metadata } from "next";
import Navbar from "@/componentes/Navbar";
import Footer from "@/componentes/Footer";
import BlogHero from "@/componentes/blog/BlogHero";
import FeaturedArticles from "@/componentes/blog/FeaturedArticles";
import BlogExplorer, {
  type SearchablePost,
} from "@/componentes/blog/BlogExplorer";
import ResourcesSection from "@/componentes/blog/ResourcesSection";
import NewsletterSection from "@/componentes/blog/NewsletterSection";
import { getAllPosts, getFeaturedPosts } from "@/lib/blog";
import { categories } from "@/lib/blog-categories";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Estrategias, innovación, tecnología y casos de éxito para ayudar a las empresas a crecer mediante soluciones digitales.",
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
  openGraph: {
    type: "website",
    title: "Blog | DeveloClick",
    description:
      "Estrategias, innovación, tecnología y casos de éxito para ayudar a las empresas a crecer mediante soluciones digitales.",
    url: `${SITE_URL}/blog`,
  },
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const featured = getFeaturedPosts(3);

  const searchablePosts: SearchablePost[] = allPosts.map((post) => ({
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    cover: post.cover,
    coverAlt: post.coverAlt,
    date: post.date,
    author: post.author,
    category: post.category,
    readingTime: post.readingTime,
    tags: post.tags,
    searchIndex: [post.title, post.description, post.category, ...post.tags]
      .join(" ")
      .toLowerCase(),
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "DeveloClick Blog",
    url: `${SITE_URL}/blog`,
    description:
      "Estrategias, innovación, tecnología y casos de éxito para ayudar a las empresas a crecer mediante soluciones digitales.",
    blogPost: allPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
    })),
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <BlogHero />

      <div className="bg-white dark:bg-brand-ink transition-colors duration-300">
        <div className="space-y-20 py-16 sm:space-y-24 sm:py-20">
          <FeaturedArticles posts={featured} />

          <section className="mx-auto max-w-7xl px-6">
            <BlogExplorer posts={searchablePosts} categories={categories} />
          </section>

          <ResourcesSection />
          <NewsletterSection />
        </div>
      </div>

      <Footer />
    </main>
  );
}
