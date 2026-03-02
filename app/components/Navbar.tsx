"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark } from "./Icons";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section via IntersectionObserver — works in both desktop + mobile menu
  useEffect(() => {
    const ids = links.map(l => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    ids.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.25, rootMargin: "-60px 0px -40% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
      background: scrolled ? "rgba(11,10,8,0.86)" : "transparent",
      backdropFilter: scrolled ? "blur(24px) saturate(160%)" : "none",
      borderBottom: scrolled ? "1px solid rgba(255,255,255,0.045)" : "none",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 20px",
        height: 66, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>

        {/* Logo */}
        <a href="#" style={{
          textDecoration: "none", display: "flex", alignItems: "center", gap: 10,
          transition: "opacity 0.2s",
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity = "0.8"; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}>
          <LogoMark size={32} />
        </a>

        {/* Desktop nav */}
        <ul style={{ display: "flex", gap: 2, listStyle: "none", alignItems: "center" }} className="nav-desk">
          {links.map(l => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <li key={l.href}>
                <a href={l.href} style={{
                  fontFamily: "var(--font-body)",
                  color: isActive ? "var(--accent)" : "var(--text-muted)",
                  textDecoration: "none", fontSize: "0.84rem", fontWeight: isActive ? 600 : 500,
                  padding: "7px 13px", borderRadius: 8,
                  transition: "color 0.2s, background 0.2s",
                  background: isActive ? "rgba(245,158,11,0.06)" : "transparent",
                }}
                  onMouseEnter={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!isActive) {
                      e.currentTarget.style.color = "var(--text-muted)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}>
                  {l.label}
                </a>
              </li>
            );
          })}
          <li style={{ marginLeft: 4 }}>
            <a href="mailto:lioneljr4444@gmail.com" style={{
              fontFamily: "var(--font-display)",
              background: "var(--accent)", color: "#0b0a08",
              padding: "8px 18px", borderRadius: 9, fontSize: "0.83rem",
              fontWeight: 800, textDecoration: "none",
              transition: "all 0.2s",
              boxShadow: "0 2px 12px rgba(245,158,11,0.2)",
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-hi)"; e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,158,11,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.boxShadow = "0 2px 12px rgba(245,158,11,0.2)"; }}>
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile hamburger — 44×44px touch target (mobile-design: min 44pt / Fitts' Law) */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            background: "none", border: "none", color: "var(--text)",
            cursor: "pointer", display: "none",
            width: 44, height: 44,
            alignItems: "center", justifyContent: "center",
            borderRadius: 8, transition: "background 0.2s", flexShrink: 0,
          }}
          className="nav-mob"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* Mobile backdrop — dims content behind drawer */}
      <div
        className="nav-backdrop"
        onClick={() => setOpen(false)}
        style={{
          position: "fixed", inset: 0, zIndex: -1,
          background: "rgba(0,0,0,0.6)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Mobile drawer — full-width slide-down with staggered links */}
      <div
        className="nav-drawer"
        style={{
          background: "rgba(11,10,8,0.98)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          maxHeight: open ? "min(480px, 90vh)" : "0",
          overflow: "hidden",
          overflowY: open ? "auto" : "hidden",
          transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
          borderBottom: open ? "1px solid rgba(245,158,11,0.08)" : "none",
        }}>
        <div style={{ padding: "20px 24px 28px" }}>
          {/* Terminal-style header */}
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: "0.56rem",
            color: "var(--text-faint)", letterSpacing: "0.14em",
            textTransform: "uppercase", marginBottom: 20, paddingBottom: 14,
            borderBottom: "1px solid rgba(255,255,255,0.04)",
          }}>
            <span style={{ color: "var(--accent)", opacity: 0.6 }}>$</span> navigation
          </div>

          {links.map((l, i) => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: "flex", alignItems: "center", gap: 14,
                fontFamily: "var(--font-body)",
                color: isActive ? "var(--text)" : "var(--text-muted)",
                textDecoration: "none",
                padding: "16px 14px",
                fontSize: "1.02rem",
                fontWeight: isActive ? 700 : 400,
                borderRadius: 12,
                background: isActive ? "rgba(245,158,11,0.06)" : "transparent",
                transition: "all 0.2s ease",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-12px)",
                transitionDelay: open ? `${80 + i * 40}ms` : "0ms",
              }}>
                {/* Number indicator */}
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.58rem",
                  color: isActive ? "var(--accent)" : "var(--text-faint)",
                  minWidth: 20, opacity: 0.7,
                }}>0{i + 1}</span>
                {l.label}
                {isActive && (
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "var(--accent)", marginLeft: "auto",
                    animation: "pulse-ring 2s ease-out infinite",
                  }} />
                )}
              </a>
            );
          })}

          {/* CTA */}
          <a href="mailto:lioneljr4444@gmail.com" onClick={() => setOpen(false)} style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            fontFamily: "var(--font-display)",
            background: "var(--accent)", color: "#0b0a08",
            textDecoration: "none", marginTop: 18,
            padding: "14px 20px", borderRadius: 12,
            fontSize: "0.9rem", fontWeight: 800,
            boxShadow: "0 4px 20px rgba(245,158,11,0.2)",
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.3s ease 0.35s, transform 0.3s ease 0.35s",
          }}>Hire Me →</a>

          {/* Status footer */}
          <div style={{
            marginTop: 22, paddingTop: 16,
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex", alignItems: "center", justifyContent: "center", gap: 7,
            fontFamily: "var(--font-mono)", fontSize: "0.54rem",
            letterSpacing: "0.03em",
          }}>
            <span style={{
              width: 4, height: 4, borderRadius: "50%",
              background: "#4ade80", flexShrink: 0,
              boxShadow: "0 0 5px rgba(74,222,128,0.35)",
              display: "inline-block",
            }} />
            <span style={{ color: "#4ade80", opacity: 0.75 }}>available</span>
            <span style={{ color: "var(--text-faint)", opacity: 0.25 }}>/</span>
            <span style={{ color: "var(--accent)", opacity: 0.6 }}>Dar es Salaam</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desk { display: none !important; }
          .nav-mob { display: flex !important; }
          .nav-drawer { display: block !important; }
          .nav-backdrop { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mob { display: none !important; }
          .nav-drawer { display: none !important; }
          .nav-backdrop { display: none !important; }
          .nav-desk { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
