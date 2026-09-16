import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  date: string;
  author: string;
  authorRole: string;
  category: string;
  tags: string[];
  featured: boolean;
  readingTime: number;
  content: string;
};

function readingTimeFromContent(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function fileToPost(filename: string): BlogPost {
  const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug: data.slug ?? filename.replace(/\.mdx?$/, ""),
    title: data.title ?? "",
    description: data.description ?? "",
    excerpt: data.excerpt ?? data.description ?? "",
    cover: data.cover ?? "/imagenes/01_equipo_estrategia_digital.jpg",
    coverAlt: data.coverAlt ?? data.title ?? "",
    date: data.date ?? "",
    author: data.author ?? "Equipo DeveloClick",
    authorRole: data.authorRole ?? "Estrategia Digital",
    category: data.category ?? "Innovación",
    tags: data.tags ?? [],
    featured: Boolean(data.featured),
    readingTime: readingTimeFromContent(content),
    content,
  };
}

let cachedPosts: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (cachedPosts) return cachedPosts;
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".mdx"));
  const posts = files
    .map(fileToPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  cachedPosts = posts;
  return posts;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getFeaturedPosts(limit = 3): BlogPost[] {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  const pool = featured.length >= limit ? featured : posts;
  return pool.slice(0, limit);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const posts = getAllPosts().filter((p) => p.slug !== post.slug);
  const sameCategory = posts.filter((p) => p.category === post.category);
  const rest = posts.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

export function getCategoryCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  for (const post of getAllPosts()) {
    counts[post.category] = (counts[post.category] ?? 0) + 1;
  }
  return counts;
}

export type Heading = { depth: 2 | 3; text: string; id: string };

export function extractHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger();
  const lines = content.split("\n");
  const headings: Heading[] = [];
  for (const line of lines) {
    const match = /^(##|###)\s+(.+)$/.exec(line.trim());
    if (!match) continue;
    const depth = match[1].length as 2 | 3;
    const text = match[2].trim();
    headings.push({ depth, text, id: slugger.slug(text) });
  }
  return headings;
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.trim().toLowerCase();
  if (!q) return getAllPosts();
  return getAllPosts().filter((post) => {
    const haystack = [
      post.title,
      post.description,
      post.category,
      ...post.tags,
      post.content,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
