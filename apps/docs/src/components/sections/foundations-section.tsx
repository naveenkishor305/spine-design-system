import {
  Baseline,
  CheckCircle2,
  Contrast,
  Grid3X3,
  Languages,
  Maximize2,
  Palette,
  Ruler,
  ScanLine,
} from "lucide-react";

type ColorToken = {
  name: string;
  variable: string;
  value: string;
  inverse?: boolean;
};

const neutralTokens: ColorToken[] = [
  {
    name: "Graphite",
    variable: "--graphite",
    value: "#101C20",
    inverse: true,
  },
  {
    name: "Ink primary",
    variable: "--ink-primary",
    value: "#17262B",
    inverse: true,
  },
  {
    name: "Ink secondary",
    variable: "--ink-secondary",
    value: "#4A5F66",
    inverse: true,
  },
  {
    name: "Canvas",
    variable: "--canvas",
    value: "#F6F8F8",
  },
  {
    name: "Surface subtle",
    variable: "--surface-subtle",
    value: "#EEF2F3",
  },
  {
    name: "Surface",
    variable: "--surface",
    value: "#FFFFFF",
  },
];

const interactionTokens: ColorToken[] = [
  {
    name: "Action",
    variable: "--action",
    value: "#075458",
    inverse: true,
  },
  {
    name: "Action hover",
    variable: "--action-hover",
    value: "#063F42",
    inverse: true,
  },
  {
    name: "Link",
    variable: "--link",
    value: "#08686D",
    inverse: true,
  },
  {
    name: "Selected",
    variable: "--selected",
    value: "#D9F0F0",
  },
  {
    name: "Focus",
    variable: "--focus",
    value: "#6550E8",
    inverse: true,
  },
];

const semanticTokens = [
  {
    name: "Information",
    use: "Neutral clinical guidance",
    foreground: "#155D8D",
    surface: "#E6F2FA",
  },
  {
    name: "Success",
    use: "Completed or confirmed",
    foreground: "#176B42",
    surface: "#E4F4EB",
  },
  {
    name: "Warning",
    use: "Review before continuing",
    foreground: "#895000",
    surface: "#FFF1D6",
  },
  {
    name: "Critical",
    use: "Immediate safety response",
    foreground: "#8C1D27",
    surface: "#FADDE0",
  },
  {
    name: "Restricted",
    use: "Permission-limited content",
    foreground: "#624293",
    surface: "#F0E9FA",
  },
];

const spacingTokens = [
  { token: "space-1", value: 4 },
  { token: "space-2", value: 8 },
  { token: "space-3", value: 12 },
  { token: "space-4", value: 16 },
  { token: "space-6", value: 24 },
  { token: "space-8", value: 32 },
  { token: "space-12", value: 48 },
];

const layoutTokens = [
  {
    label: "Utility header",
    value: "56 px",
    description: "Global identity, search and system version",
  },
  {
    label: "Documentation rail",
    value: "264 px",
    description: "Stable navigation and portfolio context",
  },
  {
    label: "Content maximum",
    value: "1440 px",
    description: "Readable documentation and product previews",
  },
  {
    label: "Base grid",
    value: "8 px",
    description: "Spacing rhythm across clinical interfaces",
  },
];

function TokenSwatch({ token }: { token: ColorToken }) {
  return (
    <article
      className="overflow-hidden rounded-lg border border-border-subtle bg-surface"
      aria-label={`${token.name}, ${token.value}`}
    >
      <div
        className="flex h-24 items-end p-3"
        style={{ backgroundColor: token.value }}
      >
        <span
          className={`ds-mono text-[10px] font-semibold ${
            token.inverse ? "text-white/75" : "text-ink-secondary"
          }`}
        >
          {token.value}
        </span>
      </div>

      <div className="p-3">
        <p className="text-xs font-semibold text-ink-primary">{token.name}</p>
        <p className="ds-mono mt-1 text-[9px] text-ink-tertiary">
          {token.variable}
        </p>
      </div>
    </article>
  );
}

