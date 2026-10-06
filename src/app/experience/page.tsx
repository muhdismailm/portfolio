"use client";

import { motion } from "framer-motion";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import RedButton from "@/components/ui/RedButton";
import { profileData } from "@/data/profile";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Experience Journey Section */}
      <ExperienceTimeline showHeading={true} />

      {/* Bottom CTA Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="mt-16 p-8 rounded-3xl bg-[var(--card-primary)] border border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
      >
        <div>
          <span className="text-xs font-mono font-bold text-[#FF1018] uppercase tracking-wider block mb-1">
            Looking for complete credentials?
          </span>
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-[var(--text-primary)]">
            Download verified resume &amp; career history
          </h3>
          <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1 max-w-md">
            Full academic records, hackathon awards, and verified technical internship credentials in a single PDF.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <RedButton href={profileData.resumeUrl || "/resume.pdf"} external icon size="md">
            Download PDF Resume
          </RedButton>
          <RedButton href="/contact" variant="secondary" size="md">
            Get In Touch
          </RedButton>
        </div>
      </motion.div>
    </div>
  );
}
