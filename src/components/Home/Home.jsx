import React from "react";
import "./Home.css";
import Name from "../Name/Name.jsx";
import { Canvas } from "react-three-fiber";
import Particles from "../Particles";
import Torus from "../Torus";
import { OrbitControls } from "@react-three/drei";

function home() {
  return (
    <>
      <div className="boxOfCanvas">
        <Name />
        <Canvas className="canvas" camera={{ position: [0, 0, 5] }}>
          <Particles />
          <OrbitControls
            enableDamping={true}
            enablePan={true}
            enableZoom={true}
            autoRotate={true}
            autoRotateSpeed={2}
            minDistance={0}
            maxDistance={4}
          />
          <Torus />
        </Canvas>
      </div>
    </>
  );
}
export default home;
