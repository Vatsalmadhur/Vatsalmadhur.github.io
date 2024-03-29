import React from "react";
import { TextureLoader } from "three";
import { useLoader } from "react-three-fiber";
function Box() {
  // const points = useRef();
  const textureLoader = useLoader(TextureLoader,'/Ellipse.png');


  return (
    <>
      {/* <pointLight args={[0xff0000, 0.1]} position={[2, 3, 4]} intensity={1.5} /> */}

      <points >
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <pointsMaterial size={0.01} map={textureLoader} 
        blending='screen'
        />
      </points>
    </>
  );
}
export default Box;
