import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import {useThree} from '@react-three/fiber'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Form from '../Form/Form'




export function CamOrbitControls(props) {
  
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
    controls.minDistance=12
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

function contact(props) {
  const { nodes, materials } = useGLTF("/phone2.gltf");
  const tl=new gsap.timeline();
  let contH1 = useRef(null);
  let contH2 = useRef(null);
  useEffect(()=>{
    tl.from([contH1,contH2],1,{
        opacity:0,
        y:100,
        skewY:10,
        stagger:{
          amount:0.4
        }
    
      }),[]
  })
  return (
    <>
      <Navbar />
      <div className="mainBoxOfContact">
        <div className="leftOfContact" timeline={tl}>
          <p className="contTxt1" ref={el=>contH1=el}>Contact Me</p>
          <p className="contTxt2" ref={el=>contH2=el}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde enim
            labore cum illum? Praesentium, illo voluptatum adipisci veritatis
            quia velit nam pariatur voluptatibus amet, laudantium, minus veniam
            labore animi possimus!
          </p>
          <div className="bodyOfForm">
            <Form/>
            
          </div>
        </div>
        <div className="canvasDivOfContact">
          <Canvas>
            <ambientLight intensity={1} />
            <pointLight color={"#ff6f1d"} intensity={5}/>
            <directionalLight intensity={0.6} position={[0,1,1]} color={"white"}/>
            <CamOrbitControls />

            <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[5.96, 1, 2.88]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[0.49, 5.6, -0.03]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[0.23, 0.93, 1.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={nodes.Plane003.material}
        position={[0.19, 0.72, -2.66]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.5, 0.2, 0.26]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane004.geometry}
        material={nodes.Plane004.material}
        position={[0.2, 2.92, 2.82]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.26, 0.14, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane005.geometry}
        material={nodes.Plane005.material}
        position={[0.2, 2.23, 2.82]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[0.26, 0.14, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Material}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[5.96, 1, 2.88]}
      />
    </group>
          </Canvas>
        </div>
      </div>
    </>
  );
}

useGLTF.preload("/phone2.gltf");
export default contact;
