import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";
import { RequestTicketCard, type RequestTicket, type TicketStatus } from "./request-ticket-card";

export type DispatchBoardColumn = {
  status: TicketStatus;
  label: string;
  tickets: RequestTicket[];
};

export type DispatchBoardProps = HTMLAttributes<HTMLDivElement> & {
  columns: DispatchBoardColumn[];
  renderAction?: (ticket: RequestTicket) => ReactNode;
};

/** Kanban-style intake → assign → execute → verify board built from RequestTicketCard. */
export function DispatchBoard({ columns, renderAction, className, ...props }: DispatchBoardProps) {
  return (
    <div className={cn("spine-dispatch-board", className)} {...props}>
      {columns.map((column) => (
        <div key={column.status} className="spine-dispatch-board__column">
          <div className="spine-dispatch-board__column-header">
            {column.label}
            <span className="spine-dispatch-board__count">{column.tickets.length}</span>
          </div>

          <div className="spine-dispatch-board__column-body">
            {column.tickets.map((ticket) => (
              <RequestTicketCard
                key={ticket.id}
                ticket={ticket}
                action={renderAction?.(ticket)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
