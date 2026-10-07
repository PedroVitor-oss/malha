import { Container } from "./ui/Container";
import type { SiteConfig } from "../config/types";

const LINKS = [
  { label: "O que fazemos", href: "#o-que-fazemos" },
  { label: "Trabalhos", href: "#trabalhos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Clientes", href: "#clientes" },
];

export function Nav({ config }: { config: SiteConfig }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#topo"
          className="font-display text-lg font-bold tracking-tight text-cream"
        >
          {config.company.name}
          <span className="text-thread">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-fog transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="rounded-full border border-thread/60 px-4 py-2 font-mono text-xs uppercase tracking-wide text-thread transition-colors hover:bg-thread hover:text-ink"
        >
          Contato
        </a>
      </Container>
    </header>
  );
}
