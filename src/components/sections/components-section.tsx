import {
  AlertTriangle,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Copy,
  Info,
  LockKeyhole,
  Search,
  ShieldAlert,
  ShieldCheck,
  UserRound,
  XCircle,
} from "lucide-react";

const semanticStates = [
  {
    title: "Information",
    message: "A previous consultation note is available.",
    icon: Info,
    foreground: "#155D8D",
    surface: "#E6F2FA",
    border: "#B8D8EC",
  },
  {
    title: "Success",
    message: "Critical result acknowledgement recorded.",
    icon: CheckCircle2,
    foreground: "#176B42",
    surface: "#E4F4EB",
    border: "#B9DFC9",
  },
  {
    title: "Warning",
    message: "Review the medication interaction before signing.",
    icon: ShieldAlert,
    foreground: "#895000",
    surface: "#FFF1D6",
    border: "#E9CE91",
  },
  {
    title: "Critical",
    message: "Potassium result requires immediate clinical action.",
    icon: AlertTriangle,
    foreground: "#8C1D27",
    surface: "#FADDE0",
    border: "#E7B7BC",
  },
];

const statusTokens = [
  {
    label: "Confirmed",
    foreground: "#176B42",
    surface: "#E4F4EB",
  },
  {
    label: "In review",
    foreground: "#895000",
    surface: "#FFF1D6",
  },
  {
    label: "Critical",
    foreground: "#8C1D27",
    surface: "#FADDE0",
  },
  {
    label: "Restricted",
    foreground: "#624293",
    surface: "#F0E9FA",
  },
  {
    label: "Draft",
    foreground: "#4A5F66",
    surface: "#EEF2F3",
  },
];

const queueRows = [
  {
    task: "Acknowledge critical potassium result",
    patient: "Meera Nair",
    owner: "Dr Ananya Rao",
    due: "Now",
    status: "Critical",
    statusColor: "#8C1D27",
    statusSurface: "#FADDE0",
  },
  {
    task: "Complete consultation note",
    patient: "Arjun Menon",
    owner: "Dr Ananya Rao",
    due: "10:45",
    status: "Draft",
    statusColor: "#4A5F66",
    statusSurface: "#EEF2F3",
  },
  {
    task: "Review discharge medication",
    patient: "Farah Khan",
    owner: "Clinical pharmacy",
    due: "11:20",
    status: "In review",
    statusColor: "#895000",
    statusSurface: "#FFF1D6",
  },
];

