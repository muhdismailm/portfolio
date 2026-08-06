"use client";

import { ArrowUp, Mail } from "lucide-react";
import { profileData } from "@/data/profile";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#030712] border-t border-white/10 pt-12 pb-8 text-slate-400 text-xs">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-4">
          <a href="#home" className="text-xl font-bold font-heading text-white">
            MI<span className="text-primary">.</span>
          </a>
          <span className="text-slate-600">|</span>
          <p>© {new Date().getFullYear()} Muhammed Ismail M. All rights reserved.</p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center space-x-4 font-medium text-slate-300">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
          aria-label="Scroll back to top"
        >
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
