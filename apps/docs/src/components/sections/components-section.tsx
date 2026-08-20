import {
  AlertTriangle,
  ArrowRight,
  Check,
  Clock3,
  Copy,
  Info,
  LockKeyhole,
  Search,
  ShieldCheck,
  UserRound,
} from "lucide-react";

import {
  AgingReceivablesLadder,
  Alert,
  AssetLifecycleRecord,
  Button,
  ChainOfCustodyTrail,
  ComplianceCountdown,
  DispatchBoard,
  HierarchyTree,
  IconButton,
  InteractionSeverityBadge,
  InventoryLevelGauge,
  IsolationTypeBadge,
  MetricTile,
  ProcessStageTracker,
  QueueTokenBoard,
  RankedBarList,
  RiskScoreBadge,
  SlotGrid,
  StatusBadge,
  SelectField,
  SupplierComparisonMatrix,
  TextField,
  Timeline,
  VarianceIndicator,
  type ComparisonCandidate,
  type ComparisonCriterion,
  type ProcessStage,
  type StatusTone,
} from "@naveenkishor305/spine-ui";

const semanticStates: {
  tone: StatusTone;
  title: string;
  message: string;
}[] = [
  {
    tone: "information",
    title: "Information",
    message: "A previous consultation note is available.",
  },
  {
    tone: "success",
    title: "Success",
    message: "Critical result acknowledgement recorded.",
  },
  {
    tone: "warning",
    title: "Warning",
    message: "Review the medication interaction before signing.",
  },
  {
    tone: "critical",
    title: "Critical",
    message: "Potassium result requires immediate clinical action.",
  },
];

const statusTokens: { tone: StatusTone; label: string }[] = [
  { tone: "success", label: "Confirmed" },
  { tone: "warning", label: "In review" },
  { tone: "critical", label: "Critical" },
  { tone: "restricted", label: "Restricted" },
  { tone: "neutral", label: "Draft" },
];

const queueRows: {
  task: string;
  patient: string;
  owner: string;
  due: string;
  status: string;
  tone: StatusTone;
}[] = [
  {
    task: "Acknowledge critical potassium result",
    patient: "Meera Nair",
    owner: "Dr Ananya Rao",
    due: "Now",
    status: "Critical",
    tone: "critical",
  },
  {
    task: "Complete consultation note",
    patient: "Arjun Menon",
    owner: "Dr Ananya Rao",
    due: "10:45",
    status: "Draft",
    tone: "neutral",
  },
  {
    task: "Review discharge medication",
    patient: "Farah Khan",
    owner: "Clinical pharmacy",
    due: "11:20",
    status: "In review",
    tone: "warning",
  },
];

const requisitionStages: ProcessStage[] = [
  { id: "requested", label: "Requested", status: "complete" },
  { id: "approved", label: "Approved", status: "complete" },
  { id: "fulfilled", label: "Fulfilled", status: "current" },
  { id: "closed", label: "Closed", status: "upcoming" },
];

const rankedDepartments = [
  { id: "opd", label: "Outpatient Care", value: 412, displayValue: "412 requests" },
  { id: "ed", label: "Emergency", value: 298, displayValue: "298 requests" },
  { id: "inpatient", label: "Inpatient Wards", value: 176, displayValue: "176 requests" },
  { id: "pharmacy", label: "Pharmacy", value: 94, displayValue: "94 requests" },
];

const dispatchColumns = [
  {
    status: "new" as const,
    label: "New",
    tickets: [
      {
        id: "t-1",
        title: "Isolation room terminal clean",
        location: "Ward 4B · Room 412",
        priority: "high" as const,
        status: "new" as const,
        requestedAt: "5 min ago",
      },
    ],
  },
  {
    status: "assigned" as const,
    label: "Assigned",
    tickets: [
      {
        id: "t-2",
        title: "Infusion pump repair",
        location: "Biomedical workshop",
        priority: "urgent" as const,
        status: "assigned" as const,
        assignee: "R. Fernandes",
        requestedAt: "22 min ago",
      },
    ],
  },
  {
    status: "verified" as const,
    label: "Verified",
    tickets: [
      {
        id: "t-3",
        title: "Specimen courier run",
        location: "Lab → Radiology",
        priority: "standard" as const,
        status: "verified" as const,
        assignee: "Transport team B",
        requestedAt: "1 hr ago",
      },
    ],
  },
];