export function ComponentsSection() {
  return (
    <section
      id="components"
      className="ds-section bg-surface"
      aria-labelledby="components-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">Components · 03 / 13</p>

            <h2
              id="components-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Reusable decisions, not decorative building blocks.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Components encode hierarchy, clinical meaning, accessibility and
              safe interaction patterns across every hospital workspace.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <ShieldCheck
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                Each component includes visible states, operational language and
                a defined role within the complete workflow.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Actions
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                One clear hierarchy for every decision.
              </h3>

              <p className="mt-2 text-xs leading-5 text-ink-secondary">
                Primary actions move work forward. Critical actions are reserved
                for exceptional safety consequences.
              </p>
            </div>

            <div className="space-y-5 p-5 md:p-6">
              <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="ds-mono text-[10px] text-ink-tertiary">
                  Primary
                </span>

                <button
                  type="button"
                  className="inline-flex h-10 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md bg-action px-4 text-xs font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-action-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
                  style={{ color: "#FFFFFF" }}
                >
                  Acknowledge result
                  <ArrowRight aria-hidden="true" size={14} />
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="ds-mono text-[10px] text-ink-tertiary">
                  Secondary
                </span>

                <button
                  type="button"
                  className="inline-flex h-10 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md border border-border-default bg-surface px-4 text-xs font-semibold text-ink-primary transition-colors hover:border-action hover:bg-selected focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2"
                >
                  <UserRound aria-hidden="true" size={14} />
                  Open patient record
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="ds-mono text-[10px] text-ink-tertiary">
                  Tertiary
                </span>

                <button
                  type="button"
                  className="inline-flex h-10 w-fit items-center justify-center rounded-md px-3 text-xs font-semibold text-action transition-colors hover:bg-selected focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  View clinical history
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="ds-mono text-[10px] text-ink-tertiary">
                  Critical
                </span>

                <button
                  type="button"
                  className="inline-flex h-10 w-fit items-center justify-center gap-2 whitespace-nowrap rounded-md bg-[#8C1D27] px-4 text-xs font-semibold transition-colors hover:bg-[#701820] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1D27] focus-visible:ring-offset-2"
                  style={{ color: "#FFFFFF" }}
                >
                  <AlertTriangle aria-hidden="true" size={14} />
                  Escalate now
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="ds-mono text-[10px] text-ink-tertiary">
                  Disabled
                </span>

                <button
                  type="button"
                  disabled
                  className="inline-flex h-10 w-fit cursor-not-allowed items-center justify-center gap-2 rounded-md border border-border-default bg-surface-subtle px-4 text-xs font-semibold text-ink-tertiary opacity-70"
                >
                  <Check aria-hidden="true" size={14} />
                  Sign clinical note
                </button>
              </div>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Fields and controls
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Labels, context and recovery stay visible.
              </h3>

              <p className="mt-2 text-xs leading-5 text-ink-secondary">
                Inputs never depend on placeholder text alone and validation
                appears beside the decision it affects.
              </p>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-2 md:p-6">
              <label className="block">
                <span className="text-xs font-semibold text-ink-primary">
                  Patient search
                </span>

                <span className="mt-1 block text-[10px] text-ink-tertiary">
                  Name, MRN or mobile number
                </span>

                <span className="relative mt-2 block">
                  <Search
                    aria-hidden="true"
                    size={15}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-tertiary"
                  />

                  <input
                    type="search"
                    placeholder="Search patients"
                    className="h-11 w-full rounded-md border border-border-default bg-surface pl-9 pr-3 text-xs text-ink-primary outline-none transition-colors placeholder:text-ink-tertiary focus:border-action focus:ring-2 focus:ring-selected"
                  />
                </span>
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-ink-primary">
                  Encounter ID
                </span>

                <span className="mt-1 block text-[10px] text-ink-tertiary">
                  System-generated identifier
                </span>

                <span className="relative mt-2 block">
                  <input
                    type="text"
                    value="OPD-26-08154"
                    readOnly
                    className="ds-mono h-11 w-full rounded-md border border-border-default bg-surface-subtle px-3 pr-9 text-[11px] text-ink-secondary outline-none"
                  />

                  <LockKeyhole
                    aria-hidden="true"
                    size={14}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-tertiary"
                  />
                </span>
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-ink-primary">
                  Care location
                </span>

                <span className="mt-1 block text-[10px] text-ink-tertiary">
                  Required for clinical context
                </span>

                <span className="relative mt-2 block">
                  <select
                    defaultValue="opd-4"
                    className="h-11 w-full appearance-none rounded-md border border-border-default bg-surface px-3 pr-9 text-xs text-ink-primary outline-none transition-colors focus:border-action focus:ring-2 focus:ring-selected"
                  >
                    <option value="opd-4">Internal Medicine · OPD 4</option>
                    <option value="opd-5">Internal Medicine · OPD 5</option>
                  </select>

                  <ChevronDown
                    aria-hidden="true"
                    size={14}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-ink-tertiary"
                  />
                </span>
              </label>

              <label className="block">
                <span className="text-xs font-semibold text-ink-primary">
                  Medication dose
                </span>

                <span className="mt-1 block text-[10px] text-[#8C1D27]">
                  Dose is outside the expected range
                </span>

                <input
                  type="text"
                  value="500 mg"
                  readOnly
                  aria-invalid="true"
                  aria-describedby="dose-error"
                  className="mt-2 h-11 w-full rounded-md border border-[#B84049] bg-[#FFF9F9] px-3 text-xs text-ink-primary outline-none ring-2 ring-[#FADDE0]"
                />

                <span
                  id="dose-error"
                  className="mt-2 flex items-center gap-1.5 text-[10px] text-[#8C1D27]"
                >
                  <XCircle aria-hidden="true" size={12} />
                  Confirm dose before continuing
                </span>
              </label>
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-subtle p-5 md:p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Patient identity band
              </p>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Identity remains anchored to every clinical action.
              </h3>
            </div>

            <span className="ds-mono rounded border border-border-default bg-surface-subtle px-2 py-1 text-[10px] text-ink-tertiary">
              CMP-IDENTITY-01
            </span>
          </div>

          <div className="bg-canvas p-4 md:p-6">
            <div className="overflow-hidden rounded-lg border border-border-default bg-surface shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 p-4 md:p-5">
                <div className="flex min-w-0 gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-selected text-action">
                    <UserRound aria-hidden="true" size={19} />
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-ink-primary">
                        Meera Nair
                      </p>

                      <span className="rounded bg-[#FFF1D6] px-2 py-1 text-[9px] font-bold text-[#895000]">
                        PENICILLIN ALLERGY
                      </span>

                      <span className="rounded bg-[#E4F4EB] px-2 py-1 text-[9px] font-bold text-[#176B42]">
                        CONSENT ACTIVE
                      </span>
                    </div>

                    <p className="ds-mono mt-2 text-[10px] text-ink-tertiary">
                      42 years · Female · MRN HOS-024718 · OPD-26-08154
                    </p>

                    <p className="mt-2 text-[11px] text-ink-secondary">
                      Internal Medicine · OPD 4 · Dr Ananya Rao
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Copy patient identifier"
                  className="grid size-9 place-items-center rounded-md border border-border-default bg-surface text-ink-secondary transition-colors hover:border-action hover:bg-selected hover:text-action focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus"
                >
                  <Copy aria-hidden="true" size={15} />
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle bg-surface-subtle px-4 py-2.5">
                <span className="flex items-center gap-2 text-[10px] text-ink-secondary">
                  <ShieldCheck
                    aria-hidden="true"
                    size={13}
                    className="text-action"
                  />
                  Identity verified at 10:28
                </span>

                <span className="ds-mono text-[9px] text-ink-tertiary">
                  Context preserved across workspace
                </span>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Semantic feedback
              </p>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Meaning is communicated through more than color.
              </h3>
            </div>

            <div className="grid gap-3 p-5 md:grid-cols-2 md:p-6">
              {semanticStates.map((state) => {
                const Icon = state.icon;

                return (
                  <div
                    key={state.title}
                    className="rounded-lg border p-4"
                    style={{
                      backgroundColor: state.surface,
                      borderColor: state.border,
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <Icon
                        aria-hidden="true"
                        size={17}
                        className="mt-0.5 shrink-0"
                        style={{ color: state.foreground }}
                      />

                      <div>
                        <p
                          className="text-xs font-semibold"
                          style={{ color: state.foreground }}
                        >
                          {state.title}
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-ink-secondary">
                          {state.message}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Status indicators
              </p>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Short, explicit and operational.
              </h3>
            </div>

            <div className="p-5 md:p-6">
              <div className="flex flex-wrap gap-2">
                {statusTokens.map((status) => (
                  <span
                    key={status.label}
                    className="inline-flex items-center gap-1.5 rounded px-2.5 py-1.5 text-[10px] font-semibold"
                    style={{
                      backgroundColor: status.surface,
                      color: status.foreground,
                    }}
                  >
                    <span
                      className="size-1.5 rounded-full"
                      style={{ backgroundColor: status.foreground }}
                    />
                    {status.label}
                  </span>
                ))}
              </div>

              <div className="mt-7 border-t border-border-subtle pt-5">
                <div className="flex items-start gap-3">
                  <CircleHelp
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-action"
                  />

                  <div>
                    <p className="text-xs font-semibold text-ink-primary">
                      Status labels describe the current state
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-ink-secondary">
                      They do not replace ownership, due time or the next
                      required action.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border-subtle p-5 md:p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Work queue
              </p>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Safety-weighted rows preserve ownership and urgency.
              </h3>
            </div>

            <span className="flex items-center gap-2 text-[10px] text-ink-tertiary">
              <Clock3 aria-hidden="true" size={13} />
              Updated 10:32
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full border-collapse text-left">
              <thead className="bg-surface-subtle">
                <tr>
                  {["Task", "Patient", "Owner", "Due", "Status"].map(
                    (heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="border-b border-border-default px-5 py-3 text-[9px] font-bold uppercase tracking-[0.1em] text-ink-tertiary"
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>

              <tbody>
                {queueRows.map((row) => (
                  <tr
                    key={row.task}
                    className="transition-colors hover:bg-canvas"
                  >
                    <td className="border-b border-border-subtle px-5 py-4 text-xs font-semibold text-ink-primary">
                      {row.task}
                    </td>

                    <td className="border-b border-border-subtle px-5 py-4 text-[11px] text-ink-secondary">
                      {row.patient}
                    </td>

                    <td className="border-b border-border-subtle px-5 py-4 text-[11px] text-ink-secondary">
                      {row.owner}
                    </td>

                    <td className="ds-mono border-b border-border-subtle px-5 py-4 text-[10px] text-ink-secondary">
                      {row.due}
                    </td>

                    <td className="border-b border-border-subtle px-5 py-4">
                      <span
                        className="inline-flex rounded px-2 py-1 text-[9px] font-semibold"
                        style={{
                          backgroundColor: row.statusSurface,
                          color: row.statusColor,
                        }}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="mt-6 flex flex-col justify-between gap-6 rounded-xl bg-graphite p-6 text-white md:flex-row md:items-center md:p-8">
          <div className="flex max-w-3xl items-start gap-4">
            <ShieldCheck
              aria-hidden="true"
              size={22}
              className="mt-0.5 shrink-0 text-[#8FD3D0]"
            />

            <div>
              <p className="text-sm font-semibold">
                Component acceptance rule
              </p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                A component is complete only when default, hover, focus,
                disabled, loading, error and recovery states are defined.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-CMP-001 · GOVERNED
          </span>
        </aside>
      </div>
    </section>
  );
}
