import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  summary?: string;
}

export interface Post extends PostMeta {
  html: string;
}

function readFrontmatter(slug: string): { meta: PostMeta; body: string; draft: boolean } {
  const file = path.join(POSTS_DIR, `${slug}.md`);
  const { data, content } = matter(fs.readFileSync(file, "utf8"));

  // gray-matter parses unquoted YAML dates into Date objects.
  const date = data.date instanceof Date ? data.date.toISOString().slice(0, 10) : data.date;

  if (typeof data.title !== "string" || data.title.trim() === "") {
    throw new Error(`Post "${slug}.md" is missing a "title" in its frontmatter.`);
  }
  if (typeof date !== "string" || !DATE_PATTERN.test(date)) {
    throw new Error(`Post "${slug}.md" needs a "date" in YYYY-MM-DD format.`);
  }

  return {
    meta: {
      slug,
      title: data.title,
      date,
      summary: typeof data.summary === "string" ? data.summary : undefined,
    },
    body: content,
    draft: data.draft === true,
  };
}

function listSlugs(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((name) => name.endsWith(".md"))
    .map((name) => name.replace(/\.md$/, ""));
}

export function getAllPosts(): PostMeta[] {
  return listSlugs()
    .map(readFrontmatter)
    .filter((post) => !post.draft)
    .map((post) => post.meta)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | null {
  if (!listSlugs().includes(slug)) return null;
  const { meta, body, draft } = readFrontmatter(slug);
  if (draft) return null;
  return { ...meta, html: marked.parse(body, { async: false }) };
}

export function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
