import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/ui/PageHero";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Inditechies | Start a Conversation",
  description: "Tell Inditechies about the product, platform, AI, cloud, or engineering challenge your team is working through.",
  path: "/contact",
});

export default function ContactPage() {
  return <main id="main"><PageHero eyebrow="Contact" title="Let’s talk about what you’re building." description="Share the challenge, the opportunity, or the thing that is not working as it should. We’ll help you think through a practical next step." />
    <section className="section-space"><Container><Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} /><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20"><aside><p className="eyebrow">Start a conversation</p><h2 className="mt-3 text-3xl font-semibold">A useful first conversation starts with context.</h2><p className="mt-4 leading-relaxed text-muted-strong">You do not need a finished brief. Tell us what you want to improve, what constraints you are working with, and what a good outcome would look like.</p><div className="mt-8 space-y-4"><a href={`mailto:${siteConfig.email}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 p-4 hover:border-cyan-400/40"><span className="flex size-11 items-center justify-center rounded-full bg-blue-500/15 text-cyan-300"><Mail className="size-5" /></span><span className="min-w-0 flex-1"><span className="block text-xs text-muted">Email us</span><span className="break-all font-semibold">{siteConfig.email}</span></span><ArrowUpRight className="size-4 text-muted group-hover:text-cyan-300" /></a><div className="flex items-center gap-4 rounded-2xl border border-white/10 p-4"><span className="flex size-11 items-center justify-center rounded-full bg-blue-500/15 text-cyan-300"><MessageCircle className="size-5" /></span><span><span className="block text-xs text-muted">What to include</span><span className="font-semibold">Goals, constraints, timing</span></span></div></div></aside><div className="rounded-3xl border border-white/10 bg-surface p-5 sm:p-8"><h2 className="text-2xl font-semibold">Tell us a little about your project</h2><p className="mt-2 mb-7 text-sm text-muted-strong">Fields marked by validation are required. The current form is frontend-only and does not send data to a server.</p><ContactForm /></div></div></Container></section>
  </main>;
}
