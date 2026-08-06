export interface AchievementItem {
  id: string;
  title: string;
  category: "Hackathon" | "Open Source" | "Award" | "Community";
  date: string;
  description: string;
  icon: string;
  badgeText: string;
}

export const achievementsData: AchievementItem[] = [
  {
    id: "hackathon-winner",
    title: "1st Place — National AI Innovation Hackathon 2025",
    category: "Hackathon",
    date: "2025",
    description: "Built SignifyEd real-time ASL translator under 24 hours, winning top prize out of 120+ competing teams.",
    icon: "🏆",
    badgeText: "1st Winner",
  },
  {
    id: "open-source-contributor",
    title: "Open Source Contributor & Maintainer",
    category: "Open Source",
    date: "2024 - Present",
    description: "Active contributor to popular web and AI developer repositories with 500+ GitHub stars across projects.",
    icon: "⭐",
    badgeText: "500+ Stars",
  },
  {
    id: "best-innovator",
    title: "Best Tech Innovator Award",
    category: "Award",
    date: "2024",
    description: "Recognized by University CS Faculty for outstanding technical contributions and peer mentoring.",
    icon: "🎖️",
    badgeText: "Excellence",
  },
  {
    id: "tech-community-lead",
    title: "AI & Web Developer Community Mentor",
    category: "Community",
    date: "2024 - Present",
    description: "Organized technical workshops and code-alongs teaching React, Next.js, and Python to 300+ students.",
    icon: "👥",
    badgeText: "300+ Mentored",
  },
];
