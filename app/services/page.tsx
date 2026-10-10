import { ContactCta } from "@/components/home/ContactCta";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Icon } from "@/components/ui/Icon";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
import { createMetadata } from "@/lib/seo";
import { serviceJsonLd } from "@/lib/structured-data";

export const metadata = createMetadata({
  title: "Services",
  description:
    "Custom software, web applications, applied AI, cloud engineering, data products, UX, modernization, and technology consulting from Inditechies.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Services"
        title="Eight ways to change how the work actually runs"
        description="Each practice is staffed as delivery, not a brochure. Start with the constraint you have — a product to build, a core you cannot freeze, or a workflow that needs intelligence without theatre."
      >
        <Button href="/contact">Talk through a brief</Button>
      </PageHero>

      <section className="section-space">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight">Service overview</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {services.map((service) => (
        <section
          key={service.slug}
          id={service.slug}
          className="scroll-mt-24 border-t border-white/8 py-20"
        >
          <JsonLd
            data={serviceJsonLd({
              name: service.title,
              description: service.description,
              path: `/services#${service.slug}`,
            })}
          />
          <Container className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="flex size-12 items-center justify-center rounded-full bg-blue-500/15 text-cyan-400">
                <Icon name={service.icon} className="size-6" />
              </div>
              <p className="mt-6 text-xs tracking-[0.28em] text-cyan-400 uppercase">
                Practice
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {service.title}
              </h2>
              <p className="mt-3 text-lg text-muted-strong">{service.tagline}</p>
              <div className="mt-8">
                <Button href="/contact">Discuss {service.title}</Button>
              </div>
            </div>
            <div>
              <p className="text-base leading-relaxed text-muted-strong">
                {service.description}
              </p>
              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                    Capabilities
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-strong">
                    {service.capabilities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
                    Business outcomes we aim for
                  </h3>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted-strong">
                    {service.outcomes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}
      <ContactCta />
    </main>
  );
}
