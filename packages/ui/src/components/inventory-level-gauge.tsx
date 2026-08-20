import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type InventoryLevelGaugeProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  current: number;
  min: number;
  max: number;
  /** e.g. "units", "boxes". */
  unit?: string;
};

/**
 * Where one item's stock level sits between its safety-stock floor and
 * capacity ceiling. Distinct from RankedBarList/AgingReceivablesLadder,
 * which compare many rows against each other -- this is a single item's
 * position within its own range.
 */
export function InventoryLevelGauge({
  label,
  current,
  min,
  max,
  unit,
  className,
  ...props
}: InventoryLevelGaugeProps) {
  const range = Math.max(max - min, 1);
  const position = Math.min(Math.max(((current - min) / range) * 100, 0), 100);
  const status = current < min ? "critical" : current > max ? "warning" : "success";

  return (
    <div className={cn("spine-inventory-gauge", className)} data-status={status} {...props}>
      <div className="spine-inventory-gauge__header">
        <span className="spine-inventory-gauge__label">{label}</span>
        <span className="spine-inventory-gauge__value">
          {current}
          {unit ? ` ${unit}` : ""}
        </span>
      </div>

      <div className="spine-inventory-gauge__track">
        <span className="spine-inventory-gauge__fill" style={{ width: `${position}%` }} />
      </div>

      <div className="spine-inventory-gauge__scale">
        <span>Min {min}</span>
        <span>Max {max}</span>
      </div>
    </div>
  );
}
