import { useTexture } from "@react-three/drei";
import React from "react";
import { useLoader } from "react-three-fiber";
import { TextureLoader } from "three";
function Torus() {
  // const points = useRef();
  const textureLoader = useLoader(TextureLoader,'/Ellipse.webp');


  return (
    <>

      <points >
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <pointsMaterial size={0.01} map={textureLoader}
        blending='screen'
        />
      </points>
    </>
  );
}
export default Torus;
