export interface Link {
  label: string;
  /** Vazio ("") = o botão não aparece. Aceita https://..., /rota e #ancora */
  href: string;
}

export interface MediaItem {
  /** Caminho a partir da pasta public/, ex: "/projetos/agenda/home.png". Vazio = mostra placeholder */
  src?: string;
  alt: string;
  /** Texto do placeholder quando ainda não há imagem */
  suggestion?: string;
}

export type ProjectStatus = "Conceito" | "Desenvolvimento" | "Concluído";

export interface ProjectConfig {
  /** Vira a URL: /projetos/<slug> */
  slug: string;
  /** true = mostra aviso "conteúdo de exemplo" no topo da página */
  draft?: boolean;

  // 1. HERO
  hero: {
    name: string;
    tagline: string;
    status: ProjectStatus;
    links: Link[];
    image: MediaItem;
  };

  // 2. CONTEXTO E PROBLEMA
  context?: {
    title?: string;
    scenario: string[];
    audience: string;
    pains: string[];
    hypothesis: string;
    sources: string[];
  };

  // 3. PESQUISA / DESCOBERTA
  research?: {
    title?: string;
    methodology: string;
    sample: { quantity: string; profile: string; period: string };
    questions: string[];
    results: { title: string; items: { label: string; value: number }[] }[];
    insights: string[];
  };

  // 4. PERSONAS E JORNADA
  personas?: {
    title?: string;
    people: {
      name: string;
      age: number;
      role: string;
      pain: string;
      goal: string;
      quote: string;
    }[];
    journey: { before: string[]; during: string[]; after: string[] };
  };

  // 5. PROTÓTIPO / DESIGN
  design?: {
    title?: string;
    fidelity: "Baixa" | "Média" | "Alta";
    screens: { name: string; description: string; image: MediaItem }[];
    flow: string[];
    figma: Link;
  };

  // 6. VALIDAÇÃO
  validation?: {
    title?: string;
    methodology: string;
    tasks: string[];
    metrics: { label: string; value: string; hint?: string }[];
    worked: string[];
    didntWork: string[];
    iterations: string[];
  };

  // 7. SOLUÇÃO
  solution?: {
    title?: string;
    features: { title: string; description: string }[];
    differentials: string[];
    media: MediaItem[];
  };

  // 8. TECNOLOGIAS
  tech?: {
    title?: string;
    stack: { group: string; items: string[] }[];
    architecture: { layer: string; items: string[] }[];
    repository: Link;
  };

  // 9. RESULTADOS E ROADMAP
  results?: {
    title?: string;
    achievements: string[];
    metrics: { label: string; value: string }[];
    roadmap: {
      phase: string;
      status: "done" | "doing" | "next";
      items: string[];
    }[];
  };

  // 10. EQUIPE E EMPRESA
  team?: {
    title?: string;
    company: { name: string; mission: string; vision: string };
    members: { name: string; role: string }[];
    contact: Link[];
  };

  /** Sumário executivo (3 linhas) — aparece antes do rodapé */
  executiveSummary?: string[];

  // 11. RODAPÉ
  footer?: {
    quickLinks: Link[];
    credits: string;
  };
}
