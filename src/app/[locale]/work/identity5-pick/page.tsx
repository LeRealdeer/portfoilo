import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder } from "@/components/Placeholder";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Identity5 Pick — 서인하",
  description: "제5인격 팬덤 행동을 인터랙티브 도구로 옮긴 커뮤니티 프로덕트 케이스 스터디.",
};

const behaviorMap = [
  {
    behavior: "최애 순위 매기기",
    tool: "Character Sort",
    note: "월드컵 방식 비교 · 생존자/감시자·성별 조합 필터 · 무승부 · 결과 PNG 저장",
  },
  {
    behavior: "캐릭터 평가·강약 토론",
    tool: "Tier List",
    note: "등급 이름 수정·추가 · 직접 배치 — 유저가 자기 평가 콘텐츠를 만드는 UGC 도구",
  },
  {
    behavior: "CP·관계 이야기",
    tool: "CP Map",
    note: "82명 대상 관계도 · 진영/성별 토글 · 자유·고정 배치 · 곡선 관계선",
  },
  {
    behavior: "보유 스킨 자랑·취향 공유",
    tool: "Skin Archive",
    note: "캐릭터별 탐색 · 등급 필터 · 체크리스트 · 공유",
  },
  {
    behavior: "듀오 모집 게시글",
    tool: "Duo Card",
    note: "티어·승률·주캐·접속 시간·희망 조건을 구조화한 공유 카드",
  },
];

const vocList = [
  {
    tag: "VOC 01 — UX",
    quote: "“가로로 넘기려는데 스킨이 눌려요.”",
    obs: "스와이프가 클릭으로 인식됨",
    action: "touch / click 인터랙션 분리",
  },
  {
    tag: "VOC 02 — BUG",
    quote: "“드래그하면 엉뚱한 줄로 들어가요.”",
    obs: "drop 위치 판정 오류",
    action: "드래그 위치 계산 수정",
  },
  {
    tag: "VOC 03 — UX",
    quote: "“드래그 잡는 영역이 너무 작아요.”",
    obs: "모바일 터치 타깃 부족",
    action: "드래그 바 두께 확대",
  },
  {
    tag: "VOC 04 — FEATURE",
    quote: "“시리즈별로 스킨 보고 싶어요.”",
    obs: "탐색 축이 캐릭터 하나뿐",
    action: "시리즈 필터 검토·반영",
  },
];

const workflowSteps = ["External Data", "Character Matching", "Korean Name Candidate", "Manual Review", "Publish"];

const internalToolSteps = ["미검수 필터", "이미지 · 영문명 확인", "한국어명 입력", "저장", "다음 데이터"];

const learningMetrics = [
  { value: 80, accentSuffix: "+", label: "CHARACTERS" },
  { value: 800, accentSuffix: "+", label: "SKIN RECORDS" },
  { value: 5, label: "COMMUNITY TOOLS" },
  { value: 0, label: "MONTHLY USERS (GA 확인 후 교체)", tbd: true },
];

