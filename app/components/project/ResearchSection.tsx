import { motion } from "motion/react";
import { ProjectSection, type SectionProps } from "./ProjectSection";
import { Reveal } from "../ui/Reveal";
import { Card, SubHeading } from "./parts";
import { TONES, type Tone } from "./tones";
import type { ProjectConfig } from "../../config/projectTypes";

type Research = NonNullable<ProjectConfig["research"]>;

/** Gráfico de barras horizontais — valores em % vindos do JSON */
function BarChart({
  chart,
  tone,
}: {
  chart: Research["results"][number];
  tone: Tone;
}) {
  const t = TONES[tone];
  return (
    <Card tone={tone}>
      <h4 className="font-display text-base font-semibold">{chart.title}</h4>
      <div className="mt-6 space-y-4">
        {chart.items.map((item) => (
          <div key={item.label}>
            <div className="flex items-baseline justify-between gap-4 text-sm">
              <span>{item.label}</span>
              <span className="font-mono text-xs">{item.value}%</span>
            </div>
            <div className={`mt-2 h-2 overflow-hidden rounded-full ${t.bar}`}>
              <motion.div
                className="h-2 rounded-full bg-thread"
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/** 3. PESQUISA / DESCOBERTA */
export function ResearchSection({
  data,
  tone,
  index,
}: SectionProps & { data: Research }) {
  const t = TONES[tone];
  const sample = [
    { label: "Amostra", value: data.sample.quantity },
    { label: "Perfil", value: data.sample.profile },
    { label: "Período", value: data.sample.period },
  ];

  return (
    <ProjectSection
      id="pesquisa"
      index={index}
      tone={tone}
      label="Pesquisa e descoberta"
      title={data.title ?? "O que descobrimos ouvindo as pessoas"}
    >
      <Reveal>
        <SubHeading tone={tone}>Metodologia</SubHeading>
        <p className={`mt-4 max-w-2xl leading-relaxed ${t.muted}`}>{data.methodology}</p>
      </Reveal>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {sample.map((s, i) => (
          <Reveal key={s.label} delay={0.06 * i}>
            <Card tone={tone} className="h-full">
              <p className={`font-mono text-[11px] uppercase tracking-wide ${t.muted}`}>
                {s.label}
              </p>
              <p className="mt-2 font-display text-lg font-semibold leading-snug">
                {s.value}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SubHeading tone={tone}>Perguntas-chave</SubHeading>
          <ol className="mt-5 space-y-4">
            {data.questions.map((q, i) => (
              <li key={q} className="flex gap-4 leading-relaxed">
                <span className="font-mono text-xs text-thread">{i + 1}</span>
                <span className={t.muted}>{q}</span>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="grid gap-4">
          {data.results.map((chart) => (
            <Reveal key={chart.title}>
              <BarChart chart={chart} tone={tone} />
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <Reveal>
          <SubHeading tone={tone}>Insights extraídos</SubHeading>
        </Reveal>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {data.insights.map((insight, i) => (
            <Reveal key={insight} delay={0.07 * i}>
              <Card tone={tone} className="h-full">
                <span className="font-mono text-xs text-thread">→</span>
                <p className="mt-3 font-display text-lg font-semibold leading-snug">
                  {insight}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </ProjectSection>
  );
}
