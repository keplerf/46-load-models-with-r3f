import React, { useRef } from "react";
import { Clone, useGLTF } from "@react-three/drei";

const Fox = () => {
  const model = useGLTF("./hamburger-draco.glb");

  return (
    <group position-y={4}>
      <Clone object={model.scene} scale={0.35} position-x={-4} castShadow />
      <Clone object={model.scene} scale={0.35} position-x={0} />
      <Clone object={model.scene} scale={0.35} position-x={4} />
    </group>
  );
};
useGLTF.preload("/hamburger.glb");

export default Fox;
