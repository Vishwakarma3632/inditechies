import Image from "next/image";
import Link from "next/link";
import { formatDate, readingTime } from "@/lib/utils";
import type { Article } from "@/types";

export function ArticleCard({
  article,
  hrefBase,
}: {
  article: Article;
  hrefBase: "/blog" | "/insights";
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-surface">
      <Link href={`${hrefBase}/${article.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={article.coverImage}
            alt={article.coverAlt}
            fill
            sizes="(min-width: 1024px) 33vw, 100vw"
            className="object-cover transition-transform duration-700 ease-[var(--ease-premium)] group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs tracking-[0.2em] text-cyan-400 uppercase">
            {article.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-balance">
            {article.title}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-strong">
            {article.excerpt}
          </p>
          <p className="mt-4 text-xs text-muted">
            {formatDate(article.publishedAt)} · {readingTime(article.content)} min read
          </p>
        </div>
      </Link>
    </article>
  );
}
