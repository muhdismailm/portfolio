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
    id: "mobile",
    name: "Mobile Development",
    skills: [
      { name: "Flutter", level: "Advanced", icon: "flutter", color: "#02569B" },
      { name: "Dart", level: "Advanced", icon: "dart", color: "#0175C2" },
      { name: "Firebase", level: "Advanced", icon: "firebase", color: "#FFCA28" },
      { name: "Android Studio", level: "Intermediate", icon: "android", color: "#3DDC84" },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    skills: [
      { name: "Python", level: "Advanced", icon: "python", color: "#3776AB" },
      { name: "Django", level: "Advanced", icon: "django", color: "#092E20" },
      { name: "Flask", level: "Advanced", icon: "flask", color: "#FFFFFF" },
      { name: "Node.js", level: "Intermediate", icon: "node", color: "#539E43" },
      { name: "REST APIs", level: "Advanced", icon: "rest", color: "#10B981" },
      { name: "FastAPI", level: "Intermediate", icon: "fastapi", color: "#059669" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend Development",
    skills: [
      { name: "React", level: "Advanced", icon: "react", color: "#61DAFB" },
      { name: "JavaScript", level: "Advanced", icon: "javascript", color: "#F7DF1E" },
      { name: "HTML5", level: "Advanced", icon: "html", color: "#E34F26" },
      { name: "CSS3", level: "Advanced", icon: "css", color: "#1572B6" },
      { name: "Next.js", level: "Intermediate", icon: "next", color: "#FFFFFF" },
      { name: "Tailwind CSS", level: "Advanced", icon: "tailwind", color: "#06B6D4" },
    ],
  },
  {
    id: "database",
    name: "Database & Cloud",
    skills: [
      { name: "SQL", level: "Advanced", icon: "sql", color: "#00758F" },
      { name: "PostgreSQL", level: "Intermediate", icon: "postgresql", color: "#336791" },
      { name: "Firebase Firestore", level: "Advanced", icon: "firebase", color: "#FFCA28" },
      { name: "MongoDB", level: "Intermediate", icon: "mongodb", color: "#47A248" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Workflow",
    skills: [
      { name: "VS Code", level: "Advanced", icon: "vscode", color: "#007ACC" },
      { name: "Figma", level: "Advanced", icon: "figma", color: "#F24E1E" },
      { name: "Git & GitHub", level: "Advanced", icon: "git", color: "#F05032" },
      { name: "Postman", level: "Advanced", icon: "postman", color: "#FF6C37" },
      { name: "Docker", level: "Intermediate", icon: "docker", color: "#2496ED" },
      { name: "Vercel", level: "Advanced", icon: "vercel", color: "#FFFFFF" },
    ],
  },
];
