import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";

export type MetricTileProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  value: string;
  /** e.g. a VarianceIndicator, or any comparison content. */
  comparison?: ReactNode;
};

/** Single-headline-number stat tile for executive/benchmark dashboards. */
export function MetricTile({ label, value, comparison, className, ...props }: MetricTileProps) {
  return (
    <div className={cn("spine-metric-tile", className)} {...props}>
      <p className="spine-metric-tile__label">{label}</p>
      <p className="spine-metric-tile__value">{value}</p>
      {comparison ? <div className="spine-metric-tile__comparison">{comparison}</div> : null}
    </div>
  );
}
