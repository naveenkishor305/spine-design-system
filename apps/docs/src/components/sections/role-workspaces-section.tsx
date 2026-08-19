import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  BedDouble,
  BellRing,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  Clock3,
  CreditCard,
  FlaskConical,
  LayoutDashboard,
  LockKeyhole,
  Search,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

const roleProfiles = [
  {
    name: "Clinician",
    focus: "Diagnosis and treatment",
    description:
      "Consultations, clinical documentation, orders, results and prescriptions.",
    icon: Stethoscope,
    accent: "#075458",
    background: "#EDF8F7",
  },
  {
    name: "Nursing",
    focus: "Continuous patient care",
    description:
      "Assessments, vital signs, medication tasks and care-team handoffs.",
    icon: BedDouble,
    accent: "#176B42",
    background: "#F1FAF5",
  },
  {
    name: "Laboratory",
    focus: "Diagnostic workflow",
    description:
      "Specimens, worklists, verification, critical results and acknowledgement.",
    icon: FlaskConical,
    accent: "#624293",
    background: "#FAF7FD",
  },
  {
    name: "Billing",
    focus: "Revenue and access",
    description:
      "Charges, estimates, insurance authorization, payments and claim queries.",
    icon: CreditCard,
    accent: "#895000",
    background: "#FFF9ED",
  },
  {
    name: "Operations",
    focus: "Hospital coordination",
    description:
      "Capacity, queues, escalations, service performance and unresolved work.",
    icon: BarChart3,
    accent: "#37536B",
    background: "#F4F7F9",
  },
];

const clinicianTasks = [
  {
    title: "Review critical potassium result",
    context: "Meera Nair · Cardiology",
    time: "Overdue 12 min",
    tone: "critical",
  },
  {
    title: "Sign discharge medication",
    context: "Ravi Menon · General medicine",
    time: "Due in 18 min",
    tone: "warning",
  },
  {
    title: "Complete consultation note",
    context: "Anita Shah · Cardiology",
    time: "Draft saved",
    tone: "active",
  },
  {
    title: "Review follow-up request",
    context: "Suresh Patel · Cardiology",
    time: "Today",
    tone: "routine",
  },
];

const workspaceContracts = [
  {
    title: "Role before menu",
    description:
      "The workspace begins with the responsibilities of the signed-in role instead of exposing every module.",
    icon: UserCheck,
  },
  {
    title: "Patient context persists",
    description:
      "Identity, encounter, allergies, location and care team remain visible while tasks change.",
    icon: Activity,
  },
  {
    title: "Ownership is explicit",
    description:
      "Every task identifies who owns it, when it is due and what completes it.",
    icon: ClipboardList,
  },
  {
    title: "Permissions explain recovery",
    description:
      "Restricted actions preserve prepared work and show the correct approval path.",
    icon: LockKeyhole,
  },
];

const sharedObjectViews = [
  {
    role: "Clinician",
    object: "Potassium result",
    priority: "Clinical consequence",
    action: "Review and acknowledge",
  },
  {
    role: "Laboratory",
    object: "Potassium result",
    priority: "Verification and release",
    action: "Validate and notify",
  },
  {
    role: "Nursing",
    object: "Potassium result",
    priority: "Patient observation",
    action: "Assess and escalate",
  },
  {
    role: "Operations",
    object: "Potassium result",
    priority: "Unresolved critical event",
    action: "Monitor ownership",
  },
];

const handoffRows = [
  {
    from: "Laboratory",
    event: "Critical result verified",
    to: "Responsible clinician",
    completion: "Result acknowledged and response documented",
  },
  {
    from: "Clinician",
    event: "Medication plan signed",
    to: "Nursing and pharmacy",
    completion: "Tasks accepted by the receiving roles",
  },
  {
    from: "Billing",
    event: "Authorization approved",
    to: "Clinical coordinator",
    completion: "Blocked service becomes schedulable",
  },
];

