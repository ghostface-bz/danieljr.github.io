"use client";

/**
 * Wraps a section heading with GSAP ScrollTrigger parallax.
 * The heading drifts upward at 0.6× scroll speed giving a depth illusion.
 */

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SectionParallax({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    gsap.fromTo(el,
      { y: 40 },
      {
        y: -20,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      }
    );
  }, { scope: ref });

  return <div ref={ref}>{children}</div>;
}
