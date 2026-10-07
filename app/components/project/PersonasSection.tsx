import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";
import { Avatar, BulletList, Card, SubHeading } from "./parts";
import { TONES } from "./tones";
import type { ProjectConfig } from "../../config/projectTypes";

type Personas = NonNullable<ProjectConfig["personas"]>;

/** 4. PERSONAS E JORNADA */
export function PersonasSection({
  data,
  tone,
  index,
}: SectionProps & { data: Personas }) {
  const t = TONES[tone];
  const steps = [
    { key: "before", label: "Antes", items: data.journey.before },
    { key: "during", label: "Durante", items: data.journey.during },
    { key: "after", label: "Depois", items: data.journey.after },
  ];

  return (
    <ProjectSection
      id="personas"
      index={index}
      tone={tone}
      label="Personas e jornada"
      title={data.title ?? "Para quem estamos construindo"}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {data.people.map((p, i) => (
          <Reveal key={p.name} delay={0.08 * i}>
            <Card tone={tone} className="h-full !p-7">
              <div className="flex items-center gap-4">
                <Avatar name={p.name} tone={tone} />
                <div>
                  <p className="font-display text-lg font-semibold">
                    {p.name}, {p.age}
                  </p>
                  <p className={`text-sm ${t.muted}`}>{p.role}</p>
                </div>
              </div>

              <dl className="mt-6 space-y-4 text-sm leading-relaxed">
                <div>
                  <dt className={`font-mono text-[11px] uppercase tracking-wide ${t.muted}`}>
                    Dor
                  </dt>
                  <dd className="mt-1">{p.pain}</dd>
                </div>
                <div>
                  <dt className={`font-mono text-[11px] uppercase tracking-wide ${t.muted}`}>
                    Objetivo
                  </dt>
                  <dd className="mt-1">{p.goal}</dd>
                </div>
              </dl>

              <blockquote className="mt-6 border-l-2 border-thread pl-4 font-display text-base font-medium leading-snug">
                “{p.quote}”
              </blockquote>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <Reveal>
          <SubHeading tone={tone}>Jornada do usuário</SubHeading>
        </Reveal>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.key} delay={0.08 * i}>
              <Card tone={tone} className="relative h-full">
                <p className="font-display text-lg font-semibold">
                  <span className="mr-2 font-mono text-xs text-thread">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {step.label}
                </p>
                <div className="mt-5">
                  <BulletList items={step.items} tone={tone} />
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </ProjectSection>
  );
}
