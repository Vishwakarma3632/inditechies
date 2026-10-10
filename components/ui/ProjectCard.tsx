import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";

export function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/8 bg-surface">
      <Link href={`/projects/${project.slug}`} className="block">
        <div className={`relative overflow-hidden ${featured ? "aspect-16/9" : "aspect-4/3"}`}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes={featured ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
            className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/20 to-transparent" />
          <span className="absolute top-4 left-4 rounded-full bg-navy-950/70 px-3 py-1 text-xs font-semibold tracking-wide text-cyan-300">
            Illustrative case
          </span>
        </div>
        <div className="p-6">
          <p className="text-xs tracking-[0.2em] text-cyan-400 uppercase">
            {project.sector} · {project.category}
          </p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{project.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-strong">
            {project.summary}
          </p>
          <p className="mt-4 text-sm font-semibold text-white">Read the case</p>
        </div>
      </Link>
    </article>
  );
}
