import type { NavItem } from "@/types";

export const primaryNavigation: NavItem[] = [
  {
    href: "/services",
    label: "Services",
    children: [
      {
        href: "/services#custom-software-development",
        label: "Custom Software",
        description: "Products and platforms built around how your teams actually work.",
      },
      {
        href: "/services#ai-intelligent-automation",
        label: "AI & Automation",
        description: "Applied intelligence in workflows, not isolated experiments.",
      },
      {
        href: "/services#cloud-engineering-devops",
        label: "Cloud & DevOps",
        description: "Platforms that are observable, cost-aware, and ready to evolve.",
      },
      {
        href: "/services#technology-consulting",
        label: "Consulting",
        description: "Architecture and delivery decisions that hold up in production.",
      },
    ],
  },
  { href: "/projects", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
];

export const footerNavigation = {
  company: [
    { href: "/about", label: "About us" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ],
  work: [
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Case studies" },
    { href: "/insights", label: "Insights" },
    { href: "/blog", label: "Blog" },
  ],
} as const;
