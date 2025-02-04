import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { siteTitle } from "@/components/header";

import "@/app/globals.css";

export const metadata: Metadata = {
  title: siteTitle,
  description: "Eric Pelz is a software engineer",
  authors: { name: "Eric Pelz" },
  keywords:
    "blog, javascript, typescript, react, simplicity, engineering, coding, product",
  icons: "/favicon.ico",
  // TODO: Opengraph, Twitter
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body>
        <div className="max-w-2xl px-1 py-0 mx-auto mt-6 mb-12">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
