"use client";

import { motion } from "framer-motion";
import { educationData } from "@/data/education";
import { Calendar } from "lucide-react";

export default function EducationSection() {
  return (
    <section id="education" className="relative py-20 bg-[#030712]">
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
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Academic Credentials
          </h2>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="glass-panel p-6 border border-white/5 bg-slate-900/40 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary">
                    {edu.institution}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400">
                    <Calendar size={11} />
                    <span>{edu.period}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold font-heading text-white mb-2">
                  {edu.degree}
                </h3>
                <span className="inline-block px-2.5 py-0.5 rounded bg-white/5 text-xs text-slate-300 font-medium mb-3">
                  {edu.grade}
                </span>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {edu.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 space-y-1">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
