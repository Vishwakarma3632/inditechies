import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProjects } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="section-space">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Illustrative cases, ready to be replaced with yours"
              description="These stories are placeholders for the kind of operational problems we take on. They are not client endorsements or claimed results."
            />
            <Link href="/projects" className="text-sm font-semibold text-cyan-400 link-underline">
              Browse all cases
            </Link>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <AnimatedSection key={project.slug}>
              <ProjectCard project={project} featured />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
