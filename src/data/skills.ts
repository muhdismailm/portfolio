export interface SkillItem {
  name: string;
  level: string;
  icon: string;
  color: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: "Advanced", icon: "⚛️", color: "#61DAFB" },
      { name: "Next.js", level: "Advanced", icon: "▲", color: "#FFFFFF" },
      { name: "TypeScript", level: "Advanced", icon: "TS", color: "#3178C6" },
      { name: "Tailwind CSS", level: "Advanced", icon: "🌊", color: "#06B6D4" },
      { name: "Three.js", level: "Intermediate", icon: "🎲", color: "#FFFFFF" },
      { name: "Framer Motion", level: "Advanced", icon: "✨", color: "#E10098" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "ND", color: "#68A063" },
      { name: "Python", level: "Advanced", icon: "🐍", color: "#3776AB" },
      { name: "Express.js", level: "Advanced", icon: "EX", color: "#FFFFFF" },
      { name: "FastAPI", level: "Intermediate", icon: "⚡", color: "#059669" },
    ],
  },
  {
    id: "ai",
    name: "AI & ML",
    skills: [
      { name: "OpenCV", level: "Advanced", icon: "👁️", color: "#5C3EE8" },
      { name: "MediaPipe", level: "Advanced", icon: "🕸️", color: "#00A6A6" },
      { name: "TensorFlow", level: "Intermediate", icon: "🧠", color: "#FF6F00" },
      { name: "Scikit-Learn", level: "Intermediate", icon: "📊", color: "#F7931E" },
      { name: "NumPy", level: "Advanced", icon: "🧊", color: "#4DABCF" },
      { name: "Pandas", level: "Advanced", icon: "🐼", color: "#EBEBEB" },
    ],
  },
  {
    id: "database",
    name: "Database & Cloud",
    skills: [
      { name: "Firebase", level: "Advanced", icon: "🔥", color: "#FFCA28" },
      { name: "Supabase", level: "Advanced", icon: "⚡", color: "#3ECF8E" },
      { name: "MongoDB", level: "Intermediate", icon: "🍃", color: "#47A248" },
      { name: "PostgreSQL", level: "Intermediate", icon: "🐘", color: "#4169E1" },
    ],
  },
  {
    id: "tools",
    name: "Tools & DevOps",
    skills: [
      { name: "Git", level: "Advanced", icon: "🌱", color: "#F05032" },
      { name: "Docker", level: "Intermediate", icon: "🐳", color: "#2496ED" },
      { name: "Vercel", level: "Advanced", icon: "▲", color: "#FFFFFF" },
      { name: "Postman", level: "Advanced", icon: "🚀", color: "#FF6C37" },
    ],
  },
];
