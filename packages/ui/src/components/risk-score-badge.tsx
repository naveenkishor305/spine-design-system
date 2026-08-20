import type { HTMLAttributes } from "react";

import { cn } from "../cn";
import { StatusBadge, type StatusTone } from "./status-badge";

export type RiskLevel = "low" | "moderate" | "high" | "critical";

const riskToneMap: Record<RiskLevel, StatusTone> = {
  low: "success",
  moderate: "warning",
  high: "error",
  critical: "critical",
};

export type RiskScoreBadgeProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  /** e.g. "Fall risk", "MUST score", "Supplier risk". */
  label: string;
  /** Optional raw score, e.g. "14", "3/5". */
  score?: string | number;
  level: RiskLevel;
};

/**
 * Reusable numeric-risk indicator -- fall risk, nutrition screening (MUST),
 * safeguarding risk, supplier risk. Deliberately maps onto the existing 4
 * semantic tones (success/warning/error/critical) rather than a bespoke
 * scale: risk grading recurs across too many unrelated domains to justify
 * its own token family the way triage acuity does.
 */
export function RiskScoreBadge({ label, score, level, className, ...props }: RiskScoreBadgeProps) {
  return (
    <StatusBadge tone={riskToneMap[level]} className={cn("spine-risk-badge", className)} {...props}>
      {label}
      {score !== undefined ? <span className="spine-risk-badge__score">{score}</span> : null}
    </StatusBadge>
  );
}
