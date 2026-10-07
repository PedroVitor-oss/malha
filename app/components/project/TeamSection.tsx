import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";
import { SmartLink } from "../ui/SmartLink";
import { Avatar, Card, SubHeading } from "./parts";
import { TONES } from "./tones";
import type { ProjectConfig } from "../../config/projectTypes";

type Team = NonNullable<ProjectConfig["team"]>;

/** 10. EQUIPE E EMPRESA */
export function TeamSection({
  data,
  tone,
  index,
}: SectionProps & { data: Team }) {
  const t = TONES[tone];
  return (
    <ProjectSection
      id="equipe"
      index={index}
      tone={tone}
      label="Equipe e empresa"
      title={data.title ?? `Quem está por trás: ${data.company.name}`}
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Reveal>
          <Card tone={tone} className="h-full">
            <SubHeading tone={tone}>Missão</SubHeading>
            <p className="mt-3 leading-relaxed">{data.company.mission}</p>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card tone={tone} className="h-full">
            <SubHeading tone={tone}>Visão</SubHeading>
            <p className="mt-3 leading-relaxed">{data.company.vision}</p>
          </Card>
        </Reveal>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.members.map((m, i) => (
          <Reveal key={m.name} delay={0.06 * i}>
            <Card tone={tone} className="flex items-center gap-4 !p-5">
              <Avatar name={m.name} tone={tone} />
              <div>
                <p className="font-display font-semibold">{m.name}</p>
                <p className={`text-sm ${t.muted}`}>{m.role}</p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 flex flex-wrap gap-3">
        {data.contact.map((c) => (
          <SmartLink
            key={c.label}
            href={c.href}
            className={`rounded-full border px-5 py-2.5 font-mono text-sm transition-colors hover:border-thread ${t.chip}`}
          >
            {c.label}
          </SmartLink>
        ))}
      </Reveal>
    </ProjectSection>
  );
}
