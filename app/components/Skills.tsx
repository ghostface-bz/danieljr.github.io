"use client";

import AnimateIn from "./AnimateIn";
import SectionParallax from "./SectionParallax";
import { IconCpu, IconNetworkNode, IconShieldScan, IconEyeScan } from "./Icons";

const groups = [
  {
    icon: <IconCpu size={18} color="var(--accent)" />,
    label: "Operating Systems",
    items: ["Linux — Ubuntu/Debian", "Arch Linux", "CentOS · Fedora", "Windows 10/11"],
  },
  {
    icon: <IconNetworkNode size={18} color="var(--accent)" />,
    label: "Networking",
    items: ["TCP/IP Stack", "LAN · Wi-Fi", "DHCP & DNS", "Routing & Switching", "Cable Patching"],
  },
  {
    icon: <IconShieldScan size={18} color="var(--accent)" />,
    label: "Security",
    items: ["Cybersecurity Fundamentals", "Endpoint Hardening", "Malware Detection", "Phishing Simulation", "Social Engineering"],
  },
  {
    icon: <IconEyeScan size={18} color="var(--accent)" />,
    label: "Hardware",
    items: ["PC Assembly", "Component Diagnostics", "Peripheral Management", "Preventive Maintenance"],
  },
  {
    icon: (
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--accent)", fontWeight: 700, letterSpacing: "-0.02em" }}>
        {"</>"}
      </span>
    ),
    label: "Programming",
    items: ["Python", "JavaScript", "PHP", "Java", "C", "HTML · CSS"],
  },
  {
    icon: (
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--accent)", fontWeight: 700 }}>
        {"~$_"}
      </span>
    ),
    label: "IT Support",
    items: ["Help Desk (12–20 req/wk)", "Asset Management", "Workstation Deployment", "Documentation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "130px 28px", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <div className="divider" style={{ marginBottom: 90 }} />

      <AnimateIn>
        <p className="section-label" style={{ marginBottom: 22 }}>
          <span className="line" /> Skills & Toolkit
        </p>
      </AnimateIn>
      <SectionParallax>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800,
          letterSpacing: "-0.035em", lineHeight: 1.0, marginBottom: 18,
        }}>
          What I bring to{" "}
          <span className="gradient-text">the table</span>
        </h2>
      </SectionParallax>
      <AnimateIn delay={140}>
        <p className="section-desc" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.96rem", marginBottom: 64, maxWidth: 480, lineHeight: 1.8 }}>
          From bare-metal hardware to endpoint security — built layer by layer through real field experience.
        </p>
      </AnimateIn>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }} className="skills-grid">
        {groups.map((g, i) => (
          <AnimateIn key={g.label} delay={i * 55}>
            <div className="icard skill-card" style={{
              background: "var(--surface)", border: "1px solid var(--border-subtle)",
              borderRadius: 16, padding: "24px 22px",
              height: "100%",
              transition: "border-color 0.25s, background 0.25s, transform 0.2s, box-shadow 0.25s",
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(245,158,11,0.22)";
                e.currentTarget.style.background = "var(--surface-2)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,0,0,0.35)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.background = "var(--surface)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}>

              {/* Icon + label row */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
                <div style={{
                  width: 40, height: 40, flexShrink: 0,
                  background: "rgba(245,158,11,0.07)",
                  border: "1px solid rgba(245,158,11,0.14)",
                  borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {g.icon}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.63rem", fontWeight: 500,
                  color: "var(--text-2)", textTransform: "uppercase", letterSpacing: "0.14em",
                }}>{g.label}</h3>
              </div>

              {/* Skill items */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {g.items.map(item => (
                  <div key={item} style={{
                    display: "flex", alignItems: "center", gap: 10,
                    color: "var(--text-muted)", fontSize: "0.83rem",
                    fontFamily: "var(--font-body)",
                  }}>
                    <div style={{
                      width: 3, height: 3, borderRadius: "50%",
                      background: "var(--accent)", flexShrink: 0, opacity: 0.5,
                    }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>

      {/* Pull quote */}
      <AnimateIn delay={200}>
        <div className="skills-pullquote" style={{
          marginTop: 56, display: "flex", alignItems: "center", gap: 20,
          padding: "28px 30px",
          background: "var(--surface)",
          border: "1px solid var(--border-subtle)",
          borderLeft: "3px solid var(--accent)",
          borderRadius: "0 14px 14px 0", maxWidth: 680,
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-body)", color: "var(--text-2)",
              fontSize: "0.97rem", lineHeight: 1.8, fontStyle: "italic",
            }}>
              &ldquo;Security is not a product — it&apos;s a process. I understand every
              layer, from the physical cable to the browser session, so I can defend any of them.&rdquo;
            </p>
            <p style={{ fontFamily: "var(--font-mono)", color: "var(--accent)", fontSize: "0.68rem", fontWeight: 500, marginTop: 14, letterSpacing: "0.06em" }}>
              — DANIEL JUNIOR MAHUNDA
            </p>
          </div>
        </div>
      </AnimateIn>

      <style>{`
        @media (max-width: 900px) { .skills-grid { grid-template-columns: repeat(2,1fr) !important; gap: 10px !important; } }
        @media (max-width: 520px) { .skills-grid { grid-template-columns: 1fr !important; gap: 10px !important; } }
        @media (max-width: 768px) {
          .skills-grid + div h2,
          .skills-grid ~ h2 {
            font-size: clamp(1.8rem, 7.5vw, 2.4rem) !important;
            line-height: 1.08 !important;
          }
          .skill-card {
            padding: 16px 14px !important;
            border-radius: 14px !important;
          }
          /* Compact icon row on mobile */
          .skill-card > div:first-child {
            margin-bottom: 14px !important;
            gap: 10px !important;
          }
          .skill-card > div:first-child > div:first-child {
            width: 36px !important; height: 36px !important;
          }
          /* Smaller item text */
          .skill-card > div:last-child > div {
            font-size: 0.8rem !important;
            gap: 8px !important;
          }
          .skills-pullquote {
            padding: 18px 16px !important;
            margin-top: 28px !important;
            border-radius: 0 12px 12px 0 !important;
          }
          .skills-pullquote p:first-child { font-size: 0.86rem !important; line-height: 1.7 !important; }
          .skills-pullquote p:last-child { font-size: 0.6rem !important; margin-top: 10px !important; }
        }
      `}</style>
    </section>
  );
}
