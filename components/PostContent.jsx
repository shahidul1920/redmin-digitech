import React from "react";
import Image from "next/image";

/**
 * Optimized Headless WordPress Article Body Component.
 * - Preserves all semantic HTML tags (h1-h6, table, ul, ol, blockquote, pre) for maximum SEO indexation.
 * - Intercepts and replaces <img> tags with optimized Next.js <Image> components.
 * - Applies responsive, modern Tailwind CSS styling across all WordPress content nodes.
 */
export default function PostContent({ content, className = "" }) {
  if (!content) return null;

  // Extract and replace <img> tags while preserving HTML sequence
  const imgRegex = /<img\s+([^>]*)\/?>/gi;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = imgRegex.exec(content)) !== null) {
    // Collect preceding HTML segment
    if (match.index > lastIndex) {
      parts.push({
        type: "html",
        content: content.substring(lastIndex, match.index),
      });
    }

    // Parse attributes from the <img> tag
    const attrString = match[1];
    const attribs = {};
    const attrRegex = /([a-z0-9_-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/gi;
    let attrMatch;

    while ((attrMatch = attrRegex.exec(attrString)) !== null) {
      const name = attrMatch[1].toLowerCase();
      const value = attrMatch[2] ?? attrMatch[3] ?? attrMatch[4] ?? "";
      attribs[name] = value;
    }

    parts.push({ type: "image", attribs });
    lastIndex = imgRegex.lastIndex;
  }

  // Collect final trailing HTML segment
  if (lastIndex < content.length) {
    parts.push({
      type: "html",
      content: content.substring(lastIndex),
    });
  }

  return (
    <article
      className={`prose prose-lg dark:prose-invert max-w-none font-sans
        /* Headings */
        [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:font-extrabold [&_h1]:tracking-tight [&_h1]:text-slate-900 dark:[&_h1]:text-white [&_h1]:mt-10 [&_h1]:mb-6 [&_h1]:pb-3 [&_h1]:border-b [&_h1]:border-slate-200 dark:[&_h1]:border-slate-800
        [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:pb-2 [&_h2]:border-b [&_h2]:border-slate-200 dark:[&_h2]:border-slate-800
        [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-slate-900 dark:[&_h3]:text-white [&_h3]:mt-8 [&_h3]:mb-3
        [&_h4]:text-lg [&_h4]:sm:text-xl [&_h4]:font-semibold [&_h4]:tracking-tight [&_h4]:text-slate-900 dark:[&_h4]:text-white [&_h4]:mt-6 [&_h4]:mb-2
        [&_h5]:text-base [&_h5]:font-semibold [&_h5]:text-slate-900 dark:[&_h5]:text-white [&_h5]:mt-4 [&_h5]:mb-2
        [&_h6]:text-sm [&_h6]:font-semibold [&_h6]:text-slate-500 dark:[&_h6]:text-slate-400 [&_h6]:mt-4 [&_h6]:mb-2

        /* Paragraphs */
        [&_p]:text-base [&_p]:sm:text-lg [&_p]:text-slate-700 dark:[&_p]:text-slate-300 [&_p]:leading-relaxed [&_p]:mb-6

        /* Lists */
        [&_ul]:list-disc [&_ul]:list-outside [&_ul]:pl-6 [&_ul]:space-y-2.5 [&_ul]:my-6 [&_ul]:text-slate-700 dark:[&_ul]:text-slate-300
        [&_ol]:list-decimal [&_ol]:list-outside [&_ol]:pl-6 [&_ol]:space-y-2.5 [&_ol]:my-6 [&_ol]:text-slate-700 dark:[&_ol]:text-slate-300
        [&_li]:leading-relaxed
        [&_li_ul]:my-2 [&_li_ol]:my-2

        /* Tables (Responsive & Styled) */
        [&_table]:w-full [&_table]:my-8 [&_table]:border-collapse [&_table]:text-sm [&_table]:rounded-2xl [&_table]:overflow-hidden [&_table]:border [&_table]:border-slate-200 dark:[&_table]:border-slate-800 [&_table]:shadow-sm
        [&_thead]:bg-slate-100 dark:[&_thead]:bg-slate-800/80 [&_thead]:text-slate-900 dark:[&_thead]:text-white [&_thead]:font-bold [&_thead]:border-b [&_thead]:border-slate-200 dark:[&_thead]:border-slate-700
        [&_th]:px-4 [&_th]:py-3.5 [&_th]:sm:px-6 [&_th]:sm:py-4 [&_th]:text-left [&_th]:font-bold [&_th]:text-slate-900 dark:[&_th]:text-white [&_th]:text-xs [&_th]:uppercase [&_th]:tracking-wider
        [&_td]:px-4 [&_td]:py-3.5 [&_td]:sm:px-6 [&_td]:sm:py-4 [&_td]:border-b [&_td]:border-slate-100 dark:[&_td]:border-slate-800/60 [&_td]:text-slate-700 dark:[&_td]:text-slate-300
        [&_tr:hover]:bg-slate-50/80 dark:[&_tr:hover]:bg-slate-800/40 [&_tr]:transition-colors

        /* Blockquotes */
        [&_blockquote]:border-l-4 [&_blockquote]:border-indigo-600 dark:[&_blockquote]:border-indigo-500 [&_blockquote]:bg-indigo-50/60 dark:[&_blockquote]:bg-slate-800/50 [&_blockquote]:p-5 [&_blockquote]:sm:p-6 [&_blockquote]:my-8 [&_blockquote]:rounded-r-2xl [&_blockquote]:italic [&_blockquote]:text-slate-800 dark:[&_blockquote]:text-slate-200 [&_blockquote]:font-medium [&_blockquote]:shadow-sm
        [&_cite]:block [&_cite]:mt-2 [&_cite]:text-xs [&_cite]:font-semibold [&_cite]:not-italic [&_cite]:text-indigo-600 dark:[&_cite]:text-indigo-400

        /* Code Blocks & Pre */
        [&_pre]:bg-slate-900 [&_pre]:text-slate-100 [&_pre]:p-5 [&_pre]:rounded-2xl [&_pre]:overflow-x-auto [&_pre]:my-6 [&_pre]:font-mono [&_pre]:text-sm [&_pre]:shadow-lg [&_pre]:border [&_pre]:border-slate-800
        [&_code]:bg-slate-100 dark:[&_code]:bg-slate-800 [&_code]:text-indigo-600 dark:[&_code]:text-indigo-300 [&_code]:px-2 [&_code]:py-0.5 [&_code]:rounded-md [&_code]:font-mono [&_code]:text-sm

        /* Links */
        [&_a]:text-indigo-600 dark:[&_a]:text-indigo-400 [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-indigo-300 dark:[&_a]:decoration-indigo-600 hover:[&_a]:decoration-indigo-600 transition-colors

        /* Figures & Captions */
        [&_figure]:my-8 [&_figure]:text-center
        [&_figcaption]:text-xs [&_figcaption]:text-slate-500 dark:[&_figcaption]:text-slate-400 [&_figcaption]:italic [&_figcaption]:mt-2

        /* Horizontal Rule */
        [&_hr]:my-10 [&_hr]:border-t [&_hr]:border-slate-200 dark:[&_hr]:border-slate-800
        ${className}`}
    >
      {parts.map((part, idx) => {
        if (part.type === "html") {
          return (
            <div
              key={idx}
              className="overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: part.content }}
            />
          );
        }

        if (part.type === "image") {
          const { src, alt, width, height, class: imgClass, className: imgClassName } = part.attribs;
          if (!src) return null;

          const parsedWidth = width ? parseInt(width, 10) : null;
          const parsedHeight = height ? parseInt(height, 10) : null;
          const hasValidDimensions =
            parsedWidth && !isNaN(parsedWidth) && parsedHeight && !isNaN(parsedHeight);

          const imgWidth = hasValidDimensions ? parsedWidth : 1200;
          const imgHeight = hasValidDimensions ? parsedHeight : 675;
          const customClass = imgClass || imgClassName || "";

          return (
            <span key={idx} className="block my-8 overflow-hidden rounded-2xl shadow-md border border-slate-200 dark:border-slate-800">
              <Image
                src={src}
                alt={alt || "Article content image"}
                width={imgWidth}
                height={imgHeight}
                className={`w-full h-auto object-cover transition-shadow duration-300 hover:shadow-lg ${customClass}`}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
                loading="lazy"
                quality={85}
              />
            </span>
          );
        }

        return null;
      })}
    </article>
  );
}
