"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function PrimaryButton({
  children,
  href = "#projects",
  onClick,
  className = "",
}: PrimaryButtonProps) {
  const Component = href ? "a" : "button";

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-block"
    >
      <Component
        href={href || undefined}
        onClick={onClick}
        className={`group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:bg-primary-light ${className}`}
      >
        {/* Shimmer overlay */}
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
        <span className="relative z-10">{children}</span>
        <ArrowRight
          size={16}
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
        />
      </Component>
    </motion.div>
  );
}
