"use client";

import { motion } from "framer-motion";

interface SecondaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function SecondaryButton({
  children,
  href = "#contact",
  onClick,
  className = "",
}: SecondaryButtonProps) {
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
        className={`relative inline-flex items-center gap-2 rounded-full border border-border-light bg-white/5 px-7 py-3.5 text-sm font-semibold text-text transition-all duration-300 hover:border-primary/40 hover:bg-primary/5 hover:shadow-lg hover:shadow-primary/5 ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}
