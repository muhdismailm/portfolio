"use client";

import { motion } from "framer-motion";
import TechCard from "@/components/dashboard/TechCard";
import AIToolkitCard from "@/components/dashboard/AIToolkitCard";
import CurrentProjectCard from "@/components/dashboard/CurrentProjectCard";
import LatestProjectCard from "@/components/dashboard/LatestProjectCard";

export default function MobileFallback() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      {/* Workspace illustration */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="relative mx-auto max-w-sm py-8"
      >
        {/* Simplified desk illustration */}
        <div className="relative mx-auto w-64 h-40">
          {/* Monitor */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-44 h-28 rounded-lg border border-border bg-card overflow-hidden">
            {/* Screen content */}
            <div className="p-2 space-y-1.5">
              {[45, 65, 30, 55, 40, 70].map((width, i) => (
                <div key={i} className="flex gap-1">
                  <div
                    className="h-1.5 rounded-full"
                    style={{
                      width: `${width}%`,
                      backgroundColor:
                        i % 3 === 0
                          ? "#818CF8"
                          : i % 3 === 1
                          ? "#22D3EE"
                          : "#22C55E",
                      opacity: 0.6,
                    }}
                  />
                </div>
              ))}
            </div>
            {/* Screen glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-50" />
          </div>

          {/* Monitor stand */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-6 w-6 h-5 bg-surface" />
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-16 h-2 rounded-full bg-surface" />

          {/* Desk */}
          <div className="absolute bottom-0 left-0 right-0 h-2 rounded-sm bg-[#4A3728]" />

          {/* Neon strip */}
          <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
        </div>
      </motion.div>

      {/* Dashboard cards in scrollable row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-4 pb-4"
      >
        <div className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
          <div className="snap-center shrink-0">
            <TechCard delay={0} />
          </div>
          <div className="snap-center shrink-0">
            <AIToolkitCard delay={0.1} />
          </div>
          <div className="snap-center shrink-0">
            <CurrentProjectCard delay={0.2} />
          </div>
          <div className="snap-center shrink-0">
            <LatestProjectCard delay={0.3} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
