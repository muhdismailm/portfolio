export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: string;
  features: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    category: "Web & Apps",
    description: "End-to-end web applications engineered for scalability, fast loading times, and maintainable clean architecture.",
    icon: "Layers",
    features: [
      "Production-ready Next.js & React architecture",
      "Robust TypeScript type safety across the stack",
      "Seamless REST & Server Actions integration",
    ],
  },
  {
    id: "ai-ml",
    title: "AI & Computer Vision",
    category: "Machine Learning",
    description: "Intelligent computer vision pipelines, gesture recognition, and deep learning model integration in web environments.",
    icon: "Brain",
    features: [
      "Real-time MediaPipe & OpenCV landmark tracking",
      "WASM & WebGL accelerated client-side inference",
      "Custom AI workflow & prediction pipelines",
    ],
  },
  {
    id: "backend-cloud",
    title: "Backend & API Engineering",
    category: "Infrastructure",
    description: "High-performance backend services, database design, and cloud infrastructure with security and resilience built in.",
    icon: "Server",
    features: [
      "Python (FastAPI) & Node.js microservices",
      "PostgreSQL, Supabase & Firebase databases",
      "Payment gateway integration (Stripe, UPI) & webhooks",
    ],
  },
  {
    id: "ui-ux",
    title: "UI Implementation & Design",
    category: "Frontend",
    description: "Crafting modern, accessible, and responsive user interfaces that deliver an exceptional user experience on every device.",
    icon: "Layout",
    features: [
      "Responsive implementation for mobile & desktop",
      "Fluid micro-animations with Framer Motion",
      "Dark bento aesthetics and accessible semantic HTML",
    ],
  },
  {
    id: "automation",
    title: "Automation & Tools",
    category: "Workflow",
    description: "Automated document generation, OCR processing, and developer productivity tooling tailored for business workflows.",
    icon: "Cpu",
    features: [
      "Dynamic PDF generation & export engines",
      "Automated webhook notifications & invoice systems",
      "Dockerized containerization & CI/CD deployment",
    ],
  },
  {
    id: "performance",
    title: "Performance & SEO Optimization",
    category: "Optimization",
    description: "Audit and optimize existing applications to achieve top Lighthouse scores, smooth 60fps animations, and top search ranking.",
    icon: "Zap",
    features: [
      "98+ Lighthouse performance & accessibility score",
      "Image & asset optimization with minimal bundle size",
      "Server-side rendering & dynamic OpenGraph metadata",
    ],
  },
];
