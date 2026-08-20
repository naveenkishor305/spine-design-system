import {
  Accessibility,
  Activity,
  FileClock,
  Fingerprint,
  ListChecks,
  RotateCcw,
  ShieldAlert,
  ShieldCheck,
  UsersRound,
  Workflow,
} from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Identity before action",
    description:
      "Patient, encounter, location and care context remain visible before any consequential action.",
    icon: Fingerprint,
  },
  {
    number: "02",
    title: "Safety earns interruption",
    description:
      "Critical alerts interrupt the workflow only when immediate clinical attention is justified.",
    icon: ShieldAlert,
    critical: true,
  },
  {
    number: "03",
    title: "System state stays visible",
    description:
      "Users can always understand whether information is saved, syncing, delayed, blocked or offline.",
    icon: Activity,
  },
  {
    number: "04",
    title: "Roles have clear contracts",
    description:
      "Each workspace reflects the decisions, permissions and responsibilities of its clinical role.",
    icon: UsersRound,
  },
  {
    number: "05",
    title: "Workflow before screens",
    description:
      "Components support complete care journeys and handoffs—not isolated pages or decorative dashboards.",
    icon: Workflow,
  },
  {
    number: "06",
    title: "Provenance is preserved",
    description:
      "Clinical information shows its source, author, timestamp and status wherever trust depends on it.",
    icon: FileClock,
  },
  {
    number: "07",
    title: "Ownership is explicit",
    description:
      "Tasks, exceptions and approvals clearly identify who must act, what is due and what happens next.",
    icon: ListChecks,
  },
  {
    number: "08",
    title: "Recovery is designed",
    description:
      "Interrupted work can be safely resumed without duplicate actions, lost data or hidden system changes.",
    icon: RotateCcw,
  },
  {
    number: "09",
    title: "Access is operational",
    description:
      "Keyboard use, readable contrast, safe target sizes and multilingual readiness are system requirements.",
    icon: Accessibility,
  },
  {
    number: "10",
    title: "Variation is governed",
    description:
      "Tokens, components and clinical rules create consistency while allowing controlled product evolution.",
    icon: ShieldCheck,
  },
];

const operatingRules = [
  ["Patient context", "Persistent"],
  ["Safety signals", "Prioritised"],
  ["Role ownership", "Explicit"],
  ["System state", "Recoverable"],
];

export function PrinciplesSection() {
  return (
    <section
      id="principles"
      className="ds-section bg-surface"
      aria-labelledby="principles-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 xl:grid-cols-[0.72fr_1.28fr]">
          <div className="relative overflow-hidden rounded-xl bg-graphite p-7 text-white md:p-9">
            <div
              aria-hidden="true"
              className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[#0B676B]/30 blur-3xl"
            />

            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8FD3D0]">
                  System intent
                </p>

                <span className="ds-mono text-xs text-white/45">01 / 13</span>
              </div>

              <h2
                id="principles-title"
                className="mt-10 max-w-md text-3xl font-semibold leading-tight tracking-[-0.035em] md:text-4xl"
              >
                Designed around the moments where healthcare software fails.
              </h2>

              <p className="mt-5 max-w-md text-sm leading-6 text-white/65">
                The system reduces ambiguity at handoffs, protects clinical
                decisions and keeps work recoverable when people, processes or
                technology are under pressure.
              </p>

              <div className="mt-10 border-t border-white/15">
                {operatingRules.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between gap-4 border-b border-white/15 py-3.5"
                  >
                    <span className="text-xs text-white/55">{label}</span>
                    <span className="ds-mono text-[10px] font-semibold uppercase tracking-[0.08em] text-[#A9DCDA]">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 border-l-2 border-[#8FD3D0] pl-4">
                <ShieldCheck
                  aria-hidden="true"
                  size={17}
                  className="mt-0.5 shrink-0 text-[#8FD3D0]"
                />

                <p className="text-xs leading-5 text-white/65">
                  Safety is expressed through hierarchy, language, interaction
                  and recovery—not through decorative red.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col justify-between gap-5 border-b border-border-default pb-7 md:flex-row md:items-end">
              <div>
                <p className="ds-eyebrow">Ten design principles</p>

                <h3 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.035em] text-ink-primary md:text-4xl">
                  A decision framework for every clinical interface.
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-6 text-ink-secondary">
                These principles govern foundations, components, role-based
                workspaces and every connected journey across the platform —
                from outpatient care through emergency, inpatient, surgical
                and enterprise operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.number}
                    className={`group relative min-h-52 border-b border-border-subtle p-5 transition-colors hover:bg-canvas md:odd:border-r ${
                      principle.critical ? "bg-[#FFF9F9]" : "bg-surface"
                    }`}
                  >
                    {principle.critical && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-y-0 left-0 w-0.5 bg-[#A8242F]"
                      />
                    )}

                    <div className="flex items-start justify-between gap-4">
                      <span
                        className={`grid size-9 place-items-center rounded-md ${
                          principle.critical
                            ? "bg-[#FADDE0] text-[#8C1D27]"
                            : "bg-surface-subtle text-action"
                        }`}
                      >
                        <Icon aria-hidden="true" size={17} strokeWidth={1.9} />
                      </span>

                      <span className="ds-mono text-[11px] text-ink-tertiary">
                        {principle.number}
                      </span>
                    </div>

                    <h4 className="mt-7 text-base font-semibold tracking-[-0.015em] text-ink-primary">
                      {principle.title}
                    </h4>

                    <p className="mt-2 max-w-md text-xs leading-5 text-ink-secondary">
                      {principle.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
