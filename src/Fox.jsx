import React, { useRef, useEffect } from "react";
import { Clone, useGLTF, useAnimations } from "@react-three/drei";
import { useControls } from "leva";

const Fox = () => {
  const model = useGLTF("./Fox/glTF/Fox.gltf");

  const animations = useAnimations(model.animations, model.scene);

  const { animationName } = useControls({
    animationName: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action.reset().fadeIn(0.5).play();

    // window.setTimeout(() => {
    //   animations.actions.Walk.play();
    //   animations.actions.Walk.crossFadeFrom(animations.actions.Run, 1);
    // }, 2000);
    return () => {
      action.fadeOut(0.9);
    };
  }, [animationName]);

  return (
    <group position-y={-1}>
      <primitive object={model.scene} scale={0.05} position-x={-4} />
      <Clone object={model.scene} scale={0.05} position-x={0} castShadow />
      <Clone object={model.scene} scale={0.05} position-x={4} />
    </group>
  );
};
useGLTF.preload("./Fox/glTF/Fox.gltf");

export default Fox;
