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
        <div className="head_abt_1" timeline={tl} >
          <p className="abtText1" ref={el=>abtH=el} >About Me!</p>
          <p className="abtText2" ref={el=>abtB=el}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            molestiae nisi autem dolore aut ullam minima vitae, laudantium
            ducimus a provident rem accusamus, laborum adipisci iure possimus
            fugit sit deserunt sed delectus fuga? Consequatur provident expedita
            nulla labore veniam. Amet ipsa, reiciendis temporibus iusto eligendi
            autem provident tempora fuga ex esse cum iure, vero nemo velit
            recusandae laudantium eius itaque deserunt qui perferendis sequi
            molestiae consequuntur. Autem repellat consectetur dolorum sequi sit
            neque odit dolor consequuntur aspernatur fuga laborum corporis, quod
            dolorem recusandae reprehenderit sapiente tempora quisquam labore
            beatae. Quaerat commodi alias eveniet dignissimos? Provident sunt
            alias obcaecati dicta hic!
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
      <Forward to={"/project"} />
    </>
  );
}
export default About;
