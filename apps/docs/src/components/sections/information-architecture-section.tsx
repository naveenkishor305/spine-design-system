import {
  ArrowRight,
  BarChart3,
  Boxes,
  CalendarDays,
  CheckCircle2,
  CircleDot,
  Database,
  FileText,
  FlaskConical,
  FolderTree,
  Hospital,
  Landmark,
  LayoutDashboard,
  Link2,
  LockKeyhole,
  Network,
  Package,
  PanelLeft,
  Pill,
  Receipt,
  Scan,
  Search,
  Settings,
  ShieldCheck,
  Stethoscope,
  UserCog,
  Users,
  Wrench,
} from "lucide-react";

const moduleGroups = [
  {
    label: "Clinical care",
    accent: "#075458",
    background: "#EDF8F7",
    modules: [
      { name: "Patients", icon: Users },
      { name: "Appointments", icon: CalendarDays },
      { name: "Doctors", icon: Stethoscope },
      { name: "EMR", icon: FileText },
    ],
  },
  {
    label: "Diagnostics",
    accent: "#624293",
    background: "#FAF7FD",
    modules: [
      { name: "Laboratory", icon: FlaskConical },
      { name: "Radiology", icon: Scan },
      { name: "Pharmacy", icon: Pill },
    ],
  },
  {
    label: "Revenue and access",
    accent: "#895000",
    background: "#FFF9ED",
    modules: [
      { name: "Billing", icon: Receipt },
      { name: "Insurance", icon: ShieldCheck },
    ],
  },
  {
    label: "Hospital operations",
    accent: "#176B42",
    background: "#F1FAF5",
    modules: [
      { name: "Inventory", icon: Package },
      { name: "Assets", icon: Wrench },
      { name: "Finance", icon: Landmark },
      { name: "Human resources", icon: UserCog },
    ],
  },
  {
    label: "System governance",
    accent: "#37536B",
    background: "#F4F7F9",
    modules: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Reports", icon: BarChart3 },
      { name: "Administration", icon: LockKeyhole },
      { name: "Settings", icon: Settings },
    ],
  },
];

const navigationLayers = [
  {
    number: "01",
    label: "System",
    title: "Hospital-wide navigation",
    description:
      "Provides stable access to modules, work queues, search and alerts.",
  },
  {
    number: "02",
    label: "Workspace",
    title: "Role-specific work area",
    description:
      "Prioritizes the tools and information required for the current role.",
  },
  {
    number: "03",
    label: "Patient",
    title: "Persistent patient context",
    description:
      "Preserves identity, location and safety information across clinical tasks.",
  },
  {
    number: "04",
    label: "Task",
    title: "Focused decision layer",
    description:
      "Shows the information and actions needed to complete one safe outcome.",
  },
];

const relationshipNodes = [
  {
    label: "Patient",
    code: "PATIENT",
    description: "The stable person record",
    color: "#075458",
    background: "#EDF8F7",
  },
  {
    label: "Encounter",
    code: "ENCOUNTER",
    description: "A specific episode of care",
    color: "#624293",
    background: "#FAF7FD",
  },
  {
    label: "Clinical order",
    code: "ORDER",
    description: "A request for investigation or treatment",
    color: "#895000",
    background: "#FFF9ED",
  },
  {
    label: "Result",
    code: "RESULT",
    description: "The verified clinical outcome",
    color: "#176B42",
    background: "#F1FAF5",
  },
];

const roleViews = [
  {
    role: "Clinician",
    focus: "Patient care",
    modules: "Patients · EMR · Orders · Results",
  },
  {
    role: "Laboratory",
    focus: "Diagnostic workflow",
    modules: "Worklist · Specimens · Results · Critical alerts",
  },
  {
    role: "Billing",
    focus: "Revenue cycle",
    modules: "Encounters · Charges · Insurance · Payments",
  },
];

