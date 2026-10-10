export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function readingTime(content: Array<{ type: string; text?: string; items?: string[] }>) {
  const words = content
    .flatMap((block) => {
      if (block.type === "list") return block.items ?? [];
      return block.text ? [block.text] : [];
    })
    .join(" ")
    .split(/\s+/).length;

  return Math.max(1, Math.round(words / 220));
}

export function absoluteUrl(path: string, baseUrl: string) {
  if (path.startsWith("http")) return path;
  return new URL(path, baseUrl).toString();
}
