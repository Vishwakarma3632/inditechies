"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import { siteConfig } from "@/config/site";
import { jobTeams, jobs } from "@/data/careers";

export function JobExplorer() {
  const [team, setTeam] = useState("All");

  const visible = useMemo(
    () => (team === "All" ? jobs : jobs.filter((job) => job.team === team)),
    [team],
  );

  return (
    <div>
      <CategoryFilter categories={jobTeams} value={team} onChange={setTeam} />
      <ul className="mt-8 space-y-4">
        {visible.map((job) => {
          const mailto = `mailto:${siteConfig.careersEmail}?subject=${encodeURIComponent(`Application: ${job.title}`)}`;
          return (
            <li
              key={job.slug}
              className="rounded-2xl border border-white/8 bg-surface p-6"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <p className="text-xs tracking-[0.2em] text-cyan-400 uppercase">
                    {job.team} · {job.type} · {job.location}
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">{job.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-strong">
                    {job.summary}
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-white">You will</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-strong">
                        {job.responsibilities.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">You bring</h4>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-strong">
                        {job.requirements.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <a
                  href={mailto}
                  className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-full bg-blue-500 px-5 text-sm font-semibold text-white"
                >
                  Apply by email
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-sm text-muted">
        Applications are not submitted to this website. The button opens your
        email client to {siteConfig.careersEmail}. Replace that address in site
        configuration when recruiting is live.
      </p>
    </div>
  );
}
