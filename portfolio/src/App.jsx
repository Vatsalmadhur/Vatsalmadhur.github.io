import React from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Box from "./components/Box";
import CamOrbitControls from "./components/CamOrbitControls";
import Random from "./components/Random";
import Name from "./components/Name/Name.jsx";
// import { useRef } from "react";

function App() {
  // const body=useRef();
  // const animation=()=>{
  //   console.log("animate")
  //   body.height=window.innerHeight;
  //   body.width=window.innerWidth;
  //   requestAnimationFrame(animation);
  // }
  // animation()

  return (
    <>
      <div className="boxOfCanvas" >
        <Name />
      <Canvas
        className="canvas"
        camera={{ position: [0, 0, 5] }}
      >
        <Random />
        <CamOrbitControls/> 
        <Box/>
        
      </Canvas>
      </div>
      
    </>
  );
}

export default App;
