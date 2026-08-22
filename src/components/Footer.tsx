import { profile } from "@/data/profile";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="resume" className="px-5 pt-14 pb-11 sm:px-9 sm:pt-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="font-archivo text-[clamp(32px,5.6vw,80px)] leading-[1] font-extrabold tracking-[-.042em]">
            Let&apos;s build experiences
            <br />
            players want to stay for.
          </h2>
        </Reveal>

        <div className="mt-9 flex flex-wrap gap-6 border-t border-line-2 pt-7 sm:mt-14 sm:gap-16">
          <div className="min-w-[180px] flex-1">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-muted-light">
              EMAIL
            </div>
            <a href={`mailto:${profile.contact.email}`} className="mt-2 block text-[16px]">
              {profile.contact.email}
            </a>
          </div>
          <div className="min-w-[180px] flex-1">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-muted-light">
              GITHUB
            </div>
            <a href={`https://${profile.contact.github}`} className="mt-2 block text-[16px]">
              {profile.contact.github} ↗
            </a>
          </div>
          <div className="min-w-[180px] flex-1">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-muted-light">
              LINKEDIN
            </div>
            <a href={`https://${profile.contact.linkedin}`} className="mt-2 block text-[16px]">
              {profile.contact.linkedin} ↗
            </a>
          </div>
          <div className="min-w-[220px] flex-[1.4]">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-muted-light">
              LIVE PROJECTS
            </div>
            {profile.liveProjects.map((p) => (
              <a key={p.label} href={p.href} className="mt-1.5 block text-[16px] first:mt-2">
                {p.label} ↗
              </a>
            ))}
          </div>
          <div className="flex-none">
            <a
              href="#resume"
              className="inline-block bg-ink px-7 py-3.5 font-archivo text-[12.5px] font-bold tracking-[.1em] text-bg transition-colors duration-300 hover:bg-accent"
            >
              RESUME ↗
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 font-mono text-[11px] text-muted-light">
          <span>{profile.copyright}</span>
          <span className="flex-1" />
          <span>{profile.footerNote}</span>
        </div>
      </div>
    </footer>
  );
}
