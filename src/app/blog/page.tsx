import type { Metadata } from "next";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function BlogIndex() {
  return (
    <>
      <h1>Blog</h1>
      <PostList posts={getAllPosts()} />
    </>
  );
}
