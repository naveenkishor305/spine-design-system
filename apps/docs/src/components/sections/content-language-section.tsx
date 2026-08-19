import {
  AlertTriangle,
  ArrowRight,
  BookOpenText,
  CheckCircle2,
  FileText,
  Globe2,
  Languages,
  MessageSquareText,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

const writingRules = [
  {
    number: "01",
    title: "Name the action",
    description:
      "Use specific clinical verbs such as review, acknowledge, prescribe and sign.",
  },
  {
    number: "02",
    title: "Explain the reason",
    description:
      "State why information or confirmation is required before asking for it.",
  },
  {
    number: "03",
    title: "Reveal the consequence",
    description:
      "High-risk messages explain what could happen if the action is delayed.",
  },
  {
    number: "04",
    title: "Identify ownership",
    description:
      "Make the responsible person, role or team explicit at every handoff.",
  },
];

const terminologyRows = [
  {
    avoid: "Submit",
    use: "Sign medication order",
    reason: "Names the committed clinical action.",
  },
  {
    avoid: "Proceed",
    use: "Review dose and continue",
    reason: "Explains what must happen next.",
  },
  {
    avoid: "Invalid value",
    use: "Enter the dose in milligrams",
    reason: "Provides a direct correction.",
  },
  {
    avoid: "Access denied",
    use: "Prescriber approval required",
    reason: "Explains the permission boundary.",
  },
];

const messageAnatomy = [
  {
    label: "What happened",
    value: "Potassium result is critical",
    color: "#8C1D27",
    background: "#FFF7F7",
  },
  {
    label: "Clinical context",
    value: "Result: 6.7 mmol/L · Reference: 3.5–5.1",
    color: "#075458",
    background: "#EDF8F7",
  },
  {
    label: "Consequence",
    value: "Delay could result in cardiac complications.",
    color: "#895000",
    background: "#FFF9ED",
  },
  {
    label: "Required action",
    value: "Assess the patient and notify the responsible clinician.",
    color: "#176B42",
    background: "#F1FAF5",
  },
];

export function ContentLanguageSection() {
  return (
    <section
      id="content-language"
      className="ds-section bg-canvas"
      aria-labelledby="content-language-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">Content and language · 06 / 13</p>

            <h2
              id="content-language-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Clinical language reduces hesitation at the point of care.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Interface content helps people understand the current situation,
              make a safe decision and know exactly what happens next.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <Stethoscope
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                Concision never removes essential clinical context, ownership or
                consequence.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <BookOpenText aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Writing foundations
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Every message supports one clear clinical decision.
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4">
            {writingRules.map((rule) => (
              <div
                key={rule.number}
                className="border-b border-border-subtle p-5 last:border-b-0 sm:border-r sm:[&:nth-child(2)]:border-r-0 xl:border-b-0 xl:[&:nth-child(2)]:border-r xl:last:border-r-0 md:p-6"
              >
                <span className="ds-mono text-[10px] font-semibold text-action">
                  {rule.number}
                </span>

                <p className="mt-5 text-sm font-semibold text-ink-primary">
                  {rule.title}
                </p>

                <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-2">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <MessageSquareText aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Action-oriented microcopy
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Replace generic instructions with explicit guidance.
              </h3>
            </div>

            <div className="space-y-4 p-5 md:p-6">
              <div className="rounded-lg border border-[#E7B7BC] bg-[#FFF7F7] p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#8C1D27]">
                  Avoid
                </p>

                <p className="mt-3 text-sm font-semibold text-ink-primary">
                  Something went wrong.
                </p>

                <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
                  Please try again later.
                </p>
              </div>

              <div className="rounded-lg border border-[#B9DDC9] bg-[#F1FAF5] p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    aria-hidden="true"
                    size={17}
                    className="mt-0.5 shrink-0 text-[#176B42]"
                  />

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#176B42]">
                      Use
                    </p>

                    <p className="mt-3 text-sm font-semibold text-ink-primary">
                      The medication order could not be saved.
                    </p>

                    <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
                      Your entered information is preserved. Check the connection
                      and save the order again.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-4 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-action px-4 text-xs font-semibold hover:bg-action-hover"
                  style={{ color: "#FFFFFF" }}
                >
                  Save order again
                  <ArrowRight aria-hidden="true" size={14} />
                </button>
              </div>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <AlertTriangle aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Message anatomy
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Risk messages answer four questions in sequence.
              </h3>
            </div>

            <div className="space-y-3 p-5 md:p-6">
              {messageAnatomy.map((item, index) => (
                <div
                  key={item.label}
                  className="grid gap-3 rounded-lg border border-border-subtle p-4 sm:grid-cols-[36px_1fr]"
                  style={{ backgroundColor: item.background }}
                >
                  <span
                    className="ds-mono grid size-8 place-items-center rounded-full bg-white text-[9px] font-bold"
                    style={{ color: item.color }}
                  >
                    0{index + 1}
                  </span>

                  <div>
                    <p
                      className="text-[9px] font-bold uppercase tracking-[0.08em]"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </p>

                    <p className="mt-2 text-xs font-semibold leading-5 text-ink-primary">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <FileText aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Controlled terminology
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Stable language makes actions predictable across workflows.
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead className="bg-surface-subtle">
                <tr>
                  <th
                    scope="col"
                    className="border-b border-border-default px-5 py-3 text-[9px] font-bold uppercase tracking-[0.08em] text-ink-tertiary md:px-6"
                  >
                    Avoid
                  </th>

                  <th
                    scope="col"
                    className="border-b border-border-default px-5 py-3 text-[9px] font-bold uppercase tracking-[0.08em] text-ink-tertiary md:px-6"
                  >
                    Use
                  </th>

                  <th
                    scope="col"
                    className="border-b border-border-default px-5 py-3 text-[9px] font-bold uppercase tracking-[0.08em] text-ink-tertiary md:px-6"
                  >
                    Why
                  </th>
                </tr>
              </thead>

              <tbody>
                {terminologyRows.map((row) => (
                  <tr key={row.avoid} className="border-b border-border-subtle">
                    <td className="px-5 py-4 text-xs text-[#8C1D27] md:px-6">
                      {row.avoid}
                    </td>

                    <td className="px-5 py-4 text-xs font-semibold text-action md:px-6">
                      {row.use}
                    </td>

                    <td className="px-5 py-4 text-[11px] leading-5 text-ink-secondary md:px-6">
                      {row.reason}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Languages aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Language readiness
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Translate clinical meaning, not words in isolation.
              </h3>
            </div>

            <div className="grid gap-4 p-5 md:grid-cols-2 md:p-6">
              <div className="rounded-lg border border-border-default bg-surface p-4">
                <span className="rounded bg-selected px-2 py-1 text-[9px] font-bold text-action">
                  ENGLISH
                </span>

                <p className="mt-4 text-sm font-semibold leading-6 text-ink-primary">
                  Review allergy information before prescribing.
                </p>

                <p className="mt-3 text-[10px] leading-5 text-ink-secondary">
                  Primary interface language
                </p>
              </div>

              <div className="rounded-lg border border-border-default bg-surface p-4">
                <span className="rounded bg-[#FFF1D6] px-2 py-1 text-[9px] font-bold text-[#895000]">
                  हिंदी सहायता
                </span>

                <p
                  lang="hi"
                  className="mt-4 text-sm font-semibold leading-7 text-ink-primary"
                  style={{
                    fontFamily:
                      '"Noto Sans Devanagari", "Nirmala UI", sans-serif',
                  }}
                >
                  दवा लिखने से पहले एलर्जी की जानकारी जाँचें।
                </p>

                <p className="mt-3 text-[10px] leading-5 text-ink-secondary">
                  Context-preserving assisted translation
                </p>
              </div>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Globe2 aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Localization rules
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Meaning remains stable across languages.
              </h3>
            </div>

            <ul className="space-y-3 p-5 md:p-6">
              {[
                "Preserve medication names, units and reference ranges.",
                "Use familiar local terms without changing clinical meaning.",
                "Allow longer translated text without truncating actions.",
                "Validate high-risk translations with clinical reviewers.",
              ].map((rule) => (
                <li
                  key={rule}
                  className="flex items-start gap-3 rounded-lg border border-border-subtle p-3"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    size={15}
                    className="mt-0.5 shrink-0 text-[#176B42]"
                  />

                  <span className="text-[11px] leading-5 text-ink-secondary">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
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
              <p className="text-sm font-semibold">Clinical content rule</p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                Every message explains the situation, preserves essential
                context, identifies ownership and provides a specific next
                action.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-CONTENT-001 · CLINICALLY REVIEWED
          </span>
        </aside>
      </div>
    </section>
  );
}
