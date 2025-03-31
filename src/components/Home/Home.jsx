import React from "react";
import "./Home.css";
import Name from "../Name/Name.jsx";
import { Canvas } from "react-three-fiber";
import Particles from "../Particles";
import CamOrbitControls from "../CamOrbitControls";
import Torus from "../Torus";
import Navbar from "../Navbar/Navbar";

function home() {
  return (
    <>
      <div className="boxOfCanvas">
        <Navbar />
        <Name />
        <Canvas className="canvas" camera={{ position: [0, 0, 5] }}>
          <Particles />
          <CamOrbitControls />
          <Torus />
        </Canvas>
      </div>
    </>
  );
}
export default home;
