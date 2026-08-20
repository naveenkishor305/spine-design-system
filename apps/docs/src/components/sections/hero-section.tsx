import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  ChevronRight,
  CircleUserRound,
  Cloud,
  FileText,
  FlaskConical,
  LayoutDashboard,
  Pill,
  Search,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const contextLabels = [
  "Indian multi-specialty hospitals",
  "100–300 beds",
  "29 connected platform modules",
  "Desktop-first enterprise system",
];

const capabilityMarkers = [
  ["35", "Shipped components"],
  ["29", "Platform modules"],
  ["AA", "Accessibility target"],
  ["RBAC", "Contextual access"],
  ["AUDIT", "Ready patterns"],
];

const tasks = [
  {
    icon: FlaskConical,
    title: "Critical potassium result",
    description: "Meera Nair · Internal Medicine",
    meta: "Due now · Awaiting acknowledgement",
    critical: true,
  },
  {
    icon: FileText,
    title: "Complete consultation note",
    description: "Encounter OPD-26-08154",
    meta: "Due 10:45 · Draft saved",
  },
  {
    icon: Pill,
    title: "Review medication interaction",
    description: "Amoxicillin · Penicillin allergy",
    meta: "Blocked · Clinical review required",
  },
];

export function HeroSection() {
  return (
    <section
      id="overview"
      className="ds-grid relative min-h-[calc(100vh-56px)] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-selected/60 blur-3xl"
      />

      <div className="ds-container relative py-16 md:py-20 xl:py-16">
        <div className="grid items-center gap-14 xl:grid-cols-[minmax(0,0.82fr)_minmax(560px,1.18fr)]">
          <div>
            <p className="ds-eyebrow">
              Spine Design System v2 · Hospital operating platform
            </p>

            <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-[-0.045em] text-ink-primary md:text-6xl xl:text-[68px] xl:leading-[0.98]">
              Clinical
              <span className="block">Operations</span>
            </h1>

            <p className="mt-7 max-w-xl text-xl leading-8 text-ink-secondary">
              One operating language for a whole hospital, not one department.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-ink-secondary">
              A role-aware system spanning patient access, emergency and
              trauma, inpatient and critical care, diagnostics, pharmacy,
              revenue cycle, supply chain, allied health, facility operations
              and enterprise governance — without losing identity, ownership
              or system state.
            </p>

            <div className="mt-7 flex max-w-2xl flex-wrap gap-2">
              {contextLabels.map((label) => (
                <span
                  key={label}
                  className="rounded border border-border-default bg-surface/85 px-3 py-1.5 text-xs font-medium text-ink-secondary"
                >
                  {label}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#principles"
                className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-action px-5 text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 hover:bg-action-hover hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2" style={{ color: "#FFFFFF" }}
              >
                Explore the system
                <ChevronRight aria-hidden="true" size={16} />
              </a>

              <a
                href="#clinical-patterns"
                className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-md border border-border-default bg-surface px-5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-action hover:bg-selected focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2" style={{ color: "#17262B" }}
              >
                View clinical patterns
              </a>
            </div>
          </div>

          <div className="relative">
            <p className="mb-3 text-right text-[10px] font-semibold uppercase tracking-[0.12em] text-ink-tertiary">
              Fictional demonstration data
            </p>

            <div className="overflow-hidden rounded-xl border border-border-default bg-surface shadow-[0_28px_80px_rgba(16,28,32,0.16)]">
              <div className="flex h-11 items-center justify-between border-b border-border-subtle bg-graphite px-4 text-white">
                <div className="flex items-center gap-2.5">
                  <Activity
                    aria-hidden="true"
                    size={16}
                    className="text-[#8FD3D0]"
                  />
                  <span className="text-xs font-semibold">Hospital OS</span>
                  <span className="text-white/30">/</span>
                  <span className="text-[11px] text-white/65">
                    Doctor workspace
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[10px] text-white/65">
                  <Cloud aria-hidden="true" size={13} />
                  <span>Connected · Synced</span>
                </div>
              </div>

              <div className="flex min-h-[470px]">
                <div className="hidden w-14 flex-col items-center gap-2 bg-[#16262B] py-4 text-white sm:flex">
                  <span className="grid size-8 place-items-center rounded-md bg-[#D9F0F0] text-action">
                    <LayoutDashboard aria-hidden="true" size={16} />
                  </span>
                  <span className="grid size-8 place-items-center rounded-md text-white/55">
                    <Search aria-hidden="true" size={16} />
                  </span>
                  <span className="grid size-8 place-items-center rounded-md text-white/55">
                    <CircleUserRound aria-hidden="true" size={16} />
                  </span>
                  <span className="grid size-8 place-items-center rounded-md text-white/55">
                    <Stethoscope aria-hidden="true" size={16} />
                  </span>
                  <span className="grid size-8 place-items-center rounded-md text-white/55">
                    <FlaskConical aria-hidden="true" size={16} />
                  </span>
                </div>

                <div className="min-w-0 flex-1 bg-canvas">
                  <div className="border-b border-border-default bg-surface px-4 py-3">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h2 className="text-sm font-semibold text-ink-primary">
                            Meera Nair
                          </h2>
                          <span className="rounded bg-[#FFF1D6] px-1.5 py-0.5 text-[9px] font-bold text-[#895000]">
                            ALLERGY
                          </span>
                        </div>

                        <p className="ds-mono mt-1 text-[10px] text-ink-tertiary">
                          42 years · MRN HOS-024718 · OPD-26-08154
                        </p>
                      </div>

                      <span className="inline-flex items-center gap-1.5 rounded bg-[#E4F4EB] px-2 py-1 text-[10px] font-semibold text-[#176B42]">
                        <CheckCircle2 aria-hidden="true" size={12} />
                        Consent active
                      </span>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[10px] text-ink-secondary">
                      <span>
                        <strong className="font-semibold text-ink-primary">
                          Location:
                        </strong>{" "}
                        Internal Medicine · OPD 4
                      </span>
                      <span>
                        <strong className="font-semibold text-ink-primary">
                          Allergy:
                        </strong>{" "}
                        Penicillin
                      </span>
                    </div>
                  </div>

                  <div className="grid gap-3 p-3 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="ds-panel overflow-hidden">
                      <div className="flex items-center justify-between border-b border-border-subtle px-3.5 py-3">
                        <div>
                          <p className="text-xs font-semibold text-ink-primary">
                            Safety-weighted work queue
                          </p>
                          <p className="mt-0.5 text-[10px] text-ink-tertiary">
                            Current shift · 08:00–16:00
                          </p>
                        </div>

                        <span className="ds-mono text-[10px] text-ink-tertiary">
                          03 tasks
                        </span>
                      </div>

                      <div>
                        {tasks.map((task) => {
                          const Icon = task.icon;

                          return (
                            <div
                              key={task.title}
                              className={`border-b border-border-subtle p-3 last:border-b-0 ${
                                task.critical ? "bg-[#FFF7F7]" : "bg-surface"
                              }`}
                            >
                              <div className="flex gap-2.5">
                                <span
                                  className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded ${
                                    task.critical
                                      ? "bg-[#FADDE0] text-[#8C1D27]"
                                      : "bg-surface-subtle text-ink-secondary"
                                  }`}
                                >
                                  <Icon aria-hidden="true" size={14} />
                                </span>

                                <div className="min-w-0 flex-1">
                                  <div className="flex items-start justify-between gap-2">
                                    <p className="text-[11px] font-semibold text-ink-primary">
                                      {task.title}
                                    </p>

                                    {task.critical && (
                                      <span className="inline-flex items-center gap-1 text-[9px] font-bold uppercase text-[#8C1D27]">
                                        <AlertTriangle
                                          aria-hidden="true"
                                          size={10}
                                        />
                                        Critical
                                      </span>
                                    )}
                                  </div>

                                  <p className="mt-1 text-[10px] text-ink-secondary">
                                    {task.description}
                                  </p>

                                  <p className="ds-mono mt-1.5 text-[9px] text-ink-tertiary">
                                    {task.meta}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="ds-panel p-3.5">
                        <div className="flex items-center justify-between">
                          <p className="text-xs font-semibold text-ink-primary">
                            Consultation
                          </p>

                          <span className="rounded bg-[#EEF2F3] px-1.5 py-0.5 text-[9px] font-semibold text-ink-secondary">
                            Draft
                          </span>
                        </div>

                        <div className="mt-3 space-y-3">
                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                              Presenting concern
                            </p>
                            <p className="mt-1 text-[10px] leading-4 text-ink-secondary">
                              Fatigue and intermittent muscle weakness for two
                              days.
                            </p>
                          </div>

                          <div>
                            <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                              Clinical note
                            </p>
                            <div className="mt-1.5 rounded-md border border-border-default bg-surface px-2.5 py-2 text-[10px] leading-4 text-ink-secondary">
                              Review current medication and confirm the critical
                              laboratory result before signing.
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border border-[#E7B7BC] bg-[#FFF2F3] p-3.5">
                        <div className="flex items-start gap-2">
                          <ShieldCheck
                            aria-hidden="true"
                            size={15}
                            className="mt-0.5 shrink-0 text-[#8C1D27]"
                          />

                          <div>
                            <p className="text-[11px] font-semibold text-[#8C1D27]">
                              Signing safety check
                            </p>
                            <p className="mt-1 text-[10px] leading-4 text-[#713239]">
                              Critical result acknowledgement and medication
                              conflict review are still required.
                            </p>
                          </div>
                        </div>

                        <button
                          type="button"
                          disabled
                          className="mt-3 h-8 w-full cursor-not-allowed rounded-md border border-[#D9A1A7] bg-white text-[10px] font-semibold text-[#946168]"
                        >
                          Sign clinical note
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-border-default bg-surface px-4 py-2.5">
                    <div className="flex items-center gap-2 text-[9px] text-ink-tertiary">
                      <ShieldCheck aria-hidden="true" size={12} />
                      <span>Identity anchored · Provenance visible</span>
                    </div>

                    <span className="ds-mono text-[9px] text-ink-tertiary">
                      Last saved 10:32:18
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden rounded-lg border border-border-default bg-surface p-3 shadow-lg md:block">
              <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                System state
              </p>
              <p className="mt-1 flex items-center gap-2 text-[11px] font-semibold text-ink-primary">
                <span className="size-2 rounded-full bg-[#176B42]" />
                All services operational
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid border-y border-border-default bg-surface/65 sm:grid-cols-2 xl:grid-cols-5">
          {capabilityMarkers.map(([value, label]) => (
            <div
              key={label}
              className="border-b border-border-default px-4 py-4 last:border-b-0 sm:border-r sm:even:border-r-0 xl:border-b-0 xl:even:border-r xl:last:border-r-0"
            >
              <p className="ds-mono text-sm font-semibold text-action">
                {value}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-[0.08em] text-ink-tertiary">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


