"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about", active: false },
  { label: "Projects", href: "#projects", active: false },
  { label: "Experience", href: "#experience", active: false },
  { label: "Skills", href: "#skills", active: false },
  { label: "Contact", href: "#contact", active: false },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-12"
        aria-label="Primary navigation"
      >
        {/* Logo */}
        <a
          href="#home"
          className="group relative z-10 flex items-center text-2xl font-bold font-heading tracking-tight"
          aria-label="Home"
        >
          <span className="text-white">MI</span>
          <span className="text-primary font-black">.</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                link.active
                  ? "text-white font-semibold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {link.label}
              {link.active && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute bottom-0 left-2 right-2 h-[2px] bg-primary rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Resume Button */}
        <div className="hidden md:flex items-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-white/20 bg-slate-900/40 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            Resume
            <Download
              size={14}
              className="transition-transform duration-300 group-hover:translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="relative z-10 md:hidden rounded-lg p-2 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`block rounded-lg px-4 py-2.5 text-base font-medium ${
                    link.active
                      ? "text-primary bg-primary/10"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 rounded-full border border-primary/50 bg-primary/20 px-5 py-2.5 text-sm font-medium text-white"
              >
                Resume <Download size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
