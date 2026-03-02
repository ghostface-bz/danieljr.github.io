"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  delay?: number; // ms
  style?: CSSProperties;
  className?: string;
}

export default function AnimateIn({ children, delay = 0, style, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.remove("animate-hidden");
            el.classList.add("animate-visible");
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    el.classList.add("animate-hidden");
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
