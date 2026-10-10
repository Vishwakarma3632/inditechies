import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleAs?: "h1" | "h2" | "h3";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  titleAs: Title = "h2",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold tracking-[0.28em] text-cyan-400 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <Title className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </Title>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-strong sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
