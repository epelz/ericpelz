import Link from "next/link";
import Bio from "@/components/bio";
import React from "react";
import Header from "@/components/header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header home={false} />
      <main>{children}</main>
      <div className="pt-2 border-t-2 border-t-gray-100">
        <Bio />
        <div className="pt-2">
          <Link href="/">← Back to home</Link>
        </div>
      </div>
    </>
  );
}
