import React from "react";
import "./Skills.css"
import Navbar from "../Navbar/Navbar"
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
import Cursor from "../Cursor/Cursor";
import { Heading } from "../Heading/Heading";
function Skills(){
    let skillH1 =useRef(null);
    let skillH2 =useRef(null);
    const tl = new gsap.timeline();

    useEffect(()=>{
        tl.from([skillH2],1,{
          opacity:0,
          x:100,
        //   skewY :10,
          stagger:{
            amount:0.4
          }

        })

        tl.from([".skill1",".skill2",".skill3",".skill4",".skill5",".skill6",".skill7",".skill8",".skill9",".skill10",".skill11",".skill12",".skill13",".skill14",".skill15",".skill16",".skill17",".skill18",".skill19",".skill20",".skill21"],{
            opacity:0,
            y:-1000,
        stagger:{
            amount:6
        }

          })

      })


    return(
        <>
        <Navbar/>
        <Cursor/>
        <div className="bodyOfSkills">
        <div className="leftOfSkills">
            <div className="leftWrap">
                <div className="skillH1"><Heading title="Skills"/></div>

            <p className="skillH2" ref={el=>skillH2=el}>Welcome to the repository of my technical proficiencies and professional competencies.I present a comprehensive overview of the tools and technologies I command with mastery and precision.Each skill is honed through years of hands-on experience and continuous learning. <br /> These skills are not just assets; they're the building blocks of my success, empowering me to tackle challenges and drive innovation in every endeavor.</p></div>
        </div>
        <div className="rightOfSkills">
            <div className="skillBox" >
                <div className="skill1" >Html</div>
                <div className="skill2" >CSS</div>
                <div className="skill3" >SASS</div>
                <div className="skill4">Js</div>
                <div className="skill5">ReactJs</div>
                <div className="skill6">NextJs</div>
                <div className="skill7">React-Three-Fiber</div>
                <div className="skill8">Three.Js</div>
                <div className="skill9">MantineUI</div>
                <div className="skill10">MaterialUI</div>
                <div className="skill11">ChakraUI</div>
                <div className="skill12">GSAP</div>
                <div className="skill13">NodeJs</div>
                <div className="skill14">ExpressJs</div>
                <div className="skill15">MongoDB</div>
                <div className="skill16">Java</div>
                <div className="skill17">C</div>
                <div className="skill18">Kotlin</div>
                <div className="skill19">Android</div>
                <div className="skill20">Git</div>
                <div className="skill21">AngularJS</div>


            </div>
        </div>
        </div>

        </>

    )


}

export default Skills;