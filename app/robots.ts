import type { MetadataRoute } from "next";
import { indexingEnabled, siteConfig } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: indexingEnabled
      ? { userAgent: "*", allow: "/" }
      : { userAgent: "*", disallow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
