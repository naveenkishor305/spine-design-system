import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type QueueTokenStatus = "waiting" | "called" | "in-progress" | "done" | "no-show";

export type QueueToken = {
  id: string;
  /** e.g. "A-014". */
  token: string;
  /** Patient name or identifier. */
  label: string;
  status: QueueTokenStatus;
  waitTime?: string;
};

export type QueueTokenBoardProps = HTMLAttributes<HTMLDivElement> & {
  tokens: QueueToken[];
};

/** Live walk-in/OPD queue display -- token-first, not row-first, so it reads at a glance from across a waiting room. */
export function QueueTokenBoard({ tokens, className, ...props }: QueueTokenBoardProps) {
  return (
    <div className={cn("spine-queue-board", className)} {...props}>
      {tokens.map((item) => (
        <div key={item.id} className="spine-queue-token" data-status={item.status}>
          <span className="spine-queue-token__number">{item.token}</span>
          <span className="spine-queue-token__label">{item.label}</span>
          <span className="spine-queue-token__status">{item.status.replace("-", " ")}</span>
          {item.waitTime ? <span className="spine-queue-token__wait">{item.waitTime}</span> : null}
        </div>
      ))}
    </div>
  );
}
