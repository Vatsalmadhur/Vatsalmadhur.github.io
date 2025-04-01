import React from "react";
import "./Home.css";
import Name from "../Name/Name.jsx";
import { Canvas } from "react-three-fiber";
import Particles from "../Particles";
import CamOrbitControls from "../CamOrbitControls";
import Torus from "../Torus";
import Navbar from "../Navbar/Navbar";
import { OrbitControls } from "@react-three/drei";

function home() {
  return (
    <>
      <div className="boxOfCanvas">
        <Navbar />
        <Name />
        <Canvas className="canvas" camera={{ position: [0, 0, 5] }}>
          <Particles />
          <CamOrbitControls />
          {/* <OrbitControls
            enableDamping={true}
            enablePan={false}
            enableZoom={false}
            autoRotate={true}
            autoRotateSpeed={2}
            minDistance={0}
            maxDistance={4}
          /> */}
          <Torus />
        </Canvas>
      </div>
    </>
  );
}
export default home;
