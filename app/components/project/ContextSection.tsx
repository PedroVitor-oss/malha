import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";
import { BulletList, Card, SubHeading } from "./parts";
import { TONES } from "./tones";
import type { ProjectConfig } from "../../config/projectTypes";

/** 2. CONTEXTO E PROBLEMA */
export function ContextSection({
  data,
  tone,
  index,
}: SectionProps & { data: NonNullable<ProjectConfig["context"]> }) {
  const t = TONES[tone];
  return (
    <ProjectSection
      id="contexto"
      index={index}
      tone={tone}
      label="Contexto e problema"
      title={data.title ?? "O problema que queremos resolver"}
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SubHeading tone={tone}>Cenário atual</SubHeading>
          <div className="mt-5">
            <BulletList items={data.scenario} tone={tone} />
          </div>
          <div className="mt-10">
            <SubHeading tone={tone}>Público-alvo</SubHeading>
            <p className={`mt-4 leading-relaxed ${t.muted}`}>{data.audience}</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SubHeading tone={tone}>Dores identificadas</SubHeading>
          <div className="mt-5 grid gap-3">
            {data.pains.map((pain, i) => (
              <Card key={pain} tone={tone} className="flex gap-4 !p-4">
                <span className="font-mono text-xs text-thread">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed">{pain}</span>
              </Card>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className={`rounded-2xl border-l-4 border-thread p-6 md:p-8 ${t.card}`}>
          <SubHeading tone={tone}>Hipótese do projeto</SubHeading>
          <p className="mt-3 font-display text-xl font-semibold leading-snug md:text-2xl">
            {data.hypothesis}
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-10">
        <SubHeading tone={tone}>Fontes consultadas</SubHeading>
        <ul className={`mt-3 space-y-1 text-sm ${t.muted}`}>
          {data.sources.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </Reveal>
    </ProjectSection>
  );
}
