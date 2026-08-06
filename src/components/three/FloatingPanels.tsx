"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import type { Group } from "three";
import TechCard from "@/components/dashboard/TechCard";
import AIToolkitCard from "@/components/dashboard/AIToolkitCard";
import CurrentProjectCard from "@/components/dashboard/CurrentProjectCard";
import LatestProjectCard from "@/components/dashboard/LatestProjectCard";

interface FloatingPanelProps {
  children: React.ReactNode;
  position: [number, number, number];
  floatSpeed?: number;
  floatAmplitude?: number;
  delay?: number;
}

function FloatingPanel({
  children,
  position,
  floatSpeed = 1,
  floatAmplitude = 0.08,
  delay = 0,
}: FloatingPanelProps) {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.position.y =
        position[1] +
        Math.sin(clock.getElapsedTime() * floatSpeed + delay) *
          floatAmplitude;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      <Html
        transform
        occlude={false}
        distanceFactor={4.5}
        style={{
          pointerEvents: "none",
        }}
      >
        <div style={{ pointerEvents: "auto" }}>{children}</div>
      </Html>
    </group>
  );
}

export default function FloatingPanels() {
  return (
    <group>
      {/* Technologies - top left */}
      <FloatingPanel
        position={[0.5, 4.5, -1.5]}
        floatSpeed={0.8}
        floatAmplitude={0.06}
        delay={0}
      >
        <TechCard delay={0} />
      </FloatingPanel>

      {/* AI Toolkit - top right */}
      <FloatingPanel
        position={[3.2, 4.5, -1.8]}
        floatSpeed={0.7}
        floatAmplitude={0.05}
        delay={1.5}
      >
        <AIToolkitCard delay={0.2} />
      </FloatingPanel>

      {/* Current Project - bottom left */}
      <FloatingPanel
        position={[0.5, 2.3, -1.2]}
        floatSpeed={0.9}
        floatAmplitude={0.07}
        delay={3}
      >
        <CurrentProjectCard delay={0.4} />
      </FloatingPanel>

      {/* Latest Project - bottom right */}
      <FloatingPanel
        position={[3.2, 2.4, -1.5]}
        floatSpeed={0.75}
        floatAmplitude={0.06}
        delay={4.5}
      >
        <LatestProjectCard delay={0.6} />
      </FloatingPanel>
    </group>
  );
}
