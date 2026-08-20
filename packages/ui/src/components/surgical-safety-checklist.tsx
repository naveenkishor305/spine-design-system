import type { HTMLAttributes } from "react";

import { cn } from "../cn";
import { Button } from "./button";
import { CheckboxField } from "./checkbox-field";
import { ProcessStageTracker, type ProcessStage, type ProcessStageStatus } from "./process-stage-tracker";

export type ChecklistItem = {
  id: string;
  label: string;
  checked: boolean;
};

export type SafetyChecklistPhase = {
  id: string;
  /** e.g. "Sign-In", "Time-Out", "Sign-Out". */
  label: string;
  items: ChecklistItem[];
  status: ProcessStageStatus;
};

export type SurgicalSafetyChecklistProps = HTMLAttributes<HTMLDivElement> & {
  phases: SafetyChecklistPhase[];
  onItemToggle?: (phaseId: string, itemId: string) => void;
  onCompletePhase?: (phaseId: string) => void;
};

/**
 * WHO-style three-phase (Sign-In/Time-Out/Sign-Out) gated safety checklist.
 * The one genuinely novel interaction in surgical-critical-care: a phase
 * can't complete until every item in it is checked. Composes
 * ProcessStageTracker for the phase overview rather than inventing a
 * second stage visualization.
 */
export function SurgicalSafetyChecklist({
  phases,
  onItemToggle,
  onCompletePhase,
  className,
  ...props
}: SurgicalSafetyChecklistProps) {
  const currentPhase = phases.find((phase) => phase.status === "current");
  const stages: ProcessStage[] = phases.map((phase) => ({
    id: phase.id,
    label: phase.label,
    status: phase.status,
  }));
  const allChecked = currentPhase ? currentPhase.items.every((item) => item.checked) : false;

  return (
    <div className={cn("spine-safety-checklist", className)} {...props}>
      <ProcessStageTracker stages={stages} className="spine-safety-checklist__stages" />

      {currentPhase ? (
        <div className="spine-safety-checklist__phase">
          <p className="spine-safety-checklist__phase-title">{currentPhase.label}</p>

          <div className="spine-safety-checklist__items">
            {currentPhase.items.map((item) => (
              <CheckboxField
                key={item.id}
                id={`${currentPhase.id}-${item.id}`}
                label={item.label}
                checked={item.checked}
                onChange={() => onItemToggle?.(currentPhase.id, item.id)}
              />
            ))}
          </div>

          <Button
            variant="primary"
            size="sm"
            disabled={!allChecked}
            onClick={() => onCompletePhase?.(currentPhase.id)}
            className="spine-safety-checklist__complete"
          >
            Complete {currentPhase.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
