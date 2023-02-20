import React from "react";
import { useRef } from "react";
import { useThree } from "@react-three/fiber";
import { PointsMaterial } from "three";
import { BufferGeometry } from "three";
import { BufferAttribute } from "three";
// import { TextureLoader } from "three";
// import star from './star.png'

// const loader =new TextureLoader();
// const starImg=loader.load({star});

function Random() {
  // let i=0;
  const particleGeo = new BufferGeometry();
  const partCount = 5000;
  const posArray = new Float32Array(partCount * 3);
  // while(i<partCount*3){
  //     posArray[i++]=Math.random()*innerWidth;
  //     posArray[i++]=Math.random()*innerHeight;
  //     posArray[i++]=Math.random();

  // }
  for (var i = 0; i < partCount; i++) {
    posArray[i] = (Math.random()-0.5) *10;
    console.log("hello");
  }
//   particleGeo.addAttribute("position", posArray, 3);
  particleGeo.setAttribute('position',new BufferAttribute(posArray,3));
  console.log(particleGeo.attributes);

  return (
    // <>
    <points>
    
      <primitive attach="geometry" object={particleGeo} />
      <pointsMaterial size={0.01} color="pink"
      //  map={starImg} 
      //  transparent="true"
         />
    </points>
    // </>
  );
}

export default Random;
