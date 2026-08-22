# Handoff: 서인하 게임 커뮤니티/라이브 운영 포트폴리오 사이트

## Overview
게임 업계(Community Manager · Live Ops · Service Planning · Korean Localization) 지원용 개인 포트폴리오 사이트.
핵심 메시지는 **"I turn player needs into community experiences."** — 개발자 포트폴리오가 아니라, 유저 관찰 → 서비스 기획 → 출시 → 운영 → 데이터/VOC 개선까지 해본 사람으로 읽혀야 한다.

구성: Home 1개 + Case Study 3개 (Sky Planner / Identity5 Pick / Heartopia Archive).

## About the Design Files
`design-files/` 안의 파일들은 **HTML로 만든 디자인 레퍼런스**다. 프로덕션 코드가 아니며 그대로 복사해 쓰라는 뜻이 아니다.
작업은 이 HTML 디자인을 **대상 코드베이스(Next.js App Router + TypeScript + Tailwind CSS + Framer Motion)의 관습에 맞게 다시 구현**하는 것이다.

각 파일은 `<x-dc>` 스트리밍 런타임(`support.js`)에 감싸여 있다. 런타임은 무시하고, **마크업 구조와 인라인 스타일 값만** 참고하면 된다. 인라인 스타일은 그대로 Tailwind 유틸리티나 CSS 모듈로 옮긴다.

- `Portfolio Home.dc.html` — 홈 전체
- `Case Sky Planner.dc.html` — /work/sky-planner
- `Case Identity5 Pick.dc.html` — /work/identity5-pick
- `Case Heartopia Archive.dc.html` — /work/heartopia-archive
- `Portfolio Wireframes.dc.html` — 초기 구조 탐색(4방향) + IA 메모. 참고용, 구현 대상 아님.

## Fidelity
**High-fidelity.** 색·타이포·간격·레이아웃은 최종안이다. 픽셀 그대로 재현할 것.
단 **모든 이미지 영역은 의도적으로 플레이스홀더**다 (회색 45° 사선 + monospace 라벨). 가짜 UI나 임의의 대시보드를 그리지 말 것 — 실제 스크린샷이 들어올 자리다.

## 라우팅 / IA

```
/[locale]              locale = 'ko' | 'en'  (현재 ko만 콘텐츠 존재, en 구조만 준비)
  /                    Home
  /work/sky-planner
  /work/identity5-pick
  /work/heartopia-archive
  /experience          (현재 Home 섹션으로만 존재 — 분리 시 그대로 이전)
  /about               (현재 Home 섹션으로만 존재)
Resume ↗               PDF 새 탭 (ko/en 2벌 대응)
```

Header nav: `WORK / EXPERIENCE / ABOUT / RESUME ↗` + 우측 `KR / EN`.

## Design Tokens

### Color
| 이름 | 값 | 용도 |
|---|---|---|
| bg | `#faf8f4` | 기본 배경 (warm off-white) |
| bg-alt | `#f4f1ea` | 교차 섹션 배경 (Capabilities, Case 01, O2O 등) |
| ink | `#17181a` | 본문/헤드라인, 다크 섹션 배경 |
| ink-70 | `#3d3f43` | 본문 단락 |
| ink-50 | `#55575b` | 태그 라벨 |
| muted | `#7c7a75` | 캡션 |
| muted-light | `#a5a29c` | 메타 라벨, TBD 수치 |
| accent | `#1f4fd8` | 포인트 컬러 (cobalt) — 유일한 컬러 |
| accent-on-dark | `#8fb0ff` | 다크 섹션 위 accent |
| paper | `#ffffff` | 다크가 아닌 배경 위 카드 |
| line | `rgba(23,24,26,.12)` / `.16` / `.1` | 보더 3단계 |
| line-dark | `rgba(244,241,234,.18~.2)` | 다크 섹션 보더 |
| ink-on-dark | `#f4f1ea`, 본문 `rgba(244,241,234,.78)`, 캡션 `.5` | |

