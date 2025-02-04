import Link from "next/link";
import Bio from "@/components/bio";
import React from "react";

export const siteTitle = "Eric Pelz";

export default function Header({ home = false }: { home?: boolean }) {
  return (
    <header>
      <h1 className="text-5xl font-semibold my-4 pb-1 border-b-2 border-b-gray-100">
        {home ? (
          siteTitle
        ) : (
          <Link className="text-inherit" href="/">
            {siteTitle}
          </Link>
        )}
      </h1>
    </header>
  );
}
