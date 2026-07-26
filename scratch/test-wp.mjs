import { getCategories, getAllPosts } from "../lib/wp-api.js";

async function main() {
  console.log("Fetching categories...");
  const cats = await getCategories();
  console.log("Categories:", cats);

  console.log("Fetching posts...");
  const posts = await getAllPosts();
  console.log("Posts count:", posts.length);
  if (posts.length > 0) {
    console.log("Sample post:", JSON.stringify(posts[0], null, 2));
  }
}

main();
