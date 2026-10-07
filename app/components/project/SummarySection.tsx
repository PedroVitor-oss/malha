import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";

/** Sumário executivo (3 linhas) — antes do rodapé */
export function SummarySection({
  data,
  tone,
  index,
}: SectionProps & { data: string[] }) {
  return (
    <ProjectSection
      id="sumario"
      index={index}
      tone={tone}
      label="Sumário executivo"
      title="Em três linhas"
    >
      <ol className="max-w-3xl space-y-6">
        {data.map((line, i) => (
          <Reveal key={line} delay={0.08 * i}>
            <li className="flex gap-5">
              <span className="font-mono text-sm text-thread">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-display text-xl font-semibold leading-snug md:text-2xl">
                {line}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </ProjectSection>
  );
}
