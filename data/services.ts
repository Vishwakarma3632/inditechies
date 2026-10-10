import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    tagline: "Software that becomes part of how the business runs.",
    summary:
      "We design and build systems around your operating model — not a generic product catalog.",
    description:
      "Inditechies engineers custom applications when off-the-shelf tools create workarounds instead of leverage. We start with the workflow, constraints, and people who will live in the software, then deliver maintainable systems that can evolve with the business.",
    capabilities: [
      "Domain modeling and product discovery",
      "Modular backend and API design",
      "Web, mobile, and internal platforms",
      "Quality engineering and release discipline",
      "Handover, documentation, and enablement",
    ],
    outcomes: [
      "Fewer operational workarounds",
      "Clearer ownership of the codebase",
      "A product teams can extend without a rewrite",
    ],
    icon: "code",
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    tagline: "Fast, accessible product experiences on the web.",
    summary:
      "Customer and employee applications that are performant, secure, and designed for real usage — not demo-day screens.",
    description:
      "From customer portals to operational consoles, we build web applications with a focus on Core Web Vitals, accessibility, and maintainable front-end architecture. The aim is software people can use under pressure, on ordinary devices, without a training manual.",
    capabilities: [
      "Next.js and modern React architectures",
      "Design systems and component libraries",
      "Authentication, roles, and secure sessions",
      "Performance and accessibility engineering",
      "Progressive delivery of complex UIs",
    ],
    outcomes: [
      "Interfaces that stay usable as features grow",
      "Lower support burden from clearer flows",
      "A front-end foundation teams can keep shipping on",
    ],
    icon: "globe",
  },
  {
    slug: "ai-intelligent-automation",
    title: "AI and Intelligent Automation",
    tagline: "Applied intelligence inside the work, not beside it.",
    summary:
      "We put models and automation where decisions and handoffs already happen — with evaluation, human review, and operational guardrails.",
    description:
      "Inditechies helps teams adopt AI as a production capability. That means choosing the right problem, grounding models in your data and process, and measuring quality before scale. We avoid theatre: if a simpler workflow change is better than a model, we will say so.",
    capabilities: [
      "Use-case discovery and feasibility review",
      "Retrieval, copilots, and workflow automation",
      "Evaluation, monitoring, and human-in-the-loop design",
      "Data readiness and prompt/system architecture",
      "Responsible rollout and change management",
    ],
    outcomes: [
      "Automation that reduces toil without hiding risk",
      "Clearer quality bars for model-assisted work",
      "A path from prototype to something operations can own",
    ],
    icon: "brain",
  },
  {
    slug: "cloud-engineering-devops",
    title: "Cloud Engineering and DevOps",
    tagline: "Platforms that are boring in the best way: reliable and explainable.",
    summary:
      "We build and operate cloud foundations with observability, cost awareness, and delivery pipelines teams can trust.",
    description:
      "Cloud work at Inditechies is about making change safe. We help you land on architectures that match your risk profile, then put pipelines, environments, and telemetry in place so production is not a surprise. Cost, security, and developer experience are treated as product requirements.",
    capabilities: [
      "Landing zones and environment strategy",
      "Infrastructure as code",
      "CI/CD and release automation",
      "Observability, incident readiness, and FinOps hygiene",
      "Container platforms and managed services",
    ],
    outcomes: [
      "Releases that are repeatable instead of heroic",
      "Clearer cost and reliability signals",
      "A platform developers can use without tribal knowledge",
    ],
    icon: "cloud",
  },
  {
    slug: "data-engineering-analytics",
    title: "Data Engineering and Analytics",
    tagline: "Trusted data products, not another unowned dashboard.",
    summary:
      "Pipelines, models, and decision tools designed so the numbers mean the same thing in every meeting.",
    description:
      "We help organizations turn fragmented data into products that operations, finance, and product teams can rely on. That includes modeling, quality checks, and the last mile: how people actually ask questions and act on answers.",
    capabilities: [
      "Ingestion, modeling, and warehouse/lakehouse design",
      "Metrics definitions and semantic layers",
      "Analytics applications and operational reporting",
      "Data quality and lineage practices",
      "Self-serve enablement with guardrails",
    ],
    outcomes: [
      "Fewer conflicting versions of the same metric",
      "Faster, more defensible operational decisions",
      "A data estate that can support AI later without a reset",
    ],
    icon: "database",
  },
  {
    slug: "ui-ux-digital-product-engineering",
    title: "UI/UX and Digital Product Engineering",
    tagline: "Product design that survives contact with operations.",
    summary:
      "Research, interface design, and front-end engineering as one practice — so the experience you sketch is the one you ship.",
    description:
      "Inditechies pairs product design with engineering so journeys, accessibility, and edge cases are designed into the system. We work especially well on tools used every day: portals, consoles, and service experiences where friction is expensive.",
    capabilities: [
      "Discovery, journey mapping, and service design",
      "Interaction design and design systems",
      "Prototype-to-production engineering",
      "Accessibility and inclusive design reviews",
      "Usability testing with real workflows",
    ],
    outcomes: [
      "Fewer dropped tasks in critical journeys",
      "A shared language between design and engineering",
      "Interfaces that stay coherent as the product grows",
    ],
    icon: "palette",
  },
  {
    slug: "enterprise-application-modernization",
    title: "Enterprise Application Modernization",
    tagline: "Evolve the systems you cannot pause.",
    summary:
      "We modernize legacy applications in slices — reducing risk while restoring the ability to change.",
    description:
      "Most enterprises cannot replace core systems in a single program. We help you strangle complexity: APIs around sealed cores, modular replacements, improved delivery, and a sequence that protects revenue and operations. Modernization is treated as a product roadmap, not a big-bang event.",
    capabilities: [
      "Architecture assessment and sequencing",
      "API layers and integration strategy",
      "Incremental rewrite and strangler patterns",
      "Test harnesses around legacy behavior",
      "Cloud migration of application workloads",
    ],
    outcomes: [
      "Change that no longer requires a freeze",
      "Reduced operational risk around aging stacks",
      "A realistic path off technology that has stopped paying for itself",
    ],
    icon: "refresh",
  },
  {
    slug: "technology-consulting",
    title: "Technology Consulting",
    tagline: "Advice that remains true after the workshop ends.",
    summary:
      "Architecture, delivery, and investment decisions with people who also build and ship.",
    description:
      "Inditechies consulting is grounded in delivery. We help leadership choose what to build, what to buy, how to sequence work, and how to measure progress without vanity dashboards. Recommendations come with trade-offs, operating implications, and a path into execution.",
    capabilities: [
      "Technology strategy and investment framing",
      "Architecture and build-vs-buy decisions",
      "Delivery operating models",
      "Vendor and platform evaluation",
      "Executive and engineering facilitation",
    ],
    outcomes: [
      "Decisions that survive the first production constraint",
      "Shared language between business and engineering",
      "A backlog that maps to outcomes, not activity",
    ],
    icon: "compass",
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
