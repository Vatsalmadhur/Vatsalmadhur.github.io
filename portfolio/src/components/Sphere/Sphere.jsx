import React from "react";
import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
function Box() {
  const mesh = useRef();
  return (
    <>
    <pointLight
          args={[0xfaa500, 1, 100]}
          position={[0, 10, 10]}
          intensity={1.5}
        />


      <mesh ref={mesh} >
        <sphereGeometry args={[6, 64, 64]}  />
        <meshStandardMaterial color={'#faa500'} />
      </mesh>
    </>
  );
}
export default Box;
