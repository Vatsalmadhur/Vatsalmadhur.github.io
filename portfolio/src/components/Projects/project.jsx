import React, { useEffect, useRef } from "react";
import "./Project.css";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Navbar from "../Navbar/Navbar";
import { gsap,Power3 } from "gsap";
import AdBid from "/AdBid.jpeg"
import Bin from "/BinLocator.png"
import Wsafe from "/Wsafe.png"

function project() {
  const tl= new gsap.timeline();
  const ease = Power3.easeOut();

let h1 = useRef(null);
let para=useRef(null);
let button = useRef(null);

let card1=useRef(null);
let card2=useRef(null);
let card3=useRef(null);

useEffect(()=>{
  tl.from([h1,para,button],1,{
    opacity:0,
    y:100,
    skewY:10,
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

})

  return (
    <>
      <Navbar />
      <div className="bodyOfProject">
        <div className="mainOfProject">
          <div className="leftProject">
            <p className="projTxt1" ref={el=>h1=el} >Projects</p>
            <p className="projTxt2"ref={el=>para=el}>
              Alongside are few of the projects that I've built and worked on. You can see all my projects by clicking below! 
            </p>
           <div ref={el=>button=el}> <Button text={"More"}  /></div>
            
          </div>
          <div className="rightProject"timeline={tl} >
            <div className="card1" ref={el=>card1=el}>
              <Card image={Bin} heading={"BINLocator"} subHeading={"An app to find nearest dustbins"} link={"https://github.com/theanuragshukla/undefined-DevHeat-2022"} />
            </div>
            <div className="card2" ref={el=>card2=el} >
              <Card image={AdBid} heading={"AdBid"} subHeading={"The Ad bidding platform built on Web3"} link={"https://github.com/theanuragshukla/ETHForAll"} />
            </div>
            <div className="card3" ref={el=>card3=el} >
              <Card image={Wsafe} heading={"Wsafe"} subHeading={"The safety app for women."} link={"https://github.com/theanuragshukla/women-security"} />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
export default project;
