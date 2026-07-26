import BlogPostPage from "@/pages/BlogPostPage";
import { getPostBySlug, getAllPosts } from "@/lib/wp-api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found — Redmun Digitech Blog",
    };
  }

  const metaTitle = `${post.title} — Redmun Digitech Blog`;
  const metaDesc =
    post.extraPostDetails?.subTitle ||
    post.excerpt?.replace(/<[^>]+>/g, "").slice(0, 160) ||
    `Read the complete article ${post.title} on Redmun Digitech Blog.`;

  const ogImage =
    post.featuredImage?.node?.sourceUrl ||
    post.extraPostDetails?.subImage?.node?.sourceUrl ||
    "/Redmun-final.svg";

  return {
    title: metaTitle,
    description: metaDesc,
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      type: "article",
      images: [{ url: ogImage }],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const allPosts = await getAllPosts(10);
  const relatedPosts = allPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return <BlogPostPage post={post} relatedPosts={relatedPosts} />;
}
