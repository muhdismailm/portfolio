"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import type { Group, Mesh } from "three";
import * as THREE from "three";

function DeskSurface() {
  return (
    <group position={[0, 1, 0]}>
      {/* Main desk top */}
      <RoundedBox args={[5, 0.08, 2.4]} radius={0.02} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#4A3728"
          roughness={0.7}
          metalness={0.1}
        />
      </RoundedBox>
      {/* Desk legs */}
      {[
        [-2.3, -0.5, -1],
        [2.3, -0.5, -1],
        [-2.3, -0.5, 1],
        [2.3, -0.5, 1],
      ].map((pos, i) => (
        <RoundedBox key={i} args={[0.06, 1, 0.06]} radius={0.01} position={pos as [number, number, number]}>
          <meshStandardMaterial color="#2D1F14" roughness={0.8} />
        </RoundedBox>
      ))}
    </group>
  );
}

function Laptop() {
  const screenRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (screenRef.current) {
      const material = screenRef.current.material as THREE.MeshStandardMaterial;
      material.emissiveIntensity = 1.5 + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <group position={[0, 1.08, 0.2]} rotation={[0, 0, 0]}>
      {/* Laptop base */}
      <RoundedBox args={[1.6, 0.05, 1]} radius={0.02} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.8} />
      </RoundedBox>

      {/* Keyboard surface */}
      <mesh position={[0, 0.03, 0.05]}>
        <planeGeometry args={[1.4, 0.7]} />
        <meshStandardMaterial color="#0d0d1a" roughness={0.9} />
      </mesh>

      {/* Screen (angled) */}
      <group position={[0, 0.55, -0.47]} rotation={[-0.35, 0, 0]}>
        {/* Screen frame */}
        <RoundedBox args={[1.6, 1.05, 0.04]} radius={0.02}>
          <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.8} />
        </RoundedBox>

        {/* Screen display */}
        <mesh ref={screenRef} position={[0, 0, 0.025]}>
          <planeGeometry args={[1.4, 0.88]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#4338CA"
            emissiveIntensity={1.5}
            roughness={0.1}
          />
        </mesh>

        {/* Code lines on screen */}
        {Array.from({ length: 8 }).map((_, i) => (
          <mesh
            key={i}
            position={[-0.35 + (i % 3) * 0.05, 0.3 - i * 0.08, 0.03]}
          >
            <planeGeometry args={[0.3 + Math.random() * 0.4, 0.02]} />
            <meshStandardMaterial
              color={
                i % 3 === 0
                  ? "#818CF8"
                  : i % 3 === 1
                  ? "#22D3EE"
                  : "#22C55E"
              }
              emissive={
                i % 3 === 0
                  ? "#818CF8"
                  : i % 3 === 1
                  ? "#22D3EE"
                  : "#22C55E"
              }
              emissiveIntensity={0.8}
              transparent
              opacity={0.7}
            />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Keyboard() {
  return (
    <group position={[0, 1.08, 1]}>
      {/* Keyboard body */}
      <RoundedBox args={[1.8, 0.06, 0.6]} radius={0.02}>
        <meshStandardMaterial color="#1a1a2e" roughness={0.4} metalness={0.6} />
      </RoundedBox>

      {/* Key rows */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 12 }).map((_, col) => (
          <mesh
            key={`${row}-${col}`}
            position={[-0.75 + col * 0.13, 0.04, -0.2 + row * 0.13]}
          >
            <boxGeometry args={[0.1, 0.03, 0.1]} />
            <meshStandardMaterial color="#111827" roughness={0.6} metalness={0.3} />
          </mesh>
        ))
      )}
    </group>
  );
}

function Mouse() {
  return (
    <group position={[1.5, 1.08, 0.9]}>
      {/* Mouse pad */}
      <RoundedBox args={[0.9, 0.02, 0.7]} radius={0.02} position={[0, -0.02, 0]}>
        <meshStandardMaterial color="#111827" roughness={0.9} />
      </RoundedBox>

      {/* Mouse body */}
      <mesh>
        <capsuleGeometry args={[0.12, 0.15, 8, 16]} />
        <meshStandardMaterial color="#1E293B" roughness={0.3} metalness={0.7} />
      </mesh>

      {/* Mouse scroll wheel */}
      <mesh position={[0, 0.08, -0.05]}>
        <cylinderGeometry args={[0.02, 0.02, 0.06, 8]} />
        <meshStandardMaterial color="#6366F1" emissive="#6366F1" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}

function CoffeeMug() {
  return (
    <group position={[-1.8, 1.08, 0.6]}>
      {/* Mug body */}
      <mesh>
        <cylinderGeometry args={[0.12, 0.1, 0.25, 16]} />
        <meshStandardMaterial color="#1E293B" roughness={0.4} metalness={0.2} />
      </mesh>

      {/* Coffee surface */}
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.1, 16]} />
        <meshStandardMaterial color="#3C1F0A" roughness={0.3} />
      </mesh>

      {/* Handle */}
      <mesh position={[0.15, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.06, 0.015, 8, 16, Math.PI]} />
        <meshStandardMaterial color="#1E293B" roughness={0.4} metalness={0.2} />
      </mesh>
    </group>
  );
}