export function InformationArchitectureSection() {
  return (
    <section
      id="information-architecture"
      className="ds-section bg-surface"
      aria-labelledby="information-architecture-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">
              Information architecture · 07 / 13
            </p>

            <h2
              id="information-architecture-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Structure keeps complex hospital work understandable.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Hospital information is organized around roles, patients,
              encounters and clinical tasks instead of disconnected software
              modules.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <Network
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                People should always understand where they are, whose
                information they are viewing and what action comes next.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <FolderTree aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Product hierarchy
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Seventeen modules behave as one connected hospital system.
            </h3>

            <p className="mt-2 max-w-3xl text-xs leading-5 text-ink-secondary">
              Modules are grouped by operational purpose while shared patient,
              encounter and permission models maintain continuity.
            </p>
          </div>

          <div className="grid gap-4 p-5 md:grid-cols-2 md:p-6 xl:grid-cols-5">
            {moduleGroups.map((group) => (
              <div
                key={group.label}
                className="overflow-hidden rounded-lg border border-border-default"
              >
                <div
                  className="border-b border-border-subtle p-4"
                  style={{ backgroundColor: group.background }}
                >
                  <p
                    className="text-[9px] font-bold uppercase tracking-[0.1em]"
                    style={{ color: group.accent }}
                  >
                    {group.label}
                  </p>
                </div>

                <ul className="divide-y divide-border-subtle bg-surface">
                  {group.modules.map((module) => {
                    const Icon = module.icon;

                    return (
                      <li
                        key={module.name}
                        className="flex items-center gap-3 px-4 py-3"
                      >
                        <Icon
                          aria-hidden="true"
                          size={14}
                          style={{ color: group.accent }}
                        />

                        <span className="text-[11px] font-semibold text-ink-primary">
                          {module.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <PanelLeft aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Navigation model
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Navigation moves from system to decision.
              </h3>
            </div>

            <ol className="divide-y divide-border-subtle">
              {navigationLayers.map((layer, index) => (
                <li
                  key={layer.number}
                  className="grid gap-4 p-5 sm:grid-cols-[48px_1fr_auto] sm:items-center md:p-6"
                >
                  <span
                    className={`ds-mono grid size-10 place-items-center rounded-full text-[10px] font-bold ${
                      index === 2
                        ? "bg-action text-white"
                        : "bg-selected text-action"
                    }`}
                  >
                    {layer.number}
                  </span>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-action">
                      {layer.label}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-ink-primary">
                      {layer.title}
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-ink-secondary">
                      {layer.description}
                    </p>
                  </div>

                  {index < navigationLayers.length - 1 && (
                    <ArrowRight
                      aria-hidden="true"
                      size={15}
                      className="hidden text-ink-tertiary sm:block"
                    />
                  )}
                </li>
              ))}
            </ol>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Hospital aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Contextual wayfinding
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Location and patient context remain visible.
              </h3>
            </div>

            <div className="p-5 md:p-6">
              <div className="overflow-hidden rounded-lg border border-border-default bg-canvas">
                <div className="flex items-center justify-between gap-4 border-b border-border-default bg-graphite px-4 py-3 text-white">
                  <div className="flex items-center gap-3">
                    <Boxes
                      aria-hidden="true"
                      size={16}
                      className="text-[#8FD3D0]"
                    />

                    <span className="text-xs font-semibold">Clinical workspace</span>
                  </div>

                  <Search
                    aria-hidden="true"
                    size={15}
                    className="text-white/60"
                  />
                </div>

                <div className="border-b border-[#B9DDC9] bg-[#F1FAF5] p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-semibold text-ink-primary">
                        Meera Nair
                      </p>

                      <p className="mt-1 text-[10px] text-ink-secondary">
                        UHID 0048217 · Female · 54 years
                      </p>
                    </div>

                    <span className="rounded bg-[#FFF1D6] px-2 py-1 text-[9px] font-bold text-[#895000]">
                      PENICILLIN ALLERGY
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex flex-wrap items-center gap-2 text-[10px] text-ink-secondary">
                    <span>Patients</span>
                    <ArrowRight aria-hidden="true" size={11} />
                    <span>Current encounter</span>
                    <ArrowRight aria-hidden="true" size={11} />
                    <span className="font-semibold text-action">
                      Medication review
                    </span>
                  </div>

                  <div className="mt-4 rounded-lg border border-border-default bg-surface p-4">
                    <div className="flex items-start gap-3">
                      <CircleDot
                        aria-hidden="true"
                        size={16}
                        className="mt-0.5 shrink-0 text-action"
                      />

                      <div>
                        <p className="text-xs font-semibold text-ink-primary">
                          Active task: Review discharge medication
                        </p>

                        <p className="mt-1 text-[10px] leading-5 text-ink-secondary">
                          Encounter OPD-26-08154 · Cardiology · Dr. Arun Rao
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  size={15}
                  className="mt-0.5 shrink-0 text-[#176B42]"
                />

                <p className="text-[10px] leading-5 text-ink-secondary">
                  Patient identity, active encounter, department and current task
                  remain available without depending on browser history.
                </p>
              </div>
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Link2 aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Object relationships
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Every clinical record connects through a traceable care episode.
            </h3>
          </div>

          <div className="p-5 md:p-6">
            <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-stretch">
              {relationshipNodes.map((node, index) => (
                <div key={node.code} className="contents">
                  <div
                    className="rounded-lg border border-border-default p-4"
                    style={{ backgroundColor: node.background }}
                  >
                    <Database
                      aria-hidden="true"
                      size={17}
                      style={{ color: node.color }}
                    />

                    <p
                      className="mt-4 text-[9px] font-bold tracking-[0.1em]"
                      style={{ color: node.color }}
                    >
                      {node.code}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-ink-primary">
                      {node.label}
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                      {node.description}
                    </p>
                  </div>

                  {index < relationshipNodes.length - 1 && (
                    <div className="grid place-items-center py-1 text-ink-tertiary lg:py-0">
                      <ArrowRight
                        aria-hidden="true"
                        size={17}
                        className="rotate-90 lg:rotate-0"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {[
                {
                  label: "Documentation",
                  description:
                    "Notes and observations inherit patient and encounter context.",
                },
                {
                  label: "Financial record",
                  description:
                    "Charges remain linked to the service that created them.",
                },
                {
                  label: "Audit history",
                  description:
                    "Every change records actor, time, object and clinical context.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-border-subtle bg-surface-subtle p-4"
                >
                  <p className="text-xs font-semibold text-ink-primary">
                    {item.label}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Users aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Role-based architecture
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                The structure stays consistent while priorities change by role.
              </h3>
            </div>

            <div className="divide-y divide-border-subtle">
              {roleViews.map((view) => (
                <div
                  key={view.role}
                  className="grid gap-3 p-5 sm:grid-cols-[120px_1fr] md:p-6"
                >
                  <div>
                    <p className="text-xs font-semibold text-action">
                      {view.role}
                    </p>

                    <p className="mt-1 text-[9px] uppercase tracking-[0.08em] text-ink-tertiary">
                      {view.focus}
                    </p>
                  </div>

                  <p className="text-[11px] leading-5 text-ink-secondary">
                    {view.modules}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Search aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Findability
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Search returns objects, not ambiguous pages.
              </h3>
            </div>

            <div className="p-5 md:p-6">
              <div className="flex h-11 items-center gap-3 rounded-md border border-action bg-surface px-3 ring-2 ring-focus ring-offset-2">
                <Search
                  aria-hidden="true"
                  size={15}
                  className="text-action"
                />

                <span className="text-xs text-ink-secondary">
                  Search patient, encounter, order or result
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {[
                  "Patient · Meera Nair · UHID 0048217",
                  "Encounter · OPD-26-08154 · Cardiology",
                  "Result · Potassium · Critical",
                ].map((result) => (
                  <li
                    key={result}
                    className="flex items-center gap-3 rounded-lg border border-border-subtle p-3"
                  >
                    <CircleDot
                      aria-hidden="true"
                      size={13}
                      className="shrink-0 text-action"
                    />

                    <span className="text-[10px] leading-5 text-ink-secondary">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        <aside className="mt-6 flex flex-col justify-between gap-6 rounded-xl bg-graphite p-6 text-white md:flex-row md:items-center md:p-8">
          <div className="flex max-w-3xl items-start gap-4">
            <Network
              aria-hidden="true"
              size={22}
              className="mt-0.5 shrink-0 text-[#8FD3D0]"
            />

            <div>
              <p className="text-sm font-semibold">
                Information architecture rule
              </p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Every screen preserves system location, patient identity,
                encounter context, object relationships and a clear path back to
                the responsible workflow.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-IA-001 · SYSTEM REVIEWED
          </span>
        </aside>
      </div>
    </section>
  );
}
