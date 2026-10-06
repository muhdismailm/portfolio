"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Milestone, User, Mail } from "lucide-react";

const mobileLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: Briefcase },
  { label: "Experience", href: "/experience", icon: Milestone },
  { label: "About", href: "/about", icon: User },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[var(--bg-main)]/95 backdrop-blur-xl border-t border-[var(--border-color)] px-3 pt-2 pb-[calc(env(safe-area-inset-bottom)+0.6rem)]">
      <nav className="flex items-center justify-around max-w-md mx-auto" aria-label="Mobile Navigation">
        {mobileLinks.map((item) => {
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href ||
                (item.href === "/projects" && pathname === "/work") ||
                pathname?.startsWith(item.href);

          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center py-1 px-3 min-w-[56px] rounded-xl transition-all duration-200 ${
                isActive
                  ? "text-[#FF1018]"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              <div className="relative">
                <Icon
                  size={19}
                  className={`transition-transform duration-200 ${
                    isActive ? "scale-110" : ""
                  }`}
                />
                {isActive && (
                  <span className="absolute -top-1 -right-1 h-1.5 w-1.5 rounded-full bg-[#FF1018] shadow-[0_0_6px_#FF1018]" />
                )}
              </div>
              <span
                className={`text-[10px] mt-1 font-medium tracking-tight ${
                  isActive ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-muted)]"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
