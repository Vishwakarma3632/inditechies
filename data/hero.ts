export const heroSlides = [
  {
    id: "engineering",
    eyebrow: "Software engineering",
    title: "Build systems that become an operating advantage",
    description:
      "Custom platforms and product engineering for teams who need software that can still change next year.",
    cta: { href: "/services", label: "Explore services" },
    image: "/coming-soon-bg.png",
    imageAlt: "Deep-space visual used as the Inditechies brand atmosphere",
    local: true,
  },
  {
    id: "ai",
    eyebrow: "Applied AI",
    title: "Put intelligence inside the work, not beside it",
    description:
      "Automation and copilots designed around real decisions, with evaluation and human review from day one.",
    cta: { href: "/insights", label: "Read insights" },
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Abstract visualization of connected data and models",
    local: false,
  },
  {
    id: "cloud",
    eyebrow: "Cloud and platforms",
    title: "Make production change feel ordinary",
    description:
      "Landing zones, pipelines, and observability so delivery is repeatable — and cost and reliability stay visible.",
    cta: { href: "/projects", label: "See illustrative work" },
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Earth from orbit with atmospheric glow",
    local: false,
  },
  {
    id: "partner",
    eyebrow: "Consulting that stays",
    title: "A technology partner through the hard middle",
    description:
      "Architecture, sequencing, and delivery from people who still write the software — not a handoff after the workshop.",
    cta: { href: "/contact", label: "Start a conversation" },
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1920&q=80",
    imageAlt: "Collaborative working session around a table",
    local: false,
  },
] as const;
