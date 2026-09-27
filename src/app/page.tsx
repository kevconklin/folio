import Link from "next/link";
import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";
import { SITE_TAGLINE } from "@/lib/site";

const RECENT_POST_COUNT = 3;

const projects = [
  {
    title: "Read More",
    description: "Social book-tracking app for tracking reading and organizing shelves.",
    url: "https://read-more.app",
  },
  {
    title: "journl/it",
    description: "Zero-knowledge encrypted journaling app.",
    url: "https://journlit.com",
  },
  {
    title: "How Do GenAI Models Evaluate Other Models?",
    description: "Using generative AI models to grade other models' outputs.",
    url: "https://medium.com/@kevinconklin_17818/how-do-genai-models-grade-other-modeloutputs-e8d88d293e25",
  },
  {
    title: "Using BigQuery as a Vector Store",
    description: "Tutorial on using BigQuery as a vector store for RAG applications.",
    url: "https://medium.com/@kevinconklin_17818/using-bigquery-as-a-vector-store-b1ca91371854",
  },
  {
    title: "Build a Card Game With GenAI",
    description: "Building and deploying a War card game with Bolt.new in minutes.",
    url: "https://medium.com/@kevinconklin_17818/using-bolt-new-to-war-card-game-application-c963c8a87f6d",
  },
  {
    title: "Simplify Testing Generative AI Systems",
    description: "A simple way to test the subjective outputs of generative AI systems.",
    url: "https://medium.com/@kevinconklin_17818/simplify-testing-fine-tuned-llms-and-prompts-e0a6c2cfcdbf",
  },
  {
    title: "Quick Question",
    description: "Random questions to ask friends and family.",
    url: "https://qq-delta.vercel.app/",
  },
];

export default function Home() {
  const recentPosts = getAllPosts().slice(0, RECENT_POST_COUNT);

  return (
    <>
      <p className="tagline">{SITE_TAGLINE}</p>

      <h2>Recent writing</h2>
      <PostList posts={recentPosts} />
      <p>
        <Link href="/blog/">All posts →</Link>
      </p>

      <h2>Projects</h2>
      <ul className="project-list">
        {projects.map((project) => (
          <li key={project.title}>
            <a href={project.url}>{project.title}</a>
            <span>{project.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
