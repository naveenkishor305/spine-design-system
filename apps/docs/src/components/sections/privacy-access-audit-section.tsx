import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock3,
  Download,
  Eye,
  EyeOff,
  FileClock,
  FileText,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Printer,
  Search,
  ShieldAlert,
  ShieldCheck,
  TimerReset,
  UserCheck,
  Users,
} from "lucide-react";

const accessDecisionSteps = [
  {
    number: "01",
    title: "Identity",
    description: "Confirm the authenticated person and active professional role.",
    icon: Fingerprint,
  },
  {
    number: "02",
    title: "Relationship",
    description: "Verify an active care, operational or administrative relationship.",
    icon: Users,
  },
  {
    number: "03",
    title: "Purpose",
    description: "Match the requested information to a valid work purpose.",
    icon: FileText,
  },
  {
    number: "04",
    title: "Scope",
    description: "Reveal only the minimum information required for the task.",
    icon: Eye,
  },
  {
    number: "05",
    title: "Evidence",
    description: "Record access, decisions, exports and exceptional disclosure.",
    icon: FileClock,
  },
];

const privacyPatterns = [
  {
    title: "Restricted record",
    description:
      "Preserve the existence of the record while masking content the current role cannot access.",
    rule: "Explain restriction and escalation path",
    icon: LockKeyhole,
    accent: "#624293",
    background: "#FAF7FD",
    border: "#D6C8E8",
  },
  {
    title: "Privacy veil",
    description:
      "Temporarily conceal patient details when the workspace is unattended or externally visible.",
    rule: "Restore only after identity verification",
    icon: EyeOff,
    accent: "#37536B",
    background: "#F4F7F9",
    border: "#C7D3DC",
  },
  {
    title: "Minimum necessary",
    description:
      "Display only the patient, financial or clinical information needed for the active responsibility.",
    rule: "Scope follows role and purpose",
    icon: UserCheck,
    accent: "#075458",
    background: "#EDF8F7",
    border: "#AFD8D6",
  },
  {
    title: "Controlled disclosure",
    description:
      "Printing and exporting require a declared purpose, appropriate permission and traceable evidence.",
    rule: "Every disclosure remains auditable",
    icon: Download,
    accent: "#895000",
    background: "#FFF9ED",
    border: "#E7D09F",
  },
];

const accessMatrix = [
  {
    role: "Reception",
    patientIdentity: "Full",
    clinicalRecord: "Restricted",
    billing: "Summary",
    export: "No",
  },
  {
    role: "Clinician",
    patientIdentity: "Full",
    clinicalRecord: "Care context",
    billing: "Status only",
    export: "Approved documents",
  },
  {
    role: "Laboratory",
    patientIdentity: "Order context",
    clinicalRecord: "Relevant history",
    billing: "No",
    export: "Result only",
  },
  {
    role: "Billing",
    patientIdentity: "Full",
    clinicalRecord: "Minimum necessary",
    billing: "Full",
    export: "Permission controlled",
  },
  {
    role: "Administrator",
    patientIdentity: "Masked by default",
    clinicalRecord: "No",
    billing: "Aggregated",
    export: "Policy controlled",
  },
];

const breakGlassEvents = [
  {
    time: "11:42:03",
    title: "Emergency access requested",
    actor: "Dr. Asha Menon",
    tone: "warning",
  },
  {
    time: "11:42:08",
    title: "Identity re-authenticated",
    actor: "Hospital identity service",
    tone: "complete",
  },
  {
    time: "11:42:11",
    title: "Purpose and patient recorded",
    actor: "Emergency treatment",
    tone: "complete",
  },
  {
    time: "11:42:12",
    title: "Temporary access activated",
    actor: "Expires at 12:12",
    tone: "active",
  },
];

const auditRows = [
  {
    time: "11:42:12",
    actor: "Dr. Asha Menon",
    event: "Emergency access activated",
    object: "Patient record · UHID 0048217",
    evidence: "Purpose, duration and device recorded",
    risk: "critical",
  },
  {
    time: "11:39:48",
    actor: "Ravi Kumar",
    event: "Discharge summary printed",
    object: "Encounter · IPD-26-01429",
    evidence: "Printer, document version and reason recorded",
    risk: "controlled",
  },
  {
    time: "11:34:17",
    actor: "Neha Shah",
    event: "Insurance document viewed",
    object: "Claim · CLM-26-8291",
    evidence: "Billing relationship verified",
    risk: "routine",
  },
  {
    time: "11:28:06",
    actor: "Dr. Arun Rao",
    event: "Signed note opened",
    object: "Clinical note · CN-26-4908",
    evidence: "Read-only access preserved",
    risk: "routine",
  },
];

