import Layout, { siteTitle } from "../../../components/layout";
import {
  Post,
  getSortedPostsData,
  getAllCategoryIds,
} from "../../../lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";
import { ParsedUrlQuery } from "querystring";
import Bio from "../../../components/bio";
import PostSection from "../../../components/post_section";

export async function generateStaticParams() {
  return getAllCategoryIds();
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

  return (
    <Layout title={siteTitle}>
      <Bio />

      <PostSection sectionTitle={sectionTitle} postsData={postsData} />
    </Layout>
  );
}
