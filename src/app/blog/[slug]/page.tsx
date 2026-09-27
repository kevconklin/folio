import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, getAllPosts, getPost } from "@/lib/posts";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = getPost((await params).slug);
  return post ? { title: post.title, description: post.summary } : {};
}

export default async function PostPage({ params }: PostPageProps) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  return (
    <article>
      <h1>{post.title}</h1>
      <p className="muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </p>
      {/* Post HTML is rendered from Markdown files committed to this repo. */}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <p>
        <Link href="/blog/">← All posts</Link>
      </p>
    </article>
  );
}
