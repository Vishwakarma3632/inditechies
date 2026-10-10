function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (explicit && !explicit.includes("localhost")) {
    return explicit;
  }

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelProduction) {
    return `https://${vercelProduction.replace(/\/$/, "")}`;
  }

  return "https://www.inditechies.com";
}

export const siteConfig = {
  name: "Inditechies",
  tagline: "Ideas | Technology | Impact",
  description:
    "Inditechies is a technology partner for modern businesses — delivering software engineering, applied AI, cloud platforms, and consulting that stays accountable through delivery.",
  url: resolveSiteUrl(),
  locale: "en_US",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "sales@inditechies.com",
  careersEmail: process.env.NEXT_PUBLIC_CAREERS_EMAIL ?? "careers@inditechies.com",
  ogImage: "/coming-soon-bg.png",
  logoPath: "/coming-soon-bg.png",
} as const;

export const indexingEnabled =
  process.env.NEXT_PUBLIC_INDEXING === "true" ||
  (process.env.VERCEL_ENV === "production" &&
    process.env.NEXT_PUBLIC_INDEXING !== "false");
