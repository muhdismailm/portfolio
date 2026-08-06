"use client";

import { motion } from "framer-motion";
import { GitBranch, Star, GitCommit, GitPullRequest, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export default function GithubSection() {
  const stats = [
    { label: "Contributions", value: "850+", icon: GitCommit },
    { label: "Repo Stars", value: "500+", icon: Star },
    { label: "Pull Requests", value: "140+", icon: GitPullRequest },
    { label: "Public Repos", value: "32+", icon: GitBranch },
  ];

  const topLanguages = [
    { name: "TypeScript / JavaScript", percentage: 48, color: "#3178C6" },
    { name: "Python", percentage: 32, color: "#3776AB" },
    { name: "CSS / HTML", percentage: 14, color: "#06B6D4" },
    { name: "C++ / Others", percentage: 6, color: "#A855F7" },
  ];

  return (
    <section id="github" className="relative py-20 bg-[#030712]">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="text-xs font-semibold text-primary uppercase tracking-wider block mb-2">
            Open Source
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            GitHub Activity & Stats
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel p-4 border border-white/5 bg-slate-900/40 rounded-xl flex items-center gap-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-300">
                <item.icon size={18} />
              </div>
              <div>
                <span className="text-xl font-bold font-heading text-white block leading-none mb-0.5">
                  {item.value}
                </span>
                <span className="text-[10px] text-slate-400 font-medium">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages & Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 glass-panel p-5 border border-white/5 bg-slate-900/40 rounded-2xl"
          >
            <h3 className="text-base font-bold font-heading text-white mb-5">
              Languages
            </h3>
            <div className="space-y-3.5">
              {topLanguages.map((lang) => (
                <div key={lang.name} className="space-y-1">
                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span>{lang.name}</span>
                    <span className="text-slate-400">{lang.percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 glass-panel p-5 border border-white/5 bg-slate-900/40 rounded-2xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-base font-bold font-heading text-white">
                  Contribution Grid
                </h3>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs text-primary hover:underline"
                >
                  <span>View GitHub</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>

              <div className="grid grid-cols-16 sm:grid-cols-24 gap-1 p-3 rounded-xl bg-slate-950/80 border border-white/5 overflow-x-auto">
                {Array.from({ length: 96 }).map((_, i) => {
                  const opacityLevel = (i * 7) % 5;
                  const colors = [
                    "bg-white/5",
                    "bg-primary/25",
                    "bg-primary/50",
                    "bg-primary/75",
                    "bg-primary",
                  ];
                  return <div key={i} className={`h-2.5 w-2.5 rounded-sm ${colors[opacityLevel]}`} />;
                })}
              </div>
            </div>

            <div className="pt-3 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
              <span>Consistent open-source contributions.</span>
              <span className="text-emerald-400">● Active</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
