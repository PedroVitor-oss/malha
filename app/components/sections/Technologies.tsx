import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import type { SiteConfig } from "../../config/types";

export function Technologies({ config }: { config: SiteConfig }) {
  const { technologies } = config;

  return (
    <section id="tecnologias" className="bg-paper py-24 text-graphite md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
                {technologies.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {technologies.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-stone">
                {technologies.paragraph}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:grid-cols-2">
            {technologies.items.map((tech, i) => (
              <Reveal
                key={tech.name}
                delay={0.06 * i}
                className="flex flex-col justify-between bg-paper p-6"
              >
                <h3 className="font-display text-base font-semibold">
                  {tech.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone">
                  {tech.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
