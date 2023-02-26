import React from "react";
import { useRef } from "react";
// import { useThree } from "@react-three/fiber";
// import { Points, PointsMaterial } from "three";
import { BufferGeometry } from "three";
import { BufferAttribute } from "three";
// import CamOrbitControls from "./CamOrbitControls";
import { Clock } from "three";


function Random() {
  // let i=0;
  const point = useRef();
  console.log(point)
  const particleGeo = new BufferGeometry();
  const partCount = 10000;
  const posArray = new Float32Array(partCount * 3);

  for (var i = 0; i < partCount; i++) {
    posArray[i] = (Math.random()-0.5) *10;
    // console.log("hello");
  }
//   particleGeo.addAttribute("position", posArray, 3);
  particleGeo.setAttribute('position',new BufferAttribute(posArray,3));
  // console.log(particleGeo.attributes);


//Mouse
document.addEventListener('mousemove',animateParticles)
let mouseX = 0;
let mouseY = 0;


function animateParticles(event){
  mouseX=event.clientX
  mouseY=event.clientY
  console.log(mouseX)

}
const time = new Clock();

const Tick =()=>{

  const elapsedTime = time.getElapsedTime();
  // console.log(mouseY)
  point.rotateY= mouseY *elapsedTime
  requestAnimationFrame(Tick)
}
Tick();


  return (
    // <>
    <points ref={point}  >
    
      <primitive attach="geometry" object={particleGeo} />
      <pointsMaterial
       size={0.01}
        color="white"
         />
    </points>
    // </>
  );
}

export default Random;
