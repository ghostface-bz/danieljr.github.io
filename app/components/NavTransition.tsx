"use client";

/**
 * Intercepts anchor clicks from Navbar and adds a smooth GSAP wipe
 * transition before scrolling to the target section.
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function NavTransition() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;

      const hash = anchor.getAttribute("href");
      if (!hash || hash === "#") return;

      const target = document.querySelector(hash);
      if (!target) return;

      e.preventDefault();

      // Flash: opacity 0 → peak → 0
      gsap.fromTo(overlay,
        { opacity: 0, scaleY: 0 },
        {
          opacity: 1, scaleY: 1, duration: 0.18, ease: "power2.in",
          onComplete: () => {
            target.scrollIntoView({ behavior: "instant" });
            gsap.to(overlay, { opacity: 0, scaleY: 0, duration: 0.28, ease: "power2.out", delay: 0.04 });
          },
        }
      );
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "linear-gradient(135deg, rgba(11,10,8,0.97) 0%, rgba(245,158,11,0.06) 100%)",
        pointerEvents: "none",
        opacity: 0,
        transform: "scaleY(0)",
        transformOrigin: "top center",
      }}
    />
  );
}
