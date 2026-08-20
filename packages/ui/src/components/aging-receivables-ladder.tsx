import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type AgingBucketSeverity = "success" | "neutral" | "warning" | "critical";

export type AgingBucket = {
  id: string;
  /** e.g. "Current", "31-60 days", "90+ days". */
  label: string;
  amount: number;
  /** Formatted display value, e.g. "$42,300". Falls back to the raw amount. */
  displayAmount?: string;
  severity: AgingBucketSeverity;
};

export type AgingReceivablesLadderProps = HTMLAttributes<HTMLDivElement> & {
  buckets: AgingBucket[];
};

/**
 * AR aging-bucket visualization. Distinct from RankedBarList: buckets are
 * in a fixed aging sequence (not ranked by magnitude) and the color genuinely
 * encodes escalating collection risk, so severity tones are the right tool
 * here rather than one neutral bar color.
 */
export function AgingReceivablesLadder({
  buckets,
  className,
  ...props
}: AgingReceivablesLadderProps) {
  const max = Math.max(...buckets.map((bucket) => bucket.amount), 1);

  return (
    <div className={cn("spine-aging-ladder", className)} {...props}>
      {buckets.map((bucket) => (
        <div key={bucket.id} className="spine-aging-ladder__row">
          <span className="spine-aging-ladder__label">{bucket.label}</span>
          <span className="spine-aging-ladder__track">
            <span
              className="spine-aging-ladder__fill"
              data-severity={bucket.severity}
              style={{ width: `${Math.max((bucket.amount / max) * 100, 4)}%` }}
            />
          </span>
          <span className="spine-aging-ladder__value">
            {bucket.displayAmount ?? bucket.amount}
          </span>
        </div>
      ))}
    </div>
  );
}
