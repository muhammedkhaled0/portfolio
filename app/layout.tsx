import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mrsiny.vercel.app"),

  title: {
    default: "Muhammed Elsiny | Frontend Developer",
    template: "%s | Muhammed Elsiny",
  },

  description:
    "Frontend Developer specializing in Next.js, React, and modern web technologies. Explore my portfolio and projects.",

  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Muhammed Elsiny",
    "Portfolio",
    "Web Developer",
  ],

  authors: [{ name: "Muhammed Elsiny" }],
  creator: "Muhammed Elsiny",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mkelsiny.vercel.app",
    title: "Muhammed Elsiny | Frontend Developer",
    description:
      "Frontend Developer specializing in Next.js, React, and modern web technologies.",
    siteName: "Muhammed Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Muhammed Elsiny | Frontend Developer",
    description:
      "Frontend Developer specializing in Next.js, React, and modern web technologies.",
    images: ["/webImg.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}