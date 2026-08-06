"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "React", color: "#61DAFB", icon: "⚛" },
  { name: "Next.js", color: "#FFFFFF", icon: "NX" },
  { name: "Python", color: "#3776AB", icon: "🐍" },
  { name: "TypeScript", color: "#3178C6", icon: "TS" },
  { name: "Node.js", color: "#68A063", icon: "ND" },
  { name: "Tailwind", color: "#06B6D4", icon: "🌊" },
  { name: "Firebase", color: "#FFCA28", icon: "🔥" },
  { name: "Three.js", color: "#FFFFFF", icon: "🎲" },
];

interface TechCardProps {
  delay?: number;
}

export default function TechCard({ delay = 0 }: TechCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay + 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel p-5 w-full bg-[#0B0F19]/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl hover:border-indigo-500/40 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_8px_#6366F1]" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
          Technologies
        </h3>
      </div>

      {/* Grid with animated moving items */}
      <div className="grid grid-cols-4 gap-3">
        {technologies.map((tech, idx) => (
          <motion.div
            key={tech.name}
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 3 + (idx % 3) * 0.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: idx * 0.2,
            }}
            className="flex flex-col items-center gap-1.5 group cursor-pointer"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-xs font-bold transition-all duration-300 group-hover:border-indigo-400 group-hover:bg-indigo-500/20 group-hover:scale-110 shadow-lg group-hover:shadow-indigo-500/25 overflow-hidden">
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              <span style={{ color: tech.color }} className="text-sm font-bold z-10">
                {tech.icon}
              </span>
            </div>
            <span className="text-[10px] text-slate-300 font-medium truncate group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
