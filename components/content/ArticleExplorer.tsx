"use client";

import { useMemo, useState } from "react";
import { ArticleCard } from "@/components/ui/ArticleCard";
import { CategoryFilter } from "@/components/ui/CategoryFilter";
import type { Article } from "@/types";

type ArticleExplorerProps = {
  articles: Article[];
  categories: readonly string[];
  hrefBase: "/blog" | "/insights";
  searchable?: boolean;
  pageSize?: number;
};

export function ArticleExplorer({
  articles,
  categories,
  hrefBase,
  searchable = false,
  pageSize,
}: ArticleExplorerProps) {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(pageSize ?? articles.length);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const categoryOk = category === "All" || article.category === category;
      const queryOk =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((tag) => tag.toLowerCase().includes(q));
      return categoryOk && queryOk;
    });
  }, [articles, category, query]);

  const visible = pageSize ? filtered.slice(0, visibleCount) : filtered;

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={(value) => {
            setCategory(value);
            setVisibleCount(pageSize ?? articles.length);
          }}
        />
        {searchable ? (
          <label className="block lg:w-72">
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setVisibleCount(pageSize ?? articles.length);
              }}
              placeholder="Search titles and topics"
              className="min-h-11 w-full rounded-full border border-white/12 bg-navy-900 px-4 text-sm"
            />
          </label>
        ) : null}
      </div>
      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
      </p>
      {visible.length === 0 ? (
        <p className="mt-8 text-muted-strong">No articles match that filter.</p>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((article) => (
            <ArticleCard key={article.slug} article={article} hrefBase={hrefBase} />
          ))}
        </div>
      )}
      {pageSize && visibleCount < filtered.length ? (
        <button
          type="button"
          className="mt-8 min-h-11 rounded-full border border-white/15 px-5 text-sm font-semibold"
          onClick={() => setVisibleCount((count) => count + pageSize)}
        >
          Load more
        </button>
      ) : null}
    </div>
  );
}