function DeskLamp() {
  const lampRef = useRef<Group>(null);

  return (
    <group ref={lampRef} position={[-2, 1.08, -0.5]}>
      {/* Base */}
      <mesh>
        <cylinderGeometry args={[0.15, 0.18, 0.04, 16]} />
        <meshStandardMaterial color="#1a1a2e" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Arm */}
      <mesh position={[0, 0.8, 0]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.015, 0.015, 1.5, 8]} />
        <meshStandardMaterial color="#2D2D4E" roughness={0.3} metalness={0.8} />
      </mesh>

      {/* Shade */}
      <mesh position={[0.08, 1.5, 0]} rotation={[0.2, 0, 0.1]}>
        <coneGeometry args={[0.2, 0.25, 16, 1, true]} />
        <meshStandardMaterial
          color="#2D2D4E"
          roughness={0.3}
          metalness={0.8}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Bulb glow */}
      <pointLight
        position={[0.08, 1.4, 0]}
        intensity={3}
        color="#FFA94D"
        distance={5}
        decay={2}
      />
    </group>
  );
}

function Plant() {
  return (
    <group position={[2.2, 1.08, -0.5]}>
      {/* Pot */}
      <mesh>
        <cylinderGeometry args={[0.1, 0.08, 0.18, 8]} />
        <meshStandardMaterial color="#4A3728" roughness={0.8} />
      </mesh>

      {/* Soil */}
      <mesh position={[0, 0.08, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.09, 8]} />
        <meshStandardMaterial color="#2D1F14" roughness={0.9} />
      </mesh>

      {/* Leaves */}
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh
          key={i}
          position={[
            Math.cos((i * Math.PI * 2) / 5) * 0.05,
            0.18 + i * 0.04,
            Math.sin((i * Math.PI * 2) / 5) * 0.05,
          ]}
          rotation={[
            Math.random() * 0.5 - 0.25,
            (i * Math.PI * 2) / 5,
            0.3 + Math.random() * 0.3,
          ]}
        >
          <planeGeometry args={[0.08, 0.12]} />
          <meshStandardMaterial
            color="#22C55E"
            roughness={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  );
}

function StickyNotes() {
  const colors = ["#FBBF24", "#FB923C", "#A78BFA"];
  const positions: [number, number, number][] = [
    [1.8, 1.1, -0.8],
    [1.5, 1.1, -0.9],
    [2.0, 1.1, -0.6],
  ];

  return (
    <>
      {positions.map((pos, i) => (
        <mesh
          key={i}
          position={pos}
          rotation={[-Math.PI / 2, 0, (i - 1) * 0.15]}
        >
          <planeGeometry args={[0.2, 0.2]} />
          <meshStandardMaterial
            color={colors[i]}
            roughness={0.9}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </>
  );
}

function Window() {
  return (
    <group position={[0, 3.5, -3]}>
      {/* Window frame */}
      <mesh>
        <planeGeometry args={[8, 5]} />
        <meshStandardMaterial
          color="#0a0a1a"
          emissive="#0a0a2e"
          emissiveIntensity={0.3}
          roughness={0.1}
        />
      </mesh>

      {/* City skyline silhouettes */}
      {[
        { x: -3, h: 1.5, w: 0.5 },
        { x: -2.2, h: 2.5, w: 0.6 },
        { x: -1.5, h: 1.8, w: 0.4 },
        { x: -0.8, h: 3, w: 0.5 },
        { x: -0.2, h: 2, w: 0.45 },
        { x: 0.4, h: 2.8, w: 0.55 },
        { x: 1.1, h: 1.6, w: 0.4 },
        { x: 1.7, h: 3.2, w: 0.5 },
        { x: 2.4, h: 2.2, w: 0.6 },
        { x: 3, h: 1.4, w: 0.45 },
      ].map((building, i) => (
        <group key={i}>
          <mesh position={[building.x, -2.5 + building.h / 2, 0.01]}>
            <boxGeometry args={[building.w, building.h, 0.02]} />
            <meshStandardMaterial
              color="#111827"
              emissive="#1a1a3e"
              emissiveIntensity={0.2}
            />
          </mesh>
          {/* Building windows */}
          {Array.from({ length: Math.floor(building.h * 3) }).map((_, j) =>
            Array.from({ length: 2 }).map((_, k) => (
              <mesh
                key={`${j}-${k}`}
                position={[
                  building.x - 0.08 + k * 0.16,
                  -2.5 + 0.3 + j * 0.3,
                  0.02,
                ]}
              >
                <planeGeometry args={[0.06, 0.08]} />
                <meshStandardMaterial
                  color="#FFA94D"
                  emissive="#FFA94D"
                  emissiveIntensity={Math.random() > 0.4 ? 0.6 : 0.1}
                  transparent
                  opacity={Math.random() > 0.3 ? 0.8 : 0.2}
                />
              </mesh>
            ))
          )}
        </group>
      ))}

      {/* Stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <mesh
          key={`star-${i}`}
          position={[
            (Math.random() - 0.5) * 7,
            Math.random() * 2,
            0.01,
          ]}
        >
          <circleGeometry args={[0.01 + Math.random() * 0.015, 6]} />
          <meshStandardMaterial
            color="#FFFFFF"
            emissive="#FFFFFF"
            emissiveIntensity={0.5 + Math.random() * 0.5}
            transparent
            opacity={0.4 + Math.random() * 0.6}
          />
        </mesh>
      ))}
    </group>
  );
}

function NeonStrip() {
  return (
    <>
      {/* Under desk neon strip */}
      <mesh position={[0, 0.5, 1.2]}>
        <boxGeometry args={[4.5, 0.02, 0.02]} />
        <meshStandardMaterial
          color="#6366F1"
          emissive="#6366F1"
          emissiveIntensity={3}
        />
      </mesh>
      {/* Side neon */}
      <mesh position={[-2.4, 0.5, 0.1]}>
        <boxGeometry args={[0.02, 0.02, 2.2]} />
        <meshStandardMaterial
          color="#06B6D4"
          emissive="#06B6D4"
          emissiveIntensity={2}
        />
      </mesh>
    </>
  );
}

export default function Desk() {
  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#0a0a14" roughness={0.9} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 3, -3.1]}>
        <planeGeometry args={[12, 8]} />
        <meshStandardMaterial color="#0d0d1a" roughness={0.95} />
      </mesh>

      <Window />
      <DeskSurface />
      <Laptop />
      <Keyboard />
      <Mouse />
      <CoffeeMug />
      <DeskLamp />
      <Plant />
      <StickyNotes />
      <NeonStrip />
    </group>
  );
}
