import type { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, getProject } from "@/data/projects";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() { return projects.map((project) => ({ slug: project.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return createMetadata({ title: `${project.title} | Illustrative case study`, description: project.summary, path: `/projects/${project.slug}`, image: project.image });
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const related = projects.filter((item) => item.slug !== project.slug && item.category === project.category).slice(0, 2);
  const relatedProjects = related.length ? related : projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  return <main id="main"><section className="border-b border-white/8 bg-surface/30 pt-28 pb-12 sm:pt-36 sm:pb-16"><Container><Breadcrumbs items={[{ name: "Projects", path: "/projects" }, { name: project.title, path: `/projects/${project.slug}` }]} /><div className="grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end"><div><p className="eyebrow">{project.sector} · {project.category}</p><h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">{project.title}</h1><p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-strong">{project.summary}</p></div><p className="rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-5 text-sm leading-relaxed text-muted-strong">Illustrative case study. This example demonstrates an approach to a common business challenge and is not a claim about a named client or measured result.</p></div></Container></section>
    <Container className="py-10 sm:py-14"><div className="relative mb-12 aspect-[16/8] overflow-hidden rounded-3xl border border-white/10 bg-surface"><Image src={project.image} alt={project.imageAlt} fill priority sizes="(min-width: 1024px) 1200px, 100vw" className="object-cover" /></div><div className="grid gap-12 lg:grid-cols-[1fr_0.42fr]"><div className="space-y-12"><section><p className="eyebrow">01 / The challenge</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Start with the real constraint.</h2><p className="mt-4 text-lg leading-relaxed text-muted-strong">{project.challenge}</p></section><section><p className="eyebrow">02 / The approach</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Design around how work happens.</h2><p className="mt-4 text-lg leading-relaxed text-muted-strong">{project.solution}</p></section><section><p className="eyebrow">03 / Intended outcomes</p><h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Make progress observable.</h2><ul className="mt-5 space-y-3">{project.outcomes.map((outcome) => <li key={outcome} className="flex gap-3 text-muted-strong"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400" />{outcome}</li>)}</ul></section></div><aside className="h-fit rounded-2xl border border-white/10 bg-surface p-6"><h2 className="text-lg font-semibold">Technology involved</h2><div className="mt-4 flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-muted-strong">{technology}</span>)}</div><Link href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white">Discuss a similar challenge <ArrowUpRight className="size-4" /></Link></aside></div><Link href="/projects" className="mt-12 inline-flex items-center gap-2 text-sm text-muted-strong hover:text-white"><ArrowLeft className="size-4" /> Back to all projects</Link></Container>
    {relatedProjects.length ? <section className="border-t border-white/8 bg-surface/25 section-space"><Container><h2 className="text-3xl font-semibold">Related case studies</h2><div className="mt-8 grid gap-6 md:grid-cols-2">{relatedProjects.map((item) => <ProjectCard key={item.slug} project={item} />)}</div></Container></section> : null}<ContactCta />
  </main>;
}
