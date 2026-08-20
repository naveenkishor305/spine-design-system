import type { Metadata } from "next";
import {
  IBM_Plex_Mono,
  Inter,
  Noto_Sans_Devanagari,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-noto-devanagari",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Spine — Clinical Operations Design System",
    template: "%s | Spine",
  },
  description:
    "Spine is the role-aware design system for Hospital OS, spanning patient access, emergency and trauma, inpatient and critical care, diagnostics, pharmacy, revenue cycle, supply chain, allied health, facility operations and enterprise governance — shipped as a real component package, not just documentation.",
  applicationName: "Spine Design System",
  keywords: [
    "Spine Design System",
    "Hospital OS",
    "Healthcare design system",
    "Clinical operations",
    "Enterprise UX",
    "Hospital management",
    "Product design",
    "Emergency and trauma",
    "Inpatient and critical care",
    "Revenue cycle management",
    "Supply chain",
  ],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Spine — Clinical Operations Design System",
    description:
      "A role-aware design system for safer, connected hospital operations — across the full platform, not one department.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plexMono.variable} ${notoDevanagari.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
