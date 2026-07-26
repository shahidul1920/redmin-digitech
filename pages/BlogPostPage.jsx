"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, ArrowRight } from "@/components/Icons";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";

export default function BlogPostPage({ post, relatedPosts = [] }) {
  const [imgError, setImgError] = useState(false);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center space-y-6">
        <h1 className="text-3xl font-bold text-dark">Article Not Found</h1>
        <p className="text-sm text-text-secondary">
          The requested engineering writeup could not be located.
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center px-6 py-2.5 rounded-xl bg-brand text-white text-xs font-bold"
        >
          Return to Blog Hub
        </Link>
      </div>
    );
  }

  const category = post.categories?.nodes?.[0] || { name: "Engineering", slug: "engineering" };
  const rawImageUrl =
    post.featuredImage?.node?.sourceUrl ||
    post.extraPostDetails?.subImage?.node?.sourceUrl;

  // Upgrade HTTP to HTTPS to prevent Vercel mixed-content blocking
  const imageUrl = rawImageUrl ? rawImageUrl.replace(/^http:\/\//i, "https://") : null;

  const altText =
    post.featuredImage?.node?.altText ||
    post.extraPostDetails?.subImage?.node?.altText ||
    post.title;

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "July 2026";

  const subTitle = post.extraPostDetails?.subTitle || "";
  const extendedContent = post.extraPostDetails?.extended || "";
  const htmlContent = post.content
    ? post.content.replace(/http:\/\/server\.redmun\.com/g, "https://server.redmun.com")
    : "";

  return (
    <article className="bg-light-secondary/40 py-12">
      {/* 1. Breadcrumb & Back Action */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-bold text-brand hover:text-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to Blog
          </Link>

          <Link
            href={`/blog/category/${category.slug}`}
            className="text-[10px] font-bold uppercase tracking-widest bg-brand/10 text-brand px-3 py-1 rounded-full hover:bg-brand hover:text-white transition-colors"
          >
            {category.name}
          </Link>
        </div>
      </section>

      {/* 2. Article Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm space-y-6">
          <div className="flex flex-wrap items-center gap-4 text-xs text-text-tertiary border-b border-border pb-6">
            <span className="flex items-center gap-1.5 font-semibold text-dark">
              <User className="w-3.5 h-3.5 text-brand" /> Redmun Engineering Team
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" /> {formattedDate}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight">
            {post.title}
          </h1>

          {subTitle && (
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed font-medium">
              {subTitle}
            </p>
          )}

          {/* Featured Image */}
          {imageUrl && !imgError ? (
            <div className="pt-4">
              <div className="relative h-64 sm:h-96 w-full rounded-2xl overflow-hidden border border-border bg-dark/5">
                <img
                  src={imageUrl}
                  alt={altText}
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="pt-4">
              <div className="h-48 sm:h-64 w-full rounded-2xl bg-gradient-to-br from-dark via-dark-secondary to-dark/90 flex items-center justify-center p-8 text-center border border-border-dark">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand block">
                    Redmun Official Publication
                  </span>
                  <span className="text-lg font-bold text-white max-w-lg block mx-auto">{post.title}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Main Article Body */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-border shadow-sm space-y-8 leading-relaxed text-text-secondary">
          {extendedContent && (
            <div className="p-6 rounded-2xl bg-light-secondary border border-border text-dark text-sm sm:text-base font-medium space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand">
                Key Technical Takeaway
              </h3>
              <p className="leading-relaxed">{extendedContent}</p>
            </div>
          )}

          {htmlContent ? (
            <div
              className="prose prose-lg max-w-none text-dark space-y-6"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />
          ) : (
            <div className="space-y-6 text-sm sm:text-base text-text-secondary leading-relaxed">
              <p>
                In high-concurrency enterprise applications, decouples between frontend web nodes and database backends are critical for sub-second user experience. By deploying Next.js Incremental Static Regeneration (ISR) alongside Headless WordPress caching APIs, data requests bypass legacy PHP execution threads during peak traffic spikes.
              </p>
              <p>
                Whether managing 1688 product search feeds, bulk customs manifest entries, or thermal receipt printer WebSocket bridges, our engineering pipeline ensures zero latency and 99.9% uptime compliance.
              </p>
            </div>
          )}

          {/* Share Footer */}
          <div className="border-t border-border pt-8 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4 text-brand" />
              <span className="text-xs font-bold text-dark uppercase tracking-wider">
                Category: {category.name}
              </span>
            </div>

            <Link
              href="/request-demo"
              className="inline-flex items-center px-4 py-2 rounded-xl bg-brand text-white text-xs font-bold hover:bg-brand/90 transition-colors shadow-sm"
            >
              Discuss Technical Specs <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Related Posts Section */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-1">
                More Engineering Insights
              </span>
              <h2 className="text-2xl font-bold text-dark">Related Technical Articles</h2>
            </div>
            <Link href="/blog" className="text-xs font-bold text-brand hover:text-dark transition-colors">
              View All <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rPost) => (
              <BlogCard key={rPost.id || rPost.slug} post={rPost} />
            ))}
          </div>
        </section>
      )}

      {/* 5. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </article>
  );
}
