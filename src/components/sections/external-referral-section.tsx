import {
  AlertTriangle,
  ArrowRight,
  Building2,
  CalendarClock,
  CheckCircle2,
  CircleDot,
  ClipboardCheck,
  FileCheck2,
  Hospital,
  Link2,
  LockKeyhole,
  MessageSquareText,
  Network,
  PhoneCall,
  RotateCcw,
  Send,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Users,
  XCircle,
} from "lucide-react";

const referralStages = [
  {
    number: "01",
    title: "Identify",
    description: "Confirm the clinical need for external care.",
    status: "complete",
  },
  {
    number: "02",
    title: "Prepare",
    description: "Assemble the minimum referral package.",
    status: "complete",
  },
  {
    number: "03",
    title: "Authorize",
    description: "Verify consent and financial approval.",
    status: "current",
  },
  {
    number: "04",
    title: "Send",
    description: "Transfer the referral through a secure channel.",
    status: "upcoming",
  },
  {
    number: "05",
    title: "Confirm",
    description: "Receive acknowledgement from the provider.",
    status: "upcoming",
  },
  {
    number: "06",
    title: "Close loop",
    description: "Reconcile the outcome into the patient record.",
    status: "upcoming",
  },
];

const referralDocuments = [
  {
    name: "Referral reason",
    description: "Clinical question and requested service",
    status: "Included",
    complete: true,
  },
  {
    name: "Clinical summary",
    description: "Diagnosis, treatment and current condition",
    status: "Included",
    complete: true,
  },
  {
    name: "Investigation results",
    description: "Relevant laboratory and imaging reports",
    status: "3 files",
    complete: true,
  },
  {
    name: "Medication list",
    description: "Active medicines, dose and frequency",
    status: "Included",
    complete: true,
  },
  {
    name: "Patient consent",
    description: "Permission to share health information",
    status: "Required",
    complete: false,
  },
];

const referralTimeline = [
  {
    time: "10:18",
    title: "Referral initiated",
    description: "Dr. Arun Rao requested an external cardiac MRI.",
    owner: "Referring clinician",
    status: "complete",
  },
  {
    time: "10:24",
    title: "Clinical package prepared",
    description: "Relevant notes, results and medication history attached.",
    owner: "Cardiology coordinator",
    status: "complete",
  },
  {
    time: "10:31",
    title: "Insurance review started",
    description: "Prior authorization request sent to the insurer.",
    owner: "Insurance desk",
    status: "current",
  },
  {
    time: "Pending",
    title: "Receiving provider acknowledgement",
    description: "Confirmation is required before the referral is complete.",
    owner: "Referral coordinator",
    status: "upcoming",
  },
];

const exchangeRules = [
  {
    title: "Identity matching",
    description:
      "Patient identifiers are verified before information is released.",
    icon: UserCheck,
  },
  {
    title: "Minimum necessary data",
    description:
      "Only information required for the referral purpose is transferred.",
    icon: FileCheck2,
  },
  {
    title: "Secure delivery",
    description:
      "Documents use an approved encrypted exchange channel.",
    icon: LockKeyhole,
  },
  {
    title: "Receipt confirmation",
    description:
      "The receiving organization acknowledges access to the package.",
    icon: MessageSquareText,
  },
];

const ownershipRows = [
  {
    role: "Referring clinician",
    responsibility:
      "Defines the clinical question and confirms that referral is appropriate.",
  },
  {
    role: "Referral coordinator",
    responsibility:
      "Prepares the package, communicates with the provider and tracks status.",
  },
  {
    role: "Insurance desk",
    responsibility:
      "Confirms coverage, authorization requirements and patient liability.",
  },
  {
    role: "Receiving provider",
    responsibility:
      "Acknowledges the referral, accepts responsibility and returns the outcome.",
  },
];

