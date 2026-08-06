"use client";

import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-20 bg-[#030712]">
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
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Work & Career History
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-3 sm:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

          <div className="space-y-10">
            {experienceData.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <div className="absolute left-3 sm:left-1/2 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-950 border border-primary z-10">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>

                  <div className="w-full sm:w-[calc(50%-1.75rem)] pl-10 sm:pl-0">
                    <div className="glass-panel p-5 border border-white/5 bg-slate-900/40 rounded-xl hover:bg-slate-900/70 transition-all">
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-[10px] font-medium text-primary uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Calendar size={11} />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-base font-bold font-heading text-white mb-0.5">
                        {exp.role}
                      </h3>
                      <p className="text-xs text-slate-400 mb-3">
                        {exp.company} • {exp.location}
                      </p>

                      <ul className="space-y-1.5 mb-4">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                            <span className="text-primary font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-1 pt-2 border-t border-white/5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
