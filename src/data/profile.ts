export interface QuickFact {
  label: string;
  value: string;
  icon: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
}

export interface ProfileData {
  name: string;
  shortName: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  instagram: string;
  resumeUrl: string;
  avatarUrl: string;
  quickFacts: QuickFact[];
  stats: StatItem[];
}

export const profileData: ProfileData = {
  name: "Muhammed Ismail M",
  shortName: "Ismail",
  role: "Python Full Stack & Flutter Developer",
  tagline: "Building AI-integrated web applications, scalable backends, and Flutter mobile apps.",
  bio: "Computer Science and Design graduate with practical experience in Full-stack web development and Mobile app development. Proficient in Python, React, Flutter, and modern web technologies. Experienced in building AI-powered platforms, cloud-based services, and real-time mobile applications.",
  location: "Ernakulam, Kerala, India",
  phone: "7034909286",
  email: "muhammedismailm772@gmail.com",
  github: "https://github.com/muhdismailm",
  linkedin: "https://linkedin.com/in/muhdismailm",
  instagram: "https://instagram.com/muhdismailm",
  resumeUrl: "/resume.pdf",
  avatarUrl: "/ismail.jpg",
  quickFacts: [
    { label: "Education", value: "B.Tech in Computer Science and Design (GECK)", icon: "🎓" },
    { label: "Full Stack", value: "Python, Django, Flask & React.js", icon: "⚡" },
    { label: "Mobile Dev", value: "Flutter, Dart & Firebase", icon: "📱" },
    { label: "Current Role", value: "Python Full Stack Intern at SMEC Technologies", icon: "💼" },
    { label: "Achievements", value: "Winner – Flutter + AI Hackathon 2025", icon: "🏆" },
  ],
  stats: [
    { label: "YEARS EXPERIENCE", value: 1, suffix: "+" },
    { label: "PROJECTS COMPLETED", value: 5, suffix: "+" },
    { label: "HACKATHONS WON", value: 4, suffix: "+" },
    { label: "TECH STACKS", value: 15, suffix: "+" },
  ],
};
