import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Clock3,
  Eye,
  Focus,
  Keyboard,
  LockKeyhole,
  Maximize2,
  MousePointer2,
  PauseCircle,
  RotateCcw,
  ShieldCheck,
  XCircle,
} from "lucide-react";

const accessibilityMetrics = [
  {
    icon: Eye,
    value: "4.5:1",
    label: "Body-text contrast",
    description: "Critical information remains readable in every supported state.",
  },
  {
    icon: MousePointer2,
    value: "44 × 44",
    label: "Minimum action target",
    description: "Primary controls remain usable with touch or limited dexterity.",
  },
  {
    icon: Maximize2,
    value: "200%",
    label: "Supported zoom",
    description: "Content reflows without hiding actions or patient context.",
  },
  {
    icon: ShieldCheck,
    value: "Never",
    label: "Color alone",
    description: "Icons, labels and language always reinforce clinical meaning.",
  },
];

const keyboardSteps = [
  {
    key: "01",
    title: "Patient context",
    description: "Identity is announced before the active clinical task.",
    status: "complete",
  },
  {
    key: "02",
    title: "Dose field",
    description: "The visible focus indicator follows the expected reading order.",
    status: "current",
  },
  {
    key: "03",
    title: "Warning details",
    description: "The error explanation is connected to the affected field.",
    status: "next",
  },
  {
    key: "04",
    title: "Review action",
    description: "The primary action follows the information required to decide.",
    status: "next",
  },
];

const semanticStates = [
  {
    icon: CheckCircle2,
    label: "READY",
    title: "Ready to continue",
    description: "Required information has been reviewed.",
    foreground: "#176B42",
    background: "#F1FAF5",
    border: "#B9DDC9",
  },
  {
    icon: AlertTriangle,
    label: "ATTENTION",
    title: "Review before continuing",
    description: "A decision needs additional clinical context.",
    foreground: "#895000",
    background: "#FFF9ED",
    border: "#E9CE91",
  },
  {
    icon: XCircle,
    label: "CRITICAL",
    title: "Immediate response required",
    description: "Delay could result in patient harm.",
    foreground: "#8C1D27",
    background: "#FFF7F7",
    border: "#E7B7BC",
  },
  {
    icon: LockKeyhole,
    label: "RESTRICTED",
    title: "Approval is required",
    description: "The current role cannot complete this action.",
    foreground: "#624293",
    background: "#FAF7FD",
    border: "#D7CAE9",
  },
];

