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
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  quickFacts: QuickFact[];
  stats: StatItem[];
}

export const profileData: ProfileData = {
  name: "Muhammed Ismail M",
  role: "Software Engineer",
  tagline: "Building AI-powered and full-stack applications that solve real-world problems.",
  bio: "I am a passionate Software Engineer and Computer Science student specializing in building high-performance AI-driven web applications, scalable cloud backends, and intuitive user experiences. With expertise across React, Next.js, Python, and Machine Learning libraries, I love transforming complex ideas into elegant digital solutions.",
  location: "India",
  email: "contact@muhdismailm.com",
  github: "https://github.com/muhdismailm",
  linkedin: "https://linkedin.com/in/muhdismailm",
  resumeUrl: "/resume.pdf",
  quickFacts: [
    { label: "Education", value: "Final-year Computer Science Student", icon: "🎓" },
    { label: "Frontend", value: "React & Next.js Specialist", icon: "⚛️" },
    { label: "AI & ML", value: "OpenCV, MediaPipe & TensorFlow", icon: "🧠" },
    { label: "Backend", value: "Python & Node.js Developer", icon: "🐍" },
    { label: "Focus", value: "Real-world Problem Solver", icon: "🚀" },
  ],
  stats: [
    { label: "Projects Completed", value: 18, suffix: "+" },
    { label: "Hackathons", value: 6, suffix: "+" },
    { label: "Technologies Mastered", value: 15, suffix: "+" },
    { label: "Years Experience", value: 3, suffix: "+" },
  ],
};
