import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { Stat } from "@/components/Stat";
import { Placeholder } from "@/components/Placeholder";
import { getProject } from "@/data/projects";

export const metadata: Metadata = {
  title: "Heartopia Archive — 서인하",
  description: "해외 크리에이터의 허락을 기반으로 운영하는 UGC 도안 아카이브 케이스 스터디.",
};

const problems = [
  "발견하기 어렵다",
  "본 것을 다시 찾기 어렵다",
  "퍼지는 과정에서 출처가 사라진다",
  "해외 커뮤니티 콘텐츠는 접근 자체가 어렵다",
];

const productFeatures = ["검색", "인기순", "좋아요", "찜", "작가별 모아보기", "다운로드", "템플릿 기반 등록", "공유"];

const policySteps = [
  "Discover Creator",
  "Contact",
  "Explain the Project",
  "Request Permission",
  "Receive Permission",
  "Upload as Proxy",
  "Credit Original Creator",
  "Link Original Post",
];

const proxyChips = [
  { label: "CREATOR", value: "원작자 표기" },
  { label: "ORIGINAL LINK", value: "원본 게시물" },
  { label: "PLATFORM", value: "출처 플랫폼" },
];

const qaCases = [
  {
    tag: "CASE 01 — SHARING",
    title: "iPhone 공유 버그",
    rows: [
      ["Problem", "상세 도안 URL을 공유하면 루트 URL만 복사됨"],
      ["Diagnosis", "콘텐츠 단위 공유 경로 부재"],
      ["Fix", "콘텐츠별 Share · Web Share API · Clipboard fallback · canonical / OG 메타 정리"],
    ],
  },
  {
    tag: "CASE 02 — EDITING",
    title: "수정 중 기존 이미지 소실",
    rows: [
      ["Problem", "콘텐츠를 수정하면 저장돼 있던 이미지가 사라질 수 있었음"],
      ["Diagnosis", "신규 업로드가 기존 자산을 덮어씀"],
      ["Fix", "기존 이미지 ID와 신규 Asset을 함께 처리하도록 수정 흐름 변경"],
    ],
  },
  {
    tag: "CASE 03 — DEVICE",
    title: "기기별 이미지 표시 문제",
    rows: [
      ["Problem", "특정 기기에서 이미지가 정상 표시되지 않음"],
      ["Diagnosis", "실사용 환경에서만 재현되는 이슈 추적"],
      ["Fix", "재현 · 수정 · 배포 후 재확인 사이클 반복"],
    ],
  },
];

const growthSteps = ["Low Initial Traction", "Creator Outreach · Permission", "Content Supply ↑"];

