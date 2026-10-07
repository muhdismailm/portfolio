"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#070707] border-t border-[#242424] pt-8 pb-24 md:pb-8 text-[#A1A1A1] text-xs">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-3 text-center sm:text-left">
          <Link href="/" className="text-xl font-black font-heading text-white">
            MI<span className="text-[#FF1018]">.</span>
          </Link>
          <span className="text-[#333333]">|</span>
          <p className="text-[#6B6B6B]">
            © {new Date().getFullYear()} Muhammed Ismail M.
          </p>
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
