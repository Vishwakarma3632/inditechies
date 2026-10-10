import type { IconName } from "@/types";

export const capabilities: Array<{
  title: string;
  body: string;
  icon: IconName;
}> = [
  {
    title: "Product engineering",
    body: "Full-stack delivery with a bias toward maintainable architecture and measurable user journeys.",
    icon: "code",
  },
  {
    title: "Applied AI",
    body: "Models and automation inside existing workflows, with evaluation and human review designed in.",
    icon: "brain",
  },
  {
    title: "Cloud platforms",
    body: "Environments, pipelines, and telemetry that make production change a normal Tuesday.",
    icon: "cloud",
  },
  {
    title: "Data products",
    body: "Definitions, pipelines, and decision tools that agree with each other in the room that matters.",
    icon: "database",
  },
  {
    title: "Experience systems",
    body: "Design and front-end engineering as one practice, including accessibility as a launch bar.",
    icon: "palette",
  },
  {
    title: "Modernization",
    body: "Strangler paths, APIs, and test harnesses for systems you cannot pause.",
    icon: "refresh",
  },
];
