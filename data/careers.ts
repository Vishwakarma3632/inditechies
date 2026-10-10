import type { Job } from "@/types";

export const workingPrinciples = [
  {
    title: "Delivery is the argument",
    body: "We prefer working software, clear trade-offs, and honest status over slideware. Advice has to survive contact with production.",
  },
  {
    title: "Own the boring path",
    body: "Reliability, accessibility, documentation, and operability are part of the craft. They are not a later workstream.",
  },
  {
    title: "Stay close to the work",
    body: "Consultants and engineers sit with the problem. We do not throw designs over a wall and disappear at the first constraint.",
  },
  {
    title: "Leave the client stronger",
    body: "A good engagement ends with a team that can keep shipping. Enablement is a delivery outcome, not a workshop souvenir.",
  },
];

export const benefits = [
  {
    title: "Craft time",
    body: "Space to deepen a specialty — architecture, product engineering, data, or applied AI — without abandoning delivery.",
  },
  {
    title: "Small, senior pods",
    body: "We staff teams that can talk to a CIO and still open a pull request. You will not be a slide in someone else’s pyramid.",
  },
  {
    title: "Honest scope",
    body: "We would rather renegotiate a timeline than quietly burn people. Sustainable delivery is a quality practice.",
  },
  {
    title: "Learning in public",
    body: "Write, review, and teach. Insights and internal guilds are how we keep standards from living in one person’s head.",
  },
];

export const jobs: Job[] = [
  {
    slug: "principal-software-engineer",
    title: "Principal software engineer",
    team: "Engineering",
    location: "Remote / hybrid",
    type: "Full-time",
    summary:
      "Lead design and delivery of custom platforms. You will pair with clients, set engineering standards, and still write the hard parts.",
    responsibilities: [
      "Shape architecture for new products and modernization programs",
      "Coach engineers through design reviews and production incidents",
      "Turn ambiguous business constraints into a sequenced technical plan",
    ],
    requirements: [
      "Deep experience shipping production systems in TypeScript, JVM, or equivalent",
      "Comfort facilitating technical decisions with non-engineering stakeholders",
      "Evidence of leaving teams with better practices than you found",
    ],
  },
  {
    slug: "applied-ai-engineer",
    title: "Applied AI engineer",
    team: "AI & data",
    location: "Remote / hybrid",
    type: "Full-time",
    summary:
      "Take language models and automation from a promising notebook to a workflow people can supervise.",
    responsibilities: [
      "Design evaluation harnesses before you scale a model-backed feature",
      "Integrate retrieval, tools, and human review into existing systems",
      "Be the person who says no when a chatbot is the wrong intervention",
    ],
    requirements: [
      "Production experience with LLM applications or classical ML in operations",
      "Ability to explain failure modes to delivery and risk stakeholders",
      "Strong software engineering fundamentals — this is not a research-only seat",
    ],
  },
  {
    slug: "cloud-platform-engineer",
    title: "Cloud platform engineer",
    team: "Cloud & platforms",
    location: "Remote / hybrid",
    type: "Full-time",
    summary:
      "Build landing zones, pipelines, and observability that make change feel ordinary.",
    responsibilities: [
      "Design environment strategy and infrastructure as code",
      "Improve developer experience without weakening security baselines",
      "Help clients see cost, reliability, and delivery as one conversation",
    ],
    requirements: [
      "Hands-on experience with a major cloud and modern CI/CD",
      "Opinionated, kind approach to platform product thinking",
      "Comfort debugging production from traces, not folklore",
    ],
  },
  {
    slug: "product-designer",
    title: "Product designer",
    team: "Experience",
    location: "Remote / hybrid",
    type: "Full-time",
    summary:
      "Design operational and customer products that stay coherent once engineering starts.",
    responsibilities: [
      "Map journeys with the people who actually do the work",
      "Build and maintain design systems with engineering partners",
      "Treat accessibility and empty states as first-class design problems",
    ],
    requirements: [
      "A portfolio of shipped product work, not only concept decks",
      "Ability to facilitate workshops and still specify edge cases",
      "Comfort collaborating in Figma and in the codebase’s component layer",
    ],
  },
  {
    slug: "delivery-lead",
    title: "Delivery lead",
    team: "Delivery",
    location: "Remote / hybrid",
    type: "Contract",
    summary:
      "Hold the shape of an engagement: outcomes, sequencing, quality, and the conversations that keep a program honest.",
    responsibilities: [
      "Translate a charter into a backlog that can actually be delivered",
      "Surface risk early, in language executives and engineers both trust",
      "Protect engineering time from ceremonial process",
    ],
    requirements: [
      "Track record leading software programs in regulated or operationally heavy domains",
      "Facilitation skills that reduce meetings, not multiply them",
      "Enough technical literacy to challenge a plan without pretending to be the architect",
    ],
  },
];

export const jobTeams = [...new Set(jobs.map((job) => job.team))];

export function getJob(slug: string) {
  return jobs.find((job) => job.slug === slug);
}
