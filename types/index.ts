export type IconName =
  | "code"
  | "globe"
  | "brain"
  | "cloud"
  | "database"
  | "palette"
  | "refresh"
  | "compass"
  | "cpu"
  | "shield"
  | "layers"
  | "lineChart";

export type NavChild = {
  href: string;
  label: string;
  description: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export type Service = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  description: string;
  capabilities: string[];
  outcomes: string[];
  icon: IconName;
};

export type Project = {
  slug: string;
  title: string;
  sector: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  technologies: string[];
  image: string;
  imageAlt: string;
  featured: boolean;
  illustrative: true;
};

export type Job = {
  slug: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Contract";
  summary: string;
  responsibilities: string[];
  requirements: string[];
};

export type ArticleBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  publishedAt: string;
  coverImage: string;
  coverAlt: string;
  featured: boolean;
  content: ArticleBlock[];
};

export type TeamSeat = {
  role: string;
  focus: string;
};
