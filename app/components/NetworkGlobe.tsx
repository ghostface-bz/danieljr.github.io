"use client";

import { useRef, useEffect } from "react";

interface Node {
  x: number;
  y: number;
  z: number;
}

export default function NetworkGlobe({ size = 320 }: { size?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    ctx.scale(dpr, dpr);

    // Generate nodes on sphere surface using Fibonacci lattice (even distribution)
    const COUNT = 90;
    const golden = Math.PI * (3 - Math.sqrt(5));
    const baseNodes: Node[] = Array.from({ length: COUNT }, (_, i) => {
      const y = 1 - (i / (COUNT - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      return { x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });

    let angle = 0;
    let animId: number;
    // Battery-conscious: track running state to pause when off-screen (mobile-design principle)
    let running = true;
    const R = size / 2;
    const MAX_DIST = R * 0.48;

    const draw = () => {
      ctx.clearRect(0, 0, size, size);

      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      // Project + rotate around Y axis
      const projected = baseNodes.map((n) => ({
        px: (n.x * cos - n.z * sin) * R + R,
        py: n.y * R + R,
        depth: (n.x * sin + n.z * cos + 1) / 2, // 0=back, 1=front
      }));

      // Draw edges
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].px - projected[j].px;
          const dy = projected[i].py - projected[j].py;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < MAX_DIST) {
            const avgDepth = (projected[i].depth + projected[j].depth) / 2;
            const alpha = ((1 - d / MAX_DIST) * avgDepth * 0.28).toFixed(3);
            ctx.beginPath();
            ctx.moveTo(projected[i].px, projected[i].py);
            ctx.lineTo(projected[j].px, projected[j].py);
            ctx.strokeStyle = `rgba(245,158,11,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw nodes (front-to-back so front renders on top)
      const sorted = [...projected].sort((a, b) => a.depth - b.depth);
      sorted.forEach((n) => {
        const r = 0.8 + n.depth * 1.8;
        const alpha = 0.2 + n.depth * 0.75;
        ctx.beginPath();
        ctx.arc(n.px, n.py, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245,158,11,${alpha.toFixed(2)})`;
        ctx.fill();
      });

      angle += 0.0025;
      if (running) animId = requestAnimationFrame(draw);
    };

    // Pause rAF loop when canvas is scrolled out of view — saves battery on mobile
    const visObs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          draw();
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(animId);
        }
      },
      { threshold: 0 }
    );
    visObs.observe(canvas);

    draw();
    return () => {
      running = false;
      cancelAnimationFrame(animId);
      visObs.disconnect();
    };
  }, [size]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", imageRendering: "auto" }}
    />
  );
}
