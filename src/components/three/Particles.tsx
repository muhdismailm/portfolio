"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import type { Points } from "three";
import * as THREE from "three";

export default function Particles({ count = 60 }: { count?: number }) {
  const pointsRef = useRef<Points>(null);

  const [positions, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const siz = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
      siz[i] = Math.random() * 0.025 + 0.01;
    }

    return [pos, siz];
  }, [count]);

  useFrame(({ clock }) => {
    if (!pointsRef.current) return;
    const posArray = pointsRef.current.geometry.attributes.position
      .array as Float32Array;

    for (let i = 0; i < count; i++) {
      // Gentle slow upward drift
      posArray[i * 3 + 1] += 0.0015;
      posArray[i * 3] += Math.sin(clock.getElapsedTime() * 0.2 + i * 0.2) * 0.0008;

      if (posArray[i * 3 + 1] > 5) {
        posArray[i * 3 + 1] = -5;
        posArray[i * 3] = (Math.random() - 0.5) * 14;
      }
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#FF1018"
        transparent
        opacity={0.35}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