플레이스홀더 배경(라이트): `repeating-linear-gradient(45deg,#f1eee8,#f1eee8 10px,#e8e4dc 10px,#e8e4dc 20px)`
bg-alt 위에서는 `#ece8e0 / #e3dfd6`, 다크 섹션에서는 `#26272a / #1f2023`.

### Typography
- 영문 디스플레이/라벨/숫자: **Archivo** (400·500·600·700·800), Google Fonts
- 한국어 본문: **Noto Sans KR** (400·500·700)
- 코드/메타: `ui-monospace, Menlo, monospace`
- body font-family: `'Noto Sans KR','Archivo',system-ui,sans-serif`

| 역할 | 값 |
|---|---|
| Hero H1 | Archivo 800 / `clamp(46px,8.4vw,116px)` / lh .98 / ls -.042em |
| Case H1 | Archivo 800 / `clamp(38px,7vw,100px)` / lh .99 / ls -.042em |
| Section H2 | Archivo 800 / `clamp(30px,4.2vw,58px)` / lh 1.03 / ls -.04em |
| Sub H2 | Archivo 800 / `clamp(26px,3.4vw,46px)` / lh 1.05 / ls -.038em |
| 프로젝트 타이틀 | Archivo 800 / `clamp(30px,3.6vw,50px)` / ls -.035em |
| 본문 | Noto Sans KR 400 / 17–19px / lh 1.72–1.8 / `text-wrap:pretty` |
| 캡션 | 14–15px / lh 1.6–1.7 / muted |
| Eyebrow / 라벨 | Archivo 600 / 10.5–12px / ls .13–.18em / uppercase |
| 큰 Metric | Archivo 800 / `clamp(40px,4.6vw,72px)` / lh 1 / ls -.05em |
| 중간 Metric | Archivo 800 / 30–32px / ls -.04em |

### Spacing
- 섹션 좌우 패딩: `clamp(20px,5vw,72px)`
- 섹션 상하 패딩: `clamp(56px,8vw,110px)` (큰 섹션 `clamp(64px,9vw,120px)`)
- 콘텐츠 최대 폭: `1440px` (본문 단락은 `max-width:520~640px`)
- 2단 split gap: `clamp(24px,5vw,72~80px)`
- 구분선 그리드: `gap:1px` + 부모 배경색으로 hairline 표현

### Border / Shadow
- radius **0** — 전 사이트에서 둥근 모서리 없음 (의도적)
- shadow 없음. 구분은 1px 보더와 배경 대비로만
- 버튼: 채움 `#17181a` / 텍스트 `#faf8f4`, hover `#1f4fd8`. 외곽선 버튼은 `1px solid rgba(23,24,26,.24)`, hover 시 보더 `#17181a`

## Screens

### 1. Home (`/[locale]`)
순서: Header(sticky) → Hero → Impact Strip → Selected Work(3) → Capabilities(6) + Technical Literacy → Experience(5행) → About(다크) + Career Interest → Footer.

- **Header** — sticky top, `rgba(250,248,244,.88)` + `backdrop-filter:blur(10px)`, 하단 1px 보더. 좌측 이름 → 부제(작은 화면 숨김) → nav → KR/EN.
- **Hero** — eyebrow(accent, ls .18em) → H1 3줄 → 본문 + CTA 2개(가로 배치, 모바일에서 세로).
- **Impact Strip** — 4개 지표, 좌측 1px 보더로 구분. 숫자 `clamp(44px,5.2vw,76px)`, `+`만 accent.
- **Selected Work** — 프로젝트 3개가 **서로 다른 레이아웃**이어야 한다 (같은 카드 템플릿 금지):
  1. Sky Planner — full-bleed 대형 이미지, 아래 2단(설명 / 지표 4개 그리드)
  2. Identity5 Pick — 좌측 이미지(대형 1 + 소형 3), 우측 텍스트+지표
  3. Heartopia Archive — 좌측 텍스트+인용구, 우측 이미지(대형 1 + 소형 2)
  각 항목 상단에 `01 / LIVE SERVICE` eyebrow + 우측 `VIEW CASE STUDY →` (accent).
