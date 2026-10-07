"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Share2,
  ArrowRight,
  Send,
  Coffee,
  Mail,
  Code2,
  Smartphone,
  Globe,
  Layers,
  Terminal,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import { profileData } from "@/data/profile";
import AskAICard from "./AskAICard";

const techStackLogos = [
  {
    name: "Flutter",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M14.314 0L2.3 12.014l3.7 3.7L21.714 0h-7.4z" fill="#02569B" />
        <path d="M14.214 10.986L8.4 16.8l5.814 5.814h7.5L14.214 10.986z" fill="#0175C2" />
        <path d="M8.4 16.8l3.7-3.7 3.7 3.7-3.7 3.7-3.7-3.7z" fill="#29B6F6" />
      </svg>
    ),
  },
  {
    name: "Flask",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0 text-white" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2h5M10 2v5.5L4.2 18.5C3.5 19.8 4.4 21.5 6 21.5h12c1.6 0 2.5-1.7 1.8-3L14 7.5V2" />
        <path d="M6.5 15.5h11" />
      </svg>
    ),
  },
  {
    name: "REST API",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <rect x="1" y="4" width="22" height="16" rx="4" fill="#064E3B" stroke="#10B981" strokeWidth="1.2" />
        <text x="12" y="15" fill="#34D399" fontSize="7.5" fontWeight="bold" fontFamily="monospace" textAnchor="middle">REST</text>
      </svg>
    ),
  },
  {
    name: "Django",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <rect width="24" height="24" rx="4" fill="#092E20" />
        <path fill="#44B78B" d="M13.2 5.5h2.6v9.2c0 2.6-1.3 3.8-3.7 3.8-1.1 0-2.1-.2-2.7-.6l.6-2.1c.5.3 1.1.5 1.7.5 1.2 0 1.5-.7 1.5-1.9V5.5zm-4.7 5.6v2.1c-.5-.2-1-.3-1.6-.3-1.3 0-2 .7-2 1.9 0 1.2.7 1.9 1.9 1.9.6 0 1.1-.1 1.7-.3v2.2c-.7.3-1.6.4-2.5.4-2.4 0-3.9-1.5-3.9-4.1 0-2.6 1.6-4.2 4-4.2 1 0 1.8.2 2.4.4z" />
      </svg>
    ),
  },
  {
    name: "HTML",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M2.5 1.5h19l-1.7 19.3L12 23.5l-7.8-2.7L2.5 1.5z" fill="#E34F26" />
        <path d="M12 3.3v18l6.3-2.2 1.4-15.8H12z" fill="#EF652A" />
        <path d="M12 7.7H7.7l.3 3.5h4V7.7zm0 6.4h-2.1l-.2-1.8H7.9l.4 4.3 3.7 1v-3.5z" fill="#ECECEC" />
        <path d="M12 7.7v3.5h3.7l-.3 3.8-3.4.9v3.6l6.3-1.7.9-10.1H12z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "CSS",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M2.5 1.5h19l-1.7 19.3L12 23.5l-7.8-2.7L2.5 1.5z" fill="#1572B6" />
        <path d="M12 3.3v18l6.3-2.2 1.4-15.8H12z" fill="#33A9DC" />
        <path d="M12 7.7H7.7l.3 3.5h4V7.7zm0 6.4h-2.1l-.2-1.8H7.9l.4 4.3 3.7 1v-3.5z" fill="#ECECEC" />
        <path d="M12 7.7v3.5h3.7l-.3 3.8-3.4.9v3.6l6.3-1.7.9-10.1H12z" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <rect width="24" height="24" rx="3" fill="#F7DF1E" />
        <path d="M7 17.5c.8.6 1.8.9 2.7.9 1.4 0 2.2-.7 2.2-1.8 0-1.1-.7-1.6-2.1-2.2l-.7-.3c-1.8-.8-2.8-1.7-2.8-3.4 0-2 1.5-3.5 3.9-3.5 1.2 0 2.1.3 2.8.8l-.8 1.9c-.6-.4-1.3-.7-2-.7-1.1 0-1.7.6-1.7 1.4 0 .9.6 1.4 1.9 2l.7.3c2.1.9 3.1 1.9 3.1 3.6 0 2.2-1.7 3.7-4.4 3.7-1.4 0-2.7-.4-3.6-1.1l.7-2.1z" fill="#000" />
        <path d="M18.8 7.3h2.4v9.6c0 2.7-1.5 4.1-4 4.1-1.2 0-2.3-.3-3-.8l.8-1.9c.5.4 1.3.7 2.1.7 1.2 0 1.7-.6 1.7-2.1V7.3z" fill="#000" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4 h-4 shrink-0">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
  },
  {
    name: "VS Code",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none">
        <path d="M17.5 1.7L9.2 8.4l-4.5-3.5L2 6.3v11.4l2.7 1.4 4.5-3.5 8.3 6.7 4.5-2.1V3.8l-4.5-2.1z" fill="#0066B8" />
        <path d="M17.5 1.7L9.2 8.4l-4.5-3.5L2 6.3l2.7 1.4 4.5-3.5 8.3-2.5z" fill="#007ACC" opacity="0.8" />
        <path d="M17.5 1.7v20.6l4.5-2.1V3.8l-4.5-2.1z" fill="#1F9CF0" />
        <path d="M9.2 8.4l8.3 3.6-8.3 3.6-4.5-3.5 4.5-3.7z" fill="#0066B8" />
      </svg>
    ),
  },
  {
    name: "Python",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
        <path fill="#3776AB" d="M11.9 1.5c-4.7 0-4.4 2-4.4 2l0 2.1h4.5v.7H5.8S2 5.8 2 10.6c0 4.7 3.3 4.6 3.3 4.6h2v-2.8s-.1-3.3 3.3-3.3h5.7s3.2.1 3.2-3.1c0-3.3-2.8-4.5-7.6-4.5zm-2.5 1.5c.7 0 1.2.5 1.2 1.2 0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2c0-.7.5-1.2 1.2-1.2z" />
        <path fill="#FFD43B" d="M12.1 22.5c4.7 0 4.4-2 4.4-2l0-2.1H12v-.7h6.2s3.8.5 3.8-4.3c0-4.7-3.3-4.6-3.3-4.6h-2v2.8s.1 3.3-3.3 3.3H7.7s-3.2-.1-3.2 3.1c0 3.3 2.8 4.5 7.6 4.5zm2.5-1.5c-.7 0-1.2-.5-1.2-1.2 0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2c0 .7-.5 1.2-1.2 1.2z" />
      </svg>
    ),
  },
];

