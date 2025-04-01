import React from "react";
import './Forward.css'
import RightArrow from '/icons/rightArrow2.png'
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

function Forward(props){
    const arrow =useRef();
    const tl = gsap.timeline();
  useLayoutEffect(() => {

    tl.to(arrow.current, {
      duration: 3,
      clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)",
    }),
      "+=1";
  }, []);
    return(
        <>
        <Link to={props.to} aria-label="Go forward" ><img ref={arrow} className="homeRight" src={RightArrow} alt="" /></Link>
        </>
    )
}
export default Forward;