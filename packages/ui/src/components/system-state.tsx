import {
  CircleDashed,
  LockKeyhole,
  SearchX,
  ShieldAlert,
  XCircle,
} from "lucide-react";
import type { ReactNode } from "react";

import { Panel, PanelBody } from "./panel";

export type SystemStateKind =
  | "loading"
  | "empty"
  | "no-results"
  | "error"
  | "restricted"
  | "critical";

const stateIcons: Record<SystemStateKind, typeof CircleDashed> = {
  loading: CircleDashed,
  empty: SearchX,
  "no-results": SearchX,
  error: XCircle,
  restricted: LockKeyhole,
  critical: ShieldAlert,
};

export type SystemStateProps = {
  kind: SystemStateKind;
  title: string;
  description: string;
  preserved?: string;
  nextStep?: string;
  escalation?: string;
  action?: ReactNode;
};

export function SystemState({
  kind,
  title,
  description,
  preserved,
  nextStep,
  escalation,
  action,
}: SystemStateProps) {
  const Icon = stateIcons[kind];
  const isLoading = kind === "loading";
  const isInterruptive = kind === "error" || kind === "critical";

  return (
    <Panel
      elevation="flat"
      role={isInterruptive ? "alert" : "status"}
      aria-live={isLoading ? "polite" : undefined}
      className="h-full"
    >
      <PanelBody className="spine-system-state">
        <span className="spine-system-state__icon" data-kind={kind}>
          {isLoading ? (
            <span className="spine-spinner" aria-hidden="true" />
          ) : (
            <Icon aria-hidden="true" size={19} />
          )}
        </span>

        <h3 className="spine-system-state__title">{title}</h3>
        <p className="spine-system-state__description">{description}</p>

        {preserved || nextStep || escalation ? (
          <dl className="spine-system-state__meta">
            {preserved ? (
              <div>
                <dt>Preserved</dt>
                <dd>{preserved}</dd>
              </div>
            ) : null}
            {nextStep ? (
              <div>
                <dt>Next action</dt>
                <dd>{nextStep}</dd>
              </div>
            ) : null}
            {escalation ? (
              <div>
                <dt>Escalation</dt>
                <dd>{escalation}</dd>
              </div>
            ) : null}
          </dl>
        ) : null}

        {action ? <div className="spine-system-state__action">{action}</div> : null}
      </PanelBody>
    </Panel>
  );
}
