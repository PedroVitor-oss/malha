import type { ReactNode } from "react";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { TONES, type Tone } from "./tones";

export interface SectionProps {
  tone: Tone;
  /** Posição da seção na página (1, 2, 3...) — calculada automaticamente */
  index: number;
}

/** Moldura padrão de toda seção: fundo, número, rótulo e título. */
export function ProjectSection({
  id,
  index,
  tone,
  label,
  title,
  children,
}: {
  id: string;
  index: number;
  tone: Tone;
  label: string;
  title: string;
  children: ReactNode;
}) {
  const t = TONES[tone];
  return (
    <section id={id} className={`${t.section} scroll-mt-16 py-20 md:py-28`}>
      <Container>
        <Reveal>
          <p className={`font-mono text-xs uppercase tracking-[0.2em] ${t.eyebrow}`}>
            {String(index).padStart(2, "0")} — {label}
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
