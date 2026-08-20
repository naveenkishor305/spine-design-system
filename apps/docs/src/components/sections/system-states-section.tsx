import {
  AlertTriangle,
  ArrowRight,
  Ban,
  CheckCircle2,
  CircleDashed,
  ClipboardCheck,
  CloudOff,
  FileClock,
  Info,
  LoaderCircle,
  LockKeyhole,
  RefreshCcw,
  RotateCcw,
  Save,
  SearchX,
  ShieldAlert,
  ShieldCheck,
  TimerReset,
  WifiOff,
  XCircle,
} from "lucide-react";

const stateFamilies = [
  {
    name: "Informational",
    purpose: "Explain context without interrupting work.",
    example: "Referral package updated 4 minutes ago.",
    icon: Info,
    accent: "#37536B",
    background: "#F4F7F9",
    border: "#C7D3DC",
  },
  {
    name: "In progress",
    purpose: "Show active processing and expected completion.",
    example: "Insurance authorization is being reviewed.",
    icon: LoaderCircle,
    accent: "#075458",
    background: "#EDF8F7",
    border: "#AFD8D6",
  },
  {
    name: "Successful",
    purpose: "Confirm completion and preserve evidence.",
    example: "Clinical note signed and added to the record.",
    icon: CheckCircle2,
    accent: "#176B42",
    background: "#F1FAF5",
    border: "#B9DDC9",
  },
  {
    name: "Warning",
    purpose: "Expose risk while safe continuation remains possible.",
    example: "Authorization expires within 24 hours.",
    icon: AlertTriangle,
    accent: "#895000",
    background: "#FFF9ED",
    border: "#E7D09F",
  },
  {
    name: "Critical",
    purpose: "Interrupt when clinical or operational harm is possible.",
    example: "Potassium result requires acknowledgement.",
    icon: ShieldAlert,
    accent: "#8C1D27",
    background: "#FFF7F7",
    border: "#E7B7BC",
  },
  {
    name: "Restricted",
    purpose: "Explain why an action is unavailable and who can help.",
    example: "Clinical approval is required before cancellation.",
    icon: LockKeyhole,
    accent: "#624293",
    background: "#FAF7FD",
    border: "#D6C8E8",
  },
];

const stateMatrix = [
  {
    state: "Loading",
    trigger: "Requested information has not returned",
    message: "Describe what is loading",
    action: "Wait or cancel safely",
    persistence: "Keep surrounding context visible",
  },
  {
    state: "Empty",
    trigger: "No records exist in the current scope",
    message: "Explain why the area is empty",
    action: "Offer the correct first action",
    persistence: "Preserve filters and role context",
  },
  {
    state: "No results",
    trigger: "Search or filters return zero matches",
    message: "Repeat the active search scope",
    action: "Clear or adjust filters",
    persistence: "Keep the entered query",
  },
  {
    state: "Validation error",
    trigger: "Entered information is incomplete or unsafe",
    message: "Place the issue beside its source",
    action: "Correct without losing work",
    persistence: "Retain all valid entries",
  },
  {
    state: "System failure",
    trigger: "The service cannot complete the request",
    message: "State the impact and recovery status",
    action: "Retry or route to support",
    persistence: "Protect prepared work",
  },
  {
    state: "Permission blocked",
    trigger: "The signed-in role lacks authority",
    message: "Explain the permission boundary",
    action: "Request the correct approval",
    persistence: "Save the prepared transaction",
  },
];

const recoverySteps = [
  {
    number: "01",
    title: "Preserve",
    description:
      "Keep valid entries, selections, filters and patient context intact.",
    icon: Save,
  },
  {
    number: "02",
    title: "Explain",
    description:
      "State what happened, what was affected and whether clinical work is safe.",
    icon: Info,
  },
  {
    number: "03",
    title: "Route",
    description:
      "Identify the person, permission or system responsible for resolution.",
    icon: ArrowRight,
  },
  {
    number: "04",
    title: "Recover",
    description:
      "Provide a safe retry, alternate workflow or clearly monitored queue.",
    icon: RotateCcw,
  },
];

