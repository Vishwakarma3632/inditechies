import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/8 bg-navy-900 pt-28 pb-16 sm:pt-32 sm:pb-20",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(29_122_245_/_0.22),transparent_42%)]" />
      <div className="noise-overlay pointer-events-none absolute inset-0 opacity-40" />
      <Container className="relative">
        <p className="text-xs font-semibold tracking-[0.28em] text-cyan-400 uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-strong">
          {description}
        </p>
        {children ? <div className="mt-8">{children}</div> : null}
      </Container>
    </section>
  );
}
