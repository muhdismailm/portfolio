"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Sun, Moon } from "lucide-react";
import { profileData } from "@/data/profile";
import { useTheme } from "@/components/providers/theme-provider";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      {/* Exclusive Glassmorphism Navbar Container */}
      <nav
        className={`w-full max-w-7xl mx-auto flex items-center justify-between px-3.5 sm:px-6 py-2.5 rounded-full transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "backdrop-blur-2xl bg-black/40 dark:bg-black/50 light:bg-white/80 border border-white/15 dark:border-white/15 shadow-[0_12px_40px_rgba(0,0,0,0.5)]"
            : "backdrop-blur-xl bg-white/[0.04] dark:bg-black/30 light:bg-white/70 border border-white/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]"
        }`}
        style={{
          backdropFilter: "blur(18px) saturate(180%)",
          WebkitBackdropFilter: "blur(18px) saturate(180%)",
        }}
        aria-label="Main Navigation"
      >
        {/* Left: Calligraphic Script Signature Name with Gradient Underline */}
        <Link
          href="/"
          className="group flex flex-col items-center justify-center py-0.5 px-2 relative select-none"
          aria-label="Muhammed Ismail - Home"
        >
          <span
            style={{ fontFamily: "var(--font-signature), 'Great Vibes', cursive" }}
            className="text-2xl sm:text-3xl font-normal tracking-wide text-[#FAF8F5] dark:text-[#FAF8F5] light:text-[#181818] transition-all duration-300 group-hover:scale-[1.03] group-hover:text-amber-200 dark:group-hover:text-amber-200 drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
          >
            Muhammed Ismail
          </span>
          {/* Subtle Glowing Gradient Underline (Matching Screenshot) */}
          <div className="h-[1px] w-full max-w-[140px] bg-gradient-to-r from-transparent via-amber-400/60 to-transparent -mt-1 group-hover:via-amber-300 transition-colors" />
        </Link>

        {/* Center: Glass Pill Navigation Links */}
        <div
          className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] dark:bg-black/30 px-1.5 py-1 backdrop-blur-md shadow-inner"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname === link.href ||
                  (link.href === "/projects" && pathname === "/work") ||
                  pathname?.startsWith(link.href);

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`relative px-4 py-1.5 text-xs font-medium tracking-wide transition-all duration-200 rounded-full ${
                  isActive
                    ? "text-white font-bold bg-white/15 dark:bg-white/15 border border-white/20 shadow-sm"
                    : "text-white/65 dark:text-white/65 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Glass Resume Pill Button & Glass Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Glass Resume Button with Red Document Icon */}
          <a
            href={profileData.resumeUrl || "/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] dark:bg-black/30 backdrop-blur-md px-3.5 sm:px-4 py-1.5 text-xs font-semibold text-white transition-all duration-200 hover:border-[#FF1018]/50 hover:bg-[#FF1018]/15 hover:shadow-[0_0_15px_rgba(255,16,24,0.3)]"
          >
            <FileText size={13} className="text-[#FF1018]" />
            <span>Resume</span>
          </a>

          {/* Glass Theme / Sun-Moon Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] dark:bg-black/30 backdrop-blur-md text-white/70 hover:text-[#FF1018] hover:border-white/25 hover:bg-white/10 transition-all"
          >
            {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