export function PrivacyAccessAuditSection() {
  return (
    <section
      id="privacy"
      className="ds-section bg-surface-subtle"
      aria-labelledby="privacy-access-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">Privacy, access & audit · 11 / 13</p>

            <h2
              id="privacy-access-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Sensitive access must remain purposeful, limited and accountable.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Hospital access is determined by identity, role, care relationship,
              declared purpose and clinical consequence—not role labels alone.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <ShieldCheck
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                Restricted information stays discoverable as a protected
                placeholder so users understand what exists and how to request it.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <KeyRound aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Access decision model
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Permission is evaluated for every sensitive action.
            </h3>
          </div>

          <ol className="grid p-5 md:grid-cols-5 md:p-6">
            {accessDecisionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.number}
                  className={`relative p-4 ${
                    index < accessDecisionSteps.length - 1
                      ? "border-b border-border-subtle md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-selected text-action">
                      <Icon aria-hidden="true" size={16} />
                    </span>

                    <span className="ds-mono text-[9px] font-semibold text-ink-tertiary">
                      {step.number}
                    </span>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-ink-primary">
                    {step.title}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </article>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Search aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Restricted-record pattern
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Protection does not create a misleading empty record.
            </h3>
          </div>

          <div className="m-5 overflow-hidden rounded-xl border border-border-default bg-surface md:m-6">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-graphite px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  size={16}
                  className="text-[#8FD3D0]"
                />

                <span className="text-xs font-semibold">
                  Patient record access
                </span>
              </div>

              <span className="ds-mono text-[9px] text-white/50">
                ROLE · BILLING EXECUTIVE
              </span>
            </div>

            <div className="border-b border-border-default bg-[#F1FAF5] px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-white text-action">
                    <Users aria-hidden="true" size={16} />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-ink-primary">
                      Meera Nair
                    </p>

                    <p className="mt-1 text-[9px] text-ink-secondary">
                      UHID 0048217 · Female · 54 years
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[8px] font-bold uppercase tracking-[0.06em] text-[#176B42]">
                  <BadgeCheck aria-hidden="true" size={11} />
                  Identity verified
                </span>
              </div>
            </div>

            <div className="grid xl:grid-cols-[280px_1fr]">
              <aside className="border-b border-border-default bg-surface-subtle p-4 xl:border-b-0 xl:border-r">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                  Available record areas
                </p>

                <nav aria-label="Patient record areas" className="mt-3 space-y-2">
                  {[
                    {
                      label: "Billing and insurance",
                      status: "Available",
                      active: true,
                    },
                    {
                      label: "Patient demographics",
                      status: "Available",
                      active: false,
                    },
                    {
                      label: "Clinical documents",
                      status: "Restricted",
                      active: false,
                    },
                    {
                      label: "Sensitive encounters",
                      status: "Restricted",
                      active: false,
                    },
                  ].map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      className={`flex w-full items-center justify-between gap-3 rounded-md border px-3 py-3 text-left ${
                        item.active
                          ? "border-action bg-selected"
                          : "border-border-subtle bg-surface"
                      }`}
                    >
                      <span className="text-[10px] font-semibold text-ink-primary">
                        {item.label}
                      </span>

                      <span
                        className={`text-[8px] font-bold uppercase tracking-[0.05em] ${
                          item.status === "Restricted"
                            ? "text-[#624293]"
                            : "text-[#176B42]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </button>
                  ))}
                </nav>
              </aside>

              <main className="p-4 md:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                      Clinical documents
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-ink-primary">
                      Protected information
                    </h4>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#F0E9FA] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.06em] text-[#624293]">
                    <LockKeyhole aria-hidden="true" size={11} />
                    Access restricted
                  </span>
                </div>

                <div className="mt-5 rounded-xl border border-[#D6C8E8] bg-[#FAF7FD] p-5 md:p-6">
                  <div className="flex flex-col gap-5 md:flex-row md:items-start">
                    <span className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-[#624293]">
                      <EyeOff aria-hidden="true" size={19} />
                    </span>

                    <div className="flex-1">
                      <p className="text-sm font-semibold text-ink-primary">
                        Clinical documents exist but are not available to your
                        current role.
                      </p>

                      <p className="mt-2 max-w-2xl text-[10px] leading-5 text-ink-secondary">
                        Your billing responsibility does not require access to
                        clinical narrative. Relevant diagnosis and procedure codes
                        remain available inside the active claim.
                      </p>

                      <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {[
                          ["Reason", "Minimum-necessary access"],
                          ["Current role", "Billing executive"],
                          ["Approval owner", "Health information manager"],
                        ].map(([label, value]) => (
                          <div
                            key={label}
                            className="rounded-lg border border-[#E4DAF0] bg-white p-3"
                          >
                            <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                              {label}
                            </p>

                            <p className="mt-2 text-[10px] font-semibold text-ink-primary">
                              {value}
                            </p>
                          </div>
                        ))}
                      </div>

                      <button
                        type="button"
                        className="mt-4 inline-flex h-9 items-center gap-2 rounded-md bg-[#624293] px-3 text-[10px] font-semibold"
                        style={{ color: "#FFFFFF" }}
                      >
                        Request authorized access
                        <ArrowRight aria-hidden="true" size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <ShieldAlert aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Emergency access
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Break-glass access is exceptional, temporary and reviewed.
              </h3>
            </div>

            <div className="p-5 md:p-6">
              <div className="rounded-xl border border-[#E7D09F] bg-[#FFF9ED] p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    aria-hidden="true"
                    size={18}
                    className="mt-0.5 shrink-0 text-[#895000]"
                  />

                  <div>
                    <p className="text-xs font-semibold text-[#895000]">
                      Emergency access requested
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                      Use only when immediate care requires information that your
                      normal permissions do not provide.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-border-default bg-surface-subtle p-3">
                  <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                    Declared purpose
                  </p>

                  <p className="mt-2 text-[10px] font-semibold text-ink-primary">
                    Emergency treatment
                  </p>
                </div>

                <div className="rounded-lg border border-border-default bg-surface-subtle p-3">
                  <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                    Access duration
                  </p>

                  <p className="mt-2 text-[10px] font-semibold text-ink-primary">
                    30 minutes
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-[#E7B7BC] bg-[#FFF7F7] p-4">
                <div className="flex items-start gap-3">
                  <TimerReset
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8C1D27]"
                  />

                  <p className="text-[10px] leading-5 text-ink-secondary">
                    The patient, requester, purpose, accessed information, device
                    and expiry time will be recorded for governance review.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#8C1D27] px-4 text-[10px] font-semibold"
                style={{ color: "#FFFFFF" }}
              >
                <KeyRound aria-hidden="true" size={14} />
                Re-authenticate and continue
              </button>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <FileClock aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Exceptional-access evidence
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Every exceptional step creates visible evidence.
              </h3>
            </div>

            <ol className="divide-y divide-border-subtle">
              {breakGlassEvents.map((event) => (
                <li
                  key={`${event.time}-${event.title}`}
                  className="grid grid-cols-[66px_22px_1fr] gap-3 p-4 md:px-6"
                >
                  <span className="ds-mono pt-1 text-[8px] text-ink-tertiary">
                    {event.time}
                  </span>

                  <span
                    className={`mt-0.5 grid size-5 place-items-center rounded-full ${
                      event.tone === "warning"
                        ? "bg-[#FFF1D6] text-[#895000]"
                        : event.tone === "active"
                          ? "bg-[#FADDE0] text-[#8C1D27]"
                          : "bg-[#DDF3E6] text-[#176B42]"
                    }`}
                  >
                    {event.tone === "warning" ? (
                      <AlertTriangle aria-hidden="true" size={10} />
                    ) : event.tone === "active" ? (
                      <Clock3 aria-hidden="true" size={10} />
                    ) : (
                      <CheckCircle2 aria-hidden="true" size={10} />
                    )}
                  </span>

                  <div>
                    <p className="text-[10px] font-semibold text-ink-primary">
                      {event.title}
                    </p>

                    <p className="mt-1 text-[9px] text-ink-tertiary">
                      {event.actor}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <EyeOff aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Privacy patterns
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Privacy remains visible through behavior, not policy text alone.
            </h3>
          </div>

          <div className="grid gap-3 p-5 md:grid-cols-2 md:p-6 xl:grid-cols-4">
            {privacyPatterns.map((pattern) => {
              const Icon = pattern.icon;

              return (
                <div
                  key={pattern.title}
                  className="rounded-lg border p-4"
                  style={{
                    backgroundColor: pattern.background,
                    borderColor: pattern.border,
                  }}
                >
                  <span
                    className="grid size-9 place-items-center rounded-full bg-white"
                    style={{ color: pattern.accent }}
                  >
                    <Icon aria-hidden="true" size={17} />
                  </span>

                  <p className="mt-4 text-sm font-semibold text-ink-primary">
                    {pattern.title}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                    {pattern.description}
                  </p>

                  <p
                    className="mt-4 border-t border-black/5 pt-3 text-[8px] font-bold uppercase tracking-[0.07em]"
                    style={{ color: pattern.accent }}
                  >
                    {pattern.rule}
                  </p>
                </div>
              );
            })}
          </div>
        </article>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <UserCheck aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Minimum-necessary access matrix
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              The same record reveals different information by responsibility.
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-left">
              <thead className="bg-surface-subtle">
                <tr>
                  {[
                    "Role",
                    "Patient identity",
                    "Clinical record",
                    "Billing",
                    "Export",
                  ].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="border-b border-border-default px-5 py-3 text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary md:px-6"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {accessMatrix.map((row) => (
                  <tr
                    key={row.role}
                    className="border-b border-border-subtle"
                  >
                    <td className="px-5 py-4 text-[10px] font-semibold text-action md:px-6">
                      {row.role}
                    </td>

                    <td className="px-5 py-4 text-[10px] text-ink-secondary md:px-6">
                      {row.patientIdentity}
                    </td>

                    <td className="px-5 py-4 text-[10px] text-ink-secondary md:px-6">
                      {row.clinicalRecord}
                    </td>

                    <td className="px-5 py-4 text-[10px] text-ink-secondary md:px-6">
                      {row.billing}
                    </td>

                    <td className="px-5 py-4 text-[10px] font-semibold text-ink-primary md:px-6">
                      {row.export}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-border-subtle p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div>
              <div className="flex items-center gap-2 text-action">
                <FileClock aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Audit evidence
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                The record explains who did what, where, why and when.
              </h3>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex h-9 items-center gap-2 rounded-md border border-border-default bg-surface px-3 text-[10px] font-semibold text-action"
              >
                <Printer aria-hidden="true" size={13} />
                Print evidence
              </button>

              <button
                type="button"
                className="inline-flex h-9 items-center gap-2 rounded-md bg-action px-3 text-[10px] font-semibold"
                style={{ color: "#FFFFFF" }}
              >
                <Download aria-hidden="true" size={13} />
                Export log
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left">
              <thead className="bg-surface-subtle">
                <tr>
                  {["Time", "Actor", "Event", "Object", "Evidence"].map(
                    (heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="border-b border-border-default px-4 py-3 text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary"
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>

              <tbody>
                {auditRows.map((row) => (
                  <tr
                    key={`${row.time}-${row.event}`}
                    className={`border-b border-border-subtle ${
                      row.risk === "critical" ? "bg-[#FFF7F7]" : ""
                    }`}
                  >
                    <td className="ds-mono px-4 py-4 text-[9px] text-ink-tertiary">
                      {row.time}
                    </td>

                    <td className="px-4 py-4 text-[10px] font-semibold text-ink-primary">
                      {row.actor}
                    </td>

                    <td className="px-4 py-4 text-[10px] font-semibold text-action">
                      {row.event}
                    </td>

                    <td className="px-4 py-4 text-[10px] text-ink-secondary">
                      {row.object}
                    </td>

                    <td className="px-4 py-4 text-[10px] leading-5 text-ink-secondary">
                      <div className="flex items-start gap-2">
                        <CheckCircle2
                          aria-hidden="true"
                          size={13}
                          className={`mt-0.5 shrink-0 ${
                            row.risk === "critical"
                              ? "text-[#8C1D27]"
                              : "text-[#176B42]"
                          }`}
                        />

                        {row.evidence}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-[#D6C8E8] bg-[#FAF7FD] p-5 md:p-6">
            <div className="flex items-start gap-4">
              <EyeOff
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-[#624293]"
              />

              <div>
                <p className="text-sm font-semibold text-ink-primary">
                  Privacy veil protects unattended workspaces
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  Patient details are concealed after inactivity, manual
                  activation or display-sharing detection. Unsaved work remains
                  protected underneath the veil.
                </p>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-[#624293]">
                  Identity verification required to restore
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-[#E7D09F] bg-[#FFF9ED] p-5 md:p-6">
            <div className="flex items-start gap-4">
              <Download
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-[#895000]"
              />

              <div>
                <p className="text-sm font-semibold text-ink-primary">
                  Disclosure controls travel with the document
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  Printed and exported records include patient identity,
                  document version, disclosure purpose, timestamp and responsible
                  user.
                </p>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-[#895000]">
                  Export permission does not imply unlimited reuse
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
              <p className="text-sm font-semibold">
                Privacy and accountability rule
              </p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Every sensitive interaction evaluates identity, relationship,
                purpose and minimum-necessary scope. Exceptional access expires,
                disclosure remains controlled and every meaningful action leaves
                understandable evidence.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-PRIV-001 · ACCESS VERIFIED
          </span>
        </aside>
      </div>
    </section>
  );
}
