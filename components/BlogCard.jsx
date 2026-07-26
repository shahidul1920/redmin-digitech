"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "@/components/Icons";

export default function BlogCard({ post }) {
  const [imgError, setImgError] = useState(false);

  if (!post) return null;

  const categoryName = post.categories?.nodes?.[0]?.name || "Articles";
  const categorySlug = post.categories?.nodes?.[0]?.slug || "general";

  // Extract image URL from WP post featuredImage or extraPostDetails.subImage
  const rawImageUrl =
    post.featuredImage?.node?.sourceUrl ||
    post.featuredImage?.node?.mediaItemUrl ||
    post.featuredImage?.sourceUrl ||
    post.extraPostDetails?.subImage?.node?.sourceUrl ||
    post.extraPostDetails?.subImage?.node?.mediaItemUrl ||
    post.extraPostDetails?.subImage?.sourceUrl;

  // Upgrade HTTP to HTTPS to prevent Vercel mixed-content blocking
  const imageUrl = rawImageUrl ? rawImageUrl.replace(/^http:\/\//i, "https://") : null;

  const altText =
    post.featuredImage?.node?.altText ||
    post.extraPostDetails?.subImage?.node?.altText ||
    post.title ||
    "Blog Post Image";

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "July 2026";

  const subTitle =
    post.extraPostDetails?.subTitle ||
    post.excerpt?.replace(/<[^>]+>/g, "").slice(0, 120) ||
    "Read the full technical article from our engineering team.";

  return (
    <article className="bg-white rounded-3xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Post Image Container */}
        <div className="relative h-48 sm:h-56 w-full bg-dark/5 overflow-hidden border-b border-border">
          {imageUrl && !imgError ? (
            <img
              src={imageUrl}
              alt={altText}
              referrerPolicy="no-referrer"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-dark via-dark-secondary to-dark/90 flex items-center justify-center p-6 text-center">
              <div className="space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand block">
                  Redmun Engineering
                </span>
                <span className="text-sm font-bold text-white line-clamp-2">{post.title}</span>
              </div>
            </div>
          )}

          {/* Category Badge Floating Tag */}
          <div className="absolute top-4 left-4">
            <Link
              href={`/blog/category/${categorySlug}`}
              className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-md text-brand px-3 py-1 rounded-full border border-border shadow-sm hover:bg-brand hover:text-white transition-colors"
            >
              {categoryName}
            </Link>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Calendar className="w-3.5 h-3.5 text-brand" />
            <span>{formattedDate}</span>
          </div>

          <Link href={`/blog/${post.slug}`} className="block group-hover:text-brand transition-colors">
            <h3 className="text-lg md:text-xl font-bold text-dark leading-snug line-clamp-2">
              {post.title}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-3">
            {subTitle}
          </p>
        </div>
      </div>

      {/* Card Footer Link */}
      <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-xs font-bold text-brand hover:text-dark transition-colors group-hover:translate-x-1 transition-transform"
        >
          Read Article <ArrowRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>
    </article>
  );
}
