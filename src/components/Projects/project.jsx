import React, { useEffect, useRef, useState } from "react";
import "./Project.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import { gsap,Power3 } from "gsap";
import Cursor from "../Cursor/Cursor";
import { Heading } from "../Heading/Heading";
import { useGSAP } from "@gsap/react";
import Pageswitch from "../Loader/Pageswitch";

function project() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timeout);
  }, []);
  const tl= new gsap.timeline();
  const ease = Power3.easeOut();

let h1 = useRef(null);
let para=useRef(null);
let button = useRef(null);

let card1=useRef(null);
let card2=useRef(null);
let card3=useRef(null);

useGSAP(()=>{
  if(!loading){
  tl.from([para,button],1,{
    opacity:0,
    x:100,
    // skewY:10,
    stagger:{
      amount:0.4
    }

  })

  tl.from([card1],1.2,{
    y:1200,
    ease:ease,
    opacity:0

  })
  .from(card1,2,{
    scale:1.6,
    ease:ease,
  },"-=1.2")



  tl.from([card2],1.2,{
    y:1200,
    ease:ease,
    opacity:0

  })
  .from(card2,2,{
    scale:1.6,
    ease:ease,
  },"-=1")

  tl.from([card3],1.2,{
    y:1200,
    ease:ease,
    opacity:0

  })
  tl.from(card3,2,{
    scale:1.6,
    ease:ease,
  },"-=1")
}

},[loading])

  return (
    <>
      {/* <Navbar /> */}
      {/* <Cursor/> */}
      {loading ? (<Pageswitch/>):(
      <div className="bodyOfProject">
        <div className="mainOfProject">
          <div className="leftProject">
            <div className="leftWrap">
            <div className="projTxt1" ><Heading title="Projects"/></div>
            <p className="projTxt2"ref={el=>para=el}>
              Alongside are few of the projects that I've built and worked on.
               Each project embodies a commitment to excellence, blending technical expertise with creative innovation. Explore visual representations, providing tangible insights into the depth and quality of my work. These projects stand as testament to my dedication to delivering impactful solutions and exceeding expectations. <br /> You can see all my projects by clicking below!
            </p>
           <div ref={el=>button=el}> <Button text={"More"}  /></div>
           </div>

          </div>
          <div className="rightProject"timeline={tl} >
            <div className="card1" ref={el=>card1=el}>
              <Card heading={"shopApple"} subHeading={"shopApple,a frontend clone of the official Apple website,with advanced animations."} gitLink="https://github.com/Vatsalmadhur/shopApple.git" liveLink="https://vatsalmadhur.github.io/shopApple/" />
            </div>
            <div className="card2" ref={el=>card2=el} >
              <Card heading={"Harmony Heals"} subHeading={"Embark on a wellness journey with the harmonious blend of solfeggio frequencies, Tibetan singing bowls, and personalized health assistance."} gitLink="https://github.com/Vatsalmadhur/harmonyHeals" liveLink="https://harmony-heals.vercel.app/" ytLink="" />
            </div>
            <div className="card3" ref={el=>card3=el} >
              <Card heading={"!youTube"} subHeading={"notYouTube streams videos using Rapid API, with dynamic updates, multiple categories, and a video search bar."} gitLink="https://github.com/Vatsalmadhur/notYouTube.git" liveLink="https://vatsalmadhur.github.io/notYouTube/"/>
            </div>

          </div>
        </div>
      </div>
      )}
    </>
  );
}
export default project;
