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

  const { seo, title, excerpt, featuredImage } = post;

  const metaTitle = seo?.title || `${title} — Redmun Digitech Blog`;
  const metaDesc =
    seo?.metaDesc ||
    excerpt?.replace(/<[^>]+>/g, "").slice(0, 160) ||
    `Read the complete article ${title} on Redmun Digitech Blog.`;

  const canonicalUrl = seo?.canonical || `https://redmun.com/blog/${slug}`;
  const ogTitle = seo?.opengraphTitle || metaTitle;
  const ogDesc = seo?.opengraphDescription || metaDesc;
  const ogImage =
    seo?.opengraphImage?.sourceUrl ||
    featuredImage?.node?.sourceUrl ||
    "/Redmun-final.svg";

  return {
    title: metaTitle,
    description: metaDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDesc,
      url: canonicalUrl,
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
