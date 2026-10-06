"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  ArrowUpRight,
  Mail,
  Sparkles,
  ExternalLink,
  Briefcase,
  Layers,
  CheckCircle2,
  Terminal,
  Code2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import AskAICard from "./AskAICard";
import RedButton from "@/components/ui/RedButton";

export default function BentoHero() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format time in Indian Standard Time (IST)
      const istString = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(istString);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
        
        {/* =========================================================
            CARD 1: LARGE INTRO CARD (Desktop: col-span-7, 2 rows)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="order-1 lg:col-span-7 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between relative overflow-hidden group hover:border-[#343434] transition-all"
        >
          {/* Subtle ambient red background light */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#FF1018]/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#262626] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22C55E]" />
              </span>
              <span className="text-[11px] font-medium tracking-wide text-[#F5F5F5]">
                Available for opportunities
              </span>
            </div>

            {/* Intro Heading */}
            <div className="space-y-1 mb-4">
              <p className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#FF1018]">
                Hi, I&apos;m
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black font-heading text-[#F5F5F5] tracking-tight leading-[1.1]">
                Muhammed <br />
                <span className="text-white">Ismail M</span>
              </h1>
            </div>

            {/* Title & Tagline */}
            <p className="text-base sm:text-lg font-semibold text-[#A1A1A1] mb-4">
              {profileData.role} <span className="text-[#FF1018]">•</span> AI & Full Stack
            </p>

            <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed max-w-xl">
              {profileData.tagline} {profileData.bio.slice(0, 140)}...
            </p>
          </div>

          {/* Action Row */}
          <div className="mt-8 pt-6 border-t border-[#242424] flex flex-wrap items-center gap-3">
            <RedButton href="/work" size="md" icon>
              Selected Work
            </RedButton>
            <RedButton href="/contact" variant="secondary" size="md">
              Let&apos;s Talk
            </RedButton>
          </div>
        </motion.div>

        {/* =========================================================
            CARD 2: PROFILE IMAGE / IDENTITY CARD (Desktop: col-span-5)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="order-2 lg:col-span-5 p-6 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between relative overflow-hidden group hover:border-[#343434] transition-all"
        >
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#FF1018]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-center justify-between mb-4">
            <span className="badge-label text-[#A1A1A1]">Professional Profile</span>
            <span className="text-[11px] font-mono text-[#FF1018] bg-[#FF1018]/10 px-2 py-0.5 rounded-full border border-[#FF1018]/20">
              verified
            </span>
          </div>

          {/* Stylized Developer Identity Box */}
          <div className="relative my-auto py-6 flex flex-col items-center justify-center text-center">
            {/* Monogram Badge with Red Lighting Rim */}
            <div className="relative mb-4">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#FF1018] to-[#8F0005] opacity-40 blur-sm group-hover:opacity-75 transition-opacity" />
              <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-[#151515] border-2 border-[#2c2c2c] text-[#F5F5F5] font-black font-heading text-3xl sm:text-4xl shadow-2xl">
                MI
              </div>
              <span className="absolute bottom-1 right-1 h-5 w-5 rounded-full bg-[#070707] border-2 border-[#242424] flex items-center justify-center">
                <span className="h-2.5 w-2.5 rounded-full bg-[#FF1018]" />
              </span>
            </div>

            <h3 className="text-lg font-bold font-heading text-white">
              Muhammed Ismail M
            </h3>
            <p className="text-xs text-[#A1A1A1] mt-0.5 font-mono">
              @muhdismailm • Developer
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-[#191919] border border-[#282828] text-[11px] text-[#A1A1A1]">
                React & Next.js
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#191919] border border-[#282828] text-[11px] text-[#A1A1A1]">
                Python & OpenCV
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[#191919] border border-[#282828] text-[11px] text-[#A1A1A1]">
                TypeScript
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#242424] flex items-center justify-between text-xs text-[#6B6B6B]">
            <span>University CS Engineer</span>
            <span className="text-[#A1A1A1]">2022 - 2026</span>
          </div>
        </motion.div>

        {/* =========================================================
            CARD 3: ASK MY AI (Desktop: col-span-4)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="order-3 lg:col-span-4 flex flex-col"
        >
          <AskAICard />
        </motion.div>

        {/* =========================================================
            CARD 4: EXPERIENCE / STAT CARD (Desktop: col-span-4)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="order-4 lg:col-span-4 p-5 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between group hover:border-[#343434] transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="badge-label text-[#A1A1A1]">Metrics & Impact</span>
            <span className="text-xs text-[#FF1018]">●</span>
          </div>

          <div className="grid grid-cols-2 gap-3 py-1">
            {profileData.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-3 rounded-xl bg-[#151515] border border-[#242424] flex flex-col"
              >
                <div className="text-2xl sm:text-3xl font-black font-heading text-white tracking-tight">
                  {stat.value}
                  <span className="text-[#FF1018]">{stat.suffix}</span>
                </div>
                <span className="text-[10px] text-[#A1A1A1] mt-1 font-medium leading-tight">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-2 text-[11px] text-[#6B6B6B] flex items-center justify-between">
            <span>Production apps & hackathons</span>
            <span className="text-[#FF1018]">Active</span>
          </div>
        </motion.div>

        {/* =========================================================
            CARD 5: LOCATION CARD (Desktop: col-span-4)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="order-5 lg:col-span-4 p-5 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between group hover:border-[#343434] transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF1018]/15 text-[#FF1018]">
                <MapPin size={15} />
              </div>
              <span className="badge-label text-[#A1A1A1]">Location</span>
            </div>
            <span className="text-[11px] font-mono text-[#A1A1A1]">UTC+5:30</span>
          </div>

          <div className="my-2">
            <h4 className="text-base font-bold font-heading text-white">
              {profileData.location}
            </h4>
            <p className="text-xs text-[#A1A1A1] mt-0.5">
              South Asia / Remote Global
            </p>
          </div>

          <div className="pt-3 border-t border-[#242424] flex items-center justify-between text-xs">
            <span className="flex items-center gap-1.5 text-[#A1A1A1]">
              <Clock size={12} className="text-[#FF1018]" />
              Local Time:
            </span>
            <span className="font-mono font-semibold text-white">
              {currentTime || "IST"}
            </span>
          </div>
        </motion.div>

        {/* =========================================================
            CARD 6: CONNECT CARD (Desktop: col-span-4)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="order-6 lg:col-span-4 p-5 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between group hover:border-[#343434] transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="badge-label text-[#A1A1A1]">Connect</span>
            <span className="text-xs text-[#FF1018]">Direct Channels</span>
          </div>

          <div className="space-y-2">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#151515] border border-[#242424] hover:border-[#FF1018]/40 hover:bg-[#191919] transition-all text-xs group/link"
            >
              <span className="flex items-center gap-2.5 font-medium text-[#F5F5F5]">
                <GithubIcon size={15} className="text-[#A1A1A1] group-hover/link:text-[#FF1018] transition-colors" />
                GitHub
              </span>
              <span className="text-[11px] font-mono text-[#6B6B6B] group-hover/link:text-white flex items-center gap-1">
                @muhdismailm
                <ArrowUpRight size={12} />
              </span>
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#151515] border border-[#242424] hover:border-[#FF1018]/40 hover:bg-[#191919] transition-all text-xs group/link"
            >
              <span className="flex items-center gap-2.5 font-medium text-[#F5F5F5]">
                <LinkedinIcon size={15} className="text-[#A1A1A1] group-hover/link:text-[#FF1018] transition-colors" />
                LinkedIn
              </span>
              <span className="text-[11px] font-mono text-[#6B6B6B] group-hover/link:text-white flex items-center gap-1">
                in/muhdismailm
                <ArrowUpRight size={12} />
              </span>
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className="flex items-center justify-between p-2.5 rounded-xl bg-[#151515] border border-[#242424] hover:border-[#FF1018]/40 hover:bg-[#191919] transition-all text-xs group/link"
            >
              <span className="flex items-center gap-2.5 font-medium text-[#F5F5F5]">
                <Mail size={15} className="text-[#A1A1A1] group-hover/link:text-[#FF1018] transition-colors" />
                Email
              </span>
              <span className="text-[11px] font-mono text-[#6B6B6B] group-hover/link:text-white flex items-center gap-1">
                {profileData.email.split("@")[0]}
                <ArrowUpRight size={12} />
              </span>
            </a>
          </div>
        </motion.div>

        {/* =========================================================
            CARD 7: PROJECTS / SELECTED WORK CARD (Desktop: col-span-8)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="order-7 lg:col-span-8 p-6 sm:p-7 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between group hover:border-[#343434] transition-all relative overflow-hidden"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF1018]/15 text-[#FF1018]">
                <Briefcase size={15} />
              </div>
              <span className="badge-label text-[#A1A1A1]">Selected Work</span>
            </div>
            <Link
              href="/work"
              className="text-xs font-semibold text-[#FF1018] hover:text-[#FF2E35] flex items-center gap-1"
            >
              View All (4) <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="mb-4">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Featured Engineering Projects
            </h3>
            <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1 max-w-xl">
              Production-grade applications spanning AI computer vision models, modern Next.js SaaS, and performant web systems.
            </p>
          </div>

          {/* Project Previews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            {projectsData.slice(0, 2).map((p) => (
              <Link
                key={p.id}
                href={`/work#${p.id}`}
                className="p-4 rounded-xl bg-[#151515] border border-[#242424] hover:border-[#FF1018]/40 hover:bg-[#181818] transition-all group/item flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{p.thumbnail}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#202020] text-[#A1A1A1] border border-[#2a2a2a]">
                      {p.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold font-heading text-white group-hover/item:text-[#FF1018] transition-colors flex items-center justify-between">
                    <span>{p.title}</span>
                    <ArrowUpRight size={14} className="text-[#6B6B6B] group-hover/item:text-[#FF1018]" />
                  </h4>
                  <p className="text-xs text-[#A1A1A1] mt-1 line-clamp-2">
                    {p.subtitle}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-[#222222] flex flex-wrap gap-1">
                  {p.techStack.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-[#1c1c1c] text-[#888888]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-[#6B6B6B] pt-2 border-t border-[#242424]">
            <span>Next.js • MediaPipe • OpenCV • TypeScript • Supabase</span>
            <Link href="/work" className="text-[#FF1018] font-medium hover:underline">
              Browse Work Page →
            </Link>
          </div>
        </motion.div>

        {/* =========================================================
            CARD 8: SERVICES CARD (Desktop: col-span-4)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="order-8 lg:col-span-4 p-6 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between group hover:border-[#343434] transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FF1018]/15 text-[#FF1018]">
                <Layers size={15} />
              </div>
              <span className="badge-label text-[#A1A1A1]">Services</span>
            </div>
            <Link
              href="/services"
              className="text-xs text-[#FF1018] hover:underline flex items-center gap-0.5"
            >
              Explore →
            </Link>
          </div>

          <div>
            <h4 className="text-lg font-bold font-heading text-white mb-1">
              End-to-End Development
            </h4>
            <p className="text-xs text-[#A1A1A1] mb-4">
              Building complete software systems from initial architectural design to deployment.
            </p>

            {/* Service Tags */}
            <div className="space-y-2">
              {[
                "Full Stack Web Development",
                "AI & Computer Vision",
                "Backend & Scalable APIs",
                "Automation & Custom Tools",
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-2 p-2 rounded-xl bg-[#151515] border border-[#242424] text-xs text-[#F5F5F5]"
                >
                  <CheckCircle2 size={13} className="text-[#FF1018] shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#242424]">
            <Link
              href="/services"
              className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-[#161616] hover:bg-[#1a1a1a] border border-[#262626] text-xs font-semibold text-white transition-colors"
            >
              <span>View Service Details</span>
              <ArrowUpRight size={13} className="text-[#FF1018]" />
            </Link>
          </div>
        </motion.div>

        {/* =========================================================
            CARD 9: ABOUT CARD (Desktop: col-span-6)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="order-9 lg:col-span-6 p-6 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between group hover:border-[#343434] transition-all"
        >
          <div className="flex items-center justify-between mb-3">
            <span className="badge-label text-[#A1A1A1]">About Me</span>
            <Code2 size={16} className="text-[#FF1018]" />
          </div>

          <div>
            <h4 className="text-xl font-bold font-heading text-white mb-2">
              Engineering with Focus & Precision
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed line-clamp-3 mb-4">
              {profileData.bio}
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2.5 rounded-xl bg-[#151515] border border-[#242424]">
                <span className="text-[10px] text-[#6B6B6B] block">Primary Focus</span>
                <span className="font-semibold text-white">Full-Stack & AI</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[#151515] border border-[#242424]">
                <span className="text-[10px] text-[#6B6B6B] block">Education</span>
                <span className="font-semibold text-white">B.Tech Computer Science</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#242424] flex items-center justify-between">
            <span className="text-xs text-[#6B6B6B]">300+ Students Mentored</span>
            <Link
              href="/about"
              className="text-xs font-semibold text-[#FF1018] hover:underline flex items-center gap-1"
            >
              Read More →
            </Link>
          </div>
        </motion.div>

        {/* =========================================================
            CARD 10: CONTACT CTA CARD (Desktop: col-span-6)
            ========================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="order-10 lg:col-span-6 p-6 sm:p-7 rounded-2xl md:rounded-3xl bg-[#111111] border border-[#242424] flex flex-col justify-between group hover:border-[#343434] transition-all relative overflow-hidden"
        >
          {/* Subtle red glow in corner */}
          <div className="absolute bottom-0 right-0 w-44 h-44 bg-[#FF1018]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between mb-3">
            <span className="badge-label text-[#A1A1A1]">Get In Touch</span>
            <span className="text-xs text-[#22C55E] flex items-center gap-1 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22C55E]" />
              Online
            </span>
          </div>

          <div className="my-auto py-2">
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
              Have a project in mind?
            </h3>
            <p className="text-sm sm:text-base text-[#A1A1A1] mt-1">
              Let&apos;s build something exceptional together.
            </p>
          </div>

          <div className="mt-4 pt-4 border-t border-[#242424] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-mono text-[#A1A1A1]">
              {profileData.email}
            </span>
            <RedButton href="/contact" size="md" icon>
              Get in touch
            </RedButton>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
