"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { skillCategories } from "@/data/skills";
import { educationData } from "@/data/education";
import { achievementsData } from "@/data/achievements";
import {
  User,
  GraduationCap,
  Trophy,
  Code2,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  Terminal,
  FileText,
} from "lucide-react";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import RedButton from "@/components/ui/RedButton";
import BentoGallery from "@/components/gallery/BentoGallery";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-14 max-w-3xl"
      >
        <span className="badge-label text-[#FF1018] block mb-2">
          Biography & Background
        </span>
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-heading text-white tracking-tight leading-[1.1]">
          About <span className="text-[#FF1018]">Me</span>
        </h1>
        <p className="text-sm sm:text-base text-[#A1A1A1] mt-3 leading-relaxed">
          Discover the background, technical philosophy, academic roots, and core skillset driving my software engineering journey.
        </p>
      </motion.div>

      {/* Top Bento Row: Bio Card + Quick Facts Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16">
        {/* Bio Card (8 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-8 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF1018]/15 text-[#FF1018]">
                <User size={16} />
              </div>
              <span className="badge-label text-[#A1A1A1]">Engineering Philosophy</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mb-4">
              Building AI-driven web systems with high performance and pragmatic elegance.
            </h3>

            <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-4">
              {profileData.bio}
            </p>

            <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
              My core philosophy focuses on clean architecture, sub-second interface responsiveness, and utilizing machine learning models to solve tangible human challenges. Whether it&apos;s real-time gesture tracking for accessibility or automated document engines with transactional billing, I ensure production systems are built to scale.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-[#202020] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#A1A1A1]">
              <MapPin size={14} className="text-[#FF1018]" />
              <span>{profileData.location}</span>
            </div>
            <RedButton href="/resume.pdf" external size="sm" variant="secondary">
              View Full Resume (PDF)
            </RedButton>
          </div>
        </motion.div>

        {/* Identity & Highlights Card (4 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="lg:col-span-4 p-6 sm:p-7 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between"
        >
          <div>
            <span className="badge-label text-[#A1A1A1] block mb-4">Key Background</span>

            <div className="space-y-3">
              {profileData.quickFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="p-3 rounded-xl bg-[#151515] border border-[#222222] flex items-center gap-3 text-xs"
                >
                  <span className="text-lg">{fact.icon}</span>
                  <div>
                    <span className="text-[10px] text-[#6B6B6B] block font-mono uppercase">
                      {fact.label}
                    </span>
                    <span className="font-semibold text-white">
                      {fact.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#202020] flex items-center justify-between text-xs text-[#6B6B6B]">
            <span>Active Student & Developer</span>
            <span className="text-[#FF1018] font-mono">2022 - 2026</span>
          </div>
        </motion.div>
      </div>

      {/* Skills Section (Section 26: Categorized in compact dark cards with red accent hover) */}
      <section className="mb-20">
        <div className="mb-8">
          <span className="badge-label text-[#FF1018] block mb-1">
            Technical Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-black font-heading text-white">
            Skills & Tooling
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1">
            Technologies I use across frontend, backend, computer vision, and cloud environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="p-5 rounded-2xl bg-[#111111] border border-[#242424] hover:border-[#343434] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1e1e1e]">
                  <h4 className="text-sm font-bold font-heading text-white">
                    {cat.name}
                  </h4>
                  <span className="text-[10px] font-mono text-[#FF1018] bg-[#FF1018]/10 px-2 py-0.5 rounded">
                    {cat.skills.length} techs
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-2.5 rounded-xl bg-[#151515] border border-[#222222] hover:border-[#FF1018]/40 hover:bg-[#181818] transition-all flex items-center gap-2 group cursor-default"
                    >
                      <span className="text-sm">{skill.icon}</span>
                      <div className="min-w-0">
                        <span className="text-xs font-medium text-white truncate block group-hover:text-[#F5F5F5]">
                          {skill.name}
                        </span>
                        <span className="text-[9px] text-[#6B6B6B] block font-mono">
                          {skill.level}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <div className="mb-20">
        <ExperienceTimeline showHeading={true} />
      </div>

      {/* Education & Achievements Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Education (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424]">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF1018]/15 text-[#FF1018]">
              <GraduationCap size={18} />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              Education
            </h3>
          </div>

          <div className="space-y-6">
            {educationData.map((edu) => (
              <div key={edu.id} className="p-4 rounded-xl bg-[#151515] border border-[#222222]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-mono text-[#FF1018]">
                    {edu.period}
                  </span>
                  <span className="text-[11px] font-mono text-[#22C55E] bg-[#22C55E]/10 px-2 py-0.5 rounded">
                    {edu.grade}
                  </span>
                </div>
                <h4 className="text-sm font-bold font-heading text-white">
                  {edu.degree}
                </h4>
                <p className="text-xs text-[#A1A1A1] mt-0.5">
                  {edu.institution}
                </p>
                <p className="text-xs text-[#888888] mt-2 leading-relaxed">
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Awards (6 cols) */}
        <div className="lg:col-span-6 p-6 sm:p-7 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424]">
          <div className="flex items-center gap-2 mb-6">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FF1018]/15 text-[#FF1018]">
              <Trophy size={18} />
            </div>
            <h3 className="text-xl font-bold font-heading text-white">
              Achievements & Hackathons
            </h3>
          </div>

          <div className="space-y-4">
            {achievementsData.map((ach) => (
              <div
                key={ach.id}
                className="p-4 rounded-xl bg-[#151515] border border-[#222222] hover:border-[#343434] transition-all flex items-start gap-3.5"
              >
                <span className="text-2xl shrink-0 mt-0.5">{ach.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h4 className="text-xs sm:text-sm font-bold font-heading text-white truncate">
                      {ach.title}
                    </h4>
                    <span className="text-[10px] font-mono text-[#FF1018] shrink-0 bg-[#FF1018]/10 px-2 py-0.5 rounded">
                      {ach.badgeText}
                    </span>
                  </div>
                  <p className="text-xs text-[#A1A1A1] leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Moments & Highlights Gallery */}
      <div className="mt-20 border-t border-[#1e1e1e] pt-12">
        <BentoGallery />
      </div>
    </div>
  );
}
