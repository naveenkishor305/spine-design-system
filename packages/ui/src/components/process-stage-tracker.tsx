import { Check, X } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type ProcessStageStatus = "complete" | "current" | "upcoming" | "blocked";

export type ProcessStage = {
  id: string;
  label: string;
  status: ProcessStageStatus;
};

export type ProcessStageTrackerProps = HTMLAttributes<HTMLOListElement> & {
  stages: ProcessStage[];
  orientation?: "horizontal" | "vertical";
};

/** Numbered multi-stage lifecycle status -- referrals, claims, requisition approval, asset lifecycle. */
export function ProcessStageTracker({
  stages,
  orientation = "horizontal",
  className,
  ...props
}: ProcessStageTrackerProps) {
  return (
    <ol
      className={cn("spine-stage-tracker", className)}
      data-orientation={orientation}
      {...props}
    >
      {stages.map((stage, index) => (
        <li key={stage.id} className="spine-stage-tracker__item" data-status={stage.status}>
          <span className="spine-stage-tracker__marker" aria-hidden="true">
            {stage.status === "complete" ? (
              <Check size={12} />
            ) : stage.status === "blocked" ? (
              <X size={12} />
            ) : (
              index + 1
            )}
          </span>
          <span className="spine-stage-tracker__label">{stage.label}</span>
        </li>
      ))}
    </ol>
  );
}
