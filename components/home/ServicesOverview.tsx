import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section className="section-space">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Engineering, intelligence, and platforms with a business constraint"
              description="Eight practices, one studio. We staff the work as a single conversation between consulting and delivery."
            />
            <Link
              href="/services"
              className="text-sm font-semibold text-cyan-400 link-underline"
            >
              View all services
            </Link>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <AnimatedSection key={service.slug} delay={Math.min(index * 0.05, 0.2)}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
