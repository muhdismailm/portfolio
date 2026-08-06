import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import LenisProvider from "@/components/providers/lenis-provider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Muhammed Ismail M | Software Engineer",
  description:
    "Building AI-powered and full-stack applications that solve real-world problems. Portfolio of Muhammed Ismail M — Software Engineer specializing in React, Next.js, TypeScript, Python, and AI/ML.",
  keywords: [
    "Muhammed Ismail M",
    "Software Engineer",
    "Full Stack Developer",
    "AI",
    "Machine Learning",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
  ],
  authors: [{ name: "Muhammed Ismail M" }],
  openGraph: {
    title: "Muhammed Ismail M | Software Engineer",
    description:
      "Building AI-powered and full-stack applications that solve real-world problems.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Ismail M | Software Engineer",
    description:
      "Building AI-powered and full-stack applications that solve real-world problems.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
