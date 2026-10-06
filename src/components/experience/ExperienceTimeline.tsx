"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle2,
  Briefcase,
  Layers,
} from "lucide-react";
import { journeyTimelineData, JourneyExperienceItem } from "@/data/experience";

interface ExperienceTimelineProps {
  showHeading?: boolean;
}

export default function ExperienceTimeline({
  showHeading = true,
}: ExperienceTimelineProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const activeItem: JourneyExperienceItem = journeyTimelineData[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % journeyTimelineData.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? journeyTimelineData.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="experience"
      className="relative py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full"
    >
      {/* Red Ambient Background Glow & Bento Grid Texture */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#FF1018]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#181818_1px,transparent_1px),linear-gradient(to_bottom,#181818_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      {/* Experience Header */}
      {showHeading && (
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-8 relative z-10">
          <div className="max-w-2xl">
            <span className="text-[#FF1018] font-mono text-xs font-bold tracking-widest uppercase block mb-3">
              EXPERIENCE
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.1] mb-4">
              A Path Defined by <br className="hidden sm:block" />
              <span className="text-white">Curiosity, Growth, and </span>
              <span className="text-[#FF1018]">Impact.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed max-w-xl">
              A collection of experiences, challenges, and opportunities that transformed curiosity into capability, and ambition into action.
            </p>
          </div>

          {/* Chapters Stat Box */}
          <div className="flex items-center gap-5 p-5 sm:p-6 rounded-3xl bg-[#111111]/90 border border-[#242424] hover:border-[#FF1018]/40 transition-all shadow-xl lg:self-center shrink-0">
            <div className="text-5xl sm:text-6xl font-black font-heading text-[#FF1018] leading-none">
              5
            </div>
            <div className="text-[11px] sm:text-xs font-mono font-bold tracking-wider text-[#A1A1A1] uppercase leading-snug border-l border-[#2e2e2e] pl-4 max-w-[200px]">
              Chapters across <br />
              <span className="text-white">IEEE, Tech Fests, Outreach, &amp; Mentorship</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Grid: Left Animated Curly Road & Right Full-Frame Detail Photo Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch relative z-10">
        
        {/* =========================================================
            LEFT COLUMN: S-CURVE CURLY ROAD TIMELINE (7 cols desktop)
            ========================================================= */}
        <div className="lg:col-span-7 relative min-h-[580px] sm:min-h-[640px] rounded-3xl bg-[#111111] border border-[#242424] p-5 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl">
          
          {/* Ambient Red Glow */}
          <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-[#FF1018]/10 rounded-full blur-3xl pointer-events-none" />

          {/* SVG S-Curve Curly Journey Track Weaving Behind the Cards */}
          <div className="absolute inset-0 pointer-events-none hidden sm:block">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 640"
              fill="none"
              preserveAspectRatio="none"
            >
              {/* Inactive Curly Base Path */}
              <path
                d="M 160 50 C 70 150, 70 210, 160 310 C 250 410, 250 470, 160 580"
                stroke="#222222"
                strokeWidth="7"
                strokeLinecap="round"
              />
              {/* Active Glowing Red Curly Path Segment */}
              <motion.path
                d="M 160 50 C 70 150, 70 210, 160 310 C 250 410, 250 470, 160 580"
                stroke="url(#redRoadGradient)"
                strokeWidth="7"
                strokeLinecap="round"
                strokeDasharray="1000"
                initial={{ strokeDashoffset: 1000 }}
                animate={{
                  strokeDashoffset: 1000 - (activeIndex + 1) * 200,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <defs>
                <linearGradient id="redRoadGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FF1018" />
                  <stop offset="50%" stopColor="#FF2E35" />
                  <stop offset="100%" stopColor="#8F0005" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Waypoint Milestone Cards */}
          <div className="relative z-10 flex flex-col justify-between h-full space-y-3 sm:space-y-0">
            {journeyTimelineData.map((item, idx) => {
              const isActive = activeIndex === idx;
              const isPast = activeIndex >= idx;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative flex items-center gap-4 sm:gap-5 cursor-pointer p-3.5 sm:p-4 rounded-2xl transition-all duration-300 ${
                    isActive
                      ? "bg-[#181818] border border-[#FF1018]/70 shadow-[0_0_25px_rgba(255,16,24,0.22)]"
                      : "bg-[#141414]/90 border border-[#242424] hover:border-[#383838] hover:bg-[#181818]"
                  }`}
                >
                  {/* Waypoint Number Circle Badge (Clean with no blowing outer ring) */}
                  <div className="relative flex items-center justify-center shrink-0 w-9 h-9">
                    <div
                      className={`h-9 w-9 rounded-full flex items-center justify-center font-mono text-xs font-black transition-all duration-300 ${
                        isActive
                          ? "bg-[#FF1018] text-white shadow-[0_0_15px_#FF1018]"
                          : isPast
                          ? "bg-[#1e1e1e] text-[#FF1018] border border-[#FF1018]/40"
                          : "bg-[#161616] text-[#666666] border border-[#2a2a2a]"
                      }`}
                    >
                      {idx + 1}
                    </div>
                  </div>

                  {/* Milestone Summary Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                          isActive
                            ? "bg-[#FF1018]/20 text-[#FF1018] border border-[#FF1018]/40"
                            : "bg-[#1e1e1e] text-[#888888]"
                        }`}
                      >
                        {item.year}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-[#666666] font-mono">
                        {item.badge}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-0.5 sm:gap-2">
                      <h4
                        className={`text-sm sm:text-base font-bold font-heading truncate transition-colors ${
                          isActive
                            ? "text-white"
                            : "text-[#D1D1D1] group-hover:text-white"
                        }`}
                      >
                        {item.role}
                      </h4>
                      <span className="text-xs font-semibold shrink-0 text-[#FF1018]">
                        {item.organization}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator Arrow */}
                  <div
                    className={`shrink-0 transition-transform duration-300 ${
                      isActive ? "text-[#FF1018] translate-x-1" : "text-[#444444]"
                    }`}
                  >
                    <ChevronRight size={18} />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Navigation Dots */}
          <div className="mt-5 pt-3.5 border-t border-[#202020] flex items-center justify-between text-xs text-[#888888] relative z-10">
            <span className="font-mono text-[11px] text-[#666666]">
              Click any card to view details
            </span>
            <div className="flex items-center gap-1.5">
              {journeyTimelineData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === i
                      ? "w-6 bg-[#FF1018] shadow-[0_0_8px_#FF1018]"
                      : "w-2 bg-[#2a2a2a] hover:bg-[#444444]"
                  }`}
                  aria-label={`Go to milestone ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* =========================================================
            RIGHT COLUMN: FULL-FRAME PHOTO SESSION CARD (5 cols desktop)
            ========================================================= */}
        <div className="lg:col-span-5 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="h-full min-h-[580px] sm:min-h-[640px] rounded-3xl bg-[#111111] border border-[#242424] overflow-hidden shadow-2xl flex flex-col justify-between relative group hover:border-[#FF1018]/40 transition-all"
            >
              {/* Photo Session Top Frame (Full-Bleed Responsive) */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black shrink-0">
                <Image
                  src={activeItem.image}
                  alt={`${activeItem.role} - ${activeItem.organization}`}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
                />
                
                {/* Gradient Vignette Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-radial from-transparent to-black/60" />

                {/* Counter Pill (01 / 05) */}
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-black/75 border border-[#2e2e2e] text-white font-mono text-xs font-bold backdrop-blur-md">
                  0{activeIndex + 1} / 0{journeyTimelineData.length}
                </div>

                {/* Ambient Red Glow on Top */}
                <div className="absolute top-0 left-0 w-36 h-36 bg-[#FF1018]/20 rounded-full blur-3xl pointer-events-none" />
              </div>

              {/* Photo Card Description Section (Fills the Entire Frame) */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {/* Red Accent Bar Divider */}
                  <div className="h-1 w-14 bg-gradient-to-r from-[#FF1018] to-[#8F0005] rounded-full shadow-[0_0_8px_#FF1018]" />

                  {/* Year Pill & Org */}
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-mono font-bold text-[#FF1018] bg-[#FF1018]/10 px-2.5 py-0.5 rounded-full border border-[#FF1018]/30">
                      {activeItem.year}
                    </span>
                    <span className="text-[11px] font-mono text-[#777777] uppercase">
                      Verified Experience
                    </span>
                  </div>

                  {/* Role & Org */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black font-heading text-white leading-tight">
                      {activeItem.role}
                    </h3>
                    <p className="text-base sm:text-lg font-bold text-[#FF1018] mt-1">
                      {activeItem.organization}
                    </p>
                  </div>

                  {/* Detailed Narrative Description */}
                  <p className="text-xs sm:text-sm text-[#B5B5B5] leading-relaxed">
                    {activeItem.description}
                  </p>

                  {/* Key Highlights */}
                  {activeItem.highlights && activeItem.highlights.length > 0 && (
                    <div className="space-y-1.5 pt-2 border-t border-[#202020]">
                      {activeItem.highlights.map((h, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2 text-xs text-[#d1d1d1]"
                        >
                          <CheckCircle2
                            size={13}
                            className="text-[#FF1018] shrink-0 mt-0.5"
                          />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills / Tags */}
                  {activeItem.skills && activeItem.skills.length > 0 && (
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      {activeItem.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded-md bg-[#161616] border border-[#262626] text-[10px] font-mono text-[#A1A1A1]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Navigation Row */}
                <div className="pt-4 border-t border-[#202020] flex items-center justify-between mt-auto">
                  <span className="text-xs font-mono text-[#666666]">
                    Photo path: <code className="text-[#888888]">{activeItem.image}</code>
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-xl bg-[#161616] border border-[#282828] text-[#A1A1A1] hover:text-white hover:border-[#FF1018]/50 hover:bg-[#1f1f1f] transition-colors"
                      aria-label="Previous Milestone"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-xl bg-[#161616] border border-[#282828] text-[#A1A1A1] hover:text-white hover:border-[#FF1018]/50 hover:bg-[#1f1f1f] transition-colors"
                      aria-label="Next Milestone"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
