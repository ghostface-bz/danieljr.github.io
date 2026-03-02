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

      {/* Mobile drawer — always rendered, animated via max-height (no flash on open) */}
      <div
        className="nav-drawer"
        style={{
          background: "rgba(11,10,8,0.97)",
          maxHeight: open ? "min(400px, 85vh)" : "0",
          overflow: "hidden",
          overflowY: open ? "auto" : "hidden",
          transition: "max-height 0.35s cubic-bezier(0.16,1,0.3,1)",
        }}>
        <div style={{ padding: "14px 20px 20px", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          {links.map(l => {
            const isActive = activeSection === l.href.slice(1);
            return (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
                display: "block", fontFamily: "var(--font-body)",
                color: isActive ? "var(--accent)" : "var(--text-muted)",
                textDecoration: "none",
                padding: "13px 0 13px 16px",
                fontSize: "0.98rem",
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                fontWeight: isActive ? 600 : 400,
                transition: "color 0.2s, border-color 0.2s",
                borderLeft: isActive
                  ? "2px solid var(--accent)"
                  : "2px solid rgba(255,255,255,0.05)",
              }}>{l.label}</a>
            );
          })}
          <a href="mailto:lioneljr4444@gmail.com" onClick={() => setOpen(false)} style={{
            display: "block", fontFamily: "var(--font-display)",
            color: "var(--accent)", textDecoration: "none",
            paddingTop: 18, paddingBottom: 4, paddingLeft: 16, fontSize: "0.98rem", fontWeight: 800,
          }}>Hire Me →</a>

          {/* Status footer — mirrors hero available badge */}
          <div style={{
            marginTop: 20, paddingTop: 16,
            borderTop: "1px solid rgba(255,255,255,0.04)",
            display: "flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-mono)", fontSize: "0.58rem",
            color: "var(--text-faint)", letterSpacing: "0.1em",
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: "50%",
              background: "var(--accent)", flexShrink: 0,
              animation: "pulse-ring 2s ease-out infinite",
              display: "inline-block",
            }} />
            AVAILABLE · DAR ES SALAAM, TZ
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desk { display: none !important; }
          .nav-mob { display: flex !important; }
          .nav-drawer { display: block !important; }
        }
        @media (min-width: 769px) {
          .nav-mob { display: none !important; }
          .nav-drawer { display: none !important; }
          .nav-desk { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
