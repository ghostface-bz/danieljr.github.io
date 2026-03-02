"use client";

import { useEffect, useState, useRef } from "react";
import { Github, Mail, ArrowRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconRadar, HexDecor, CrosshairDecor } from "./Icons";
import NetworkGlobe from "./NetworkGlobe";

gsap.registerPlugin(ScrollTrigger);

const roles = [
  "IT Professional",
  "Cybersecurity Enthusiast",
  "Linux Administrator",
  "Network Specialist",
  "Security Researcher",
];

const termRows = [
  { key: "user",     value: "daniel-mahunda",     delay: 220 },
  { key: "role",     value: "IT / Cybersecurity",  delay: 300 },
  { key: "location", value: "Dar es Salaam, TZ",   delay: 380 },
  { key: "status",   value: "● available",          delay: 460, green: true },
  { key: "focus",    value: "phishing-academy.exe", delay: 540 },
  { key: "os",       value: "linux / windows",      delay: 620 },
  { key: "github",   value: "ghostface-bz",         delay: 700 },
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), 62);
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2400);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 36);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx, words]);

  return text;
}

function CountUp({ target, suffix = "" }: { target: number | string; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof target !== "number") return;
    const observer = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      const start = performance.now();
      const dur = 1200;
      const tick = (now: number) => {
        const p = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - p, 3);
        setVal(Math.floor(ease * target));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  if (typeof target === "string") return <span ref={ref as React.RefObject<HTMLSpanElement>}>{target}</span>;
  return <div ref={ref}>{val}{suffix}</div>;
}

