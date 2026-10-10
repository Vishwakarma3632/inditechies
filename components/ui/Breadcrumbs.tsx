import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbJsonLd } from "@/lib/structured-data";

type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail = [{ name: "Home", path: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="mb-8 text-sm text-muted">
      <JsonLd data={breadcrumbJsonLd(trail)} />
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, index) => {
          const last = index === trail.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-white">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="link-underline hover:text-white">
                  {item.name}
                </Link>
              )}
              {!last ? <span aria-hidden>/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
