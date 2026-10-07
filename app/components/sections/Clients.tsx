import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import type { SiteConfig } from "../../config/types";

export function Clients({ config }: { config: SiteConfig }) {
  const { clients } = config;

  return (
    <section id="clientes" className="bg-ink py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-thread">
            {clients.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={0.05} className="max-w-2xl">
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl">
            {clients.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="max-w-xl">
          <p className="mt-5 text-base leading-relaxed text-fog">
            {clients.paragraph}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {clients.segments.map((segment, i) => (
            <Reveal key={segment.name} delay={0.08 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-ink-line p-7">
                <span className="font-mono text-xs text-fog">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-cream">
                  {segment.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fog">
                  {segment.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
