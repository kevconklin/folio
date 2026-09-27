import Link from "next/link";
import { formatDate, type PostMeta } from "@/lib/posts";

interface PostListProps {
  posts: PostMeta[];
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return <p className="muted">No posts yet.</p>;
  }

  return (
    <ul className="post-list">
      {posts.map((post) => (
        <li key={post.slug}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
          {post.summary && <p>{post.summary}</p>}
        </li>
      ))}
    </ul>
  );
}
