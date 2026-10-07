import { Container } from "../ui/Container";
import { Stitch } from "../ui/Stitch";
import { SmartLink } from "../ui/SmartLink";
import type { ProjectConfig } from "../../config/projectTypes";
import type { SiteConfig } from "../../config/types";

/** 11. RODAPÉ */
export function ProjectFooter({
  data,
  site,
}: {
  data?: ProjectConfig["footer"];
  site: SiteConfig;
}) {
  return (
    <footer className="border-t border-ink-line bg-ink pb-10 pt-12 text-cream">
      <Container>
        {data && data.quickLinks.length > 0 && (
          <nav className="mb-8 flex flex-wrap gap-x-8 gap-y-3">
            {data.quickLinks.map((l) => (
              <SmartLink
                key={l.label}
                href={l.href}
                className="font-mono text-xs uppercase tracking-wide text-fog transition-colors hover:text-cream"
              >
                {l.label}
              </SmartLink>
            ))}
          </nav>
        )}
        <Stitch />
        <div className="mt-8 flex flex-col justify-between gap-3 sm:flex-row">
          <p className="text-sm text-fog">
            <span className="font-display font-semibold text-cream">
              {site.company.name}
              <span className="text-thread">.</span>
            </span>{" "}
            {data?.credits ?? site.company.slogan}
          </p>
          <p className="font-mono text-xs text-fog">
            © {new Date().getFullYear()} {site.company.fullName} — {site.company.city}
          </p>
        </div>
      </Container>
    </footer>
  );
}
