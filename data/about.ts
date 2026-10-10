import type { TeamSeat } from "@/types";

export const values = [
  {
    title: "Clarity over theatre",
    body: "We would rather name a constraint than decorate a roadmap. Status is a description of reality, not a performance.",
  },
  {
    title: "Craft in production",
    body: "Quality shows up in incidents, accessibility, and the second year of a codebase. We design for that, not the launch screenshot.",
  },
  {
    title: "Partnership with an end",
    body: "A good engagement makes the client team stronger. We do not optimize for perpetual dependency.",
  },
  {
    title: "Curiosity with a deadline",
    body: "We explore, then we choose. Discovery is time-boxed so delivery can start with a decision, not a mural.",
  },
];

export const approach = [
  {
    title: "Frame the outcome",
    body: "What decision, journey, or operational risk are we changing? If we cannot name it, we do not start building.",
  },
  {
    title: "Sequence the slices",
    body: "Architecture follows a path of working increments. Big-bang replacements are a last resort, not a default.",
  },
  {
    title: "Instrument the path",
    body: "Telemetry, evaluation, and accessibility are launch criteria. They are not a later workstream.",
  },
  {
    title: "Hand over the keys",
    body: "Documentation, pairing, and a backlog the client can own. Done means operable.",
  },
];

export const teamSeats: TeamSeat[] = [
  { role: "Engineering leadership", focus: "Architecture, standards, and the hard parts of delivery." },
  { role: "Applied AI", focus: "Evaluation, workflow design, and model-backed features that operations can supervise." },
  { role: "Cloud and platforms", focus: "Paved paths, reliability, and cost-aware environments." },
  { role: "Product design", focus: "Journeys, systems, and accessibility for tools people use every day." },
  { role: "Delivery", focus: "Sequencing, risk, and the conversations that keep a program honest." },
  { role: "Data products", focus: "Definitions, pipelines, and decision tools that agree with each other." },
];
