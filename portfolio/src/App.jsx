import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";
import CamOrbitControls from './components/CamOrbitControls'
import Random from './components/Random'



function App() {
  return (
    <Canvas className="canvas" camera={{ position: [0, 0, 5] }}>
      <CamOrbitControls />
      <Box />
      <Random/>
      
    </Canvas>
  );
}

export default App;
