import type { Metadata } from "next";
import "../styles/global.css";
import Typography from "typography";
import GithubTheme from "typography-theme-github";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { siteTitle } from "../components/layout";

// Syntax highlighting theme, for posts with code blocks
import "highlight.js/styles/mono-blue.css";

export const metadata: Metadata = {
  title: siteTitle,
  description: "Eric Pelz is a software engineer",
  authors: { name: "Eric Pelz" },
  keywords:
    "blog, javascript, typescript, react, simplicity, engineering, coding, product",
  icons: "/favicon.ico",
  // TODO: Opengraph, Twitter
};

//// Typography
// TODO: This is broken!
// Copied from Gatsby blog: inject styles from Typography
// GithubTheme.overrideThemeStyles = () => {
//   return {
//     h2: {
//       borderBottom: `none`,
//     },
//   };
// };
// delete GithubTheme.googleFonts;
// const typography = new Typography(GithubTheme);
// typography.injectStyles();

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
