import IndustriesPage from "@/pages/IndustriesPage";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const titleSlug = slug
    ? slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
    : "Solutions";

  return {
    title: `${titleSlug} Solutions | Redmun Digitech`,
    description: `Specialized enterprise ${titleSlug} digital solution engineered by Redmun Digitech.`,
  };
}

export default async function Page({ params }) {
  await params;
  return <IndustriesPage />;
}
