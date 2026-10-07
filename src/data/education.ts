export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  description: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "btech-csd",
    degree: "Bachelor of Technology in Computer Science and Design",
    institution: "Government Engineering College, Kozhikode (GECK)",
    period: "2022 - 2026",
    grade: "Final Year Student",
    description: "Focused on Full Stack Web Development, Cross-Platform Mobile Apps, AI/ML integrations, and modern UI/UX engineering principles.",
    highlights: [
      "Mentor at VIBE GECK guiding junior students in tech stacks",
      "Winner – Flutter + AI Hackathon 2025",
      "Active participant in IEEE CS and TinkerHub initiatives",
    ],
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Education (Computer Science Stream)",
    institution: "State Board Higher Secondary",
    period: "2020 - 2022",
    grade: "Distinction",
    description: "Focused on Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
    highlights: [
      "Strong foundation in programming & problem solving",
      "Participated in regional technical and STEM exhibitions",
    ],
  },
];
