import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { absoluteUrl } from "@/lib/utils";

type CreateMetadataInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  image?: string;
  noIndex?: boolean;
};

export function createMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  image = siteConfig.ogImage,
  noIndex,
}: CreateMetadataInput): Metadata {
  const url = absoluteUrl(path, siteConfig.url);
  const imageUrl = absoluteUrl(image, siteConfig.url);

  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      publishedTime,
      images: [
        {
          url: imageUrl,
          width: 1920,
          height: 1080,
          alt: `${siteConfig.name} — ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [imageUrl],
    },
  };
}
