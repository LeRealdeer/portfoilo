import type { Locale } from "@/lib/i18n";

export type ExperienceRow = {
  period: string;
  /** 기관 / 활동명 */
  org: string;
  /** 역할 */
  role: string;
  /** 한 줄 설명 — 포트폴리오 핵심 메시지와 연결 */
  body: string;
  /** 이 경험으로 쌓은 역량 키워드 */
  focus: string;
};

const byLocale: Record<Locale, ExperienceRow[]> = {
  ko: [
    {
      period: "2026.04 — Present",
      org: "온이츠에이아이",
      role: "Service Planner / 서비스 기획자",
      body: "AI 기반 서비스의 요구사항 분석, 기능 정의, 서비스 구조 설계, 개발 협업을 담당하고 있습니다.",
      focus: "Service Planning",
    },
    {
      period: "2025.05 — 2025.12",
      org: "연세대학교 컴퓨터과학과 HDIL",
      role: "Research Intern",
      body: "데이터 시각화 프로젝트에서 차트 시각화를 개발하고 연구 미팅에 참여하며 데이터 기반 문제 해결을 경험했습니다.",
      focus: "Data Analysis",
    },
    {
      period: "2024.09 — 2025.03",
      org: "KDT Full-stack Web Development Course",
      role: "Full-stack Web Development",
      body: "React · JavaScript · Spring Boot · MySQL 기반 웹 서비스 개발 과정을 이수하며 프론트엔드부터 백엔드·DB·배포까지 서비스 구현 전반을 경험했습니다.",
      focus: "Full-stack Understanding",
    },
    {
      period: "2023 — 2025",
      org: "세종대학교 Python Programming TA",
      role: "Teaching Assistant · 4 semesters",
      body: "프로그래밍 입문·기초 코딩 과목 조교로 학습 지원과 질의응답을 수행하며 기술을 쉽게 전달하는 커뮤니케이션 역량을 키웠습니다. 2025년 1학기 우수조교 선정.",
      focus: "Communication",
    },
    {
      period: "2025.03 — 2025.05",
      org: "세종대학교 글로벌친친 (Global Chin-Chin)",
      role: "Mentor",
      body: "다양한 문화적 배경의 외국인 학생들과 교류하며 언어와 문화 차이를 고려한 커뮤니케이션을 경험했습니다.",
      focus: "Global Communication",
    },
    {
      period: "2022.04 — 2023.05",
      org: "게임 개발 동아리",
      role: "Member",
      body: "Unity·C# 기반 팀·개인 게임 프로젝트를 제작하며 게임 UI와 인터랙션 구현을 경험했습니다.",
      focus: "Game Community",
    },
    {
      period: "2021.09 — 2024.02",
      org: "역사학과 시사어름 학회",
      role: "Member",
      body: "역사·사회 이슈를 주제로 토론하며 다양한 관점에서 문제를 분석하는 인문학적 사고력을 길렀습니다.",
      focus: "User Insight",
    },
  ],
  en: [
    {
      period: "2026.04 — Present",
      org: "OnitsAI",
      role: "Service Planner",
      body: "On an AI-based service I own requirements analysis, feature definition, service structure, and collaboration with the dev team.",
      focus: "Service Planning",
    },
    {
      period: "2025.05 — 2025.12",
      org: "HDIL, Dept. of Computer Science, Yonsei University",
      role: "Research Intern",
      body: "Built chart visualizations for a data-visualization project and joined research meetings — hands-on experience with data-driven problem solving.",
      focus: "Data Analysis",
    },
    {
      period: "2024.09 — 2025.03",
      org: "KDT Full-stack Web Development Course",
      role: "Full-stack Web Development",
      body: "Completed a web-service development course built on React · JavaScript · Spring Boot · MySQL — front end to back end, database, and deployment.",
      focus: "Full-stack Understanding",
    },
    {
      period: "2023 — 2025",
      org: "Sejong University · Python Programming TA",
      role: "Teaching Assistant · 4 semesters",
      body: "TA for intro programming and basic coding courses — student support and Q&A, sharpening the skill of explaining technical things simply. Named Outstanding TA, Spring 2025.",
      focus: "Communication",
    },
    {
      period: "2025.03 — 2025.05",
      org: "Sejong University · Global Chin-Chin",
      role: "Mentor",
      body: "Exchanged with international students from a range of cultural backgrounds, communicating with attention to language and cultural differences.",
      focus: "Global Communication",
    },
    {
      period: "2022.04 — 2023.05",
      org: "Game Development Club",
      role: "Member",
      body: "Built team and solo game projects in Unity · C# — hands-on with game UI and interaction implementation.",
      focus: "Game Community",
    },
    {
      period: "2021.09 — 2024.02",
      org: "History Society, Sisa-eoreum",
      role: "Member",
      body: "Debated history and social issues, building the habit of analyzing a problem from several angles.",
      focus: "User Insight",
    },
  ],
};

export function getExperience(locale: Locale): ExperienceRow[] {
  return byLocale[locale];
}
