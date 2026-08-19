import {
  Activity,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  FileText,
  History,
  Info,
  LockKeyhole,
  Pill,
  RotateCcw,
  Save,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Stethoscope,
  UserRound,
} from "lucide-react";

import {
  AcuityBadge,
  Button,
  PathwayActivationBanner,
  ReassessmentTimer,
  type AcuityProtocol,
} from "@naveenkishor305/spine-ui";

const workflowSteps = [
  {
    label: "Confirm patient",
    description: "Identity and encounter verified",
    status: "complete",
  },
  {
    label: "Review context",
    description: "Allergy and renal function checked",
    status: "complete",
  },
  {
    label: "Resolve warning",
    description: "Dose exceeds the expected range",
    status: "current",
  },
  {
    label: "Sign order",
    description: "Available after warning resolution",
    status: "locked",
  },
];

const labTrend = [
  { time: "08:10", value: "4.8", width: "42%" },
  { time: "09:05", value: "5.4", width: "57%" },
  { time: "10:18", value: "6.2", width: "78%" },
  { time: "10:32", value: "6.7", width: "92%", critical: true },
];

const triageQueue: {
  patient: string;
  complaint: string;
  level: 1 | 2 | 3 | 4 | 5;
  protocol: AcuityProtocol;
  waiting: string;
  reassessment: number;
}[] = [
  {
    patient: "Devika Iyer",
    complaint: "Chest pain, diaphoretic",
    level: 2,
    protocol: "ESI",
    waiting: "3 min",
    reassessment: 12,
  },
  {
    patient: "Ravi Chandran",
    complaint: "Closed forearm fracture",
    level: 3,
    protocol: "CTAS",
    waiting: "18 min",
    reassessment: -6,
  },
  {
    patient: "Sunita Verma",
    complaint: "Sore throat, low-grade fever",
    level: 5,
    protocol: "Manchester",
    waiting: "41 min",
    reassessment: 54,
  },
];

const disclosureLevels = [
  {
    label: "Level 1",
    title: "Decision summary",
    description: "The minimum information required to choose the next action.",
  },
  {
    label: "Level 2",
    title: "Clinical context",
    description: "Trend, reference range, medication and recent history.",
  },
  {
    label: "Level 3",
    title: "Source evidence",
    description: "Full report, audit history and originating laboratory data.",
  },
];

