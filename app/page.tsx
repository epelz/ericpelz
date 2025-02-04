import Header from "@/components/header";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Bio from "@/components/bio";
import PostSection from "@/components/post_section";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import classNames from "classnames";

export default function Home({ params }: { params: Promise<{}> }) {
  const postsData = getSortedPostsData({ category: "highlight", limit: 3 });

  return (
    <>
      <Header home />
      <main>
        <Bio />
        <SocialIconRow />
        <PostSection sectionTitle="Posts" postsData={postsData}>
          <span>
            See all{" "}
            <Link href="/categories/engineering">engineering posts</Link>. I
            also like to cook, and{" "}
            <Link href="/categories/food">occasionally</Link> post recipes.
          </span>
        </PostSection>
      </main>
    </>
  );
}

function SocialIconRow() {
  return (
    <section
      className={classNames(
        // Container
        "flex",
        "flex-row-reverse",
        "mt-3",
        "pb-2",
        // Bottom border
        "border-b-2",
        "border-b-gray-100",
        // Color for children icons
        "*:hover:text-blue-600",
        "*:text-gray-600",
        "*:pr-1",
        "*:drop-shadow-xs"
      )}
    >
      <a href="https://www.github.com/epelz/">
        <FaGithubAlt size="2em" />
      </a>
      <a href="https://www.linkedin.com/in/epelz/">
        <FaLinkedin size="2em" />
      </a>
    </section>
  );
}
