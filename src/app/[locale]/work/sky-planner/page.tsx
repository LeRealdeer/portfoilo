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
    "Sky 유저의 반복 질문을 실제 기능과 이벤트로 해결한 1인 라이브 서비스 케이스 스터디.",
};

const questionMap = [
  {
    q: "“캐릭터 키 어떻게 재나요?”",
    tool: "1-click Height Tool",
    note: "6단계 수작업 → 웹에서 한 번에",
  },
  {
    q: "“지금 시즌패스 사도 되나요?”",
    tool: "Candle Calculator",
    note: "입력 최소화 · 한국어 · 구매 판단 파트너",
  },
  {
    q: "“유랑 정보를 어떻게 빠르게 찾나요?”",
    tool: "Traveling Spirit Encyclopedia",
    note: "시즌 필터 · 키워드 검색 · 유저 참여 편집",
  },
];

const resultMetrics = [
  { value: 1700, accentSuffix: "+", label: "PEAK MAU" },
  { value: 10, suffix: "K", accentSuffix: "+", label: "CUMULATIVE USERS" },
  { value: 220, suffix: "K", accentSuffix: "+", label: "PAGEVIEWS" },
  { value: 4.84, decimals: 2, label: "SATISFACTION / 5.0 (n=32)" },
  { value: 393, label: "PEAK DAU" },
  { value: 10, suffix: "x", label: "VIRAL TRAFFIC" },
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
      <Header locale={locale} variant="case" breadcrumb="/ work / sky-planner" resumeHref="#result" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-14 pb-10 sm:px-9 sm:pt-24 sm:pb-16">
        <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent">
          {project.eyebrow}
        </div>
        <h1 className="mt-5 font-archivo text-[clamp(46px,8vw,112px)] leading-[.98] font-extrabold tracking-[-.042em]">
          {project.title}
        </h1>
        <p className="mt-5 max-w-[620px] text-[19px] leading-[1.75] text-ink-70 text-pretty">
          {project.heroBodyKo}
        </p>

        <div className="mt-10 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start border-t border-line-2 pt-6 sm:mt-16">
          <div className="grid flex-[2] grid-cols-2 gap-x-7 gap-y-5 sm:grid-cols-3">
            {project.meta.map((m) => (
              <div key={m.label}>
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                  {m.label}
                </div>
                <div
                  className={`mt-1.5 whitespace-pre-line text-[15px] leading-[1.55] ${
                    m.accent ? "font-bold text-accent" : "text-ink-70"
                  }`}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>
          {project.heroStat && (
            <div className="flex-1 text-right">
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                {project.heroStat.label}
              </div>
              <div className="font-archivo text-[clamp(56px,7vw,104px)] leading-[1] font-extrabold tracking-[-.05em]">
                <Stat
                  metric={project.heroStat}
                  numberClassName=""
                  labelClassName="hidden"
                />
              </div>
            </div>
          )}
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

      {/* 02 — Starting Point */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          02 / THE STARTING POINT
        </div>
        <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-20 items-start">
          <Reveal className="flex-[1.2]">
            <h2 className="font-archivo text-[clamp(30px,4.2vw,60px)] leading-[1.03] font-extrabold tracking-[-.04em]">
              Repeated questions
              <br />
              are unresolved
              <br />
              problems.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[520px] flex-1">
            <p className="text-[18px] leading-[1.8] text-ink-70 text-pretty">
              서비스는 만들고 싶은 기능에서 출발하지 않았습니다. 커뮤니티에 매번 똑같이 올라오는 질문들을 모으는
              것에서 시작했습니다. 같은 질문이 반복된다는 건 정보가 없다는 뜻이 아니라, 기존 해결 방식의
              진입장벽이 너무 높다는 신호였습니다.
            </p>
            <Placeholder
              label={"COMMUNITY POST SCREENSHOT\n(반복 질문 게시글)"}
              className="mt-6 h-[clamp(160px,20vw,240px)]"
            />
          </Reveal>
        </div>

        {/* 03 — Question -> Product */}
        <div className="mt-12 border-t border-line-2 sm:mt-20">
          <div className="py-3.5 font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
            03 / COMMUNITY QUESTION → PRODUCT
          </div>
          {questionMap.map((row, i) => (
            <Reveal
              key={row.tool}
              delay={i * 0.05}
              className={`flex max-[760px]:flex-col gap-4 border-t border-line-3 py-6 sm:gap-10 items-center max-[760px]:items-start ${
                i === questionMap.length - 1 ? "border-b border-line-2" : ""
              }`}
            >
              <div className="flex-[1.2] text-[19px] leading-[1.5] text-ink-70">{row.q}</div>
              <div className="flex-none font-archivo text-[20px] text-accent">→</div>
              <div className="flex-[1.2] font-archivo text-[22px] font-bold tracking-[-.025em]">{row.tool}</div>
              <div className="flex-1 text-[14px] leading-[1.6] text-muted">{row.note}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 — Case 01 Height Tool */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
            04 / CASE 01 — HEIGHT TOOL
          </div>
          <Reveal>
            <h2 className="mt-5 font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.05] font-extrabold tracking-[-.038em]">
              The problem was not lack of information,
              <br />
              but high friction.
            </h2>
          </Reveal>

          <div className="mt-9 grid grid-cols-1 gap-px border-t border-b border-line-4 bg-line-4 max-[1000px]:grid-cols-2 sm:mt-14 grid-cols-4 max-[560px]:grid-cols-1">
            {[
              {
                label: "PROBLEM",
                body: "스크린샷 촬영 → 이미지 편집 프로그램 실행 → 합성 → 기준 이미지 조절. 키 한 번 재는 데 약 6단계 수작업.",
              },
              {
                label: "INSIGHT",
                body: "질문이 반복된다는 건 방법을 모르는 게 아니라, 아는 방법이 너무 번거롭다는 뜻.",
              },
              { label: "SOLUTION", body: "앱 설치 없이 웹에서 바로 쓰는 1-click 키 측정 도구." },
              {
                label: "RESULT",
                body: (
                  <>
                    질문하는 문화가 <b>결과를 공유하는 인증 문화</b>로 바뀜.
                  </>
                ),
              },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.05} className="bg-bg-alt px-6 pt-6 pb-7">
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.16em] text-muted-light">
                  {c.label}
                </div>
                <p className="mt-3 text-[16px] leading-[1.7] text-ink-70">{c.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-7 flex gap-5">
            <div className="flex-1">
              <div className="mb-2 font-archivo text-[10.5px] font-semibold tracking-[.16em] text-muted-light">
                BEFORE
              </div>
              <Placeholder
                variant="alt"
                label={"기존 6단계 수작업 과정"}
                className="h-[clamp(160px,20vw,260px)]"
              />
            </div>
            <div className="flex-1">
              <div className="mb-2 font-archivo text-[10.5px] font-semibold tracking-[.16em] text-accent">
                AFTER
              </div>
              <Placeholder
                variant="alt"
                label={"키재기 도구 실사용 화면"}
                className="h-[clamp(160px,20vw,260px)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Case 02 Data-driven UX pivot */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          05 / CASE 02 — DATA-DRIVEN UX PIVOT
        </div>
        <Reveal>
          <h2 className="mt-5 font-archivo text-[clamp(32px,4.6vw,66px)] leading-[1.02] font-extrabold tracking-[-.04em]">
            High engagement doesn&apos;t
            <br />
            always mean good UX.
          </h2>
        </Reveal>

        <div className="mt-10 flex max-[860px]:flex-col gap-6 sm:gap-14 items-start sm:mt-16">
          <Reveal className="flex-[1.2]">
            <Placeholder
              label={"GA4 ANALYTICS — 체류시간 / 페이지뷰 그래프"}
              className="h-[clamp(200px,26vw,340px)]"
            />
            <div className="mt-4 flex gap-4">
              <Placeholder
                label="BEFORE — PAGINATION"
                className="h-[clamp(110px,13vw,170px)] flex-1 text-[11px]"
              />
              <Placeholder
                label="AFTER — INFINITE SCROLL"
                className="h-[clamp(110px,13vw,170px)] flex-1 text-[11px]"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[480px] flex-1">
            <div className="flex flex-col gap-5 border-l-2 border-line-4 pl-5">
              {[
                { label: "SIGNAL", body: "유랑 대백과 페이지의 체류시간이 매우 높게 측정됨.", accent: false },
                { label: "FIRST READING", body: "“콘텐츠가 인기 있다.” — 좋은 지표처럼 보였습니다.", accent: false },
                { label: "CROSS-CHECK", body: "페이지뷰 패턴을 함께 보고 실제 유저를 인터뷰했습니다.", accent: false },
                {
                  label: "REAL PROBLEM",
                  body: (
                    <>
                      체류가 아니라 <b>길 잃음</b>이었습니다. 페이지네이션 때문에 원하는 정보를 찾으려 페이지를
                      계속 오가고 있었습니다.
                    </>
                  ),
                  accent: true,
                },
                { label: "ACTION", body: "Pagination → Infinite Scroll 로 탐색 구조 피봇.", accent: true },
              ].map((row) => (
                <div key={row.label}>
                  <div
                    className={`font-archivo text-[10.5px] font-semibold tracking-[.16em] ${
                      row.accent ? "text-accent" : "text-muted-light"
                    }`}
                  >
                    {row.label}
                  </div>
                  <p className="mt-1.5 text-[17px] leading-[1.7] text-ink-70">{row.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-7 border-l-2 border-accent pl-5 font-archivo text-[20px] font-bold leading-[1.4] tracking-[-.02em]">
              좋아 보이는 숫자도 실제 사용자 행동과 함께 읽어야 한다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 06 — Case 03 Viral growth (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
            06 / CASE 03 — VIRAL GROWTH
          </div>
          <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
            <Reveal className="flex-[1.2]">
              <h2 className="font-archivo text-[clamp(30px,4.2vw,58px)] leading-[1.03] font-extrabold tracking-[-.04em]">
                Self-expression
                <br />
                drives sharing.
              </h2>
              <p className="mt-5 max-w-[500px] text-[18px] leading-[1.8] text-[rgba(244,241,234,.78)] text-pretty">
                런칭 이후 신규 유입이 정체됐고 광고비는 쓸 수 없었습니다. “나는 OO형이다”라고 스스로를
                규정할 수 있는 콘텐츠는 자연히 공유된다는 가설을 세우고, Sky 세계관 기반 성향 테스트를 약 1주일
                만에 만들었습니다. 결과 카드는 외부 일러스트레이터와 협업했습니다.
              </p>
              <div className="mt-8 flex flex-wrap gap-9 border-t border-line-dark-2 pt-6">
                {[
                  { value: 393, label: "PEAK DAU" },
                  { value: 10, suffix: "x", label: "VIRAL TRAFFIC" },
                  { value: 927, label: "LAUNCH-WEEK USERS" },
                  { value: 1, suffix: "w", label: "BUILD TIME" },
                ].map((m) => (
                  <Stat
                    key={m.label}
                    metric={m}
                    numberClassName="font-archivo text-[clamp(36px,4vw,58px)] leading-[1] font-extrabold tracking-[-.045em]"
                    labelClassName="mt-2 font-archivo text-[10.5px] font-semibold tracking-[.14em] text-[rgba(244,241,234,.5)]"
                  />
                ))}
              </div>
              <p className="mt-6 text-[16px] leading-[1.75] text-[rgba(244,241,234,.6)]">
                공식 SNS에 자발적으로 소개되며 확산됐습니다.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-1 flex-col gap-4">
              <Placeholder
                variant="dark"
                label={"성향 테스트 결과 카드"}
                className="h-[clamp(180px,22vw,300px)]"
              />
              <Placeholder variant="dark" label={"SNS 공유 SCREENSHOT"} className="h-[clamp(120px,15vw,190px)]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 — Community events */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          07 / COMMUNITY EVENTS
        </div>
        <Reveal>
          <h2 className="mt-5 font-archivo text-[clamp(30px,4.2vw,58px)] leading-[1.03] font-extrabold tracking-[-.04em]">
            이벤트는 콘텐츠가 아니라
            <br />
            참여 구조를 설계하는 일.
          </h2>
        </Reveal>

        <div className="mt-10 flex max-[860px]:flex-col gap-6 sm:gap-10 sm:mt-14">
          <Reveal className="flex-1">
            <Placeholder
              label={"EVENT POSTER — 사진 속 장소를 찾아라"}
              className="h-[clamp(200px,24vw,320px)]"
            />
            <h3 className="mt-4.5 font-archivo text-[24px] font-bold tracking-[-.025em]">Find the Place</h3>
            <p className="mt-2.5 text-[16px] leading-[1.72] text-ink-70">
              게임 속 장소 스크린샷을 제시하고 직접 찾아가 인증샷을 올리는 탐색형 이벤트. 1인당 최대 5개 정답
              인정 등 참여 규칙을 설계했습니다.
            </p>
            <div className="mt-4.5 flex gap-7 border-t border-line-4 pt-4">
              <Stat
                metric={{ value: 143, label: "COMMENTS" }}
                numberClassName="font-archivo text-[30px] leading-[1] font-extrabold tracking-[-.04em]"
                labelClassName="mt-1.5 font-archivo text-[10.5px] font-semibold tracking-[.12em] text-muted"
              />
              <Stat
                metric={{ value: 656, label: "VIEWS" }}
                numberClassName="font-archivo text-[30px] leading-[1] font-extrabold tracking-[-.04em]"
                labelClassName="mt-1.5 font-archivo text-[10.5px] font-semibold tracking-[.12em] text-muted"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex-1">
            <Placeholder
              label={"EVENT POSTER — 킹받는 플러팅 대회"}
              className="h-[clamp(200px,24vw,320px)]"
            />
            <h3 className="mt-4.5 font-archivo text-[24px] font-bold tracking-[-.025em]">Flirting Contest</h3>
            <p className="mt-2.5 text-[16px] leading-[1.72] text-ink-70">
              팬덤 유머 코드에 맞춘 참가형 콘텐츠. 참가자만이 아니라 <b>투표로 관람자도 참여</b>하게 설계해 참여
              인원을 넓혔습니다.
            </p>
            <div className="mt-4.5 flex gap-7 border-t border-line-4 pt-4">
              <div>
                <div className="font-archivo text-[30px] leading-[1] font-extrabold tracking-[-.04em]">S4</div>
                <div className="mt-1.5 font-archivo text-[10.5px] font-semibold tracking-[.12em] text-muted">
                  시즌 4까지 반복
                </div>
              </div>
              <div>
                <div className="font-archivo text-[30px] leading-[1] font-extrabold tracking-[-.04em]">인기글</div>
                <div className="mt-1.5 font-archivo text-[10.5px] font-semibold tracking-[.12em] text-muted">
                  커뮤니티 반응
                </div>
              </div>
            </div>
            <p className="mt-4 text-[15px] leading-[1.7] text-muted">
              단발성 이벤트로 끝내지 않고 반응을 보고 정기 콘텐츠로 전환.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 08 — O2O */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
            08 / O2O EVENT
          </div>
          <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
            <Reveal className="max-w-[460px] flex-1">
              <h2 className="font-archivo text-[clamp(28px,3.6vw,50px)] leading-[1.04] font-extrabold tracking-[-.038em]">
                온라인 서비스를
                <br />
                오프라인 경험으로.
              </h2>
              <p className="mt-4.5 text-[17px] leading-[1.78] text-ink-70">
                Sky 공식 오프라인 행사에서 진행한 참여 플로우를 직접 기획하고, 웹 기능 제작부터 QR 배치, 현장
                유저 대응까지 맡았습니다.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 font-archivo text-[13px] font-semibold">
                <span className="bg-paper border border-line-2 px-3.5 py-2">QR</span>
                <span className="text-accent">→</span>
                <span className="bg-paper border border-line-2 px-3.5 py-2">Web Test</span>
                <span className="text-accent">→</span>
                <span className="bg-paper border border-line-2 px-3.5 py-2">Flight Test</span>
                <span className="text-accent">→</span>
                <span className="bg-ink px-3.5 py-2 text-ink-on-dark">Physical Certificate</span>
              </div>
              <div className="mt-7 flex gap-9 border-t border-line-4 pt-5">
                <Stat
                  metric={{ value: 170, label: "DAY USERS" }}
                  numberClassName="font-archivo text-[clamp(34px,3.6vw,48px)] leading-[1] font-extrabold tracking-[-.045em]"
                  labelClassName="mt-1.5 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted"
                />
                <Stat
                  metric={{ value: 30, label: "CONCURRENT USERS" }}
                  numberClassName="font-archivo text-[clamp(34px,3.6vw,48px)] leading-[1] font-extrabold tracking-[-.045em]"
                  labelClassName="mt-1.5 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted"
                />
              </div>
              <p className="mt-5 text-[15px] leading-[1.72] text-muted">
                반응이 좋아 이후 &lsquo;이달의 모의고사&rsquo; 형태의 정기 콘텐츠로 발전했습니다.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex-[1.3]">
              <Placeholder
                variant="alt"
                label={"EVENT PHOTO — 오프라인 행사 현장 (크게)"}
                className="h-[clamp(240px,30vw,420px)]"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 09/10 — Distribution / Failure */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="flex max-[860px]:flex-col gap-6 sm:gap-20 items-start">
          <Reveal className="flex-1">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
              09 / DISTRIBUTION
            </div>
            <h2 className="mt-5 font-archivo text-[clamp(28px,3.6vw,50px)] leading-[1.04] font-extrabold tracking-[-.038em]">
              Go where the players
              <br />
              already are.
            </h2>
            <p className="mt-4.5 max-w-[460px] text-[17px] leading-[1.78] text-ink-70">
              광고만이 성장 방법은 아니었습니다. 유저가 매일 머무는 오픈채팅방에 챗봇으로 서비스를 연결했습니다.
            </p>
            <div className="mt-7 flex items-end gap-9 border-t border-line-4 pt-5">
              <div>
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted-light">
                  BEFORE
                </div>
                <div className="font-archivo text-[clamp(30px,3.2vw,44px)] leading-[1] font-extrabold tracking-[-.045em] text-muted-light">
                  30–40
                </div>
              </div>
              <div className="pb-1.5 font-archivo text-[22px] text-accent">→</div>
              <div>
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.13em] text-accent">AFTER</div>
                <div className="font-archivo text-[clamp(30px,3.2vw,44px)] leading-[1] font-extrabold tracking-[-.045em]">
                  50–60
                </div>
              </div>
              <div className="pb-1.5 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted">DAU</div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex-1">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">10 / FAILURE</div>
            <h2 className="mt-5 font-archivo text-[clamp(28px,3.6vw,50px)] leading-[1.04] font-extrabold tracking-[-.038em]">
              Not every feature
              <br />
              deserves iteration.
            </h2>
            <div className="mt-5 border-t border-line-4">
              {[
                { label: "BUILT", body: "웹 기반 악보 제작 기능", accent: false },
                { label: "RESULT", body: "사용량 매우 저조", accent: false },
                {
                  label: "ANALYSIS",
                  body: "수요 자체가 니치했고, 이미 전문 앱이 존재했으며, 웹이 그보다 나은 점을 주지 못했습니다.",
                  accent: false,
                },
                {
                  label: "LEARNING",
                  body: (
                    <>
                      <b>개발 전에 경쟁 서비스와 대체재부터 조사한다</b>는 기획 원칙을 세웠습니다.
                    </>
                  ),
                  accent: true,
                },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex gap-5 py-3.5 ${
                    i === arr.length - 1 ? "border-b border-line-4" : "border-b border-line-3"
                  }`}
                >
                  <div
                    className={`w-[90px] flex-none font-archivo text-[10.5px] font-semibold tracking-[.13em] ${
                      row.accent ? "text-accent" : "text-muted-light"
                    }`}
                  >
                    {row.label}
                  </div>
                  <div className="flex-1 text-[16px] leading-[1.7] text-ink-70">{row.body}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 11 — IP & External Communication */}
        <div className="mt-14 border-t border-line-2 pt-7 sm:mt-24">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
            11 / IP &amp; EXTERNAL COMMUNICATION
          </div>
          <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
            <Reveal className="flex-1">
              <h2 className="font-archivo text-[clamp(26px,3.2vw,44px)] leading-[1.06] font-extrabold tracking-[-.035em]">
                팬 서비스일수록
                <br />
                먼저 물어봅니다.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="grid flex-[1.4] grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                  THATGAMECOMPANY
                </div>
                <p className="mt-2 text-[16px] leading-[1.7] text-ink-70">
                  공식 커뮤니티를 통해 직접 문의하고 팬 서비스 운영 가이드라인을 확인·승인받았습니다.
                </p>
              </div>
              <div>
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                  해외 운영자 컨택
                </div>
                <p className="mt-2 text-[16px] leading-[1.7] text-ink-70">
                  해외 Sky Planner 운영자에게 GitHub Issue로 직접 연락해 상호 레퍼런스 구조를 만들고 해외 유입을
                  늘렸습니다.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 12 — Result (dark) */}
      <section id="result" className="border-t border-line bg-ink px-5 py-16 text-ink-on-dark sm:px-9 sm:py-24">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
            12 / RESULT
          </div>
          <div className="mt-9 grid grid-cols-2 gap-x-7 gap-y-9 sm:grid-cols-3 lg:grid-cols-6">
            {resultMetrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.04}>
                <Stat
                  metric={m}
                  numberClassName="font-archivo text-[clamp(40px,4.6vw,72px)] leading-[1] font-extrabold tracking-[-.05em]"
                  labelClassName="mt-2.5 font-archivo text-[10.5px] font-semibold tracking-[.14em] text-[rgba(244,241,234,.5)]"
                />
              </Reveal>
            ))}
          </div>

          {/* 13 — Learning */}
          <div className="mt-14 flex max-[860px]:flex-col gap-6 sm:gap-20 items-start border-t border-line-dark-2 pt-9 sm:mt-24">
            <Reveal className="flex-[1.2]">
              <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
                13 / LEARNING
              </div>
              <h2 className="mt-5 font-archivo text-[clamp(30px,4vw,56px)] leading-[1.03] font-extrabold tracking-[-.04em]">
                Building the feature
                <br />
                was only the beginning.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-[520px] flex-1 text-[18px] leading-[1.8] text-[rgba(244,241,234,.78)] text-pretty">
              1년 넘게 실제 유저가 있는 서비스를 운영하며, 서비스의 성패는 출시 시점이 아니라 그 이후의
              관찰·데이터·피드백·반복 개선에서 갈린다는 것을 배웠습니다. 기능을 만드는 일은 시작일 뿐이고,
              유저가 그 기능을 어떻게 쓰는지 계속 보는 일이 본론이었습니다.
            </Reveal>
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
