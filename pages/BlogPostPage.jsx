"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  ArrowRight,
  BookOpen,
  Clock,
  ShieldCheck,
  Share2,
  CheckCircle,
  MessageSquare,
  Sparkles,
  Zap,
  Globe,
} from "@/components/Icons";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import ScrollReveal from "@/components/ScrollReveal";
import Button from "@/components/Button";
import PostContent from "@/components/PostContent";
import TableOfContents from "@/components/TableOfContents";
import { getProxiedImageUrl } from "@/utils/media-proxy";

function processArticleHeadings(rawHtml) {
  if (!rawHtml) return { processedHtml: "", headings: [] };

  const headings = [];
  const headingCounts = {};

  const headingRegex = /<h([2-4])([^>]*)>([\s\S]*?)<\/h\1>/gi;

  const processedHtml = rawHtml.replace(headingRegex, (match, levelStr, attrs, innerHtml) => {
    const level = parseInt(levelStr, 10);
    const cleanText = innerHtml.replace(/<[^>]+>/g, "").trim();

    if (!cleanText) return match;

    const idMatch = attrs.match(/id=["']([^"']+)["']/i);
    let id = idMatch ? idMatch[1] : null;

    if (!id) {
      let baseSlug = cleanText
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .substring(0, 50);

      if (!baseSlug) baseSlug = `section-${headings.length + 1}`;

      if (headingCounts[baseSlug]) {
        headingCounts[baseSlug] += 1;
        id = `${baseSlug}-${headingCounts[baseSlug]}`;
      } else {
        headingCounts[baseSlug] = 1;
        id = baseSlug;
      }

      attrs = ` id="${id}"${attrs}`;
    }

    headings.push({ id, text: cleanText, level });

    return `<h${level}${attrs}>${innerHtml}</h${level}>`;
  });

  return { processedHtml, headings };
}

