import { motion } from "motion/react";
import { Container } from "../ui/Container";
import { Mesh } from "../ui/Mesh";
import type { SiteConfig } from "../../config/types";

export function Hero({ config }: { config: SiteConfig }) {
  const { hero, company } = config;

  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center overflow-hidden bg-ink pt-16"
    >
      {/* signature element: the mesh of tools, anchored to the right */}
      <div className="pointer-events-none absolute -right-24 top-1/2 hidden w-[640px] -translate-y-1/2 opacity-70 md:block lg:right-0">
        <Mesh className="w-full" />
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 40%, rgba(227,162,61,0.08), transparent)",
        }}
      />

      <Container className="relative py-28">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-thread"
          >
            {hero.eyebrow} · {company.city}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-fog"
          >
            {hero.paragraph}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.34, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-thread px-6 py-3 font-mono text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="rounded-full border border-white/20 px-6 py-3 font-mono text-sm text-cream transition-colors hover:border-white/40"
            >
              {hero.secondaryCta.label}
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
