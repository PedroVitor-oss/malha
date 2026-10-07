import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";
import { BulletList, Card, SubHeading } from "./parts";
import { TONES } from "./tones";
import type { ProjectConfig } from "../../config/projectTypes";

type Validation = NonNullable<ProjectConfig["validation"]>;

/** 6. VALIDAÇÃO */
export function ValidationSection({
  data,
  tone,
  index,
}: SectionProps & { data: Validation }) {
  const t = TONES[tone];
  return (
    <ProjectSection
      id="validacao"
      index={index}
      tone={tone}
      label="Validação"
      title={data.title ?? "O que aprendemos testando com usuários"}
    >
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SubHeading tone={tone}>Metodologia do teste</SubHeading>
          <p className={`mt-4 leading-relaxed ${t.muted}`}>{data.methodology}</p>
        </Reveal>
        <Reveal delay={0.08}>
          <SubHeading tone={tone}>Tarefas solicitadas</SubHeading>
          <div className="mt-4">
            <BulletList items={data.tasks} tone={tone} />
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {data.metrics.map((m, i) => (
          <Reveal key={m.label} delay={0.07 * i}>
            <Card tone={tone} className="h-full">
              <p className={`font-mono text-[11px] uppercase tracking-wide ${t.muted}`}>
                {m.label}
              </p>
              <p className={`mt-3 font-display text-4xl font-bold ${t.number}`}>
                {m.value}
              </p>
              {m.hint && <p className={`mt-2 text-sm ${t.muted}`}>{m.hint}</p>}
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        <Reveal>
          <Card tone={tone} className="h-full">
            <p className="font-display text-lg font-semibold">
              <span className="mr-2 text-signal">+</span>O que funcionou
            </p>
            <div className="mt-4">
              <BulletList items={data.worked} tone={tone} />
            </div>
          </Card>
        </Reveal>
        <Reveal delay={0.08}>
          <Card tone={tone} className="h-full">
            <p className="font-display text-lg font-semibold">
              <span className="mr-2 text-thread">−</span>O que não funcionou
            </p>
            <div className="mt-4">
              <BulletList items={data.didntWork} tone={tone} />
            </div>
          </Card>
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <SubHeading tone={tone}>Iterações feitas após o teste</SubHeading>
        <ol className={`mt-5 space-y-3 border-l ${t.line} pl-6`}>
          {data.iterations.map((it) => (
            <li key={it} className="relative leading-relaxed">
              <span className="absolute -left-[29px] top-[0.55em] h-2 w-2 rounded-full bg-thread" />
              {it}
            </li>
          ))}
        </ol>
      </Reveal>
    </ProjectSection>
  );
}
