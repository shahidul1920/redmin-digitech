import ProductDetailPage from "@/pages/ProductDetailPage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const formattedSlug = slug === "1688-api" ? "1688 API Sourcing" : slug.replace("-", " ");
  
  return {
    title: `${formattedSlug.charAt(0).toUpperCase() + formattedSlug.slice(1)} Platform — Redmun Digitech`,
    description: `Automate supplier pipelines, translations, cargo logs, and pricing matrix parameters.`,
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ProductDetailPage slug={slug} />;
}