const emptyStates = [
  {
    title: "No results",
    description:
      "No patients match “Meera Nair” within Cardiology OPD today.",
    action: "Clear filters",
    icon: SearchX,
  },
  {
    title: "Work queue complete",
    description:
      "All assigned critical-result acknowledgements have been completed.",
    action: "View completed work",
    icon: ClipboardCheck,
  },
  {
    title: "Access restricted",
    description:
      "Medication pricing is available only to authorized billing roles.",
    action: "Request access",
    icon: Ban,
  },
];

const auditEvents = [
  {
    time: "10:34:12",
    title: "Consultation note saved",
    actor: "Dr. Arun Rao",
    status: "complete",
  },
  {
    time: "10:35:08",
    title: "Connection interrupted",
    actor: "Hospital network",
    status: "warning",
  },
  {
    time: "10:35:09",
    title: "Unsynced changes retained",
    actor: "Clinical workspace",
    status: "complete",
  },
  {
    time: "10:36:21",
    title: "Connection restored",
    actor: "Hospital network",
    status: "complete",
  },
  {
    time: "10:36:24",
    title: "Clinical note synchronized",
    actor: "Dr. Arun Rao",
    status: "complete",
  },
];

export function SystemStatesSection() {
  return (
    <section
      id="states"
      className="ds-section bg-canvas"
      aria-labelledby="system-states-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">System states & recovery · 10 / 13</p>

            <h2
              id="system-states-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Every system response must explain what happened and what happens next.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Hospital work cannot disappear behind generic spinners, silent
              failures or disabled controls. Every state preserves context,
              communicates impact and supports safe recovery.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <ShieldCheck
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                State severity follows clinical consequence—not visual
                decoration or technical implementation.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <CircleDashed aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Semantic state families
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Color, language and interruption level communicate one meaning.
            </h3>
          </div>

          <div className="grid gap-3 p-5 md:grid-cols-2 md:p-6 xl:grid-cols-3">
            {stateFamilies.map((state) => {
              const Icon = state.icon;

              return (
                <div
                  key={state.name}
                  className="rounded-lg border p-4"
                  style={{
                    backgroundColor: state.background,
                    borderColor: state.border,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="grid size-9 shrink-0 place-items-center rounded-full bg-white"
                      style={{ color: state.accent }}
                    >
                      <Icon aria-hidden="true" size={17} />
                    </span>

                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: state.accent }}
                      >
                        {state.name}
                      </p>

                      <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                        {state.purpose}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 border-t border-black/5 pt-3">
                    <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                      Example
                    </p>

                    <p className="mt-2 text-[10px] font-semibold leading-4 text-ink-primary">
                      {state.example}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <WifiOff aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Recoverable clinical workspace
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Interrupted work remains visible, protected and traceable.
            </h3>
          </div>

          <div className="m-5 overflow-hidden rounded-xl border border-border-default bg-surface md:m-6">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-graphite px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <FileClock
                  aria-hidden="true"
                  size={16}
                  className="text-[#8FD3D0]"
                />

                <span className="text-xs font-semibold">
                  Consultation note · Meera Nair
                </span>
              </div>

              <span className="ds-mono text-[9px] text-white/50">
                OPD-26-08154
              </span>
            </div>

            <div
              role="alert"
              className="border-b border-[#E7D09F] bg-[#FFF9ED] p-4"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div className="flex items-start gap-3">
                  <CloudOff
                    aria-hidden="true"
                    size={18}
                    className="mt-0.5 shrink-0 text-[#895000]"
                  />

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-[#895000]">
                        Connection interrupted
                      </p>

                      <span className="rounded bg-[#FFE7B3] px-2 py-1 text-[8px] font-bold uppercase tracking-[0.06em] text-[#895000]">
                        Recovery active
                      </span>
                    </div>

                    <p className="mt-2 max-w-2xl text-[10px] leading-5 text-ink-secondary">
                      Your note remains available in this workspace. It will not
                      be added to the patient record until synchronization
                      succeeds.
                    </p>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[9px] text-ink-secondary">
                      <span>
                        Last synchronized:{" "}
                        <strong className="text-ink-primary">10:34</strong>
                      </span>

                      <span>
                        Unsynced changes:{" "}
                        <strong className="text-ink-primary">3</strong>
                      </span>

                      <span>
                        Owner:{" "}
                        <strong className="text-ink-primary">
                          Dr. Arun Rao
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md bg-[#895000] px-3 text-[10px] font-semibold"
                  style={{ color: "#FFFFFF" }}
                >
                  <RefreshCcw aria-hidden="true" size={13} />
                  Retry connection
                </button>
              </div>
            </div>

            <div className="grid xl:grid-cols-[1fr_340px]">
              <div className="border-b border-border-default p-4 md:p-5 xl:border-b-0 xl:border-r">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                      Assessment
                    </p>

                    <p className="mt-2 text-xs font-semibold text-ink-primary">
                      Clinical note retained during interruption
                    </p>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1D6] px-3 py-2 text-[8px] font-bold text-[#895000]">
                    <Save aria-hidden="true" size={11} />
                    SAVED IN WORKSPACE
                  </span>
                </div>

                <div className="mt-4 rounded-lg border border-border-default bg-surface-subtle p-4">
                  <p className="text-[11px] leading-6 text-ink-secondary">
                    Patient reports persistent fatigue and intermittent
                    palpitations. Critical potassium result reviewed. External
                    cardiac MRI referral remains pending authorization.
                  </p>
                </div>

                <div className="mt-4 rounded-lg border border-[#E7B7BC] bg-[#FFF7F7] p-4">
                  <div className="flex items-start gap-3">
                    <XCircle
                      aria-hidden="true"
                      size={16}
                      className="mt-0.5 shrink-0 text-[#8C1D27]"
                    />

                    <div>
                      <p className="text-xs font-semibold text-[#8C1D27]">
                        Signing is temporarily unavailable
                      </p>

                      <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                        The note cannot be signed until all retained changes
                        synchronize with the patient record.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <aside className="bg-surface-subtle p-4 md:p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                  Recovery status
                </p>

                <ol className="mt-4 space-y-4">
                  {auditEvents.map((event) => (
                    <li
                      key={`${event.time}-${event.title}`}
                      className="grid grid-cols-[56px_18px_1fr] gap-2"
                    >
                      <span className="ds-mono pt-0.5 text-[8px] text-ink-tertiary">
                        {event.time}
                      </span>

                      <span
                        className={`mt-0.5 grid size-4 place-items-center rounded-full ${
                          event.status === "warning"
                            ? "bg-[#FFF1D6] text-[#895000]"
                            : "bg-[#DDF3E6] text-[#176B42]"
                        }`}
                      >
                        {event.status === "warning" ? (
                          <AlertTriangle aria-hidden="true" size={9} />
                        ) : (
                          <CheckCircle2 aria-hidden="true" size={9} />
                        )}
                      </span>

                      <div>
                        <p className="text-[9px] font-semibold text-ink-primary">
                          {event.title}
                        </p>

                        <p className="mt-1 text-[8px] text-ink-tertiary">
                          {event.actor}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </aside>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <TimerReset aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  State matrix
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Common states use consistent communication and recovery rules.
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[820px] border-collapse text-left">
                <thead className="bg-surface-subtle">
                  <tr>
                    {[
                      "State",
                      "Trigger",
                      "Message",
                      "Primary action",
                      "Preserve",
                    ].map((heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="border-b border-border-default px-4 py-3 text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {stateMatrix.map((row) => (
                    <tr
                      key={row.state}
                      className="border-b border-border-subtle"
                    >
                      <td className="px-4 py-4 text-[10px] font-semibold text-action">
                        {row.state}
                      </td>

                      <td className="px-4 py-4 text-[10px] leading-5 text-ink-secondary">
                        {row.trigger}
                      </td>

                      <td className="px-4 py-4 text-[10px] leading-5 text-ink-secondary">
                        {row.message}
                      </td>

                      <td className="px-4 py-4 text-[10px] font-semibold text-ink-primary">
                        {row.action}
                      </td>

                      <td className="px-4 py-4 text-[10px] leading-5 text-ink-secondary">
                        {row.persistence}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <RotateCcw aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Recovery contract
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Recovery follows one predictable four-step structure.
              </h3>
            </div>

            <ol className="divide-y divide-border-subtle">
              {recoverySteps.map((step) => {
                const Icon = step.icon;

                return (
                  <li
                    key={step.number}
                    className="grid grid-cols-[38px_36px_1fr] gap-3 p-4 md:px-6"
                  >
                    <span className="ds-mono pt-2 text-[9px] font-semibold text-ink-tertiary">
                      {step.number}
                    </span>

                    <span className="grid size-9 place-items-center rounded-full bg-selected text-action">
                      <Icon aria-hidden="true" size={15} />
                    </span>

                    <div>
                      <p className="text-xs font-semibold text-ink-primary">
                        {step.title}
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-ink-secondary">
                        {step.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <SearchX aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Empty-state distinctions
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              An empty surface must explain whether work is absent, complete or restricted.
            </h3>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-3 md:p-6">
            {emptyStates.map((state) => {
              const Icon = state.icon;

              return (
                <div
                  key={state.title}
                  className="flex min-h-56 flex-col items-center justify-center rounded-xl border border-dashed border-border-default bg-surface-subtle p-6 text-center"
                >
                  <span className="grid size-11 place-items-center rounded-full bg-surface text-action shadow-sm">
                    <Icon aria-hidden="true" size={19} />
                  </span>

                  <p className="mt-4 text-sm font-semibold text-ink-primary">
                    {state.title}
                  </p>

                  <p className="mt-2 max-w-xs text-[10px] leading-5 text-ink-secondary">
                    {state.description}
                  </p>

                  <button
                    type="button"
                    className="mt-4 inline-flex h-9 items-center gap-2 rounded-md border border-border-default bg-surface px-3 text-[10px] font-semibold text-action"
                  >
                    {state.action}
                    <ArrowRight aria-hidden="true" size={12} />
                  </button>
                </div>
              );
            })}
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-[#E7B7BC] bg-[#FFF7F7] p-5 md:p-6">
            <div className="flex items-start gap-4">
              <ShieldAlert
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-[#8C1D27]"
              />

              <div>
                <p className="text-sm font-semibold text-[#8C1D27]">
                  Critical states require acknowledgement
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  Clinical risk remains active until a named owner reviews the
                  event, records the response and completes the acknowledgement.
                </p>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-[#8C1D27]">
                  Never dismiss automatically
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-[#D6C8E8] bg-[#FAF7FD] p-5 md:p-6">
            <div className="flex items-start gap-4">
              <LockKeyhole
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-[#624293]"
              />

              <div>
                <p className="text-sm font-semibold text-[#624293]">
                  Disabled actions require an explanation
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  The interface identifies the unmet condition, preserves
                  prepared work and shows the role or approval needed to continue.
                </p>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-[#624293]">
                  Never rely on reduced opacity alone
                </p>
              </div>
            </div>
          </article>
        </div>

        <aside className="mt-6 flex flex-col justify-between gap-6 rounded-xl bg-graphite p-6 text-white md:flex-row md:items-center md:p-8">
          <div className="flex max-w-3xl items-start gap-4">
            <ShieldCheck
              aria-hidden="true"
              size={22}
              className="mt-0.5 shrink-0 text-[#8FD3D0]"
            />

            <div>
              <p className="text-sm font-semibold">System-state rule</p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Every state communicates cause, impact, ownership, persistence
                and the safest next action. Failure never removes patient context
                or silently discards completed work.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-STATE-001 · RECOVERY VERIFIED
          </span>
        </aside>
      </div>
    </section>
  );
}
