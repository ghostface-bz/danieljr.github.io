// Custom niche SVG icons — cybersecurity / tactical aesthetic

export function IconShieldScan({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L4 6v6c0 5 3.5 9.3 8 10.3C16.5 21.3 20 17 20 12V6L12 2z" />
      <line x1="7" y1="12" x2="17" y2="12" strokeOpacity="0.4" />
      <line x1="7" y1="12" x2="17" y2="12" stroke={color} strokeDasharray="10 0" strokeWidth="1.5">
        <animate attributeName="y1" values="8;16;8" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="y2" values="8;16;8" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0;1;0" dur="2.5s" repeatCount="indefinite" />
      </line>
      <circle cx="12" cy="12" r="1.5" fill={color} />
    </svg>
  );
}

export function IconNetworkNode({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round">
      <circle cx="12" cy="12" r="2.5" />
      <circle cx="4"  cy="6"  r="1.8" />
      <circle cx="20" cy="6"  r="1.8" />
      <circle cx="4"  cy="18" r="1.8" />
      <circle cx="20" cy="18" r="1.8" />
      <line x1="9.6"  y1="10.6" x2="5.6"  y2="7.3" />
      <line x1="14.4" y1="10.6" x2="18.4" y2="7.3" />
      <line x1="9.6"  y1="13.4" x2="5.6"  y2="16.7" />
      <line x1="14.4" y1="13.4" x2="18.4" y2="16.7" />
    </svg>
  );
}

export function IconTerminalBrace({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="3" />
      <line x1="2" y1="8" x2="22" y2="8" strokeOpacity="0.3" />
      <circle cx="5.5" cy="5.5" r="0.8" fill={color} opacity="0.5" />
      <circle cx="8.5" cy="5.5" r="0.8" fill={color} opacity="0.5" />
      <path d="M7 13l-2 2 2 2" strokeOpacity="0.8" />
      <path d="M17 13l2 2-2 2" strokeOpacity="0.8" />
      <line x1="12" y1="12" x2="12" y2="17" strokeOpacity="0.6" />
    </svg>
  );
}

export function IconEyeScan({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="2.5" />
      <line x1="6" y1="12" x2="18" y2="12" strokeOpacity="0.25" strokeWidth="1" />
      <line x1="6" y1="12" x2="18" y2="12" strokeWidth="1.2" strokeOpacity="0.9" strokeDasharray="3 9">
        <animate attributeName="stroke-dashoffset" values="12;0;12" dur="2s" repeatCount="indefinite" />
      </line>
    </svg>
  );
}

export function IconHexLock({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2l8.66 5v10L12 22 3.34 17V7L12 2z" />
      <rect x="9" y="12" width="6" height="5" rx="1" />
      <path d="M10 12v-2a2 2 0 0 1 4 0v2" />
    </svg>
  );
}

export function IconFingerprint({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round">
      <path d="M12 2C9.4 2 7 3.1 5.3 4.9" opacity="0.4" />
      <path d="M18.7 4.9A9.9 9.9 0 0 1 22 12" opacity="0.4" />
      <path d="M7 20.7A9.9 9.9 0 0 1 2 12c0-1.8.5-3.5 1.3-5" />
      <path d="M17 20.7A9.9 9.9 0 0 0 22 12" />
      <path d="M12 8a4 4 0 0 0-4 4c0 1.5.4 2.9 1.2 4" />
      <path d="M12 8a4 4 0 0 1 4 4 9.7 9.7 0 0 1-1.2 4" />
      <path d="M12 12v.01" strokeWidth="2" />
    </svg>
  );
}

export function IconSignalWave({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round">
      <path d="M2 12h2" opacity="0.3" />
      <path d="M5 8c0 0 1 1.5 1 4s-1 4-1 4" opacity="0.5" />
      <path d="M8 6c0 0 2 2.5 2 6s-2 6-2 6" opacity="0.7" />
      <path d="M11 4c0 0 3 3.5 3 8s-3 8-3 8" />
      <path d="M22 12h-2" opacity="0.3" />
      <path d="M19 8c0 0-1 1.5-1 4s1 4 1 4" opacity="0.5" />
      <path d="M16 6c0 0-2 2.5-2 6s2 6 2 6" opacity="0.7" />
    </svg>
  );
}

