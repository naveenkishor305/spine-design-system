import {
  Activity,
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Database,
  FileCheck2,
  FileClock,
  GitMerge,
  GraduationCap,
  Hospital,
  Layers3,
  PackageCheck,
  RefreshCcw,
  Rocket,
  ShieldCheck,
  Stethoscope,
  TestTube2,
  Users,
  Workflow,
} from "lucide-react";

const releaseStages = [
  {
    phase: "Release 01",
    title: "Foundation",
    duration: "Weeks 01–08",
    description:
      "Establish the shared language, safety context and accessible application structure.",
    icon: Layers3,
    accent: "#176F72",
    background: "#EDF8F7",
    border: "#AFD8D6",
    deliverables: [
      "Charter and principles",
      "Semantic tokens",
      "Application shell",
      "Patient identity-and-safety bar",
      "Core controls and status patterns",
      "Accessibility baseline",
    ],
    gate: "Foundation verified before product migration begins",
  },
  {
    phase: "Release 02",
    title: "OPD core",
    duration: "Weeks 09–18",
    description:
      "Validate the system through a complete outpatient journey involving multiple roles.",
    icon: Stethoscope,
    accent: "#2162A6",
    background: "#F1F7FD",
    border: "#BDD4EC",
    deliverables: [
      "Role dashboard and task queue",
      "Patient search and registration",
      "Appointment and check-in",
      "Consultation form and signing",
      "Orders and results",
      "Billing and follow-up",
    ],
    gate: "One complete clinical journey works across roles",
  },
  {
    phase: "Release 03",
    title: "Safety & resilience",
    duration: "Weeks 19–28",
    description:
      "Add the exceptional, degraded and high-consequence behavior required for clinical trust.",
    icon: ShieldCheck,
    accent: "#895000",
    background: "#FFF9ED",
    border: "#E7D09F",
    deliverables: [
      "Critical-event lifecycle",
      "Restricted records and break-glass",
      "Consent and export",
      "Offline draft and merge review",
      "Interface degradation",
      "Reconciliation workflows",
    ],
    gate: "Exceptional paths remain safe and recoverable",
  },
  {
    phase: "Release 04",
    title: "Scale",
    duration: "Week 29 onward",
    description:
      "Extend validated foundations across specialties, facilities and governed automation.",
    icon: Building2,
    accent: "#624293",
    background: "#FAF7FD",
    border: "#D6C8E8",
    deliverables: [
      "Diagnostics and pharmacy depth",
      "Insurance and claims depth",
      "IPD and nursing extensions",
      "Administration and operations",
      "Multi-site configuration",
      "Analytics and governed automation",
    ],
    gate: "Expansion reuses the shared contract without weakening it",
  },
];

const migrationSteps = [
  {
    number: "01",
    title: "Inventory current patterns",
    description:
      "Identify screens, components, templates, arbitrary values and duplicate behavior.",
    owner: "Product and design",
    evidence: "Current-state inventory",
    icon: ClipboardCheck,
  },
  {
    number: "02",
    title: "Map to shared foundations",
    description:
      "Translate legacy colors, typography, spacing, statuses and controls into semantic tokens.",
    owner: "Design-system team",
    evidence: "Token mapping record",
    icon: GitMerge,
  },
  {
    number: "03",
    title: "Classify workflow risk",
    description:
      "Prioritize patient identity, medication, critical-result and irreversible workflows.",
    owner: "Clinical governance",
    evidence: "Risk classification",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Pilot one complete journey",
    description:
      "Migrate an end-to-end workflow instead of validating isolated polished screens.",
    owner: "Pilot product team",
    evidence: "Usability and safety findings",
    icon: TestTube2,
  },
  {
    number: "05",
    title: "Prepare people and operations",
    description:
      "Publish guidance, train affected roles and prepare support and escalation paths.",
    owner: "Operations and enablement",
    evidence: "Readiness record",
    icon: GraduationCap,
  },
  {
    number: "06",
    title: "Release with rollback",
    description:
      "Deploy in controlled stages with monitoring, recovery ownership and a rollback condition.",
    owner: "Engineering and operations",
    evidence: "Release decision log",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Measure real adoption",
    description:
      "Track supported-component use, task outcomes, defects and safety guardrails.",
    owner: "System owner",
    evidence: "Adoption dashboard",
    icon: Activity,
  },
  {
    number: "08",
    title: "Retire legacy behavior",
    description:
      "Remove old patterns only after usage ends and historical evidence remains available.",
    owner: "Product maintainers",
    evidence: "Deprecation closure",
    icon: PackageCheck,
  },
];

