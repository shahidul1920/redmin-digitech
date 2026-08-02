import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/wp-api";
import PostContent from "@/components/PostContent";
import { Clock, Calendar, ArrowLeft, Tag } from "lucide-react";

/**
 * Generate Dynamic SEO Metadata from WPGraphQL post.seo object
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found | Redmun Digitech",
      description: "The requested news article could not be found.",
    };
  }

  const { seo, title, excerpt, featuredImage } = post;

  const metaTitle = seo?.title || `${title} | Redmun Digitech`;
  const metaDescription =
    seo?.metaDesc ||
    excerpt?.replace(/<[^>]+>/g, "").trim().slice(0, 160) ||
    `Read ${title} on Redmun Digitech.`;

  const canonicalUrl = seo?.canonical || `https://redmun.com/news/${slug}`;
  const ogTitle = seo?.opengraphTitle || metaTitle;
  const ogDescription = seo?.opengraphDescription || metaDescription;
  const ogImage = seo?.opengraphImage?.sourceUrl || featuredImage?.node?.sourceUrl || null;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      siteName: "Redmun Digitech",
      type: "article",
      images: ogImage ? [{ url: ogImage, alt: featuredImage?.node?.altText || title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : [],
    },
  };
}

/**
 * Single News Article Page
 */
export default async function NewsPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const {
    title,
    date,
    content,
    featuredImage,
    author,
    categories,
    articleMetadata,
  } = post;

  // Format publication date
  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  const authorNode = author?.node;
  const categoriesList = categories?.nodes || [];
  const featImgNode = featuredImage?.node;

  // ACF Article Metadata commented out for now:
  // const subheading = articleMetadata?.subheading;
  // const authorSubtitle = articleMetadata?.authorSubtitle;
  // const estimatedReadTime = articleMetadata?.estimatedReadTime;
  // const mainImageSourceInfo = articleMetadata?.mainImageSourceInfo;

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
        </div>

        {/* Hero Section */}
        <header className="mb-10 space-y-6">
          {/* Categories */}
          {categoriesList.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {categoriesList.map((cat) => (
                <span
                  key={cat.slug || cat.name}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800"
                >
                  <Tag className="w-3 h-3" />
                  {cat.name}
                </span>
              ))}
            </div>
          )}

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {title}
          </h1>

          {/* ACF Subheading (commented for now) */}
          {/* {subheading && (
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed">
              {subheading}
            </p>
          )} */}

          {/* Author & Meta Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            {/* Author Info */}
            <div className="flex items-center gap-3">
              {authorNode?.avatar?.url ? (
                <Image
                  src={authorNode.avatar.url}
                  alt={authorNode.name || "Author"}
                  width={48}
                  height={48}
                  className="rounded-full ring-2 ring-indigo-500/20"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                  {authorNode?.name?.charAt(0) || "A"}
                </div>
              )}
              <div>
                <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                  {authorNode?.name || "Redmun Editorial Team"}
                </h2>
                {/* ACF Author Subtitle (commented for now) */}
                {/* {authorSubtitle && (
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {authorSubtitle}
                  </p>
                )} */}
              </div>
            </div>

            {/* Date & Read Time */}
            <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              {formattedDate && (
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-indigo-500" />
                  <span>{formattedDate}</span>
                </div>
              )}

              {/* ACF Estimated Read Time (commented for now) */}
              {/* {estimatedReadTime && (
                <div className="flex items-center gap-1.5 bg-slate-200/60 dark:bg-slate-800 px-2.5 py-1 rounded-md font-medium text-slate-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  <span>{estimatedReadTime}</span>
                </div>
              )} */}
            </div>
          </div>

          {/* Hero / Featured Image */}
          {featImgNode?.sourceUrl && (
            <figure className="mt-8 space-y-2">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl bg-slate-200 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <Image
                  src={featImgNode.sourceUrl}
                  alt={featImgNode.altText || title || "Featured image"}
                  width={featImgNode.mediaDetails?.width || 1200}
                  height={featImgNode.mediaDetails?.height || 675}
                  priority
                  className="object-cover w-full h-full"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                />
              </div>
              {/* ACF Main Image Source Info (commented for now) */}
              {/* {mainImageSourceInfo && (
                <figcaption className="text-xs text-center text-slate-500 dark:text-slate-400 italic">
                  Image Source: {mainImageSourceInfo}
                </figcaption>
              )} */}
            </figure>
          )}
        </header>

        {/* Body Content parsed with html-react-parser */}
        <section className="bg-white dark:bg-slate-900 p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
          <PostContent content={content} />
        </section>
      </div>
    </main>
  );
}
