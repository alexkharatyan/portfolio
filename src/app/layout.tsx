import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alexandria Kharatyan — Senior UI Engineer",
  description:
    "Portfolio of Alexandria Kharatyan — Senior UI Engineer specializing in design systems, scalable frontend architecture, accessible web interfaces, and modern user experiences.",
  keywords: [
    "UI Engineer",
    "Frontend Developer",
    "Design Systems",
    "React",
    "TypeScript",
    "Accessibility",
    "Portfolio",
    "Alexandria Kharatyan",
  ],
  authors: [{ name: "Alexandria Kharatyan" }],
  openGraph: {
    title: "Alexandria Kharatyan — Senior UI Engineer",
    description:
      "Senior UI Engineer specializing in design systems, scalable frontend architecture, and modern user experiences.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexandria Kharatyan — Senior UI Engineer",
    description:
      "Senior UI Engineer specializing in design systems, scalable frontend architecture, and modern user experiences.",
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
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
