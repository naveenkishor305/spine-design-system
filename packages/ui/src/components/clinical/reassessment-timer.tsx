import { Clock3 } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "../../cn";

export type ReassessmentTimerProps = HTMLAttributes<HTMLSpanElement> & {
  /** Minutes remaining until mandatory re-triage. Negative once overdue. */
  dueInMinutes: number;
};

export function ReassessmentTimer({
  dueInMinutes,
  className,
  ...props
}: ReassessmentTimerProps) {
  const overdue = dueInMinutes <= 0;

  return (
    <span
      className={cn("spine-reassessment-timer", className)}
      data-overdue={overdue || undefined}
      role={overdue ? "alert" : "status"}
      {...props}
    >
      <Clock3 aria-hidden="true" size={13} />
      {overdue
        ? `Reassessment overdue by ${Math.abs(dueInMinutes)} min`
        : `Reassessment due in ${dueInMinutes} min`}
    </span>
  );
}
