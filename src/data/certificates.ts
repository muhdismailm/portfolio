export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  credentialUrl: string;
  icon: string;
  skills: string[];
}

export const certificatesData: CertificateItem[] = [
  {
    id: "cert-ai-ml",
    title: "Deep Learning & Machine Learning Specialization",
    issuer: "Coursera / DeepLearning.AI",
    date: "2025",
    credentialId: "DL-AI-99824",
    credentialUrl: "https://coursera.org/verify/example",
    icon: "🧠",
    skills: ["Python", "TensorFlow", "Neural Networks", "Computer Vision"],
  },
  {
    id: "cert-fullstack",
    title: "Full Stack Web Development with Next.js & React",
    issuer: "Vercel / Meta",
    date: "2024",
    credentialId: "FS-META-44211",
    credentialUrl: "https://meta.com/verify/example",
    icon: "⚛️",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "cert-cloud",
    title: "Cloud Developer & Database Systems",
    issuer: "Google Cloud / Firebase",
    date: "2024",
    credentialId: "GCP-FB-11029",
    credentialUrl: "https://cloud.google.com/verify/example",
    icon: "☁️",
    skills: ["Firebase", "GCP", "NoSQL Databases", "Serverless Architecture"],
  },
];
