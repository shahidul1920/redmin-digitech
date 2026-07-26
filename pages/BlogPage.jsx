import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen } from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";

export default function BlogPage({ categories = [], posts = [] }) {
  // Static description map for categories
  const categoryDescriptions = {
    "1688": "Integrating live 1688 product search feeds, automating translation, and calculating RMB margins.",
    "digital-business": "Building secure, automated administrative workflows to reduce labor hours.",
    "ecommerce": "Developing decoupled cart checkout pages, checkout logic, and shipping bridges.",
    "import-business": "Managing customs manifestations, freight shipping logs, and warehouse databases.",
    "news-portal": "Scaling high-concurrency editorial portals, cache configurations, and ad strategies.",
    "restaurant-tech": "Thermal POS printer connection setups, low-latency ticketing panels, and ordering.",
    "seo": "Optimizing Next.js metadata structures, static site regeneration speeds, and clean markup.",
  };

  return (
    <div className="bg-light-secondary/40 py-12">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-xl">
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand block mb-4">
              Redmun Headless Tech Blog
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Blog Articles & Sourcing Guides
            </h1>
            <p className="text-text-muted text-base md:text-lg leading-relaxed">
              Technical documentations, system blueprints, and digital supply guides powered by Headless WordPress & Next.js ISR.
            </p>
          </div>
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary opacity-15 rounded-full blur-3xl" />
        </div>
      </section>

      {/* 2. Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Blog Categories</h2>
          <p className="text-text-secondary text-sm">
            Browse dynamic categories pulled live from our Headless WP backend.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const desc =
              categoryDescriptions[cat.slug] ||
              "Read specialized engineering writeups and integration blueprints.";
            return (
              <div
                key={cat.id || cat.slug}
                className="bg-white p-6 rounded-2xl border border-border flex flex-col justify-between shadow-sm hover:shadow-md transition-all group"
              >
                <div>
                  <span className="text-[10px] font-bold text-brand uppercase tracking-wider block mb-1">
                    {cat.count !== null && cat.count !== undefined
                      ? `${cat.count} ${cat.count === 1 ? "article" : "articles"}`
                      : "Featured Category"}
                  </span>
                  <h3 className="font-bold text-dark mb-2 text-lg group-hover:text-brand transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-text-secondary leading-relaxed mb-6">{desc}</p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  href={`/blog/category/${cat.slug}`}
                  className="justify-start pl-0 text-brand text-xs font-bold"
                >
                  Explore Category <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Featured Articles List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Latest Insights</h2>
            <p className="text-text-secondary text-sm">
              Read the latest technical writeups from our software developers and logistics architects.
            </p>
          </div>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id || post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-12 text-center border border-border space-y-4">
            <BookOpen className="w-10 h-10 text-brand mx-auto" />
            <h3 className="text-lg font-bold text-dark">No Articles Published Yet</h3>
            <p className="text-xs text-text-secondary max-w-sm mx-auto">
              Our engineering team is preparing new technical guides. Check back soon!
            </p>
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
