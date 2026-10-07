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
    id: "signifyed",
    title: "SignifyEd",
    subtitle: "AI-powered Indian Sign Language accessibility platform",
    category: "AI",
    description: "An accessibility-focused platform that converts text, audio, and video inputs into Indian Sign Language representations. It combines AI, computer vision, and 3D avatar technologies to make digital content more accessible.",
    fullDescription: "SignifyEd is an AI-powered accessibility platform designed to assist hearing-impaired users by converting different forms of digital input into Indian Sign Language representations. The platform processes text, audio, and video inputs and presents the resulting signs through an interactive avatar-based interface. The project combines React, Python Flask, OpenCV, Three.js, and sign-language representation technologies to connect language processing with an accessible visual experience.",
    thumbnail: "/projects/signifyed.png",
    gallery: [
      "/projects/signifyed.png",
      "/projects/signifyed.png",
      "/projects/signifyed.png",
      "/projects/signifyed.png",
    ],
    techStack: [
      "React.js",
      "Python",
      "Flask",
      "OpenCV",
      "Three.js",
      "SiGML",
      "HamNoSys",
    ],
    features: [
      "Text-to-Indian-Sign-Language representation",
      "Audio and video input processing",
      "Interactive 3D sign-language avatar",
      "AI and computer-vision integration",
    ],
    challenges: "One of the major challenges was connecting different input modalities with a consistent Indian Sign Language representation while presenting the output through an understandable avatar experience.",
    solutions: "The system separates input processing from sign representation and uses Python-based processing alongside a web-based Three.js visualization layer to keep the architecture modular.",
    architecture: "The React frontend communicates with a Python Flask backend for processing and transformation tasks. Processed sign-language data is then passed to the avatar visualization layer for interactive 3D rendering.",
    githubUrl: "https://github.com/muhdismailm/SignifyEd-V4.git",
    liveUrl: "https://signifyed.vercel.app/",
    featured: true,
  },
  {
    id: "labelbee",
    title: "LabelBee",
    subtitle: "AI-powered customizable name slip generation SaaS",
    category: "Web",
    description: "A SaaS platform for creating customized student name slips using photos, AI-generated backgrounds, themes, and automated layouts. It also includes credit-based usage and payment gateway integration.",
    fullDescription: "LabelBee is a web-based SaaS product designed to simplify the creation of customized student name slips. Users can upload photos, customize student information, select or generate backgrounds, apply themes, and generate print-ready layouts. The platform also integrates a credit-based usage model with Razorpay payment processing and Firebase-powered backend services.",
    thumbnail: "/projects/labelbee.png",
    gallery: [
      "/projects/labelbee.png",
      "/projects/labelbee.png",
      "/projects/labelbee.png",
      "/projects/labelbee.png",
    ],
    techStack: [
      "React.js",
      "Firebase",
      "Razorpay",
      "Vercel",
      "AI",
      "JavaScript",
    ],
    features: [
      "AI-generated background creation",
      "Custom student name slip design",
      "Automated A4 sheet layout generation",
      "Credit-based payment system with Razorpay",
    ],
    challenges: "The main challenge was creating a flexible design workflow that could handle user photos, backgrounds, themes, and multiple name slips while maintaining a consistent printable layout.",
    solutions: "The application uses reusable UI components and structured layout logic to generate customizable name slips. Firebase handles application data and authentication-related services, while Razorpay manages payment transactions.",
    architecture: "The React frontend manages the design and generation workflow while Firebase provides backend services. Razorpay is integrated for credit purchases, and the application is deployed through Vercel.",
    githubUrl: "",
    liveUrl: "https://labelbee-weld.vercel.app/",
    featured: true,
  },
  {
    id: "workify",
    title: "Workify",
    subtitle: "Connecting daily-wage workers with clients",
    category: "Mobile",
    description: "A mobile marketplace designed to connect clients with skilled daily-wage workers. The platform supports worker discovery, job requests, availability management, and real-time service updates.",
    fullDescription: "Workify is an on-demand mobile marketplace connecting clients with blue-collar workers such as electricians, plumbers, carpenters, painters, and other skilled service providers. The application provides separate workflows for clients and workers, allowing clients to discover and request services while workers can manage availability and respond to incoming job requests.",
    thumbnail: "/projects/workify.png",
    gallery: [
      "/projects/workify.png",
      "/projects/workify.png",
      "/projects/workify.png",
      "/projects/workify.png",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "Firebase Auth",
      "TableCalendar",
    ],
    features: [
      "Worker discovery by service category",
      "Online/offline worker availability",
      "Job request acceptance and rejection",
      "Real-time service and booking updates",
    ],
    challenges: "The challenge was designing two connected workflows for clients and workers while keeping job requests, availability, and service status synchronized.",
    solutions: "The application separates client and worker experiences while using Firebase services as the shared backend for authentication, data storage, and real-time updates.",
    architecture: "The Flutter application provides both client and worker interfaces. Firebase Authentication manages users, while Firestore stores profiles, job requests, availability, and service-related data.",
    githubUrl: "",
    liveUrl: "",
    featured: true,
  },
  {
    id: "hazri",
    title: "Hazri",
    subtitle: "Simple attendance management for tutors",
    category: "Mobile",
    description: "A mobile attendance management application built for tutors to manage students and record attendance efficiently. It provides class-wise and monthly attendance tracking through a simple mobile-first workflow.",
    fullDescription: "Hazri is an attendance management application designed for tutors who manage multiple groups of students. The application simplifies the daily attendance process by allowing tutors to organize students, record attendance, and review attendance history on a monthly basis. The system is designed around a simple workflow so attendance can be recorded quickly during classes.",
    thumbnail: "/projects/hazri.png",
    gallery: [
      "/projects/hazri.png",
      "/projects/hazri.png",
      "/projects/hazri.png",
      "/projects/hazri.png",
    ],
    techStack: [
      "Flutter",
      "Dart",
      "Firebase",
      "Firestore",
      "Firebase Auth",
    ],
    features: [
      "Tutor authentication",
      "Student and class management",
      "Daily attendance recording",
      "Monthly attendance tracking",
    ],
    challenges: "The key challenge was creating a fast and simple attendance workflow while ensuring that student data remains separated correctly between different tutor accounts and classes.",
    solutions: "The application uses authenticated tutor-specific data structures and cloud-backed storage instead of relying solely on local cached student data.",
    architecture: "The Flutter frontend communicates with Firebase Authentication and Firestore. Tutor-specific records are associated with the authenticated user so students and attendance data remain isolated between accounts.",
    githubUrl: "",
    liveUrl: "",
    featured: false,
  },
  {
    id: "habit-panda",
    title: "Habit Panda",
    subtitle: "A gamified habit tracker powered by a panda jungle",
    category: "Web",
    description: "A gamified habit tracker where users build habits, maintain streaks, earn XP and Bamboo, and develop a virtual panda jungle. The experience combines modern UI, animations, and 3D elements.",
    fullDescription: "Habit Panda is a gamified habit-tracking web application designed to make building consistent habits more engaging. Users can create and manage habits, track daily progress, maintain streaks, earn XP and Bamboo, and unlock elements of a virtual panda jungle. The project combines Next.js, TypeScript, Tailwind CSS, React Three Fiber, Three.js, Framer Motion, and localStorage to create an interactive experience without requiring a traditional backend.",
    thumbnail: "/projects/habit-panda.png",
    gallery: [
      "/projects/habit-panda.png",
      "/projects/habit-panda.png",
      "/projects/habit-panda.png",
      "/projects/habit-panda.png",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "localStorage",
    ],
    features: [
      "Habit creation and daily tracking",
      "Streak and XP progression system",
      "Bamboo rewards and virtual jungle",
      "Interactive 3D panda experience",
    ],
    challenges: "The challenge was creating a gamified experience with persistent progress, animations, and 3D elements while keeping the application lightweight and responsive.",
    solutions: "The application uses localStorage for client-side persistence and combines React state management with React Three Fiber and Framer Motion for the interactive game-like experience.",
    architecture: "The Next.js frontend manages the complete application experience, while localStorage acts as the persistence layer for habits and progression. Three.js and React Three Fiber provide the interactive 3D environment.",
    githubUrl: "",
    liveUrl: "https://habitpanda.vercel.app/",
    featured: false,
  },
];
