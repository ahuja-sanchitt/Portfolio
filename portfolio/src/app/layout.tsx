import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  icons: { icon: "/favicon.ico" },
  title: "Sanchit Ahuja | Backend + AI Engineer",
  description:
    "Backend + AI Engineer building scalable backend services, production LLM agents, and the LLMOps infrastructure behind them.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className="bg-[#0a0a0a] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
