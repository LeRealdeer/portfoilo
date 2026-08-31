import { getProfile } from "@/data/profile";
import { Reveal } from "./Reveal";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const profile = getProfile(locale);
  return (
    <footer id="contact" className="px-5 pt-14 pb-11 sm:px-9 sm:pt-24">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="font-archivo text-[clamp(26px,5.2vw,72px)] leading-[1.05] font-extrabold tracking-[-.04em]">
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
          <div className="min-w-[220px] flex-[1.4]">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-muted-light">
              LIVE PROJECTS
            </div>
            {profile.liveProjects.map((p) => (
              <a
                key={p.label}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-[16px] transition-colors duration-300 hover:text-accent first:mt-2"
              >
                {p.label} ↗
              </a>
            ))}
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
