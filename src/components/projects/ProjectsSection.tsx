"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { ArrowUpRight, ExternalLink } from "lucide-react";

function GithubIcon({ size = 15 }: { size?: number }) {
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

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="relative py-20 bg-[#030712]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Featured Projects
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {["All", "AI", "Web", "Mobile"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                filter === cat
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-white/5 text-slate-400 border border-white/5 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="group glass-panel p-6 border border-white/5 bg-slate-900/40 rounded-2xl transition-all cursor-pointer flex flex-col justify-between hover:bg-slate-900/70"
            >
              <div>
                <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950/80 border border-white/5 mb-5 flex items-center justify-center">
                  {project.thumbnail.startsWith("/") || project.thumbnail.includes(".") ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <span className="text-5xl group-hover:scale-105 transition-transform duration-300">
                      {project.thumbnail}
                    </span>
                  )}
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full bg-slate-900/90 border border-white/10 text-[10px] font-medium text-slate-300 z-10">
                    {project.category}
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-white mb-1 group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight size={18} className="text-slate-500 group-hover:text-primary transition-colors" />
                </h3>
                <p className="text-xs text-slate-400 mb-3">
                  {project.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-5 line-clamp-2">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs text-slate-400">
                  <span className="group-hover:text-white transition-colors">
                    View Details →
                  </span>
                  <div className="flex items-center gap-2">
                    {Boolean(project.githubUrl) && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={14} />
                      </a>
                    )}
                    {Boolean(project.liveUrl) && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
