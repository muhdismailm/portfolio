"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ProjectItem } from "@/data/projects";
import { X, ExternalLink, Layers, Cpu, CheckCircle2, AlertTriangle, Lightbulb } from "lucide-react";

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl glass-panel p-6 sm:p-8 bg-slate-900/95 border border-white/15 shadow-2xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-20"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl p-3 rounded-2xl bg-primary/10 border border-primary/20">
              {project.thumbnail}
            </span>
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {project.category} Project
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 mb-6 leading-relaxed">
            {project.fullDescription}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Gallery / Preview Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {project.gallery.map((item, idx) => (
              <div
                key={idx}
                className="aspect-video rounded-xl bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 border border-white/10 flex items-center justify-center text-3xl shadow-inner"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Key Features */}
          <div className="mb-8">
            <h4 className="text-sm font-bold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
              <CheckCircle2 size={16} />
              <span>Key Features</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-300 p-2 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Deep Dive: Challenges & Solutions & Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
              <h5 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle size={14} />
                <span>Technical Challenge</span>
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <h5 className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Lightbulb size={14} />
                <span>Engineered Solution</span>
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solutions}
              </p>
            </div>
          </div>

          {/* Architecture Box */}
          <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/20 mb-8">
            <h5 className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
              <Layers size={14} />
              <span>System Architecture</span>
            </h5>
            <p className="text-xs text-slate-300 leading-relaxed">
              {project.architecture}
            </p>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-white/10">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white text-xs font-semibold hover:bg-primary-light transition-all duration-300 shadow-lg shadow-primary/25"
              >
                <span>Live Demo</span>
                <ExternalLink size={14} />
              </a>
            )}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/15 text-white text-xs font-semibold hover:bg-white/10 transition-all duration-300"
            >
              <span>GitHub Repository</span>
              <GithubIcon size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
