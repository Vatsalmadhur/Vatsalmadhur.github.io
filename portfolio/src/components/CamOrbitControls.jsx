import React from "react";
import {useThree} from '@react-three/fiber'
import { useEffect } from "react";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function CamOrbitControls() {
  
    const { camera, gl } = useThree();
    const reqRef = useRef();
    const animate = ()=>{
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 5;
      controls.update();
      console.log("hgewjhgas")
      reqRef.current = requestAnimationFrame(animate);
    }
  
    const controls = new OrbitControls(camera, gl.domElement);
    useEffect(() => {
      reqRef.current = requestAnimationFrame(animate);
      
      return () => {
        controls.dispose();
      };
    }, [camera, gl]);
  }

export default CamOrbitControls;