const sourcingCriteria: ComparisonCriterion[] = [
  { id: "price", label: "Price", weight: 0.4 },
  { id: "delivery", label: "Delivery reliability", weight: 0.35 },
  { id: "compliance", label: "Compliance", weight: 0.25 },
];

const sourcingCandidates: ComparisonCandidate[] = [
  { id: "meditech", name: "MediTech Supplies", scores: { price: 8, delivery: 9, compliance: 10 }, recommended: true },
  { id: "carewell", name: "Carewell Distribution", scores: { price: 9, delivery: 6, compliance: 8 } },
  { id: "healthlink", name: "HealthLink Partners", scores: { price: 7, delivery: 7, compliance: 9 } },
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
              Every example on this page renders the real{" "}
              <code className="ds-mono">@naveenkishor305/spine-ui</code>{" "}
              components — not a static mockup. What you see here is exactly
              what ships to product apps.
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

        <div id="components-actions-fields" className="mt-10 grid gap-6 xl:grid-cols-2 scroll-mt-20">
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

                <Button variant="primary" endIcon={<ArrowRight aria-hidden="true" size={14} />}>
                  Acknowledge result
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="ds-mono text-[10px] text-ink-tertiary">
                  Secondary
                </span>

                <Button variant="secondary" startIcon={<UserRound aria-hidden="true" size={14} />}>
                  Open patient record
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="ds-mono text-[10px] text-ink-tertiary">
                  Tertiary
                </span>

                <Button variant="tertiary">View clinical history</Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="ds-mono text-[10px] text-ink-tertiary">
                  Critical
                </span>

                <Button
                  variant="critical"
                  startIcon={<AlertTriangle aria-hidden="true" size={14} />}
                >
                  Escalate now
                </Button>
              </div>

              <div className="grid gap-3 sm:grid-cols-[120px_1fr] sm:items-center">
                <span className="ds-mono text-[10px] text-ink-tertiary">
                  Disabled
                </span>

                <Button
                  variant="secondary"
                  disabled
                  startIcon={<Check aria-hidden="true" size={14} />}
                >
                  Sign clinical note
                </Button>
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
              <TextField
                id="patient-search"
                label="Patient search"
                description="Name, MRN or mobile number"
                type="search"
                placeholder="Search patients"
                startAdornment={<Search aria-hidden="true" size={15} />}
              />

              <TextField
                id="encounter-id"
                label="Encounter ID"
                description="System-generated identifier"
                value="OPD-26-08154"
                readOnly
                className="ds-mono"
                endAdornment={<LockKeyhole aria-hidden="true" size={14} />}
              />

              <SelectField
                id="care-location"
                label="Care location"
                description="Required for clinical context"
                defaultValue="opd-4"
              >
                <option value="opd-4">Internal Medicine · OPD 4</option>
                <option value="opd-5">Internal Medicine · OPD 5</option>
              </SelectField>

              <TextField
                id="medication-dose"
                label="Medication dose"
                value="500 mg"
                readOnly
                error="Confirm dose before continuing"
              />
            </div>
          </article>
        </div>

        <article id="components-identity" className="ds-panel mt-6 overflow-hidden scroll-mt-20">
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

                      <StatusBadge tone="warning">PENICILLIN ALLERGY</StatusBadge>
                      <StatusBadge tone="success">CONSENT ACTIVE</StatusBadge>
                    </div>

                    <p className="ds-mono mt-2 text-[10px] text-ink-tertiary">
                      42 years · Female · MRN HOS-024718 · OPD-26-08154
                    </p>

                    <p className="mt-2 text-[11px] text-ink-secondary">
                      Internal Medicine · OPD 4 · Dr Ananya Rao
                    </p>
                  </div>
                </div>

                <IconButton
                  label="Copy patient identifier"
                  icon={<Copy aria-hidden="true" size={15} />}
                />
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

        <div id="components-feedback" className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr] scroll-mt-20">
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
              {semanticStates.map((state) => (
                <Alert key={state.title} tone={state.tone} title={state.title}>
                  {state.message}
                </Alert>
              ))}
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
                  <StatusBadge key={status.label} tone={status.tone} showDot>
                    {status.label}
                  </StatusBadge>
                ))}
              </div>

              <div className="mt-7 border-t border-border-subtle pt-5">
                <div className="flex items-start gap-3">
                  <Info aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-action" />

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

        <article id="components-queue" className="ds-panel mt-6 overflow-hidden scroll-mt-20">
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
                      <StatusBadge tone={row.tone}>{row.status}</StatusBadge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <article id="components-lifecycle" className="ds-panel overflow-hidden scroll-mt-20">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Shared primitives · lifecycle &amp; audit
              </p>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Reused across every operational module.
              </h3>

              <p className="mt-2 text-xs leading-5 text-ink-secondary">
                One process-stage and one audit-trail language, composed
                differently per domain — a requisition, an asset, a blood
                product handoff.
              </p>
            </div>

            <div className="grid gap-6 p-5 md:p-6">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Process stage tracker
                </p>
                <ProcessStageTracker stages={requisitionStages} />
              </div>

              <div className="flex flex-wrap gap-3">
                <ComplianceCountdown label="Calibration" dueText="due in 6 days" />
                <ComplianceCountdown label="Calibration" dueText="overdue by 2 days" overdue />
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Chain of custody
                </p>
                <ChainOfCustodyTrail
                  handoffs={[
                    {
                      id: "h-1",
                      timestamp: "09:14",
                      from: "Blood bank",
                      to: "OT 2 runner",
                      item: "Unit 4 packed red cells",
                      witness: "S. Patel, RN",
                      verified: true,
                    },
                    {
                      id: "h-2",
                      timestamp: "09:21",
                      from: "OT 2 runner",
                      to: "Anesthesia team",
                      item: "Unit 4 packed red cells",
                      verified: false,
                    },
                  ]}
                />
              </div>

              <AssetLifecycleRecord
                assetName="Infusion pump — IP-0231"
                assetId="BME-AST-0231"
                stage="maintenance-due"
                location="Ward 4B"
                nextAction={<ComplianceCountdown label="PM service" dueText="due in 3 days" />}
              />

              <div className="flex flex-wrap gap-2">
                <RiskScoreBadge label="Fall risk" level="high" score="14" />
                <RiskScoreBadge label="MUST score" level="low" score="0" />
                <RiskScoreBadge label="Safeguarding" level="critical" />
                <IsolationTypeBadge type="contact" />
                <IsolationTypeBadge type="airborne" />
                <InteractionSeverityBadge severity="contraindicated" label="Warfarin + Aspirin" />
                <InteractionSeverityBadge severity="moderate" label="Metformin + Contrast" />
              </div>
            </div>
          </article>

          <article id="components-scheduling" className="ds-panel overflow-hidden scroll-mt-20">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
                Shared primitives · scheduling, dispatch &amp; dashboards
              </p>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                The gaps closed in already-shipped scope.
              </h3>

              <p className="mt-2 text-xs leading-5 text-ink-secondary">
                Scheduling and outpatient-care shipped in v1 without a real
                slot grid or queue board — every screen faked it with a
                table. These close that gap.
              </p>
            </div>

            <div className="grid gap-6 p-5 md:p-6">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Provider slot grid
                </p>
                <SlotGrid
                  resources={[
                    {
                      id: "dr-rao",
                      name: "Dr. Rao — OPD 4",
                      slots: [
                        { id: "s1", time: "09:00", status: "booked", label: "A. Menon" },
                        { id: "s2", time: "09:15", status: "available" },
                        { id: "s3", time: "09:30", status: "selected" },
                        { id: "s4", time: "09:45", status: "blocked" },
                      ],
                    },
                  ]}
                />
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Queue token board
                </p>
                <QueueTokenBoard
                  tokens={[
                    { id: "q1", token: "A-014", label: "Meera Nair", status: "called", waitTime: "0 min" },
                    { id: "q2", token: "A-015", label: "Arjun Menon", status: "waiting", waitTime: "8 min" },
                    { id: "q3", token: "A-016", label: "Farah Khan", status: "in-progress" },
                  ]}
                />
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Dispatch board
                </p>
                <DispatchBoard columns={dispatchColumns} />
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <MetricTile
                  label="Avg. wait time"
                  value="12 min"
                  comparison={<VarianceIndicator value="-2.3 min" sentiment="positive" />}
                />
                <MetricTile
                  label="SLA breaches"
                  value="4"
                  comparison={<VarianceIndicator value="+1" sentiment="negative" />}
                />
                <MetricTile
                  label="Occupied beds"
                  value="87%"
                  comparison={<VarianceIndicator value="No change" sentiment="neutral" />}
                />
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Ranked bar list
                </p>
                <RankedBarList items={rankedDepartments} />
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Aging receivables ladder
                </p>
                <AgingReceivablesLadder
                  buckets={[
                    { id: "current", label: "Current", amount: 182000, displayAmount: "$182,000", severity: "success" },
                    { id: "31-60", label: "31–60 days", amount: 94000, displayAmount: "$94,000", severity: "neutral" },
                    { id: "61-90", label: "61–90 days", amount: 41000, displayAmount: "$41,000", severity: "warning" },
                    { id: "90plus", label: "90+ days", amount: 23000, displayAmount: "$23,000", severity: "critical" },
                  ]}
                />
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Inventory level gauge
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <InventoryLevelGauge label="IV Fluid — 0.9% NaCl 500ml" current={340} min={200} max={600} unit="units" />
                  <InventoryLevelGauge label="Surgical gloves — size M" current={80} min={150} max={500} unit="boxes" />
                </div>
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Supplier comparison matrix
                </p>
                <SupplierComparisonMatrix criteria={sourcingCriteria} candidates={sourcingCandidates} />
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Hierarchy tree
                </p>
                <HierarchyTree
                  nodes={[
                    {
                      id: "hospital",
                      label: "Hospital OS",
                      meta: "Enterprise",
                      children: [
                        {
                          id: "clinical-ops",
                          label: "Clinical Operations",
                          meta: "3 departments",
                          children: [
                            { id: "ed", label: "Emergency Department" },
                            { id: "icu", label: "Intensive Care Unit" },
                          ],
                        },
                        { id: "support-services", label: "Support Services", meta: "6 departments" },
                      ],
                    },
                  ]}
                  selectedId="ed"
                />
              </div>

              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                  Timeline
                </p>
                <Timeline
                  entries={[
                    {
                      id: "e1",
                      timestamp: "08:02",
                      actor: "R. Fernandes, Biomedical",
                      description: "Repair ticket opened for infusion pump IP-0231.",
                    },
                    {
                      id: "e2",
                      timestamp: "08:45",
                      actor: "R. Fernandes, Biomedical",
                      description: "Diagnosed faulty occlusion sensor.",
                      tone: "warning",
                    },
                    {
                      id: "e3",
                      timestamp: "09:30",
                      actor: "R. Fernandes, Biomedical",
                      description: "Part replaced, safety-tested, returned to service.",
                      tone: "success",
                    },
                  ]}
                />
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
