import type { ReactNode } from "react";
import { TONES, type Tone } from "./tones";

/** Título pequeno em mono, usado dentro das seções */
export function SubHeading({ tone, children }: { tone: Tone; children: ReactNode }) {
  return (
    <h3 className={`font-mono text-xs uppercase tracking-[0.18em] ${TONES[tone].muted}`}>
      {children}
    </h3>
  );
}

/** Lista com marcador dourado */
export function BulletList({ items, tone }: { items: string[]; tone: Tone }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed">
          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-thread" />
          <span className={TONES[tone].muted}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Caixa com borda — base de quase todos os cards */
export function Card({
  tone,
  children,
  className = "",
}: {
  tone: Tone;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border p-6 ${TONES[tone].card} ${className}`}>
      {children}
    </div>
  );
}

/** Iniciais do nome dentro de um círculo (avatar simples) */
export function Avatar({ name, tone }: { name: string; tone: Tone }) {
  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return (
    <span
      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border font-display text-sm font-bold ${TONES[tone].chip}`}
    >
      {initials}
    </span>
  );
}
