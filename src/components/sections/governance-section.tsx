import {
  AlertTriangle,
  ArrowRight,
  BadgeCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  Component,
  FileClock,
  FileText,
  GitBranch,
  History,
  Languages,
  LockKeyhole,
  PackageCheck,
  RotateCcw,
  Scale,
  ShieldCheck,
  Stethoscope,
  Tag,
  TestTube2,
  UserCheck,
  Users,
  Workflow,
} from "lucide-react";

const contributionSteps = [
  {
    number: "01",
    title: "Define the problem",
    description:
      "Describe the user, workflow, risk and evidence behind the requested change.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Review the gap",
    description:
      "Confirm that an existing component, variant or composition cannot solve it safely.",
    icon: Component,
  },
  {
    number: "03",
    title: "Assign reviewers",
    description:
      "Identify the design, clinical, accessibility, privacy and engineering owners required.",
    icon: Users,
  },
  {
    number: "04",
    title: "Specify behavior",
    description:
      "Document anatomy, permissions, content, states, provenance and recovery.",
    icon: ClipboardCheck,
  },
  {
    number: "05",
    title: "Verify evidence",
    description:
      "Test usability, keyboard behavior, assistive technology and safety-critical paths.",
    icon: TestTube2,
  },
  {
    number: "06",
    title: "Release responsibly",
    description:
      "Version the change, publish guidance and provide migration support.",
    icon: PackageCheck,
  },
];

const readyChecklist = [
  "Clear user and workflow problem",
  "Existing-component gap analysis",
  "Permission and privacy model",
  "Required data and provenance",
  "Required interaction and system states",
  "Keyboard and screen-reader behavior",
  "Offline and error behavior where relevant",
  "Analytics and audit requirements where relevant",
];

const doneChecklist = [
  "Visual and interaction specification complete",
  "Token use documented with no arbitrary values",
  "WCAG 2.2 AA review complete",
  "200% zoom and text-spacing review complete",
  "Keyboard path verified",
  "Error, empty, loading, restricted and offline states covered",
  "English expansion and one Indian-script sample checked",
  "Critical and irreversible workflows reviewed separately",
];

const ownershipRows = [
  {
    area: "Design-system product",
    owner: "System lead",
    responsibility: "Roadmap, quality threshold and adoption",
    review: "Every release",
  },
  {
    area: "Clinical safety patterns",
    owner: "Clinical governance reviewer",
    responsibility: "Risk, escalation and acknowledgement behavior",
    review: "Safety-impacting changes",
  },
  {
    area: "Accessibility",
    owner: "Accessibility lead",
    responsibility: "WCAG, keyboard, zoom and assistive technology",
    review: "Components and workflows",
  },
  {
    area: "Privacy and consent",
    owner: "Privacy or legal reviewer",
    responsibility: "Minimum necessity, consent and disclosure",
    review: "Sensitive-data changes",
  },
  {
    area: "Security and access",
    owner: "Security and IAM owner",
    responsibility: "Permissions, identity and exceptional access",
    review: "Access-model changes",
  },
  {
    area: "Content and localization",
    owner: "Content-design owner",
    responsibility: "Terminology, comprehension and language expansion",
    review: "User-facing content",
  },
  {
    area: "Tokens and components",
    owner: "Design and front-end maintainers",
    responsibility: "Implementation quality and API stability",
    review: "Every component release",
  },
];

const reviewGates = [
  {
    title: "Design review",
    description: "Pattern fit, hierarchy, density and consistency",
    owner: "Design-system owner",
    icon: Component,
  },
  {
    title: "Content review",
    description: "Meaning, terminology, action language and localization",
    owner: "Content designer",
    icon: Languages,
  },
  {
    title: "Accessibility review",
    description: "Keyboard, focus, contrast, zoom and assistive technology",
    owner: "Accessibility lead",
    icon: UserCheck,
  },
  {
    title: "Clinical-safety review",
    description: "Risk visibility, escalation, acknowledgement and closure",
    owner: "Clinical reviewer",
    icon: Stethoscope,
  },
  {
    title: "Privacy and security",
    description: "Access purpose, disclosure, audit and minimum necessity",
    owner: "Privacy and IAM",
    icon: ShieldCheck,
  },
  {
    title: "Engineering feasibility",
    description: "Data, performance, integration and implementation risk",
    owner: "Engineering lead",
    icon: Code2,
  },
];

