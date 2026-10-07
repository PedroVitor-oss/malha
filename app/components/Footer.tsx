import { Container } from "./ui/Container";
import { Stitch } from "./ui/Stitch";
import type { SiteConfig } from "../config/types";

export function Footer({ config }: { config: SiteConfig }) {
  const { company } = config;

  return (
    <footer className="bg-paper pb-10 pt-2 text-graphite">
      <Container>
        <Stitch />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="font-display text-sm font-semibold">
            {company.name}
            <span className="text-thread">.</span>{" "}
            <span className="font-sans font-normal text-stone">
              {company.slogan}
            </span>
          </p>
          <p className="font-mono text-xs text-stone">
            © {new Date().getFullYear()} {company.fullName} — {company.city}
          </p>
        </div>
      </Container>
    </footer>
  );
}
