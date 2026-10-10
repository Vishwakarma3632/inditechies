import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredInsights } from "@/data/insights";

export function InsightsPreview() {
  return (
    <section className="section-space bg-navy-900/60">
      <Container>
        <AnimatedSection>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Insights"
              title="Thought leadership for people who still have to ship"
              description="Research-minded writing on AI, modernization, platforms, and operating change — distinct from the more tactical notes on our blog."
            />
            <Link href="/insights" className="text-sm font-semibold text-cyan-400 link-underline">
              All insights
            </Link>
          </div>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredInsights.map((article) => (
            <AnimatedSection key={article.slug}>
              <ArticleCard article={article} hrefBase="/insights" />
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
