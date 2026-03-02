"use client";

import { Github, Mail, ArrowUp } from "lucide-react";
import { LogoMark } from "./Icons";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.04)",
      padding: "24px 28px", position: "relative", zIndex: 1,
      background: "rgba(0,0,0,0.25)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 14,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <LogoMark size={24} />
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--text-faint)", fontSize: "0.7rem", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Daniel Junior Mahunda · Dar es Salaam, TZ
          </span>
        </div>

        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
          {/* 44×44px touch targets — mobile-design: Fitts' Law minimum */}
          {[
            { href: "https://github.com/ghostface-bz", icon: <Github size={16} />, target: "_blank" },
            { href: "mailto:lioneljr4444@gmail.com", icon: <Mail size={16} />, target: undefined },
          ].map((s, i) => (
            <a key={i} href={s.href} target={s.target} rel={s.target ? "noopener noreferrer" : undefined}
              style={{
                width: 44, height: 44, borderRadius: 10, display: "flex",
                alignItems: "center", justifyContent: "center",
                color: "var(--text-muted)", transition: "all 0.2s",
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}>
              {s.icon}
            </a>
          ))}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{
            width: 44, height: 44, borderRadius: 10, cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--text-muted)", transition: "all 0.2s",
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)",
          }}
            aria-label="Scroll to top"
            onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.borderColor = "rgba(245,158,11,0.25)"; }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-muted)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.05)"; }}>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
