import type { ProjectConfig } from "./projectTypes";

/**
 * Carrega automaticamente TODO arquivo .json da pasta config/projects/.
 * Para criar um projeto novo: copie um JSON existente, troque o "slug" e preencha.
 * Não precisa registrar em lugar nenhum.
 */
const modules = import.meta.glob<{ default: ProjectConfig }>(
  "./projects/*.json",
  { eager: true },
);

export const projects: ProjectConfig[] = Object.values(modules).map(
  (m) => m.default,
);

export function getProject(slug?: string): ProjectConfig | undefined {
  return projects.find((p) => p.slug === slug);
}
