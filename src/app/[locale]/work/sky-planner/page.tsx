import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder } from "@/components/Placeholder";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Sky Planner — 서인하",
  description:
    "게임 플레이 과정에서 발생하는 반복적인 불편을 해결한 데이터 기반 게임 유틸리티 서비스 케이스 스터디.",
};

const heroMetrics = [
  { value: 335, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
  { value: 393, label: "PEAK DAU" },
  { value: 1.7, decimals: 1, suffix: "K", accentSuffix: "+", label: "PEAK MAU" },
];

const problemFlow = ["캐릭터 스크린샷 촬영", "외부 이미지 편집 앱 실행", "가이드라인 PNG 합성", "직접 비교"];

const featureList = [
  "키재기",
  "양초 계산기",
  "유랑대백과",
  "시즌대백과",
  "오래된 유랑",
  "성향 테스트",
  "버스 노선표",
  "악보 만들기",
];

const performanceMetrics = [
  { value: 335, suffix: "K", accentSuffix: "+", label: "PAGE VIEWS" },
  { value: 14.6, decimals: 1, suffix: "K", accentSuffix: "+", label: "ACTIVE USERS" },
  { value: 393, label: "PEAK DAU" },
  { value: 1.7, decimals: 1, suffix: "K", accentSuffix: "+", label: "PEAK MAU" },
  { value: 33, suffix: "%", label: "RETURNING USERS" },
];

const insights = [
  {
    n: "INSIGHT 1",
    title: "유저는 단순 정보보다 플레이 보조 도구를 반복 사용한다",
    feature: "양초 계산기",
    stats: "Active Users 1,977 · Views 9,904",
  },
  {
    n: "INSIGHT 2",
    title: "정보 콘텐츠는 높은 체류 시간을 만든다",
    feature: "시즌 대백과",
    stats: "평균 참여 시간 4분 39초",
  },
  {
    n: "INSIGHT 3",
    title: "공유 가능한 콘텐츠는 신규 유입을 만든다",
    feature: "성향 테스트",
    stats: "Views 15,624 · Users 822 · SNS 공유 기반 성장",
  },
];

const vocList = [
  { feature: "키재기", feedback: "사진 위치 조절이 어렵다", improvement: "스케일 조정 UX 개선" },
  { feature: "오래된 유랑", feedback: "현재 총 몇 명인지 알고 싶다", improvement: "유랑 개수 표시 추가" },
  { feature: "시즌 대백과", feedback: "미복각 영혼 정보 필요", improvement: "미복각 영혼 탭 추가" },
];

const growthChannels = [
  {
    title: "네이버 카페",
    points: ["최초 홍보", "베스트 팁 게시판 등록", "이후 자연 공유 발생"],
  },
  {
    title: "오픈채팅",
    points: ["게임 커뮤니티 봇 등록", "유저 접근성 확대"],
  },
  {
    title: "Global Expansion",
    points: ["외국 팬사이트와 협업", "영문 양초 계산기 링크 등록"],
  },
];

const demonstratedSkills = [
  "User Problem Discovery",
  "Service Planning",
  "UX Improvement",
  "GA4 Data Analysis",
  "Community Operation",
  "VOC Management",
  "Live Service Thinking",
];

export default async function SkyPlannerPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const project = getProject("sky-planner");

  return (
    <div className="min-h-screen">
      <Header locale={locale} variant="case" breadcrumb="/ work / sky-planner" resumeHref="#final" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-14 pb-10 sm:px-9 sm:pt-24 sm:pb-16">
        <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent">
          {project.eyebrow}
        </div>
        <h1 className="mt-5 font-archivo text-[clamp(46px,8vw,112px)] leading-[.98] font-extrabold tracking-[-.042em]">
          {project.title}
        </h1>
        <p className="mt-6 max-w-[720px] font-archivo text-[clamp(20px,2.4vw,30px)] font-bold leading-[1.35] tracking-[-.02em] text-ink-70">
          게임 플레이 과정에서 발생하는 반복적인 불편을 해결한 데이터 기반 게임 유틸리티 서비스
        </p>
        <p className="mt-5 max-w-[620px] text-[18px] leading-[1.78] text-ink-70 text-pretty">
          {project.heroBodyKo}
        </p>

        <div className="mt-10 flex max-[860px]:flex-col gap-8 sm:gap-16 items-start border-t border-line-2 pt-7 sm:mt-16">
          <div className="grid flex-[1.6] grid-cols-2 gap-x-7 gap-y-6">
            {project.meta.map((m) => (
              <div key={m.label}>
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                  {m.label}
                </div>
                <div
                  className={`mt-1.5 whitespace-pre-line text-[15px] leading-[1.6] ${
                    m.accent ? "font-bold text-accent" : "text-ink-70"
                  }`}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-1 gap-8 sm:gap-10">
            {heroMetrics.map((m) => (
              <Stat
                key={m.label}
                metric={m}
                numberClassName="font-archivo text-[clamp(28px,3vw,40px)] leading-[1] font-extrabold tracking-[-.04em]"
                labelClassName="mt-2 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted"
              />
            ))}
          </div>
        </div>
      </section>

      <div className="px-5 sm:px-9">
        <Reveal>
          <Placeholder
            label={project.screenshotLabel}
            className="mx-auto h-[clamp(240px,44vw,600px)] max-w-[1440px]"
          />
        </Reveal>
      </div>

      {/* 01 — Context */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">01 / CONTEXT</div>
        <Reveal>
          <h2 className="mt-5 max-w-[760px] font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.1] font-extrabold tracking-[-.038em] text-pretty">
            &ldquo;유저들이 계속 묻는 질문에는 반복되는 문제가 있다.&rdquo;
          </h2>
        </Reveal>
        <p className="mt-6 max-w-[620px] text-[17px] leading-[1.78] text-ink-70">
          부트캠프 이후 직접 서비스를 만들 수 있는 역량을 갖추게 되었고, 실제 사용자에게 도움이 되는 서비스를
          만들어보고자 시작했습니다. 처음 발견한 문제는 커뮤니티에서 반복적으로 등장하던 하나의 질문이었습니다.
        </p>
        <p className="mt-6 max-w-[620px] border-l-2 border-accent pl-5 font-archivo text-[22px] font-bold leading-[1.4] tracking-[-.02em]">
          &ldquo;제 캐릭터 키가 몇 단인가요?&rdquo;
        </p>

        <div className="mt-14 border-t border-line-2 pt-8 sm:mt-20">
          <div className="flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
            <Reveal className="flex-1">
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.16em] text-muted-light">
                PROBLEM DISCOVERY
              </div>
              <p className="mt-3 max-w-[440px] text-[17px] leading-[1.78] text-ink-70">
                Sky에는 캐릭터 키를 조정하는 키 물약 시스템이 존재하지만, 사용자가 자신의 키를 확인하려면
                과정이 복잡하고 접근성이 낮았습니다.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 font-archivo text-[12.5px] font-semibold">
                {problemFlow.map((step, i, arr) => (
                  <span key={step} className="contents">
                    <span
                      className={
                        i === arr.length - 1
                          ? "bg-ink px-3.5 py-2 text-ink-on-dark"
                          : "bg-paper border border-line-2 px-3.5 py-2"
                      }
                    >
                      {step}
                    </span>
                    {i < arr.length - 1 && <span className="text-accent">→</span>}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="flex-1">
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.16em] text-muted-light">
                SOLUTION
              </div>
              <p className="mt-3 max-w-[440px] text-[17px] leading-[1.78] text-ink-70">
                사용자가 이미지를 업로드하면, 웹에서 바로 캐릭터 키를 확인할 수 있는 <b>키재기 도구</b>를
                제작했습니다. 이동 · 확대/축소 · 가이드라인 비교만으로 키를 확인할 수 있도록 설계했습니다.
                초기에는 기존 커뮤니티 자료를 활용했지만, 이후 직접 키 가이드라인 제작 · 설명 문서 제작 · UX
                개선을 진행했습니다.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 flex gap-5">
            <div className="flex-1">
              <div className="mb-2 font-archivo text-[10.5px] font-semibold tracking-[.16em] text-muted-light">
                BEFORE
              </div>
              <Placeholder variant="alt" label={"기존 이비스 등 외부 앱 활용 방식"} className="h-[clamp(160px,20vw,260px)]" />
            </div>
            <div className="flex-1">
              <div className="mb-2 font-archivo text-[10.5px] font-semibold tracking-[.16em] text-accent">AFTER</div>
              <Placeholder variant="alt" label={"Sky Planner 키재기 UI"} className="h-[clamp(160px,20vw,260px)]" />
            </div>
          </div>
        </div>
      </section>

      {/* 02 — Service Evolution */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
            02 / SERVICE EVOLUTION
          </div>
          <Reveal>
            <h2 className="mt-5 font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.05] font-extrabold tracking-[-.038em]">
              하나의 기능에서
              <br />
              플레이 플랫폼으로 확장
            </h2>
          </Reveal>
          <p className="mt-5 max-w-[560px] text-[17px] leading-[1.78] text-ink-70">
            처음에는 키재기 기능 하나로 시작했지만, 사용자 피드백과 커뮤니티 관찰을 기반으로 필요한 기능을
            확장했습니다.
          </p>

          <div className="mt-7 flex items-end gap-4">
            <div className="font-archivo text-[clamp(48px,5.2vw,72px)] leading-[1] font-extrabold tracking-[-.045em]">
              8
            </div>
            <div className="pb-2 font-archivo text-[11.5px] font-semibold tracking-[.13em] text-muted">
              게임 플레이 보조 기능 운영 중
            </div>
          </div>

          <Reveal delay={0.1}>
            <Placeholder
              variant="alt"
              label={"기능 전체 구조 이미지"}
              className="mt-8 h-[clamp(180px,22vw,280px)]"
            />
          </Reveal>

          <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {featureList.map((f) => (
              <div key={f} className="border border-line-2 bg-paper px-4 py-3.5 text-center text-[15px] text-ink-70">
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — Key Features */}
      <section className="mx-auto max-w-[1440px] px-5 pt-16 sm:px-9 sm:pt-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          03 / KEY FEATURES
        </div>
        <Reveal>
          <h2 className="mt-5 font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.05] font-extrabold tracking-[-.038em]">
            반복 질문을 기능으로, 기능을 데이터로 검증
          </h2>
        </Reveal>
      </section>

      {/* Feature 01 — 키재기 */}
      <section className="mx-auto max-w-[1440px] px-5 py-12 sm:px-9 sm:py-16">
        <div className="border-t border-line-2 pt-9">
          <div className="font-archivo text-[10.5px] font-semibold tracking-[.16em] text-accent">FEATURE 01</div>
          <h3 className="mt-3 font-archivo text-[clamp(26px,3vw,38px)] font-extrabold tracking-[-.03em]">
            키재기
          </h3>
          <p className="mt-2 text-[15px] text-muted">커뮤니티 반복 질문을 해결한 첫 번째 기능</p>

          <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-3">
            <div>
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                USER PROBLEM
              </div>
              <p className="mt-2.5 text-[15.5px] leading-[1.7] text-ink-70">
                유저들은 내 캐릭터 키가 몇인지, 키가 제대로 측정된 건지 확인하기 위해 외부 앱으로 직접
                합성해야 했습니다.
              </p>
            </div>
            <div>
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                SOLUTION
              </div>
              <p className="mt-2.5 text-[15.5px] leading-[1.7] text-ink-70">
                이미지 업로드 후 이동 · 확대/축소 · 가이드라인 비교만으로 키를 확인할 수 있도록 설계했습니다.
              </p>
            </div>
            <div>
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                IMPROVEMENT
              </div>
              <p className="mt-2.5 text-[15.5px] leading-[1.7] text-ink-70">
                직접 키 가이드라인을 제작하고 설명 문서를 만들며 UX를 지속적으로 개선했습니다.
              </p>
            </div>
          </div>

          <div className="mt-7 flex max-[560px]:flex-col gap-4">
            <Placeholder label={"키재기 Before / After"} className="h-[clamp(160px,20vw,240px)] flex-1" />
            <Placeholder label={"실제 결과물 공유 사례"} className="h-[clamp(160px,20vw,240px)] flex-1" />
          </div>
        </div>
      </section>

      {/* Feature 02 — 양초 계산기 */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[10.5px] font-semibold tracking-[.16em] text-accent">FEATURE 02</div>
          <h3 className="mt-3 font-archivo text-[clamp(26px,3vw,38px)] font-extrabold tracking-[-.03em]">
            양초 계산기
          </h3>
          <p className="mt-2 text-[15px] text-muted">복잡한 재화 계획 문제 해결</p>

          <div className="mt-8 flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
            <div className="flex-1">
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                USER PROBLEM
              </div>
              <p className="mt-2.5 max-w-[440px] text-[15.5px] leading-[1.7] text-ink-70">
                Sky 시즌 시스템에서는 시즌 기간 · 아이템 가격 · 시즌 패스 여부 · 하루 획득량 등 다양한 요소를
                고려해야 했습니다. 유저들은 &ldquo;내가 원하는 아이템을 얻을 수 있을까?&rdquo;를 계속
                질문했습니다.
              </p>
              <div className="mt-3.5 font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                SOLUTION
              </div>
              <p className="mt-2.5 max-w-[440px] text-[15.5px] leading-[1.7] text-ink-70">
                보유 재화와 목표 아이템을 입력하면 필요한 양초 · 예상 획득량 · 소요 기간을 계산하는 기능을
                제작했습니다.
              </p>
            </div>
            <div className="flex-1">
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                DATA DRIVEN IMPROVEMENT
              </div>
              <div className="mt-3 flex flex-col gap-2.5 text-[15px]">
                <div className="border border-line-2 bg-paper px-4 py-3">단순 결과 제공</div>
                <div className="text-accent">↓</div>
                <div className="border border-ink bg-ink px-4 py-3 text-ink-on-dark">
                  계산 과정 시각화 — 앞으로 얻을 재화 · 총 필요 재화 · 예상 날짜
                </div>
              </div>
              <p className="mt-4 text-[14px] leading-[1.7] text-muted">
                시즌 시스템 변경으로 기존 계산기의 필요성이 감소했지만, 사용자 사용 데이터를 기반으로 새로운
                UX와 디자인으로 리뉴얼을 진행했습니다.
              </p>
            </div>
          </div>

          <div className="mt-7 flex max-[560px]:flex-col gap-4">
            <Placeholder variant="alt" label={"계산기 UI"} className="h-[clamp(160px,20vw,240px)] flex-1" />
            <Placeholder variant="alt" label={"개선 전/후 비교"} className="h-[clamp(160px,20vw,240px)] flex-1" />
          </div>
        </div>
      </section>

      {/* Feature 03 — 유랑대백과 */}
      <section className="mx-auto max-w-[1440px] px-5 py-14 sm:px-9 sm:py-20">
        <div className="font-archivo text-[10.5px] font-semibold tracking-[.16em] text-accent">FEATURE 03</div>
        <h3 className="mt-3 font-archivo text-[clamp(26px,3vw,38px)] font-extrabold tracking-[-.03em]">
          유랑대백과
        </h3>
        <p className="mt-2 text-[15px] text-muted">흩어진 정보를 탐색 가능한 아카이브로 개선</p>

        <div className="mt-8 flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
          <div className="flex-1">
            <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
              USER PROBLEM
            </div>
            <p className="mt-2.5 max-w-[440px] text-[15.5px] leading-[1.7] text-ink-70">
              Sky의 유랑 시스템은 2주마다 과거 시즌 아이템이 등장해 원하는 아이템이 언제 돌아올지 궁금하지만,
              기존 정보는 오래된 게시글 · 업데이트 중단 · 잘못된 정보 문제가 있었습니다.
            </p>
            <div className="mt-3.5 font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
              SOLUTION
            </div>
            <p className="mt-2.5 max-w-[440px] text-[15.5px] leading-[1.7] text-ink-70">
              유랑 정보를 데이터베이스화해 유랑 기록 · 아이템 정보 · 시즌 분류 · 검색 기능을 제공했습니다.
            </p>
          </div>
          <div className="flex-1">
            <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
              UX IMPROVEMENT
            </div>
            <div className="mt-3 flex flex-col gap-4 border-l-2 border-line-4 pl-5">
              <p className="text-[15.5px] leading-[1.7] text-ink-70">
                <b>초기</b> — 카드 + 페이지 이동 방식
              </p>
              <p className="text-[15.5px] leading-[1.7] text-ink-70">
                <b>문제</b> — 100개 이상의 데이터를 탐색하기 어려움
              </p>
              <p className="text-[15.5px] leading-[1.7] text-accent font-bold">
                개선 — 스크롤 기반 리스트 구조로 변경
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 flex max-[560px]:flex-col gap-4">
          <Placeholder label={"유랑대백과 화면"} className="h-[clamp(160px,20vw,240px)] flex-1" />
          <Placeholder label={"Before / After"} className="h-[clamp(160px,20vw,240px)] flex-1" />
        </div>
      </section>

      {/* Feature 04 — 시즌 대백과 */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[10.5px] font-semibold tracking-[.16em] text-accent">FEATURE 04</div>
          <h3 className="mt-3 font-archivo text-[clamp(26px,3vw,38px)] font-extrabold tracking-[-.03em]">
            시즌 대백과
          </h3>
          <p className="mt-2 text-[15px] text-muted">데이터 구조 재설계를 통한 확장</p>
          <p className="mt-4 max-w-[560px] text-[15.5px] leading-[1.7] text-ink-70">
            서버 이전 과정에서 기존 구조를 개선하며 제작한 신규 기능입니다.
          </p>

          <div className="mt-7 flex gap-5">
            <div className="flex-1">
              <div className="mb-2 font-archivo text-[10.5px] font-semibold tracking-[.16em] text-muted-light">
                BEFORE
              </div>
              <p className="text-[15px] leading-[1.7] text-ink-70">시즌 정보 분산 · 특정 영혼 검색 어려움</p>
            </div>
            <div className="flex-1">
              <div className="mb-2 font-archivo text-[10.5px] font-semibold tracking-[.16em] text-accent">AFTER</div>
              <p className="text-[15px] leading-[1.7] text-ink-70">시즌별 데이터 구조화 · 검색 기능 · 영혼 데이터 통합</p>
            </div>
          </div>

          <div className="mt-8 border-t border-line-4 pt-6">
            <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
              COMMUNITY COLLABORATION
            </div>
            <p className="mt-2.5 max-w-[560px] text-[15.5px] leading-[1.7] text-ink-70">
              100개 이상의 영혼 데이터를 구축하기 위해 게임 친구들과 역할을 분담하고, Google Sheet 기반으로
              작업을 관리했으며, 인게임 촬영 가이드를 직접 제작했습니다.
            </p>
          </div>

          <div className="mt-7 flex max-[560px]:flex-col gap-4">
            <Placeholder variant="alt" label={"시즌 대백과 화면"} className="h-[clamp(160px,20vw,240px)] flex-1" />
            <Placeholder variant="alt" label={"데이터 작업 프로세스"} className="h-[clamp(160px,20vw,240px)] flex-1" />
          </div>
        </div>
      </section>

      {/* 04 — Data Analysis (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
            04 / DATA ANALYSIS
          </div>
          <Reveal>
            <h2 className="mt-5 font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.05] font-extrabold tracking-[-.038em]">
              실제 사용 데이터를 기반으로 개선
            </h2>
          </Reveal>
          <div className="mt-4 flex flex-wrap items-baseline gap-3">
            <span className="font-archivo text-[13px] font-semibold tracking-[.06em]">
              Google Analytics 4 분석
            </span>
            <span className="font-mono text-[12px] text-[rgba(244,241,234,.5)]">2025.02 ~ 2026.08</span>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-x-7 gap-y-8 sm:grid-cols-5 sm:mt-14">
            {performanceMetrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.04}>
                <Stat
                  metric={m}
                  numberClassName="font-archivo text-[clamp(32px,3.4vw,52px)] leading-[1] font-extrabold tracking-[-.045em]"
                  labelClassName="mt-2 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-[rgba(244,241,234,.5)]"
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <Placeholder variant="dark" label={"GA4 캡처"} className="mt-10 h-[clamp(200px,26vw,340px)]" />
          </Reveal>

          <div className="mt-14 border-t border-line-dark-2 pt-8 sm:mt-20">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
              USER BEHAVIOR INSIGHT
            </div>
            <div className="mt-7 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:grid-cols-3">
              {insights.map((ins, i) => (
                <Reveal key={ins.n} delay={i * 0.06} className="bg-ink px-6 pt-6 pb-7">
                  <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent-on-dark">
                    {ins.n}
                  </div>
                  <p className="mt-3.5 font-archivo text-[18px] font-bold leading-[1.35] tracking-[-.015em]">
                    {ins.title}
                  </p>
                  <div className="mt-4 border-t border-line-dark pt-3.5 text-[14.5px] leading-[1.6] text-[rgba(244,241,234,.7)]">
                    <div className="font-semibold text-[rgba(244,241,234,.9)]">{ins.feature}</div>
                    <div className="mt-1">{ins.stats}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 05 — User Feedback & Operation */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          05 / USER FEEDBACK &amp; OPERATION
        </div>
        <Reveal>
          <h2 className="mt-5 font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.05] font-extrabold tracking-[-.038em]">
            사용자 의견을 서비스 개선으로 연결
          </h2>
        </Reveal>
        <p className="mt-5 max-w-[560px] text-[17px] leading-[1.78] text-ink-70">
          Google 만족도 조사를 진행하고, 네이버 카페와 사이트 내 링크를 통해 사용자 의견을 수집했습니다.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-px border-t border-b border-line-4 bg-line-4 sm:mt-14 sm:grid-cols-3">
          {vocList.map((v, i) => (
            <Reveal key={v.feature} delay={i * 0.05} className="bg-bg px-6 pt-6 pb-7">
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent">
                {v.feature}
              </div>
              <p className="mt-3.5 text-[16px] leading-[1.6] text-ink-70">&ldquo;{v.feedback}&rdquo;</p>
              <div className="mt-4 border-t border-line-3 pt-3.5 text-[14.5px] leading-[1.6] text-muted">
                ↓ {v.improvement}
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-7 flex max-[560px]:flex-col gap-4">
          <Placeholder label={"VOC 설문 결과"} className="h-[clamp(160px,20vw,240px)] flex-1" />
          <Placeholder label={"개선 전후 이미지"} className="h-[clamp(160px,20vw,240px)] flex-1" />
        </div>
      </section>

      {/* 06 — Growth & Community */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
            06 / GROWTH &amp; COMMUNITY
          </div>
          <Reveal>
            <h2 className="mt-5 font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.05] font-extrabold tracking-[-.038em]">
              유저가 자연스럽게 확산하는 서비스 만들기
            </h2>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-px border-t border-b border-line-4 bg-line-4 sm:mt-14 sm:grid-cols-3">
            {growthChannels.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06} className="bg-bg-alt px-6 pt-6 pb-7">
                <h3 className="font-archivo text-[19px] font-bold tracking-[-.02em]">{c.title}</h3>
                <ul className="mt-3.5 flex flex-col gap-2 text-[15px] leading-[1.6] text-ink-70">
                  {c.points.map((p) => (
                    <li key={p}>· {p}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <div className="mt-7 flex max-[560px]:flex-col gap-4">
            <Placeholder variant="alt" label={"홍보 게시글"} className="h-[clamp(160px,20vw,240px)] flex-1" />
            <Placeholder variant="alt" label={"커뮤니티 공유 사례"} className="h-[clamp(160px,20vw,240px)] flex-1" />
          </div>
        </div>
      </section>

      {/* 07 — O2O Event */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          07 / O2O EVENT
        </div>
        <Reveal>
          <h2 className="mt-5 font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.05] font-extrabold tracking-[-.038em]">
            게임 경험을 오프라인으로 확장하다
          </h2>
        </Reveal>
        <p className="mt-4 text-[15px] font-semibold text-muted">Sky 공식 오프라인 행사 이벤트 기획</p>

        <div className="mt-9 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start sm:mt-14">
          <Reveal className="flex-1">
            <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
              EVENT FLOW
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 font-archivo text-[13px] font-semibold">
              <span className="bg-paper border border-line-2 px-3.5 py-2">QR</span>
              <span className="text-accent">→</span>
              <span className="bg-paper border border-line-2 px-3.5 py-2">웹 테스트</span>
              <span className="text-accent">→</span>
              <span className="bg-paper border border-line-2 px-3.5 py-2">비행 자격증 발급</span>
              <span className="text-accent">→</span>
              <span className="bg-ink px-3.5 py-2 text-ink-on-dark">오프라인 기념품 제공</span>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex-1">
            <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">RESULT</div>
            <div className="mt-2 font-archivo text-[clamp(40px,4.4vw,60px)] leading-[1] font-extrabold tracking-[-.045em]">
              <Stat
                metric={{ value: 117, label: "" }}
                numberClassName=""
                labelClassName="hidden"
              />
            </div>
            <div className="mt-1.5 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted">
              일 접속자 (DAY USERS)
            </div>
            <ul className="mt-4 flex flex-col gap-1.5 text-[15px] leading-[1.65] text-ink-70">
              <li>· 사이트 홍보 효과</li>
              <li>· 온라인 서비스 → 오프라인 경험 연결</li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Placeholder label={"행사 사진"} className="h-[clamp(160px,20vw,240px)]" />
          <Placeholder label={"QR 이미지"} className="h-[clamp(160px,20vw,240px)]" />
          <Placeholder label={"비행 자격증"} className="h-[clamp(160px,20vw,240px)]" />
        </div>
      </section>

      {/* 08 — Learning */}
      <section className="border-t border-line bg-bg-alt px-5 py-16 sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
            08 / LEARNING
          </div>
          <Reveal>
            <h2 className="mt-5 font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.05] font-extrabold tracking-[-.038em]">
              실패와 개선
            </h2>
          </Reveal>

          <div className="mt-8 border-t border-line-2">
            <div className="flex gap-6 py-4 border-b border-line-3">
              <div className="w-[110px] flex-none font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted-light">
                FEATURE
              </div>
              <div className="flex-1 text-[16px] leading-[1.7] text-ink-70">악보 만들기 기능</div>
            </div>
            <div className="flex gap-6 py-4 border-b border-line-3">
              <div className="w-[110px] flex-none font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted-light">
                PROBLEM
              </div>
              <div className="flex-1 text-[16px] leading-[1.7] text-ink-70">이미 기존 강력한 앱이 존재</div>
            </div>
            <div className="flex gap-6 py-4 border-b border-line-2">
              <div className="w-[110px] flex-none font-archivo text-[10.5px] font-semibold tracking-[.13em] text-accent">
                RESULT
              </div>
              <div className="flex-1 text-[16px] leading-[1.7] text-ink-70">사용자 확보 실패</div>
            </div>
          </div>

          <p className="mt-8 max-w-[640px] border-l-2 border-accent pl-5 font-archivo text-[20px] font-bold leading-[1.5] tracking-[-.02em]">
            좋은 기능을 만드는 것보다, 사용자가 실제로 해결하기 어려워하는 문제를 찾는 것이 중요하다는 것을
            배웠습니다.
          </p>
        </div>
      </section>

      {/* Final Message */}
      <section id="final" className="border-t border-line bg-ink px-5 py-16 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
            SKY PLANNER
          </div>
          <Reveal>
            <h2 className="mt-5 font-archivo text-[clamp(30px,4.4vw,60px)] leading-[1.06] font-extrabold tracking-[-.04em]">
              게임 유저의 행동을 관찰하고,
              <br />
              반복되는 불편을 서비스로 해결한
              <br />
              데이터 기반 게임 커뮤니티 플랫폼
            </h2>
          </Reveal>

          <div className="mt-10 border-t border-line-dark-2 pt-8 sm:mt-16">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.16em] text-[rgba(244,241,234,.45)]">
              DEMONSTRATED SKILLS
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {demonstratedSkills.map((s) => (
                <span
                  key={s}
                  className="border border-line-dark px-3.5 py-2 font-archivo text-[12.5px] font-semibold tracking-[.05em] text-[rgba(244,241,234,.85)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-4 border-t border-line-dark-2 pt-6 sm:mt-16">
            <Link
              href={`/${locale}`}
              className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              ← BACK TO WORK
            </Link>
            <span className="flex-1" />
            <Link
              href={`/${locale}/work/identity5-pick`}
              className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              NEXT — IDENTITY5 PICK →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
