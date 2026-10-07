"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { projectsData, ProjectItem } from "@/data/projects";
import {
  ArrowUpRight,
  ExternalLink,
  X,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";

function WorkProjectCard({
  project,
  idx,
  onSelect,
}: {
  project: ProjectItem;
  idx: number;
  onSelect: (p: ProjectItem) => void;
}) {
  const [activeScreen, setActiveScreen] = useState<string>(
    project.gallery && project.gallery.length > 0 ? project.gallery[0] : project.thumbnail
  );
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = project.category === "Mobile" || project.id === "hazri";

  const scrollByAmount = (offset: number) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const scrollToScreen = (index: number) => {
    if (scrollContainerRef.current) {
      const items = scrollContainerRef.current.children;
      if (items[index]) {
        (items[index] as HTMLElement).scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }
    }
  };

  return (
    <motion.article
      id={project.id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: idx * 0.08 }}
      className="group rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] hover:border-[#343434] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1"
    >
      {/* Project Screenshot / Gallery Container */}
      <div className="p-4 sm:p-5 pb-0">
        <div className="relative w-full rounded-xl sm:rounded-2xl bg-[#0c0c0c] border border-[#202020] p-3 sm:p-4 flex flex-col justify-between overflow-hidden group-hover:border-[#2a2a2a] transition-colors">
          
          {/* Top Browser / App Header Bar */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-[#1c1c1c]">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
              <span className="ml-2 text-[10px] font-mono text-neutral-500 hidden sm:inline-block truncate max-w-[200px]">
                {project.title.toLowerCase().replace(/\s+/g, "")}.app
              </span>
            </div>
            <div className="flex items-center gap-2">
              {isMobile && (
                <span className="text-[10px] font-mono text-[#FF1018] bg-[#FF1018]/10 px-2 py-0.5 rounded-full border border-[#FF1018]/20">
                  Swipe ↔
                </span>
              )}
              <span className="px-2.5 py-0.5 rounded-full bg-[#181818] border border-[#262626] text-[10px] font-mono text-neutral-400">
                {project.category}
              </span>
            </div>
          </div>

          {/* Visual Preview Area (Exact size maintained: aspect-[16/9]) */}
          <div className="aspect-[16/9] w-full relative overflow-hidden rounded-lg bg-[#070707] border border-[#1a1a1a] group/screen">
            {/* Subtle Ambient Red Glow */}
            <div className="absolute inset-0 bg-radial from-[#FF1018]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />
            
            {isMobile ? (
              <>
                {/* Horizontal Scrollable Format for Mobile Screenshots */}
                <div
                  ref={scrollContainerRef}
                  className="w-full h-full overflow-x-auto overflow-y-hidden flex items-center gap-3 px-3 py-2 scroll-smooth snap-x snap-mandatory no-scrollbar select-none z-10 relative"
                >
                  {project.gallery.map((imgUrl, i) => {
                    const isSelected = activeScreen === imgUrl;
                    return (
                      <div
                        key={i}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveScreen(imgUrl);
                          scrollToScreen(i);
                        }}
                        className={`h-[94%] aspect-[9/19.5] shrink-0 snap-center rounded-lg overflow-hidden bg-black border transition-all duration-200 cursor-pointer relative shadow-lg ${
                          isSelected
                            ? "border-[#FF1018] ring-2 ring-[#FF1018]/50 scale-[1.02]"
                            : "border-[#252525] hover:border-neutral-500 opacity-80 hover:opacity-100"
                        }`}
                        title={`Hazri Screen ${i + 1} - Click to focus`}
                      >
                        <img
                          src={imgUrl}
                          alt={`${project.title} screen ${i + 1}`}
                          className="w-full h-full object-contain bg-[#090909]"
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Left Scroll Navigation Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollByAmount(-180);
                  }}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/80 border border-[#333] hover:border-[#FF1018] text-white flex items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-all shadow-md backdrop-blur-sm"
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={16} />
                </button>

                {/* Right Scroll Navigation Button */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    scrollByAmount(180);
                  }}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/80 border border-[#333] hover:border-[#FF1018] text-white flex items-center justify-center opacity-0 group-hover/screen:opacity-100 transition-all shadow-md backdrop-blur-sm"
                  aria-label="Scroll right"
                >
                  <ChevronRight size={16} />
                </button>
              </>
            ) : (
              <div
                onClick={() => onSelect(project)}
                className="w-full h-full flex items-center justify-center cursor-pointer"
              >
                {activeScreen.startsWith("/") || activeScreen.includes(".") ? (
                  <img
                    src={activeScreen}
                    alt={project.title}
                    className="w-full h-full object-contain p-1 rounded-md transition-all duration-300 z-10"
                  />
                ) : (
                  <div className="text-6xl sm:text-7xl select-none z-10">
                    {activeScreen}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Horizontal Gallery Scroller (Interactive Screen Selector) */}
          <div className="mt-3 pt-3 border-t border-[#1c1c1c] gallery-scroll flex items-center gap-2 pb-0.5">
            <span className="text-[10px] uppercase font-mono text-neutral-500 shrink-0">
              Screens:
            </span>
            {project.gallery.map((item, gIdx) => {
              const isSelected = activeScreen === item;
              return (
                <button
                  type="button"
                  key={gIdx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveScreen(item);
                    if (isMobile) {
                      scrollToScreen(gIdx);
                    }
                  }}
                  className={`h-9 ${isMobile ? "w-8" : "w-14"} shrink-0 rounded-md border transition-all overflow-hidden bg-[#141414] ${
                    isSelected
                      ? "border-[#FF1018] ring-1 ring-[#FF1018]/50 scale-105"
                      : "border-[#262626] hover:border-neutral-500 opacity-70 hover:opacity-100"
                  }`}
                  title={`View screen ${gIdx + 1}`}
                >
                  {item.startsWith("/") || item.includes(".") ? (
                    <img src={item} alt="" className="w-full h-full object-contain p-0.5" />
                  ) : (
                    <span className="text-xs">{item}</span>
                  )}
                </button>
              );
            })}
            <span className="text-[10px] text-neutral-600 shrink-0 font-mono ml-auto">
              {isMobile ? "Scroll & select screen" : "Click screen to view"}
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
              onClick={() => onSelect(project)}
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
              onClick={() => onSelect(project)}
              className="text-xs font-medium text-[#A1A1A1] group-hover:text-white transition-colors hover:underline"
            >
              Deep Dive Specs →
            </button>

            <div className="flex items-center gap-2">
              {Boolean(project.githubUrl) && (
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
              )}

              {Boolean(project.liveUrl) && (
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
  );
}

export default function WorkPage() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [mounted, setMounted] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (selectedProject) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [selectedProject, lenis]);

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
          <WorkProjectCard
            key={project.id}
            project={project}
            idx={idx}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Detail Deep-Dive Modal (Portaled to body to escape all stacking contexts) */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <div
                className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
                data-lenis-prevent
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.2 }}
                  data-lenis-prevent
                  onClick={(e) => e.stopPropagation()}
                  onWheel={(e) => e.stopPropagation()}
                  onTouchMove={(e) => e.stopPropagation()}
                  className="relative w-[92vw] max-w-lg sm:max-w-xl max-h-[76vh] sm:max-h-[78vh] rounded-2xl sm:rounded-3xl bg-[#121212] border border-[#262626] shadow-2xl flex flex-col overflow-hidden"
                >
                  {/* Modal Header */}
                  <div className="p-4 sm:p-5 border-b border-[#222222] bg-[#141414] flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-3">
                      {selectedProject.thumbnail.startsWith("/") || selectedProject.thumbnail.includes(".") ? (
                        <div className="w-10 h-10 rounded-xl bg-[#1c1c1c] border border-[#282828] p-1 flex items-center justify-center shrink-0">
                          <img
                            src={selectedProject.thumbnail}
                            alt={selectedProject.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <span className="text-2xl">{selectedProject.thumbnail}</span>
                      )}
                      <div>
                        <h2 className="text-lg sm:text-xl font-bold font-heading text-white">
                          {selectedProject.title}
                        </h2>
                        <p className="text-[11px] sm:text-xs text-[#FF1018]">
                          {selectedProject.subtitle}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(null)}
                      className="p-1.5 sm:p-2 rounded-xl bg-[#1c1c1c] text-[#A1A1A1] hover:text-white hover:bg-white/10 transition-colors"
                      aria-label="Close"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  {/* Modal Content Body */}
                  <div
                    data-lenis-prevent
                    className="p-4 sm:p-5 overflow-y-auto overscroll-contain flex-1 min-h-0 space-y-4 text-xs sm:text-sm custom-scrollbar"
                    style={{
                      WebkitOverflowScrolling: "touch",
                      touchAction: "pan-y",
                    }}
                  >
                    <div>
                      <h4 className="badge-label text-[#A1A1A1] mb-1.5">Overview</h4>
                      <p className="text-[#E0E0E0] leading-relaxed">
                        {selectedProject.fullDescription}
                      </p>
                    </div>

                    {/* Project Screenshots Gallery */}
                    {selectedProject.gallery && selectedProject.gallery.length > 0 && (
                      <div>
                        <h4 className="badge-label text-[#A1A1A1] mb-2">Project Screenshots</h4>
                        <div
                          className={
                            selectedProject.category === "Mobile" || selectedProject.id === "hazri"
                              ? "grid grid-cols-2 sm:grid-cols-4 gap-2.5"
                              : "grid grid-cols-1 sm:grid-cols-3 gap-2.5"
                          }
                        >
                          {selectedProject.gallery.map((imgUrl, i) => (
                            <a
                              key={i}
                              href={imgUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`group/img relative ${
                                selectedProject.category === "Mobile" || selectedProject.id === "hazri"
                                  ? "aspect-[9/18]"
                                  : "aspect-video"
                              } rounded-xl overflow-hidden border border-[#242424] hover:border-[#FF1018]/50 transition-all bg-[#0c0c0c] block shadow-md`}
                              title="Click to view full image"
                            >
                              <img
                                src={imgUrl}
                                alt={`${selectedProject.title} screenshot ${i + 1}`}
                                className="w-full h-full object-contain p-1 transition-transform duration-300"
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Key Features */}
                    <div>
                      <h4 className="badge-label text-[#A1A1A1] mb-2">Key Capabilities</h4>
                      <div className="space-y-1.5">
                        {selectedProject.features.map((feat, i) => (
                          <div key={i} className="flex items-start gap-2 text-[#A1A1A1]">
                            <CheckCircle2 size={14} className="text-[#FF1018] shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="badge-label text-[#A1A1A1] mb-1.5">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-[#1a1a1a] border border-[#282828] text-xs text-[#A1A1A1]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Modal Footer Links */}
                  <div className="p-3.5 sm:p-4 border-t border-[#222222] bg-[#141414] flex items-center justify-between shrink-0">
                    {Boolean(selectedProject.githubUrl) ? (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-[#1c1c1c] border border-[#282828] text-xs text-white hover:border-[#FF1018]/40 transition-colors"
                      >
                        <GithubIcon size={14} />
                        <span>GitHub Repository</span>
                      </a>
                    ) : (
                      <div />
                    )}

                    {Boolean(selectedProject.liveUrl) && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-xl bg-[#FF1018] text-white text-xs font-semibold hover:bg-[#FF2E35] transition-colors"
                      >
                        <span>Launch Project</span>
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
