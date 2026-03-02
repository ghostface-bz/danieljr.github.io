import type { Metadata, Viewport } from "next";
import { Syne, JetBrains_Mono, DM_Sans } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Daniel Junior Mahunda — IT & Cybersecurity",
  description:
    "IT professional and cybersecurity enthusiast based in Dar es Salaam, Tanzania. First-class student, real-world IT experience, building enterprise security awareness systems.",
  keywords: ["cybersecurity", "IT support", "Tanzania", "Linux", "networking", "Daniel Mahunda"],
  authors: [{ name: "Daniel Junior Mahunda" }],
  openGraph: {
    title: "Daniel Junior Mahunda — IT & Cybersecurity",
    description: "IT professional and cybersecurity enthusiast based in Dar es Salaam, Tanzania.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Person schema — improves Google rich results (Phase 4: SEO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Daniel Junior Mahunda",
              jobTitle: "IT Professional & Cybersecurity Enthusiast",
              email: "lioneljr4444@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dar es Salaam",
                addressCountry: "TZ",
              },
              sameAs: ["https://github.com/ghostface-bz"],
            }),
          }}
        />
      </head>
      <body className={`${syne.variable} ${dmSans.variable} ${mono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
