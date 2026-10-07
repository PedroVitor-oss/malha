import { useEffect, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import siteConfig from "../config/site.json";
import type { SiteConfig } from "../config/types";
import { getProject } from "../config/projects";

import { Nav } from "../components/Nav";
import NotFound from "./NotFound";
import type { Tone } from "../components/project/tones";
import { ProjectHero } from "../components/project/ProjectHero";
import { ContextSection } from "../components/project/ContextSection";
import { ResearchSection } from "../components/project/ResearchSection";
import { PersonasSection } from "../components/project/PersonasSection";
import { DesignSection } from "../components/project/DesignSection";
import { ValidationSection } from "../components/project/ValidationSection";
import { SolutionSection } from "../components/project/SolutionSection";
import { TechSection } from "../components/project/TechSection";
import { ResultsSection } from "../components/project/ResultsSection";
import { TeamSection } from "../components/project/TeamSection";
import { SummarySection } from "../components/project/SummarySection";
import { ProjectFooter } from "../components/project/ProjectFooter";

const site = siteConfig as SiteConfig;

interface SectionDef {
  key: string;
  /** só aparece se o projeto tiver esses dados no JSON */
  enabled: boolean;
  render: (tone: Tone, index: number) => ReactNode;
}

export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.hero.name} — ${site.company.fullName}`;
    }
  }, [project]);

  if (!project) return <NotFound />;

  /*
    ORDEM DAS SEÇÕES: é a ordem deste array. Para reorganizar, mova os blocos.
    Seção sem dados no JSON simplesmente não aparece.
    O fundo (claro/escuro) alterna sozinho conforme a posição.
  */
  const sections: SectionDef[] = [
    {
      key: "context",
      enabled: !!project.context,
      render: (tone, index) => (
        <ContextSection data={project.context!} tone={tone} index={index} />
      ),
    },
    {
      key: "research",
      enabled: !!project.research,
      render: (tone, index) => (
        <ResearchSection data={project.research!} tone={tone} index={index} />
      ),
    },
    {
      key: "personas",
      enabled: !!project.personas,
      render: (tone, index) => (
        <PersonasSection data={project.personas!} tone={tone} index={index} />
      ),
    },
    {
      key: "design",
      enabled: !!project.design,
      render: (tone, index) => (
        <DesignSection data={project.design!} tone={tone} index={index} />
      ),
    },
    {
      key: "validation",
      enabled: !!project.validation,
      render: (tone, index) => (
        <ValidationSection data={project.validation!} tone={tone} index={index} />
      ),
    },
    {
      key: "solution",
      enabled: !!project.solution,
      render: (tone, index) => (
        <SolutionSection data={project.solution!} tone={tone} index={index} />
      ),
    },
    {
      key: "tech",
      enabled: !!project.tech,
      render: (tone, index) => (
        <TechSection data={project.tech!} tone={tone} index={index} />
      ),
    },
    {
      key: "results",
      enabled: !!project.results,
      render: (tone, index) => (
        <ResultsSection data={project.results!} tone={tone} index={index} />
      ),
    },
    {
      key: "team",
      enabled: !!project.team,
      render: (tone, index) => (
        <TeamSection data={project.team!} tone={tone} index={index} />
      ),
    },
    {
      key: "summary",
      enabled: !!project.executiveSummary?.length,
      render: (tone, index) => (
        <SummarySection data={project.executiveSummary!} tone={tone} index={index} />
      ),
    },
  ];

  const visible = sections.filter((s) => s.enabled);

  return (
    <>
      <Nav config={site} />
      <main>
        <ProjectHero project={project} />
        {visible.map((section, i) => {
          // a primeira seção depois do hero (escuro) é clara, e assim por diante
          const tone: Tone = i % 2 === 0 ? "paper" : "ink";
          return <div key={section.key}>{section.render(tone, i + 1)}</div>;
        })}
      </main>
      <ProjectFooter data={project.footer} site={site} />
    </>
  );
}
