"use client";

import { useGSAP } from "@gsap/react";
import Logo from "./logo";
import { ReactNode, useRef } from "react";
import gsap, { Power1 } from "gsap";
import NavBar from "./nav-bar";

export default function ContentWrapper({ children }: { children: ReactNode }) {
  const scope = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ ease: Power1.easeInOut });
      tl.to(".intro", {
        delay: 1,
        y: 0,
        duration: 0.6,
        ease: "power1.inOut",
        opacity: 1,
      })
        .to(".intro", {
          scale: 280,
          duration: 2,
          delay: 2,
          ease: "power1.inOut",
        })
        .from(".container", {
          opacity: 0,
          x: -25,
          y: 25,
          duration: 0.5,
          ease: "power1.inOut",
        });
    },
    { scope: scope },
  );
  return (
    <main
      ref={scope}
      className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden"
    >
      <Logo className="intro left[50%] absolute top-[45%] z-0 origin-[43.2px] translate-y-[50px] opacity-0" />
      <div className="container z-10 h-full w-full text-white">{children}</div>
    </main>
  );
}
