import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Service } from "@/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="gradient-border group flex h-full flex-col rounded-2xl bg-surface p-6 shadow-card">
      <div className="flex size-11 items-center justify-center rounded-full bg-blue-500/15 text-cyan-400">
        <Icon name={service.icon} />
      </div>
      <h3 className="mt-5 text-xl font-semibold tracking-tight">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-strong">
        {service.summary}
      </p>
      <Link
        href={`/services#${service.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-400"
      >
        Explore {service.title}
        <ArrowRight className="size-4 transition-transform duration-[var(--duration-base)] group-hover:translate-x-0.5 group-focus-within:translate-x-0.5" />
      </Link>
    </article>
  );
}
