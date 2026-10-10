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
import { blogPosts, getBlogPost, getRelatedPosts } from "@/data/blog";
import { createMetadata } from "@/lib/seo";
import { articleJsonLd } from "@/lib/structured-data";
import { formatDate, readingTime } from "@/lib/utils";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article not found" };
  return createMetadata({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, type: "article", publishedTime: post.publishedAt, image: post.coverImage });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const related = getRelatedPosts(post.slug, 3);
  return <main id="main"><section className="border-b border-white/8 bg-surface/30 pt-28 pb-12 sm:pt-36 sm:pb-16"><Container><Breadcrumbs items={[{ name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }]} /><div className="mx-auto max-w-3xl"><p className="eyebrow">{post.category} · {formatDate(post.publishedAt)}</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">{post.title}</h1><p className="mt-5 text-lg leading-relaxed text-muted-strong">{post.excerpt}</p><div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted"><span>{post.author}</span><span aria-hidden>•</span><span>{readingTime(post.content)} min read</span></div></div></Container></section>
    <Container className="py-10 sm:py-14"><JsonLd data={articleJsonLd({ title: post.title, description: post.excerpt, path: `/blog/${post.slug}`, publishedAt: post.publishedAt, author: post.author, image: post.coverImage })} /><div className="mx-auto max-w-4xl"><div className="relative mb-10 aspect-[16/8] overflow-hidden rounded-3xl border border-white/10 bg-surface"><Image src={post.coverImage} alt={post.coverAlt} fill priority sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" /></div><div className="mx-auto max-w-3xl"><ArticleBody content={post.content} /><div className="mt-10 border-t border-white/10 pt-6"><p className="mb-3 text-sm font-semibold">Share this article</p><ShareLinks title={post.title} path={`/blog/${post.slug}`} /></div></div></div></Container>
    {related.length ? <section className="border-t border-white/8 bg-surface/25 section-space"><Container><div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end"><div><p className="eyebrow">Keep reading</p><h2 className="mt-3 text-3xl font-semibold">Related articles</h2></div><Link href="/blog" className="text-sm font-semibold text-cyan-300 hover:text-white">All articles ↗</Link></div><div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.map((article) => <ArticleCard key={article.slug} article={article} hrefBase="/blog" />)}</div></Container></section> : null}
  </main>;
}
