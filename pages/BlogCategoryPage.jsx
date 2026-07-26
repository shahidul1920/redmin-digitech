import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen } from "@/components/Icons";
import BlogCard from "@/components/BlogCard";
import CTASection from "@/components/CTASection";

export default function BlogCategoryPage({ category, posts, categories }) {
  const categoryTitle = category ? category.name : "Blog Category";
  const postCount = posts ? posts.length : 0;

  return (
    <div className="bg-light-secondary/40 py-12">
      {/* 1. Category Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="mb-6">
          <Link
            href="/blog"
            className="inline-flex items-center text-xs font-bold text-brand hover:text-dark transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-1.5" /> Back to All Articles
          </Link>
        </div>

        <div className="bg-dark text-white rounded-3xl p-8 md:p-14 relative overflow-hidden border border-border-dark shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block">
              Blog Category Archive ({postCount} {postCount === 1 ? "Article" : "Articles"})
            </span>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              {categoryTitle}
            </h1>
            <p className="text-text-muted text-sm md:text-base leading-relaxed">
              Explore specialized technical writeups, architecture blueprints, and integration guides under {categoryTitle}.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Category Nav Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 overflow-x-auto pb-2">
        <div className="flex items-center gap-2 min-w-max">
          <Link
            href="/blog"
            className="px-4 py-2 text-xs font-bold rounded-full bg-white border border-border text-text-secondary hover:text-dark hover:border-brand transition-colors"
          >
            All Articles
          </Link>
          {categories &&
            categories.map((cat) => {
              const isSelected = category && category.slug === cat.slug;
              return (
                <Link
                  key={cat.id || cat.slug}
                  href={`/blog/category/${cat.slug}`}
                  className={`px-4 py-2 text-xs font-bold rounded-full border transition-all ${
                    isSelected
                      ? "bg-brand text-white border-brand shadow-sm"
                      : "bg-white text-text-secondary border-border hover:text-dark hover:border-brand"
                  }`}
                >
                  {cat.name}
                </Link>
              );
            })}
        </div>
      </section>

      {/* 3. Posts Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id || post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-border shadow-sm space-y-4">
            <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-dark">Articles Coming Soon</h3>
            <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
              We are currently publishing new engineering documentation for {categoryTitle}. Check back shortly or view our main technical articles.
            </p>
            <div className="pt-2">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-brand text-white text-xs font-bold hover:bg-brand/90 transition-colors"
              >
                Browse All Technical Guides
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* 4. CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </div>
  );
}