const changeClassifications = [
  {
    change: "Documentation clarification",
    version: "Patch",
    example: "Clarify usage guidance without changing behavior",
    tone: "routine",
  },
  {
    change: "New non-breaking variant",
    version: "Minor",
    example: "Add a supported compact density or state",
    tone: "controlled",
  },
  {
    change: "Token meaning or component API",
    version: "Major",
    example: "Change semantic meaning, anatomy or implementation contract",
    tone: "migration",
  },
  {
    change: "Clinical, privacy or access behavior",
    version: "Formal review",
    example: "Change acknowledgement, disclosure or permission behavior",
    tone: "critical",
  },
];

const decisionEvents = [
  {
    time: "09:18",
    title: "Proposal submitted",
    actor: "Diagnostics product team",
    status: "complete",
  },
  {
    time: "10:06",
    title: "Existing-pattern gap verified",
    actor: "Design-system owner",
    status: "complete",
  },
  {
    time: "11:24",
    title: "Clinical-safety review requested",
    actor: "Dr. Asha Menon",
    status: "active",
  },
  {
    time: "Pending",
    title: "Accessibility verification",
    actor: "Required before acceptance",
    status: "pending",
  },
];

export function GovernanceSection() {
  return (
    <section
      id="governance"
      className="ds-section bg-surface"
      aria-labelledby="governance-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.72fr_1.28fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">Governance & contribution · 12 / 13</p>

            <h2
              id="governance-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Safe consistency requires ownership, evidence and controlled change.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Core components are centrally governed while specialties and
              encounters extend them through a reviewed contribution model.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <Workflow
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                Every accepted change includes accessibility, state, audit,
                localization, versioning and migration evidence.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <GitBranch aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Contribution lifecycle
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Contributions move through one visible, evidence-based path.
            </h3>
          </div>

          <ol className="grid p-5 md:grid-cols-3 md:p-6 xl:grid-cols-6">
            {contributionSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <li
                  key={step.number}
                  className={`relative p-4 ${
                    index < contributionSteps.length - 1
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
              <FileClock aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Contribution under review
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Review status, ownership and unresolved evidence remain visible.
            </h3>
          </div>

          <div className="m-5 overflow-hidden rounded-xl border border-border-default bg-surface md:m-6">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-graphite px-4 py-3 text-white">
              <div className="flex items-center gap-3">
                <Component
                  aria-hidden="true"
                  size={16}
                  className="text-[#8FD3D0]"
                />

                <span className="text-xs font-semibold">
                  Critical result acknowledgement pattern
                </span>
              </div>

              <span className="ds-mono text-[9px] text-white/50">
                HOS-CONTRIB-024
              </span>
            </div>

            <div className="grid xl:grid-cols-[1fr_360px]">
              <div className="border-b border-border-default p-4 md:p-6 xl:border-b-0 xl:border-r">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                      Proposed addition
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-ink-primary">
                      Shared acknowledgement behavior for critical diagnostics
                    </h4>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full bg-[#FFF1D6] px-3 py-2 text-[8px] font-bold uppercase tracking-[0.06em] text-[#895000]">
                    <FileClock aria-hidden="true" size={11} />
                    Clinical review
                  </span>
                </div>

                <p className="mt-4 max-w-3xl text-[10px] leading-5 text-ink-secondary">
                  Laboratory and imaging products currently use different
                  acknowledgement controls. The proposal creates a shared pattern
                  for ownership, escalation, response evidence and unresolved-risk
                  routing.
                </p>

                <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    ["Requested by", "Diagnostics product team"],
                    ["Accountable owner", "Clinical governance"],
                    ["Target version", "1.2"],
                    ["Risk level", "Clinical safety"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-lg border border-border-default bg-surface-subtle p-3"
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

                <div className="mt-5 rounded-lg border border-[#E7D09F] bg-[#FFF9ED] p-4">
                  <div className="flex items-start gap-3">
                    <AlertTriangle
                      aria-hidden="true"
                      size={17}
                      className="mt-0.5 shrink-0 text-[#895000]"
                    />

                    <div>
                      <p className="text-xs font-semibold text-[#895000]">
                        Evidence still required
                      </p>

                      <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                        The proposal cannot enter implementation until escalation
                        timing, keyboard behavior and screen-reader announcement
                        rules are verified.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 inline-flex h-9 items-center gap-2 rounded-md bg-action px-3 text-[10px] font-semibold"
                  style={{ color: "#FFFFFF" }}
                >
                  Open contribution record
                  <ArrowRight aria-hidden="true" size={13} />
                </button>
              </div>

              <aside className="bg-surface-subtle p-4 md:p-6">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                  Decision history
                </p>

                <ol className="mt-5 space-y-5">
                  {decisionEvents.map((event) => (
                    <li
                      key={`${event.time}-${event.title}`}
                      className="grid grid-cols-[58px_20px_1fr] gap-3"
                    >
                      <span className="ds-mono pt-1 text-[8px] text-ink-tertiary">
                        {event.time}
                      </span>

                      <span
                        className={`mt-0.5 grid size-5 place-items-center rounded-full ${
                          event.status === "complete"
                            ? "bg-[#DDF3E6] text-[#176B42]"
                            : event.status === "active"
                              ? "bg-[#FFF1D6] text-[#895000]"
                              : "bg-[#E8EDF0] text-ink-tertiary"
                        }`}
                      >
                        {event.status === "complete" ? (
                          <Check aria-hidden="true" size={10} />
                        ) : event.status === "active" ? (
                          <FileClock aria-hidden="true" size={10} />
                        ) : (
                          <History aria-hidden="true" size={10} />
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
              </aside>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <ClipboardCheck aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Definition of ready
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Design begins only after the problem and risk are understood.
              </h3>
            </div>

            <ul className="divide-y divide-border-subtle">
              {readyChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 px-5 py-3 md:px-6"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    size={15}
                    className="mt-0.5 shrink-0 text-[#176B42]"
                  />

                  <span className="text-[10px] leading-5 text-ink-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <BadgeCheck aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Definition of done
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Completion requires verified behavior—not a polished default state.
              </h3>
            </div>

            <ul className="divide-y divide-border-subtle">
              {doneChecklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 px-5 py-3 md:px-6"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    size={15}
                    className="mt-0.5 shrink-0 text-action"
                  />

                  <span className="text-[10px] leading-5 text-ink-secondary">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Scale aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Accountable ownership
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Each quality dimension has a named accountable role.
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse text-left">
              <thead className="bg-surface-subtle">
                <tr>
                  {[
                    "Governance area",
                    "Accountable owner",
                    "Responsibility",
                    "Review condition",
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
                {ownershipRows.map((row) => (
                  <tr
                    key={row.area}
                    className="border-b border-border-subtle"
                  >
                    <td className="px-5 py-4 text-[10px] font-semibold text-action md:px-6">
                      {row.area}
                    </td>

                    <td className="px-5 py-4 text-[10px] font-semibold text-ink-primary md:px-6">
                      {row.owner}
                    </td>

                    <td className="px-5 py-4 text-[10px] leading-5 text-ink-secondary md:px-6">
                      {row.responsibility}
                    </td>

                    <td className="px-5 py-4 text-[10px] text-ink-secondary md:px-6">
                      {row.review}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <ShieldCheck aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Review gates
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Review depth follows the consequence of the change.
            </h3>
          </div>

          <div className="grid gap-3 p-5 md:grid-cols-2 md:p-6 xl:grid-cols-3">
            {reviewGates.map((gate) => {
              const Icon = gate.icon;

              return (
                <div
                  key={gate.title}
                  className="rounded-lg border border-border-default bg-surface-subtle p-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid size-9 place-items-center rounded-full bg-selected text-action">
                      <Icon aria-hidden="true" size={16} />
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DDF3E6] px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.06em] text-[#176B42]">
                      <Check aria-hidden="true" size={9} />
                      Required
                    </span>
                  </div>

                  <p className="mt-4 text-sm font-semibold text-ink-primary">
                    {gate.title}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                    {gate.description}
                  </p>

                  <p className="mt-4 border-t border-border-subtle pt-3 text-[8px] font-bold uppercase tracking-[0.07em] text-action">
                    Owner · {gate.owner}
                  </p>
                </div>
              );
            })}
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Tag aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Change classification
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Version impact reflects behavioral and clinical consequence.
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left">
                <thead className="bg-surface-subtle">
                  <tr>
                    {["Change", "Version impact", "Example"].map((heading) => (
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
                  {changeClassifications.map((row) => (
                    <tr
                      key={row.change}
                      className={`border-b border-border-subtle ${
                        row.tone === "critical" ? "bg-[#FFF7F7]" : ""
                      }`}
                    >
                      <td className="px-4 py-4 text-[10px] font-semibold text-ink-primary">
                        {row.change}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.06em] ${
                            row.tone === "critical"
                              ? "bg-[#FADDE0] text-[#8C1D27]"
                              : row.tone === "migration"
                                ? "bg-[#F0E9FA] text-[#624293]"
                                : row.tone === "controlled"
                                  ? "bg-[#FFF1D6] text-[#895000]"
                                  : "bg-[#DDF3E6] text-[#176B42]"
                          }`}
                        >
                          {row.version}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-[10px] leading-5 text-ink-secondary">
                        {row.example}
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
                  Deprecation contract
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Removal follows a controlled and traceable migration.
              </h3>
            </div>

            <ol className="divide-y divide-border-subtle">
              {[
                {
                  number: "01",
                  title: "Mark the pattern",
                  description:
                    "Show that the component is deprecated and explain why.",
                },
                {
                  number: "02",
                  title: "Name the replacement",
                  description:
                    "Provide the supported alternative and migration examples.",
                },
                {
                  number: "03",
                  title: "Track remaining use",
                  description:
                    "Identify products, templates and records still depending on it.",
                },
                {
                  number: "04",
                  title: "Preserve history",
                  description:
                    "Maintain rendering required for signed or exported records.",
                },
                {
                  number: "05",
                  title: "Remove after review",
                  description:
                    "Complete the migration window and final risk assessment.",
                },
              ].map((step) => (
                <li
                  key={step.number}
                  className="grid grid-cols-[38px_1fr] gap-3 p-4 md:px-6"
                >
                  <span className="ds-mono pt-0.5 text-[9px] font-semibold text-ink-tertiary">
                    {step.number}
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
              ))}
            </ol>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <UserCheck aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Template governance
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Governed clinical content cannot be silently changed.
            </h3>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2 md:p-6 xl:grid-cols-4">
            {[
              {
                label: "Named owner",
                value: "Every template has an accountable clinical owner.",
              },
              {
                label: "Version and scope",
                value: "The effective version and supported encounter are visible.",
              },
              {
                label: "Controlled rollout",
                value: "Updates use versioned release and migration rules.",
              },
              {
                label: "Historical integrity",
                value: "Signed records retain the template version used.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-border-default bg-surface-subtle p-4"
              >
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                  {item.label}
                </p>

                <p className="mt-3 text-[10px] leading-5 text-ink-secondary">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-5 mb-5 rounded-lg border border-[#D6C8E8] bg-[#FAF7FD] p-4 md:mx-6 md:mb-6">
            <div className="flex items-start gap-3">
              <LockKeyhole
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-[#624293]"
              />

              <div>
                <p className="text-xs font-semibold text-[#624293]">
                  Personal shortcuts remain separate from governed content
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  A clinician may create personal convenience text, but it cannot
                  silently alter required fields, safety instructions, consent
                  language or the approved clinical template.
                </p>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-[#E7B7BC] bg-[#FFF7F7] p-5 md:p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-[#8C1D27]"
              />

              <div>
                <p className="text-sm font-semibold text-[#8C1D27]">
                  Clinical change is never treated as cosmetic
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  A wording, color, timing or interaction change can alter clinical
                  interpretation and must receive review proportional to its risk.
                </p>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-[#8C1D27]">
                  Consequence determines review depth
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-xl border border-[#AFD8D6] bg-[#EDF8F7] p-5 md:p-6">
            <div className="flex items-start gap-4">
              <PackageCheck
                aria-hidden="true"
                size={19}
                className="mt-0.5 shrink-0 text-action"
              />

              <div>
                <p className="text-sm font-semibold text-ink-primary">
                  Version evidence travels with the product
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  Components, templates and historical records retain the version
                  needed to explain behavior, reproduce evidence and support safe
                  migration.
                </p>

                <p className="mt-4 text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                  Never overwrite historical meaning
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
              <p className="text-sm font-semibold">Governance rule</p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Every contribution begins with a demonstrated workflow problem,
                names accountable reviewers, specifies all consequential states and
                releases with evidence, versioning and a safe migration path.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-GOV-001 · CHANGE CONTROLLED
          </span>
        </aside>
      </div>
    </section>
  );
}
