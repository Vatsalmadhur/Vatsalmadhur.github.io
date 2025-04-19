import React from 'react'
import './pageswitch.css'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react';
const Pageswitch = () => {

    useGSAP(() => {
        gsap.to('.bar', {
            duration: 1,
            y: -1000,
            stagger: 0.2,
            ease: 'power4.inOut',
            repeat: -1,
            yoyo: true
        })
    });
  return (
        <div className="pageBody">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    )
}

export default Pageswitch;
