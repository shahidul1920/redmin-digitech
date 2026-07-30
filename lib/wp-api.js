const WP_GRAPHQL_URL = "https://server.redmun.com/graphql";

/**
 * Generic helper to execute WP GraphQL queries with Next.js revalidation
 */
export async function fetchGraphQL(query, variables = {}, revalidate = 60) {
  try {
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: {
        revalidate: process.env.NODE_ENV === "development" ? 0 : revalidate,
      },
    };

    const res = await fetch(WP_GRAPHQL_URL, fetchOptions);

    if (!res.ok) {
      console.error(`GraphQL fetch failed with status: ${res.status}`);
      return null;
    }

    const json = await res.json();
    if (json.errors) {
      console.error("GraphQL errors returned:", json.errors);
    }
    return json.data;
  } catch (error) {
    console.error("Fetch error connecting to WP GraphQL:", error);
    return null;
  }
}

/**
 * Fetch all categories from Headless WP
 */
export async function getCategories() {
  const query = `
    query GetRedmunCategories {
      categories {
        nodes {
          id
          name
          slug
          count
        }
      }
    }
  `;

  const data = await fetchGraphQL(query, {}, 60);
  if (!data || !data.categories || !data.categories.nodes) {
    return [
      { id: "1688", name: "1688", slug: "1688", count: 1 },
      { id: "news-portal", name: "News Portal", slug: "news-portal", count: 1 },
      { id: "ecommerce", name: "Ecommerce", slug: "ecommerce", count: 1 },
      { id: "seo", name: "SEO", slug: "seo", count: 1 },
      { id: "website", name: "Website", slug: "website", count: 1 },
      { id: "digital-business", name: "Digital Business", slug: "digital-business", count: 1 },
      { id: "import-business", name: "Import Business", slug: "import-business", count: 1 },
      { id: "restaurant-tech", name: "Restaurant Tech", slug: "restaurant-tech", count: 1 },
    ];
  }

  // Filter out 'Uncategorized' if present
  return data.categories.nodes.filter((cat) => cat.slug !== "uncategorized");
}

/**
 * Fetch all posts with custom ACF details & category nodes
 */
export async function getAllPosts(first = 50) {
  const query = `
    query GetAllPosts($first: Int) {
      posts(first: $first) {
        nodes {
          id
          databaseId
          title
          slug
          date
          excerpt
          content
          categories {
            nodes {
              id
              name
              slug
            }
          }
          featuredImage {
            node {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          extraPostDetails {
            subTitle
            extended
            readingTime
          }
        }
      }
    }
  `;

  const data = await fetchGraphQL(query, { first }, 60);
  if (!data || !data.posts || !data.posts.nodes) {
    return [];
  }
  return data.posts.nodes;
}

/**
 * Fetch posts filtered by category slug
 */
export async function getPostsByCategory(categorySlug) {
  if (!categorySlug) return [];
  const targetSlug = categorySlug.toLowerCase().trim();

  // Fetch all posts and filter by category slug/name matching
  const allPosts = await getAllPosts(50);
  return allPosts.filter((post) =>
    post.categories?.nodes?.some(
      (c) => c.slug.toLowerCase() === targetSlug || c.name.toLowerCase() === targetSlug
    )
  );
}

/**
 * Fetch a single post by slug for single article pages
 */
export async function getPostBySlug(slug) {
  if (!slug) return null;

  const decodedSlug = decodeURIComponent(slug);
  const encodedSlug = encodeURI(decodedSlug);

  // 1. Try querying single post by SLUG via GraphQL
  const query = `
    query GetPostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        databaseId
        title
        slug
        date
        excerpt
        content
        categories {
          nodes {
            id
            name
            slug
          }
        }
        featuredImage {
          node {
            sourceUrl
            mediaItemUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        extraPostDetails {
          subTitle
          extended
          readingTime
        }
        # Commented fields for now (enable when WP plugins are active):
        # seo {
        #   title
        #   metaDesc
        #   canonical
        #   opengraphTitle
        #   opengraphDescription
        #   opengraphImage {
        #     sourceUrl
        #   }
        # }
        # articleMetadata {
        #   subheading
        #   authorSubtitle
        #   estimatedReadTime
        #   mainImageSourceInfo
        # }
      }
    }
  `;

  // Try with decoded slug first
  let data = await fetchGraphQL(query, { id: decodedSlug }, 60);
  if (data && data.post) {
    return data.post;
  }

  // Try with encoded slug
  data = await fetchGraphQL(query, { id: encodedSlug }, 60);
  if (data && data.post) {
    return data.post;
  }

  // 2. Fallback: match post from getAllPosts list (handles unicode Bengali slugs reliably)
  const allPosts = await getAllPosts(50);
  const found = allPosts.find((p) => {
    if (!p.slug) return false;
    const pSlugDecoded = decodeURIComponent(p.slug);
    return (
      p.slug === slug ||
      p.slug === encodedSlug ||
      pSlugDecoded === decodedSlug ||
      p.title === decodedSlug
    );
  });

  return found || null;
}
