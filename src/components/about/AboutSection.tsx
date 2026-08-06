"use client";

import { motion } from "framer-motion";
import { profileData } from "@/data/profile";
import { User, Code, Sparkles } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 bg-[#030712]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Building software with purpose & precision.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Side: Professional Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="glass-panel p-6 border border-white/10 bg-slate-900/50 rounded-2xl">
              <div className="aspect-[4/5] rounded-xl bg-slate-950/80 border border-white/10 flex flex-col items-center justify-center text-center p-6 relative overflow-hidden">
                <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-slate-900 border border-white/10 text-white font-extrabold font-heading text-3xl shadow-md">
                  MI
                </div>
                <h3 className="text-lg font-bold font-heading text-white mb-1">
                  {profileData.name}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-3">
                  {profileData.role}
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-300">
                  <Sparkles size={11} className="text-primary" />
                  <span>{profileData.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Description & Quick Facts & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {profileData.bio}
            </p>

            {/* Quick Facts List */}
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                Key Background
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profileData.quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs"
                  >
                    <span className="text-base">{fact.icon}</span>
                    <div>
                      <span className="text-[10px] text-slate-400 block">
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

            {/* Animated Stat Counters */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {profileData.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel p-3.5 text-center border border-white/5 bg-slate-900/40 rounded-xl"
                >
                  <div className="text-2xl sm:text-3xl font-bold font-heading text-white mb-0.5">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