export function RoleWorkspacesSection() {
  return (
    <section
      id="workspaces"
      className="ds-section bg-surface"
      aria-labelledby="role-workspaces-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">Role-based workspaces · 09 / 13</p>

            <h2
              id="role-workspaces-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Each role sees the same hospital through a different responsibility.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Workspaces prioritize the patients, tasks, decisions and exceptions
              relevant to the current role while preserving one shared clinical
              record.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <LayoutDashboard
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                Role adaptation changes priority and available actions. It never
                changes the meaning of clinical information.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Users aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Workspace families
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Five role views coordinate one connected care journey.
            </h3>

            <p className="mt-2 max-w-3xl text-xs leading-5 text-ink-secondary">
              Each workspace foregrounds different responsibilities while sharing
              patients, encounters, orders, results, tasks and audit history.
            </p>
          </div>

          <div className="grid gap-3 p-5 md:grid-cols-2 md:p-6 xl:grid-cols-5">
            {roleProfiles.map((role, index) => {
              const Icon = role.icon;

              return (
                <div
                  key={role.name}
                  className={`rounded-lg border p-4 ${
                    index === 0
                      ? "border-action ring-2 ring-focus ring-offset-2"
                      : "border-border-default"
                  }`}
                  style={{ backgroundColor: role.background }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="grid size-9 place-items-center rounded-full bg-white"
                      style={{ color: role.accent }}
                    >
                      <Icon aria-hidden="true" size={17} />
                    </span>

                    {index === 0 && (
                      <span className="text-[8px] font-bold uppercase tracking-[0.08em] text-action">
                        Active
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-sm font-semibold text-ink-primary">
                    {role.name}
                  </p>

                  <p
                    className="mt-1 text-[9px] font-bold uppercase tracking-[0.08em]"
                    style={{ color: role.accent }}
                  >
                    {role.focus}
                  </p>

                  <p className="mt-3 text-[10px] leading-5 text-ink-secondary">
                    {role.description}
                  </p>
                </div>
              );
            })}
          </div>
        </article>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="flex flex-col gap-4 border-b border-border-subtle p-5 md:flex-row md:items-center md:justify-between md:p-6">
            <div>
              <div className="flex items-center gap-2 text-action">
                <Stethoscope aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Clinician workspace
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Priority, patient context and clinical action share one surface.
              </h3>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-selected px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-action">
              <Activity aria-hidden="true" size={13} />
              Cardiology · OPD
            </span>
          </div>

          <div className="m-5 overflow-hidden rounded-xl border border-border-default bg-canvas md:m-6">
            <div className="flex flex-wrap items-center justify-between gap-4 bg-graphite px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <LayoutDashboard
                  aria-hidden="true"
                  size={16}
                  className="text-[#8FD3D0]"
                />

                <span className="text-xs font-semibold">
                  Dr. Arun Rao · Clinical workspace
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Search
                  aria-hidden="true"
                  size={15}
                  className="text-white/60"
                />

                <BellRing
                  aria-hidden="true"
                  size={15}
                  className="text-[#F2C66D]"
                />
              </div>
            </div>

            <div className="border-b border-[#B9DDC9] bg-[#F1FAF5] px-4 py-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-full bg-white text-action">
                    <Users aria-hidden="true" size={16} />
                  </span>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-semibold text-ink-primary">
                        Meera Nair
                      </p>

                      <span className="rounded bg-[#FFF1D6] px-2 py-1 text-[8px] font-bold text-[#895000]">
                        PENICILLIN ALLERGY
                      </span>
                    </div>

                    <p className="mt-1 text-[9px] text-ink-secondary">
                      UHID 0048217 · Female · 54 years · Cardiology
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-5 text-[9px]">
                  <div>
                    <p className="uppercase tracking-[0.08em] text-ink-tertiary">
                      Encounter
                    </p>

                    <p className="mt-1 font-semibold text-ink-primary">
                      OPD-26-08154
                    </p>
                  </div>

                  <div>
                    <p className="uppercase tracking-[0.08em] text-ink-tertiary">
                      Location
                    </p>

                    <p className="mt-1 font-semibold text-ink-primary">OPD 4</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-[270px_1fr_300px]">
              <aside className="border-b border-border-default bg-surface xl:border-b-0 xl:border-r">
                <div className="border-b border-border-subtle p-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-ink-primary">
                      My priority queue
                    </p>

                    <span className="rounded-full bg-[#FADDE0] px-2 py-1 text-[8px] font-bold text-[#8C1D27]">
                      4 TASKS
                    </span>
                  </div>
                </div>

                <ol className="divide-y divide-border-subtle">
                  {clinicianTasks.map((task, index) => (
                    <li
                      key={task.title}
                      className={`p-4 ${
                        index === 0
                          ? "border-l-2 border-[#8C1D27] bg-[#FFF7F7]"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-1 size-2 shrink-0 rounded-full ${
                            task.tone === "critical"
                              ? "bg-[#B4232F]"
                              : task.tone === "warning"
                                ? "bg-[#C78316]"
                                : task.tone === "active"
                                  ? "bg-action"
                                  : "bg-[#5B748A]"
                          }`}
                        />

                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-semibold leading-4 text-ink-primary">
                            {task.title}
                          </p>

                          <p className="mt-1 text-[9px] leading-4 text-ink-secondary">
                            {task.context}
                          </p>

                          <div className="mt-2 flex items-center gap-1 text-[8px] font-semibold text-ink-tertiary">
                            <Clock3 aria-hidden="true" size={10} />
                            {task.time}
                          </div>
                        </div>

                        <ChevronRight
                          aria-hidden="true"
                          size={13}
                          className="mt-1 shrink-0 text-ink-tertiary"
                        />
                      </div>
                    </li>
                  ))}
                </ol>
              </aside>

              <main className="border-b border-border-default bg-surface p-4 md:p-5 xl:border-b-0 xl:border-r">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                      Active consultation
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-ink-primary">
                      Assessment and care plan
                    </h4>
                  </div>

                  <span className="rounded bg-[#DDF3E6] px-2 py-1 text-[8px] font-bold text-[#176B42]">
                    DRAFT SAVED · 10:34
                  </span>
                </div>

                <div className="mt-4 rounded-lg border border-border-default">
                  <div className="border-b border-border-subtle p-4">
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                      Clinical summary
                    </p>

                    <p className="mt-3 text-[11px] leading-5 text-ink-secondary">
                      Persistent fatigue and intermittent palpitations. Recent
                      potassium result requires immediate review before the
                      treatment plan can be signed.
                    </p>
                  </div>

                  <div className="grid gap-3 p-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-border-subtle bg-surface-subtle p-3">
                      <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                        Working diagnosis
                      </p>

                      <p className="mt-2 text-[11px] font-semibold text-ink-primary">
                        Suspected myocarditis
                      </p>
                    </div>

                    <div className="rounded-lg border border-border-subtle bg-surface-subtle p-3">
                      <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                        Next investigation
                      </p>

                      <p className="mt-2 text-[11px] font-semibold text-ink-primary">
                        External cardiac MRI
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  role="alert"
                  className="mt-4 rounded-lg border border-[#E7B7BC] bg-[#FFF7F7] p-4"
                >
                  <div className="flex items-start gap-3">
                    <AlertTriangle
                      aria-hidden="true"
                      size={17}
                      className="mt-0.5 shrink-0 text-[#8C1D27]"
                    />

                    <div className="flex-1">
                      <p className="text-xs font-semibold text-[#8C1D27]">
                        Potassium result requires acknowledgement
                      </p>

                      <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                        Result 6.7 mmol/L · Reference 3.5–5.1 mmol/L. Review the
                        result and document the clinical response.
                      </p>

                      <button
                        type="button"
                        className="mt-3 inline-flex h-9 items-center gap-2 rounded-md bg-[#8C1D27] px-3 text-[10px] font-semibold"
                        style={{ color: "#FFFFFF" }}
                      >
                        Review critical result
                        <ArrowRight aria-hidden="true" size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              </main>

              <aside className="bg-surface p-4 md:p-5">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                  Decision context
                </p>

                <div className="mt-4 space-y-3">
                  {[
                    {
                      label: "Allergies",
                      value: "Penicillin",
                      tone: "warning",
                    },
                    {
                      label: "Renal function",
                      value: "eGFR 48 mL/min",
                      tone: "routine",
                    },
                    {
                      label: "Active medication",
                      value: "Spironolactone 25 mg",
                      tone: "routine",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`rounded-lg border p-3 ${
                        item.tone === "warning"
                          ? "border-[#E7D09F] bg-[#FFF9ED]"
                          : "border-border-subtle bg-surface-subtle"
                      }`}
                    >
                      <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                        {item.label}
                      </p>

                      <p className="mt-2 text-[10px] font-semibold text-ink-primary">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 border-t border-border-subtle pt-4">
                  <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                    Related work
                  </p>

                  <ul className="mt-3 space-y-2">
                    {[
                      "External referral · Authorization pending",
                      "Laboratory result · Critical",
                      "Follow-up plan · Not scheduled",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-[9px] leading-4 text-ink-secondary"
                      >
                        <ChevronRight
                          aria-hidden="true"
                          size={11}
                          className="mt-0.5 shrink-0 text-action"
                        />

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <ShieldCheck aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Workspace contract
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Adaptation never removes safety or accountability.
              </h3>
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2 md:p-6">
              {workspaceContracts.map((contract) => {
                const Icon = contract.icon;

                return (
                  <div
                    key={contract.title}
                    className="rounded-lg border border-border-default bg-surface p-4"
                  >
                    <Icon
                      aria-hidden="true"
                      size={17}
                      className="text-action"
                    />

                    <p className="mt-4 text-xs font-semibold text-ink-primary">
                      {contract.title}
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                      {contract.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Workflow aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  One object, multiple responsibilities
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Shared records remain meaningful across role boundaries.
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead className="bg-surface-subtle">
                  <tr>
                    {["Role", "Shared object", "Priority", "Primary action"].map(
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
                  {sharedObjectViews.map((view) => (
                    <tr
                      key={view.role}
                      className="border-b border-border-subtle"
                    >
                      <td className="px-4 py-4 text-[10px] font-semibold text-action">
                        {view.role}
                      </td>

                      <td className="px-4 py-4 text-[10px] text-ink-secondary">
                        {view.object}
                      </td>

                      <td className="px-4 py-4 text-[10px] text-ink-secondary">
                        {view.priority}
                      </td>

                      <td className="px-4 py-4 text-[10px] font-semibold text-ink-primary">
                        {view.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Workflow aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Cross-role handoffs
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Work moves only when the receiving role accepts responsibility.
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] border-collapse text-left">
              <thead className="bg-surface-subtle">
                <tr>
                  {[
                    "Originating role",
                    "Handoff event",
                    "Receiving role",
                    "Completion evidence",
                  ].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="border-b border-border-default px-5 py-3 text-[9px] font-bold uppercase tracking-[0.08em] text-ink-tertiary md:px-6"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {handoffRows.map((row) => (
                  <tr
                    key={row.event}
                    className="border-b border-border-subtle"
                  >
                    <td className="px-5 py-4 text-[11px] font-semibold text-action md:px-6">
                      {row.from}
                    </td>

                    <td className="px-5 py-4 text-[11px] text-ink-secondary md:px-6">
                      {row.event}
                    </td>

                    <td className="px-5 py-4 text-[11px] font-semibold text-ink-primary md:px-6">
                      {row.to}
                    </td>

                    <td className="px-5 py-4 text-[10px] leading-5 text-ink-secondary md:px-6">
                      <div className="flex items-start gap-2">
                        <CheckCircle2
                          aria-hidden="true"
                          size={14}
                          className="mt-0.5 shrink-0 text-[#176B42]"
                        />

                        {row.completion}
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
              <LockKeyhole
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-[#624293]"
              />

              <div>
                <p className="text-sm font-semibold text-ink-primary">
                  Permission boundaries preserve prepared work
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  When a role cannot complete an action, the system explains the
                  restriction, saves the entered information and identifies who can
                  approve it.
                </p>

                <button
                  type="button"
                  className="mt-4 inline-flex h-9 items-center gap-2 rounded-md border border-[#BBA8D3] bg-white px-3 text-[10px] font-semibold text-[#624293]"
                >
                  Request clinical approval
                  <ArrowRight aria-hidden="true" size={13} />
                </button>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-[#E7D09F] bg-[#FFF9ED] p-5 md:p-6">
            <div className="flex items-start gap-4">
              <BellRing
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-[#895000]"
              />

              <div>
                <p className="text-sm font-semibold text-ink-primary">
                  Unaccepted handoffs return to the active queue
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  Work does not disappear after it is sent. Overdue acceptance
                  remains visible to the originating role and escalates according to
                  clinical consequence.
                </p>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-[#895000]">
                  Queue owner · Cardiology coordinator
                </p>
              </div>
            </div>
          </article>
        </div>

        <aside className="mt-6 flex flex-col justify-between gap-6 rounded-xl bg-graphite p-6 text-white md:flex-row md:items-center md:p-8">
          <div className="flex max-w-3xl items-start gap-4">
            <LayoutDashboard
              aria-hidden="true"
              size={22}
              className="mt-0.5 shrink-0 text-[#8FD3D0]"
            />

            <div>
              <p className="text-sm font-semibold">Role workspace rule</p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Every workspace prioritizes role-specific responsibility while
                preserving shared patient identity, clinical meaning, ownership,
                permission boundaries and traceable handoffs.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-WS-001 · ROLE VERIFIED
          </span>
        </aside>
      </div>
    </section>
  );
}