export function IconCpu({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <line x1="10" y1="7" x2="10" y2="3" /><line x1="14" y1="7" x2="14" y2="3" />
      <line x1="10" y1="21" x2="10" y2="17" /><line x1="14" y1="21" x2="14" y2="17" />
      <line x1="7" y1="10" x2="3" y2="10" /><line x1="7" y1="14" x2="3" y2="14" />
      <line x1="17" y1="10" x2="21" y2="10" /><line x1="17" y1="14" x2="21" y2="14" />
      <rect x="9.5" y="9.5" width="5" height="5" rx="0.5" fill={color} opacity="0.15" stroke="none" />
    </svg>
  );
}

export function IconRadar({ size = 100, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round">
      {/* Concentric range rings */}
      <circle cx="50" cy="50" r="45" strokeWidth="0.7" opacity="0.12" />
      <circle cx="50" cy="50" r="32" strokeWidth="0.7" opacity="0.18" />
      <circle cx="50" cy="50" r="19" strokeWidth="0.7" opacity="0.25" />
      {/* Crosshair lines */}
      <line x1="50" y1="4"  x2="50" y2="96" strokeWidth="0.5" opacity="0.09" />
      <line x1="4"  y1="50" x2="96" y2="50" strokeWidth="0.5" opacity="0.09" />
      {/* Rotating sweep arm */}
      <g style={{ animation: "radarSpin 4s linear infinite", transformOrigin: "50px 50px" }}>
        <line x1="50" y1="50" x2="50" y2="5" strokeWidth="1.6" opacity="0.9" />
        <path d="M50 50 L68 14 A45 45 0 0 0 50 5 Z" fill={color} opacity="0.09" stroke="none" />
      </g>
      {/* Center dot */}
      <circle cx="50" cy="50" r="2.5" fill={color} opacity="0.8" stroke="none" />
      {/* Blipping targets */}
      <circle cx="65" cy="27" r="2.5" fill={color} stroke="none">
        <animate attributeName="opacity" values="0;0.9;0.5;0" dur="4s" begin="1.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="32" cy="63" r="1.8" fill={color} stroke="none">
        <animate attributeName="opacity" values="0;0.7;0.3;0" dur="4s" begin="2.9s" repeatCount="indefinite" />
      </circle>
      <circle cx="71" cy="56" r="2" fill={color} stroke="none">
        <animate attributeName="opacity" values="0;0.85;0.4;0" dur="4s" begin="0.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// ── Logo mark ────────────────────────────────
// Flat-backed pointy-top hexagon with "D" monogram
export function LogoMark({ size = 30 }: { size?: number }) {
  // Pointy-top hex, r=13, center=(15,15) in 30×30 viewBox
  const hex = "M15,2 L26.3,8.5 L26.3,21.5 L15,28 L3.7,21.5 L3.7,8.5 Z";
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" fill="none" style={{ display: "block", flexShrink: 0 }}>
      {/* Subtle inner fill */}
      <path d={hex} fill="rgba(245,158,11,0.08)" />
      {/* Amber stroke outline */}
      <path d={hex} stroke="var(--accent)" strokeWidth="1.4" />
      {/* Monogram */}
      <text
        x="15" y="20.5"
        textAnchor="middle"
        fontFamily="Syne, system-ui, sans-serif"
        fontWeight="800"
        fontSize="13"
        fill="var(--accent)"
      >D</text>
    </svg>
  );
}

// Decorative geometric elements
export function HexDecor({ size = 40, color = "rgba(245,158,11,0.12)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="1">
      <path d="M20 2l15.6 9v18L20 38 4.4 29V11L20 2z" />
    </svg>
  );
}

export function CrosshairDecor({ size = 32, color = "rgba(245,158,11,0.1)" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="0.8">
      <circle cx="16" cy="16" r="10" />
      <circle cx="16" cy="16" r="3" />
      <line x1="16" y1="0" x2="16" y2="10" />
      <line x1="16" y1="22" x2="16" y2="32" />
      <line x1="0" y1="16" x2="10" y2="16" />
      <line x1="22" y1="16" x2="32" y2="16" />
    </svg>
  );
}
