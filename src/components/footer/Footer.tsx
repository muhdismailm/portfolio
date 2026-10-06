"use client";

import Link from "next/link";
import { ArrowUp, Heart, Terminal } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-[#242424] pt-12 pb-24 md:pb-12 text-[#A1A1A1] text-xs">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <Link href="/" className="text-xl font-black font-heading text-white">
            MI<span className="text-[#FF1018]">.</span>
          </Link>
          <span className="hidden sm:inline text-[#333333]">|</span>
          <p className="text-[#6B6B6B]">
            © {new Date().getFullYear()} Muhammed Ismail M. Built with Next.js & Red Bento Aesthetics.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-medium text-[#A1A1A1]">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/work" className="hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/services" className="hover:text-white transition-colors">
            Services
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            Contact
          </Link>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-[#242424] text-white hover:border-[#FF1018]/50 hover:bg-[#151515] transition-all duration-200"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp size={13} className="text-[#FF1018]" />
        </button>
      </div>
    </footer>
  );
}
