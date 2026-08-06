"use client";

import { motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

interface LatestProjectCardProps {
  delay?: number;
}

export default function LatestProjectCard({ delay = 0 }: LatestProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delay + 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel p-5 w-full max-w-[340px] relative"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Latest Project
          </h3>
        </div>
        <button type="button" className="text-slate-500 hover:text-slate-300 transition-colors">
          <X size={14} />
        </button>
      </div>

      <div className="grid grid-cols-5 gap-3 items-center">
        {/* Text Info */}
        <div className="col-span-3">
          <h4 className="text-sm font-bold text-white font-heading mb-1">
            LabelBee
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
            AI-Powered Name Slip Generator with Payments
          </p>

          <a
            href="#projects"
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light transition-colors"
          >
            View Project
            <ArrowRight
              size={12}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>
        </div>

        {/* Thumbnail Preview */}
        <div className="col-span-2 overflow-hidden rounded-xl border border-white/15 bg-slate-900/80 p-2 shadow-inner group">
          <div className="relative aspect-video rounded-lg overflow-hidden bg-gradient-to-tr from-primary/30 via-accent/20 to-indigo-900 flex items-center justify-center">
            <div className="text-center p-2">
              <span className="text-xs font-bold text-white block">LabelBee</span>
              <span className="text-[8px] text-accent block">AI Studio</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