- **Capabilities** — bg-alt, 3×2 그리드(`repeat(3,1fr)`, 1100px↓ 2열, 760px↓ 1열), 셀마다 번호·영문 타이틀·영문 한 줄·한국어 설명.
- **Technical Literacy** — Capabilities 하단 작게. 스택은 monospace 칩. **Hero에 절대 넣지 않는다.**
- **Experience** — 5행 테이블형: 좌측 기간(monospace) / 가운데 직함+소속 / 우측 설명. HDIL 행에는 인용구 블록, 세종대 행에는 "From History to Software".
- **About(다크)** — `#17181a` 배경, H2 좌 / 본문 우, 하단에 Currently interested in 6개 + 어학 한 줄.
- **Footer** — 대형 문장 `Let's build experiences players want to stay for.` + Email/GitHub/LinkedIn/Live Projects + RESUME 버튼.

### 2. Sky Planner (`/work/sky-planner`) — 데이터 서사
13블록, 시간순 케이스 연쇄:
Context(메타 + 큰 `MAU 1.7K`) → 대표 스크린샷 → 02 The Starting Point → 03 질문→제품 매핑 3행 → 04 Case 01 Height Tool(bg-alt, Problem/Insight/Solution/Result 4열 + Before/After) → 05 Case 02 데이터 피봇(좌 GA 이미지 / 우 Signal→First reading→Cross-check→Real problem→Action) → 06 Case 03 바이럴(**다크**, 지표 4개) → 07 커뮤니티 이벤트 2종 → 08 O2O(bg-alt, QR→Web Test→Flight Test→Certificate 플로우 + 현장 사진 대형) → 09 Distribution / 10 Failure(2단 병렬) → 11 IP & External Communication → 12 Result(**다크**, 지표 6개) → 13 Learning.

### 3. Identity5 Pick (`/work/identity5-pick`) — 매핑 서사
시간순이 아니라 대응 구조:
질문형 H1 `What are players already doing without a product?` → 대표 스크린샷 → 01 팬덤 행동 → 도구 매핑 5행(행동 / → / 도구명 / 설명) + 썸네일 4개 → 02 Player Feedback(**다크**, VOC 4건 2×2, 각 셀 `발화 → 관찰 → 조치`) → 03 Content/Localization QA(대형 `800+` + 5단계 Publishing workflow 세로 플로우) → 04 Internal Tool(bg-alt, 검수 플로우 칩) → 05 Data Exception(PLAYABLE / LOBBY_ONLY) → 06 Learning.

### 4. Heartopia Archive (`/work/heartopia-archive`) — 사람·신뢰 서사
질문형 H1 `How do you build an archive around content you don't own?` → 대표 스크린샷 → 01 Problem / 02 Product(2단 병렬) → 03 Creator-first Policy(**다크**, `Permission before publication.` + 8단계 워크플로우 4×2 그리드) → 04 Global Creator Outreach(Problem/Action/Result 3행 + DM 플레이스홀더) → 05 Transparent Proxy Upload(Creator/Original Link/Platform/Permission 4칩) → 06 Content Architecture(bg-alt, 26 Templates / 54 Parts + Clothing 파츠 4종) → 07 QA & Iteration(3열, 각 Problem/Diagnosis/Fix) → 08 Growth(**다크**, Low traction → Outreach → Content supply → 50–60 DAU) → 09 Learning.

## Interactions & Behavior
Framer Motion. 목표는 "우와"가 아니라 "세련됐다".

허용:
- 섹션/이미지 reveal — `opacity 0→1`, `y 16→0`, duration 0.5–0.6s, ease `[0.22,1,0.36,1]`, `viewport={{ once: true, amount: 0.25 }}`
- 헤드라인 staggered text — 줄 단위 stagger 0.06s
- 프로젝트 이미지 hover — `scale 1.01`, 보더/라벨 색이 accent로, 0.3s
- nav underline smooth
- Impact / Result 숫자 count-up (1회, viewport 진입 시)

