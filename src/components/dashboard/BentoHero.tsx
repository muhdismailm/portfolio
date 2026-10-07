"use client";

import { useState, useEffect } from "react";
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
  Briefcase,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/Icons";
import {
  FlutterLogo,
  DartLogo,
  FirebaseLogo,
  PythonLogo,
  DjangoLogo,
  FlaskLogo,
  RestApiLogo,
  ReactLogo,
  JavaScriptLogo,
  HtmlLogo,
  CssLogo,
  VsCodeLogo,
  PostgreSqlLogo,
  PostmanLogo,
  DockerLogo,
  NodejsLogo,
  FigmaLogo,
} from "@/components/ui/TechLogos";
import { profileData } from "@/data/profile";
import AskAICard from "./AskAICard";

const techLogosList = [
  { name: "Flutter", Icon: FlutterLogo },
  { name: "Python", Icon: PythonLogo },
  { name: "Django", Icon: DjangoLogo },
  { name: "Flask", Icon: FlaskLogo },
  { name: "REST API", Icon: RestApiLogo },
  { name: "React", Icon: ReactLogo },
  { name: "Node.js", Icon: NodejsLogo },
  { name: "JavaScript", Icon: JavaScriptLogo },
  { name: "HTML5", Icon: HtmlLogo },
  { name: "CSS3", Icon: CssLogo },
  { name: "VS Code", Icon: VsCodeLogo },
  { name: "Figma", Icon: FigmaLogo },
  { name: "Dart", Icon: DartLogo },
  { name: "Firebase", Icon: FirebaseLogo },
  { name: "PostgreSQL", Icon: PostgreSqlLogo },
  { name: "Postman", Icon: PostmanLogo },
  { name: "Docker", Icon: DockerLogo },
];

function TypewriterRole() {
  const roles = ["Flutter App Developer", "Python Full Stack Developer"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timer: NodeJS.Timeout;

    if (!isDeleting && text === current) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 35 : 75;
      timer = setTimeout(() => {
        setText((prev) =>
          isDeleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, index, roles]);

  return (
    <span className="inline-flex items-center text-[#ff1018] font-bold">
      <span>{text}</span>
      <span className="inline-block w-0.5 h-4 sm:h-5 ml-1 bg-[#ff1018] animate-pulse" />
    </span>
  );
}

export default function BentoHero() {
  return (
    <section className="relative pt-6 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* =========================================================
          SECTION 1: TOP HERO BENTO ROW (Hero, Portrait, 5+ Projects, Ask AI + Exp)
          ========================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 mb-4 sm:mb-5">
        
        {/* CARD 1: LEFT HERO CARD (col-span-4) - Compact & with typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="lg:col-span-4 min-h-[320px] sm:min-h-[340px] p-6 sm:p-7 rounded-[28px] bg-[#121212] border border-[#202020] flex flex-col justify-between relative overflow-hidden group hover:border-[#2f2f2f] transition-all"
        >
          {/* Status Pill Badge */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#122319] border border-[#1b3d29] text-[#22c55e] text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span>Available for work</span>
            </div>
          </div>

          {/* Main Title & Subtitle with Typewriter */}
          <div className="mt-auto pt-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-[1.15]">
              Hi, I&apos;m {profileData.shortName || profileData.name}
            </h1>
            <div className="text-sm sm:text-base font-semibold mt-2 min-h-[26px] flex items-center">
              <TypewriterRole />
            </div>
          </div>
        </motion.div>

        {/* CARD 2: CENTER PORTRAIT CARD (col-span-3) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="lg:col-span-3 h-[320px] sm:h-[340px] rounded-[28px] bg-[#121212] border border-[#202020] overflow-hidden relative group hover:border-[#2f2f2f] transition-all"
        >
          <div className="w-full h-full relative overflow-hidden bg-[#0c0c0c]">
            <img
              src={profileData.avatarUrl}
              alt={profileData.name}
              className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* CARD 3: 5+ PROJECTS CARD (col-span-2) - Visible in this first screen frame */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.08 }}
          className="lg:col-span-2 h-[320px] sm:h-[340px] rounded-[28px] bg-[#121212] border border-[#202020] p-6 flex flex-col justify-between items-center text-center relative overflow-hidden group hover:border-[#ff1018]/40 transition-all"
        >
          {/* Subtle Ambient Red Glow */}
          <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#ff1018]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#ff1018]/20 transition-all" />

          {/* Top Icon Badge */}
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#280c0f] border border-[#48141a] text-[#ff2a38] group-hover:scale-110 transition-transform duration-300">
            <Briefcase size={20} />
          </div>

          {/* Stat in Middle */}
          <div className="my-auto py-2">
            <div className="text-5xl sm:text-6xl font-black text-white tracking-tight group-hover:text-[#ff1018] transition-colors">
              5+
            </div>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-neutral-400 uppercase mt-1.5 block">
              PROJECTS
            </span>
          </div>

          {/* Bottom Action Link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#ff1018] hover:text-white transition-colors group-hover:translate-x-0.5 duration-200"
          >
            <span>Browse All</span>
            <ArrowRight size={12} />
          </Link>
        </motion.div>

        {/* CARD 4: RIGHT COLUMN (col-span-3) - Ask my AI + 1+ Experience */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-3 flex flex-col gap-4 sm:gap-5 h-auto lg:h-[340px]"
        >
          <div className="flex-1 min-h-[155px]">
            <AskAICard />
          </div>

          <div className="flex-1 min-h-[155px] rounded-[28px] bg-[#121212] border border-[#202020] p-5 flex flex-col items-center justify-center text-center group hover:border-[#2f2f2f] transition-all">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              1+
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest text-neutral-400 uppercase mt-1">
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
          
          {/* TOP CARD: MOVING TECH LOGOS RING (Height matches Connect card, only logos) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="rounded-[28px] bg-[#121212] border border-[#202020] p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden group hover:border-[#2f2f2f] transition-all min-h-[145px] sm:h-[155px]"
          >
            {/* Ambient Red Glow */}
            <div className="absolute w-32 h-32 bg-[#ff1018]/5 rounded-full blur-2xl pointer-events-none -top-6 -right-6" />

            {/* Tag: Tools & Technologies */}
            <div className="flex items-center justify-between z-10 mb-2">
              <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-neutral-300 border border-[#2a2a2a] bg-[#181818] uppercase">
                Tools &amp; Technologies
              </span>
              <Link
                href="/about"
                className="text-[11px] font-semibold text-[#ff1018] hover:underline"
              >
                All skills →
              </Link>
            </div>

            {/* Continuous Moving Ring of Tech Logos (Left to Right, Logos Only) */}
            <div className="w-full overflow-hidden relative select-none py-1">
              {/* Left & Right gradient fades for ring illusion */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-[#121212] to-transparent z-10" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-[#121212] to-transparent z-10" />

              <motion.div
                className="flex items-center gap-3 w-max"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                }}
              >
                {[...techLogosList, ...techLogosList].map((tech, idx) => (
                  <div
                    key={`${tech.name}-${idx}`}
                    title={tech.name}
                    className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#181818] border border-[#262626] hover:border-[#ff1018]/50 hover:bg-[#202020] transition-colors shrink-0 shadow-sm"
                  >
                    <tech.Icon className="w-5 h-5 shrink-0" />
                  </div>
                ))}
              </motion.div>
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