export function FoundationsSection() {
  return (
    <section
      id="foundations"
      className="ds-section bg-canvas"
      aria-labelledby="foundations-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">Foundations · 02 / 13</p>

            <h2
              id="foundations-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              A calm visual system for high-pressure work.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              Foundations create a shared language across hospital products
              while preserving the hierarchy required for clinical safety.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <Contrast
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                Color supports meaning, but text, icons and structure always
                communicate the state independently.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <article className="ds-panel overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-subtle p-5 md:p-6">
              <div>
                <div className="flex items-center gap-2 text-action">
                  <Palette aria-hidden="true" size={17} />
                  <p className="text-xs font-bold uppercase tracking-[0.1em]">
                    Color system
                  </p>
                </div>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                  Neutral by default. Semantic by exception.
                </h3>
              </div>

              <span className="ds-mono rounded border border-border-default bg-surface-subtle px-2 py-1 text-[10px] text-ink-tertiary">
                WCAG-aware palette
              </span>
            </div>

            <div className="p-5 md:p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-tertiary">
                Neutral foundations
              </p>

              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {neutralTokens.map((token) => (
                  <TokenSwatch key={token.variable} token={token} />
                ))}
              </div>

              <div className="mt-7 flex items-center justify-between gap-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink-tertiary">
                  Interaction
                </p>

                <p className="text-[10px] text-ink-tertiary">
                  Teal communicates action—not decoration.
                </p>
              </div>

              <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-5">
                {interactionTokens.map((token) => (
                  <TokenSwatch key={token.variable} token={token} />
                ))}
              </div>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <ScanLine aria-hidden="true" size={17} />
                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Semantic states
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                State before style.
              </h3>

              <p className="mt-2 max-w-lg text-xs leading-5 text-ink-secondary">
                Every semantic color has a defined operational purpose and
                remains paired with explicit language.
              </p>
            </div>

            <div>
              {semanticTokens.map((token) => (
                <div
                  key={token.name}
                  className="border-b border-border-subtle p-4 last:border-b-0"
                  style={{ backgroundColor: token.surface }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex min-w-0 items-center gap-3">
                      <span
                        className="grid size-8 shrink-0 place-items-center rounded-md"
                        style={{
                          backgroundColor: token.foreground,
                          color: "#FFFFFF",
                        }}
                      >
                        <CheckCircle2 aria-hidden="true" size={15} />
                      </span>

                      <div>
                        <p
                          className="text-xs font-semibold"
                          style={{ color: token.foreground }}
                        >
                          {token.name}
                        </p>
                        <p className="mt-0.5 text-[10px] text-ink-secondary">
                          {token.use}
                        </p>
                      </div>
                    </div>

                    <span
                      className="ds-mono text-[9px]"
                      style={{ color: token.foreground }}
                    >
                      {token.foreground}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <article className="ds-panel p-5 md:p-7">
            <div className="flex items-center gap-2 text-action">
              <Baseline aria-hidden="true" size={17} />
              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Typography
              </p>
            </div>

            <div className="mt-7 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="text-[46px] font-semibold leading-[1.02] tracking-[-0.045em] text-ink-primary md:text-[58px]">
                  Clinical clarity
                </p>

                <p className="mt-4 max-w-xl text-base leading-7 text-ink-secondary">
                  Inter carries interface hierarchy and long-form
                  documentation with a neutral, highly legible voice.
                </p>

                <div className="mt-8 border-l-2 border-action pl-4">
                  <p className="text-xs font-semibold text-ink-primary">
                    Sentence case reduces visual noise
                  </p>
                  <p className="mt-1 text-xs leading-5 text-ink-secondary">
                    Uppercase is reserved for short labels, states and
                    navigational eyebrows.
                  </p>
                </div>
              </div>

              <div className="space-y-5 border-l border-border-subtle pl-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                    Interface
                  </p>
                  <p className="mt-2 text-xl font-semibold text-ink-primary">
                    Inter Semibold
                  </p>
                  <p className="mt-1 text-xs text-ink-secondary">
                    Titles, actions and decision hierarchy
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                    Clinical data
                  </p>
                  <p className="ds-mono mt-2 text-base font-medium text-ink-primary">
                    MRN HOS-024718
                  </p>
                  <p className="mt-1 text-xs text-ink-secondary">
                    IBM Plex Mono for identifiers and timestamps
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <Languages
                      aria-hidden="true"
                      size={14}
                      className="text-action"
                    />
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ink-tertiary">
                      Multilingual
                    </p>
                  </div>

                  <p className="ds-devanagari mt-2 text-lg font-semibold text-ink-primary">
                    सुरक्षित और स्पष्ट स्वास्थ्य सेवा
                  </p>

                  <p className="mt-1 text-xs text-ink-secondary">
                    Noto Sans Devanagari for Indian language readiness
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="ds-panel p-5 md:p-7">
            <div className="flex items-center gap-2 text-action">
              <Ruler aria-hidden="true" size={17} />
              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Spacing rhythm
              </p>
            </div>

            <p className="mt-3 text-sm leading-6 text-ink-secondary">
              An eight-point rhythm keeps dense clinical screens predictable
              without making them feel cramped.
            </p>

            <div className="mt-7 space-y-3">
              {spacingTokens.map((space) => (
                <div
                  key={space.token}
                  className="grid grid-cols-[72px_1fr_40px] items-center gap-3"
                >
                  <span className="ds-mono text-[9px] text-ink-tertiary">
                    {space.token}
                  </span>

                  <div className="h-2 overflow-hidden rounded-full bg-surface-subtle">
                    <div
                      className="h-full rounded-full bg-action"
                      style={{
                        width: `${Math.min((space.value / 48) * 100, 100)}%`,
                      }}
                    />
                  </div>

                  <span className="ds-mono text-right text-[9px] text-ink-secondary">
                    {space.value}px
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-t border-border-subtle pt-6">
              {[
                ["Control", "6px"],
                ["Panel", "8px"],
                ["Overlay", "12px"],
              ].map(([label, radius], index) => (
                <div key={label} className="text-center">
                  <div
                    className="mx-auto h-14 border-2 border-action bg-selected"
                    style={{ borderRadius: [6, 8, 12][index] }}
                  />
                  <p className="mt-2 text-[10px] font-semibold text-ink-primary">
                    {label}
                  </p>
                  <p className="ds-mono mt-0.5 text-[9px] text-ink-tertiary">
                    {radius}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.5fr]">
          <article className="ds-panel overflow-hidden">
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border-subtle p-5 md:p-6">
              <div>
                <div className="flex items-center gap-2 text-action">
                  <Grid3X3 aria-hidden="true" size={17} />
                  <p className="text-xs font-bold uppercase tracking-[0.1em]">
                    Layout anchors
                  </p>
                </div>

                <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                  Stable regions reduce reorientation.
                </h3>
              </div>

              <Maximize2
                aria-hidden="true"
                size={18}
                className="text-ink-tertiary"
              />
            </div>

            <div className="grid sm:grid-cols-2">
              {layoutTokens.map((token) => (
                <div
                  key={token.label}
                  className="border-b border-border-subtle p-5 sm:odd:border-r"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="text-xs font-semibold text-ink-primary">
                      {token.label}
                    </p>
                    <span className="ds-mono text-xs font-semibold text-action">
                      {token.value}
                    </span>
                  </div>

                  <p className="mt-2 text-[11px] leading-5 text-ink-secondary">
                    {token.description}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <aside className="relative overflow-hidden rounded-xl bg-graphite p-6 text-white">
            <div
              aria-hidden="true"
              className="absolute -right-12 -top-12 size-40 rounded-full border border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -right-5 -top-5 size-24 rounded-full border border-white/10"
            />

            <div className="relative">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8FD3D0]">
                Foundation rule
              </p>

              <p className="mt-5 text-2xl font-semibold leading-8 tracking-[-0.025em]">
                Calm surfaces make exceptional states impossible to miss.
              </p>

              <p className="mt-4 text-xs leading-5 text-white/60">
                The default interface remains quiet so warnings, restrictions
                and critical clinical conditions receive the attention they
                deserve.
              </p>

              <div className="mt-8 border-t border-white/15 pt-5">
                <p className="ds-mono text-[10px] text-white/45">
                  HOS-FDN-001 · Approved
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
