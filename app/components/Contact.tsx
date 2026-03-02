"use client";

import { Mail, Phone, Github, MapPin, MessageCircle, ArrowRight } from "lucide-react";
import AnimateIn from "./AnimateIn";
import SectionParallax from "./SectionParallax";
import { HexDecor } from "./Icons";

const contacts = [
  { icon: <Mail size={17} />, label: "Email", value: "lioneljr4444@gmail.com", href: "mailto:lioneljr4444@gmail.com" },
  { icon: <MessageCircle size={17} />, label: "WhatsApp", value: "+255 613 048 858", href: "https://wa.me/255613048858" },
  { icon: <Phone size={17} />, label: "Phone", value: "+255 740 405 066", href: "tel:+255740405066" },
  { icon: <Github size={17} />, label: "GitHub", value: "ghostface-bz", href: "https://github.com/ghostface-bz" },
  { icon: <MapPin size={17} />, label: "Location", value: "Dar es Salaam, Tanzania", href: null },
];

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "130px 28px 150px", maxWidth: 1100, margin: "0 auto", position: "relative" }}>
      <div className="divider" style={{ marginBottom: 90 }} />

      <AnimateIn>
        <p className="section-label" style={{ marginBottom: 22 }}>
          <span className="line" /> Contact
        </p>
      </AnimateIn>
      <SectionParallax>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800,
          letterSpacing: "-0.035em", lineHeight: 1.0, marginBottom: 18,
        }}>
          Let&apos;s{" "}
          <span className="gradient-text">work together</span>
        </h2>
      </SectionParallax>
      <AnimateIn delay={140}>
        <p className="section-desc" style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.96rem", marginBottom: 64, maxWidth: 480, lineHeight: 1.8 }}>
          Open to internships, IT roles, security consultations, and meaningful collaborations.
          Based in Tanzania — available globally.
        </p>
      </AnimateIn>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="contact-grid">

        {/* Contacts list */}
        <AnimateIn delay={0}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {contacts.map((c) => (
              <div key={c.label}>
                {c.href ? (
                  <a href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    style={{ textDecoration: "none", display: "block" }}>
                    <div className="icard" style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: "14px 16px",
                      background: "var(--surface)", border: "1px solid var(--border-subtle)",
                      borderRadius: 12, cursor: "pointer",
                      transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                    }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = "rgba(245,158,11,0.22)";
                        e.currentTarget.style.background = "var(--surface-2)";
                        e.currentTarget.style.transform = "translateX(4px)";
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = "var(--border-subtle)";
                        e.currentTarget.style.background = "var(--surface)";
                        e.currentTarget.style.transform = "translateX(0)";
                      }}>
                      <div style={{
                        width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                        background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.14)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "var(--accent)",
                      }}>{c.icon}</div>
                      <div>
                        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-faint)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 2 }}>{c.label}</p>
                        <p style={{ fontFamily: "var(--font-body)", fontSize: "0.86rem", color: "var(--text-2)", fontWeight: 500 }}>{c.value}</p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="icard" style={{
                    display: "flex", alignItems: "center", gap: 14,
                    padding: "14px 16px",
                    background: "var(--surface)", border: "1px solid var(--border-subtle)",
                    borderRadius: 12,
                  }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: 9, flexShrink: 0,
                      background: "rgba(245,158,11,0.07)", border: "1px solid rgba(245,158,11,0.14)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--accent)",
                    }}>{c.icon}</div>
                    <div>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-faint)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 2 }}>{c.label}</p>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.86rem", color: "var(--text-2)", fontWeight: 500 }}>{c.value}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimateIn>

        {/* CTA card */}
        <AnimateIn delay={100}>
          <div className="contact-cta" style={{
            background: "linear-gradient(145deg, var(--surface-2) 0%, var(--surface) 100%)",
            border: "1px solid rgba(245,158,11,0.14)", borderRadius: 20,
            padding: "36px 32px", display: "flex", flexDirection: "column",
            justifyContent: "space-between", height: "100%", position: "relative", overflow: "hidden",
          }}>
            {/* Decorative hex background */}
            <div style={{ position: "absolute", bottom: -20, right: -20, opacity: 0.5, pointerEvents: "none" }}>
              <HexDecor size={120} color="rgba(245,158,11,0.06)" />
            </div>

            <div style={{ position: "relative", zIndex: 1 }}>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                color: "var(--text-faint)", marginBottom: 18, letterSpacing: "0.08em",
                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
              }}>
                <span style={{ color: "var(--accent)" }}>$</span> ping daniel --re &ldquo;opportunity&rdquo;
              </p>
              <h3 style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.8rem", fontWeight: 800, color: "var(--text)",
                marginBottom: 14, lineHeight: 1.15, letterSpacing: "-0.02em",
              }}>
                Ready when<br />you are.
              </h3>
              <p style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.8 }}>
                Whether it&apos;s a full-time role, internship, IT support, or a
                cybersecurity project — I respond fast and take every opportunity seriously.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 9, marginTop: 28, position: "relative", zIndex: 1 }}>
              <a href="mailto:lioneljr4444@gmail.com" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                fontFamily: "var(--font-display)",
                background: "var(--accent)", color: "#0b0a08",
                padding: "13px 20px", borderRadius: 12,
                fontWeight: 800, fontSize: "0.9rem", textDecoration: "none",
                boxShadow: "0 4px 20px rgba(245,158,11,0.2)",
                transition: "all 0.25s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--accent-hi)";
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(245,158,11,0.4)";
                  e.currentTarget.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--accent)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(245,158,11,0.2)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}>
                <Mail size={16} /> Send Email <ArrowRight size={14} />
              </a>
              <a href="https://wa.me/255613048858" target="_blank" rel="noopener noreferrer" style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                fontFamily: "var(--font-display)",
                background: "rgba(255,255,255,0.04)", color: "var(--text-2)",
                padding: "13px 20px", borderRadius: 12,
                fontWeight: 600, fontSize: "0.9rem", textDecoration: "none",
                border: "1px solid var(--border-subtle)", transition: "all 0.2s",
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.28)";
                  e.currentTarget.style.background = "rgba(245,158,11,0.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                }}>
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>
          </div>
        </AnimateIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .contact-cta {
            padding: 24px 18px !important;
            border-radius: 16px !important;
          }
          .contact-cta h3 {
            font-size: 1.4rem !important;
            margin-bottom: 10px !important;
          }
          .contact-cta p { font-size: 0.84rem !important; }
          /* Contact cards tighter */
          .contact-grid .icard { padding: 12px 14px !important; }
        }
        @media (max-width: 420px) {
          /* Stack contact value below label on very small screens */
          .contact-grid .icard > div:first-child {
            width: 32px !important; height: 32px !important;
          }
          .contact-grid .icard > div:last-child p:last-child {
            font-size: 0.8rem !important;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      `}</style>
    </section>
  );
}
