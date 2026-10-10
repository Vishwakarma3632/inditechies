import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { ArticleExplorer } from "@/components/content/ArticleExplorer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { blogCategories, blogPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Blog | Inditechies Engineering Notes",
  description: "Practical engineering notes, tutorials, company updates, and delivery lessons from the Inditechies team.",
  path: "/blog",
});

export default function BlogPage() {
  const featured = blogPosts.find((article) => article.featured);
  return <main id="main"><PageHero eyebrow="The Inditechies blog" title="Notes from the workbench." description="Practical lessons, engineering patterns, company updates, and small ideas that make digital work better." />
    <section className="section-space"><Container><Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />{featured ? <Link href={`/blog/${featured.slug}`} className="group mb-12 grid overflow-hidden rounded-3xl border border-white/10 bg-surface md:grid-cols-[1fr_1fr]"><div className="relative min-h-64 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,.45),transparent_40%),linear-gradient(135deg,#08101f,#102c54)] p-8 sm:p-12"><span className="eyebrow">Featured article</span><div className="absolute bottom-8 left-8 font-mono text-sm text-cyan-200/70 sm:bottom-12 sm:left-12">FIELD NOTES / INDITECHIES</div></div><div className="flex flex-col justify-center p-7 sm:p-10"><p className="eyebrow">{featured.category}</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">{featured.title}</h2><p className="mt-4 leading-relaxed text-muted-strong">{featured.excerpt}</p><span className="mt-6 font-semibold text-cyan-300 group-hover:text-white">Read article <span aria-hidden>↗</span></span></div></Link> : null}<ArticleExplorer articles={blogPosts} categories={blogCategories} hrefBase="/blog" searchable pageSize={6} /></Container></section>
  </main>;
}
