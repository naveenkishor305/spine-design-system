import { Clock3 } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type ComplianceCountdownProps = HTMLAttributes<HTMLSpanElement> & {
  /** What's due, e.g. "Reassessment", "Calibration", "Badge renewal". */
  label: string;
  /** Caller-formatted due text, e.g. "due in 12 min", "overdue by 3 days" -- units vary too widely across domains to standardize here. */
  dueText: string;
  overdue?: boolean;
};

/** Generic due/overdue indicator -- reassessment intervals, PM/calibration schedules, credential expiry. */
export function ComplianceCountdown({
  label,
  dueText,
  overdue,
  className,
  ...props
}: ComplianceCountdownProps) {
  return (
    <span
      className={cn("spine-compliance-countdown", className)}
      data-overdue={overdue || undefined}
      role={overdue ? "alert" : "status"}
      {...props}
    >
      <Clock3 aria-hidden="true" size={13} />
      <span className="spine-compliance-countdown__label">{label}</span>
      <span className="spine-compliance-countdown__due">{dueText}</span>
    </span>
  );
}
