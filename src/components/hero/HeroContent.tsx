"use client";

import { motion } from "framer-motion";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import SocialLinks from "@/components/social/SocialLinks";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col justify-center max-w-xl py-6"
    >
      {/* Greeting */}
      <motion.p
        variants={item}
        className="text-base font-semibold text-primary tracking-wide mb-2"
      >
        Hi, I&apos;m
      </motion.p>

      {/* Main Name Heading */}
      <motion.h1
        variants={item}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.05] mb-4"
      >
        Muhammed
        <br />
        Ismail M
        <span className="text-primary font-black">.</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        variants={item}
        className="text-2xl sm:text-3xl font-semibold font-heading text-primary/90 mb-5"
      >
        Software Engineer
      </motion.h2>

      {/* Description */}
      <motion.p
        variants={item}
        className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8 max-w-lg"
      >
        I build AI-powered and full stack applications that solve real world problems.
      </motion.p>

      {/* Action Buttons */}
      <motion.div
        variants={item}
        className="flex flex-wrap items-center gap-4 mb-8"
      >
        <PrimaryButton href="#projects">View Projects</PrimaryButton>
        <SecondaryButton href="#contact">Contact Me</SecondaryButton>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div variants={item}>
        <SocialLinks />
      </motion.div>
    </motion.div>
  );
}
