"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import HeroContent from "./HeroContent";
import TechCard from "@/components/dashboard/TechCard";
import AIToolkitCard from "@/components/dashboard/AIToolkitCard";
import CurrentProjectCard from "@/components/dashboard/CurrentProjectCard";
import LatestProjectCard from "@/components/dashboard/LatestProjectCard";
import Particles from "@/components/three/Particles";
import { Canvas } from "@react-three/fiber";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#030712] flex items-center pt-20 pb-12 lg:pt-0 lg:pb-0"
      aria-label="Hero workspace"
    >
      {/* Cinematic Workspace Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/clean-bg.jpg"
          alt="Developer Workspace"
          fill
          priority
          quality={95}
          className="object-cover object-center scale-100 transition-transform duration-1000"
        />
        {/* Subtle Vignette & Gradient Overlays for high readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/90 via-[#030712]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/60" />
      </div>

      {/* Floating Canvas Particles */}
      {mounted && (
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas
            dpr={[1, 1.5]}
            camera={{ position: [0, 0, 5], fov: 60 }}
            gl={{ alpha: true, antialias: true }}
          >
            <Particles />
          </Canvas>
        </div>
      )}

      {/* Main Content Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-5rem)] py-8">
          {/* Left Column: Hero Text Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* Right Column: Wall-Mounted Holographic Cards (3D Perspective) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full max-w-2xl"
              style={{
                perspective: "1200px",
                transform: "rotateY(-4deg) rotateX(1.5deg)",
              }}
            >
              {/* Card 1: Technologies (Top Left) */}
              <div className="animate-float-gentle">
                <TechCard delay={0.1} />
              </div>

              {/* Card 2: AI / ML Toolkit (Top Right) */}
              <div className="animate-float-delayed">
                <AIToolkitCard delay={0.2} />
              </div>

              {/* Card 3: Currently Building (Bottom Left) */}
              <div className="animate-float-delayed">
                <CurrentProjectCard delay={0.3} />
              </div>

              {/* Card 4: Latest Project (Bottom Right) */}
              <div className="animate-float-gentle">
                <LatestProjectCard delay={0.4} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-20" />
    </section>
  );
}
