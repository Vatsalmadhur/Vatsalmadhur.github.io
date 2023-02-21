import React from "react";
import "./Name.css";
import { gsap } from "gsap";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import Social from "../social/Social.jsx";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";

gsap.registerPlugin(CSSRulePlugin);

function Name() {
  const h1ref = useRef();
  const h2ref = useRef();
  const soc = useRef();
  const line = CSSRulePlugin.getRule("#content::before");
  console.log(line);
  const tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.to(line, { delay: 0.5, duration: 3, cssRule: { scaleX: 1 } });
    tl.to(
      h1ref.current,
      {
        duration: 2,
        clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)",
      },
      "-=2"
    );
    tl.to(h2ref.current, {
      duration: 2,
      clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)",
    }),
      "-=3";

    tl.to(soc.current, {
      duration: 2,
      clipPath: "polygon(0 2%, 100% 1%, 100% 100%, 0% 100%)",
    }),
      "-=3";
  }, []);

  return (
    <div className="container">
      <div id="content">
        <p className="head1" ref={h1ref}>
          Madhur Vatsal
        </p>
        <div className="box">
          <p className="head2" ref={h2ref}>
            Creative Web Developer
          </p>
          <Social/>
        </div>
      </div>
    </div>
  );
}
export default Name;
