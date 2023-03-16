import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import CamOrbitControls from "../CamOrbitControls";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";

function contact(props) {
  const { nodes, materials } = useGLTF("/phone.gltf");
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
           
          </div>
        </div>
        <div className="canvasDivOfContact">
          <Canvas camera={{ position: [10, 1, 0] }}>
            <ambientLight intensity={2} />
            <CamOrbitControls />

            <group {...props} dispose={null}>
              <mesh>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane.geometry}
                  material={nodes.Plane.material}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[1.91, 1.11, 1.01]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Cube.geometry}
                  material={nodes.Cube.material}
                  position={[0.1, 1.69, 0.75]}
                  scale={[0.05, 0.06, 0.12]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere.geometry}
                  material={nodes.Sphere.material}
                  position={[0.14, 1.69, 0.81]}
                  scale={0.03}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere001.geometry}
                  material={nodes.Sphere001.material}
                  position={[0.14, 1.69, 0.69]}
                  scale={0.03}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane002.geometry}
                  material={nodes.Plane002.material}
                  position={[0.1, 1.24, -0.6]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[0.44, 0.28, 0.16]}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere002.geometry}
                  material={nodes.Sphere002.material}
                  position={[0, 1.54, -0.6]}
                  scale={-0.06}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere003.geometry}
                  material={nodes.Sphere003.material}
                  position={[0, 1.34, -0.6]}
                  scale={-0.06}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere004.geometry}
                  material={nodes.Sphere004.material}
                  position={[0, 1.14, -0.6]}
                  scale={-0.06}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Sphere005.geometry}
                  material={nodes.Sphere005.material}
                  position={[0, 0.93, -0.6]}
                  scale={-0.06}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.Plane001.geometry}
                  material={materials["Material.001"]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={[1.91, 1.11, 1.01]}
                />
              </mesh>
            </group>
          </Canvas>
        </div>
      </div>
    </>
  );
}

useGLTF.preload("/phone.gltf");
export default contact;
