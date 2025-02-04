import Link from "next/link";
import Date from "@/components/date";
import React from "react";
import { Post } from "@/lib/posts";

export default function PostSection({
  sectionTitle,
  postsData,
  children,
}: {
  sectionTitle: string;
  postsData: Post[];
  children?: React.ReactNode;
}) {
  return (
    <section>
      <>
        <h2 className="text-2xl font-semibold my-4">{sectionTitle}</h2>
        <ul className="text-lg">
          {postsData.map(({ id, date, title }) => (
            <li className="mb-5" key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="text-gray-700">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        {children}
      </>
    </section>
  );
}
