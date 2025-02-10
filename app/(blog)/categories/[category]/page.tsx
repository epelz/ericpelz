import { getSortedPostsData, getAllCategoryIds } from "@/lib/posts";
import PostSection from "@/components/post_section";

export async function generateStaticParams() {
  return getAllCategoryIds().map((category) => ({ category }));
}

export default async function Category({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  // Only show the most recent 3 highlighted posts
  const postsData = getSortedPostsData({ category });
  const sectionTitle =
    category === "highlight" ? "Top blog posts" : `Posts about ${category}`;

  return <PostSection sectionTitle={sectionTitle} postsData={postsData} />;
}
