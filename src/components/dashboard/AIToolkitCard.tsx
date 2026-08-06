"use client";

import { motion } from "framer-motion";

const tools = [
  { name: "OpenCV", color: "#5C3EE8", icon: "👁" },
  { name: "MediaPipe", color: "#00A6A6", icon: "🕸" },
  { name: "Scikit-learn", color: "#F7931E", icon: "📊" },
  { name: "TensorFlow", color: "#FF6F00", icon: "🧠" },
  { name: "Pandas", color: "#EBEBEB", icon: "🐼" },
  { name: "NumPy", color: "#4DABCF", icon: "🧊" },
];

interface AIToolkitCardProps {
  delay?: number;
}

export default function AIToolkitCard({ delay = 0 }: AIToolkitCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay + 0.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel p-5 w-full bg-[#0B0F19]/85 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl hover:border-cyan-500/40 transition-all duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06B6D4]" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
          AI / ML Toolkit
        </h3>
      </div>

      {/* Grid with moving items */}
      <div className="grid grid-cols-3 gap-3">
        {tools.map((tool, idx) => (
          <motion.div
            key={tool.name}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              duration: 3.2 + (idx % 2) * 0.6,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: idx * 0.25,
            }}
            className="flex flex-col items-center gap-1.5 group cursor-pointer"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-sm transition-all duration-300 group-hover:border-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-110 shadow-lg group-hover:shadow-cyan-500/25 overflow-hidden">
              <span className="text-base z-10">{tool.icon}</span>
            </div>
            <span className="text-[10px] text-slate-300 font-medium truncate group-hover:text-white transition-colors">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
