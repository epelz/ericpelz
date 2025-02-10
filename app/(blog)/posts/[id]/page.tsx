import { siteTitle } from "@/components/header";
import Date from "@/components/date";
import { getAllPostIds, getPostData } from "@/lib/posts";
import classNames from "classnames";

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
  return getAllPostIds().map((id) => ({ id }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postData = await getPostData(id);

  return (
    <article
      className={classNames(
        "prose",
        "max-w-none",
        // Style headings
        "prose-headings:font-semibold",
        "prose-h1:border-b-2",
        "prose-h1:border-b-gray-100",
        // Override to make certain elements more compact
        "prose-headings:mt-2",
        "prose-headings:mb-3",
        "prose-p:my-3",
        "prose-hr:my-0",
        // Override links to match rest of site
        "prose-a:text-blue-800",
        "prose-a:no-underline",
        "prose-a:hover:underline"
      )}
    >
      <h1>{postData.title}</h1>
      <div>
        {/* If this was co-authored, add the full set of authors to the top. */}
        {(postData.otherAuthors || []).length > 0
          ? ["Eric Pelz", ...postData.otherAuthors].join(", ") + " - "
          : ""}
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}
