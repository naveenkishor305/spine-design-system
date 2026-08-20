import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type RankedBarItem = {
  id: string;
  label: string;
  value: number;
  /** Formatted display value, e.g. "$42,300". Falls back to the raw value. */
  displayValue?: string;
};

export type RankedBarListProps = HTMLAttributes<HTMLDivElement> & {
  items: RankedBarItem[];
};

/**
 * Ranked magnitude comparison across named rows -- SLA benchmarks, cost
 * centers, department volume. One consistent bar color throughout: the
 * label is what carries identity here, not color, so there's no categorical
 * palette to assign.
 */
export function RankedBarList({ items, className, ...props }: RankedBarListProps) {
  const max = Math.max(...items.map((item) => item.value), 1);

  return (
    <div className={cn("spine-ranked-bar-list", className)} {...props}>
      {items.map((item) => (
        <div key={item.id} className="spine-ranked-bar-list__row">
          <span className="spine-ranked-bar-list__label">{item.label}</span>
          <span className="spine-ranked-bar-list__track">
            <span
              className="spine-ranked-bar-list__fill"
              style={{ width: `${Math.max((item.value / max) * 100, 4)}%` }}
            />
          </span>
          <span className="spine-ranked-bar-list__value">
            {item.displayValue ?? item.value}
          </span>
        </div>
      ))}
    </div>
  );
}
