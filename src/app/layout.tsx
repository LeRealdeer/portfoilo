import type { Metadata } from "next";
import { archivo, notoSansKR } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "서인하 — Player Behavior & Service Planning",
  description:
    "게임 유저가 실제로 하는 행동을 관찰하고, 관리·탐색·표현 경험을 서비스로 설계합니다. 유저 리서치 → 서비스 기획 → 라이브 운영까지, 서인하의 포트폴리오.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${archivo.variable} ${notoSansKR.variable}`}>
      <body>{children}</body>
    </html>
  );
}
