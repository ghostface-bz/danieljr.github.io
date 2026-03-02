"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const tween = gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0,
      height: 2, zIndex: 200, pointerEvents: "none",
    }}>
      <div
        ref={barRef}
        style={{
          height: "100%",
          background: "linear-gradient(90deg, var(--accent-lo), var(--accent), var(--accent-hi))",
          transformOrigin: "left center",
          transform: "scaleX(0)",
          boxShadow: "0 0 8px rgba(245,158,11,0.5)",
        }}
      />
    </div>
  );
}
