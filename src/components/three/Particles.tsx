"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points } from "three";
import * as THREE from "three";

const PARTICLE_COUNT = 150;

export default function Particles() {
  const pointsRef = useRef<Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(PARTICLE_COUNT * 3);
    const siz = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Scatter particles in the "outside window" area
      pos[i * 3] = (Math.random() - 0.5) * 10; // x
      pos[i * 3 + 1] = Math.random() * 6 + 1; // y (above desk)
      pos[i * 3 + 2] = -3 + Math.random() * -5; // z (behind window)
      siz[i] = Math.random() * 0.03 + 0.01;
    }

    return [pos, siz];
  }, []);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Slow upward drift
      posArray[i * 3 + 1] += 0.002;

      // Gentle sway
      posArray[i * 3] +=
        Math.sin(clock.getElapsedTime() * 0.3 + i * 0.1) * 0.001;

      // Reset to bottom when reaching top
      if (posArray[i * 3 + 1] > 7) {
        posArray[i * 3 + 1] = 1;
        posArray[i * 3] = (Math.random() - 0.5) * 10;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#818CF8"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
