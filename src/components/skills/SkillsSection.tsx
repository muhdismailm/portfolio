"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === activeCategory);

  return (
    <section id="skills" className="relative py-20 bg-[#030712]">
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
            Technical Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Skills & Capabilities
          </h2>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-white/10 text-white border border-white/20"
                : "bg-white/5 text-slate-400 border border-white/5 hover:text-white"
            }`}
          >
            All
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-white/10 text-white border border-white/20"
                  : "bg-white/5 text-slate-400 border border-white/5 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="space-y-10">
          {filteredCategories.map((category) => (
            <div key={category.id} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                {category.name}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.03 }}
                    className="glass-panel p-3.5 flex flex-col items-center justify-center text-center border border-white/5 bg-slate-900/40 rounded-xl hover:bg-slate-900/80 transition-all cursor-pointer"
                  >
                    <div className="text-xl mb-2">{skill.icon}</div>
                    <span className="text-xs font-medium text-white mb-0.5">
                      {skill.name}
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal">
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
