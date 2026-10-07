import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";
import { BulletList, Card, SubHeading } from "./parts";
import { TONES } from "./tones";
import type { ProjectConfig } from "../../config/projectTypes";

type Results = NonNullable<ProjectConfig["results"]>;

const STATUS = {
  done: { label: "Concluído", dot: "bg-signal" },
  doing: { label: "Em andamento", dot: "bg-thread" },
  next: { label: "Próximo", dot: "bg-fog" },
} as const;

/** 9. RESULTADOS E ROADMAP */
export function ResultsSection({
  data,
  tone,
  index,
}: SectionProps & { data: Results }) {
  const t = TONES[tone];
  return (
    <ProjectSection
      id="resultados"
      index={index}
      tone={tone}
      label="Resultados e roadmap"
      title={data.title ?? "Onde estamos e para onde vamos"}
    >
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <SubHeading tone={tone}>Conquistas até agora</SubHeading>
          <div className="mt-5">
            <BulletList items={data.achievements} tone={tone} />
          </div>
        </Reveal>

        <div className="grid grid-cols-3 gap-3 lg:grid-cols-1">
          {data.metrics.map((m, i) => (
            <Reveal key={m.label} delay={0.06 * i}>
              <Card tone={tone} className="!p-5">
                <p className={`font-display text-3xl font-bold ${t.number}`}>{m.value}</p>
                <p className={`mt-1 text-xs leading-snug ${t.muted}`}>{m.label}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <Reveal>
          <SubHeading tone={tone}>Roadmap</SubHeading>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data.roadmap.map((phase, i) => {
            const s = STATUS[phase.status];
            return (
              <Reveal key={phase.phase} delay={0.07 * i}>
                <Card tone={tone} className="h-full">
                  <span
                    className={`inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide ${t.muted}`}
                  >
                    <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                    {s.label}
                  </span>
                  <p className="mt-3 font-display text-lg font-semibold">{phase.phase}</p>
                  <ul className={`mt-3 space-y-1.5 text-sm ${t.muted}`}>
                    {phase.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </ProjectSection>
  );
}
