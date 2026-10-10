import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Consulting that still ships",
    body: "The people who shape the architecture stay on the engagement through delivery. Advice has to survive a production constraint.",
  },
  {
    title: "No theatre metrics",
    body: "We will not invent logos, awards, or percentage lifts to look established. Work is shown as methods, trade-offs, and illustrative cases until real clients are public.",
  },
  {
    title: "Change you can operate",
    body: "Enablement is part of done. We design for the team that will own the backlog, the on-call, and the next awkward exception.",
  },
];

export function WhyInditechies() {
  return (
    <section className="section-space">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Why Inditechies"
            title="A studio built for the hard middle of a program"
            description="Kickoffs are easy. The middle — integrations, exceptions, and the first production week — is where partners earn the name."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <AnimatedSection key={reason.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl bg-linear-to-b from-surface to-navy-900 p-7 ring-1 ring-white/8">
                <p className="font-mono text-sm text-cyan-400">0{index + 1}</p>
                <h3 className="mt-4 text-2xl font-semibold">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-strong">{reason.body}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
