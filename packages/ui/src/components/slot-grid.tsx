import type { HTMLAttributes } from "react";

import { cn } from "../cn";

export type SlotStatus = "available" | "booked" | "blocked" | "selected";

export type Slot = {
  id: string;
  /** Display label, e.g. "09:00". */
  time: string;
  status: SlotStatus;
  /** e.g. the booked patient's name. */
  label?: string;
};

export type ResourceRow = {
  id: string;
  /** e.g. "Dr. Rao — OPD 4", "Theatre 2". */
  name: string;
  slots: Slot[];
};

export type SlotGridProps = HTMLAttributes<HTMLDivElement> & {
  resources: ResourceRow[];
  onSlotClick?: (resourceId: string, slotId: string) => void;
};

/**
 * Resource-by-time slot picker -- doctor/slot search, provider schedule
 * management, theatre scheduling. Presentational and controlled: the
 * consuming app owns slot state and click handling. Reuses the .spine-slot
 * styles already shipped for Nadi's original appointment scheduling screens.
 */
export function SlotGrid({ resources, onSlotClick, className, ...props }: SlotGridProps) {
  return (
    <div className={cn("spine-slot-grid", className)} {...props}>
      {resources.map((resource) => (
        <div key={resource.id} className="spine-slot-grid__row">
          <div className="spine-slot-grid__resource">{resource.name}</div>

          <div className="spine-slot-grid__slots">
            {resource.slots.map((slot) => (
              <button
                key={slot.id}
                type="button"
                className="spine-slot"
                data-selected={slot.status === "selected" || undefined}
                data-state={
                  slot.status === "booked" || slot.status === "blocked" ? slot.status : undefined
                }
                disabled={slot.status === "blocked"}
                onClick={() => onSlotClick?.(resource.id, slot.id)}
              >
                <span className="spine-slot__time">{slot.time}</span>
                {slot.label ? <span className="spine-slot__label">{slot.label}</span> : null}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
