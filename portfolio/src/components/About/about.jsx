import React from "react";
import "./About.css";
import { Canvas } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Sphere from "../Sphere/Sphere.jsx";
import Forward from "../Navigation/Forward";
import Navbar from "../Navbar/Navbar";
import {gsap} from "gsap"

function CCB() {
  const { camera, gl } = useThree();
  const reqRef = useRef();
  const animate = () => {
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 10;
    controls.minDistance = 13;
    controls.maxDistance = 13;
    controls.update();
    console.log("hgewjhgas");
    reqRef.current = requestAnimationFrame(animate);
  };

  const controls = new OrbitControls(camera, gl.domElement);
  useEffect(() => {

   


    reqRef.current = requestAnimationFrame(animate);
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);

 
}

function About() {
const tl= new gsap.timeline();
  let abtH=useRef(null);
  let abtB=useRef(null);
  useEffect(()=>{
    tl.from([abtH,abtB],1,{
      opacity:0,
      y:100,
      skewY :10,
      stagger:{
        amount:0.4
      }
  
    })

  })

  return (
    <>
      <Navbar />
      <div className="boxForAbt">
        <div className="head_abt_1"  >
          <p className="abtText1" ref={el=>abtH=el} >About Me!</p>
          <p className="abtText2" ref={el=>abtB=el}>
           Hi! I'm Madhur Vatsal Bharti. Nice to meet you! <br />
           I am a self-taught Web developer, a fast-learner and an aspiring app developer.I passionately combine good design, technology, and innovation in all my projects, which I like to accompany from the first idea to release. <br />
            I don't like to define myself by the work i've done. I define myself by the work i want to do.
          </p>
        </div>
        <div className="head_abt_2">
          <Canvas
            className="canvas2"
            camera={{ position: [0, 0, 15] }}
            color="black"
          >
            <Sphere />
            <CCB />
          </Canvas>
          <p className="subHeadCanvas">
            Bored reading? Give me a spin instead!
          </p>
        </div>
      </div>
      {/* <Forward to={"/project"} /> */}
    </>
  );
}
export default About;
