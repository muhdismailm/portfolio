"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Wrench, Mail } from "lucide-react";
import { profileData } from "@/data/profile";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Work", href: "/work", icon: Briefcase },
  { label: "Services", href: "/services", icon: Wrench },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div
        className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between transition-all duration-300 ${
          scrolled ? "backdrop-blur-md bg-[#0a0a0a]/85 border-b border-white/[0.06]" : "bg-transparent"
        }`}
      >
        {/* Brand Name */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity"
        >
          {profileData.shortName || profileData.name}
        </Link>

        {/* Navigation Links (Desktop only, mobile uses MobileBottomNav) */}
        <nav className="hidden md:flex items-center gap-1.5 sm:gap-2.5" aria-label="Main Navigation">
          {navLinks.map(({ label, href, icon: Icon }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname === href ||
                  (href === "/work" && pathname === "/projects") ||
                  pathname?.startsWith(href);

            return (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[#270b0e] border border-[#4a1217] text-[#ff2a38] shadow-[0_0_15px_rgba(255,42,56,0.15)]"
                    : "text-neutral-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                <Icon
                  size={15}
                  className={`transition-colors ${isActive ? "text-[#ff2a38]" : "text-neutral-400"}`}
                />
                <span>{label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