export default function Hero() {
  const role = useTypewriter(roles);
  const [mounted, setMounted] = useState(false);
  const [globeSize, setGlobeSize] = useState(560);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Responsive globe size — smaller on mobile to reduce render cost
  useEffect(() => {
    const update = () => setGlobeSize(window.innerWidth < 768 ? 340 : 560);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // GSAP: title parallax + globe fade on scroll-out
  useGSAP(() => {
    if (!titleRef.current || !globeRef.current) return;

    // Title drifts up slightly as user scrolls away
    gsap.to(titleRef.current, {
      y: -60,
      opacity: 0.2,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "70% top",
        scrub: 1.2,
      },
    });

    // Globe rotates and fades as hero scrolls away
    gsap.to(globeRef.current, {
      y: -40,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "20% top",
        end: "80% top",
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(20px)",
    transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
  });

  return (
    <section ref={sectionRef} className="hero-section" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      padding: "120px 28px 80px", position: "relative", overflow: "hidden",
    }}>

      {/* 3D Network Globe — atmospheric background */}
      <div ref={globeRef} style={{
        position: "absolute",
        top: "50%", left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", zIndex: 0,
        opacity: 0.45,
        filter: "blur(0.5px)",
      }}>
        <NetworkGlobe size={globeSize} />
      </div>

      {/* Scan line */}
      <div style={{
        position: "absolute", left: 0, right: 0, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(245,158,11,0.35), transparent)",
        animation: "scan 5s ease-in-out infinite 1s",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div style={{
        maxWidth: 1100, margin: "0 auto", width: "100%",
        display: "grid", gridTemplateColumns: "1fr 360px",
        gap: 72, alignItems: "center", position: "relative", zIndex: 2,
      }} className="hero-grid">

        {/* ── LEFT: Text content ─────────────────────── */}
        <div>
          {/* Statement */}
          <div style={{ marginBottom: 22, ...fadeStyle(0), maxWidth: "100%", overflow: "hidden" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: "0.63rem", fontWeight: 500,
              letterSpacing: "0.02em",
              maxWidth: "100%", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: "50%", background: "#4ade80",
                flexShrink: 0, boxShadow: "0 0 6px rgba(74,222,128,0.35)",
              }} />
              <span style={{ color: "#4ade80", opacity: 0.8 }}>ready to build</span>
              <span style={{ color: "var(--text-faint)", opacity: 0.2 }}>·</span>
              <span style={{ color: "var(--accent)", opacity: 0.55 }}>Dar es Salaam, TZ</span>
            </span>
          </div>

          {/* Name */}
          <div style={{ ...fadeStyle(80), marginBottom: 4 }}>
            <h1 ref={titleRef} style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.2rem, 8vw, 7rem)",
              fontWeight: 800, letterSpacing: "-0.045em",
              lineHeight: 0.92, color: "var(--text)",
            }}>
              Daniel<br />
              <span className="gradient-text">Junior.</span>
            </h1>
          </div>

          {/* Typewriter */}
          <div style={{ ...fadeStyle(160), marginTop: 22, marginBottom: 28, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem", color: "var(--accent-lo)",
              letterSpacing: "0.06em",
            }}>~/role $</span>
            <span style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(0.85rem, 1.8vw, 1.05rem)",
              color: "var(--text-2)", letterSpacing: "0.02em",
            }}>{role}</span>
            <span style={{
              display: "inline-block", width: 2, height: "1em",
              background: "var(--accent)", animation: "blink 1s step-end infinite",
            }} />
          </div>

          {/* Bio */}
          <p className="hero-bio" style={{
            ...fadeStyle(240),
            fontFamily: "var(--font-body)",
            fontSize: "1.02rem", color: "var(--text-muted)",
            maxWidth: "min(520px, 100%)", lineHeight: 1.9, marginBottom: 44,
            overflowWrap: "break-word", wordBreak: "break-word",
          }}>
            IT professional with hands-on field experience in{" "}
            <span style={{ color: "var(--text-2)", fontWeight: 500 }}>government & healthcare environments</span>.
            First-class academic record. Obsessed with the human side of security — currently building a{" "}
            <span style={{
              color: "var(--accent)", fontWeight: 600,
              textDecoration: "underline", textDecorationStyle: "dotted",
              textDecorationColor: "rgba(245,158,11,0.4)",
              textUnderlineOffset: 4,
            }}>Phishing Awareness Academy</span>.
          </p>

          {/* CTAs */}
          <div className="hero-ctas" style={{ ...fadeStyle(320), display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 72 }}>
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-display)",
              background: "var(--accent)", color: "#0b0a08",
              padding: "13px 26px", borderRadius: 11, fontWeight: 800,
              fontSize: "0.88rem", textDecoration: "none",
              transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
              boxShadow: "0 4px 20px rgba(245,158,11,0.22), inset 0 1px 0 rgba(255,255,255,0.25)",
              letterSpacing: "0.02em",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--accent-hi)";
                e.currentTarget.style.boxShadow = "0 8px 36px rgba(245,158,11,0.42), inset 0 1px 0 rgba(255,255,255,0.3)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,158,11,0.22), inset 0 1px 0 rgba(255,255,255,0.25)";
                e.currentTarget.style.transform = "translateY(0)";
              }}>
              View Work <ArrowRight size={15} />
            </a>
            <a href="https://github.com/ghostface-bz" target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-display)",
              background: "rgba(255,255,255,0.04)", color: "var(--text-2)",
              padding: "13px 22px", borderRadius: 11, fontWeight: 600,
              fontSize: "0.88rem", textDecoration: "none",
              border: "1px solid var(--border-subtle)",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(245,158,11,0.28)";
                e.currentTarget.style.background = "rgba(245,158,11,0.05)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                e.currentTarget.style.color = "var(--text-2)";
              }}>
              <Github size={15} /> GitHub
            </a>
            <a href="mailto:lioneljr4444@gmail.com" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              fontFamily: "var(--font-display)",
              background: "transparent", color: "var(--text-muted)",
              padding: "13px 22px", borderRadius: 11, fontWeight: 600,
              fontSize: "0.88rem", textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.05)",
              transition: "all 0.2s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(245,158,11,0.22)";
                e.currentTarget.style.color = "var(--accent)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)";
                e.currentTarget.style.color = "var(--text-muted)";
              }}>
              <Mail size={15} /> Contact
            </a>
          </div>

          {/* Stats bar */}
          <div className="hero-stats" style={{
            ...fadeStyle(400),
            display: "flex", gap: 0, flexWrap: "wrap",
            borderTop: "1px solid var(--border-subtle)", paddingTop: 32,
          }}>
            {[
              { val: 2, suffix: "", label: "Internships" },
              { val: "1st", suffix: "", label: "Class Award" },
              { val: 3, suffix: "+", label: "Years in IT" },
              { val: "TZ", suffix: "", label: "Tanzania" },
            ].map((s, i) => (
              <div key={i} style={{
                paddingRight: 32, marginRight: 32,
                borderRight: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.75rem", fontWeight: 800,
                  color: "var(--text)", letterSpacing: "-0.04em", lineHeight: 1,
                }}>
                  {typeof s.val === "number"
                    ? <CountUp target={s.val} suffix={s.suffix} />
                    : <>{s.val}{s.suffix}</>
                  }
                </div>
                <div style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.62rem", color: "var(--text-muted)",
                  marginTop: 5, letterSpacing: "0.12em", textTransform: "uppercase",
                }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Mobile terminal marquee — inside left column, only visible when panel is hidden */}
          <div className="hero-mobile-strip" style={fadeStyle(500)}>
            <span className="hero-mobile-strip-inner">
              {[0, 1].map(copy => (
                <span key={copy} style={{ display: "inline-flex", alignItems: "center", gap: 28, paddingRight: 28 }}>
                  {termRows.map(row => (
                    <span key={row.key} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.04em" }}>
                      <span style={{ color: "var(--accent-lo)", opacity: 0.75 }}>{row.key}</span>
                      <span style={{ color: "rgba(255,255,255,0.1)" }}>→</span>
                      <span style={{ color: row.green ? "#4ade80" : "var(--text-2)", opacity: 0.7 }}>{row.value}</span>
                    </span>
                  ))}
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* ── RIGHT: Terminal panel ──────────────────── */}
        <div className="hero-panel" style={{ position: "relative" }}>
          {/* Floating geometry around the panel */}
          <div style={{
            position: "absolute", top: -40, right: -36, opacity: 0.55,
            animation: "float 8s ease-in-out infinite", pointerEvents: "none",
          }}>
            <HexDecor size={100} color="rgba(245,158,11,0.1)" />
          </div>
          <div style={{
            position: "absolute", bottom: -16, left: -28, opacity: 0.4,
            animation: "float 6s ease-in-out infinite 2s", pointerEvents: "none",
          }}>
            <CrosshairDecor size={50} color="rgba(245,158,11,0.14)" />
          </div>

          {/* Terminal window */}
          <div style={{
            background: "var(--surface)", borderRadius: 20, overflow: "hidden",
            border: "1px solid var(--border-subtle)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(245,158,11,0.07)",
            ...fadeStyle(180),
          }}>
            {/* Window chrome */}
            <div style={{
              background: "var(--surface-2)", padding: "13px 18px",
              borderBottom: "1px solid rgba(255,255,255,0.04)",
              display: "flex", alignItems: "center", gap: 7,
            }}>
              {["#ef4444", "#f59e0b", "#4ade80"].map((c, i) => (
                <span key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.7 }} />
              ))}
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: "0.6rem",
                color: "var(--text-faint)", marginLeft: 8, letterSpacing: "0.05em",
              }}>
                daniel@terminal ~ system.info
              </span>
            </div>

            {/* Data rows */}
            <div style={{ padding: "18px 20px 10px" }}>
              {termRows.map((row) => (
                <div key={row.key} style={{
                  display: "flex", gap: 10, fontFamily: "var(--font-mono)",
                  fontSize: "0.73rem", marginBottom: 9,
                  ...fadeStyle(row.delay),
                }}>
                  <span style={{ color: "var(--accent)", minWidth: 68, opacity: 0.9, flexShrink: 0 }}>{row.key}</span>
                  <span style={{ color: "var(--text-faint)", flexShrink: 0 }}>→</span>
                  <span style={{ color: row.green ? "#4ade80" : "var(--text-2)", fontWeight: row.green ? 600 : 400 }}>
                    {row.value}
                  </span>
                </div>
              ))}
              {/* Blinking prompt */}
              <div style={{
                display: "flex", alignItems: "center", gap: 5,
                fontFamily: "var(--font-mono)", fontSize: "0.73rem",
                marginTop: 8, ...fadeStyle(780),
              }}>
                <span style={{ color: "var(--accent-lo)" }}>$</span>
                <span style={{
                  display: "inline-block", width: 7, height: 13,
                  background: "var(--accent)", animation: "blink 1.1s step-end infinite", opacity: 0.85,
                }} />
              </div>
            </div>

            {/* Radar graphic */}
            <div style={{
              display: "flex", justifyContent: "center", alignItems: "center",
              padding: "8px 20px 22px",
              borderTop: "1px solid rgba(255,255,255,0.03)",
              ...fadeStyle(360),
            }}>
              <IconRadar size={124} color="var(--accent)" />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 0 !important; max-width: 100% !important; }
          .hero-grid > * { min-width: 0; max-width: 100%; overflow: hidden; }
          .hero-panel { display: none !important; }
        }
        /* Mobile padding — tighter, full-bleed feel */
        @media (max-width: 768px) {
          .hero-section { padding: 88px 18px 40px !important; min-height: calc(100vh - 20px) !important; min-height: calc(100dvh - 20px) !important; overflow: hidden !important; }
          .hero-bio { margin-bottom: 28px !important; font-size: 0.88rem !important; line-height: 1.75 !important; max-width: 100% !important; }
        }
        /* CTA buttons — full-width stacked on mobile, generous tap targets */
        @media (max-width: 500px) {
          .hero-ctas {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 10px !important;
            margin-bottom: 28px !important;
          }
          .hero-ctas a {
            justify-content: center !important;
            text-align: center !important;
            padding: 15px 20px !important;
            font-size: 0.86rem !important;
          }
        }
        /* Stats bar — 2×2 grid with accent cell borders */
        @media (max-width: 600px) {
          .hero-stats {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0 !important;
            padding-top: 0 !important;
            border-top: 1px solid rgba(245,158,11,0.1) !important;
          }
          .hero-stats > div {
            padding: 16px 14px !important;
            margin-right: 0 !important;
            border-right: none !important;
            border-bottom: 1px solid rgba(255,255,255,0.04);
          }
          /* Right column cells get left border */
          .hero-stats > div:nth-child(2n) {
            border-left: 1px solid rgba(255,255,255,0.04);
          }
          /* Remove bottom border on last row */
          .hero-stats > div:nth-last-child(-n+2) {
            border-bottom: none;
          }
        }
        /* Very small screens: tighten heading */
        @media (max-width: 380px) {
          .hero-section h1 { font-size: clamp(2.6rem, 12vw, 3.2rem) !important; }
        }
      `}</style>
    </section>
  );
}