const readinessGates = [
  {
    gate: "Design-system fit",
    question:
      "Does the release use supported tokens, components and documented composition patterns?",
    owner: "Design-system owner",
    status: "Required",
  },
  {
    gate: "Clinical safety",
    question:
      "Are patient identity, critical events, acknowledgement and recovery verified?",
    owner: "Clinical reviewer",
    status: "Required",
  },
  {
    gate: "Accessibility",
    question:
      "Are keyboard, screen-reader, zoom, contrast and language-expansion paths verified?",
    owner: "Accessibility lead",
    status: "Required",
  },
  {
    gate: "Privacy and access",
    question:
      "Are purpose, permissions, disclosure and exceptional access appropriately bounded?",
    owner: "Privacy and IAM",
    status: "Required",
  },
  {
    gate: "Operational readiness",
    question:
      "Are training, support, monitoring, escalation and rollback responsibilities assigned?",
    owner: "Operations owner",
    status: "Required",
  },
  {
    gate: "Migration integrity",
    question:
      "Can historical records preserve their original meaning after migration?",
    owner: "Data and governance",
    status: "Required",
  },
];

const releaseTargets = [
  {
    label: "Critical accessibility defects",
    value: "0",
    description: "Required before production release",
    tone: "safe",
  },
  {
    label: "Safety-critical workflows reviewed",
    value: "100%",
    description: "Clinical review with recorded evidence",
    tone: "safe",
  },
  {
    label: "Supported-component adoption",
    value: "≥ 90%",
    description: "Across newly migrated screens",
    tone: "action",
  },
  {
    label: "Unowned migration blockers",
    value: "0",
    description: "Every blocker has an accountable owner",
    tone: "safe",
  },
  {
    label: "Rollback decision window",
    value: "Defined",
    description: "Before the controlled release begins",
    tone: "warning",
  },
  {
    label: "Historical record integrity",
    value: "100%",
    description: "Versions remain identifiable and reproducible",
    tone: "action",
  },
];

const pilotEvents = [
  {
    time: "08:30",
    title: "Pilot environment verified",
    actor: "Engineering and platform",
    state: "complete",
  },
  {
    time: "09:10",
    title: "Clinical readiness approved",
    actor: "Clinical governance",
    state: "complete",
  },
  {
    time: "09:35",
    title: "Front-desk cohort enabled",
    actor: "Operations enablement",
    state: "active",
  },
  {
    time: "14:00",
    title: "First outcome review",
    actor: "Product, safety and support",
    state: "pending",
  },
];

