import Layout, { siteTitle } from "@/components/layout";
import styles from "@/app/page.module.css";
import { getSortedPostsData } from "@/lib/posts";
import Link from "next/link";
import Bio from "@/components/bio";
import PostSection from "@/components/post_section";
import { FaGithubAlt, FaLinkedin, FaTwitter } from "react-icons/fa";

// TODO: More of this can move to layout.tsx
export default function Home({ params }: { params: Promise<{}> }) {
  const postsData = getSortedPostsData({ category: "highlight", limit: 3 });

  return (
    <Layout home title={siteTitle}>
      <Bio />
      <section>
        <h1 className={styles.iconRow}>
          <a className={styles.socialIcon} href="https://www.github.com/epelz/">
            <FaGithubAlt />
          </a>
          <a
            className={styles.socialIcon}
            href="https://www.linkedin.com/in/epelz/"
          >
            <FaLinkedin />
          </a>
        </h1>
      </section>

      <PostSection sectionTitle="Posts" postsData={postsData}>
        <small>
          See all <Link href="/categories/engineering">engineering posts</Link>.
          I also like to cook, and{" "}
          <Link href="/categories/food">occasionally</Link> post recipes.
        </small>
      </PostSection>
    </Layout>
  );
}
