export type Tone = "ink" | "paper";

/**
 * Classes de cor por "tom" de seção. As seções da página de projeto
 * alternam automaticamente entre escuro (ink) e claro (paper).
 * Para mudar o visual de todas ao mesmo tempo, edite aqui.
 */
export const TONES = {
  ink: {
    section: "bg-ink text-cream",
    muted: "text-fog",
    eyebrow: "text-thread",
    card: "border-ink-line bg-ink-soft",
    line: "border-ink-line",
    bar: "bg-ink-line",
    number: "text-thread",
    chip: "border-ink-line text-cream",
  },
  paper: {
    section: "bg-paper text-graphite",
    muted: "text-stone",
    eyebrow: "text-stone",
    card: "border-paper-line bg-paper-soft",
    line: "border-paper-line",
    bar: "bg-paper-line",
    number: "text-graphite",
    chip: "border-paper-line text-graphite",
  },
} as const;
