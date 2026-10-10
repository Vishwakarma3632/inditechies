import { ArrowRight, HeartHandshake, Lightbulb, Scale } from "lucide-react";
import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { JobExplorer } from "@/components/careers/JobExplorer";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { benefits, workingPrinciples } from "@/data/careers";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Careers at Inditechies | Build What Matters",
  description: "Explore opportunities at Inditechies for people who care about thoughtful engineering, useful technology, and responsible delivery.",
  path: "/careers",
});

const icons = [HeartHandshake, Lightbulb, Scale];

export default function CareersPage() {
  return <main id="main">
    <PageHero eyebrow="Careers" title="Do work that makes work better." description="Join a team that values thoughtful engineering, honest collaboration, and technology with a clear reason to exist." />
    <section className="section-space"><Container><Breadcrumbs items={[{ name: "Careers", path: "/careers" }]} /><div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">The way we work</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">High standards. Human pace.</h2><p className="mt-4 leading-relaxed text-muted-strong">We believe strong teams are built through clarity, trust, and the chance to keep learning. The goal is meaningful work without unnecessary theatre.</p></div><div className="grid gap-4 sm:grid-cols-2">{workingPrinciples.map((item) => <article key={item.title} className="rounded-2xl border border-white/10 bg-surface p-5"><h3 className="text-lg font-semibold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-strong">{item.body}</p></article>)}</div></div></Container></section>
    <section className="border-y border-white/8 bg-surface/30 section-space"><Container><p className="eyebrow">What we value</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">A place to grow your craft and share it.</h2><div className="mt-8 grid gap-5 md:grid-cols-3">{benefits.map((item, index) => { const Icon = icons[index] ?? Lightbulb; return <article key={item.title} className="rounded-2xl border border-white/10 p-6"><Icon className="size-6 text-cyan-400" /><h3 className="mt-5 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-strong">{item.body}</p></article>; })}</div></Container></section>
    <section className="section-space"><Container><div className="mb-8 max-w-2xl"><p className="eyebrow">Opportunities</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Find your next challenge.</h2><p className="mt-4 text-muted-strong">Explore the sample roles below. Please confirm availability before applying; listings are configurable examples until the hiring pipeline is connected.</p></div><JobExplorer /><p className="mt-6 text-sm text-muted-strong">Interested but don’t see the right role? <a className="font-semibold text-cyan-300 hover:text-white" href="mailto:careers@inditechies.com">Introduce yourself by email <ArrowRight className="inline size-3" /></a></p></Container></section>
    <ContactCta />
  </main>;
}
