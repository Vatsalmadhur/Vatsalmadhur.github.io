// import React from "react";
import {useThree} from '@react-three/fiber'
import { useEffect } from "react";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function CamOrbitControls(props) {
  
    const { camera, gl } = useThree();
    const reqRef = useRef();
    const controls = new OrbitControls(camera, gl.domElement);
    const animate = ()=>{
      controls.enableDamping = true;
      controls.enablePan = false;
      // console.log(controls)
      controls.enableZoom=false
      controls.autoRotate = true
      controls.autoRotateSpeed = 5
      controls.minDistance=0
      controls.maxDistance=5
      // console.log("hgewjhgas")
      controls.update();
      reqRef.current = requestAnimationFrame(animate);
    }
  
    useEffect(() => {
      reqRef.current = requestAnimationFrame(animate);
      
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
  }

export default CamOrbitControls;