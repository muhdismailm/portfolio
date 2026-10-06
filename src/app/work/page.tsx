"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projects";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  Layers,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  Cpu,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import RedButton from "@/components/ui/RedButton";

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 max-w-2xl"
      >
        <span className="badge-label text-[#FF1018] block mb-2">
          Portfolio Archive
        </span>
        <h1 className="text-3xl sm:text-5xl font-black font-heading text-white tracking-tight">
          Selected Work
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1A1] mt-3 leading-relaxed">
          A showcase of real-world AI computer vision systems, production Next.js full-stack applications, and performant web tooling engineered by Muhammed Ismail M.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          {["All", "AI", "Web", "Mobile"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                filter === cat
                  ? "bg-[#FF1018] text-white shadow-[0_0_15px_rgba(255,16,24,0.3)] font-semibold"
                  : "bg-[#151515] border border-[#242424] text-[#A1A1A1] hover:text-white hover:border-[#343434]"
              }`}
            >
              {cat}
            </button>
          ))}
          <span className="text-xs text-[#6B6B6B] ml-2 font-mono">
            ({filteredProjects.length} projects)
          </span>
        </div>
      </motion.div>

      {/* 2-Column Responsive Bento Project Grid (Desktop: 2 cols, Tablet: 2 cols, Mobile: 1 col) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.article
            key={project.id}
            id={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: idx * 0.08 }}
            className="group rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] hover:border-[#343434] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1"
          >
            {/* Project Screenshot / Gallery Container */}
            <div className="p-4 sm:p-5 pb-0">
              <div className="relative w-full rounded-xl sm:rounded-2xl bg-[#0c0c0c] border border-[#202020] p-4 flex flex-col justify-between overflow-hidden group-hover:border-[#2a2a2a] transition-colors">
                
                {/* Visual Preview Area */}
                <div className="aspect-[16/9] flex items-center justify-center relative overflow-hidden rounded-lg bg-gradient-to-br from-[#161616] to-[#0c0c0c]">
                  {/* Subtle Red Ambient Glow behind preview */}
                  <div className="absolute inset-0 bg-radial from-[#FF1018]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Large Icon Preview */}
                  <div className="text-6xl sm:text-7xl select-none group-hover:scale-105 transition-transform duration-300 z-10">
                    {project.thumbnail}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#111111]/90 border border-[#242424] text-[10px] font-mono text-[#A1A1A1]">
                    {project.category}
                  </div>
                </div>

                {/* Horizontal Gallery Scroller (Section 22 requirement) */}
                <div className="mt-3 pt-3 border-t border-[#1c1c1c] gallery-scroll flex items-center gap-2 pb-1">
                  <span className="text-[10px] uppercase font-mono text-[#6B6B6B] shrink-0">
                    Screens:
                  </span>
                  {project.gallery.map((item, gIdx) => (
                    <div
                      key={gIdx}
                      className="h-9 w-12 shrink-0 rounded-md bg-[#161616] border border-[#262626] flex items-center justify-center text-base hover:border-[#FF1018]/40 transition-colors"
                    >
                      {item}
                    </div>
                  ))}
                  <span className="text-[10px] text-[#6B6B6B] shrink-0 font-mono ml-auto">
                    Scroll →
                  </span>
                </div>
              </div>
            </div>

            {/* Information Section */}
            <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-[#F5F5F5] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-medium text-[#FF1018] mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="p-2 rounded-xl bg-[#181818] border border-[#242424] text-[#A1A1A1] hover:text-white hover:border-[#FF1018]/40 transition-all shrink-0"
                    aria-label="View project details"
                  >
                    <ArrowUpRight size={16} />
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#161616] border border-[#222222] text-[11px] text-[#A1A1A1]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-4 border-t border-[#202020] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-medium text-[#A1A1A1] group-hover:text-white transition-colors hover:underline"
                  >
                    Deep Dive Specs →
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#161616] border border-[#242424] hover:border-[#FF1018]/40 text-xs text-[#A1A1A1] hover:text-white transition-all"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon size={13} />
                      <span>Code</span>
                    </a>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#FF1018] text-white hover:bg-[#FF2E35] text-xs font-semibold shadow-[0_0_12px_rgba(255,16,24,0.25)] transition-all"
                      >
                        <span>Live Demo</span>
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Detail Deep-Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-[#111111] border border-[#242424] shadow-2xl max-h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-[#242424] bg-[#141414] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{selectedProject.thumbnail}</span>
                  <div>
                    <h2 className="text-xl font-bold font-heading text-white">
                      {selectedProject.title}
                    </h2>
                    <p className="text-xs text-[#FF1018]">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-[#1c1c1c] text-[#A1A1A1] hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
                <div>
                  <h4 className="badge-label text-[#A1A1A1] mb-2">Overview</h4>
                  <p className="text-[#F5F5F5] leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="badge-label text-[#A1A1A1] mb-3">Key Capabilities</h4>
                  <div className="space-y-2">
                    {selectedProject.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-[#A1A1A1]">
                        <CheckCircle2 size={14} className="text-[#FF1018] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-[#161616] border border-[#262626]">
                    <div className="flex items-center gap-2 mb-2 text-[#FF1018] font-semibold text-xs">
                      <AlertCircle size={14} />
                      <span>Engineering Challenge</span>
                    </div>
                    <p className="text-xs text-[#A1A1A1] leading-relaxed">
                      {selectedProject.challenges}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#161616] border border-[#262626]">
                    <div className="flex items-center gap-2 mb-2 text-[#22C55E] font-semibold text-xs">
                      <Lightbulb size={14} />
                      <span>Architectural Solution</span>
                    </div>
                    <p className="text-xs text-[#A1A1A1] leading-relaxed">
                      {selectedProject.solutions}
                    </p>
                  </div>
                </div>

                {/* Architecture */}
                <div>
                  <h4 className="badge-label text-[#A1A1A1] mb-2 flex items-center gap-1.5">
                    <Cpu size={13} className="text-[#FF1018]" />
                    <span>System Architecture</span>
                  </h4>
                  <p className="p-3.5 rounded-xl bg-[#0d0d0d] border border-[#202020] font-mono text-xs text-[#d1d1d1]">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="badge-label text-[#A1A1A1] mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#1a1a1a] border border-[#282828] text-xs text-[#A1A1A1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="p-4 border-t border-[#242424] bg-[#141414] flex items-center justify-between">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1c1c1c] border border-[#282828] text-xs text-white hover:border-[#FF1018]/40 transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>GitHub Repository</span>
                </a>

                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#FF1018] text-white text-xs font-semibold hover:bg-[#FF2E35] transition-colors"
                  >
                    <span>Launch Project</span>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
