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

export type DocsNavItem = {
  label: string;
  href: string;
  icon: (typeof BookOpen);
  children?: { label: string; href: string }[];
};

export const documentationNavigation: DocsNavItem[] = [
  { label: "Overview", href: "#overview", icon: BookOpen },
  { label: "Principles", href: "#principles", icon: Compass },
  { label: "Foundations", href: "#foundations", icon: Palette },
  {
    label: "Components",
    href: "#components",
    icon: Component,
    children: [
      { label: "Actions & fields", href: "#components-actions-fields" },
      { label: "Patient identity band", href: "#components-identity" },
      { label: "Feedback & status", href: "#components-feedback" },
      { label: "Work queue", href: "#components-queue" },
      { label: "Lifecycle & audit", href: "#components-lifecycle" },
      { label: "Scheduling & dashboards", href: "#components-scheduling" },
    ],
  },
  {
    label: "Clinical patterns",
    href: "#clinical-patterns",
    icon: Stethoscope,
    children: [
      { label: "Emergency & trauma", href: "#clinical-patterns-emergency" },
      { label: "Surgical & critical care", href: "#clinical-patterns-surgical" },
    ],
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
];
