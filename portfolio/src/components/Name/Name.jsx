import React from "react";
import "./Name.css";
import { gsap } from "gsap";
import { useRef, useState, useEffect } from "react";
import { useLayoutEffect } from "react";
import Social from "../social/Social.jsx";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import RightArrow from '../icons/rightArrow2.png'
import { Link } from "react-router-dom";
import Forward from '../Navigation/Forward'
import SubHeadLarge from "../cwd/SubHeadLarge";
import SubHeadSmall from '../cwd/SubHeadSmall'



gsap.registerPlugin(CSSRulePlugin);

function Name() {
  const h1ref = useRef();
  const h2ref = useRef();
  const arrow = useRef();
  const line = CSSRulePlugin.getRule("#content::before");
  console.log(line);
  const tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.to(line, { duration: 4, cssRule: { scaleX: 1 } });
    tl.to(
      h1ref.current,
      {
        duration: 2,
        clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)",
        y: 20,
      },
      "-=3"
    );
    tl.to(h2ref.current, {
      duration: 2,
      clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)",
    },'-=2'),
      // "-=6";

    tl.to(arrow.current, {
      duration: 1,
      clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)",
    }),
      "-=4";
  }, []);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 480);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 480);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <div className="container">
        <div id="content">
          <p className="head1" ref={h1ref}>
            Madhur <br /> Vatsal
          </p>
          <div className="box">
            <div className="head2" ref={h2ref}>
              {/* Creative Web Developer */}
              {isDesktop ? (
                <SubHeadLarge />
              ) : (
                <SubHeadSmall />
              )}
            </div>
            <div>
            <Social />
            </div>
          </div>
        </div>
      </div>
      {/* <Link to={'/about'}><img ref={arrow} className="homeRight" src={RightArrow} alt="" /></Link> */}
      <Forward to={'/about'} />
    </>
  );
}
export default Name;
