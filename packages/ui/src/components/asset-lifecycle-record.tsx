import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";
import { ProcessStageTracker, type ProcessStage } from "./process-stage-tracker";

export type AssetLifecycleStage =
  | "registered"
  | "commissioned"
  | "in-service"
  | "maintenance-due"
  | "under-repair"
  | "retired";

const stageOrder: AssetLifecycleStage[] = [
  "registered",
  "commissioned",
  "in-service",
  "maintenance-due",
  "under-repair",
  "retired",
];

const stageLabels: Record<AssetLifecycleStage, string> = {
  registered: "Registered",
  commissioned: "Commissioned",
  "in-service": "In service",
  "maintenance-due": "Maintenance due",
  "under-repair": "Under repair",
  retired: "Retired",
};

export type AssetLifecycleRecordProps = HTMLAttributes<HTMLDivElement> & {
  assetName: string;
  assetId: string;
  stage: AssetLifecycleStage;
  location?: string;
  /** e.g. a ComplianceCountdown for the next PM/calibration date. */
  nextAction?: ReactNode;
};

/**
 * Equipment/building-system/fleet/textile asset summary. A thin composition
 * over ProcessStageTracker rather than a new visual language -- an asset's
 * lifecycle is exactly the multi-stage pattern that component already owns.
 */
export function AssetLifecycleRecord({
  assetName,
  assetId,
  stage,
  location,
  nextAction,
  className,
  ...props
}: AssetLifecycleRecordProps) {
  const currentIndex = stageOrder.indexOf(stage);
  const stages: ProcessStage[] = stageOrder.map((s, index) => ({
    id: s,
    label: stageLabels[s],
    status:
      index < currentIndex
        ? "complete"
        : index === currentIndex
          ? s === "under-repair"
            ? "blocked"
            : "current"
          : "upcoming",
  }));

  return (
    <div className={cn("spine-asset-record", className)} {...props}>
      <div className="spine-asset-record__header">
        <div>
          <p className="spine-asset-record__name">{assetName}</p>
          <p className="spine-asset-record__meta">
            {assetId}
            {location ? ` · ${location}` : ""}
          </p>
        </div>
        {nextAction}
      </div>

      <ProcessStageTracker stages={stages} className="spine-asset-record__stages" />
    </div>
  );
}
