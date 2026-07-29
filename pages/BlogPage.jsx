import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Newspaper,
  ShoppingCart,
  Globe,
  Truck,
  UtensilsCrossed,
  Target,
  Code,
  Calendar,
  Mail,
  Layers,
} from "@/components/Icons";
import Button from "@/components/Button";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import ScrollReveal from "@/components/ScrollReveal";

export default function BlogPage({ categories = [], posts = [] }) {
  // Icon and color map for blog categories
  const categoryMeta = {
    "1688": { Icon: Globe, accent: "brand", desc: "Integrating live 1688 product search feeds, automating translation, and calculating RMB margins." },
    "digital-business": { Icon: Target, accent: "primary", desc: "Building secure, automated administrative workflows to reduce labor hours." },
    "ecommerce": { Icon: ShoppingCart, accent: "brand", desc: "Developing decoupled cart checkout pages, checkout logic, and shipping bridges." },
    "import-business": { Icon: Truck, accent: "primary", desc: "Managing customs manifestations, freight shipping logs, and warehouse databases." },
    "news-portal": { Icon: Newspaper, accent: "brand", desc: "Scaling high-concurrency editorial portals, cache configurations, and ad strategies." },
    "restaurant-tech": { Icon: UtensilsCrossed, accent: "primary", desc: "Thermal POS printer connection setups, low-latency ticketing panels, and ordering." },
    "seo": { Icon: Target, accent: "brand", desc: "Optimizing Next.js metadata structures, static site regeneration speeds, and clean markup." },
    "website": { Icon: Code, accent: "primary", desc: "Full-stack web development patterns, component architecture, and deployment workflows." },
  };

  const defaultMeta = { Icon: BookOpen, accent: "brand", desc: "Read specialized engineering writeups and integration blueprints." };

  // Split posts into featured (first) and grid (rest)
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const gridPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <div className="bg-light-secondary/40">
      
      {/* ═══════ 1. HERO BANNER ═══════ */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="bg-dark text-white rounded-3xl p-8 md:p-16 relative overflow-hidden border border-border-dark shadow-xl">
            {/* Decorative Elements */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary opacity-12 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand opacity-10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-0 dot-grid-dark pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand bg-brand/10 px-3.5 py-1.5 rounded-full border border-brand/20 mb-6">
                <BookOpen className="w-3.5 h-3.5" />
                Redmun Tech Blog
              </span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Blog Articles &{" "}
                <span className="text-gradient-primary">Technical Guides</span>
              </h1>
              <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-2xl">
                Technical documentations, system blueprints, and digital supply guides powered by Headless WordPress & Next.js ISR. Curated by our software developers and logistics architects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ 2. CATEGORIES GRID ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal>
          <div className="sr-item opacity-0 mb-12">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand mb-3">Browse by Topic</span>
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Blog Categories</h2>
            <p className="text-text-secondary text-sm">
              Dynamic categories pulled live from our Headless WP backend, covering every facet of digital enterprise engineering.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal stagger={0.08} scale={true}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => {
              const meta = categoryMeta[cat.slug] || defaultMeta;
              const IconComponent = meta.Icon;
              const accentColor = meta.accent;
              return (
                <div
                  key={cat.id || cat.slug}
                  className={`sr-item opacity-0 bg-white p-6 rounded-2xl border border-border flex flex-col justify-between shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group glow-border-${accentColor} relative overflow-hidden`}
                >
                  {/* Accent top stripe */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-${accentColor}`} />

                  <div>
                    {/* Icon Badge */}
                    <div className={`w-10 h-10 rounded-lg bg-${accentColor}/5 border border-${accentColor}/15 flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-4.5 h-4.5 text-${accentColor}`} />
                    </div>

                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-1">
                      {cat.count !== null && cat.count !== undefined
                        ? `${cat.count} ${cat.count === 1 ? "article" : "articles"}`
                        : "Featured Category"}
                    </span>
                    <h3 className="font-bold text-dark mb-2 text-lg group-hover:text-brand transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed mb-6">{meta.desc}</p>
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
        </ScrollReveal>
      </section>

      {/* ═══════ 3. FEATURED ARTICLE HERO ═══════ */}
      {featuredPost && (
        <ScrollReveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="sr-item opacity-0">
            <div className="mb-12">
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand mb-3">Editor's Pick</span>
              <h2 className="text-2xl md:text-3xl font-bold text-dark">Featured Article</h2>
            </div>
            <FeaturedArticleHero post={featuredPost} />
          </div>
        </ScrollReveal>
      )}

      {/* ═══════ 4. LATEST ARTICLES GRID ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal>
          <div className="sr-item opacity-0 mb-12 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
            <div>
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand mb-3">Recent Insights</span>
              <h2 className="text-2xl md:text-3xl font-bold text-dark mb-2">Latest Articles</h2>
              <p className="text-text-secondary text-sm">
                Read the latest technical writeups from our software developers and logistics architects.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {gridPosts.length > 0 ? (
          <ScrollReveal stagger={0.1} scale={true}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {gridPosts.map((post) => (
                <div key={post.id || post.slug} className="sr-item opacity-0">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </ScrollReveal>
        ) : !featuredPost ? (
          <ScrollReveal>
            <div className="sr-item opacity-0 bg-white rounded-3xl p-16 text-center border border-border space-y-5 shadow-sm">
              <div className="w-16 h-16 rounded-2xl bg-brand/5 border border-brand/15 flex items-center justify-center mx-auto">
                <BookOpen className="w-7 h-7 text-brand" />
              </div>
              <h3 className="text-xl font-bold text-dark">No Articles Published Yet</h3>
              <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                Our engineering team is preparing new technical guides, integration blueprints, and sourcing case studies. Check back soon or subscribe to get notified.
              </p>
              <Button variant="brand" size="md" href="/contact">
                Get Notified <Mail className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </ScrollReveal>
        ) : null}
      </section>

      {/* ═══════ 5. NEWSLETTER SUBSCRIPTION ═══════ */}
      <ScrollReveal className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="sr-item opacity-0 bg-dark text-white rounded-3xl p-8 md:p-12 relative overflow-hidden border border-border-dark text-center">
          <div className="absolute inset-0 dot-grid-dark pointer-events-none" />
          <div className="absolute -top-12 -right-12 w-52 h-52 bg-primary opacity-10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center mx-auto mb-5">
              <Mail className="w-5 h-5 text-brand" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Stay Ahead with Our Tech Updates</h2>
            <p className="text-text-muted text-sm max-w-lg mx-auto mb-8 leading-relaxed">
              Get the latest system blueprints, 1688 sourcing insights, and enterprise integration guides delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Button variant="brand" size="lg" href="/contact" className="flex-1">
                Subscribe for Updates <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* ═══════ 6. CTA SECTION ═══════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <CTASection />
      </section>
    </div>
  );
}


/* ──────────────────────────────────────────────
   Featured Article Hero (inline sub-component)
   ────────────────────────────────────────────── */
function FeaturedArticleHero({ post }) {
  const categoryName = post.categories?.nodes?.[0]?.name || "Articles";
  const categorySlug = post.categories?.nodes?.[0]?.slug || "general";

  const rawImageUrl =
    post.featuredImage?.node?.sourceUrl ||
    post.featuredImage?.node?.mediaItemUrl ||
    post.featuredImage?.sourceUrl ||
    post.extraPostDetails?.subImage?.node?.sourceUrl ||
    null;

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "July 2026";

  const subTitle =
    post.extraPostDetails?.subTitle ||
    post.excerpt?.replace(/<[^>]+>/g, "").slice(0, 200) ||
    "Read the full technical article from our engineering team.";

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block bg-dark rounded-2xl border border-border-dark overflow-hidden group relative shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Panel */}
        <div className="relative h-64 lg:h-auto lg:min-h-[320px] overflow-hidden">
          {rawImageUrl ? (
            <img
              src={rawImageUrl}
              alt={post.title || "Featured article"}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-dark-secondary via-dark to-dark-tertiary flex items-center justify-center">
              <div className="text-center space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand block">Redmun Engineering</span>
                <span className="text-lg font-bold text-white line-clamp-2 px-6">{post.title}</span>
              </div>
            </div>
          )}
          <div className="absolute top-4 left-4">
            <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-white/90 backdrop-blur-md text-brand px-3 py-1 rounded-full border border-border shadow-sm">
              {categoryName}
            </span>
          </div>
        </div>

        {/* Content Panel */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-xs text-text-muted mb-4">
            <Calendar className="w-3.5 h-3.5 text-brand" />
            <span>{formattedDate}</span>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4 group-hover:text-brand transition-colors">
            {post.title}
          </h3>

          <p className="text-sm text-text-muted leading-relaxed mb-6 line-clamp-3">
            {subTitle}
          </p>

          <span className="inline-flex items-center text-sm font-bold text-brand group-hover:translate-x-2 transition-transform duration-300">
            Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
          </span>
        </div>
      </div>
    </Link>
  );
}
