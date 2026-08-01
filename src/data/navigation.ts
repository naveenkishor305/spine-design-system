import {
  Accessibility,
  Activity,
  BookOpen,
  Compass,
  Component,
  GitPullRequest,
  Languages,
  Network,
  Palette,
  Rocket,
  Share2,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";

export const documentationNavigation = [
  { label: "Overview", href: "#overview", icon: BookOpen },
  { label: "Principles", href: "#principles", icon: Compass },
  { label: "Foundations", href: "#foundations", icon: Palette },
  { label: "Components", href: "#components", icon: Component },
  {
    label: "Clinical patterns",
    href: "#clinical-patterns",
    icon: Stethoscope,
  },
  {
    label: "Accessibility",
    href: "#accessibility",
    icon: Accessibility,
  },
  {
    label: "Content & language",
    href: "#content-language",
    icon: Languages,
  },
  {
    label: "Information architecture",
    href: "#information-architecture",
    icon: Network,
  },
  {
    label: "External referral",
    href: "#external-referral",
    icon: Share2,
  },
  {
    label: "Role workspaces",
    href: "#workspaces",
    icon: Users,
  },
  {
    label: "System states",
    href: "#states",
    icon: Activity,
  },
  {
    label: "Privacy, access & audit",
    href: "#privacy",
    icon: ShieldCheck,
  },
  {
    label: "Governance",
    href: "#governance",
    icon: GitPullRequest,
  },
  {
    label: "Release & migration",
    href: "#release-roadmap",
    icon: Rocket,
  },
] as const;
