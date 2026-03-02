"use client";

import AnimateIn from "./AnimateIn";
import SectionParallax from "./SectionParallax";
import { Award } from "lucide-react";

const jobs = [
  {
    title: "IT Support Field Training",
    org: "Amana Regional Referral Hospital",
    period: "Jun – Aug 2025",
    accentColor: "var(--accent)",
    points: [
      "First-line technical support for hospital staff — hardware, software & connectivity",
      "Diagnosed LAN/Wi-Fi faults (TCP/IP, DHCP, DNS), cutting network downtime",
      "Malware scans & OS hardening — improved endpoint security compliance",
      "Maintained IT asset records and escalation documentation",
    ],
    tags: ["Linux", "TCP/IP", "DHCP", "DNS", "Endpoint Security"],
  },
  {
    title: "IT Support Field Training",
    org: "Tanzania Postal Services (TPS)",
    period: "Jun – Aug 2024",
    accentColor: "var(--orange)",
    points: [
      "12–20 help-desk requests/week — PCs, printers, network devices",
      "Deployed workstations: OS install, drivers, user account provisioning",
      "LAN infrastructure — cable management, switch-port patching",
      "Preventive hardware maintenance: cleaning, storage upgrades",
    ],
    tags: ["Windows", "LAN", "Help Desk", "Workstation Deployment"],
  },
];

const edu = [
  { degree: "Diploma in Information Technology", school: "Unique Academy", period: "2024 – Present", award: "First-Class Academic Award (Year 1)", awardColor: "var(--accent)" },
  { degree: "Certificate in Information Technology", school: "Unique Academy", period: "2023 – 2024", award: "2nd Award for Academic Excellence", awardColor: "var(--orange)" },
  { degree: "Foundation in Information Technology", school: "Unique Academy", period: "Apr – Sep 2023", award: null, awardColor: null },
];

const certs = [
  { label: "Cybersecurity Workshop", meta: "Unique Academy · 2023" },
  { label: "Field Training", meta: "Amana Referral Hospital · 2025" },
  { label: "Field Training", meta: "Tanzania Postal Service · 2024" },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "130px 28px", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <div className="divider" style={{ marginBottom: 90 }} />

      <AnimateIn>
        <p className="section-label" style={{ marginBottom: 22 }}>
          <span className="line" /> Experience & Education
        </p>
      </AnimateIn>
      <SectionParallax>
        <h2 className="exp-heading" style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800,
          letterSpacing: "-0.035em", lineHeight: 1.0, marginBottom: 72,
        }}>
          Tested in the{" "}
          <span className="gradient-text">real world</span>
        </h2>
      </SectionParallax>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }} className="exp-grid">

        {/* Work */}
        <div>
          <AnimateIn delay={0}>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 28,
            }}>◈ Work Experience</div>
          </AnimateIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {jobs.map((job, i) => (
              <AnimateIn key={i} delay={i * 80}>
                <div className="icard exp-card" style={{
                  background: "var(--surface)", border: "1px solid var(--border-subtle)",
                  borderRadius: 16, padding: "26px 26px 26px 30px",
                  position: "relative", overflow: "hidden",
                  transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(245,158,11,0.22)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                  {/* Left accent bar */}
                  <div style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: 3,
                    background: `linear-gradient(180deg, ${job.accentColor} 0%, transparent 100%)`,
                    borderRadius: "16px 0 0 16px",
                  }} />

                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 4 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.97rem", fontWeight: 700, color: "var(--text)" }}>
                      {job.title}
                    </h3>
                    <span style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                      color: "var(--text-muted)", background: "rgba(255,255,255,0.04)",
                      padding: "3px 10px", borderRadius: 6,
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}>{job.period}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", color: job.accentColor, fontSize: "0.82rem", fontWeight: 600, marginBottom: 18, opacity: 0.9 }}>
                    {job.org}
                  </p>
                  <ul style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 18 }}>
                    {job.points.map((p, j) => (
                      <li key={j} style={{
                        display: "flex", gap: 10, alignItems: "flex-start",
                        color: "var(--text-muted)", fontSize: "0.83rem", lineHeight: 1.65,
                        fontFamily: "var(--font-body)",
                      }}>
                        <span style={{ color: "var(--text-faint)", fontSize: "0.5rem", marginTop: 5, flexShrink: 0 }}>◆</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>

        {/* Education + Certs */}
        <div>
          <AnimateIn delay={0}>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 28,
            }}>◈ Education</div>
          </AnimateIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
            {edu.map((e, i) => (
              <AnimateIn key={i} delay={i * 70}>
                <div className="icard" style={{
                  background: "var(--surface)", border: "1px solid var(--border-subtle)",
                  borderRadius: 14, padding: "18px 20px",
                  transition: "border-color 0.25s, background 0.25s",
                }}
                  onMouseEnter={ev => {
                    ev.currentTarget.style.borderColor = "rgba(245,158,11,0.2)";
                    ev.currentTarget.style.background = "var(--surface-2)";
                  }}
                  onMouseLeave={ev => {
                    ev.currentTarget.style.borderColor = "var(--border-subtle)";
                    ev.currentTarget.style.background = "var(--surface)";
                  }}>
                  <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 3 }}>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: "0.88rem", fontWeight: 700, color: "var(--text)" }}>{e.degree}</h3>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--text-muted)" }}>{e.period}</span>
                  </div>
                  <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.8rem", marginBottom: e.award ? 10 : 0 }}>{e.school}</p>
                  {e.award && (
                    <div style={{ display: "flex", alignItems: "center", gap: 6, color: e.awardColor || "var(--accent)", fontSize: "0.76rem", fontWeight: 600, fontFamily: "var(--font-body)" }}>
                      <Award size={11} /> {e.award}
                    </div>
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn delay={200}>
            <div style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.62rem", fontWeight: 500, letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16,
            }}>◈ Certifications</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {certs.map((c, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "13px 16px",
                  background: "var(--surface)", border: "1px solid var(--border-subtle)",
                  borderRadius: 10, gap: 12, transition: "border-color 0.2s",
                }} className="icard"
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(245,158,11,0.18)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border-subtle)")}>
                  <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <span style={{ color: "var(--accent)", fontSize: "0.45rem" }}>◆</span>
                    <span style={{ fontFamily: "var(--font-body)", color: "var(--text-2)", fontSize: "0.83rem" }}>{c.label}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--text-faint)", whiteSpace: "nowrap" }}>{c.meta}</span>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .exp-heading {
            margin-bottom: 32px !important;
            font-size: clamp(1.8rem, 7.5vw, 2.4rem) !important;
            line-height: 1.08 !important;
          }
          .exp-card {
            padding: 16px 16px 16px 20px !important;
            border-radius: 14px !important;
          }
          .exp-card h3 { font-size: 0.9rem !important; }
          .exp-card ul li { font-size: 0.8rem !important; line-height: 1.6 !important; }
        }
        /* Cert meta wrapping on small screens */
        @media (max-width: 420px) {
          .exp-card > div:first-child {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 4px !important;
          }
        }
      `}</style>
    </section>
  );
}
