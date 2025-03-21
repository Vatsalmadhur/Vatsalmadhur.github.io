import React, { useRef, useEffect, useState, useMemo, lazy, Suspense } from "react";
import "./Name.css";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import Forward from "../Navigation/Forward";
import RightArrow from '../icons/rightArrow2.png';

// Lazy load non-essential components
const Social = lazy(() => import("../social/Social.jsx"));
const SubHeadLarge = lazy(() => import("../cwd/SubHeadLarge"));
const SubHeadSmall = lazy(() => import("../cwd/SubHeadSmall"));

gsap.registerPlugin(CSSRulePlugin);

function Name() {
  const h1ref = useRef();
  const h2ref = useRef();
  const arrow = useRef();
  const line = CSSRulePlugin.getRule("#content::before");

  // Optimize resize handling
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 480);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 480);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      requestIdleCallback(() => {
        gsap.to(line, { duration: 2, cssRule: { scaleX: 1 } });
        gsap.to(h1ref.current, { duration: 1.5, y: 10, clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)" }, "-=1");
        gsap.to(h2ref.current, { duration: 1.5, clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)" }, "-=1");
      });
    } else {
      setTimeout(() => {
        gsap.to(line, { duration: 2, cssRule: { scaleX: 1 } });
        gsap.to(h1ref.current, { duration: 1.5, y: 10, clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)" }, "-=1");
        gsap.to(h2ref.current, { duration: 1.5, clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)" }, "-=1");
      }, 500);
    }
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
              <Suspense fallback={<div>Loading...</div>}>
                {isDesktop ? <SubHeadLarge className="subHead" /> : <SubHeadSmall />}
              </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <Social />
            </Suspense>
          </div>
        </div>
      </div>
      <Forward to={'/about'} />
    </>
  );
}

export default Name;
