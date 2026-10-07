import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import type { SiteConfig } from "../../config/types";

export function WhatWeDo({ config }: { config: SiteConfig }) {
  const { whatWeDo, stats } = config;

  return (
    <section id="o-que-fazemos" className="bg-paper py-24 text-graphite md:py-32">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
            {whatWeDo.eyebrow}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              {whatWeDo.slogan}
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="text-lg leading-relaxed text-stone">
              {whatWeDo.paragraph}
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-paper-line bg-paper-line sm:grid-cols-3">
          {whatWeDo.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.08 * i} className="bg-paper p-8">
              <span className="font-mono text-xs text-thread">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-8 border-t border-paper-line pt-12 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.05 * i}>
              <p className="font-display text-3xl font-bold text-thread sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-stone">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
