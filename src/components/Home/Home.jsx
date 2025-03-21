import React from "react";
import "./Home.css";
import Name from "../Name/Name.jsx";
import { Canvas } from "react-three-fiber";
import Random from "../Random";
import CamOrbitControls from "../CamOrbitControls";
import Box from "../Box";
import Navbar from "../Navbar/Navbar";

function home() {
  return (
    <>
      <div className="boxOfCanvas">
        <Navbar />
        <Name />
        <Canvas className="canvas" camera={{ position: [0, 0, 5] }}>
          <Random />
          <CamOrbitControls />
          <Box />
        </Canvas>
      </div>
    </>
  );
}
export default home;
