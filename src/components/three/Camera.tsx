"use client";

import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import type { PerspectiveCamera as PerspectiveCameraType } from "three";
import { PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export default function Camera() {
  const cameraRef = useRef<PerspectiveCameraType>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  // Track mouse position
  useFrame(({ pointer }) => {
    mouse.current.x = pointer.x;
    mouse.current.y = pointer.y;

    if (cameraRef.current) {
      // Subtle parallax — camera moves slightly with mouse
      const targetX = 0 + mouse.current.x * 0.3;
      const targetY = 2.5 + mouse.current.y * 0.2;

      cameraRef.current.position.x = THREE.MathUtils.lerp(
        cameraRef.current.position.x,
        targetX,
        0.03
      );
      cameraRef.current.position.y = THREE.MathUtils.lerp(
        cameraRef.current.position.y,
        targetY,
        0.03
      );

      cameraRef.current.lookAt(0, 1.5, 0);
    }
  });

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 2.5, 6]}
      fov={size.width < 768 ? 55 : 45}
      near={0.1}
      far={100}
    />
  );
}
