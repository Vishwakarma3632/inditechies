import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function ContactCta() {
  return (
    <section className="section-space" aria-labelledby="cta-heading">
      <Container>
        <AnimatedSection>
          <div className="overflow-hidden rounded-3xl border border-cyan-400/20 bg-[radial-gradient(circle_at_top_right,rgb(29_122_245_/_0.28),transparent_45%)] px-6 py-12 sm:px-12">
            <p className="text-xs font-semibold tracking-[0.28em] text-cyan-400 uppercase">
              Start a conversation
            </p>
            <h2
              id="cta-heading"
              className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl"
            >
              Bring the problem that does not fit a product brochure.
            </h2>
            <p className="mt-4 max-w-2xl text-muted-strong">
              Tell us what is stuck — a platform, a workflow, a core you cannot freeze.
              We will tell you honestly whether we are the right partner.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/contact">Contact Inditechies</Button>
              <Button href="/careers" variant="secondary">
                Explore careers
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
