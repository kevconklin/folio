import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  alternates: {
    types: { "application/rss+xml": `${SITE_URL}/feed.xml` },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link href="/" className="site-name">
            {SITE_NAME}
          </Link>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/blog/">Blog</Link>
            <Link href="/about/">About</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          © {new Date().getFullYear()} Kevin Conklin · <a href={`${SITE_URL}/feed.xml`}>RSS</a>
        </footer>
      </body>
    </html>
  );
}