금지: bounce, 과한 parallax, 3D tilt, cursor particle, autoplay carousel, 스크롤 연동 대형 애니메이션.
`prefers-reduced-motion` 존중 — 모두 즉시 최종 상태로.

## Responsive
- `.split` (2단 flex)은 **860px 이하에서 세로 스택**
- Capabilities 그리드 3열 → 1100px 2열 → 760px 1열
- Heartopia 8단계 그리드 4열 → 1100px 2열 → 560px 1열
- Sky Case 01 4열 → 1000px 2열 → 560px 1열
- Identity5 VOC 2열 → 760px 1열
- ⚠️ 구분선을 `gap:1px + 부모 배경`으로 만들 때 `auto-fit`을 쓰면 빈 트랙이 회색 사각형으로 보인다. **고정 컬럼 수 + 미디어 쿼리**로 갈 것 (이미 이렇게 수정됨).
- Hero H1은 860px 이하 `clamp(38px,11vw,64px)`
- 모바일에서 지표 숫자를 과하게 줄이지 말 것. 본문 최소 16px.
- Case Study 블록 **순서는 어떤 폭에서도 바뀌지 않는다.**

## Content System
콘텐츠는 컴포넌트에 하드코딩하지 말고 `data/`로 분리:

```
data/
  profile.ts     이름, 타이틀, 연락처, 어학, career interest
  metrics.ts     홈 impact 4개 + 프로젝트별 metrics
  projects.ts    title, subtitle, descriptionKo, role, period, tags[],
                 metrics[], screenshots[], sections[], liveUrl, githubUrl
  experience.ts  기간, 직함, 소속, 설명, 인용구
```
locale별 문자열은 `ko` / `en` 키로 분리 가능한 구조로.

## Data Integrity — 중요
아래는 **아직 검증되지 않았다. 임의로 채우거나 반올림하지 말 것.** 현재 디자인에는 `TBD`(muted-light 색)로 표시돼 있다.
- Identity5 Pick 실제 GA 사용자 수치
- Heartopia 최근 30일 평균 DAU/MAU (현재 "50–60, 업로드 활발기 기준" 주석 처리)
- Heartopia 실제 허가 작가 수
- Identity5 스킨 DB 최종 건수 (현재 800+)
- Python TA 정확한 시작 시점 (자료마다 2023.03 / 2024.03 상이)
- 각 서비스 정확한 출시일, 현재 회사 입사일·정식 직무명
- Email / GitHub / LinkedIn / Resume PDF 링크 (현재 전부 placeholder)

검증된 수치: MAU 1,700+ · 누적 10K+ · 220K+ PV · 만족도 4.84/5.0(n=32) · DAU 393 · 바이럴 10x · 런칭주 927명 · 이벤트 댓글 143/조회 656 · O2O 170명/동시 30명 · 챗봇 전후 DAU 30–40 → 50–60 · 26 Templates / 54 Parts.

## Assets
현재 실제 이미지 **없음**. 모든 이미지 자리는 라벨이 붙은 플레이스홀더이며, 라벨이 곧 들어갈 자료의 명세다:
서비스 스크린샷, 커뮤니티 게시글, GA Analytics, Before/After, 이벤트 포스터, 오프라인 행사 사진, 성향 테스트 결과 카드, SNS 공유 캡처, VOC 캡처, 관리자 검수 화면, 크리에이터 허가 DM(개인정보 제거), 크리에이터 페이지.
폰트는 Google Fonts(Archivo, Noto Sans KR) — `next/font/google`로 로드 권장.

## Files
```
design-files/Portfolio Home.dc.html
design-files/Case Sky Planner.dc.html
design-files/Case Identity5 Pick.dc.html
design-files/Case Heartopia Archive.dc.html
design-files/Portfolio Wireframes.dc.html   (참고용)
```
