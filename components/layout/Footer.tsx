import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/layout/Container";
import { footerNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            A technology partner for modern businesses. Software, applied AI,
            cloud, and consulting that stay accountable through delivery.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white">
            Company
          </h2>
          <ul className="mt-4 space-y-2">
            {footerNavigation.company.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-sm text-muted-strong"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white">
            Work
          </h2>
          <ul className="mt-4 space-y-2">
            {footerNavigation.work.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="link-underline text-sm text-muted-strong"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold tracking-wide text-white">
            Services
          </h2>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="link-underline text-sm text-muted-strong"
                >
                  {service.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/services" className="text-sm font-semibold text-cyan-400">
                All services
              </Link>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-white/10 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
        <p>
          Enquiries:{" "}
          <a className="text-muted-strong link-underline" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
        </p>
      </Container>
    </footer>
  );
}
