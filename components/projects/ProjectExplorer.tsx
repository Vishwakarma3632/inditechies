"use client";

import { useMemo, useState } from "react";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projectCategories, projects } from "@/data/projects";

export function ProjectExplorer() {
  const [category, setCategory] = useState("All");

  const visible = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category),
    [category],
  );

  return (
    <div>
      <CategoryFilter
        categories={projectCategories}
        value={category}
        onChange={setCategory}
      />
      <p className="mt-6 text-sm text-muted" aria-live="polite">
        Showing {visible.length} illustrative {visible.length === 1 ? "case" : "cases"}
        {category !== "All" ? ` in ${category}` : ""}.
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
