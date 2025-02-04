import Link from "next/link";
import Bio from "@/components/bio";
import React from "react";

const name = "Eric Pelz";
export const siteTitle = "Eric Pelz";

export default function Layout({
  children,
  home = false,
  bioOnFooter = false,
  title,
}: {
  children?: React.ReactNode;
  home?: boolean;
  bioOnFooter?: boolean;
  title: string;
}) {
  return (
    <div className="max-w-2xl px-1 py-0 mx-auto mt-6 mb-12">
      <header>
        <h1 className="text-5xl font-semibold my-4 pb-1 border-b-2 border-b-gray-100">
          {home ? (
            name
          ) : (
            <Link className="text-inherit" href="/">
              {name}
            </Link>
          )}
        </h1>
      </header>
      <main>{children}</main>
      <>
        {!home && (
          <div className="pt-2 border-t-2 border-t-gray-100">
            <Bio />
            <div className="pt-2">
              <Link href="/">← Back to home</Link>
            </div>
          </div>
        )}
      </>
    </div>
  );
}