export default async function HeartopiaArchivePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const project = getProject("heartopia-archive");

  return (
    <div className="min-h-screen">
      <Header locale={locale} variant="case" breadcrumb="/ work / heartopia-archive" resumeHref="#learning" />

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-5 pt-14 pb-9 sm:px-9 sm:pt-24 sm:pb-14">
        <div className="font-archivo text-[12px] font-semibold tracking-[.18em] text-accent">{project.eyebrow}</div>
        <h1 className="mt-5 font-archivo text-[clamp(38px,6.6vw,94px)] leading-[1] font-extrabold tracking-[-.042em]">
          {project.h1Lines.map((line, i) => (
            <span key={i}>
              {line}
              {i < project.h1Lines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <div className="mt-8 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start sm:mt-13">
          <p className="max-w-[560px] flex-[1.2] text-[19px] leading-[1.78] text-ink-70 text-pretty">
            Heartopia 도안 아카이브는 기술 문제로 시작하지 않았습니다. <b>이 콘텐츠를 올려도 되는가</b>라는
            질문에서 시작했습니다. 그래서 이 프로젝트에서 가장 오래 걸린 일은 개발이 아니라, 해외 원작자를 찾아
            연락하고 허락을 받는 일이었습니다.
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

      {/* 01 Problem / 02 Product */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
          <Reveal className="flex-1">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">01 / PROBLEM</div>
            <h2 className="mt-5 font-archivo text-[clamp(26px,3.4vw,46px)] leading-[1.05] font-extrabold tracking-[-.038em]">
              좋은 도안은 많은데,
              <br />
              다시 찾을 수가 없었습니다.
            </h2>
            <p className="mt-4.5 max-w-[440px] text-[17px] leading-[1.78] text-ink-70">
              유저가 만든 의상·가구·그림 도안이 Xiaohongshu, X, Discord, 개인 계정에 흩어져 있었습니다.
            </p>
            <div className="mt-6 border-t border-line-4">
              {problems.map((p, i) => (
                <div
                  key={p}
                  className={`py-3 text-[16px] text-ink-70 ${
                    i === problems.length - 1 ? "border-b border-line-4" : "border-b border-line-3"
                  }`}
                >
                  {p}
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="flex-1">
            <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">02 / PRODUCT</div>
            <h2 className="mt-5 font-archivo text-[clamp(26px,3.4vw,46px)] leading-[1.05] font-extrabold tracking-[-.038em]">
              검색되는 아카이브,
              <br />
              그리고 남는 출처.
            </h2>
            <p className="mt-4.5 max-w-[440px] text-[17px] leading-[1.78] text-ink-70">
              초기 범위는 의상·가구·그림으로 좁혔습니다. 건축 등은 MVP에서 제외하고 콘텐츠 밀도를 먼저
              확보했습니다.
            </p>
            <div className="mt-5.5 flex flex-wrap gap-2">
              {productFeatures.map((f) => (
                <span key={f} className="border border-line-2 px-3.5 py-1.5 text-[14px] text-ink-70">
                  {f}
                </span>
              ))}
            </div>
            <p className="mt-4.5 text-[15px] leading-[1.7] text-muted">
              업로드에는 인증 정책을 두어 콘텐츠 소비자와 공급자의 권한을 구분했습니다.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 — Creator-first Policy (dark) */}
      <section className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
            03 / CREATOR-FIRST POLICY
          </div>
          <Reveal>
            <h2 className="mt-5.5 font-archivo text-[clamp(34px,5vw,76px)] leading-[1] font-extrabold tracking-[-.042em]">
              Permission
              <br />
              before publication.
            </h2>
          </Reveal>
          <p className="mt-5 max-w-[560px] text-[18px] leading-[1.8] text-[rgba(244,241,234,.75)] text-pretty">
            한 장이라도 원작자의 허락 없이 올리지 않는다는 원칙을 먼저 정하고, 그 원칙이 지켜지는 방식으로 운영
            절차를 만들었습니다. 아카이브의 가치는 콘텐츠 양이 아니라 신뢰에서 나온다고 봤습니다.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px border-t border-b border-line-dark bg-line-dark sm:mt-16 max-[1100px]:grid-cols-2 grid-cols-4 max-[560px]:grid-cols-1">
            {policySteps.map((step, i) => (
              <Reveal key={step} delay={i * 0.03} className="bg-ink px-5 pt-6 pb-7">
                <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent-on-dark">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="mt-3 text-[16px] leading-[1.5]">{step}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Global Creator Outreach / 05 — Proxy Upload */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          04 / GLOBAL CREATOR OUTREACH
        </div>
        <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
          <Reveal className="flex-[1.1]">
            <h2 className="font-archivo text-[clamp(28px,3.8vw,52px)] leading-[1.04] font-extrabold tracking-[-.038em]">
              연락이 막히면
              <br />
              연락할 방법을
              <br />
              다시 설계했습니다.
            </h2>
            <div className="mt-7 border-t border-line-2">
              {[
                { label: "PROBLEM", body: "Xiaohongshu 계정 제한으로 DM·댓글이 정상적으로 전달되지 않음", accent: false },
                {
                  label: "ACTION",
                  body: "플랫폼 고객센터 문의 · 중국어 허가 요청 메시지 작성 · 현지 지인을 통한 대리 연락 · 비상업 운영임을 직접 설명",
                  accent: false,
                },
                {
                  label: "RESULT",
                  body: (
                    <>
                      여러 중국 제작자에게 <b>실제 사용 허가를 확보</b>해 현재 콘텐츠를 게시 중
                    </>
                  ),
                  accent: true,
                },
              ].map((row, i, arr) => (
                <div
                  key={row.label}
                  className={`flex gap-5 py-4 ${
                    i === arr.length - 1 ? "border-b border-line-2" : "border-b border-line-3"
                  }`}
                >
                  <div
                    className={`w-[86px] flex-none font-archivo text-[10.5px] font-semibold tracking-[.13em] ${
                      row.accent ? "text-accent" : "text-muted-light"
                    }`}
                  >
                    {row.label}
                  </div>
                  <div className="flex-1 text-[16px] leading-[1.7] text-ink-70">{row.body}</div>
                </div>
              ))}
            </div>
            <p className="mt-5.5 border-l-2 border-accent pl-5 font-archivo text-[19px] font-bold leading-[1.4] tracking-[-.02em]">
              허가는 기능이 아니라 관계의 결과였습니다.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-1 flex-col gap-4">
            <Placeholder
              label={"CREATOR PERMISSION DM\n(개인정보 제거 후 삽입)"}
              className="h-[clamp(200px,24vw,320px)]"
            />
            <Placeholder label={"CREATOR PAGE — 출처 표기 화면"} className="h-[clamp(130px,16vw,200px)]" />
          </Reveal>
        </div>

        <div className="mt-14 border-t border-line-2 pt-7 sm:mt-21">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
            05 / TRANSPARENT PROXY UPLOAD
          </div>
          <div className="mt-5 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
            <Reveal className="flex-1">
              <h2 className="font-archivo text-[clamp(24px,3vw,42px)] leading-[1.06] font-extrabold tracking-[-.035em]">
                모든 게시물은
                <br />
                대리 업로드임을
                <br />
                밝힙니다.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="flex-[1.4]">
              <p className="max-w-[520px] text-[17px] leading-[1.78] text-ink-70">
                콘텐츠마다 원작자 이름, 원본 게시물 링크, 플랫폼, 그리고 허락을 받은 대리 업로드라는 사실을 함께
                표기합니다. 수집이 아니라 위탁 게시라는 점이 유저에게도 보여야 한다고 봤습니다.
              </p>
              <div className="mt-5.5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {proxyChips.map((c) => (
                  <div key={c.label} className="border border-line-2 bg-paper px-4 py-3.5">
                    <div className="font-archivo text-[10px] font-semibold tracking-[.13em] text-muted-light">
                      {c.label}
                    </div>
                    <div className="mt-1.5 text-[15px] text-ink-70">{c.value}</div>
                  </div>
                ))}
                <div className="border border-ink bg-ink px-4 py-3.5 text-ink-on-dark">
                  <div className="font-archivo text-[10px] font-semibold tracking-[.13em] text-accent-on-dark">
                    PERMISSION
                  </div>
                  <div className="mt-1.5 text-[15px]">허락받은 대리 게시</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 06 — Content Architecture */}
      <section className="border-t border-line bg-bg-alt px-5 py-14 sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
            06 / CONTENT ARCHITECTURE
          </div>
          <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
            <Reveal className="flex-1">
              <h2 className="font-archivo text-[clamp(26px,3.4vw,46px)] leading-[1.05] font-extrabold tracking-[-.038em]">
                게임이 만드는 방식대로
                <br />
                데이터를 만들었습니다.
              </h2>
              <p className="mt-4.5 max-w-[440px] text-[17px] leading-[1.78] text-ink-70">
                도안은 한 장짜리 이미지가 아닙니다. 의상 하나에도 앞·뒤·좌측 소매·우측 소매 같은 파츠가 있습니다.
                게임의 실제 제작 구조를 분석해 템플릿과 파츠 단위로 구조화했습니다.
              </p>
              <div className="mt-7.5 flex gap-11 border-t border-line-4 pt-5.5">
                <Stat
                  metric={{ value: 26, label: "TEMPLATES" }}
                  numberClassName="font-archivo text-[clamp(38px,4.4vw,64px)] leading-[1] font-extrabold tracking-[-.05em]"
                  labelClassName="mt-2 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted"
                />
                <Stat
                  metric={{ value: 54, label: "CONTENT PARTS" }}
                  numberClassName="font-archivo text-[clamp(38px,4.4vw,64px)] leading-[1] font-extrabold tracking-[-.05em]"
                  labelClassName="mt-2 font-archivo text-[10.5px] font-semibold tracking-[.13em] text-muted"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1} className="flex-1">
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                CATEGORY
              </div>
              <div className="mt-3 flex gap-2.5">
                <div className="flex-1 border border-line-2 bg-paper px-4 py-3.5 text-[15px]">Clothing</div>
                <div className="flex-1 border border-line-2 bg-paper px-4 py-3.5 text-[15px]">Furniture</div>
                <div className="flex-1 border border-line-2 bg-paper px-4 py-3.5 text-[15px]">Artwork</div>
              </div>
              <div className="mt-5.5 font-archivo text-[10.5px] font-semibold tracking-[.14em] text-muted-light">
                CLOTHING PARTS
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                <div className="border border-dashed border-[rgba(23,24,26,.28)] px-4 py-3.5 text-[15px] text-ink-70">
                  Front
                </div>
                <div className="border border-dashed border-[rgba(23,24,26,.28)] px-4 py-3.5 text-[15px] text-ink-70">
                  Back
                </div>
                <div className="border border-dashed border-[rgba(23,24,26,.28)] px-4 py-3.5 text-[15px] text-ink-70">
                  Left Sleeve
                </div>
                <div className="border border-dashed border-[rgba(23,24,26,.28)] px-4 py-3.5 text-[15px] text-ink-70">
                  Right Sleeve
                </div>
              </div>
              <Placeholder variant="alt" label={"템플릿 상세 화면"} className="mt-5 h-[clamp(120px,14vw,180px)] text-[11px]" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 07 — QA & Iteration */}
      <section className="mx-auto max-w-[1440px] px-5 py-16 sm:px-9 sm:py-24">
        <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent">
          07 / QA &amp; ITERATION
        </div>
        <Reveal>
          <h2 className="mt-5 font-archivo text-[clamp(26px,3.4vw,46px)] leading-[1.05] font-extrabold tracking-[-.038em]">
            배포가 끝이 아니라
            <br />
            거기서부터 시작이었습니다.
          </h2>
        </Reveal>
        <div className="mt-9 grid grid-cols-1 gap-px border-t border-b border-line-4 bg-line-4 max-[1100px]:grid-cols-1 sm:mt-13 grid-cols-3">
          {qaCases.map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.05} className="bg-bg px-6 pt-6 pb-7">
              <div className="font-archivo text-[10.5px] font-semibold tracking-[.14em] text-accent">{c.tag}</div>
              <h3 className="mt-3.5 font-archivo text-[20px] font-bold tracking-[-.02em]">{c.title}</h3>
              <div className="mt-3.5 flex flex-col gap-2.5 text-[15.5px] leading-[1.65] text-ink-70">
                {c.rows.map(([label, body]) => (
                  <div key={label}>
                    <b>{label}</b> — {body}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 08 — Growth / 09 — Learning (dark) */}
      <section id="learning" className="border-t border-line bg-ink px-5 py-14 text-ink-on-dark sm:px-9 sm:py-20">
        <div className="mx-auto max-w-[1440px]">
          <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
            08 / GROWTH
          </div>
          <div className="mt-6 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start">
            <Reveal className="flex-[1.2]">
              <h2 className="font-archivo text-[clamp(28px,4vw,56px)] leading-[1.03] font-extrabold tracking-[-.04em]">
                아카이브의 가치는
                <br />
                콘텐츠 공급량에
                <br />
                달려 있었습니다.
              </h2>
              <p className="mt-5 max-w-[520px] text-[18px] leading-[1.8] text-[rgba(244,241,234,.75)] text-pretty">
                초기 유입은 낮았습니다. 기능을 더 만드는 대신 작가를 더 찾고, 허가를 더 받고, 콘텐츠를 더 올리는
                쪽에 시간을 썼습니다. 업로드가 활발한 시기에는 방문자가 눈에 띄게 늘었습니다.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="flex-1">
              <div className="flex flex-col gap-3.5 text-[16px]">
                {growthSteps.map((step) => (
                  <div key={step}>
                    <div className="border border-line-dark-2 px-4.5 py-3.5">{step}</div>
                    <div className="py-1 text-accent-on-dark">↓</div>
                  </div>
                ))}
                <div className="border border-accent-on-dark px-4.5 py-3.5 font-bold">
                  Daily Visitors 50–60{" "}
                  <span className="text-[14px] font-normal text-[rgba(244,241,234,.5)]">
                    · 업로드 활발기 기준, GA 재확인 예정
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 flex max-[860px]:flex-col gap-6 sm:gap-16 items-start border-t border-line-dark-2 pt-8 sm:mt-24">
            <Reveal className="flex-[1.2]">
              <div className="font-archivo text-[11.5px] font-semibold tracking-[.18em] text-accent-on-dark">
                09 / LEARNING
              </div>
              <h2 className="mt-5 font-archivo text-[clamp(30px,4vw,56px)] leading-[1.03] font-extrabold tracking-[-.04em]">
                신뢰가 곧 기능이었습니다.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="max-w-[520px] flex-1 text-[18px] leading-[1.8] text-[rgba(244,241,234,.78)] text-pretty">
              허락을 받는 데 드는 시간은 개발보다 훨씬 길었지만, 그 절차가 곧 서비스의 정체성이 됐습니다. 팬
              콘텐츠를 다루는 서비스에서 저작권·출처·원작자와의 관계는 부가 조건이 아니라 운영의 기본 설계라는
              것을 배웠습니다.
            </Reveal>
          </div>

          <div className="mt-11 flex flex-wrap items-center gap-4 border-t border-line-dark-2 pt-6 sm:mt-16">
            <Link
              href={`/${locale}/work/identity5-pick`}
              className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              ← IDENTITY5 PICK
            </Link>
            <span className="flex-1" />
            <Link
              href={`/${locale}`}
              className="font-archivo text-[12.5px] font-bold tracking-[.1em] text-accent-on-dark transition-colors duration-300 hover:text-white"
            >
              BACK TO WORK →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
