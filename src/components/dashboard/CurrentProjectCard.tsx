"use client";

import { motion } from "framer-motion";

interface CurrentProjectCardProps {
  delay?: number;
}

export default function CurrentProjectCard({ delay = 0 }: CurrentProjectCardProps) {
  const progress = 72;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay + 0.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel p-5 w-full max-w-[310px] relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">
          Currently Building
        </h3>
      </div>

      <div className="flex justify-between items-start">
        <div className="pr-2">
          <h4 className="text-sm font-bold text-white font-heading mb-1">
            AI Study Assistant
          </h4>
          <p className="text-[11px] text-slate-300 mb-4 leading-relaxed max-w-[180px]">
            Your personal AI companion for smarter learning.
          </p>
        </div>

        {/* Wireframe Hexagon Graphic */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/30 text-primary">
          <svg className="w-7 h-7 text-primary animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            <line x1="12" y1="22" x2="12" y2="15.5" />
            <polyline points="22 8.5 12 15.5 2 8.5" />
            <polyline points="12 2 12 15.5" />
          </svg>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between text-[11px]">
          <span className="text-slate-400 font-medium">Progress</span>
          <span className="text-primary font-bold">{progress}%</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ delay: delay + 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full bg-gradient-to-r from-primary via-indigo-400 to-accent"
          />
        </div>
      </div>
    </motion.div>
  );
}