export function ExternalReferralSection() {
  return (
    <section
      id="external-referral"
      className="ds-section bg-canvas"
      aria-labelledby="external-referral-title"
    >
      <div className="ds-container">
        <div className="grid gap-8 border-b border-border-default pb-10 xl:grid-cols-[0.7fr_1.3fr] xl:items-end">
          <div>
            <p className="ds-eyebrow">External referral · 08 / 13</p>

            <h2
              id="external-referral-title"
              className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] text-ink-primary md:text-5xl"
            >
              Referrals remain accountable beyond the hospital boundary.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-sm leading-6 text-ink-secondary">
              The referral service coordinates clinical information, consent,
              authorization, secure exchange and follow-up when care moves to an
              external organization.
            </p>

            <div className="flex items-start gap-3 border-l-2 border-action pl-4">
              <Network
                aria-hidden="true"
                size={17}
                className="mt-0.5 shrink-0 text-action"
              />

              <p className="text-xs leading-5 text-ink-secondary">
                Sending documents is not completion. The loop closes only when
                the receiving provider acknowledges responsibility and returns
                the outcome.
              </p>
            </div>
          </div>
        </div>

        <article className="ds-panel mt-10 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Stethoscope aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Referral workflow
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              One traceable journey from clinical need to continuity of care.
            </h3>
          </div>

          <ol className="grid gap-3 p-5 md:p-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] xl:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
            {referralStages.map((stage, index) => (
              <li key={stage.number} className="contents">
                <div
                  className={`rounded-lg border p-4 ${
                    stage.status === "current"
                      ? "border-action bg-selected"
                      : stage.status === "complete"
                        ? "border-[#B9DDC9] bg-[#F1FAF5]"
                        : "border-border-default bg-surface"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`ds-mono grid size-8 place-items-center rounded-full text-[9px] font-bold ${
                        stage.status === "current"
                          ? "bg-action text-white"
                          : stage.status === "complete"
                            ? "bg-[#176B42] text-white"
                            : "bg-surface-subtle text-ink-tertiary"
                      }`}
                    >
                      {stage.status === "complete" ? (
                        <CheckCircle2 aria-hidden="true" size={14} />
                      ) : (
                        stage.number
                      )}
                    </span>

                    {stage.status === "current" && (
                      <span className="text-[8px] font-bold uppercase tracking-[0.08em] text-action">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-xs font-semibold text-ink-primary">
                    {stage.title}
                  </p>

                  <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                    {stage.description}
                  </p>
                </div>

                {index < referralStages.length - 1 && (
                  <div className="grid place-items-center py-1 text-ink-tertiary lg:py-0">
                    <ArrowRight
                      aria-hidden="true"
                      size={15}
                      className="rotate-90 lg:rotate-0"
                    />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <ClipboardCheck aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Referral package
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Share enough context for the next clinician to act safely.
              </h3>
            </div>

            <div className="p-5 md:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-lg border border-[#B9DDC9] bg-[#F1FAF5] p-4">
                  <div className="flex items-start gap-3">
                    <Hospital
                      aria-hidden="true"
                      size={17}
                      className="mt-0.5 shrink-0 text-[#176B42]"
                    />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#176B42]">
                        Referring organization
                      </p>

                      <p className="mt-2 text-sm font-semibold text-ink-primary">
                        Aarogya Multispecialty Hospital
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-ink-secondary">
                        Cardiology · Dr. Arun Rao
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-[#D6C8E8] bg-[#FAF7FD] p-4">
                  <div className="flex items-start gap-3">
                    <Building2
                      aria-hidden="true"
                      size={17}
                      className="mt-0.5 shrink-0 text-[#624293]"
                    />

                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-[#624293]">
                        Receiving organization
                      </p>

                      <p className="mt-2 text-sm font-semibold text-ink-primary">
                        Metro Advanced Imaging Centre
                      </p>

                      <p className="mt-1 text-[10px] leading-5 text-ink-secondary">
                        Cardiac imaging · External provider
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg border border-border-default bg-surface">
                <div className="border-b border-border-subtle px-4 py-3">
                  <p className="text-xs font-semibold text-ink-primary">
                    Meera Nair · UHID 0048217
                  </p>

                  <p className="mt-1 text-[10px] text-ink-secondary">
                    Cardiac MRI · Evaluate suspected myocarditis
                  </p>
                </div>

                <ul className="divide-y divide-border-subtle">
                  {referralDocuments.map((document) => (
                    <li
                      key={document.name}
                      className="flex items-start justify-between gap-4 px-4 py-3"
                    >
                      <div className="flex items-start gap-3">
                        {document.complete ? (
                          <CheckCircle2
                            aria-hidden="true"
                            size={15}
                            className="mt-0.5 shrink-0 text-[#176B42]"
                          />
                        ) : (
                          <XCircle
                            aria-hidden="true"
                            size={15}
                            className="mt-0.5 shrink-0 text-[#8C1D27]"
                          />
                        )}

                        <div>
                          <p className="text-[11px] font-semibold text-ink-primary">
                            {document.name}
                          </p>

                          <p className="mt-1 text-[9px] leading-4 text-ink-secondary">
                            {document.description}
                          </p>
                        </div>
                      </div>

                      <span
                        className={`shrink-0 rounded px-2 py-1 text-[8px] font-bold uppercase tracking-[0.06em] ${
                          document.complete
                            ? "bg-[#DDF3E6] text-[#176B42]"
                            : "bg-[#FADDE0] text-[#8C1D27]"
                        }`}
                      >
                        {document.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <ShieldCheck aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Consent and authorization
                </p>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
                Permission boundaries remain visible before transfer.
              </h3>
            </div>

            <div className="space-y-4 p-5 md:p-6">
              <div
                role="alert"
                className="rounded-lg border border-[#E7B7BC] bg-[#FFF7F7] p-4"
              >
                <div className="flex items-start gap-3">
                  <AlertTriangle
                    aria-hidden="true"
                    size={17}
                    className="mt-0.5 shrink-0 text-[#8C1D27]"
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#8C1D27]">
                      Patient consent is required
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                      The referral package cannot be released until consent to
                      share clinical information is recorded.
                    </p>

                    <button
                      type="button"
                      className="mt-3 inline-flex h-9 items-center gap-2 rounded-md bg-[#8C1D27] px-3 text-[10px] font-semibold"
                      style={{ color: "#FFFFFF" }}
                    >
                      Record consent
                      <ArrowRight aria-hidden="true" size={13} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border-default bg-surface-subtle p-4">
                <div className="flex items-start gap-3">
                  <CalendarClock
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-action"
                  />

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-xs font-semibold text-ink-primary">
                        Insurance authorization
                      </p>

                      <span className="rounded bg-[#FFF1D6] px-2 py-1 text-[8px] font-bold text-[#895000]">
                        IN REVIEW
                      </span>
                    </div>

                    <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                      Request PA-260184 · Submitted today at 10:31
                    </p>

                    <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-border-default">
                      <div className="h-full w-2/3 rounded-full bg-[#C78316]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border-default bg-surface p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                  Patient responsibility
                </p>

                <p className="mt-3 text-xl font-semibold text-ink-primary">
                  ₹2,500 estimated
                </p>

                <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                  The patient must be informed before appointment confirmation.
                </p>
              </div>
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <CalendarClock aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Referral status
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Every handoff records time, ownership and the next expected event.
            </h3>
          </div>

          <ol className="divide-y divide-border-subtle">
            {referralTimeline.map((event) => (
              <li
                key={event.title}
                className="grid gap-4 p-5 sm:grid-cols-[80px_36px_1fr_160px] sm:items-start md:p-6"
              >
                <span className="ds-mono text-[10px] font-semibold text-ink-tertiary">
                  {event.time}
                </span>

                <span
                  className={`grid size-8 place-items-center rounded-full ${
                    event.status === "complete"
                      ? "bg-[#DDF3E6] text-[#176B42]"
                      : event.status === "current"
                        ? "bg-selected text-action"
                        : "bg-surface-subtle text-ink-tertiary"
                  }`}
                >
                  {event.status === "complete" ? (
                    <CheckCircle2 aria-hidden="true" size={15} />
                  ) : (
                    <CircleDot aria-hidden="true" size={15} />
                  )}
                </span>

                <div>
                  <p className="text-xs font-semibold text-ink-primary">
                    {event.title}
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-ink-secondary">
                    {event.description}
                  </p>
                </div>

                <div className="sm:text-right">
                  <p className="text-[8px] font-bold uppercase tracking-[0.08em] text-ink-tertiary">
                    Owner
                  </p>

                  <p className="mt-2 text-[10px] font-semibold text-action">
                    {event.owner}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <Link2 aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Secure exchange
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Interoperability preserves clinical meaning and accountability.
              </h3>
            </div>

            <div className="grid gap-3 p-5 sm:grid-cols-2 md:p-6">
              {exchangeRules.map((rule) => {
                const Icon = rule.icon;

                return (
                  <div
                    key={rule.title}
                    className="rounded-lg border border-border-default bg-surface p-4"
                  >
                    <Icon
                      aria-hidden="true"
                      size={17}
                      className="text-action"
                    />

                    <p className="mt-4 text-xs font-semibold text-ink-primary">
                      {rule.title}
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                      {rule.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="ds-panel overflow-hidden">
            <div className="border-b border-border-subtle p-5 md:p-6">
              <div className="flex items-center gap-2 text-action">
                <RotateCcw aria-hidden="true" size={17} />

                <p className="text-xs font-bold uppercase tracking-[0.1em]">
                  Recovery and escalation
                </p>
              </div>

              <h3 className="mt-3 text-xl font-semibold text-ink-primary">
                Unacknowledged referrals return to an active work queue.
              </h3>
            </div>

            <div className="space-y-4 p-5 md:p-6">
              <div className="rounded-lg border border-[#E7D09F] bg-[#FFF9ED] p-4">
                <div className="flex items-start gap-3">
                  <PhoneCall
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 text-[#895000]"
                  />

                  <div>
                    <p className="text-xs font-semibold text-[#895000]">
                      Acknowledgement overdue
                    </p>

                    <p className="mt-2 text-[10px] leading-5 text-ink-secondary">
                      Contact the receiving organization if no acknowledgement
                      is recorded within four working hours.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border-default bg-surface-subtle p-4">
                <p className="text-[9px] font-bold uppercase tracking-[0.08em] text-action">
                  Escalation path
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2 text-[10px] font-semibold text-ink-secondary">
                  <span>Referral coordinator</span>
                  <ArrowRight aria-hidden="true" size={12} />
                  <span>Clinical owner</span>
                  <ArrowRight aria-hidden="true" size={12} />
                  <span className="text-action">Operations lead</span>
                </div>
              </div>

              <button
                type="button"
                className="inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-action px-4 text-xs font-semibold hover:bg-action-hover"
                style={{ color: "#FFFFFF" }}
              >
                <Send aria-hidden="true" size={14} />
                Send referral when ready
              </button>
            </div>
          </article>
        </div>

        <article className="ds-panel mt-6 overflow-hidden">
          <div className="border-b border-border-subtle p-5 md:p-6">
            <div className="flex items-center gap-2 text-action">
              <Users aria-hidden="true" size={17} />

              <p className="text-xs font-bold uppercase tracking-[0.1em]">
                Shared accountability
              </p>
            </div>

            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-ink-primary">
              Each participant knows what they own during the handoff.
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
                    Role
                  </th>

                  <th
                    scope="col"
                    className="border-b border-border-default px-5 py-3 text-[9px] font-bold uppercase tracking-[0.08em] text-ink-tertiary md:px-6"
                  >
                    Responsibility
                  </th>
                </tr>
              </thead>

              <tbody>
                {ownershipRows.map((row) => (
                  <tr
                    key={row.role}
                    className="border-b border-border-subtle"
                  >
                    <td className="px-5 py-4 text-xs font-semibold text-action md:px-6">
                      {row.role}
                    </td>

                    <td className="px-5 py-4 text-[11px] leading-5 text-ink-secondary md:px-6">
                      {row.responsibility}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <aside className="mt-6 flex flex-col justify-between gap-6 rounded-xl bg-graphite p-6 text-white md:flex-row md:items-center md:p-8">
          <div className="flex max-w-3xl items-start gap-4">
            <ShieldCheck
              aria-hidden="true"
              size={22}
              className="mt-0.5 shrink-0 text-[#8FD3D0]"
            />

            <div>
              <p className="text-sm font-semibold">External referral rule</p>

              <p className="mt-2 text-xs leading-5 text-white/60">
                A referral is complete only when consent, authorization, secure
                exchange, receiving-provider acknowledgement and returned
                clinical outcomes are traceable in the patient record.
              </p>
            </div>
          </div>

          <span className="ds-mono shrink-0 text-[10px] text-white/40">
            HOS-REF-001 · CONTINUITY VERIFIED
          </span>
        </aside>
      </div>
    </section>
  );
}

