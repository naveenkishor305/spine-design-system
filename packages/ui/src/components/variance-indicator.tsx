import { ArrowDown, ArrowUp, Minus } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type VarianceSentiment = "positive" | "negative" | "neutral";

const sentimentIcons: Record<VarianceSentiment, typeof ArrowUp> = {
  positive: ArrowUp,
  negative: ArrowDown,
  neutral: Minus,
};

export type VarianceIndicatorProps = Omit<HTMLAttributes<HTMLSpanElement>, "children"> & {
  /** Caller-formatted delta, e.g. "+8.2%", "-$3,400". */
  value: string;
  /**
   * Whether this change is good or bad news -- not derivable from the sign
   * alone (a rising infection rate is negative; rising throughput is
   * positive), so the caller must state it explicitly.
   */
  sentiment: VarianceSentiment;
};

export function VarianceIndicator({ value, sentiment, className, ...props }: VarianceIndicatorProps) {
  const Icon = sentimentIcons[sentiment];
  const tone = sentiment === "positive" ? "success" : sentiment === "negative" ? "error" : "neutral";

  return (
    <span className={cn("spine-variance", className)} data-tone={tone} {...props}>
      <Icon aria-hidden="true" size={12} />
      {value}
    </span>
  );
}
