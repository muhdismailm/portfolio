export interface JourneyExperienceItem {
  id: string;
  year: string;
  role: string;
  organization: string;
  orgColor?: string; // e.g. "text-teal-400", "text-amber-400", "text-emerald-400"
  description: string;
  highlights?: string[];
  skills?: string[];
  image: string; // single placeholder image path
  badge?: string;
}

export const journeyTimelineData: JourneyExperienceItem[] = [
  {
    id: "journey-2022-ieee",
    year: "2022",
    role: "Member",
    organization: "IEEE",
    orgColor: "text-[#FF1018]",
    description: "Active member of the IEEE Student Branch, participating in technical workshops, networking sessions, and foundational engineering symposiums.",
    highlights: [
      "Engaged in technical knowledge sharing & peer study circles",
      "Attended regional student development tracks and seminars",
    ],
    skills: ["Networking", "Technical Exploration", "Community"],
    image: "/gallery-placeholder.jpg",
    badge: "Foundation",
  },
  {
    id: "journey-2023-endora",
    year: "2023",
    role: "Coordinator",
    organization: "Endora Tech Fest",
    orgColor: "text-[#FF1018]",
    description: "Organized and coordinated flagship technical events and coding challenges during Endora Tech Fest, managing participant logistics and competition workflows.",
    highlights: [
      "Coordinated hackathons and technical project exhibitions",
      "Managed logistics and schedule across multi-track event stages",
    ],
    skills: ["Event Coordination", "Team Leadership", "Operations"],
    image: "/gallery-placeholder.jpg",
    badge: "Leadership",
  },
  {
    id: "journey-2024-akcssc",
    year: "2024",
    role: "Volunteer",
    organization: "IEEE AKCSSC",
    orgColor: "text-[#FF1018]",
    description: "Served as an active volunteer for the All Kerala Computer Society Student Congress (AKCSSC), supporting delegate registrations, keynote sessions, and technical tracks.",
    highlights: [
      "Facilitated keynote talks and student branch networking sessions",
      "Collaborated with cross-college teams to manage congress activities",
    ],
    skills: ["Volunteer Management", "Public Relations", "IEEE CS"],
    image: "/gallery-placeholder.jpg",
    badge: "Congress",
  },
  {
    id: "journey-2024-tinkerhub",
    year: "2024",
    role: "Outreach Lead",
    organization: "TinkerHub",
    orgColor: "text-[#FF1018]",
    description: "Spearheaded community outreach initiatives at TinkerHub, organizing hands-on coding bootcamps, workshops, and fostering student developer culture.",
    highlights: [
      "Mentored student developers in building their first full-stack projects",
      "Expanded community engagement through technical learning circles",
    ],
    skills: ["Community Building", "Developer Outreach", "Mentorship"],
    image: "/gallery-placeholder.jpg",
    badge: "Outreach",
  },
  {
    id: "journey-2025-vibe",
    year: "2025",
    role: "Mentor",
    organization: "VIBE GECK",
    orgColor: "text-[#FF1018]",
    description: "Serving as mentor for VIBE GECK, guiding students through practical web development, full-stack architectures, hackathon preparation, and real-world project development.",
    highlights: [
      "Mentoring 300+ students in modern web and mobile tech",
      "Conducting code reviews, architectural sessions, and buildathons",
    ],
    skills: ["Technical Mentoring", "Full Stack Guidance", "Architecture"],
    image: "/gallery-placeholder.jpg",
    badge: "Mentorship",
  },
];

// Retain compatibility with legacy ExperienceItem interface if needed
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
    id: "python-intern",
    role: "Python Full Stack Intern",
    company: "SMEC Technologies",
    period: "2025 - Present",
    location: "Kochi, Kerala",
    type: "Internship",
    description: "Developing and practicing full-stack web application development using Python, React.js, and SQL.",
    achievements: [
      "Developed structured, data-driven applications with Python and React.js",
      "Managed relational database schemas, complex SQL queries, and CRUD operations",
      "Utilized Git, VS Code, Postman, and API testing in collaborative agile workflows",
    ],
    skills: ["Python", "React.js", "SQL", "Git", "Postman", "REST APIs"],
  },
  {
    id: "vibe-mentor",
    role: "Mentor & Technical Lead",
    company: "VIBE GECK",
    period: "2024 - 2026",
    location: "Kozhikode, Kerala",
    type: "Leadership",
    description: "Mentoring students in web technologies, mobile development, and coordinating engineering hackathons.",
    achievements: [
      "Mentored 300+ university students in full-stack web and Flutter development",
      "Organized workshops, code labs, and developer bootcamps",
    ],
    skills: ["React", "Python", "Flutter", "Mentorship", "Community"],
  },
];
