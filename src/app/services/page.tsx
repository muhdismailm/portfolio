"use client";

import { motion } from "framer-motion";
import { servicesData } from "@/data/services";
import {
  Layers,
  Brain,
  Server,
  Layout,
  Cpu,
  Zap,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  GitBranch,
} from "lucide-react";
import RedButton from "@/components/ui/RedButton";

function getServiceIcon(name: string) {
  switch (name) {
    case "Layers":
      return <Layers size={20} />;
    case "Brain":
      return <Brain size={20} />;
    case "Server":
      return <Server size={20} />;
    case "Layout":
      return <Layout size={20} />;
    case "Cpu":
      return <Cpu size={20} />;
    case "Zap":
      return <Zap size={20} />;
    default:
      return <Layers size={20} />;
  }
}

const processSteps = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description:
      "Clarifying requirements, defining data structures, selecting the optimal AI/ML and frontend stack, and establishing clean API contracts.",
  },
  {
    step: "02",
    title: "High-Fidelity Engineering",
    description:
      "Iterative frontend and backend development with modern Next.js App Router, Python inference services, and responsive UI implementation.",
  },
  {
    step: "03",
    title: "Testing, Polish & Speed",
    description:
      "End-to-end testing, sub-50ms inference optimization, Lighthouse performance tuning, and mobile safe-area responsiveness verification.",
  },
  {
    step: "04",
    title: "Deployment & Maintenance",
    description:
      "Continuous CI/CD pipeline setup, Vercel/cloud infrastructure deployment, automated backups, and analytics monitoring.",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Top Banner / Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16 max-w-3xl"
      >
        <span className="badge-label text-[#FF1018] block mb-2">
          Full-Cycle Development
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.1]">
          End-to-End Software <br />
          Development for{" "}
          <span className="text-[#FF1018]">AI & Full Stack</span> Products
        </h1>

        <p className="text-sm sm:text-base text-[#A1A1A1] mt-4 leading-relaxed max-w-2xl">
          From computer vision pipelines and deep learning model integration to high-performance responsive web applications, I deliver scalable software tailored for business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8">
          <RedButton href="/contact" size="md" icon>
            Start a conversation
          </RedButton>
          <a
            href="#process"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151515] border border-[#242424] text-xs font-semibold text-[#F5F5F5] hover:border-[#343434] transition-colors"
          >
            <span>Explore the process</span>
            <ArrowRight size={14} className="text-[#6B6B6B]" />
          </a>
        </div>
      </motion.div>

      {/* Services Grid (Section 24: Desktop 2 cols, Mobile 1 col) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        {servicesData.map((service, idx) => {
          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] hover:border-[#343434] hover:bg-[#141414] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#181818] border border-[#262626] text-[#FF1018] group-hover:border-[#FF1018]/40 group-hover:bg-[#FF1018]/10 transition-all">
                    {getServiceIcon(service.icon)}
                  </div>
                  <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded-full bg-[#181818] border border-[#262626] text-[#A1A1A1]">
                    {service.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-[#F5F5F5]">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* 3 Bullet Points with small red checkmarks */}
              <div className="pt-4 border-t border-[#202020] space-y-2.5">
                {service.features.map((item, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-2.5 text-xs text-[#d5d5d5]">
                    <CheckCircle2 size={14} className="text-[#FF1018] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Engineering Process Section */}
      <section id="process" className="pt-8 border-t border-[#242424]">
        <div className="mb-10">
          <span className="badge-label text-[#FF1018] block mb-1">
            Methodology
          </span>
          <h2 className="text-2xl sm:text-4xl font-black font-heading text-white">
            How I Build Products
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1">
            Structured workflow ensuring robust performance, clean code, and predictable milestones.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, idx) => (
            <div
              key={step.step}
              className="p-5 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#343434] transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black font-heading text-[#FF1018] block mb-3">
                  {step.step}
                </span>
                <h4 className="text-sm font-bold font-heading text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#A1A1A1] leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#1e1e1e] flex items-center justify-between text-[10px] text-[#6B6B6B]">
                <span>Phase {idx + 1}</span>
                <GitBranch size={12} className="text-[#A1A1A1]" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Card */}
      <div className="mt-16 p-8 rounded-3xl bg-[#111111] border border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF1018]/10 rounded-full blur-3xl pointer-events-none" />
        <div>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
            Ready to bring your project to life?
          </h3>
          <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1">
            Available for freelance contracts, full-stack MVPs, and software engineering roles.
          </p>
        </div>
        <RedButton href="/contact" size="lg" icon className="shrink-0">
          Start a project
        </RedButton>
      </div>
    </div>
  );
}
