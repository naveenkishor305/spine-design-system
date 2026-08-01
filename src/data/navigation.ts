import {
  Accessibility,
  Blocks,
  BookOpen,
  Component,
  Grid3X3,
  Layers3,
  ShieldCheck,
  SlidersHorizontal,
  Workflow,
} from "lucide-react";

export const documentationNavigation = [
  { label: "Overview", href: "#overview", icon: BookOpen },
  { label: "Principles", href: "#principles", icon: ShieldCheck },
  { label: "Foundations", href: "#foundations", icon: SlidersHorizontal },
  { label: "Components", href: "#components", icon: Component },
  { label: "Clinical patterns", href: "#clinical-patterns", icon: Blocks },
  { label: "Workspaces", href: "#workspaces", icon: Grid3X3 },
  { label: "States", href: "#states", icon: Layers3 },
  { label: "Accessibility", href: "#accessibility", icon: Accessibility },
  { label: "Governance", href: "#governance", icon: Workflow },
];
