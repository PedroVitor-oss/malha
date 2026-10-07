import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";
import { MediaBox } from "../ui/MediaBox";
import { SmartLink } from "../ui/SmartLink";
import { SubHeading } from "./parts";
import { TONES } from "./tones";
import type { ProjectConfig } from "../../config/projectTypes";

type Design = NonNullable<ProjectConfig["design"]>;
const LEVELS = ["Baixa", "Média", "Alta"] as const;

/** 5. PROTÓTIPO / DESIGN */
export function DesignSection({
  data,
  tone,
  index,
}: SectionProps & { data: Design }) {
  const t = TONES[tone];
  return (
    <ProjectSection
      id="design"
      index={index}
      tone={tone}
      label="Protótipo e design"
      title={data.title ?? "Como a solução foi desenhada"}
    >
      <Reveal>
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <SubHeading tone={tone}>Nível de fidelidade</SubHeading>
            <div className="mt-3 flex gap-2">
              {LEVELS.map((level) => (
                <span
                  key={level}
                  className={`rounded-full border px-4 py-1.5 font-mono text-xs ${
                    level === data.fidelity
                      ? "border-thread bg-thread text-ink"
                      : `${t.line} ${t.muted}`
                  }`}
                >
                  {level}
                </span>
              ))}
            </div>
          </div>
          {data.figma.href && (
            <SmartLink
              href={data.figma.href}
              className={`rounded-full border px-5 py-2.5 font-mono text-sm transition-colors hover:border-thread ${t.chip}`}
            >
              {data.figma.label} ↗
            </SmartLink>
          )}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {data.screens.map((screen, i) => (
          <Reveal key={screen.name} delay={0.06 * i}>
            <MediaBox media={screen.image} tone={tone} aspect="aspect-[16/10]" />
            <p className="mt-4 font-display text-base font-semibold">
              <span className="mr-2 font-mono text-xs text-thread">
                {String(i + 1).padStart(2, "0")}
              </span>
              {screen.name}
            </p>
            <p className={`mt-1 text-sm leading-relaxed ${t.muted}`}>
              {screen.description}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <SubHeading tone={tone}>Fluxo principal do usuário</SubHeading>
        <ol className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-3">
          {data.flow.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className={`rounded-full border px-4 py-2 text-sm ${t.chip}`}>
                {step}
              </span>
              {i < data.flow.length - 1 && (
                <span className="font-mono text-thread" aria-hidden="true">
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Reveal>
    </ProjectSection>
  );
}
