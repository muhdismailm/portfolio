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
    id: "btech-cs",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    institution: "University Institute of Technology",
    period: "2022 - 2026",
    grade: "Final Year (GPA: 8.8/10)",
    description: "Specializing in Artificial Intelligence, Software Engineering, Web Technologies, and Data Structures & Algorithms.",
    highlights: [
      "Lead Developer in University AI Research Club",
      "Published project on Real-Time Sign Language Translation",
      "Consistent Academic Top Ranker",
    ],
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Education (Computer Science Stream)",
    institution: "State Board Higher Secondary School",
    period: "2020 - 2022",
    grade: "96.5% Score",
    description: "Focused on Mathematics, Physics, Chemistry, and Computer Science fundamentals.",
    highlights: [
      "School Topper in Computer Science",
      "Winner of Regional Science Exhibition",
    ],
  },
];
