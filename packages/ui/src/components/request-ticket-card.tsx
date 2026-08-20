import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../cn";

export type TicketPriority = "low" | "standard" | "high" | "urgent";
export type TicketStatus = "new" | "assigned" | "in-progress" | "verified" | "closed";

export type RequestTicket = {
  id: string;
  title: string;
  location: string;
  priority: TicketPriority;
  status: TicketStatus;
  assignee?: string;
  requestedAt: string;
};

export type RequestTicketCardProps = HTMLAttributes<HTMLDivElement> & {
  ticket: RequestTicket;
  action?: ReactNode;
};

/**
 * Single service-request/ticket card -- housekeeping, biomedical repair,
 * transport dispatch, security incidents, guest/amenity requests. The
 * shared unit that DispatchBoard arranges into columns.
 */
export function RequestTicketCard({ ticket, action, className, ...props }: RequestTicketCardProps) {
  return (
    <div
      className={cn("spine-ticket-card", className)}
      data-priority={ticket.priority}
      {...props}
    >
      <div className="spine-ticket-card__header">
        <p className="spine-ticket-card__title">{ticket.title}</p>
        <span className="spine-ticket-card__priority">{ticket.priority}</span>
      </div>

      <p className="spine-ticket-card__location">{ticket.location}</p>

      <div className="spine-ticket-card__footer">
        <span className="spine-ticket-card__meta">
          {ticket.assignee ?? "Unassigned"} · {ticket.requestedAt}
        </span>
        {action}
      </div>
    </div>
  );
}
