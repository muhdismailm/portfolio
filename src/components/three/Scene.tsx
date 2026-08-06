"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Camera from "./Camera";
import Lights from "./Lights";
import Desk from "./Desk";
import FloatingPanels from "./FloatingPanels";
import Particles from "./Particles";

function SceneLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
        <p className="text-sm text-text-muted font-medium">
          Loading workspace...
        </p>
      </div>
    </div>
  );
}

export default function Scene() {
  return (
    <div className="relative w-full h-full min-h-[500px]">
      <Suspense fallback={<SceneLoader />}>
        <Canvas
          shadows
          dpr={[1, 1.5]}
          gl={{
            antialias: true,
            toneMapping: 3, // ACESFilmicToneMapping
            toneMappingExposure: 1.2,
            powerPreference: "high-performance",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          {/* Fog for depth */}
          <fog attach="fog" args={["#030712", 8, 25]} />

          <Camera />
          <Lights />
          <Desk />
          <FloatingPanels />
          <Particles />
        </Canvas>
      </Suspense>
    </div>
  );
}
