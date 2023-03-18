import React from "react";
import "./Skills.css"
import Navbar from "../Navbar/Navbar"
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
function Skills(){
    let skillH1 =useRef(null);
    let skillH2 =useRef(null);
    const tl = new gsap.timeline();

    useEffect(()=>{
        tl.from([skillH1,skillH2],1,{
          opacity:0,
          y:100,
          skewY :10,
          stagger:{
            amount:0.4
          }
      
        })

        tl.from([".skill1",".skill2",".skill3",".skill4",".skill5",".skill6",".skill7",".skill8",".skill9",".skill10",".skill11",".skill12",".skill13",".skill14"],{
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
        <div className="bodyOfSkills">
        <div className="leftOfSkills">
            <p className="skillH1" ref={el=>skillH1=el}>Skills</p>
            <p className="skillH2" ref={el=>skillH2=el}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora recusandae aut asperiores ex pariatur esse sunt fuga sint ratione possimus.</p>
        </div>
        <div className="rightOfSkills">
            <div className="skillBox" >
                <div className="skill1" >Html</div>
                <div className="skill2" >CSS</div>
                <div className="skill3">Js</div>
                <div className="skill4">ReactJs</div>
                <div className="skill5">NodeJs</div>
                <div className="skill6">ExpressJs</div>
                <div className="skill7">MongoDB</div>
                <div className="skill8">Three.Js</div>
                <div className="skill9">React-Three-Fiber</div>
                <div className="skill10">MaterialUI</div>
                <div className="skill11">Java</div>
                <div className="skill12">C</div>
                <div className="skill13">Kotlin</div>
                <div className="skill14">Android</div>

            </div>
        </div>
        </div>
        
        </>

    )


}

export default Skills;