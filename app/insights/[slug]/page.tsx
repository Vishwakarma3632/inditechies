import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/ui/ArticleBody";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { ShareLinks } from "@/components/content/ShareLinks";
import { insights, getInsight } from "@/data/insights";
import { createMetadata } from "@/lib/seo";
import { articleJsonLd } from "@/lib/structured-data";
import { formatDate, readingTime } from "@/lib/utils";

export function generateStaticParams() { return insights.map((article) => ({ slug: article.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) return { title: "Insight not found" };
  return createMetadata({ title: article.title, description: article.excerpt, path: `/insights/${article.slug}`, type: "article", publishedTime: article.publishedAt, image: article.coverImage });
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getInsight(slug);
  if (!article) notFound();
  const related = insights.filter((item) => item.slug !== article.slug && item.category === article.category).slice(0, 3);
  const relatedArticles = related.length ? related : insights.filter((item) => item.slug !== article.slug).slice(0, 3);
  return <main id="main"><section className="border-b border-white/8 bg-surface/30 pt-28 pb-12 sm:pt-36 sm:pb-16"><Container><Breadcrumbs items={[{ name: "Insights", path: "/insights" }, { name: article.title, path: `/insights/${article.slug}` }]} /><div className="mx-auto max-w-3xl"><p className="eyebrow">{article.category} · {formatDate(article.publishedAt)}</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">{article.title}</h1><p className="mt-5 text-lg leading-relaxed text-muted-strong">{article.excerpt}</p><div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted"><span>{article.author}</span><span aria-hidden>•</span><span>{readingTime(article.content)} min read</span></div></div></Container></section>
    <Container className="py-10 sm:py-14"><JsonLd data={articleJsonLd({ title: article.title, description: article.excerpt, path: `/insights/${article.slug}`, publishedAt: article.publishedAt, author: article.author, image: article.coverImage })} /><div className="mx-auto max-w-4xl"><div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-3xl border border-white/10 bg-surface"><Image src={article.coverImage} alt={article.coverAlt} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" /></div><div className="mx-auto max-w-3xl"><ArticleBody content={article.content} /><div className="mt-10 border-t border-white/10 pt-6"><p className="mb-3 text-sm font-semibold">Share this insight</p><ShareLinks title={article.title} path={`/insights/${article.slug}`} /></div></div></div></Container>
    <section className="border-t border-white/8 bg-surface/25 section-space"><Container><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="eyebrow">Explore more</p><h2 className="mt-3 text-3xl font-semibold">More perspectives</h2></div><Link href="/insights" className="text-sm font-semibold text-cyan-300 hover:text-white">All insights ↗</Link></div><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{relatedArticles.map((item) => <ArticleCard key={item.slug} article={item} hrefBase="/insights" />)}</div></Container></section>
  </main>;
}
