export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    id: "ai-engineer-intern",
    role: "AI & Full Stack Developer Intern",
    company: "Tech Solutions Inc.",
    period: "2025 - Present",
    location: "Remote / Hybrid",
    type: "Internship",
    description: "Architected and delivered AI-powered computer vision and web solutions for client enterprise applications.",
    achievements: [
      "Engineered real-time MediaPipe and OpenCV gesture tracking features reducing processing latency by 35%",
      "Developed responsive Next.js frontend interfaces consumed by thousands of monthly active users",
      "Optimized REST APIs and PostgreSQL database queries for faster response times",
    ],
    skills: ["Next.js", "Python", "OpenCV", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  {
    id: "frontend-developer-freelance",
    role: "Freelance Software Engineer",
    company: "Self-Employed",
    period: "2024 - 2025",
    location: "Remote",
    type: "Freelance",
    description: "Built custom web applications, SaaS MVPs, and e-commerce solutions for global clients.",
    achievements: [
      "Designed and deployed 10+ client websites with 98+ Lighthouse performance scores",
      "Integrated payment gateways (Stripe, UPI) and automated email invoice workflows",
      "Collaborated directly with founders to deliver full-stack MVPs from scratch",
    ],
    skills: ["React", "Next.js", "Firebase", "Stripe", "Framer Motion", "Tailwind CSS"],
  },
];
