"use client";

import { cn } from "@/lib/utils";

type CategoryFilterProps = {
  categories: readonly string[];
  value: string;
  onChange: (value: string) => void;
  allLabel?: string;
};

export function CategoryFilter({
  categories,
  value,
  onChange,
  allLabel = "All",
}: CategoryFilterProps) {
  const options = [allLabel, ...categories];

  return (
    <div
      className="flex flex-wrap gap-2"
      role="group"
      aria-label="Filter by category"
    >
      {options.map((option) => {
        const selected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            aria-pressed={selected}
            className={cn(
              "min-h-10 rounded-full border px-4 text-sm font-medium transition-colors",
              selected
                ? "border-cyan-400/40 bg-blue-500 text-white"
                : "border-white/12 bg-white/4 text-muted-strong hover:border-white/25 hover:text-white",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
