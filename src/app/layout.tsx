import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HackX - 黑客松平台",
  description: "专业的黑客松比赛平台",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}

