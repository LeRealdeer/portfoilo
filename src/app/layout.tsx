import type { Metadata } from "next";
import { archivo, notoSansKR } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "서인하 — Game Community & Live Operations",
  description:
    "I turn player needs into community experiences. 게임 커뮤니티 관찰 → 서비스 기획 → 라이브 운영까지, 서인하의 포트폴리오.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${archivo.variable} ${notoSansKR.variable}`}>
      <body>{children}</body>
    </html>
  );
}
