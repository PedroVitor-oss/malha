export interface CtaLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  company: {
    name: string;
    fullName: string;
    city: string;
    foundedYear: string;
    slogan: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    paragraph: string;
    primaryCta: CtaLink;
    secondaryCta: CtaLink;
  };
  whatWeDo: {
    eyebrow: string;
    slogan: string;
    paragraph: string;
    pillars: { title: string; description: string }[];
  };
  stats: { value: string; label: string }[];
  works: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    items: {
      tag: string;
      category: string;
      segment: string;
      title: string;
      description: string;
    }[];
  };
  technologies: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    items: { name: string; description: string }[];
  };
  clients: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    segments: { name: string; description: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    paragraph: string;
    whatsapp: CtaLink;
    phone: CtaLink;
    email: CtaLink;
    instagram: CtaLink;
    location: string;
  };
}
