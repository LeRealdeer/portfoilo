import { getProfile } from "@/data/profile";
import { getProjects } from "@/data/projects";
import { Reveal } from "./Reveal";
import { TrackedAnchor } from "./Tracked";
import type { Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const profile = getProfile(locale);
  const liveNameByHref = new Map(
    getProjects(locale).map((p) => [p.liveUrl, p.title]),
  );
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
          <div className="min-w-[150px] flex-1">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-muted-light">
              EMAIL
            </div>
            <TrackedAnchor
              event="contact_click"
              eventParams={{
                contact_type: "email",
                destination_url: `mailto:${profile.contact.email}`,
              }}
              href={`mailto:${profile.contact.email}`}
              className="mt-2 block text-[16px]"
            >
              {profile.contact.email}
            </TrackedAnchor>
          </div>
          <div className="min-w-[150px] flex-1">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-muted-light">
              GITHUB
            </div>
            <TrackedAnchor
              event="contact_click"
              eventParams={{
                contact_type: "github",
                destination_url: `https://${profile.contact.github}`,
              }}
              href={`https://${profile.contact.github}`}
              className="mt-2 block text-[16px]"
            >
              {profile.contact.github} ↗
            </TrackedAnchor>
          </div>
          <div className="min-w-[190px] flex-[1.4]">
            <div className="font-archivo text-[11px] font-semibold tracking-[.16em] text-muted-light">
              LIVE PROJECTS
            </div>
            {profile.liveProjects.map((p) => (
              <TrackedAnchor
                key={p.label}
                event="project_link_click"
                eventParams={{
                  project_name: liveNameByHref.get(p.href) ?? p.label,
                  destination_url: p.href,
                }}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 block text-[16px] transition-colors duration-300 hover:text-accent first:mt-2"
              >
                {p.label} ↗
              </TrackedAnchor>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4 font-mono text-[11px] text-muted-light">
          <span>{profile.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
