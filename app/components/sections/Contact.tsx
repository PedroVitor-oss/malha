import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import type { CtaLink, SiteConfig } from "../../config/types";

function ChannelIcon({ kind }: { kind: "whatsapp" | "phone" | "email" | "instagram" }) {
  const common = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none" } as const;
  switch (kind) {
    case "whatsapp":
      return (
        <svg {...common}>
          <path
            d="M17 14.5c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.48-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.45s1.06 2.85 1.2 3.05c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"
            fill="currentColor"
          />
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 1.87.51 3.63 1.4 5.13L2 22l4.99-1.36A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M6.6 10.2c1.2 2.4 3.1 4.3 5.5 5.5l1.9-1.9c.25-.25.6-.33.9-.2 1 .34 2.1.52 3.2.52.5 0 .9.4.9.9v3.1c0 .5-.4.9-.9.9C9.9 19 5 14.1 5 8.5c0-.5.4-.9.9-.9h3.1c.5 0 .9.4.9.9 0 1.1.18 2.2.52 3.2.13.3.05.65-.2.9l-1.6 1.6z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
        </svg>
      );
  }
}

function ChannelCard({
  kind,
  label,
  link,
}: {
  kind: "whatsapp" | "phone" | "email" | "instagram";
  label: string;
  link: CtaLink;
}) {
  return (
    <a
      href={link.href}
      target={kind === "whatsapp" || kind === "instagram" ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-paper-line bg-paper-soft p-6 transition-colors hover:border-thread/50"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-graphite text-cream transition-colors group-hover:bg-thread group-hover:text-graphite">
        <ChannelIcon kind={kind} />
      </span>
      <span>
        <span className="block font-mono text-[11px] uppercase tracking-wide text-stone">
          {label}
        </span>
        <span className="block break-words font-display text-base font-semibold text-graphite">
          {link.label}
        </span>
      </span>
    </a>
  );
}

export function Contact({ config }: { config: SiteConfig }) {
  const { contact } = config;

  return (
    <section id="contato" className="bg-paper py-24 text-graphite md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-stone">
                {contact.eyebrow}
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {contact.heading}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-stone">
                {contact.paragraph}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-8 font-mono text-xs uppercase tracking-wide text-stone">
                {contact.location}
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <ChannelCard kind="whatsapp" label="WhatsApp" link={contact.whatsapp} />
            </Reveal>
            <Reveal delay={0.1}>
              <ChannelCard kind="phone" label="Telefone" link={contact.phone} />
            </Reveal>
            <Reveal delay={0.15}>
              <ChannelCard kind="email" label="E-mail" link={contact.email} />
            </Reveal>
            <Reveal delay={0.2}>
              <ChannelCard kind="instagram" label="Instagram" link={contact.instagram} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
