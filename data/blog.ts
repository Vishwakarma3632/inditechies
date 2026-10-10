import type { Article } from "@/types";

export const blogCategories = [
  "Company",
  "Engineering",
  "Tutorials",
  "Delivery",
] as const;

export const blogPosts: Article[] = [
  {
    slug: "why-we-are-building-inditechies",
    title: "Why we are building Inditechies",
    excerpt:
      "A short note on the kind of technology partner we want to be: close to the work, allergic to theatre, and serious about leaving teams stronger.",
    category: "Company",
    tags: ["Inditechies", "Culture"],
    author: "Inditechies",
    authorRole: "Studio",
    publishedAt: "2026-09-02",
    coverImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Earth atmosphere and city lights from space",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Inditechies exists because too many technology programs optimize for the workshop, not the week after go-live. We wanted a studio where consulting and engineering are the same conversation.",
      },
      {
        type: "heading",
        text: "Ideas, technology, impact",
      },
      {
        type: "paragraph",
        text: "The tagline is a sequence. Ideas without delivery are decoration. Technology without a business constraint is a hobby. Impact is what remains when the vendor leaves and the on-call rotation is still yours.",
      },
      {
        type: "paragraph",
        text: "This site is the public face of that intent. The work will be judged by systems that stay changeable, not by the polish of a launch film.",
      },
    ],
  },
  {
    slug: "next-js-app-router-habits",
    title: "App Router habits that keep pages honest",
    excerpt:
      "A practical checklist we use on Next.js work: server components by default, client islands with a reason, and metadata that is not copy-pasted.",
    category: "Tutorials",
    tags: ["Next.js", "React", "Performance"],
    author: "Engineering",
    authorRole: "Inditechies",
    publishedAt: "2026-07-16",
    coverImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Laptop displaying code in a dim workspace",
    featured: true,
    content: [
      {
        type: "paragraph",
        text: "Next.js rewards restraint. The App Router makes it easy to accidentally ship a client tree because one dropdown needed state. These are the habits we keep on Inditechies projects.",
      },
      {
        type: "heading",
        text: "Default to the server",
      },
      {
        type: "list",
        items: [
          "Fetch and render content in server components unless the UI is interactive",
          "Colocate client islands (menus, sliders, forms) instead of marking a whole page",
          "Keep animation libraries off pages that do not animate",
        ],
      },
      {
        type: "heading",
        text: "Metadata is a system",
      },
      {
        type: "paragraph",
        text: "Titles, canonicals, and Open Graph tags should come from a helper and a site config. If every page invents its own shape, something will ship with localhost in the canonical or a duplicated description.",
      },
      {
        type: "paragraph",
        text: "On this site, `createMetadata` and `siteConfig.url` are the source of truth. Deployment-specific domains belong in environment variables, not in a committed string.",
      },
    ],
  },
  {
    slug: "evaluation-harness-starter",
    title: "A starter shape for LLM evaluation",
    excerpt:
      "Before you wire a model into a workflow, write down the cases that would embarrass you in an operating review.",
    category: "Engineering",
    tags: ["AI", "Quality"],
    author: "Engineering",
    authorRole: "Inditechies",
    publishedAt: "2026-05-28",
    coverImage:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Developer working with multiple monitors",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "We keep a deliberately small evaluation kit on applied AI engagements: a labeled set, a scorer that a human can disagree with, and a log of traces. Fancy tooling can wait.",
      },
      {
        type: "heading",
        text: "Three buckets of cases",
      },
      {
        type: "list",
        items: [
          "Happy path: the work the demo always shows",
          "Policy edge: the cases legal, risk, or operations will ask about",
          "Garbage in: truncated context, mixed languages, missing identifiers",
        ],
      },
      {
        type: "paragraph",
        text: "If you cannot fill those buckets, you are not ready to discuss accuracy. You are still discovering the job.",
      },
    ],
  },
  {
    slug: "accessible-dropdown-notes",
    title: "Notes on an accessible mega menu",
    excerpt:
      "Escape, focus return, and not trapping people in hover: the unglamorous details that make a premium header feel finished.",
    category: "Tutorials",
    tags: ["Accessibility", "UI"],
    author: "Engineering",
    authorRole: "Inditechies",
    publishedAt: "2026-03-11",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Desk with a laptop and notebook",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "A header is a product. If the Services menu only works with a mouse, it is not done. We implement desktop dropdowns as disclosure buttons, not hover-only panels, and we keep the mobile drawer as a dialog with a close control and Escape support.",
      },
      {
        type: "list",
        items: [
          "Return focus to the toggle when the menu closes",
          "Prevent background scroll only when the mobile drawer is open",
          "Do not make essential information appear only on hover",
        ],
      },
    ],
  },
  {
    slug: "delivery-reviews-that-are-short",
    title: "Delivery reviews that can be short",
    excerpt:
      "A status ritual that names risk, next proof, and what we are deliberately not doing. Everything else is a document.",
    category: "Delivery",
    tags: ["Delivery", "Teams"],
    author: "Delivery",
    authorRole: "Inditechies",
    publishedAt: "2026-01-22",
    coverImage:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Workshop notes on a wall during a team session",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "Long status meetings are usually a substitute for a written board. We run a short review: what moved, what is blocked, what we will prove next, and which risks changed shape.",
      },
      {
        type: "paragraph",
        text: "If a program cannot be described that way, the work is probably still a collection of workstreams instead of a sequence of outcomes.",
      },
    ],
  },
  {
    slug: "image-performance-checklist",
    title: "Image performance on marketing pages",
    excerpt:
      "Priority on the LCP image, dimensions reserved, lazy load below the fold. Hero sliders make this easy to get wrong.",
    category: "Engineering",
    tags: ["Performance", "Next.js"],
    author: "Engineering",
    authorRole: "Inditechies",
    publishedAt: "2025-11-19",
    coverImage:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80",
    coverAlt: "Laptop on a wooden desk with soft daylight",
    featured: false,
    content: [
      {
        type: "paragraph",
        text: "A cinematic hero is an LCP trap. The first slide should use `priority`, known dimensions, and a compressed source. Later slides can wait. Ken Burns effects belong on transform and opacity, never on layout properties, and they should yield to `prefers-reduced-motion`.",
      },
      {
        type: "paragraph",
        text: "If you autoplay, pause when the user is interacting, when the tab is hidden, and when reduced motion is requested. Manual controls are not optional chrome; they are how the slider stays accessible.",
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = getBlogPost(slug);
  if (!current) return blogPosts.slice(0, limit);

  return blogPosts
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      const aScore = a.category === current.category ? 1 : 0;
      const bScore = b.category === current.category ? 1 : 0;
      return bScore - aScore;
    })
    .slice(0, limit);
}
