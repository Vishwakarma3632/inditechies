import type { Project } from "@/types";

export const projectCategories = [
  "Platforms",
  "AI & data",
  "Modernization",
  "Experience",
] as const;

export const projects: Project[] = [
  {
    slug: "clinical-operations-workspace",
    title: "Clinical operations workspace",
    sector: "Healthcare operations",
    category: "Platforms",
    summary:
      "An illustrative build of a shared workspace that replaced fragmented scheduling, notes, and handoff tools for a multi-site care operations team.",
    challenge:
      "Coordinators were stitching together spreadsheets, inboxes, and a legacy scheduling system. Handoffs were slow, and no one had a trustworthy view of capacity.",
    solution:
      "We designed a role-based workspace with a single operational picture: staffing, patient flow signals, and structured handoffs. Integrations wrapped the systems that could not move yet, while the new experience became the system of engagement.",
    outcomes: [
      "Handoffs moved into a structured, auditable flow",
      "Supervisors could see capacity without a side spreadsheet",
      "The legacy scheduler stayed in place until a later replacement wave",
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Event-driven integration"],
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Clinicians reviewing information on a workstation in a care setting",
    featured: true,
    illustrative: true,
  },
  {
    slug: "inventory-signal-platform",
    title: "Inventory signal platform",
    sector: "Retail operations",
    category: "AI & data",
    summary:
      "A placeholder case for turning noisy store and warehouse signals into a daily inventory picture merchants could act on.",
    challenge:
      "Store, warehouse, and supplier data disagreed. Merchants made allocation decisions with yesterday’s numbers and tribal knowledge.",
    solution:
      "We modeled a shared inventory fact layer, built exception queues for the decisions that actually needed a person, and added lightweight forecasting only where it improved a known allocation step.",
    outcomes: [
      "A single operational definition of on-hand and in-transit",
      "Exception-led work instead of dashboard tourism",
      "Forecasting scoped to a real allocation decision, not a generic model demo",
    ],
    technologies: ["Python", "dbt", "Warehouse", "React"],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Warehouse aisles with pallet racking and inventory",
    featured: true,
    illustrative: true,
  },
  {
    slug: "freight-visibility-console",
    title: "Freight visibility console",
    sector: "Logistics",
    category: "Platforms",
    summary:
      "An illustrative control tower for a regional shipper that needed exception management more than another map.",
    challenge:
      "Status updates arrived in email, portals, and carrier APIs. Planners spent the morning reconstructing what had already happened.",
    solution:
      "We built a console that normalized carrier events, highlighted exceptions against promised windows, and gave planners a guided next action instead of a wall of pins.",
    outcomes: [
      "Planners started the day from exceptions, not inboxes",
      "Customer updates used the same event stream as operations",
      "Carrier-specific quirks were isolated behind a stable event model",
    ],
    technologies: ["TypeScript", "Kafka-style events", "Maps", "Next.js"],
    image:
      "https://images.unsplash.com/photo-1586528116493-c4abcdb3b4b1?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Shipping containers at a logistics yard",
    featured: true,
    illustrative: true,
  },
  {
    slug: "policy-admin-strangler",
    title: "Policy administration strangler",
    sector: "Financial services",
    category: "Modernization",
    summary:
      "A staged modernization of a sealed policy administration core, starting with APIs and a new servicing experience.",
    challenge:
      "The core system still ran the book of business, but every product change required a specialist and a freeze. Customer servicing lived in green screens and workarounds.",
    solution:
      "We introduced an API layer, captured servicing journeys in a new web experience, and moved one product line at a time. Automated characterization tests protected behavior that was never documented.",
    outcomes: [
      "Servicing staff left the terminal for the highest-volume journeys",
      "Product changes no longer required a full-core release",
      "The organization kept the core running while it earned the right to replace it",
    ],
    technologies: ["Java", "API gateway", "Contract tests", "React"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Documents and a calculator on a desk in a financial operations setting",
    featured: false,
    illustrative: true,
  },
  {
    slug: "plant-quality-insights",
    title: "Plant quality insights",
    sector: "Manufacturing",
    category: "AI & data",
    summary:
      "A placeholder engagement connecting line signals to a quality review ritual that already existed on the shop floor.",
    challenge:
      "Quality reviews happened, but the evidence lived in machine logs, paper, and a historian that only a few people could query.",
    solution:
      "We built a daily quality pack from existing sensors and inspections, with drift alerts that matched the language of the plant — not a generic ML score.",
    outcomes: [
      "Reviews started from a shared pack instead of reconstructed charts",
      "Alerts were tuned to the process, then owned by quality engineering",
      "No model was introduced until the baseline reporting was trusted",
    ],
    technologies: ["Time-series store", "Python", "Dashboards", "Edge collection"],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Engineer working with industrial equipment in a manufacturing environment",
    featured: false,
    illustrative: true,
  },
  {
    slug: "citizen-service-portal",
    title: "Citizen service portal",
    sector: "Public services",
    category: "Experience",
    summary:
      "An illustrative multi-service portal that reduced form repetition and made case status visible without a phone call.",
    challenge:
      "Residents re-entered the same details across programs. Status questions filled the call center because the back office systems never surfaced progress.",
    solution:
      "We designed a shared identity and case layer, rebuilt the highest-volume journeys, and published status from systems of record rather than inventing a parallel tracker.",
    outcomes: [
      "Residents could see progress on the journeys that generated the most calls",
      "Case workers received structured intake instead of PDFs",
      "Accessibility and plain language were treated as launch criteria",
    ],
    technologies: ["Next.js", "Design system", "Identity", "Integration layer"],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Person completing a digital form at a desk",
    featured: false,
    illustrative: true,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
