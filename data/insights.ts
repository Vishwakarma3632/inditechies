import type { Article } from "@/types";

export const insightCategories = [
  "Applied AI",
  "Software engineering",
  "Cloud",
  "Digital transformation",
] as const;

export const insights: Article[] = [
  {
    slug: "ai-that-survives-the-operating-review",
    title: "AI that survives the operating review",
    excerpt:
      "Most AI programs stall when they meet a real workflow. The difference is evaluation, ownership, and a narrower definition of success.",
    category: "Applied AI",
    tags: ["AI", "Operations", "Governance"],
    author: "Inditechies Insights",
    authorRole: "Thought leadership",
    publishedAt: "2026-08-12",
    coverImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Abstract visualization suggesting neural or data patterns",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "The first demo of a language model in a business process is usually impressive. The third month is usually quieter. Work that looked automatable turns out to be a negotiation between policy, exception handling, and the person who still has to sign the outcome.",
      },
      {
        type: "heading",
        text: "Start from the decision, not the model",
      },
      {
        type: "paragraph",
        text: "Useful AI work begins with a decision that already happens: a claim routed, a case summarized, a replenishment exception raised. If you cannot name the decision, the owner, and the cost of being wrong, you do not have a use case. You have a lab.",
      },
      {
        type: "list",
        items: [
          "Who is accountable for the output on a bad day?",
          "What evidence would convince operations the quality bar is real?",
          "What happens when the model abstains?",
        ],
      },
      {
        type: "heading",
        text: "Evaluation is the product",
      },
      {
        type: "paragraph",
        text: "A prompt is not a specification. Teams that last put a labeled set, a review ritual, and a rollback path in place before they celebrate latency charts. That work is unglamorous and is the reason a pilot can become a supervised capability instead of a slide in last quarter’s innovation review.",
      },
      {
        type: "paragraph",
        text: "Inditechies treats applied AI as software engineering with extra failure modes. The model is a component. The workflow, data contracts, and human review are the system.",
      },
    ],
  },
  {
    slug: "modernization-without-the-freeze",
    title: "Modernization without the freeze",
    excerpt:
      "Replacing a core system in one program is a comforting story. Sequencing change around the journeys that hurt is usually the cheaper one.",
    category: "Digital transformation",
    tags: ["Legacy", "Architecture", "Delivery"],
    author: "Inditechies Insights",
    authorRole: "Thought leadership",
    publishedAt: "2026-06-03",
    coverImage:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Engineering team collaborating around screens in an office",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Core systems accumulate meaning. They hold the exceptions, the year-end rituals, and the knowledge that never made it into a wiki. A freeze-and-replace program treats that meaning as delay. It is actually the work.",
      },
      {
        type: "heading",
        text: "Strangle what customers feel first",
      },
      {
        type: "paragraph",
        text: "The journeys that generate calls, rework, or regulatory friction are the right leading edge. Wrap the core, publish a stable contract, and move one experience at a time. Characterization tests are not optional: they are how you discover the behavior nobody wrote down.",
      },
      {
        type: "paragraph",
        text: "This is slower to announce and faster to de-risk. It also leaves the organization with an integration habit it will need anyway, even after the core is gone.",
      },
    ],
  },
  {
    slug: "platforms-as-products-not-tickets",
    title: "Cloud platforms as products, not ticket queues",
    excerpt:
      "Internal platforms fail when they optimize for control instead of time-to-safe-change. Treat developers as customers with a backlog.",
    category: "Cloud",
    tags: ["DevOps", "Platform", "FinOps"],
    author: "Inditechies Insights",
    authorRole: "Thought leadership",
    publishedAt: "2026-04-21",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Earth with city lights seen from orbit",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "A landing zone that takes six weeks and a three-form request is not a foundation. It is a toll booth. Teams will go around it, and you will rediscover shadow IT with better YAML.",
      },
      {
        type: "heading",
        text: "Make the golden path the easy path",
      },
      {
        type: "paragraph",
        text: "Golden paths work when they encode the security and cost decisions you actually care about, then get out of the way. Observability, identity, and environments should be default. Exceptions should be visible, not folkloric.",
      },
      {
        type: "list",
        items: [
          "Measure time from intent to a production-like environment",
          "Publish cost and reliability with the same cadence as feature work",
          "Staff the platform like a product: discovery, roadmap, and a support model that does not shame the user",
        ],
      },
    ],
  },
  {
    slug: "software-that-compounds",
    title: "Software that compounds",
    excerpt:
      "The useful question is not whether a system is modern. It is whether the next change is cheaper than the last one.",
    category: "Software engineering",
    tags: ["Architecture", "Quality", "Teams"],
    author: "Inditechies Insights",
    authorRole: "Thought leadership",
    publishedAt: "2026-02-18",
    coverImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Close-up of a circuit board",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Organizations talk about digital transformation as a destination. Engineering experiences it as a slope. Each release either adds options or adds ceremony. Architecture is the practice of keeping the slope in your favor.",
      },
      {
        type: "paragraph",
        text: "Modular boundaries, tests that encode meaning, and a design system that survives a new squad are not aesthetic choices. They are how a company keeps the right to change its mind.",
      },
      {
        type: "heading",
        text: "Compounding is a management object",
      },
      {
        type: "paragraph",
        text: "If leadership only funds features, the slope turns. If they also fund the conditions of change — telemetry, paved paths, documentation that is true — software starts to pay interest. That is a more honest North Star than a stack logo.",
      },
    ],
  },
  {
    slug: "transformation-is-an-operating-change",
    title: "Transformation is an operating change",
    excerpt:
      "Buying a platform does not transform a company. Changing who decides, who ships, and what gets measured does.",
    category: "Digital transformation",
    tags: ["Operating model", "Leadership"],
    author: "Inditechies Insights",
    authorRole: "Thought leadership",
    publishedAt: "2025-12-09",
    coverImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Team discussion around a table in a bright office",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Technology programs often fail at the handshake between a steering committee and a backlog. The committee wants outcomes. The backlog is a list of systems. Nobody owns the translation, so vendors fill the gap with a target architecture that never meets a Tuesday.",
      },
      {
        type: "paragraph",
        text: "A more durable pattern is to pick a few operational outcomes, staff a team that can reach production, and make architecture a consequence of those slices. The roadmap becomes a sequence of working changes, not a mural.",
      },
    ],
  },
];

export function getInsight(slug: string) {
  return insights.find((article) => article.slug === slug);
}

export const featuredInsights = insights.filter((article) => article.featured);
