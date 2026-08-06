"use client";

import { motion } from "framer-motion";
import { certificatesData } from "@/data/certificates";
import { ExternalLink } from "lucide-react";

export default function CertificatesSection() {
  return (
    <section id="certificates" className="relative py-20 bg-[#030712]">
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
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white tracking-tight">
            Verified Credentials
          </h2>
        </motion.div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel p-5 border border-white/5 bg-slate-900/40 rounded-2xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{cert.icon}</span>
                  <span className="text-[10px] text-emerald-400 font-medium px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    Verified
                  </span>
                </div>

                <h3 className="text-sm font-bold font-heading text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mb-1">
                  {cert.issuer}
                </p>
                <p className="text-[10px] text-slate-500 mb-4">
                  Issued {cert.date}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-slate-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>View Certificate</span>
                <ExternalLink size={13} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
