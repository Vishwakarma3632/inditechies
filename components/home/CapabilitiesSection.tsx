import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/capabilities";

export function CapabilitiesSection() {
  return (
    <section className="section-space bg-navy-900/60">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Capabilities"
            title="The stack behind the promise"
            description="We are opinionated about the conditions of change: architecture, evaluation, paved paths, and design systems that survive a new squad."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item, index) => (
            <AnimatedSection key={item.title} delay={Math.min(index * 0.04, 0.16)}>
              <article className="h-full rounded-2xl border border-white/8 bg-surface p-6">
                <div className="flex size-11 items-center justify-center rounded-full bg-white/5 text-cyan-400">
                  <Icon name={item.icon} />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-strong">{item.body}</p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
