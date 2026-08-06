export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: "AI" | "Web" | "Mobile";
  description: string;
  fullDescription: string;
  thumbnail: string;
  gallery: string[];
  techStack: string[];
  features: string[];
  challenges: string;
  solutions: string;
  architecture: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "labelbee",
    title: "LabelBee",
    subtitle: "AI-Powered Name Slip Generator with Payments",
    category: "AI",
    description: "An AI-powered generator for custom name slips and stickers with automated payment integration and instant PDF export.",
    fullDescription: "LabelBee transforms personalized sticker and name slip creation by leveraging AI layout algorithms. Users can input customized school, subject, and student details, select stylized templates, process seamless transactions via payment gateways, and download high-resolution print-ready PDFs in seconds.",
    thumbnail: "🏷️",
    gallery: ["🏷️", "💳", "📄", "🎨"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PDFKit", "Node.js"],
    features: [
      "AI-assisted custom theme and font styling engine",
      "Seamless payment integration with instant webhooks",
      "Vector-sharp PDF export for physical printing",
      "Real-time live interactive print canvas preview",
    ],
    challenges: "Generating pixel-exact PDF documents for print while maintaining fast client preview performance across mobile viewports.",
    solutions: "Implemented serverless PDF rendering with cached template buffers and dynamic canvas client previews.",
    architecture: "Next.js App Router front end communicating with serverless Node API routes and webhook event processors.",
    githubUrl: "https://github.com/muhdismailm/labelbee",
    liveUrl: "https://labelbee.vercel.app",
    featured: true,
  },
  {
    id: "signifyed",
    title: "SignifyEd",
    subtitle: "Real-time AI Sign Language Learning & Recognition Platform",
    category: "AI",
    description: "An intelligent computer vision platform that translates sign language gestures into text and speech in real-time.",
    fullDescription: "SignifyEd breaks communication barriers by providing interactive sign language lessons powered by real-time computer vision models. Users can practice American Sign Language (ASL) gestures directly via webcam with immediate landmark tracking and accuracy evaluation.",
    thumbnail: "🤟",
    gallery: ["🤟", "📷", "🤖", "📈"],
    techStack: ["React", "Python", "MediaPipe", "OpenCV", "TensorFlow", "Tailwind CSS"],
    features: [
      "Real-time 21-point hand landmark tracking via MediaPipe",
      "Deep learning neural network for gesture classification",
      "Interactive gamified learning modules and quizzes",
      "Sub-50ms inference latency for smooth webcam video",
    ],
    challenges: "Achieving high accuracy across varying camera angles, skin tones, and lighting environments without sacrificing frame rates.",
    solutions: "Normalized 3D hand coordinates and optimized lightweight mobile net architectures for browser inference.",
    architecture: "React web client with MediaPipe WASM runtime running local inference models on WebGL hardware acceleration.",
    githubUrl: "https://github.com/muhdismailm/signifyed",
    liveUrl: "https://signifyed.vercel.app",
    featured: true,
  },
  {
    id: "student-portal",
    title: "Student Portal",
    subtitle: "Smart Academic Management & AI Attendance Assistant",
    category: "Web",
    description: "A comprehensive university student portal featuring AI attendance insights, exam schedules, and grade analytics.",
    fullDescription: "The Student Portal consolidates academic workflows into a centralized, modern dashboard. Students can view real-time grade distributions, track attendance thresholds with predictive alerts, and access AI-generated study recommendations.",
    thumbnail: "🎓",
    gallery: ["🎓", "📊", "📅", "🔔"],
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Recharts", "Prisma"],
    features: [
      "Real-time attendance predictive alerts & safety margin calculator",
      "Interactive academic transcript and GPA projection chart",
      "Course registration management & syllabus downloads",
      "Dark mode glassmorphism UI built for speed",
    ],
    challenges: "Managing real-time synchronization of large datasets while providing fast initial page renders.",
    solutions: "Utilized Next.js Server Components with Supabase row-level security and incremental static revalidation.",
    architecture: "Next.js App Router, Supabase PostgreSQL, Prisma ORM, and automated edge functions.",
    githubUrl: "https://github.com/muhdismailm/student-portal",
    liveUrl: "https://student-portal.demo.com",
    featured: true,
  },
  {
    id: "peerpay",
    title: "PeerPay",
    subtitle: "Decentralized Peer-to-Peer Split & Payment Mobile Web App",
    category: "Mobile",
    description: "A fast, frictionless mobile-first expense splitting app with automatic currency conversion and instant receipts.",
    fullDescription: "PeerPay simplifies group expense splitting and peer settlement. Designed specifically for mobile viewports, users can scan receipts, split bill items proportionally, and settle up via instant payment deep links.",
    thumbnail: "💸",
    gallery: ["💸", "📱", "🧾", "⚡"],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Firebase", "PWA"],
    features: [
      "OCR receipt scanning for automatic itemized expense splitting",
      "Instant group balances with optimized minimum debt settlement math",
      "Mobile PWA with offline caching and biometric unlock",
      "Deep link UPI and QR payment integration",
    ],
    challenges: "Minimizing payment settlement transactions within large group trips.",
    solutions: "Engineered a graph simplification algorithm that reduces multi-person debt cycles to minimal direct payments.",
    architecture: "React PWA client with Firebase Firestore real-time listeners and Cloud Functions.",
    githubUrl: "https://github.com/muhdismailm/peerpay",
    liveUrl: "https://peerpay.app",
    featured: true,
  },
];
