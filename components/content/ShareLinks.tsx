import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

export function ShareLinks({ title, path }: { title: string; path: string }) {
  const url = absoluteUrl(path, siteConfig.url);
  const links = [
    {
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    },
    {
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/12 px-4 py-2 text-sm text-muted-strong hover:text-white"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}
