"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ExternalLink,
  X,
  Maximize2,
  TrendingUp,
  Award,
  Users,
  Mic,
  Cpu,
  GraduationCap,
  Layers,
} from "lucide-react";
import { galleryItems, GalleryItem } from "@/data/gallery";

export default function BentoGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All Highlights" },
    { id: "leadership", label: "Leadership & Community" },
    { id: "engineering", label: "Engineering & AI" },
    { id: "mentorship", label: "Speaking & Mentorship" },
  ];

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "leadership") {
      return (
        item.id.includes("ieee") ||
        item.id.includes("initiatives") ||
        item.id.includes("lakshya")
      );
    }
    if (filter === "engineering") {
      return (
        item.id.includes("engineering") ||
        item.id.includes("project") ||
        item.id.includes("btech")
      );
    }
    if (filter === "mentorship") {
      return (
        item.id.includes("stem") ||
        item.id.includes("speaking") ||
        item.id.includes("alma") ||
        item.id.includes("academics")
      );
    }
    return true;
  });

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#262626] mb-3">
            <Sparkles size={13} className="text-[#FF1018]" />
            <span className="text-[11px] font-medium tracking-wide text-[#F5F5F5] uppercase">
              Visual Showcase & Moments
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight">
            Moments, Leadership <br className="hidden sm:block" />
            <span className="text-[#FF1018]">& Highlights</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1A1] mt-2 max-w-xl">
            A visual retrospective of student leadership, conference keynotes, engineering milestones, and developer communities.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#111111] border border-[#222222] self-start md:self-auto">
          {filterOptions.map((opt) => {
            const isActive = filter === opt.id;
            return (
              <button
                key={opt.id}
                onClick={() => setFilter(opt.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#FF1018] text-white shadow-[0_0_12px_rgba(255,16,24,0.4)]"
                    : "text-[#888888] hover:text-white hover:bg-[#181818]"
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Bento Collage Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-4 sm:gap-5 auto-rows-[220px]">
        {filteredItems.map((item, idx) => {
          // Determine grid spanning classes based on item type and position
          let spanClasses = "lg:col-span-4 row-span-1";

          if (item.type === "tall") {
            spanClasses = "lg:col-span-3 sm:col-span-1 md:col-span-1 row-span-2";
          } else if (item.type === "banner") {
            spanClasses = "lg:col-span-6 sm:col-span-2 md:col-span-2 row-span-1";
          } else if (item.type === "wide") {
            spanClasses = "lg:col-span-4 sm:col-span-2 md:col-span-1 row-span-1";
          } else if (item.type === "square") {
            spanClasses = "lg:col-span-3 sm:col-span-1 md:col-span-1 row-span-1";
          } else if (item.type === "standard") {
            spanClasses = "lg:col-span-3 sm:col-span-1 md:col-span-1 row-span-1";
          }

          // Special custom sizing to replicate the exact layout proportions
          if (item.id === "ieee-cs-partnership") {
            spanClasses = "lg:col-span-3 row-span-2";
          } else if (item.id === "stem-educator") {
            spanClasses = "lg:col-span-3 row-span-2";
          } else if (item.id === "engineering-banner") {
            spanClasses = "lg:col-span-6 row-span-1";
          } else if (item.id === "btech-degree") {
            spanClasses = "lg:col-span-3 row-span-1";
          } else if (item.id === "lakshya-tech-head") {
            spanClasses = "lg:col-span-3 row-span-1";
          } else if (item.id === "alma-mater") {
            spanClasses = "lg:col-span-3 row-span-1";
          } else if (item.id === "public-speaking-talks") {
            spanClasses = "lg:col-span-5 row-span-1";
          } else if (item.id === "btech-project-signifyed") {
            spanClasses = "lg:col-span-2 row-span-1";
          } else if (item.id === "saas-project-labelbee") {
            spanClasses = "lg:col-span-2 row-span-1";
          }

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              onClick={() => setSelectedItem(item)}
              className={`group relative rounded-[24px] sm:rounded-[28px] overflow-hidden border border-[#222222] bg-[#0d0d0d] cursor-pointer hover:border-[#FF1018]/60 hover:shadow-[0_0_25px_rgba(255,16,24,0.15)] transition-all duration-300 flex flex-col justify-end p-5 sm:p-6 ${spanClasses}`}
            >
              {/* Background Image Container with Zoom Effect */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.7] group-hover:brightness-[0.85]"
                />
                {/* Gradient Vignette Overlays for Maximum Contrast & Atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/20 group-hover:from-black/90 transition-colors" />
                <div className="absolute inset-0 bg-radial from-transparent to-black/80" />
                
                {/* Ambient Red Glow on Hover */}
                <div className="absolute -bottom-10 -right-10 w-36 h-36 bg-[#FF1018]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              {/* Decorative Corner Icon / Expand Indicator */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/70 border border-white/20 text-white backdrop-blur-md">
                  <Maximize2 size={13} />
                </div>
              </div>

              {/* Card Content */}
              <div className="relative z-10 space-y-1">
                {/* Category Tag */}
                <span
                  className={`text-[10px] sm:text-[11px] font-mono font-bold tracking-wider uppercase block ${
                    item.categoryColor || "text-[#FF1018]"
                  }`}
                >
                  {item.category}
                </span>

                {/* Main Headline */}
                <h3
                  className={`font-black font-heading text-white leading-tight drop-shadow-md group-hover:text-[#FFFFFF] transition-colors ${
                    item.type === "banner"
                      ? "text-2xl sm:text-3xl lg:text-4xl"
                      : item.type === "tall"
                      ? "text-xl sm:text-2xl"
                      : "text-lg sm:text-xl"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Subtitle / Role */}
                {item.subtitle && (
                  <p className="text-xs sm:text-sm text-[#CCCCCC] font-medium leading-snug line-clamp-2 drop-shadow">
                    {item.subtitle}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Interactive Lightbox / Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-[#111111] border border-[#2a2a2a] overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Image Header */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/40 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-black/70 border border-white/20 text-white hover:bg-[#FF1018] transition-colors"
                >
                  <X size={16} />
                </button>

                {/* Category Pill */}
                <div className="absolute bottom-4 left-6">
                  <span
                    className={`text-xs font-mono font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-black/60 border border-[#FF1018]/30 ${
                      selectedItem.categoryColor || "text-[#FF1018]"
                    }`}
                  >
                    {selectedItem.category}
                  </span>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black font-heading text-white">
                    {selectedItem.title}
                  </h3>
                  {selectedItem.subtitle && (
                    <p className="text-sm font-medium text-[#FF1018] mt-1">
                      {selectedItem.subtitle}
                    </p>
                  )}
                </div>

                {selectedItem.description && (
                  <p className="text-sm text-[#A1A1A1] leading-relaxed">
                    {selectedItem.description}
                  </p>
                )}

                <div className="pt-4 border-t border-[#222222] flex items-center justify-between">
                  <span className="text-xs text-[#666666]">
                    Photo path: <code className="text-[#888888]">{selectedItem.image}</code>
                  </span>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 rounded-xl bg-[#1a1a1a] hover:bg-[#222222] text-xs font-semibold text-white transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