export function AccessibilitySection() {
  return (
    <section
      id="accessibility"
      className="ds-section bg-surface"
      aria-labelledby="accessibility-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">Accessibility · 05 / 13</p>

            <h2
              id="accessibility-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Accessibility is part of the clinical safety model.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Hospital interfaces must remain understandable and operable across
              different abilities, devices, environments and levels of urgency.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <ShieldCheck
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                Accessibility is verified inside complete workflows because
                clinical risk often appears through context, sequence and state.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Eye aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Perception and readability
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Essential information remains readable under pressure.
            </h3>

            <p className="mt-2 max-w-3xl text-xs leading-5 text-ink-secondary">
              Contrast, scale and target size are treated as operational
              requirements rather than final-stage visual adjustments.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4">
            {accessibilityMetrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="border-b border-border-subtle p-5 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 xl:border-b-0 xl:[&:nth-child(2)]:border-r xl:last:border-r-0 md:p-6"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-selected text-action">
                    <Icon aria-hidden="true" size={18} />
                  </span>

                  <p className="ds-mono mt-5 text-2xl font-semibold text-ink-primary">
                    {metric.value}
                  </p>

                  <p className="mt-2 text-xs font-semibold text-ink-primary">
                    {metric.label}
                  </p>

                  <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
                    {metric.description}
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
                <Keyboard aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Keyboard and focus
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Focus follows the clinical decision sequence.
              </h3>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-[1.05fr_0.95fr] md:p-6">
              <div className="rounded-lg border border-border-default bg-canvas p-4">
                <div className="rounded-lg border border-border-default bg-surface shadow-sm">
                  <div className="border-b border-border-subtle p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-ink-primary">
                          Medication review
                        </p>

                        <p className="mt-1 text-[10px] text-ink-secondary">
                          Meera Nair · OPD-26-08154
                        </p>
                      </div>

                      <span className="rounded bg-[#FFF1D6] px-2 py-1 text-[9px] font-bold text-[#895000]">
                        REVIEW
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <label className="block">
                      <span className="text-xs font-semibold text-ink-primary">
                        Medication dose
                      </span>

                      <span className="mt-1 block text-[10px] text-ink-secondary">
                        Enter the adjusted dose
                      </span>

                      <span className="relative mt-3 block">
                        <input
                          type="text"
                          value="500 mg"
                          readOnly
                          aria-describedby="accessible-dose-warning"
                          className="h-11 w-full rounded-md border border-action bg-surface px-3 text-xs text-ink-primary outline-none ring-2 ring-focus ring-offset-2"
                        />

                        <Focus
                          aria-hidden="true"
                          size={15}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-action"
                        />
                      </span>

                      <span
                        id="accessible-dose-warning"
                        className="mt-3 flex items-start gap-2 text-[10px] leading-4 text-[#8C1D27]"
                      >
                        <AlertTriangle
                          aria-hidden="true"
                          size={13}
                          className="mt-0.5 shrink-0"
                        />
                        Dose exceeds the expected range for the recorded renal
                        function.
                      </span>
                    </label>

                    <button
                      type="button"
                      className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-action px-4 text-xs font-semibold hover:bg-action-hover"
                      style={{ color: "#FFFFFF" }}
                    >
                      Review dose
                      <ArrowRight aria-hidden="true" size={14} />
                    </button>
                  </div>
                </div>

                <p className="mt-3 flex items-center gap-2 text-[10px] text-ink-tertiary">
                  <Keyboard aria-hidden="true" size={13} />
                  Tab moves forward · Shift + Tab moves backward
                </p>
              </div>

              <ol className="space-y-2">
                {keyboardSteps.map((step) => (
                  <li
                    key={step.key}
                    className={`flex items-start gap-3 rounded-lg border p-3 ${
                      step.status === "current"
                        ? "border-action bg-selected"
                        : "border-transparent"
                    }`}
                  >
                    <span
                      className={`ds-mono grid size-7 shrink-0 place-items-center rounded-full text-[9px] font-bold ${
                        step.status === "complete"
                          ? "bg-[#E4F4EB] text-[#176B42]"
                          : step.status === "current"
                            ? "bg-action text-white"
                            : "bg-surface-subtle text-ink-tertiary"
                      }`}
                    >
                      {step.status === "complete" ? (
                        <CheckCircle2 aria-hidden="true" size={14} />
                      ) : (
                        step.key
                      )}
                    </span>

                    <div>
                      <p className="text-xs font-semibold text-ink-primary">
                        {step.title}
                      </p>

                      <p className="mt-1 text-[10px] leading-4 text-ink-secondary">
                        {step.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <AlertTriangle aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Errors and recovery
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Errors identify the problem and the path forward.
              </h3>
            </div>

            <div className="space-y-4 p-5 md:p-6">
              <div
                role="alert"
                className="rounded-lg border border-[#E7B7BC] bg-[#FFF7F7] p-4"
              >
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#FADDE0] text-[#8C1D27]">
                    <XCircle aria-hidden="true" size={17} />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-[#8C1D27]">
                      2 issues prevent signing
                    </p>

                    <p className="mt-1 text-[11px] leading-5 text-ink-secondary">
                      Correct the highlighted fields. Previously entered
                      information has been preserved.
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 border-t border-[#E7B7BC] pt-3">
                  <li>
                    <button
                      type="button"
                      className="text-left text-[10px] font-semibold text-[#8C1D27] underline underline-offset-2"
                    >
                      Medication dose requires confirmation
                    </button>
                  </li>

                  <li>
                    <button
                      type="button"
                      className="text-left text-[10px] font-semibold text-[#8C1D27] underline underline-offset-2"
                    >
                      Clinical indication is missing
                    </button>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-border-default bg-surface-subtle p-4">
                <div className="flex items-start gap-3">
                  <RotateCcw
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-action"
                  />

                  <div>
                    <p className="text-xs font-semibold text-ink-primary">
                      Work is preserved
                    </p>

                    <p className="mt-1 text-[10px] leading-5 text-ink-secondary">
                      Returning to an error never clears validated patient,
                      medication or note information.
                    </p>

                    <button
                      type="button"
                      className="mt-3 inline-flex items-center gap-2 text-[10px] font-semibold text-action"
                    >
                      Return to first issue
                      <ArrowRight aria-hidden="true" size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-action">
              Meaning beyond color
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Every state combines language, symbol and visual treatment.
            </h3>
          </div>

          <div className="grid gap-3 p-5 sm:grid-cols-2 xl:grid-cols-4 md:p-6">
            {semanticStates.map((state) => {
              const Icon = state.icon;

              return (
                <div
                  key={state.label}
                  className="rounded-lg border p-4"
                  style={{
                    backgroundColor: state.background,
                    borderColor: state.border,
                  }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <Icon
                      aria-hidden="true"
                      size={18}
                      style={{ color: state.foreground }}
                    />

                    <span
                      className="text-[9px] font-bold tracking-[0.08em]"
                      style={{ color: state.foreground }}
                    >
                      {state.label}
                    </span>
                  </div>

                  <p
                    className="mt-5 text-xs font-semibold"
                    style={{ color: state.foreground }}
                  >
                    {state.title}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                    {state.description}
                  </p>
                </div>
              );
            })}
          </div>
        </article>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <article className="ds-panel p-5 md:p-6">
            <PauseCircle aria-hidden="true" size={20} className="text-action" />

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-action">
              Motion
            </p>

            <h3 className="mt-3 text-lg font-semibold text-ink-primary">
              Animation never blocks a decision.
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
              Reduced-motion preferences remove non-essential transitions while
              preserving state changes and confirmation.
            </p>
          </article>

          <article className="ds-panel p-5 md:p-6">
            <Clock3 aria-hidden="true" size={20} className="text-action" />

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-action">
              Time
            </p>

            <h3 className="mt-3 text-lg font-semibold text-ink-primary">
              Time-sensitive states remain controllable.
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
              Sessions warn before expiring, work is preserved and additional
              time can be requested without losing context.
            </p>
          </article>

          <article className="ds-panel p-5 md:p-6">
            <Keyboard aria-hidden="true" size={20} className="text-action" />

            <p className="mt-4 text-xs font-bold uppercase tracking-[0.1em] text-action">
              Cognition
            </p>

            <h3 className="mt-3 text-lg font-semibold text-ink-primary">
              Language explains one decision at a time.
            </h3>

            <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
              Instructions use explicit verbs, stable terminology and visible
              consequences instead of relying on memory.
            </p>
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
                Accessibility acceptance rule
              </p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                A workflow is complete only when it remains perceivable,
                operable, understandable and recoverable without relying on a
                single sense or input method.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-A11Y-001 · SAFETY VERIFIED
          </span>
        </aside>
      </div>
    </section>
  );
}
