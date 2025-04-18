import React, { Suspense, useState } from "react";
import "./About.css";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";
import { gsap } from "gsap";
import { Heading } from "../Heading/Heading";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { useGSAP } from '@gsap/react';
import Loading from "../Loader/Loading";
const Info = React.lazy(()=>import("../AboutInfo/Info"))

function About() {
  const tl = new gsap.timeline();
  let abtB = useRef(null);
  useGSAP(() => {
    tl.from([abtB], 1, {
      opacity: 0,
      x: 100,
      stagger: {
        amount: 0.4,
      },
    });
  });


  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      {/* <Cursor/> */}
      <div className="boxForAbt">
        <div className="head_abt_1">
          <div className="abtText1"><Heading title="About Me!"/></div>
          <p className="abtText2" ref={(el) => (abtB = el)}>
          I'm Madhur, a creative fullstack developer dedicated to crafting compelling user experiences. I specialize in frontend development, leveraging my skills to create visually stunning and responsive websites and applications. <br /> Explore my portfolio to see how I can elevate your project with my expertise. Let's collaborate and transform your ideas into remarkable digital experiences!
          </p>
        </div>
        <div className="head_abt_2">
      <div className="myImgWrapper">
      <img src="/myImg3.webp" alt="my pic" className="myImg" />
        </div>
        </div>
      </div>
    </>
  );
}
export default About;
