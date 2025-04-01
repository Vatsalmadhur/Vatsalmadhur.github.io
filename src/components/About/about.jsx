import React from "react";
import "./About.css";
import { Canvas } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { useRef } from "react";
import Forward from "../Navigation/Forward";
import Navbar from "../Navbar/Navbar";
import { gsap } from "gsap";
import Cursor from "../Cursor/Cursor";
import { Heading } from "../Heading/Heading";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
const Info = React.lazy(()=>import("../AboutInfo/Info"))

function About() {
  const tl = new gsap.timeline();
  let abtH = useRef(null);
  let abtB = useRef(null);
  useEffect(() => {
    tl.from([abtB], 1, {
      opacity: 0,
      x: 100,
      stagger: {
        amount: 0.4,
      },
    });
  });

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
          <Canvas
            className="canvas2"
            // camera={{ position: [0, 0, 15] }}
            color="black"
            // style={{border:"2px solid red"}}
          >
            <OrthographicCamera makeDefault position={[0,10,35]} zoom={25} />
            <Info/>
            <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.1}/>
          </Canvas>

        </div>
      </div>
    </>
  );
}
export default About;
