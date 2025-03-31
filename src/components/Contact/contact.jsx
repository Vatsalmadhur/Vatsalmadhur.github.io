import React, { useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import gsap from "gsap";
import { useThree } from '@react-three/fiber'

import Form from '../Form/Form'
import Cursor from "../Cursor/Cursor";
import { Heading } from "../Heading/Heading";
import Phone from "../Phone/Phone";
import Lights from "../Phone/Lights";



// export function CamOrbitControls(props) {

//   const { camera, gl } = useThree();
//   const reqRef = useRef();
//   const controls = new OrbitControls(camera, gl.domElement);
//   const animate = () => {
//     controls.enableDamping = true;
//     controls.enablePan = false;
//     controls.enableZoom = false
//     // controls.autoRotate = true
//     controls.autoRotateSpeed = 5
//     controls.minDistance = 12
//     controls.maxDistance = 5
//     controls.update();
//     reqRef.current = requestAnimationFrame(animate);
//   }

//   useEffect(() => {
//     reqRef.current = requestAnimationFrame(animate);

//     return () => {
//       controls.dispose();
//     };
//   }, [camera, gl]);
// }

function contact(props) {
  // const { nodes, materials } = useGLTF("/phone2.gltf");
  const tl = new gsap.timeline();
  // let contH1 = useRef(null);
  // let contH2 = useRef(null);
  useEffect(() => {
    tl.from(".contText2", {
      opacity: 0,
      x: 100,
      stagger: {
        amount: 0.4
      }

    }), []
  })
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Navbar />
      {/* <Cursor /> */}
        <div className="mainBoxOfContact">
          <div className="leftOfContact" timeline={tl}>
            <div className="leftWrap">
              <div className="contTxt1" ><Heading title="Contact" /><Heading title="Me!" /></div>
              <p className="contTxt2" >
                Thank you for visiting my portfolio! Whether you have questions about my work, want to collaborate on a project, or simply want to say hello, I'd love to hear from you. Please feel free to reach out using the contact form below.
              </p>
              <div className="bodyOfForm">
                <Form />
              </div>
            </div>
          </div>

          <div className="canvasDivOfContact">
            {loading ? (<p>Loading...</p>) : (
            <Canvas gl={{ powerPreference: "high-performance", antialias: true }}  >
              {/* <ambientLight intensity={1} /> */}
              {/* <pointLight color={"#ffffff"} intensity={5} /> */}
              {/* <directionalLight intensity={0.6} position={[0, 1, 1]} color={"white"} /> */}
              <Lights />
              <OrbitControls
                enableDamping
                enablePan={false}
                enableZoom={false}
                autoRotate={true} // Change to true if needed
                autoRotateSpeed={0.5}
              // minDistance={5}
              // maxDistance={12}
              />

            <Phone scale={[35, 35, 35]} />
            </Canvas>
            )}
          </div>
        </div>
    </>
  );
}

// useGLTF.preload("/phone2.gltf");
export default contact;