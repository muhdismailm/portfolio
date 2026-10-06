"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RedButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: boolean;
  type?: "button" | "submit" | "reset";
  external?: boolean;
}

export default function RedButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  icon = false,
  type = "button",
  external = false,
}: RedButtonProps) {
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-xs rounded-xl gap-1.5",
    md: "px-5 py-2.5 text-sm rounded-xl gap-2",
    lg: "px-6 py-3.5 text-base rounded-2xl gap-2.5",
  }[size];

  const variantClasses = {
    primary:
      "bg-[#FF1018] text-white hover:bg-[#FF2E35] shadow-[0_0_20px_rgba(255,16,24,0.25)] hover:shadow-[0_0_25px_rgba(255,16,24,0.4)] font-medium active:scale-[0.99]",
    secondary:
      "bg-[#151515] border border-[#242424] text-[#F5F5F5] hover:border-[#343434] hover:bg-[#1c1c1c] active:scale-[0.99]",
    ghost:
      "bg-transparent text-[#A1A1A1] hover:text-[#F5F5F5] hover:bg-white/5 active:scale-[0.99]",
  }[variant];

  const combinedClasses = `inline-flex items-center justify-center font-heading transition-all duration-200 select-none ${sizeClasses} ${variantClasses} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={size === "sm" ? 14 : size === "md" ? 16 : 18}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${combinedClasses}`}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group ${combinedClasses}`}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`group ${combinedClasses}`}>
      {content}
    </button>
  );
}
