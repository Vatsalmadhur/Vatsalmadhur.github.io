import React from "react";
import "./Home.css";
import Name from "../Name/Name.jsx";
import { Canvas } from "react-three-fiber";
import CamOrbitControls from "../CamOrbitControls";
import Box from "../Torus";
import Navbar from "../Navbar/Navbar";
import Particles from "../Particles";

function home() {
  return (
    <>
      <div className="boxOfCanvas">
        <Navbar />
        <Name />
        <Canvas className="canvas" camera={{ position: [0, 0, 5] }}>
          <Particles />
          <CamOrbitControls />
          <Box />
        </Canvas>
      </div>
    </>
  );
}
export default home;
