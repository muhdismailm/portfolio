"use client";

export default function Lights() {
  return (
    <>
      {/* Ambient fill — very dim */}
      <ambientLight intensity={0.15} color="#b8c5d6" />

      {/* Desk lamp — warm spot light */}
      <spotLight
        position={[-2.5, 4.5, 1]}
        angle={0.5}
        penumbra={0.8}
        intensity={2.5}
        color="#FFA94D"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Screen glow — bluish point light */}
      <pointLight
        position={[0, 2.2, 1.5]}
        intensity={1.5}
        color="#6366F1"
        distance={6}
        decay={2}
      />

      {/* Window light — cool moonlight */}
      <directionalLight
        position={[4, 5, -3]}
        intensity={0.4}
        color="#94A3B8"
      />

      {/* Rim light — subtle accent from behind */}
      <pointLight
        position={[-3, 3, -2]}
        intensity={0.6}
        color="#06B6D4"
        distance={8}
        decay={2}
      />

      {/* Under-desk neon glow */}
      <pointLight
        position={[0, 0.1, 1]}
        intensity={0.8}
        color="#6366F1"
        distance={4}
        decay={2}
      />
    </>
  );
}
