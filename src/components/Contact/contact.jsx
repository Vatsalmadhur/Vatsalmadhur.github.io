import React, { Suspense, useEffect, useRef, useState, } from "react";
import { Canvas } from "@react-three/fiber";
import {  Loader, OrbitControls} from "@react-three/drei";
import "./Contact.css";
import gsap from "gsap";
import Form from '../Form/Form'
import { Heading } from "../Heading/Heading";
// import Phone from "../Phone/Phone";
import { useGSAP } from "@gsap/react";
import Loading from "../Loader/Loading";
const Lights = React.lazy(()=> import('../Phone/Lights'))
const Phone = React.lazy(()=> import('../Phone/Phone'))

function contact() {

  const textRef = useRef(null);
const [loading,setLoading]=useState(true);
  const tl = new gsap.timeline();
  useGSAP(() => {
    tl.from(textRef.current, {
      opacity: 0,
      x: 100,
      stagger: { amount: 0.4 },
    });

    return () => tl.kill();
  }, []);

  useEffect(()=>{
    const delay = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return ()=> clearTimeout(delay);
  })
  return (
    <>
        <div className="mainBoxOfContact">
          <div className="leftOfContact" timeline={tl}>
            <div className="leftWrap">
              <div className="contTxt1" ><Heading title="Contact" /><Heading title="Me!" /></div>
              <p ref={textRef} className="contTxt2" >
                Thank you for visiting my portfolio! Whether you have questions about my work, want to collaborate on a project, or simply want to say hello, I'd love to hear from you. Please feel free to reach out using the contact form below.
              </p>
              <div className="bodyOfForm">
                <Form />
              </div>
            </div>
          </div>

          <div className="canvasDivOfContact">
          {/* {loading ? (<Loading/>):
          ( */}
            <Suspense fallback={<Loading/>}>
            <Canvas gl={{ powerPreference: "high-performance", antialias: true }}  >
              <Lights />
              <OrbitControls
                enableDamping
                enablePan={false}
                enableZoom={false}
                autoRotate={true}
                autoRotateSpeed={0.5}
              />

            <Phone scale={[35, 35, 35]} />
            </Canvas>
            </Suspense>
          {/* // )} */}
          </div>
        </div>
    </>
  );
}
export default contact;