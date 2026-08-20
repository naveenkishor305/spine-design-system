import type { HTMLAttributes } from "react";

import { cn } from "../cn";
import { StatusBadge, type StatusTone } from "./status-badge";

export type InteractionSeverity = "contraindicated" | "major" | "moderate" | "minor";

const severityToneMap: Record<InteractionSeverity, StatusTone> = {
  contraindicated: "critical",
  major: "error",
  moderate: "warning",
  minor: "information",
};

export type InteractionSeverityBadgeProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  severity: InteractionSeverity;
  /** e.g. "Warfarin + Aspirin". */
  label?: string;
};

/**
 * Drug/allergy interaction severity grading -- a distinct clinical scale
 * from RiskScoreBadge's general risk levels (contraindicated is a hard
 * stop, not just "critical risk"), so it keeps its own vocabulary while
 * still mapping onto the existing 4 semantic tones rather than new colors.
 */
export function InteractionSeverityBadge({
  severity,
  label,
  className,
  ...props
}: InteractionSeverityBadgeProps) {
  return (
    <StatusBadge
      tone={severityToneMap[severity]}
      className={cn("spine-interaction-badge", className)}
      {...props}
    >
      {severity}
      {label ? <span className="spine-interaction-badge__label">{label}</span> : null}
    </StatusBadge>
  );
}
