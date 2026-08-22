export type ExperienceRow = {
  period: string;
  title: string;
  org: string;
  body: string;
  quote?: string;
  highlight?: { label: string; body: string };
};

export const experience: ExperienceRow[] = [
  {
    period: "2026 — PRESENT",
    title: "Service Planner",
    org: "AI 서비스 스타트업",
    body: "제품·운영 매뉴얼 관리, 문서 빌드 프로세스 협업, QA, Notion·GitHub 기반 협업 구조 운영. 개발자와 기술적 커뮤니케이션을 하며 AI 제품의 기획 흐름을 경험하고 있습니다.",
  },
  {
    period: "2025.05 — 2025.12",
    title: "Research Intern",
    org: "연세대학교 HDIL (Human-Data Interaction Lab)",
    body: "이미지 차트에서 수치를 복원하는 비정형 데이터 파이프라인 구축, D3·Vega-Lite 시각화 프로토타입, 사용자 파일럿 테스트 설계.",
    quote: "The maker's view and the user's view are different.",
  },
  {
    period: "4 SEMESTERS",
    title: "Python TA",
    org: "세종대학교 · 우수조교 선정",
    body: "학기당 최대 7개 분반, 누적 500명+ 수강생, 75분 단독 강의와 1:1 디버깅. 질문을 어려워하는 학생을 위해 주석 신호 시스템을 고안해 도움 요청의 심리적 장벽을 낮췄습니다.",
  },
  {
    period: "2025.03 — 2025.05",
    title: "Global Chin-Chin Mentor",
    org: "세종대학교 어학당",
    body: "외국인 유학생 대상 한국어 학습 지원과 문화 적응 멘토링. Cross-cultural Communication.",
  },
  {
    period: "2021.03 — 2026.02",
    title: "세종대학교",
    org: "역사학과 · 소프트웨어학과 복수전공 · GPA 3.81 / 4.5",
    body: "사람과 맥락을 읽는 역사학적 관점과, 직접 서비스를 구현할 수 있는 소프트웨어 역량을 함께 씁니다.",
    highlight: {
      label: "From History to Software",
      body: "사람과 맥락을 읽는 역사학적 관점과, 직접 서비스를 구현할 수 있는 소프트웨어 역량을 함께 씁니다.",
    },
  },
];
