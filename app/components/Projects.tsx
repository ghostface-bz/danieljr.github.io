"use client";

import { Github } from "lucide-react";
import AnimateIn from "./AnimateIn";
import SectionParallax from "./SectionParallax";
import { IconNetworkNode, IconShieldScan, IconTerminalBrace } from "./Icons";

const projects = [
  {
    id: "01",
    icon: <IconNetworkNode size={22} color="var(--accent)" />,
    title: "NetScope",
    sub: "Network Monitoring & Analysis",
    desc: "A Rust-based tool for inspecting traffic patterns, visualizing network topology, and detecting anomalies. Built from hands-on TCP/IP knowledge gained during real internships.",
    tags: ["Rust", "TCP/IP", "Networking", "Analysis"],
    github: "https://github.com/ghostface-bz",
    status: "Active",
    statusColor: "#4ade80",
    statusBg: "rgba(74,222,128,0.1)",
  },
  {
    id: "02",
    icon: <IconShieldScan size={22} color="var(--accent)" />,
    title: "Phishing Academy",
    sub: "Enterprise Security Awareness Platform",
    desc: "Diploma capstone. Full-stack platform for running simulated phishing campaigns, tracking employee click rates, and delivering targeted security training. Turns the weakest link into the strongest.",
    tags: ["PHP", "MySQL", "JavaScript", "Social Engineering"],
    github: null,
    status: "In Progress",
    statusColor: "var(--accent)",
    statusBg: "rgba(245,158,11,0.1)",
  },
  {
    id: "03",
    icon: <IconTerminalBrace size={22} color="var(--accent)" />,
    title: "Endpoint Hardening",
    sub: "Linux Security Automation Toolkit",
    desc: "Shell scripts for automated Linux hardening — firewall rules, malware scans, permission audits, and compliance checks. Distilled from real hospital IT support experience.",
    tags: ["Bash", "Linux", "Security", "Automation"],
    github: "https://github.com/ghostface-bz",
    status: "Active",
    statusColor: "#4ade80",
    statusBg: "rgba(74,222,128,0.1)",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "130px 28px", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <div className="divider" style={{ marginBottom: 90 }} />

      <div className="projects-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 64 }}>
        <div>
          <AnimateIn>
            <p className="section-label" style={{ marginBottom: 22 }}>
              <span className="line" /> Projects
            </p>
          </AnimateIn>
          <SectionParallax>
            <h2 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800,
              letterSpacing: "-0.035em", lineHeight: 1.0,
            }}>
              Things I&apos;ve{" "}
              <span className="gradient-text">built</span>
            </h2>
          </SectionParallax>
        </div>
        <AnimateIn delay={120}>
          <a href="https://github.com/ghostface-bz" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            fontFamily: "var(--font-mono)", fontSize: "0.72rem",
            color: "var(--text-muted)", textDecoration: "none",
            border: "1px solid var(--border-subtle)", padding: "10px 16px",
            borderRadius: 10, letterSpacing: "0.04em",
            transition: "all 0.2s",
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(245,158,11,0.28)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.color = "var(--text-muted)"; }}>
            <Github size={14} /> ghostface-bz →
          </a>
        </AnimateIn>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 18 }}>
        {projects.map((p, i) => (
          <AnimateIn key={p.id} delay={i * 90}>
            <div className="icard proj-card" style={{
              background: "var(--surface)", border: "1px solid var(--border-subtle)",
              borderRadius: 18, padding: 28, height: "100%",
              display: "flex", flexDirection: "column", gap: 18,
              position: "relative", overflow: "hidden",
              transition: "border-color 0.3s, transform 0.25s, box-shadow 0.3s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(245,158,11,0.25)";
                e.currentTarget.style.transform = "translateY(-5px)";
                e.currentTarget.style.boxShadow = "0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(245,158,11,0.08), inset 0 1px 0 rgba(245,158,11,0.06)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>

              {/* Large ID watermark */}
              <span style={{
                position: "absolute", bottom: -4, right: 16,
                fontFamily: "var(--font-display)", fontSize: "5.5rem",
                fontWeight: 900, color: "rgba(245,158,11,0.04)",
                lineHeight: 1, userSelect: "none", pointerEvents: "none",
              }}>{p.id}</span>

              {/* Top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{
                  width: 46, height: 46,
                  background: "rgba(245,158,11,0.07)",
                  border: "1px solid rgba(245,158,11,0.14)",
                  borderRadius: 12,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {p.icon}
                </div>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.62rem", fontWeight: 500,
                  color: p.statusColor, background: p.statusBg,
                  border: `1px solid ${p.statusColor}30`,
                  padding: "4px 10px", borderRadius: 100, letterSpacing: "0.06em",
                }}>{p.status}</span>
              </div>

              <div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 800, color: "var(--text)", marginBottom: 4 }}>{p.title}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--accent)", letterSpacing: "0.04em", opacity: 0.85 }}>{p.sub}</p>
              </div>

              <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.85rem", lineHeight: 1.78, flexGrow: 1 }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
              </div>

              <div style={{ display: "flex", gap: 16, borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 14 }}>
                {p.github ? (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" style={{
                    display: "flex", alignItems: "center", gap: 6,
                    fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                    color: "var(--text-muted)", textDecoration: "none",
                    letterSpacing: "0.04em", transition: "color 0.2s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}>
                    <Github size={13} /> source →
                  </a>
                ) : (
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--text-faint)", letterSpacing: "0.04em" }}>
                    ◈ private · in development
                  </span>
                )}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .projects-header { margin-bottom: 32px !important; }
          .projects-header h2 {
            font-size: clamp(1.8rem, 7.5vw, 2.4rem) !important;
            line-height: 1.08 !important;
          }
        }
        @media (max-width: 600px) {
          .projects-header > div:last-child { width: 100% !important; }
          .projects-header > div:last-child a { width: 100% !important; justify-content: center !important; }
          .proj-card {
            padding: 18px !important;
            gap: 14px !important;
            border-radius: 14px !important;
          }
          .proj-card h3 { font-size: 1rem !important; }
          .proj-card p { font-size: 0.82rem !important; }
          /* Shrink the watermark ID on mobile */
          .proj-card > span:first-child { font-size: 3.5rem !important; }
        }
      `}</style>
    </section>
  );
}