export default function BlogPostPage({ post, relatedPosts = [] }) {
  const [imgError, setImgError] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!post) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-light-secondary/40 px-4">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-10 rounded-3xl border border-border shadow-xl">
          <div className="w-16 h-16 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto">
            <BookOpen className="w-8 h-8 text-brand" />
          </div>
          <h1 className="text-3xl font-bold text-dark">Article Not Found</h1>
          <p className="text-sm text-text-secondary">
            The requested technical guide or engineering writeup could not be located.
          </p>
          <Button variant="brand" size="md" href="/blog" className="w-full justify-center">
            <ArrowLeft className="w-4 h-4 mr-2" /> Return to Blog Hub
          </Button>
        </div>
      </div>
    );
  }

  const category = post.categories?.nodes?.[0] || { name: "Engineering", slug: "engineering" };
  const rawImageUrl =
    post.featuredImage?.node?.sourceUrl ||
    post.featuredImage?.node?.mediaItemUrl ||
    post.featuredImage?.sourceUrl ||
    post.extraPostDetails?.subImage?.node?.sourceUrl ||
    post.extraPostDetails?.subImage?.node?.mediaItemUrl ||
    post.extraPostDetails?.subImage?.sourceUrl;

  const imageUrl = getProxiedImageUrl(rawImageUrl);
  const altText = post.featuredImage?.node?.altText || post.extraPostDetails?.subImage?.node?.altText || post.title;

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    : "July 2026";

  const subTitle = post.extraPostDetails?.subTitle || "";
  const extendedContent = post.extraPostDetails?.extended || "";

  // Dynamic reading time from ACF (readingTime) or word-count calculation fallback
  const acfReadingTime = post.extraPostDetails?.readingTime;
  const plainText = (post.content || "").replace(/<[^>]+>/g, "");
  const wordCount = plainText.split(/\s+/).filter(Boolean).length;
  const calculatedReadingTime = Math.max(2, Math.ceil(wordCount / 200));

  const formatReadingTime = (val) => {
    if (!val) return `${calculatedReadingTime} min read`;
    const str = String(val).trim();
    if (/min|minute/i.test(str)) return str;
    return `${str} min read`;
  };

  const readingTimeText = formatReadingTime(acfReadingTime);

  // Route in-body content WordPress images through /api/media proxy and parse headings for TOC
  const rawHtml = post.content
    ? post.content.replace(
      /https?:\/\/server\.redmun\.com\/[^\s"']+/gi,
      (matchedUrl) => `/api/media?url=${encodeURIComponent(matchedUrl.replace(/^http:\/\//i, "https://"))}`
    )
    : "";

  const { processedHtml: htmlContent, headings } = processArticleHeadings(rawHtml);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="bg-light-secondary/30 min-h-screen">

      {/* ═══════ 1. DARK ENTERPRISE HERO HEADER ═══════ */}
      <header className="relative bg-dark text-white pt-12 pb-20 overflow-hidden border-b border-border-dark">
        {/* Glow Orbs & Dot Pattern */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand opacity-15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 dot-grid-dark pointer-events-none opacity-60" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Breadcrumb Navigation */}
          <div className="flex items-center justify-between gap-4 mb-8">
            <Link
              href="/blog"
              className="inline-flex items-center text-xs font-bold text-text-muted hover:text-white transition-colors bg-dark-secondary px-3.5 py-1.5 rounded-full border border-border-dark hover:border-brand/40"
            >
              <ArrowLeft className="w-3.5 h-3.5 mr-1.5 text-brand" /> Back to Tech Blog
            </Link>

            <Link
              href={`/blog/category/${category.slug}`}
              className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest bg-brand/15 text-brand px-3.5 py-1.5 rounded-full border border-brand/30 hover:bg-brand hover:text-white transition-colors"
            >
              <Tag className="w-3 h-3" />
              {category.name}
            </Link>
          </div>

          {/* Main Hero Content */}
          <div className="max-w-4xl space-y-6">

            {/* Meta Badges */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-text-muted">
              <span className="inline-flex items-center gap-1.5 bg-dark-tertiary px-3 py-1 rounded-full border border-border-dark text-white font-medium">
                <User className="w-3.5 h-3.5 text-brand" /> Redmun Engineering Team
              </span>
              <span className="inline-flex items-center gap-1.5 bg-dark-tertiary px-3 py-1 rounded-full border border-border-dark">
                <Calendar className="w-3.5 h-3.5 text-primary-light" /> {formattedDate}
              </span>
              <span className="inline-flex items-center gap-1.5 bg-dark-tertiary px-3 py-1 rounded-full border border-border-dark">
                <Clock className="w-3.5 h-3.5 text-brand" /> {readingTimeText}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-snug md:leading-tight">
              {post.title}
            </h1>

            {/* Subtitle / Excerpt Lead */}
            {subTitle && (
              <p className="text-base sm:text-xl text-text-muted leading-relaxed font-normal max-w-3xl">
                {subTitle}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* ═══════ 2. FEATURED IMAGE SHOWCASE ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 mb-16">
        <div className="bg-white rounded-3xl p-3 sm:p-4 border border-border shadow-2xl overflow-hidden">
          {imageUrl && !imgError ? (
            <div className="relative h-72 sm:h-[420px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-dark/5">
              <img
                src={imageUrl}
                alt={altText}
                onError={() => setImgError(true)}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </div>
          ) : (
            <div className="h-64 sm:h-96 w-full rounded-2xl bg-gradient-to-br from-dark via-dark-secondary to-dark-tertiary flex items-center justify-center p-8 text-center relative overflow-hidden border border-border-dark">
              <div className="absolute inset-0 dot-grid-dark opacity-40 pointer-events-none" />
              <div className="space-y-3 relative z-10 max-w-xl">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3 py-1 rounded-full border border-brand/20">
                  Redmun Engineering Technical Paper
                </span>
                <span className="text-2xl font-bold text-white block leading-snug">{post.title}</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ═══════ 3. MAIN ARTICLE LAYOUT (SINGLE LEFT-SIDEBAR GRID) ═══════ */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* ── LEFT COLUMN: STICKY SIDEBAR (TOC + ARTICLE DETAILS) (4 cols) ── */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            
            {/* 1. Table of Contents */}
            {headings.length > 0 && (
              <TableOfContents headings={headings} />
            )}

            {/* 2. Article Details Widget */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-sm space-y-4">
              <h3 className="text-sm font-bold text-dark uppercase tracking-wider border-b border-border pb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-brand" /> Article Details
              </h3>
              <ul className="space-y-3.5 text-xs">
                <li className="flex items-center justify-between py-1.5 border-b border-border-light">
                  <span className="font-semibold text-text-secondary flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-brand" /> Category
                  </span>
                  <Link
                    href={`/blog/category/${category.slug}`}
                    className="font-bold text-brand hover:underline"
                  >
                    {category.name}
                  </Link>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-border-light">
                  <span className="font-semibold text-text-secondary flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-primary" /> Published
                  </span>
                  <span className="text-dark font-medium">{formattedDate}</span>
                </li>
                <li className="flex items-center justify-between py-1.5 border-b border-border-light">
                  <span className="font-semibold text-text-secondary flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-brand" /> Author
                  </span>
                  <span className="text-dark font-medium">
                    {!post.author?.node?.name || post.author?.node?.name.toLowerCase() === "admin"
                      ? "Redmun Engineering Team"
                      : post.author.node.name}
                  </span>
                </li>
                <li className="flex items-center justify-between py-1.5">
                  <span className="font-semibold text-text-secondary flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" /> Reading Time
                  </span>
                  <span className="text-dark font-medium">{readingTimeText}</span>
                </li>
              </ul>
            </div>
          </aside>

          {/* ── RIGHT/MAIN COLUMN: ARTICLE CONTENT & BOTTOM WIDGETS (8 cols) ── */}
          <article className="lg:col-span-8 space-y-8">

            {/* Main Content Body Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-border shadow-sm space-y-6">

              {htmlContent ? (
                <PostContent content={htmlContent} />
              ) : (
                <div className="space-y-6 text-base text-text-secondary leading-relaxed">
                  <p className="text-lg text-dark font-medium leading-relaxed">
                    In high-concurrency enterprise applications, decoupling frontend web nodes from backend database management systems is critical for delivering sub-second page loads and zero-downtime reliability.
                  </p>
                  <p>
                    By deploying Next.js Incremental Static Regeneration (ISR) alongside Headless WordPress API integrations, public traffic queries bypass monolithic server threads during major traffic spikes.
                  </p>
                  <div className="p-6 rounded-2xl bg-dark text-white border border-border-dark my-6 space-y-3">
                    <span className="text-xs font-bold text-brand uppercase tracking-wider block">Engineering Rule</span>
                    <p className="text-sm text-text-muted">
                      Always isolate user-facing interactive elements into Client Components while keeping core layout rendering on the Server (RSC) for maximum SEO indexation and Core Web Vitals performance.
                    </p>
                  </div>
                  <p>
                    Whether managing live 1688 product sourcing feeds, automated customs freight manifests, thermal receipt printer hooks, or real-time breaking news portals, our decoupled architecture ensures 99.9% availability and sub-50ms global latency.
                  </p>
                </div>
              )}

              {/* Share & Actions Footer */}
              <div className="pt-8 mt-8 border-t border-border flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-dark uppercase tracking-wider">Share Article:</span>
                  <button
                    onClick={handleCopyLink}
                    className="inline-flex items-center gap-1.5 text-xs font-bold bg-light hover:bg-brand hover:text-white px-3.5 py-2 rounded-xl border border-border transition-colors text-dark"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    {copied ? "Link Copied!" : "Copy Link"}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs text-text-tertiary">Category:</span>
                  <Link
                    href={`/blog/category/${category.slug}`}
                    className="text-xs font-bold text-brand hover:underline"
                  >
                    {category.name}
                  </Link>
                </div>
              </div>
            </div>

            {/* Author Bio Box */}
            <div className="bg-white rounded-3xl p-8 border border-border shadow-sm flex flex-col sm:flex-row items-center justify-center sm:items-start gap-6 text-center sm:text-left">
              <div className="w-16 h-16 rounded-2xl bg-dark overflow-hidden shrink-0 border border-border-dark shadow-sm flex items-center justify-center p-2">
                <img
                  src="/redmun0-icon.png"
                  alt="Redmun Engineering Team"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h3 className="font-bold text-dark text-lg">Redmun Engineering Team</h3>
                  <span className="bg-brand/10 text-brand text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md">
                    Verified Author
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  Our software architects, logistics specialists, and full-stack developers build enterprise-grade Headless WordPress and Next.js applications for growing businesses across Asia and beyond.
                </p>
              </div>
            </div>

            {/* ── BELOW POST BODY: ADDITIONAL WIDGETS ── */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Request Demo CTA Widget */}
              <div className="bg-dark text-white rounded-3xl p-8 border border-border-dark shadow-xl relative overflow-hidden text-center flex flex-col justify-between">
                <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand opacity-15 rounded-full blur-2xl pointer-events-none" />

                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-brand/15 border border-brand/30 flex items-center justify-center mx-auto text-brand">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white leading-snug">Need a Custom Digital System?</h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    Partner with Redmun Digitech to build automated 1688 sourcing portals, shipping software, or high-performance e-commerce platforms.
                  </p>
                </div>
                <div className="relative z-10 pt-4">
                  <Button variant="brand" size="md" href="/contact" className="w-full justify-center">
                    Request Consultation <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </div>
              </div>

              {/* Quick Browse Categories Widget */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-border shadow-sm space-y-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm font-bold text-dark uppercase tracking-wider border-b border-border pb-3 mb-4">
                    Explore Engineering Topics
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "1688 Sourcing", slug: "1688" },
                      { name: "E-Commerce", slug: "ecommerce" },
                      { name: "Shipping Logistics", slug: "import-business" },
                      { name: "News Editorial", slug: "news-portal" },
                      { name: "Restaurant Tech", slug: "restaurant-tech" },
                      { name: "SEO Schema", slug: "seo" },
                    ].map((tag) => (
                      <Link
                        key={tag.slug}
                        href={`/blog/category/${tag.slug}`}
                        className="text-xs font-semibold bg-light hover:bg-brand hover:text-white px-3 py-1.5 rounded-full border border-border transition-colors text-text-secondary"
                      >
                        {tag.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-text-tertiary pt-4 border-t border-border-light">
                  Browse specialized architectural guides and case studies across core industries.
                </p>
              </div>
            </div>

          </article>

        </div>
      </main>

      {/* ═══════ 4. RELATED TECHNICAL ARTICLES ═══════ */}
      {relatedPosts && relatedPosts.length > 0 && (
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24 space-y-8">
          <div className="sr-item opacity-0 flex justify-between items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-1">
                Keep Reading
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-dark">Related Engineering Writeups</h2>
            </div>
            <Link href="/blog" className="text-xs font-bold text-brand hover:text-dark transition-colors">
              View All Articles <ArrowRight className="w-4 h-4 inline ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((rPost) => (
              <div key={rPost.id || rPost.slug} className="sr-item opacity-0">
                <BlogCard post={rPost} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      )}

      {/* ═══════ 5. CLOSING CTA ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTASection />
      </section>

    </div>
  );
}
