import React from "react";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
function Box() {
  // const points = useRef();
  return (
    <>
      {/* <pointLight args={[0xff0000, 0.1]} position={[2, 3, 4]} intensity={1.5} /> */}

      <points >
        <torusGeometry args={[2, 0.5, 16, 100]} />
        <pointsMaterial size={0.01} color={"#ff6f1d"} />
      </points>
    </>
  );
}
export default Box;
