import { ArrowRight, Compass, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import { ContactCta } from "@/components/home/ContactCta";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { approach, teamSeats, values } from "@/data/about";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Inditechies | Ideas, Technology, Impact",
  description: "Meet the principles behind Inditechies: practical engineering, accountable delivery, and technology designed around meaningful business outcomes.",
  path: "/about",
});

const valueIcons = [Compass, Layers3, ShieldCheck, Sparkles];

export default function AboutPage() {
  return (
    <main id="main">
      <PageHero eyebrow="About Inditechies" title="Technology should move your business forward." description="We bring strategy, design, and engineering into the same conversation—so ideas become useful products, and useful products create lasting impact." />
      <section className="section-space">
        <Container>
          <Breadcrumbs items={[{ name: "About", path: "/about" }]} />
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div><p className="eyebrow">Our point of view</p><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">Good technology is measured by what changes.</h2></div>
            <div className="space-y-5 text-lg leading-relaxed text-muted-strong"><p>Inditechies is being built for teams that need a thoughtful technology partner—not another hand-off between a strategy deck and a delivery backlog.</p><p>We focus on the full path: understanding the constraint, choosing a useful solution, building it responsibly, and leaving teams able to run and evolve what ships.</p><p>Our work spans software engineering, applied AI, cloud platforms, data, and digital product experiences. The common thread is practical progress.</p></div>
          </div>
        </Container>
      </section>
      <section className="border-y border-white/8 bg-surface/40 section-space">
        <Container><div className="max-w-2xl"><p className="eyebrow">What guides us</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Principles over promises.</h2></div><div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">{values.map((value, index) => { const Icon = valueIcons[index] ?? Sparkles; return <article key={value.title} className="card-hover rounded-2xl border border-white/10 bg-navy-900/70 p-6"><Icon className="size-6 text-cyan-400" /><h3 className="mt-6 text-xl font-semibold">{value.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-strong">{value.body}</p></article>; })}</div></Container>
      </section>
      <section className="section-space"><Container><div className="max-w-2xl"><p className="eyebrow">How we work</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A clear path from question to capability.</h2></div><div className="mt-10 grid gap-6 md:grid-cols-2">{approach.map((step, index) => <div key={step.title} className="flex gap-5 border-t border-white/12 pt-6"><span className="font-mono text-sm text-cyan-400">0{index + 1}</span><div><h3 className="text-xl font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-strong">{step.body}</p></div></div>)}</div></Container></section>
      <section className="border-y border-white/8 bg-surface/30 section-space"><Container><div className="flex flex-col justify-between gap-5 md:flex-row md:items-end"><div><p className="eyebrow">Our capabilities</p><h2 className="mt-3 text-3xl font-semibold sm:text-4xl">The right expertise, connected.</h2></div><Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white">Explore services <ArrowRight className="size-4" /></Link></div><div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{teamSeats.map((seat) => <div key={seat.role} className="rounded-xl border border-white/10 p-5"><h3 className="font-semibold">{seat.role}</h3><p className="mt-2 text-sm leading-relaxed text-muted-strong">{seat.focus}</p></div>)}</div></Container></section>
      <ContactCta />
    </main>
  );
}
