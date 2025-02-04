import type { Metadata } from "next";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { siteTitle } from "@/components/layout";

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
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="font-sans">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
