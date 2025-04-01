import React, { useRef, useEffect, useState, lazy, Suspense } from "react";
import "./Name.css";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import Forward from "../Navigation/Forward";
import Loading from "../Loader/Loading";
import { Canvas } from "react-three-fiber";
import { useGSAP } from "@gsap/react";

// Lazy load non-essential components
const Social = lazy(() => import("../social/Social.jsx"));
const Creative = lazy(() => import("../CreativeModel/Creative"));

gsap.registerPlugin(CSSRulePlugin);

function Name() {
  const h1ref = useRef(null);
  const h2ref = useRef(null);
  const line = CSSRulePlugin.getRule("#content::before");

  // Optimize resize handling
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 480);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    const animate = () => {
      if (!line || !h1ref.current || !h2ref.current) return;

      gsap.to(line, { duration: 1.5, cssRule: { scaleX: 1 } });
      gsap.to([h1ref.current, h2ref.current], {
        duration: 1,
        y: 10,
        clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)",
        stagger: 0.2,
      });
    };

    if ("requestIdleCallback" in window) {
      requestIdleCallback(animate);
    } else {
      setTimeout(animate, 500);
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
                <Canvas>
                  <Creative />
                </Canvas>
            </div>

              <Social />
          </div>
        </div>
      </div>
      <Forward to="/about" />
    </>
  );
}

export default Name;
