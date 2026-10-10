import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectExplorer } from "@/components/projects/ProjectExplorer";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects and case studies",
  description:
    "Illustrative Inditechies case studies across platforms, AI and data, modernization, and experience design. Placeholder work, clearly labeled, until client stories are public.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Work"
        title="Cases written the way the work actually feels"
        description="Until public client stories are available, these engagements are illustrative. They show the shape of problems we take on — not named customers, not invented metrics."
      />
      <section className="section-space">
        <Container>
          <h2 className="sr-only">Filterable project gallery</h2>
          <ProjectExplorer />
        </Container>
      </section>
      <ContactCta />
    </main>
  );
}
