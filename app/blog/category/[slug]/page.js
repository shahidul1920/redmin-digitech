import BlogCategoryPage from "@/pages/BlogCategoryPage";
import { getCategories, getPostsByCategory } from "@/lib/wp-api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const categories = await getCategories();
  const matchedCategory = categories.find((c) => c.slug === slug);
  const categoryName = matchedCategory ? matchedCategory.name : slug;

  return {
    title: `${categoryName} Articles & Guides — Redmun Digitech Blog`,
    description: `Read technical writeups, system blueprints, and digital supply guides on ${categoryName} written by Redmun Digitech software engineers.`,
    openGraph: {
      title: `${categoryName} Articles — Redmun Digitech Blog`,
      description: `Technical insights and integration guides under ${categoryName}.`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const categories = await getCategories();
  const posts = await getPostsByCategory(slug);
  const matchedCategory = categories.find((c) => c.slug === slug) || {
    name: slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
    slug,
  };

  return <BlogCategoryPage category={matchedCategory} posts={posts} categories={categories} />;
}
