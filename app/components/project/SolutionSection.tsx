import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";
import { MediaBox } from "../ui/MediaBox";
import { BulletList, Card, SubHeading } from "./parts";
import type { ProjectConfig } from "../../config/projectTypes";

type Solution = NonNullable<ProjectConfig["solution"]>;

/** 7. SOLUÇÃO */
export function SolutionSection({
  data,
  tone,
  index,
}: SectionProps & { data: Solution }) {
  return (
    <ProjectSection
      id="solucao"
      index={index}
      tone={tone}
      label="Solução"
      title={data.title ?? "A solução, na prática"}
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.features.map((f, i) => (
          <Reveal key={f.title} delay={0.05 * i}>
            <Card tone={tone} className="h-full">
              <span className="font-mono text-xs text-thread">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed opacity-80">{f.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <SubHeading tone={tone}>Diferenciais competitivos</SubHeading>
        <div className="mt-5 max-w-2xl">
          <BulletList items={data.differentials} tone={tone} />
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {data.media.map((m, i) => (
          <Reveal key={m.alt} delay={0.07 * i}>
            <MediaBox media={m} tone={tone} aspect="aspect-[4/3]" />
          </Reveal>
        ))}
      </div>
    </ProjectSection>
  );
}
