import { Droplets, Hand, ShieldCheck, Wind } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type IsolationType = "contact" | "droplet" | "airborne" | "protective";

const isolationIcons: Record<IsolationType, typeof Hand> = {
  contact: Hand,
  droplet: Droplets,
  airborne: Wind,
  protective: ShieldCheck,
};

const isolationLabels: Record<IsolationType, string> = {
  contact: "Contact precautions",
  droplet: "Droplet precautions",
  airborne: "Airborne precautions",
  protective: "Protective isolation",
};

export type IsolationTypeBadgeProps = HTMLAttributes<HTMLSpanElement> & {
  type: IsolationType;
};

/**
 * Isolation precaution category -- a classification, not a severity, so it
 * intentionally does not vary color by type. Uses the existing "restricted"
 * tone (isolation precautions are literally an access restriction) and
 * differentiates category by icon + label instead of inventing four new colors.
 */
export function IsolationTypeBadge({ type, className, ...props }: IsolationTypeBadgeProps) {
  const Icon = isolationIcons[type];

  return (
    <span className={cn("spine-isolation-badge", className)} data-type={type} {...props}>
      <Icon aria-hidden="true" size={13} />
      {isolationLabels[type]}
    </span>
  );
}