export default function BentoHero() {
  return (
    <section className="relative pt-6 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* =========================================================
          SECTION 1: TOP HERO BENTO ROW (Hero, Portrait, Ask my AI, Experience)
          ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 mb-4 sm:mb-5">
        
        {/* CARD 1: LEFT HERO CARD (col-span-6) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-6 min-h-[360px] sm:min-h-[380px] p-8 sm:p-10 rounded-[28px] bg-[#121212] border border-[#202020] flex flex-col justify-between relative overflow-hidden group hover:border-[#2f2f2f] transition-all"
        >
          {/* Status Pill Badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#122319] border border-[#1b3d29] text-[#22c55e] text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span>Available for work</span>
            </div>
          </div>

          {/* Main Title & Subtitle */}
          <div className="mt-auto pt-10">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I&apos;m {profileData.shortName || profileData.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[#e5383b] mt-3 tracking-normal">
              {profileData.role}
            </p>
          </div>
        </motion.div>

        {/* CARD 2: CENTER PORTRAIT CARD (col-span-3) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="lg:col-span-3 h-[360px] sm:h-[380px] rounded-[28px] bg-[#121212] border border-[#202020] overflow-hidden relative group hover:border-[#2f2f2f] transition-all"
        >
          <div className="w-full h-full relative overflow-hidden bg-[#0c0c0c]">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* CARD 3: RIGHT COLUMN (col-span-3) - Ask my AI + 3+ Experience */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-3 flex flex-col gap-4 sm:gap-5 h-auto lg:h-[380px]"
        >
          <div className="flex-1 min-h-[170px]">
            <AskAICard />
          </div>

          <div className="flex-1 min-h-[170px] rounded-[28px] bg-[#121212] border border-[#202020] p-6 flex flex-col items-center justify-center text-center group hover:border-[#2f2f2f] transition-all">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              1+
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-neutral-400 uppercase mt-2">
              YEARS EXPERIENCE
            </span>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          SECTION 2: MAIN 2-COLUMN BENTO GRID (Screenshot 1)
          ========================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 mb-4 sm:mb-5">
        
        {/* ==================== LEFT COLUMN (6 cols) ==================== */}
        <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
          
          {/* TOP ROW: LOCATION + CONNECT (2 sub-cards side by side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Card: Location */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="rounded-[28px] bg-[#121212] border border-[#202020] p-6 flex items-center gap-3.5 group hover:border-[#2f2f2f] transition-all"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#280c0f] border border-[#48141a] text-[#ff2a38] shrink-0 group-hover:scale-105 transition-transform duration-300">
                <MapPin size={19} />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase block">
                  LOCATION
                </span>
                <h4 className="text-sm font-bold text-white mt-0.5 leading-snug">
                  {profileData.location}
                </h4>
              </div>
            </motion.div>

            {/* Card: Connect */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="rounded-[28px] bg-[#121212] border border-[#202020] p-6 flex flex-col justify-between group hover:border-[#2f2f2f] transition-all"
            >
              <div className="flex items-center gap-2 text-white font-bold text-sm mb-3">
                <Share2 size={15} />
                <span>Connect</span>
              </div>

              {/* 2x2 Grid of Social Pills */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1c1c1c] border border-[#2c2c2c] text-[11px] font-semibold text-white hover:bg-[#252525] hover:border-neutral-500 transition-all"
                >
                  <GithubIcon size={13} />
                  <span>GitHub</span>
                </a>

                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1c1c1c] border border-[#2c2c2c] text-[11px] font-semibold text-white hover:bg-[#252525] hover:border-neutral-500 transition-all"
                >
                  <LinkedinIcon size={13} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profileData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1c1c1c] border border-[#2c2c2c] text-[11px] font-semibold text-white hover:bg-[#252525] hover:border-neutral-500 transition-all"
                >
                  <InstagramIcon size={13} />
                  <span>Instagram</span>
                </a>

                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1c1c1c] border border-[#2c2c2c] text-[11px] font-semibold text-white hover:bg-[#252525] hover:border-neutral-500 transition-all"
                >
                  <Mail size={13} />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* MIDDLE CARD: SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="rounded-[28px] bg-[#121212] border border-[#202020] p-6 sm:p-7 relative group hover:border-[#2f2f2f] transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-neutral-400 border border-[#2a2a2a] bg-[#181818] uppercase">
                SERVICES
              </span>
              <Link
                href="/services"
                className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-[#2c2c2c] flex items-center justify-center text-white group-hover:border-[#ff2a38] group-hover:text-[#ff2a38] group-hover:translate-x-0.5 transition-all"
                aria-label="View Services"
              >
                <ArrowRight size={14} />
              </Link>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight mb-5">
              End-to-End <span className="text-[#ff1018] italic">Development</span>
            </h3>

            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#282828] text-xs font-medium text-neutral-300">
                Mobile App Development
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#282828] text-xs font-medium text-neutral-300">
                Web App Development
              </span>
              <span className="px-3 py-1.5 rounded-full bg-[#1a1a1a] border border-[#282828] text-xs font-medium text-neutral-300">
                UI Implementation
              </span>
            </div>
          </motion.div>

          {/* BOTTOM CARD: ABOUT ME */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-[28px] bg-[#121212] border border-[#202020] p-6 sm:p-8 flex flex-col justify-between group hover:border-[#2f2f2f] transition-all flex-1"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                About Me
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                <p>
                  I&apos;m <span className="text-white font-semibold">{profileData.name}</span>, a Python Full Stack and Flutter developer with practical experience turning ideas into high-performance, production-ready software across multiple domains.
                </p>
                <p className="text-neutral-400">
                  My work spans the full stack: Flutter for cross-platform mobile, React and Next.js for web, Python (Django &amp; Flask) and Node.js on the backend, and Firebase with relational databases for deployment. I don&apos;t just write code that works, I write code that scales, stays maintainable, and holds up in production. Clean architecture isn&apos;t an afterthought, it&apos;s where I start.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#202020] flex items-center justify-between text-xs text-neutral-400">
              <span>B.Tech in Computer Science &amp; Design</span>
              <Link href="/about" className="text-[#ff1018] font-semibold hover:underline">
                Read full bio →
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ==================== RIGHT COLUMN (6 cols) ==================== */}
        <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-5">
          
          {/* TOP CARD: 20+ MY PROJECTS WITH TECH BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-[28px] bg-[#121212] border border-[#202020] p-8 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#2f2f2f] transition-all min-h-[340px]"
          >
            {/* Big Stat */}
            <div className="text-6xl sm:text-7xl font-black text-white tracking-tight">
              5+
            </div>

            {/* Subtitle */}
            <h3 className="italic font-bold text-xl sm:text-2xl text-neutral-200 mt-1">
              My Projects
            </h3>

            {/* Caption */}
            <p className="text-xs sm:text-sm text-neutral-400 max-w-md mt-2 leading-relaxed">
              Projects that showcase my ability to turn ideas into scalable, high-quality software.
            </p>

            {/* Continuous Moving Ring of Tech Logos (Left to Right) */}
            <div className="w-full overflow-hidden relative mt-7 py-2 select-none">
              {/* Left & Right gradient fades for ring illusion */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-[#121212] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-[#121212] to-transparent z-10" />

              <motion.div
                className="flex items-center gap-3 w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 22,
                  ease: "linear",
                }}
              >
                {[...techStackLogos, ...techStackLogos].map((tech, idx) => (
                  <div
                    key={`${tech.name}-${idx}`}
                    title={tech.name}
                    className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-[#181818] border border-[#262626] hover:border-[#ff1018]/50 hover:bg-[#202020] transition-colors shrink-0 shadow-sm"
                  >
                    <span className="flex items-center justify-center w-4 h-4 shrink-0">
                      {tech.icon}
                    </span>
                    <span className="text-xs font-semibold text-neutral-200 whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-6">
              <Link
                href="/work"
                className="text-xs font-semibold text-[#ff1018] hover:underline"
              >
                Browse All Projects →
              </Link>
            </div>
          </motion.div>

          {/* BOTTOM CARD: HAVE A PROJECT IN MIND? (Contact CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="rounded-[28px] bg-[#121212] border border-[#202020] p-8 sm:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-[#2f2f2f] transition-all flex-1 min-h-[300px]"
          >
            {/* Ambient Red Glow */}
            <div className="absolute w-44 h-44 bg-[#ff1018]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Large Red Circular Mail Icon */}
            <div className="relative w-16 h-16 rounded-full bg-[#ff1018] flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,16,24,0.45)] mb-5 group-hover:scale-110 transition-transform duration-300">
              <Mail size={24} />
            </div>

            {/* Heading */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-6">
              Have a project in mind?
            </h3>

            {/* Glowing Red Button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#ff1018] hover:bg-[#d60e15] text-white font-bold text-sm shadow-[0_0_25px_rgba(255,16,24,0.45)] hover:shadow-[0_0_35px_rgba(255,16,24,0.6)] transition-all duration-300"
            >
              <span>Get in touch</span>
              <Send size={15} />
            </Link>
          </motion.div>
        </div>

      </div>

      {/* =========================================================
          SECTION 3: FUEL THE NEXT BUILD BANNER (Screenshot 2)
          ========================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.35 }}
        className="rounded-[28px] bg-[#121212] border border-[#202020] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 relative overflow-hidden group hover:border-[#2f2f2f] transition-all mb-4 sm:mb-5"
      >
        <div>
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#240b0e] border border-[#48141a] text-[#ff2a38] text-[10px] font-bold tracking-widest uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff1018] animate-pulse" />
            <span>SUPPORT &amp; FUEL</span>
          </div>

          {/* Heading */}
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Fuel the next build
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-2xl leading-relaxed">
            Support upcoming open-source experiments, developer tools, and late-night shipping sessions.
          </p>
        </div>

        {/* Buy Me a Coffee Action Button */}
        <a
          href="https://buymeacoffee.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#ff1018] hover:bg-[#d60e15] text-white font-bold text-xs sm:text-sm shadow-[0_0_25px_rgba(255,16,24,0.4)] hover:shadow-[0_0_35px_rgba(255,16,24,0.6)] transition-all duration-300 shrink-0"
        >
          <Coffee size={16} />
          <span>Buy me a coffee</span>
          <span className="text-xs">↗</span>
        </a>
      </motion.div>

      {/* =========================================================
          SECTION 4: MY EXPERIENCE ROW (Screenshot 2)
          ========================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="rounded-[28px] bg-[#121212] border border-[#202020] p-6 sm:p-8"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            My Experience
          </h3>
          <span className="text-xs sm:text-sm text-neutral-400 font-medium">
            My professional journey
          </span>
        </div>

        {/* 3 Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: SMEC Technologies */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#161616] border border-[#262626] flex items-center gap-4 hover:border-neutral-700 transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#202020] border border-[#2c2c2c] flex items-center justify-center font-black text-white text-base shrink-0">
              S
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">
                Python Full Stack Intern
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                SMEC Technologies
              </p>
              <span className="text-[11px] text-neutral-500 mt-0.5 font-mono block">
                2025 - Present
              </span>
            </div>
          </div>

          {/* Card 2: VIBE GECK */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#161616] border border-[#262626] flex items-center gap-4 hover:border-neutral-700 transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#202020] border border-[#2c2c2c] flex items-center justify-center font-black text-white text-base shrink-0">
              V
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">
                Mentor &amp; Technical Lead
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                VIBE GECK
              </p>
              <span className="text-[11px] text-neutral-500 mt-0.5 font-mono block">
                2024 - 2026
              </span>
            </div>
          </div>

          {/* Card 3: TinkerHub GECK */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#161616] border border-[#262626] flex items-center gap-4 hover:border-neutral-700 transition-all">
            <div className="w-11 h-11 rounded-xl bg-[#202020] border border-[#2c2c2c] flex items-center justify-center font-black text-white text-base shrink-0">
              T
            </div>
            <div>
              <h4 className="font-bold text-white text-sm">
                Outreach Co-Lead
              </h4>
              <p className="text-xs text-neutral-400 mt-0.5">
                TinkerHub GECK
              </p>
              <span className="text-[11px] text-neutral-500 mt-0.5 font-mono block">
                2024
              </span>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
