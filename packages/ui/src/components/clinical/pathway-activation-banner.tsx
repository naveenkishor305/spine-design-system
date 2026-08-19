import { ShieldAlert, ShieldCheck } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "../../cn";

/** Time-critical pathway triggered at triage or by EMS handover. Free-form to support local pathways beyond the four named here. */
export type PathwayName = "Trauma" | "Stroke" | "STEMI" | "Sepsis" | "Isolation" | (string & {});

export type PathwayActivationStatus = "active" | "downgraded" | "stood-down";

export type PathwayActivationBannerProps = Omit<HTMLAttributes<HTMLDivElement>, "title"> & {
  pathway: PathwayName;
  status?: PathwayActivationStatus;
  /** e.g. "Level I" / "Level II" for trauma activation. */
  activationLevel?: string;
  /** Display text for when the pathway was triggered, e.g. "10:32". */
  activatedAt?: string;
  /** Brief summary of the criteria that triggered activation. */
  criteria?: string;
  /** Mobilize / downgrade / stand-down controls. */
  action?: ReactNode;
};

export function PathwayActivationBanner({
  pathway,
  status = "active",
  activationLevel,
  activatedAt,
  criteria,
  action,
  className,
  ...props
}: PathwayActivationBannerProps) {
  const isActive = status === "active";
  const Icon = isActive ? ShieldAlert : ShieldCheck;
  const statusText =
    status === "active" ? "activated" : status === "downgraded" ? "downgraded" : "stood down";

  return (
    <div
      className={cn("spine-pathway-banner", className)}
      data-status={status}
      role={isActive ? "alert" : "status"}
      {...props}
    >
      <Icon aria-hidden="true" size={20} className="spine-pathway-banner__icon" />

      <div className="spine-pathway-banner__body">
        <div className="spine-pathway-banner__title">
          {pathway} pathway {statusText}
          {activationLevel ? (
            <span className="spine-pathway-banner__level">{activationLevel}</span>
          ) : null}
        </div>

        {criteria ? <p className="spine-pathway-banner__criteria">{criteria}</p> : null}
        {activatedAt ? (
          <p className="spine-pathway-banner__meta">Activated {activatedAt}</p>
        ) : null}
      </div>

      {action ? <div className="spine-pathway-banner__action">{action}</div> : null}
    </div>
  );
}
