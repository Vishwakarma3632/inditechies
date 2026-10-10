import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";

export function IndustriesSection() {
  return (
    <section className="section-space bg-navy-900/60">
      <Container>
        <AnimatedSection>
          <SectionHeading
            eyebrow="Industries"
            title="Where operational software actually lives"
            description="We work in environments with legacy gravity, regulated decisions, and people who cannot pause the week for a transformation program."
          />
        </AnimatedSection>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <AnimatedSection key={industry.name} delay={Math.min(index * 0.04, 0.16)}>
              <article className="h-full rounded-2xl border border-white/8 bg-surface p-6">
                <h3 className="text-lg font-semibold">{industry.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-strong">
                  {industry.body}
                </p>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
