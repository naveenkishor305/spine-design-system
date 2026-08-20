import type { HTMLAttributes } from "react";

import { cn } from "../cn";
import type { StatusTone } from "./status-badge";

export type TimelineEntry = {
  id: string;
  /** Display string, not a Date -- callers own formatting/timezone. */
  timestamp: string;
  actor: string;
  description: string;
  tone?: StatusTone;
};

export type TimelineProps = HTMLAttributes<HTMLOListElement> & {
  entries: TimelineEntry[];
};

/** Chronological actor/timestamp/description trail -- audit logs, encounter history, department lifecycle. */
export function Timeline({ entries, className, ...props }: TimelineProps) {
  return (
    <ol className={cn("spine-timeline", className)} {...props}>
      {entries.map((entry) => (
        <li key={entry.id} className="spine-timeline__item" data-tone={entry.tone ?? "neutral"}>
          <span className="spine-timeline__marker" aria-hidden="true" />
          <div className="spine-timeline__content">
            <div className="spine-timeline__meta">
              <span className="spine-timeline__timestamp">{entry.timestamp}</span>
              <span className="spine-timeline__actor">{entry.actor}</span>
            </div>
            <p className="spine-timeline__description">{entry.description}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
