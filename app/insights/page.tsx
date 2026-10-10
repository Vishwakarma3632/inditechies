import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArticleExplorer } from "@/components/content/ArticleExplorer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { insights, insightCategories } from "@/data/insights";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Technology Insights | Inditechies",
  description: "Explore Inditechies perspectives on applied AI, software engineering, cloud platforms, and practical digital transformation.",
  path: "/insights",
});

export default function InsightsPage() {
  const featured = insights.find((article) => article.featured);
  return <main id="main"><PageHero eyebrow="Insights" title="Clear thinking for complicated technology decisions." description="Ideas and perspectives on building useful products, modernizing platforms, applying AI responsibly, and making change last." />
    <section className="section-space"><Container><Breadcrumbs items={[{ name: "Insights", path: "/insights" }]} />{featured ? <Link href={`/insights/${featured.slug}`} className="group mb-12 grid overflow-hidden rounded-3xl border border-white/10 bg-surface md:grid-cols-[1fr_1fr]"><div className="relative min-h-64 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,.45),transparent_40%),linear-gradient(135deg,#08101f,#102c54)] p-8 sm:p-12"><span className="eyebrow">Featured perspective</span><div className="absolute bottom-8 left-8 font-mono text-sm text-cyan-200/70 sm:bottom-12 sm:left-12">IDEAS / {featured.category.toUpperCase()}</div></div><div className="flex flex-col justify-center p-7 sm:p-10"><p className="eyebrow">{featured.category}</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{featured.title}</h2><p className="mt-4 leading-relaxed text-muted-strong">{featured.excerpt}</p><span className="mt-6 font-semibold text-cyan-300 group-hover:text-white">Read insight <span aria-hidden>↗</span></span></div></Link> : null}<ArticleExplorer articles={insights} categories={insightCategories} hrefBase="/insights" searchable pageSize={6} /></Container></section>
  </main>;
}
