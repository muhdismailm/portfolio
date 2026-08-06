"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import type { Group } from "three";

const orbitTechs = [
  { name: "React", icon: "⚛️", color: "#61DAFB" },
  { name: "Next.js", icon: "▲", color: "#FFFFFF" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Python", icon: "🐍", color: "#3776AB" },
  { name: "OpenCV", icon: "👁️", color: "#5C3EE8" },
  { name: "TensorFlow", icon: "🧠", color: "#FF6F00" },
  { name: "Tailwind", icon: "🌊", color: "#06B6D4" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28" },
];

function OrbitScene() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.2;
      groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Glowing Core */}
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial
          color="#6366F1"
          emissive="#6366F1"
          emissiveIntensity={2}
          roughness={0.2}
        />
      </mesh>

      {/* Inner Glowing Ring */}
      <mesh rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshStandardMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={1.5} />
      </mesh>

      {/* Outer Orbiting Spheres */}
      {orbitTechs.map((tech, idx) => {
        const angle = (idx / orbitTechs.length) * Math.PI * 2;
        const radius = 2.2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <group key={tech.name} position={[x, 0, z]}>
            <mesh>
              <sphereGeometry args={[0.22, 16, 16]} />
              <meshStandardMaterial
                color={tech.color}
                emissive={tech.color}
                emissiveIntensity={0.6}
                roughness={0.3}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

export default function TechOrbitSection() {
  return (
    <section id="tech-orbit" className="relative py-24 bg-[#030712] overflow-hidden">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Interactive Universe</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Tech <span className="text-primary">Orbit</span>
          </h2>
          <p className="text-sm text-slate-300 mt-2">
            An ecosystem of tools, frameworks, and AI libraries driving digital innovation.
          </p>
        </motion.div>

        {/* 3D Orbit Canvas & Badges Grid */}
        <div className="relative mx-auto max-w-4xl h-[360px] sm:h-[420px] rounded-3xl glass-panel border border-white/10 overflow-hidden bg-slate-950/80 flex items-center justify-center">
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 2, 5.5], fov: 45 }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[5, 5, 5]} intensity={2} color="#6366F1" />
              <pointLight position={[-5, -5, -5]} intensity={1} color="#06B6D4" />
              <OrbitScene />
            </Canvas>
          </div>

          {/* Floating Badges Overlay */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 p-6 max-w-2xl pointer-events-none">
            {orbitTechs.map((tech) => (
              <span
                key={tech.name}
                className="px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-white/15 text-xs font-semibold text-white shadow-xl backdrop-blur-md flex items-center gap-1.5"
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
