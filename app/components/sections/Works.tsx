import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import type { SiteConfig } from "../../config/types";

export function Works({ config }: { config: SiteConfig }) {
  const { works } = config;

  return (
    <section id="trabalhos" className="bg-ink py-24 md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-thread">
            {works.eyebrow}
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal delay={0.05} className="max-w-xl">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-cream sm:text-4xl">
              {works.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm">
            <p className="text-sm leading-relaxed text-fog">{works.paragraph}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {works.items.map((item, i) => (
            <Reveal key={item.title} delay={0.08 * i}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink-line bg-ink-soft p-7 transition-colors hover:border-thread/40">
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${item.tag === "Desenvolvimento"
                        ? "border-yellow-400/30 text-yellow-400"
                        : item.tag === "Conceito"
                          ? "border-gray-400/30 text-gray-400"
                          : item.tag === "Concluido"
                            ? "border-signal/30 text-signal"
                            : "border-signal/30 text-signal"
                      }`}
                  >
                    {item.tag}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-fog">
                    {item.category}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-semibold text-cream">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-thread">
                  {item.segment}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fog">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
