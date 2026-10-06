"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "interactive";
  redAccentHover?: boolean;
}

export default function BentoCard({
  children,
  className = "",
  variant = "primary",
  redAccentHover = false,
  ...props
}: BentoCardProps) {
  const baseClasses =
    "relative rounded-2xl md:rounded-3xl border transition-all duration-300 overflow-hidden";

  const variantClasses = {
    primary: "bg-[#111111] border-[#242424] hover:border-[#343434] hover:bg-[#151515]",
    secondary: "bg-[#151515] border-[#242424] hover:border-[#343434] hover:bg-[#191919]",
    interactive:
      "bg-[#111111] border-[#242424] hover:border-[#343434] hover:bg-[#161616] cursor-pointer",
  }[variant];

  const redAccentClass = redAccentHover
    ? "hover:border-[#FF1018]/40 hover:shadow-[0_0_25px_rgba(255,16,24,0.12)]"
    : "";

  return (
    <motion.div
      className={`${baseClasses} ${variantClasses} ${redAccentClass} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
