"use client";

import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Very subtle red ambient gradient spot */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#FF1018]/[0.035] rounded-full blur-[140px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-[#FF1018]/[0.02] rounded-full blur-[160px]" />

      {/* Lightweight subtle 3D Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={1}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        style={{ pointerEvents: "none" }}
      >
        <Particles count={isMobile ? 25 : 55} />
      </Canvas>
    </div>
  );
}
