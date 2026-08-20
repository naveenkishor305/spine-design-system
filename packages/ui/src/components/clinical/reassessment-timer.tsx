import type { HTMLAttributes } from "react";

import { ComplianceCountdown } from "../compliance-countdown";

export type ReassessmentTimerProps = HTMLAttributes<HTMLSpanElement> & {
  /** Minutes remaining until mandatory re-triage. Negative once overdue. */
  dueInMinutes: number;
};

/** ED-specific specialization of ComplianceCountdown for the fixed re-triage interval. */
export function ReassessmentTimer({ dueInMinutes, ...props }: ReassessmentTimerProps) {
  const overdue = dueInMinutes <= 0;
  const dueText = overdue
    ? `overdue by ${Math.abs(dueInMinutes)} min`
    : `due in ${dueInMinutes} min`;

  return <ComplianceCountdown label="Reassessment" dueText={dueText} overdue={overdue} {...props} />;
}
