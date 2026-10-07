import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";
import { SmartLink } from "../ui/SmartLink";
import { Card, SubHeading } from "./parts";
import { TONES } from "./tones";
import type { ProjectConfig } from "../../config/projectTypes";

type Tech = NonNullable<ProjectConfig["tech"]>;

/** 8. TECNOLOGIAS */
export function TechSection({
  data,
  tone,
  index,
}: SectionProps & { data: Tech }) {
  const t = TONES[tone];
  return (
    <ProjectSection
      id="tecnologias"
      index={index}
      tone={tone}
      label="Tecnologias"
      title={data.title ?? "Como foi construído"}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {data.stack.map((g, i) => (
          <Reveal key={g.group} delay={0.06 * i}>
            <Card tone={tone} className="h-full">
              <p className="font-display text-base font-semibold">{g.group}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1 font-mono text-xs ${t.chip}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-14">
        <Reveal>
          <SubHeading tone={tone}>Arquitetura</SubHeading>
        </Reveal>
        <div className="mt-6 max-w-3xl">
          {data.architecture.map((layer, i) => (
            <Reveal key={layer.layer} delay={0.06 * i}>
              <div
                className={`flex flex-col gap-3 rounded-xl border p-4 sm:flex-row sm:items-center sm:gap-6 ${t.card}`}
              >
                <span className="w-28 shrink-0 font-mono text-xs uppercase tracking-wide text-thread">
                  {layer.layer}
                </span>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className={`rounded-md border px-3 py-1 text-sm ${t.line}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              {i < data.architecture.length - 1 && (
                <div className="py-1 text-center font-mono text-thread" aria-hidden="true">
                  ↓
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {data.repository.href && (
        <Reveal className="mt-10">
          <SmartLink
            href={data.repository.href}
            className={`inline-block rounded-full border px-5 py-2.5 font-mono text-sm transition-colors hover:border-thread ${t.chip}`}
          >
            {data.repository.label} ↗
          </SmartLink>
        </Reveal>
      )}
    </ProjectSection>
  );
}
