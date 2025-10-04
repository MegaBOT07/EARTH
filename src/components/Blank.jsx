import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Blank() {
  const parent = useRef(null);
  const videodiv = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.to(videodiv.current, {
      scrollTrigger: {
        trigger: parent.current,
        start: "0 0",
        end: "+=100%",
        pin: true,
        scrub: 1,
      },
      width: "100%",
      height: "100%",
      ease: "power4.out",
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <div
      ref={parent}
      className="w-full h-[100vh]  overflow-hidden relative bg-black "
    >
      <div
        ref={videodiv}
        className="w-40 sm:w-96  overflow-hidden absolute aspect-video   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
      </div>
      <div className="overlay absolute w-full h-full  text-white flex flex-col justify-between py-20">
      </div>
    </div>
  );
}

export default Blank;
