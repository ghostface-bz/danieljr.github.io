"use client";

import AnimateIn from "./AnimateIn";
import SectionParallax from "./SectionParallax";
import { IconShieldScan, IconCpu, IconEyeScan, IconSignalWave, HexDecor } from "./Icons";

const facts = [
  { icon: <IconEyeScan size={19} color="var(--accent)" />, label: "Focus", value: "Cybersecurity" },
  { icon: <IconCpu size={19} color="var(--accent)" />,     label: "OS",    value: "Linux Daily Driver" },
  { icon: <IconSignalWave size={19} color="var(--accent)" />, label: "Networks", value: "TCP/IP Expert" },
  { icon: <IconShieldScan size={19} color="var(--accent)" />, label: "Academic", value: "First-Class" },
];

export default function About() {
  return (
    <section id="about" style={{ padding: "130px 28px", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <div className="divider" style={{ marginBottom: 90 }} />

      <div style={{ display: "grid", gridTemplateColumns: "55fr 45fr", gap: 80, alignItems: "start" }} className="about-grid">

        {/* Left */}
        <div>
          <AnimateIn delay={0}>
            <p className="section-label" style={{ marginBottom: 22 }}>
              <span className="line" /> About
            </p>
          </AnimateIn>
          <SectionParallax>
            <h2 className="about-heading" style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800,
              letterSpacing: "-0.035em", lineHeight: 1.0, marginBottom: 36,
            }}>
              Security-minded.<br />
              <span className="gradient-text">Relentlessly curious.</span>
            </h2>
          </SectionParallax>
          <AnimateIn delay={160}>
            <div className="about-bio" style={{
              display: "flex", flexDirection: "column", gap: 18,
              color: "var(--text-muted)", lineHeight: 1.9, fontSize: "0.96rem",
              fontFamily: "var(--font-body)",
            }}>
              <p>
                I&apos;m Daniel Junior Mahunda — IT professional and cybersecurity
                enthusiast from{" "}
                <span style={{ color: "var(--text-2)", fontWeight: 500 }}>Dar es Salaam, Tanzania</span>.
                Studying for my Diploma in IT at Unique Academy, where I earned a{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>First-Class Academic Award</span>{" "}
                in Year 1.
              </p>
              <p>
                My path started from zero — assembling machines, configuring
                switches, reading RFCs. That grounding was tested in two real
                internships at{" "}
                <span style={{ color: "var(--text-2)" }}>Tanzania Postal Services</span> and{" "}
                <span style={{ color: "var(--text-2)" }}>Amana Regional Referral Hospital</span>,
                where I kept critical infrastructure alive for healthcare workers every day.
              </p>
              <p>
                What keeps me focused is the{" "}
                <span style={{ color: "var(--accent)", fontWeight: 600 }}>human attack surface</span> —
                the most exploited layer in any organization. I&apos;m building a
                Phishing Academy System to close that gap before attackers find it.
              </p>
            </div>
          </AnimateIn>
        </div>

        {/* Right */}
        <div style={{ position: "relative" }}>
          {/* Decorative hex — hidden on mobile to prevent viewport edge clipping */}
          <div className="about-hex-decor" style={{ position: "absolute", top: -20, right: -20, opacity: 0.5, pointerEvents: "none", zIndex: 0 }}>
            <HexDecor size={90} color="rgba(245,158,11,0.1)" />
          </div>

          <AnimateIn delay={100}>
            <div className="about-facts" style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative", zIndex: 1 }}>
              {facts.map((f) => (
                <div key={f.label} className="icard" style={{
                  display: "flex", alignItems: "center", gap: 14,
                  padding: "14px 16px",
                  background: "var(--surface)", border: "1px solid var(--border-subtle)",
                  borderRadius: 12, transition: "all 0.25s",
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(245,158,11,0.22)";
                    e.currentTarget.style.background = "var(--surface-2)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(4px)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.background = "var(--surface)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateX(0)";
                  }}>
                  {/* Icon container — consistent 40×40 with amber bg */}
                  <div style={{
                    width: 40, height: 40, flexShrink: 0, borderRadius: 10,
                    background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.14)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {f.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{
                      fontFamily: "var(--font-mono)", fontSize: "0.6rem", fontWeight: 500,
                      color: "var(--text-faint)", textTransform: "uppercase",
                      letterSpacing: "0.12em", marginBottom: 2,
                    }}>{f.label}</p>
                    <p style={{
                      fontFamily: "var(--font-display)", color: "var(--text-2)",
                      fontWeight: 700, fontSize: "0.88rem",
                    }}>{f.value}</p>
                  </div>
                </div>
              ))}

              {/* Active project card */}
              <AnimateIn delay={200} className="about-project-wrap">
                <div style={{
                  marginTop: 6, padding: "22px 20px",
                  background: "linear-gradient(135deg, rgba(245,158,11,0.07) 0%, rgba(251,146,60,0.04) 100%)",
                  border: "1px solid rgba(245,158,11,0.18)", borderRadius: 14,
                }}>
                  <p style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                    color: "var(--accent-lo)", marginBottom: 12, letterSpacing: "0.1em",
                  }}>// active_build.sh</p>
                  <p style={{ fontFamily: "var(--font-body)", color: "var(--text-2)", fontSize: "0.9rem", lineHeight: 1.75 }}>
                    <span style={{ color: "var(--accent)", fontWeight: 700 }}>Phishing Academy</span>
                    {" "}— Enterprise phishing simulation platform.
                    Train employees. Track click rates. Reduce human risk.
                  </p>
                  <div style={{ marginTop: 14, display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {["PHP", "MySQL", "JavaScript", "Security"].map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </AnimateIn>
            </div>
          </AnimateIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          /* Collapse to single column; prevent blowout */
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .about-grid > * { min-width: 0; max-width: 100%; }
          .about-hex-decor { display: none !important; }

          /* Heading */
          .about-heading {
            font-size: clamp(1.8rem, 7.5vw, 2.4rem) !important;
            line-height: 1.08 !important;
            margin-bottom: 18px !important;
          }

          /* Bio — words always wrap, never overflow */
          .about-bio {
            font-size: 0.88rem !important;
            line-height: 1.78 !important;
            gap: 12px !important;
          }
          .about-bio p {
            overflow-wrap: break-word;
            word-break: break-word;
          }

          /* Facts — stay as flex column, compact cards */
          .about-facts {
            display: flex !important;
            flex-direction: column !important;
            gap: 8px !important;
          }
          .about-facts .icard {
            padding: 12px 14px !important;
            gap: 12px !important;
          }
          .about-facts .icard > div:first-child {
            width: 36px !important;
            height: 36px !important;
          }

          /* Project card — tighter */
          .about-project-wrap > div {
            padding: 16px !important;
            margin-top: 2px !important;
          }
        }
      `}</style>
    </section>
  );
}
