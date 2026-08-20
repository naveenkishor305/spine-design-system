import { Check, Clock3 } from "lucide-react";
import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type CustodyHandoff = {
  id: string;
  timestamp: string;
  from: string;
  to: string;
  /** What's being transferred, e.g. "Unit 4 packed red cells", "Body bag #14". */
  item: string;
  witness?: string;
  verified: boolean;
};

export type ChainOfCustodyTrailProps = HTMLAttributes<HTMLOListElement> & {
  handoffs: CustodyHandoff[];
};

/**
 * Legally defensible multi-party handoff trail -- blood products, controlled
 * substances, specimens, deceased body release, evidence, contaminated waste.
 * Distinct from Timeline because every step requires an explicit verified/
 * pending signal, not just a narrative log entry.
 */
export function ChainOfCustodyTrail({ handoffs, className, ...props }: ChainOfCustodyTrailProps) {
  return (
    <ol className={cn("spine-custody-trail", className)} {...props}>
      {handoffs.map((handoff) => (
        <li
          key={handoff.id}
          className="spine-custody-trail__item"
          data-verified={handoff.verified || undefined}
        >
          <span className="spine-custody-trail__marker" aria-hidden="true">
            {handoff.verified ? <Check size={12} /> : <Clock3 size={12} />}
          </span>

          <div className="spine-custody-trail__content">
            <p className="spine-custody-trail__transfer">
              {handoff.from} <span aria-hidden="true">→</span> {handoff.to}
            </p>
            <p className="spine-custody-trail__item-name">{handoff.item}</p>
            <p className="spine-custody-trail__meta">
              {handoff.timestamp}
              {handoff.witness ? ` · Witnessed by ${handoff.witness}` : ""}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
