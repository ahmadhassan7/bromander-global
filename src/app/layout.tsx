import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Bromander Global | Innovative Solutions for Modern Businesses",
  description: "Bromander Global delivers cutting-edge products including AI Reliance Tracker and Smart Bookkeeping app. Empowering businesses with technology that transforms how you work.",
  keywords: "Bromander Global, AI Reliance Tracker, Smart Bookkeeping, business solutions, digital wellness, automation",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  openGraph: {
    title: "Bromander Global",
    description: "Innovative solutions for modern businesses",
    type: "website",
    locale: "en_US",
    siteName: "Bromander Global",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bromander Global",
    description: "Innovative solutions for modern businesses",
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}