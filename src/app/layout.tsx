import type { Metadata } from "next";
import { Inter, Space_Grotesk, Great_Vibes } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MobileBottomNav from "@/components/navigation/MobileBottomNav";
import Footer from "@/components/footer/Footer";
import AmbientBackground from "@/components/three/AmbientBackground";
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

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-signature",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhdismailm.dev"),
  title: "Muhammed Ismail M | Software Engineer — AI & Full Stack",
  description:
    "Portfolio of Muhammed Ismail M — Software Engineer specializing in building AI-powered web applications, computer vision pipelines, and full-stack solutions with React, Next.js, TypeScript, and Python.",
  keywords: [
    "Muhammed Ismail M",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Computer Vision",
    "Next.js Developer",
    "React Developer",
    "Python",
    "OpenCV",
    "MediaPipe",
    "TypeScript",
  ],
  authors: [{ name: "Muhammed Ismail M" }],
  openGraph: {
    title: "Muhammed Ismail M | Software Engineer",
    description:
      "Building AI-powered and full-stack applications that solve real-world problems.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/ismail.jpg",
        width: 1024,
        height: 1024,
        alt: "Muhammed Ismail M",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammed Ismail M | Software Engineer",
    description:
      "Building AI-powered and full-stack applications that solve real-world problems.",
    images: ["/ismail.jpg"],
  },
};

import { ThemeProvider } from "@/components/providers/theme-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${greatVibes.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-main)] text-[var(--text-primary)] transition-colors duration-300 selection:bg-[#FF1018]/30 selection:text-white">
        <ThemeProvider>
          <LenisProvider>
            {/* Subtle Ambient Three.js Particles and Glow */}
            <AmbientBackground />

            {/* Top Sticky Glassmorphism Navigation */}
            <Navbar />

            {/* Main Content Area */}
            <div className="flex-1 relative">{children}</div>

            {/* Persistent Footer */}
            <Footer />

            {/* Mobile Bottom Navigation Dock (Section 31) */}
            <MobileBottomNav />
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