export function ReleaseRoadmapSection() {
  return (
    <section
      id="release-roadmap"
      className="ds-section bg-surface-subtle"
      aria-labelledby="release-roadmap-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">Release & migration roadmap · 13 / 13</p>

            <h2
              id="release-roadmap-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Release the system through proven journeys—not a simultaneous visual rewrite.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Hospital OS begins with shared foundations, proves them through
              outpatient care, strengthens exceptional behavior and then scales
              across specialties and facilities.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <RefreshCcw
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                Each release must remain independently adoptable, reversible,
                measurable and safe for historical clinical evidence.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Rocket aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Controlled release sequence
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Capability expands only after the previous safety contract is proven.
            </h3>
          </div>

          <ol className="grid xl:grid-cols-4">
            {releaseStages.map((release, index) => {
              const Icon = release.icon;

              return (
                <li
                  key={release.phase}
                  className={`relative p-5 md:p-6 ${
                    index < releaseStages.length - 1
                      ? "border-b border-border-default xl:border-b-0 xl:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="grid size-10 place-items-center rounded-full"
                      style={{
                        color: release.accent,
                        backgroundColor: release.background,
                      }}
                    >
                      <Icon aria-hidden="true" size={18} />
                    </span>

                    <span className="ds-mono text-[9px] font-semibold text-ink-tertiary">
                      {release.phase}
                    </span>
                  </div>

                  <p
                    className="mt-5 text-[8px] font-bold uppercase tracking-[0.08em]"
                    style={{ color: release.accent }}
                  >
                    {release.duration}
                  </p>

                  <h4 className="mt-2 text-lg font-semibold text-ink-primary">
                    {release.title}
                  </h4>

                  <p className="mt-3 text-[10px] leading-5 text-ink-secondary">
                    {release.description}
                  </p>

                  <div
                    className="mt-5 rounded-lg border p-3"
                    style={{
                      borderColor: release.border,
                      backgroundColor: release.background,
                    }}
                  >
                    <p
                      className="text-[8px] font-bold uppercase tracking-[0.07em]"
                      style={{ color: release.accent }}
                    >
                      Exit gate
                    </p>

                    <p className="mt-2 text-[9px] leading-4 text-ink-secondary">
                      {release.gate}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          {releaseStages.map((release) => {
            const Icon = release.icon;

            return (
              <article
                key={`${release.phase}-detail`}
                className="overflow-hidden rounded-xl border bg-surface"
                style={{ borderColor: release.border }}
              >
                <div
                  className="flex items-start justify-between gap-4 border-b p-5 md:p-6"
                  style={{
                    borderColor: release.border,
                    backgroundColor: release.background,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="grid size-10 shrink-0 place-items-center rounded-full bg-white"
                      style={{ color: release.accent }}
                    >
                      <Icon aria-hidden="true" size={18} />
                    </span>

                    <div>
                      <p
                        className="text-[8px] font-bold uppercase tracking-[0.08em]"
                        style={{ color: release.accent }}
                      >
                        {release.phase} · {release.duration}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold text-ink-primary">
                        {release.title} release
                      </h3>
                    </div>
                  </div>

                  <span
                    className="rounded-full bg-white px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.06em]"
                    style={{ color: release.accent }}
                  >
                    Controlled
                  </span>
                </div>

                <ul className="grid gap-px bg-border-subtle sm:grid-cols-2">
                  {release.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-3 bg-surface px-5 py-4 md:px-6"
                    >
                      <CheckCircle2
                        aria-hidden="true"
                        size={14}
                        className="mt-0.5 shrink-0"
                        style={{ color: release.accent }}
                      />

                      <span className="text-[10px] leading-5 text-ink-secondary">
                        {deliverable}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <GitMerge aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Migration path
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Migration is a clinical change programme—not a component replacement exercise.
            </h3>
          </div>

          <ol className="grid md:grid-cols-2 xl:grid-cols-4">
            {migrationSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.number}
                  className={`p-5 md:p-6 ${
                    index < migrationSteps.length - 4
                      ? "border-b border-border-subtle"
                      : ""
                  } ${
                    index % 4 !== 3 ? "xl:border-r xl:border-border-subtle" : ""
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

                  <h4 className="mt-4 text-sm font-semibold text-ink-primary">
                    {step.title}
                  </h4>

                  <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                    {step.description}
                  </p>

                  <div className="mt-4 border-t border-border-subtle pt-3">
                    <p className="text-[8px] font-bold uppercase tracking-[0.07em] text-action">
                      Owner · {step.owner}
                    </p>

                    <p className="mt-2 text-[9px] text-ink-tertiary">
                      Evidence · {step.evidence}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </article>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <FileCheck2 aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Release readiness gates
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              A release proceeds only when every consequential dimension has evidence.
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[960px] border-collapse text-left">
              <thead className="bg-surface-subtle">
                <tr>
                  {["Gate", "Decision question", "Accountable owner", "Status"].map(
                    (heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="border-b border-border-default px-5 py-3 text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary md:px-6"
                      >
                        {heading}
                      </th>
                    ),
                  )}
                </tr>
              </thead>

              <tbody>
                {readinessGates.map((item) => (
                  <tr
                    key={item.gate}
                    className="border-b border-border-subtle"
                  >
                    <td className="px-5 py-4 text-[10px] font-semibold text-action md:px-6">
                      {item.gate}
                    </td>

                    <td className="max-w-xl px-5 py-4 text-[10px] leading-5 text-ink-secondary md:px-6">
                      {item.question}
                    </td>

                    <td className="px-5 py-4 text-[10px] font-semibold text-ink-primary md:px-6">
                      {item.owner}
                    </td>

                    <td className="px-5 py-4 md:px-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DDF3E6] px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.06em] text-[#176B42]">
                        <Check aria-hidden="true" size={9} />
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.18fr_0.82fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Hospital aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Controlled pilot
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                A complete clinical cohort is safer than scattered screen adoption.
              </h3>
            </div>

            <div className="p-5 md:p-6">
              <div className="overflow-hidden rounded-xl border border-border-default">
                <div className="flex flex-wrap items-center justify-between gap-3 bg-graphite px-4 py-3 text-white">
                  <div className="flex items-center gap-3">
                    <Stethoscope
                      aria-hidden="true"
                      size={16}
                      className="text-[#8FD3D0]"
                    />

                    <span className="text-xs font-semibold">
                      OPD pilot · General Medicine
                    </span>
                  </div>

                  <span className="ds-mono text-[9px] text-white/50">
                    SITE 01 · COHORT A
                  </span>
                </div>

                <div className="grid md:grid-cols-[1fr_250px]">
                  <div className="border-b border-border-default p-4 md:border-b-0 md:border-r">
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                      Included journey
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {[
                        "Search",
                        "Register",
                        "Check-in",
                        "Consult",
                        "Order",
                        "Result",
                        "Bill",
                      ].map((item, index, items) => (
                        <div key={item} className="flex items-center gap-2">
                          <span className="rounded-md border border-border-default bg-surface-subtle px-2.5 py-2 text-[9px] font-semibold text-ink-primary">
                            {item}
                          </span>

                          {index < items.length - 1 ? (
                            <ArrowRight
                              aria-hidden="true"
                              size={11}
                              className="text-ink-tertiary"
                            />
                          ) : null}
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-lg border border-[#AFD8D6] bg-[#EDF8F7] p-4">
                      <div className="flex items-start gap-3">
                        <BadgeCheck
                          aria-hidden="true"
                          size={17}
                          className="mt-0.5 shrink-0 text-action"
                        />

                        <div>
                          <p className="text-xs font-semibold text-ink-primary">
                            Cohort boundary is explicit
                          </p>

                          <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                            Users, departments, records, support coverage, rollback
                            conditions and observation periods are confirmed before
                            activation.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <aside className="bg-surface-subtle p-4">
                    <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-action">
                      Pilot status
                    </p>

                    <ol className="mt-4 space-y-4">
                      {pilotEvents.map((event) => (
                        <li
                          key={`${event.time}-${event.title}`}
                          className="grid grid-cols-[42px_18px_1fr] gap-2"
                        >
                          <span className="ds-mono pt-1 text-[8px] text-ink-tertiary">
                            {event.time}
                          </span>

                          <span
                            className={`mt-0.5 grid size-[18px] place-items-center rounded-full ${
                              event.state === "complete"
                                ? "bg-[#DDF3E6] text-[#176B42]"
                                : event.state === "active"
                                  ? "bg-[#E3F2F1] text-action"
                                  : "bg-[#E8EDF0] text-ink-tertiary"
                            }`}
                          >
                            {event.state === "complete" ? (
                              <Check aria-hidden="true" size={9} />
                            ) : event.state === "active" ? (
                              <Activity aria-hidden="true" size={9} />
                            ) : (
                              <FileClock aria-hidden="true" size={9} />
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
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Workflow aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Decision model
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Continue, contain or roll back using predefined evidence.
              </h3>
            </div>

            <div className="space-y-3 p-5 md:p-6">
              {[
                {
                  label: "Continue",
                  description:
                    "Outcomes meet thresholds and no unresolved safety condition exists.",
                  color: "#176B42",
                  background: "#DDF3E6",
                },
                {
                  label: "Contain",
                  description:
                    "Limit the cohort while a bounded defect or support issue is corrected.",
                  color: "#895000",
                  background: "#FFF1D6",
                },
                {
                  label: "Roll back",
                  description:
                    "Restore the verified prior path when safety or record integrity is uncertain.",
                  color: "#8C1D27",
                  background: "#FADDE0",
                },
              ].map((decision) => (
                <div
                  key={decision.label}
                  className="rounded-lg border border-border-default p-4"
                >
                  <span
                    className="inline-flex rounded-full px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.06em]"
                    style={{
                      color: decision.color,
                      backgroundColor: decision.background,
                    }}
                  >
                    {decision.label}
                  </span>

                  <p className="mt-3 text-[10px] leading-5 text-ink-secondary">
                    {decision.description}
                  </p>
                </div>
              ))}

              <div className="rounded-lg border border-[#E7B7BC] bg-[#FFF7F7] p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-[#8C1D27]"
                  />

                  <p className="text-[10px] leading-5 text-ink-secondary">
                    Schedule pressure never overrides a safety, privacy,
                    accessibility or historical-integrity gate.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Activity aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Release targets
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Adoption is measured with quality and safety—not component usage alone.
            </h3>
          </div>

          <div className="grid gap-px bg-border-subtle sm:grid-cols-2 xl:grid-cols-3">
            {releaseTargets.map((target) => (
              <div key={target.label} className="bg-surface p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <p className="max-w-[190px] text-xs font-semibold text-ink-primary">
                    {target.label}
                  </p>

                  <span
                    className={`ds-mono rounded-full px-2.5 py-1.5 text-[9px] font-semibold ${
                      target.tone === "warning"
                        ? "bg-[#FFF1D6] text-[#895000]"
                        : target.tone === "action"
                          ? "bg-[#E3F2F1] text-action"
                          : "bg-[#DDF3E6] text-[#176B42]"
                    }`}
                  >
                    {target.value}
                  </span>
                </div>

                <p className="mt-4 text-[10px] leading-5 text-ink-secondary">
                  {target.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-[#AFD8D6] bg-[#EDF8F7] p-5 md:p-6">
            <div className="flex items-start gap-4">
              <Database
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-action"
              />

              <div>
                <p className="text-sm font-semibold text-ink-primary">
                  Historical meaning survives migration
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  Signed records, disclosures and audit evidence retain the
                  component, template and terminology versions needed to explain
                  their original behavior.
                </p>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                  Never rewrite completed clinical history
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-[#D6C8E8] bg-[#FAF7FD] p-5 md:p-6">
            <div className="flex items-start gap-4">
              <Users
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-[#624293]"
              />

              <div>
                <p className="text-sm font-semibold text-ink-primary">
                  Adoption includes the people carrying the change
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  Training, support, feedback, local workflow constraints and
                  escalation ownership are part of the release—not activities
                  scheduled after launch.
                </p>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-[#624293]">
                  Operational readiness is product readiness
                </p>
              </div>
            </div>
          </article>
        </div>

        <aside className="mt-6 overflow-hidden rounded-xl bg-graphite text-white">
          <div className="grid xl:grid-cols-[1fr_340px]">
            <div className="p-6 md:p-8">
              <div className="flex max-w-3xl items-start gap-4">
                <BadgeCheck
                  aria-hidden="true"
                  size={24}
                  className="mt-0.5 shrink-0 text-[#8FD3D0]"
                />

                <div>
                  <p className="text-sm font-semibold">
                    Hospital OS v1.0 documentation foundation complete
                  </p>

                  <p className="mt-3 text-xs leading-6 text-white/60">
                    The system now defines principles, foundations, components,
                    clinical patterns, accessibility, language, architecture,
                    referrals, role workspaces, system states, privacy,
                    governance and a controlled migration path.
                  </p>

                  <p className="mt-5 text-[9px] font-bold uppercase tracking-[0.09em] text-[#8FD3D0]">
                    Ready for verified pilot implementation
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between border-t border-white/10 bg-white/[0.03] p-6 xl:border-l xl:border-t-0 md:p-8">
              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.09em] text-white/40">
                  Documentation status
                </p>

                <p className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                  13 / 13
                </p>

                <p className="mt-2 text-[10px] leading-5 text-white/50">
                  Core documentation sections represented
                </p>
              </div>

              <span className="ds-mono mt-8 text-[10px] text-white/40">
                HOS-REL-001 · MIGRATION CONTROLLED
              </span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

