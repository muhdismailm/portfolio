export interface GalleryItem {
  id: string;
  category: string;
  categoryColor?: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  featured?: boolean;
  type?: "tall" | "wide" | "square" | "banner" | "standard";
  link?: string;
  tag?: string;
  accentGradient?: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "ieee-cs-partnership",
    category: "IEEE COMPUTER SOCIETY",
    categoryColor: "text-[#FF1018]",
    title: "Secretary – Partnerships",
    subtitle: "Student & Young Professionals (SYP) Activities",
    description: "Coordinating international student tech partnerships and leadership initiatives across university chapters.",
    image: "/gallery-placeholder.jpg",
    type: "tall",
  },
  {
    id: "ieee-cs-sbc",
    category: "IEEE CS SBC GECK",
    categoryColor: "text-[#FF1018]",
    title: "Founding Chairperson",
    subtitle: "Student Branch Chapter",
    description: "Pioneered student branch chapter, establishing developer workshops, hackathons, and global webinars.",
    image: "/gallery-placeholder.jpg",
    type: "standard",
  },
  {
    id: "academics-standing",
    category: "ACADEMICS",
    categoryColor: "text-[#FF1018]",
    title: "Top 10%",
    subtitle: "of Class • CGPA 7.34",
    description: "Consistent academic excellence with focus on algorithms, distributed computing, and artificial intelligence.",
    image: "/gallery-placeholder.jpg",
    type: "square",
  },
  {
    id: "student-initiatives",
    category: "LEADERSHIP",
    categoryColor: "text-[#FF1018]",
    title: "TinkerHub Co-Lead",
    subtitle: "Tech Community Builder",
    description: "Mentoring 300+ students in hands-on programming, full-stack architectures, and open-source workflows.",
    image: "/gallery-placeholder.jpg",
    type: "square",
  },
  {
    id: "stem-educator",
    category: "STEM EDUCATOR",
    categoryColor: "text-[#FF1018]",
    title: "3+ Years",
    subtitle: "Teaching & Mentorship",
    description: "Delivering practical tech sessions, developer bootcamps, and coaching aspiring software engineers.",
    image: "/gallery-placeholder.jpg",
    type: "tall",
  },
  {
    id: "btech-degree",
    category: "B.TECH",
    categoryColor: "text-[#FF1018]",
    title: "Computer Science & Design",
    subtitle: "Government Engineering College Kozhikode",
    description: "Specialized in user-centric software engineering, computational media, and full-stack architectures.",
    image: "/gallery-placeholder.jpg",
    type: "wide",
  },
  {
    id: "engineering-banner",
    category: "FEATURED EXPERTISE",
    categoryColor: "text-[#FF1018]",
    title: "Engineering Software + Intelligent Systems",
    subtitle: "Full-Stack • Computer Vision • Cloud Architectures",
    description: "Crafting performant AI-driven web systems, scalable backend infrastructure, and intuitive accessibility platforms.",
    image: "/gallery-placeholder.jpg",
    type: "banner",
    featured: true,
  },
  {
    id: "lakshya-tech-head",
    category: "TECH SUMMIT",
    categoryColor: "text-[#FF1018]",
    title: "Technical Head",
    subtitle: "Lakshya National Tech Fest",
    description: "Spearheaded technical operations, digital platforms, and live event systems for 1,500+ participants.",
    image: "/gallery-placeholder.jpg",
    type: "wide",
  },
  {
    id: "alma-mater",
    category: "ALMA MATER",
    categoryColor: "text-[#FF1018]",
    title: "Govt Engineering College Kozhikode",
    subtitle: "Calicut, Kerala • Class of 2022–2026",
    description: "Four years of rigorous engineering education, collaborative research, and active student tech leadership.",
    image: "/gallery-placeholder.jpg",
    type: "wide",
  },
  {
    id: "btech-project-signifyed",
    category: "AI ACCESSIBILITY PROJECT",
    categoryColor: "text-[#FF1018]",
    title: "SignifyEd ISL Engine",
    subtitle: "Multimodal Sign Language Translation",
    description: "Speech-to-text NLP pipeline with MediaPipe keypoint sequence mapping and Three.js 3D avatar animation.",
    image: "/projects/signifyed-workspace.png",
    type: "standard",
  },
  {
    id: "saas-project-labelbee",
    category: "FULL-STACK SAAS",
    categoryColor: "text-[#FF1018]",
    title: "LabelBee Studio",
    subtitle: "AI Document & Print Generator",
    description: "Production SaaS platform with automated print layouts, Razorpay payments, and cloud exports.",
    image: "/projects/labelbee-hero.png",
    type: "standard",
  },
  {
    id: "public-speaking-talks",
    category: "PUBLIC SPEAKING",
    categoryColor: "text-[#FF1018]",
    title: "Leading Conversations",
    subtitle: "Keynotes, Workshops & Tech Panels",
    description: "Speaking on modern web paradigms, applied machine learning, and empowering early-career developers.",
    image: "/gallery-placeholder.jpg",
    type: "wide",
  },
];
