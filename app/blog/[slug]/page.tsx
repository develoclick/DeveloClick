import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import Navbar from "@/componentes/Navbar";
import Footer from "@/componentes/Footer";
import ArticleLayout from "@/componentes/blog/ArticleLayout";
import ReadingProgress from "@/componentes/blog/ReadingProgress";
import TableOfContents from "@/componentes/blog/TableOfContents";
import ShareButtons from "@/componentes/blog/ShareButtons";
import CTAArticle from "@/componentes/blog/CTAArticle";
import RelatedArticles from "@/componentes/blog/RelatedArticles";
import NewsletterSection from "@/componentes/blog/NewsletterSection";
import { mdxComponents } from "@/componentes/blog/MDXComponents";
import { SITE_URL } from "@/lib/site";
import {
  getAllPosts,
  getPostBySlug,
  getRelatedPosts,
  extractHeadings,
} from "@/lib/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: `${SITE_URL}${post.cover}`,
          alt: post.coverAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`${SITE_URL}${post.cover}`],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const headings = extractHeadings(post.content);
  const related = getRelatedPosts(post, 3);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: `${SITE_URL}${post.cover}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "DeveloClick",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/imagenes/develoclick_logo_PNG.png`,
      },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <ReadingProgress targetId="article-body" />
      <Navbar />

      <ArticleLayout
        title={post.title}
        category={post.category}
        date={post.date}
        author={post.author}
        authorRole={post.authorRole}
        readingTime={post.readingTime}
        cover={post.cover}
        coverAlt={post.coverAlt}
      />

      <div
        id="article-body"
        className="bg-white dark:bg-brand-ink pb-8 transition-colors duration-300"
      >
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 pt-12 lg:grid-cols-[1fr_240px]">
          <article className="min-w-0">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
              options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
            />

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 dark:border-white/10 pt-8">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-50 dark:bg-white/5 px-3 py-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <ShareButtons url={url} title={post.title} />
            </div>
          </article>

          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents headings={headings} />
            </div>
          </aside>
        </div>
      </div>

      <div className="bg-white dark:bg-brand-ink pt-6 transition-colors duration-300">
        <CTAArticle />
      </div>

      <div className="bg-white dark:bg-brand-ink transition-colors duration-300">
        <RelatedArticles posts={related} />
      </div>

      <div className="bg-white dark:bg-brand-ink pb-20 transition-colors duration-300">
        <NewsletterSection />
      </div>

      <Footer />
    </main>
  );
}
