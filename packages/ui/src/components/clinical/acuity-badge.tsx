import type { HTMLAttributes } from "react";

import { cn } from "../../cn";

export type AcuityLevel = 1 | 2 | 3 | 4 | 5;

/** A named protocol (ESI, CTAS, ATS) or Manchester's color-name category. Free-form to support local protocols. */
export type AcuityProtocol = "ESI" | "CTAS" | "Manchester" | "ATS" | (string & {});

const defaultLabels: Record<AcuityLevel, string> = {
  1: "Immediate",
  2: "Very urgent",
  3: "Urgent",
  4: "Standard",
  5: "Non-urgent",
};

export type AcuityBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** 1 = most urgent, across every supported protocol. */
  level: AcuityLevel;
  protocol?: AcuityProtocol;
  /** Overrides the default urgency word, e.g. Manchester's own category names. */
  label?: string;
};

/**
 * Protocol-agnostic triage acuity indicator. Per design principle 2.5,
 * color never stands alone — the numeral and urgency word are always
 * rendered together.
 */
export function AcuityBadge({
  level,
  protocol,
  label,
  className,
  ...props
}: AcuityBadgeProps) {
  const text = label ?? defaultLabels[level];
  const protocolLabel = protocol ? `${protocol} ${level}` : `Level ${level}`;

  return (
    <span
      className={cn("spine-acuity-badge", className)}
      data-level={level}
      role="status"
      {...props}
    >
      <span className="spine-acuity-badge__level" aria-hidden="true">
        {level}
      </span>
      <span className="spine-acuity-badge__text">
        <span className="spine-acuity-badge__protocol">{protocolLabel}</span>
        <span className="spine-acuity-badge__label">{text}</span>
      </span>
    </span>
  );
}