export default async function Identity5PickPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const project = getProject("identity5-pick");

  return (
    <div className="min-h-screen">
      <Header locale={locale} variant="case" breadcrumb="/ work / identity5-pick" resumeHref="#learning" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-14 pb-9 sm:px-9 sm:pt-24 sm:pb-14">
        <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent">{project.eyebrow}</div>
        <h1 className="mt-5 font-archivo text-[clamp(40px,7vw,100px)] leading-[.99] font-extrabold tracking-[-.042em]">
          {project.h1Lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < project.h1Lines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <div className="mt-8 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start sm:mt-13">
          <p className="max-w-[560px] flex-[1.2] text-[19px] leading-[1.78] text-ink-70 text-pretty">
            제5인격 팬덤에는 이미 최애 순위를 매기고, 캐릭터를 평가하고, CP를 이야기하고, 보유 스킨을 공유하고,
            듀오를 구하는 문화가 있었습니다. <b>Identity5 Pick</b>은 없던 행동을 만든 게 아니라, 이미 일어나던
            행동에 도구를 붙인 서비스입니다.
          </p>
          <div className="grid flex-1 grid-cols-2 gap-x-6 gap-y-5">
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
        </div>
      </section>

      <div className="px-5 sm:px-9">
        <Reveal>
          <Placeholder
            label={project.screenshotLabel}
            className="mx-auto h-[clamp(240px,42vw,560px)] max-w-[1440px]"
          />
        </Reveal>
      </div>

      {/* 01 — From Fandom to Product */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          01 / FROM FANDOM TO PRODUCT
        </div>
        <Reveal>
          <h2 className="mt-5 font-archivo text-[clamp(30px,4.2vw,58px)] leading-[1.03] font-extrabold tracking-[-.04em]">
            팬덤 행동 하나에
            <br />
            도구 하나.
          </h2>
        </Reveal>
        <p className="mt-4 max-w-[520px] text-[17px] leading-[1.75] text-muted">
          기능 목록을 먼저 정하지 않고, 커뮤니티에서 이미 반복되던 행동을 먼저 적은 뒤 각각에 대응하는 도구를
          붙였습니다.
        </p>

        <div className="mt-10 border-t border-line-2 sm:mt-14">
          {behaviorMap.map((row, i) => (
            <Reveal
              key={row.tool}
              delay={i * 0.04}
              className={`flex max-[760px]:flex-col gap-4 border-b py-6 sm:gap-10 items-center max-[760px]:items-start ${
                i === behaviorMap.length - 1 ? "border-line-2" : "border-line-3"
              }`}
            >
              <div className="flex-[1.1] text-[18px] leading-[1.5] text-ink-70">{row.behavior}</div>
              <div className="flex-none font-archivo text-[20px] text-accent">→</div>
              <div className="flex-[1.1] font-archivo text-[23px] font-bold tracking-[-.025em]">{row.tool}</div>
              <div className="flex-[1.4] text-[15px] leading-[1.65] text-muted">{row.note}</div>
            </Reveal>
          ))}
        </div>

        <div className="mt-7 flex max-[760px]:flex-col gap-4">
          <Placeholder label="CHARACTER SORT" className="h-[clamp(130px,15vw,200px)] flex-1 text-[11px]" />
          <Placeholder label="TIER LIST" className="h-[clamp(130px,15vw,200px)] flex-1 text-[11px]" />
          <Placeholder label="CP MAP" className="h-[clamp(130px,15vw,200px)] flex-1 text-[11px]" />
          <Placeholder label="DUO CARD" className="h-[clamp(130px,15vw,200px)] flex-1 text-[11px]" />
        </div>
        <p className="mt-3.5 max-w-[620px] text-[15px] leading-[1.7] text-muted">
          CP Map에서는 관계 단계 문구가 지나치게 공격적으로 읽히지 않도록 톤을 조정했습니다 — 커뮤니티 감수성을
          고려한 UX writing.
        </p>
      </section>

      {/* 02 — Player Feedback (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
            02 / PLAYER FEEDBACK
          </div>
          <Reveal>
            <h2 className="mt-5 font-archivo text-[clamp(30px,4.2vw,58px)] leading-[1.03] font-extrabold tracking-[-.04em]">
              Built with players,
              <br />
              not just for players.
            </h2>
          </Reveal>
          <p className="mt-4.5 max-w-[520px] text-[17px] leading-[1.78] text-[rgba(244,241,234,.7)]">
            받은 피드백을 버그 · UX · 신규 기능 요청으로 나누고, 관찰 → 원인 → 조치 순으로 처리했습니다.
          </p>

          <div className="mt-9 grid grid-cols-1 gap-px border-t border-b border-line-dark bg-line-dark sm:mt-14 sm:grid-cols-2">
            {vocList.map((v, i) => (
              <Reveal key={v.tag} delay={i * 0.05} className="bg-ink px-6 pt-6 pb-7">
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent-on-dark">
                  {v.tag}
                </div>
                <p className="mt-3.5 text-[17px] leading-[1.6]">{v.quote}</p>
                <div className="mt-4 flex flex-col gap-2 text-[15px] leading-[1.6] text-[rgba(244,241,234,.7)]">
                  <span>↓ {v.obs}</span>
                  <span>↓ {v.action}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <Placeholder
              variant="dark"
              label={"COMMUNITY VOC SCREENSHOT (개인정보 제거)"}
              className="mt-7 h-[clamp(150px,18vw,240px)]"
            />
          </Reveal>
        </div>
      </section>

      {/* 03 — Content & Localization QA */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          03 / CONTENT &amp; LOCALIZATION QA
        </div>
        <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
          <Reveal className="flex-1">
            <div className="font-archivo text-[clamp(56px,8vw,120px)] leading-[.95] font-extrabold tracking-[-.05em]">
              800+
            </div>
            <div className="mt-3 font-archivo text-[11.5px] font-semibold tracking-[.14em] text-muted">
              SKIN RECORDS REVIEWED
            </div>
            <p className="mt-5.5 max-w-[440px] text-[17px] leading-[1.78] text-ink-70">
              외부 데이터를 그대로 노출하지 않았습니다. 캐릭터를 매칭하고 한국어명 후보를 만든 뒤, 공식
              한국어명이 확인된 것만 공개했습니다. 확신할 수 없는 이름은 추측하지 않고 미검수 상태로 남겼습니다.
            </p>
            <p className="mt-6 border-l-2 border-accent pl-5 font-archivo text-[20px] font-bold leading-[1.4] tracking-[-.02em]">
              Unverified content was never published automatically.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[520px] flex-1">
            <div className="mb-4 font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
              PUBLISHING WORKFLOW
            </div>
            <div className="flex flex-col">
              {workflowSteps.map((step, i) => (
                <div key={step}>
                  <div
                    className={
                      i === workflowSteps.length - 1
                        ? "border border-ink bg-ink px-4.5 py-4 text-[16px] font-bold text-ink-on-dark"
                        : "border border-line-2 bg-paper px-4.5 py-4 text-[16px]"
                    }
                  >
                    {step}
                  </div>
                  {i < workflowSteps.length - 1 && <div className="px-4.5 py-1.5 text-accent">↓</div>}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 04 — Internal Tool / 05 — Data Exception */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
            <Reveal className="flex-1">
              <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
                04 / INTERNAL TOOL
              </div>
              <h2 className="mt-5 font-archivo text-[clamp(26px,3.4vw,46px)] leading-[1.05] font-extrabold tracking-[-.038em]">
                검수 자체를
                <br />
                제품으로 만들었습니다.
              </h2>
              <p className="mt-4.5 max-w-[440px] text-[17px] leading-[1.78] text-ink-70">
                800건이 넘는 데이터를 손으로 확인하려면 검수 과정도 설계가 필요했습니다. 관리자 검수 페이지를
                따로 만들어 반복 작업을 한 줄로 줄였습니다.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 font-archivo text-[12.5px] font-semibold">
                {internalToolSteps.map((step, i) => (
                  <span key={step} className="contents">
                    <span
                      className={
                        i === internalToolSteps.length - 1
                          ? "bg-ink px-3.5 py-2 text-ink-on-dark"
                          : "bg-paper border border-line-2 px-3.5 py-2"
                      }
                    >
                      {step}
                    </span>
                    {i < internalToolSteps.length - 1 && <span className="text-accent">→</span>}
                  </span>
                ))}
              </div>
              <p className="mt-4.5 text-[15px] leading-[1.7] text-muted">
                Internal Operations Tool Planning — 운영자가 쓰는 화면도 유저 화면만큼 설계 대상입니다.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex-1">
              <Placeholder
                variant="alt"
                label={"ADMIN REVIEW TOOL SCREENSHOT"}
                className="h-[clamp(220px,26vw,360px)]"
              />
            </Reveal>
          </div>

          <div className="mt-12 border-t border-line-2 pt-7 sm:mt-20">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
              05 / DATA EXCEPTION
            </div>
            <div className="mt-5 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
              <Reveal className="flex-[1.1]">
                <h2 className="font-archivo text-[clamp(24px,3vw,40px)] leading-[1.08] font-extrabold tracking-[-.035em]">
                  User-facing data and operational data
                  <br />
                  often need different rules.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="max-w-[560px] flex-[1.2]">
                <p className="text-[17px] leading-[1.78] text-ink-70">
                  플레이할 수는 없지만 스킨 소유 데이터에는 존재해야 하는 캐릭터가 있었습니다. 캐릭터 타입을{" "}
                  <b>PLAYABLE</b> / <b>LOBBY_ONLY</b>로 나눠, 유저 화면에는 PLAYABLE만 노출하고 운영 데이터에서는
                  둘 다 쓰도록 정책을 분리했습니다.
                </p>
                <div className="mt-5 flex gap-2.5">
                  <div className="flex-1 border border-line-2 bg-paper px-4.5 py-4">
                    <div className="font-mono text-[12px] font-semibold">PLAYABLE</div>
                    <div className="mt-1.5 text-[14px] text-muted">유저 화면 노출</div>
                  </div>
                  <div className="flex-1 border border-dashed border-[rgba(23,24,26,.3)] px-4.5 py-4">
                    <div className="font-mono text-[12px] font-semibold text-muted">LOBBY_ONLY</div>
                    <div className="mt-1.5 text-[14px] text-muted">운영 데이터에서만 사용</div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 06 — Learning */}
      <section id="learning" className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="flex max-[860px]:flex-col gap-6 sm:gap-14 items-start">
          <Reveal className="flex-[1.2]">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
              06 / LEARNING
            </div>
            <h2 className="mt-5 font-archivo text-[clamp(30px,4.2vw,58px)] leading-[1.03] font-extrabold tracking-[-.04em]">
              유저는 이미
              <br />
              답을 하고 있었습니다.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-[520px] flex-1 text-[18px] leading-[1.8] text-ink-70 text-pretty">
            새 기능을 상상하는 것보다, 커뮤니티가 이미 반복하는 행동을 정확히 옮기는 편이 훨씬 잘 쓰였습니다.
            동시에 콘텐츠 서비스에서는 “무엇을 공개하지 않을지”를 정하는 일이 공개하는 일만큼 중요하다는 것도
            배웠습니다.
          </Reveal>
        </div>

        <div className="mt-11 flex flex-wrap gap-9 border-t border-line-2 pt-6 sm:mt-16">
          {learningMetrics.map((m) => (
            <Stat
              key={m.label}
              metric={m}
              numberClassName="font-archivo text-[clamp(30px,3.4vw,46px)] leading-[1] font-extrabold tracking-[-.045em]"
              labelClassName="mt-2 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted"
              tbdClassName="text-muted-light"
            />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-line-2 pt-6 sm:mt-14">
          <Link href={`/${locale}/work/sky-planner`} className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent">
            ← SKY PLANNER
          </Link>
          <span className="flex-1" />
          <Link
            href={`/${locale}/work/heartopia-archive`}
            className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent"
          >
            NEXT — HEARTOPIA ARCHIVE →
          </Link>
        </div>
      </section>
    </div>
  );
}