export function ClinicalPatternsSection() {
  return (
    <section
      id="clinical-patterns"
      className="ds-section bg-canvas"
      aria-labelledby="clinical-patterns-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">Clinical patterns · 04 / 13</p>

            <h2
              id="clinical-patterns-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Safe workflows make the next decision unmistakable.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Clinical patterns combine components into repeatable workflows
              that protect patient context, communicate risk and preserve
              recovery.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <Stethoscope
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                The system adapts to clinical consequence: routine work stays
                efficient while high-risk decisions deliberately slow down.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-subtle p-5 md:p-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Persistent patient context
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Identity remains visible through every decision.
              </h3>
            </div>

            <span className="flex items-center gap-2 rounded bg-[#E4F4EB] px-3 py-2 text-[10px] font-semibold text-[#176B42]">
              <ShieldCheck aria-hidden="true" size={14} />
              Identity verified
            </span>
          </div>

          <div className="bg-surface p-5 md:p-6">
            <div className="overflow-hidden rounded-lg border border-border-default shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-5 bg-surface p-4 md:p-5">
                <div className="flex min-w-0 items-center gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-selected text-action">
                    <UserRound aria-hidden="true" size={20} />
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-ink-primary">
                        Meera Nair
                      </p>

                      <span className="rounded bg-[#FFF1D6] px-2 py-1 text-[9px] font-bold text-[#895000]">
                        PENICILLIN ALLERGY
                      </span>
                    </div>

                    <p className="ds-mono mt-2 text-[10px] text-ink-tertiary">
                      42 years · Female · MRN HOS-024718
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-right md:grid-cols-3">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.08em] text-ink-tertiary">
                      Encounter
                    </p>
                    <p className="ds-mono mt-1 text-[10px] text-ink-primary">
                      OPD-26-08154
                    </p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.08em] text-ink-tertiary">
                      Location
                    </p>
                    <p className="mt-1 text-[10px] text-ink-primary">OPD 4</p>
                  </div>

                  <div>
                    <p className="text-[9px] uppercase tracking-[0.08em] text-ink-tertiary">
                      Clinician
                    </p>
                    <p className="mt-1 text-[10px] text-ink-primary">
                      Dr Ananya Rao
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border-subtle bg-surface-subtle px-4 py-2.5">
                <span className="flex items-center gap-2 text-[10px] text-ink-secondary">
                  <Activity aria-hidden="true" size={13} className="text-action" />
                  Context persists across results, orders and documentation
                </span>

                <span className="ds-mono text-[9px] text-ink-tertiary">
                  Last verified 10:28
                </span>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.12fr_0.88fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-[#8C1D27]">
                <ShieldAlert aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Critical result interruption
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Interrupt only when delay could cause harm.
              </h3>

              <p className="mt-2 text-xs leading-5 text-ink-secondary">
                The interruption explains the clinical risk, required response
                and ownership without removing patient context.
              </p>
            </div>

            <div className="grid gap-5 p-5 lg:grid-cols-[0.9fr_1.1fr] md:p-6">
              <div className="rounded-lg border border-border-default bg-surface p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                      Potassium
                    </p>

                    <div className="mt-2 flex items-baseline gap-2">
                      <span className="ds-mono text-4xl font-semibold text-[#8C1D27]">
                        6.7
                      </span>
                      <span className="text-xs text-ink-secondary">mmol/L</span>
                    </div>
                  </div>

                  <span className="rounded bg-[#FADDE0] px-2.5 py-1.5 text-[9px] font-bold text-[#8C1D27]">
                    CRITICAL
                  </span>
                </div>

                <p className="mt-3 text-[10px] text-ink-tertiary">
                  Reference range: 3.5–5.1 mmol/L
                </p>

                <div className="mt-5 space-y-3 border-t border-border-subtle pt-4">
                  {labTrend.map((result) => (
                    <div
                      key={result.time}
                      className="grid grid-cols-[42px_1fr_34px] items-center gap-3"
                    >
                      <span className="ds-mono text-[9px] text-ink-tertiary">
                        {result.time}
                      </span>

                      <div className="h-2 overflow-hidden rounded-full bg-surface-subtle">
                        <div
                          className={`h-full rounded-full ${
                            result.critical ? "bg-[#8C1D27]" : "bg-action"
                          }`}
                          style={{ width: result.width }}
                        />
                      </div>

                      <span
                        className={`ds-mono text-right text-[9px] font-semibold ${
                          result.critical
                            ? "text-[#8C1D27]"
                            : "text-ink-secondary"
                        }`}
                      >
                        {result.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#E7B7BC] bg-[#FFF7F7] p-4">
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#FADDE0] text-[#8C1D27]">
                    <AlertTriangle aria-hidden="true" size={17} />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#8C1D27]">
                      Immediate clinical review required
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
                      Confirm the result, assess the patient and document the
                      escalation before leaving this workflow.
                    </p>
                  </div>
                </div>

                <div className="mt-5 space-y-2 rounded-md border border-[#E7B7BC] bg-white p-3">
                  <p className="text-[10px] font-semibold text-ink-primary">
                    Required response
                  </p>

                  <label className="flex items-start gap-2 text-[10px] leading-4 text-ink-secondary">
                    <input type="checkbox" className="mt-0.5 accent-[#075458]" />
                    Result reviewed against patient context
                  </label>

                  <label className="flex items-start gap-2 text-[10px] leading-4 text-ink-secondary">
                    <input type="checkbox" className="mt-0.5 accent-[#075458]" />
                    Responsible clinician notified
                  </label>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#8C1D27] px-4 text-xs font-semibold transition-colors hover:bg-[#701820] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8C1D27] focus-visible:ring-offset-2"
                    style={{ color: "#FFFFFF" }}
                  >
                    Acknowledge result
                    <ArrowRight aria-hidden="true" size={14} />
                  </button>

                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-border-default bg-surface px-4 text-xs font-semibold text-ink-primary hover:bg-surface-subtle"
                  >
                    View full report
                  </button>
                </div>
              </div>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Pill aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Review before commitment
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                High-risk actions reveal their consequence first.
              </h3>
            </div>

            <div className="p-5 md:p-6">
              <ol className="space-y-1">
                {workflowSteps.map((step, index) => (
                  <li
                    key={step.label}
                    className={`flex gap-3 rounded-lg border p-3 ${
                      step.status === "current"
                        ? "border-[#E9CE91] bg-[#FFF9ED]"
                        : "border-transparent"
                    }`}
                  >
                    <span
                      className={`grid size-7 shrink-0 place-items-center rounded-full text-[10px] font-bold ${
                        step.status === "complete"
                          ? "bg-[#E4F4EB] text-[#176B42]"
                          : step.status === "current"
                            ? "bg-[#FFF1D6] text-[#895000]"
                            : "bg-surface-subtle text-ink-tertiary"
                      }`}
                    >
                      {step.status === "complete" ? (
                        <CheckCircle2 aria-hidden="true" size={14} />
                      ) : step.status === "locked" ? (
                        <LockKeyhole aria-hidden="true" size={13} />
                      ) : (
                        index + 1
                      )}
                    </span>

                    <div>
                      <p className="text-xs font-semibold text-ink-primary">
                        {step.label}
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-ink-secondary">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-5 rounded-lg border border-[#E9CE91] bg-[#FFF1D6] p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-[#895000]"
                  />

                  <div>
                    <p className="text-xs font-semibold text-[#895000]">
                      Dose requires confirmation
                    </p>
                    <p className="mt-1 text-[10px] leading-5 text-ink-secondary">
                      Prescribed 500 mg exceeds the recommended range for the
                      recorded renal function.
                    </p>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-action px-4 text-xs font-semibold hover:bg-action-hover"
                style={{ color: "#FFFFFF" }}
              >
                Review dose and continue
                <ArrowRight aria-hidden="true" size={14} />
              </button>
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="grid xl:grid-cols-[0.72fr_1.28fr]">
            <div className="border-b border-border-subtle p-5 md:p-6 xl:border-b-0 xl:border-r">
              <div className="flex items-center gap-2 text-action">
                <Info aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Progressive disclosure
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Show enough to decide, then reveal evidence on demand.
              </h3>

              <p className="mt-3 text-xs leading-5 text-ink-secondary">
                Clinical density is managed through hierarchy rather than
                hiding essential risk or forcing unnecessary navigation.
              </p>
            </div>

            <div className="grid md:grid-cols-3">
              {disclosureLevels.map((level, index) => (
                <div
                  key={level.label}
                  className="border-b border-border-subtle p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:p-6"
                >
                  <span className="ds-mono text-[9px] font-semibold text-action">
                    0{index + 1} · {level.label}
                  </span>

                  <p className="mt-4 text-sm font-semibold text-ink-primary">
                    {level.title}
                  </p>

                  <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
                    {level.description}
                  </p>

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold text-action"
                  >
                    View layer
                    <ArrowRight aria-hidden="true" size={12} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Save aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Save and recovery
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Clinical work survives interruption.
              </h3>
            </div>

            <div className="p-5 md:p-6">
              <div className="rounded-lg border border-border-default bg-surface p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-full bg-[#E4F4EB] text-[#176B42]">
                      <CheckCircle2 aria-hidden="true" size={16} />
                    </span>

                    <div>
                      <p className="text-xs font-semibold text-ink-primary">
                        Consultation note saved
                      </p>
                      <p className="mt-1 text-[10px] text-ink-secondary">
                        Automatically saved at 10:34
                      </p>
                    </div>
                  </div>

                  <span className="ds-mono text-[9px] text-ink-tertiary">
                    Version 8
                  </span>
                </div>
              </div>

              <div className="mt-3 rounded-lg border border-border-default bg-surface-subtle p-4">
                <div className="flex items-start gap-3">
                  <RotateCcw
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-action"
                  />

                  <div className="flex-1">
                    <p className="text-xs font-semibold text-ink-primary">
                      Unsaved changes recovered
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-ink-secondary">
                      Text entered before the connection interruption has been
                      restored.
                    </p>

                    <button
                      type="button"
                      className="mt-3 text-[10px] font-semibold text-action"
                    >
                      Review recovered changes
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[10px] text-ink-tertiary">
                <Clock3 aria-hidden="true" size={13} />
                Recovery state remains visible until acknowledged
              </div>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <LockKeyhole aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Permission boundary
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Restricted actions explain the path forward.
              </h3>
            </div>

            <div className="p-5 md:p-6">
              <div className="rounded-lg border border-[#D7CAE9] bg-[#FAF7FD] p-4">
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#F0E9FA] text-[#624293]">
                    <LockKeyhole aria-hidden="true" size={16} />
                  </span>

                  <div>
                    <span className="rounded bg-[#F0E9FA] px-2 py-1 text-[9px] font-bold text-[#624293]">
                      RESTRICTED
                    </span>

                    <p className="mt-3 text-sm font-semibold text-ink-primary">
                      Controlled medication approval required
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
                      Your role can prepare this order, but a credentialed
                      prescriber must review and sign it.
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 border-t border-[#D7CAE9] pt-4 sm:grid-cols-2">
                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-action px-4 text-xs font-semibold hover:bg-action-hover"
                    style={{ color: "#FFFFFF" }}
                  >
                    Request approval
                    <ArrowRight aria-hidden="true" size={14} />
                  </button>

                  <button
                    type="button"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-border-default bg-surface px-4 text-xs font-semibold text-ink-primary hover:bg-surface-subtle"
                  >
                    View policy
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3">
                <FileText
                  aria-hidden="true"
                  size={15}
                  className="mt-0.5 shrink-0 text-action"
                />

                <p className="text-[10px] leading-5 text-ink-secondary">
                  The system preserves the prepared order and records the
                  approval request in the audit history.
                </p>
              </div>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Emergency &amp; Trauma
              </p>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                One acuity scale, four protocols.
              </h3>

              <p className="mt-2 text-xs leading-5 text-ink-secondary">
                ESI, CTAS, Manchester and ATS all map onto the same five-step
                scale. Color is never the only signal — the numeral and
                urgency word are always shown together.
              </p>
            </div>

            <div className="divide-y divide-border-subtle">
              {triageQueue.map((row) => (
                <div
                  key={row.patient}
                  className="flex flex-wrap items-center justify-between gap-3 p-4 md:px-6"
                >
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-ink-primary">
                      {row.patient}
                    </p>
                    <p className="mt-1 text-[11px] text-ink-secondary">
                      {row.complaint} · waiting {row.waiting}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <AcuityBadge level={row.level} protocol={row.protocol} />
                    <ReassessmentTimer dueInMinutes={row.reassessment} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Pathway activation
              </p>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Time-critical pathways interrupt the workflow.
              </h3>

              <p className="mt-2 text-xs leading-5 text-ink-secondary">
                Trauma, stroke, STEMI, sepsis and isolation triggers use the
                critical tone — distinct from acuity — because the action
                required is activation, not classification.
              </p>
            </div>

            <div className="space-y-4 p-5 md:p-6">
              <PathwayActivationBanner
                pathway="Trauma"
                status="active"
                activationLevel="Level I"
                criteria="High-speed collision, unstable vitals on EMS handover"
                activatedAt="10:32"
                action={
                  <>
                    <Button
                      variant="critical"
                      size="sm"
                      startIcon={<Siren aria-hidden="true" size={13} />}
                    >
                      Mobilize team
                    </Button>
                    <Button variant="tertiary" size="sm">
                      Downgrade
                    </Button>
                  </>
                }
              />

              <PathwayActivationBanner
                pathway="Stroke"
                status="downgraded"
                criteria="Symptom onset outside thrombolysis window"
                activatedAt="09:58"
              />
            </div>
          </article>
        </div>

        <aside className="mt-6 flex flex-col justify-between gap-6 rounded-xl bg-graphite p-6 text-white md:flex-row md:items-center md:p-8">
          <div className="flex max-w-3xl items-start gap-4">
            <History
              aria-hidden="true"
              size={22}
              className="mt-0.5 shrink-0 text-[#8FD3D0]"
            />

            <div>
              <p className="text-sm font-semibold">Clinical pattern rule</p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Every high-consequence workflow preserves patient identity,
                explains risk, identifies ownership and provides a safe recovery
                path.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-PAT-001 · SAFETY REVIEWED
          </span>
        </aside>
      </div>
    </section>
  );
}

