import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import LenisProvider from "@/components/layout/LenisProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Web & Coding Club | NIT Patna",
    template: "%s | WnCC NIT Patna",
  },
  description:
    "A thriving community of builders, coders, and developers at NIT Patna. Explore our teams, events, and projects across Web Dev, Blockchain, Gen AI, Machine Learning, and more.",
  keywords: [
    "WnCC",
    "NIT Patna",
    "Web and Coding Club",
    "coding club",
    "tech community",
    "hackathon",
    "web development",
    "blockchain",
    "AI",
    "machine learning",
  ],
  authors: [{ name: "Web & Coding Club, NIT Patna" }],
  openGraph: {
    title: "Web & Coding Club | NIT Patna",
    description:
      "A thriving community of builders, coders, and developers at NIT Patna.",
    type: "website",
    locale: "en_IN",
    siteName: "WnCC NIT Patna",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web & Coding Club | NIT Patna",
    description:
      "A thriving community of builders, coders, and developers at NIT Patna.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      style={{ colorScheme: "dark" }}
    >
      <body>
        <LenisProvider>
          <Header />
          <div className="min-h-screen">{children}</div>
          <Footer />
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
