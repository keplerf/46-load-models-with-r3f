import React, { useState } from "react";
import { PerformanceMonitor } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const App = () => {
  const [dpr, setDpr] = useState(1.5);
  return (
    <Canvas
      shadows
      // frameloop="demand"
      dpr={dpr}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <PerformanceMonitor
        onIncline={() => setDpr(2)}
        onDecline={() => setDpr(1)}
      >
        <Experience />
      </PerformanceMonitor>
    </Canvas>
  );
};
export default App;
