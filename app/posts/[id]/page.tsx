import Layout, { siteTitle } from "@/components/layout";
import Date from "@/components/date";
import { getAllPostIds, getPostData } from "@/lib/posts";

import utilStyles from "@/styles/utils.module.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const { title } = await getPostData(id);
  return {
    title: `${title} - ${siteTitle}`,
  };
}

export async function generateStaticParams() {
  return getAllPostIds();
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <Layout bioOnFooter title={postData.title || "Eric Pelz"}>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          {/* If this was co-authored, add the full set of authors to the top. */}
          {(postData.otherAuthors || []).length > 0
            ? ["Eric Pelz", ...postData.otherAuthors].join(", ") + " - "
            : ""}
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}
