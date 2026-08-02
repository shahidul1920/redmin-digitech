import BlogPage from "@/pages/BlogPage";
import { getCategories, getAllPosts } from "@/lib/wp-api";

export const metadata = {
  title: "Blog & Technical Articles | Redmun Digitech",
  description:
    "Insights on Headless WordPress, Next.js engineering, 1688 API integrations, logistics software, and e-commerce scaling.",
  openGraph: {
    title: "Blog & Technical Articles | Redmun Digitech",
    description:
      "Technical documentations and system blueprints powered by Headless WordPress & Next.js ISR.",
  },
};

export default async function Page() {
  const categories = await getCategories();
  const posts = await getAllPosts(20);

  return <BlogPage categories={categories} posts={posts} />;
}
