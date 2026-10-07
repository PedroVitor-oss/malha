import { Link } from "react-router-dom";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { MediaBox } from "../ui/MediaBox";
import { SmartLink } from "../ui/SmartLink";
import type { ProjectConfig } from "../../config/projectTypes";

const STATUS_STYLE = {
  Conceito: "border-signal/40 text-signal",
  Desenvolvimento: "border-thread/50 text-thread",
  Concluído: "border-signal bg-signal/10 text-signal",
} as const;

/** 1. HERO */
export function ProjectHero({ project }: { project: ProjectConfig }) {
  const { hero, draft } = project;
  const links = hero.links.filter((l) => l.href);

  return (
    <section className="bg-ink pb-20 pt-28 text-cream md:pb-28 md:pt-36">
      <Container>
        <Link
          to="/#trabalhos"
          className="font-mono text-xs uppercase tracking-wide text-fog transition-colors hover:text-cream"
        >
          ← Todos os trabalhos
        </Link>

        {draft && (
          <p className="mt-8 max-w-2xl rounded-xl border border-thread/30 bg-thread/5 px-4 py-3 text-sm leading-relaxed text-thread-soft">
            Conteúdo de exemplo. Substitua pelos dados reais em{" "}
            <code className="font-mono text-xs">
              app/config/projects/{project.slug}.json
            </code>{" "}
            e remova a linha <code className="font-mono text-xs">"draft": true</code> para
            esconder este aviso.
          </p>
        )}

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Reveal>
              <span
                className={`inline-block rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wide ${STATUS_STYLE[hero.status]}`}
              >
                {hero.status}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {hero.name}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-fog">
                {hero.tagline}
              </p>
            </Reveal>
            {links.length > 0 && (
              <Reveal delay={0.15}>
                <div className="mt-9 flex flex-wrap gap-3">
                  {links.map((link, i) => (
                    <SmartLink
                      key={link.label}
                      href={link.href}
                      className={
                        i === 0
                          ? "rounded-full bg-thread px-5 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
                          : "rounded-full border border-white/20 px-5 py-2.5 font-mono text-sm text-cream transition-colors hover:border-white/40"
                      }
                    >
                      {link.label}
                    </SmartLink>
                  ))}
                </div>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1}>
            <MediaBox media={hero.image} tone="ink" aspect="aspect-[4/3]" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
