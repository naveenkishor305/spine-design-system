# Spine Design System

## Design contract

This document defines the product, interaction and implementation rules for
Spine. It is the deeper reference behind the public documentation website.

Spine is the design-system identity. **Hospital OS** remains the name of the
clinical-operations platform demonstrated by the system.

## Status

- Product: Spine Design System
- Platform context: Hospital OS
- Release: 1.0 portfolio foundation
- Audience: Product designers, engineers and clinical-product teams
- Implementation: Next.js, React, TypeScript and Tailwind CSS
- Purpose: Portfolio case study and reusable healthcare design reference

Spine is not production medical software and does not replace clinical,
security, legal or regulatory validation.

## 1. Product intent

Spine creates a shared interface language across hospital workflows that
are connected operationally but used by people with different
responsibilities.

The system must:

- Preserve patient context across workflow transitions.
- Make safety-relevant information immediately recognizable.
- Adapt information density and actions to the user’s role.
- Expose status, ownership and next actions clearly.
- Support traceability without overwhelming routine work.
- Remain accessible under time pressure and imperfect conditions.
- Scale from individual controls to end-to-end clinical workflows.

## 2. Design principles

### 2.1 Patient identity before action

Any action that can change care, medication, diagnostics or billing must
retain visible patient identity and encounter context.

### 2.2 Safety over decorative novelty

Visual emphasis is reserved for clinical risk, workflow interruption,
required action and meaningful state change.

### 2.3 Role relevance over universal dashboards

Receptionists, clinicians, diagnostic teams, pharmacists and operations
teams require different default views. Shared data does not require an
identical interface.

### 2.4 Progressive disclosure

Show the information required for the immediate decision first. Secondary
details, audit history and advanced controls should remain available
without dominating the task.

### 2.5 Status must be explicit

Color alone must never communicate status. Pair color with text, icons,
position and appropriate accessible semantics.

### 2.6 Every interruption needs recovery

Errors, offline states, partial results and permission restrictions must
explain what happened, what remains safe and what the user can do next.

### 2.7 Traceability is part of the experience

High-impact actions should communicate author, time, state transition and,
when required, reason.

## 3. Information architecture

Spine organizes the experience through five connected levels:

1. Platform area
2. Role workspace
3. Workflow
4. Task surface
5. Patient or operational record

Navigation must communicate the current level and preserve meaningful
context when moving between levels.

### Global shell

The desktop documentation shell uses:

- Fixed top header: 56px
- Fixed documentation sidebar: 264px
- Main content region with readable maximum width
- 72px effective anchor offset
- Visible active-section navigation
- Hash-based deep linking
- Automatic sidebar scrolling for the active item

### Documentation order

1. Overview
2. Principles
3. Foundations
4. Components
5. Clinical patterns
6. Accessibility
7. Content and language
8. Information architecture
9. External referral
10. Role workspaces
11. System states
12. Privacy, access and audit
13. Governance
14. Release and migration

## 4. Foundations

### 4.1 Color

Use semantic roles rather than hardcoded visual descriptions.

| Role | Intended use |
| --- | --- |
| Surface | Primary page and component backgrounds |
| Surface subtle | Grouping, secondary regions and hover states |
| Selected | Current navigation and selected controls |
| Graphite | High-contrast brand and information surfaces |
| Ink primary | Main headings, labels and high-priority content |
| Ink secondary | Supporting content and metadata |
| Ink tertiary | Captions and low-priority supporting information |
| Border subtle | Quiet grouping and structural separation |
| Border default | Interactive boundaries and stronger separation |
| Action | Links, focus, controls and primary interaction |
| Informational | Neutral operational notices |
| Success | Confirmed completion or safe positive state |
| Warning | Conditions requiring attention or verification |
| Critical | Unsafe, destructive or clinically urgent conditions |

Rules:

- Do not rely on color alone.
- Reserve critical color for meaningful risk.
- Text and icon contrast must meet accessibility requirements.
- Selected and hover states must remain distinguishable.
- Status palettes must work on both primary and subtle surfaces.

The implemented CSS tokens in `src/app/globals.css` are the source of truth.

### 4.2 Typography

| Typeface | Role |
| --- | --- |
| Inter | Interface labels, headings and body content |
| IBM Plex Mono | Codes, identifiers, technical values and audit data |
| Noto Sans Devanagari | Hindi and Devanagari-script content |

Typography rules:

- Use sentence case for interface labels.
- Keep headings concise and descriptive.
- Use monospaced type only where character alignment or identification helps.
- Do not communicate hierarchy through font size alone.
- Prevent all-caps labels from becoming long sentences.
- Maintain readable line length for documentation prose.

### 4.3 Spacing

Spacing must use the shared token scale.

- Related items use the smallest appropriate interval.
- Component groups require more separation than items within a group.
- Dense clinical tables may reduce vertical spacing but cannot reduce
  target size or readability.
- Repeated patterns must use consistent internal padding.
- Avoid arbitrary one-off spacing values.

### 4.4 Shape

Rounded corners communicate containment, not decoration.

- Controls use a consistent small radius.
- Cards and panels may use a larger system radius.
- Pills are reserved for compact status, filtering and short metadata.
- Clinical data tables should retain clear rectangular alignment.

### 4.5 Iconography

Spine uses Lucide icons.

- Icons support labels; they do not replace unfamiliar clinical language.
- Maintain consistent optical sizing and stroke weight.
- Decorative icons must be hidden from assistive technology.
- Icon-only controls require an accessible name and visible tooltip.
- Status icons must be paired with text.

### 4.6 Motion

Motion should clarify location, hierarchy or state change.

- Keep transitions short and functional.
- Respect reduced-motion preferences.
- Avoid continuous animation in operational workspaces.
- Never delay urgent or safety-relevant information.
- Do not use motion as the only confirmation of an action.

## 5. Layout and responsive behavior

### Desktop

- Persistent documentation sidebar
- Persistent top header
- Main content aligned to a stable reading grid
- Dense examples displayed without horizontal page overflow

### Tablet

- Reduce peripheral navigation before reducing task clarity.
- Preserve content order and section hierarchy.
- Allow complex examples to scroll within their own region when necessary.

### Mobile

- Replace the fixed sidebar with an accessible navigation trigger.
- Keep primary section content in source order.
- Stack comparison content vertically.
- Prevent tables from shrinking below readable width.
- Preserve 44px minimum interactive targets.

Responsive behavior must never hide safety-relevant content solely to make a
layout fit.

## 6. Components

Every interactive component must define:

- Default
- Hover
- Focus-visible
- Active or pressed
- Selected, when applicable
- Disabled
- Loading, when applicable
- Error or invalid, when applicable
- Read-only, when applicable

### Buttons

Use one clear primary action per task region.

- Primary: advances or completes the main task
- Secondary: supports the primary task
- Tertiary: low-emphasis contextual action
- Destructive: irreversible or high-impact action requiring care
- Icon button: compact familiar action with an accessible name

### Inputs

Inputs require:

- Persistent label
- Optional supporting description
- Clear required or optional treatment
- Visible focus state
- Inline validation near the field
- Recovery guidance for invalid data
- Preservation of valid values after submission errors

Placeholder text is not a replacement for a label.

### Selectors

Checkboxes support independent selections.

Radio groups support one selection from a visible set.

Switches represent an immediate on/off setting and should not be used as a
substitute for confirmation.

### Badges and status chips

Badges communicate compact metadata or status.

- Use short labels.
- Keep terminology consistent.
- Do not use a badge as the only warning for serious risk.
- Avoid presenting non-interactive status as a button.

### Cards

Cards group one coherent subject or task.

- Provide a clear heading.
- Avoid nesting multiple card levels.
- Align actions consistently.
- Do not make the entire card clickable when it contains separate controls.

### Tables

Tables are preferred for exact comparison and operational records.

- Maintain meaningful column headings.
- Support keyboard navigation where rows are interactive.
- Keep patient identity visible when horizontally scrolling.
- Align numerical data consistently.
- Expose sort state programmatically.
- Provide empty, loading, error and partial-data states.

### Dialogs

Dialogs interrupt the current workflow and require a strong reason.

Use them for:

- Confirmation of consequential actions
- Short, focused data entry
- Safety acknowledgment
- Permission or reason capture

Do not place long workflows inside dialogs.

## 7. Clinical workflow patterns

### 7.1 Patient identity

Patient context should include enough information to prevent mistaken
identity without unnecessarily exposing sensitive data.

Identity treatment must remain stable across:

- Search
- Appointment
- Consultation
- Diagnostic order
- Result review
- Medication
- Billing
- Referral

### 7.2 Integrated outpatient journey

The representative workflow connects:

1. Patient access
2. Consultation
3. Diagnostics
4. Medication
5. Revenue completion
6. Audit and operational follow-up

Each transition must preserve:

- Patient
- Encounter
- Current status
- Responsible role
- Pending action
- Relevant time information

### 7.3 Orders and results

Orders must distinguish draft, placed, accepted, in-progress, completed,
amended and cancelled states.

Results must communicate:

- Availability
- Verification status
- Abnormal or critical state
- Author and verification time
- Amendments
- Required acknowledgment

### 7.4 Medication

Medication patterns must prioritize:

- Patient identity
- Medication name
- Strength
- Route
- Frequency
- Duration
- Allergy and interaction context
- Prescriber
- Status and change history

### 7.5 External referral

A referral that leaves the hospital network must make the handoff visible.

Communicate:

- Sending organization
- Receiving organization
- Referral reason
- Included documents
- Consent or authorization status
- Ownership
- Delivery state
- Failure and recovery path

## 8. Role workspaces

| Role | Default priorities |
| --- | --- |
| Reception | Patient identity, appointment status, queue and access |
| Clinician | Current encounter, clinical context, orders and decisions |
| Diagnostics | Order details, specimen or study status, results and verification |
| Pharmacy | Medication validity, availability, dispensing and counseling |
| Operations | Capacity, exceptions, throughput, ownership and escalation |
| Revenue | Eligibility, charges, authorization, payment and reconciliation |

Role adaptation may change emphasis and available actions, but it must not
create contradictory data representations.

## 9. System states

Every significant data surface must define:

### Loading

- Preserve layout where possible.
- Communicate that work is continuing.
- Avoid indefinite unlabelled spinners.

### Empty

- Explain why no content exists.
- Distinguish first-use empty states from filtered zero-results states.
- Offer an appropriate next action.

### Partial

- Identify what is available and what is missing.
- Do not present partial data as complete.
- Allow safe continuation only when clinically appropriate.

### Error

- Use plain language.
- Preserve valid work.
- Explain recovery.
- Provide a reference identifier for support when useful.

### Offline

- Communicate connection status.
- Explain whether viewing or editing remains possible.
- Identify unsynchronized changes.
- Confirm successful synchronization after recovery.

### Restricted

- Explain that access is limited.
- Avoid exposing protected information in the explanation.
- Provide the appropriate escalation or access-request route.

## 10. Privacy, access and audit

Spine follows least-privilege interaction design.

High-impact actions may require:

- Reauthentication
- Reason capture
- Confirmation
- Supervisor approval
- Visible audit creation

Audit entries should communicate:

- Actor
- Role
- Action
- Record or subject
- Previous and resulting state
- Date and time
- Reason, when required
- Source or location, when appropriate

Audit information should be readable and useful, not merely collected.

## 11. Content and language

### Voice

Spine is calm, direct and operational.

Write:

- “Review the patient details before submitting.”
- “The result is not yet verified.”
- “Your changes were saved locally and will sync when online.”

Avoid:

- Blame
- Jokes during errors
- Unexplained abbreviations
- Vague messages such as “Something went wrong”
- Alarmist language for routine conditions

### Labels

- Use familiar task language.
- Begin actions with verbs.
- Keep terminology consistent across roles.
- Distinguish save, submit, approve, verify and complete.
- Do not use “Yes” and “No” when the action can be named directly.

### Dates and time

- Use an unambiguous display format.
- Include time zone when records cross locations.
- Pair relative time with an exact value where audit accuracy matters.

### Multilingual content

- Allow text expansion.
- Avoid fixed-width text containers.
- Preserve semantic structure across languages.
- Use the Noto Sans Devanagari font for Devanagari content.
- Validate translated clinical terminology with qualified reviewers.

## 12. Accessibility

Spine targets WCAG 2.2 AA behavior.

Requirements include:

- Semantic landmarks and headings
- Keyboard-operable navigation and controls
- Visible focus indicators
- Logical focus order
- Accessible names for icon-only controls
- Text alternatives for meaningful imagery
- Sufficient text and non-text contrast
- Status announcements where appropriate
- Reduced-motion support
- Error identification with recovery guidance
- Minimum practical interactive target size
- No essential information communicated by color alone

Accessibility is part of component acceptance, not a later review stage.

## 13. Governance

### Contribution sequence

1. Identify a repeated product need.
2. Confirm that an existing component or pattern cannot solve it.
3. Document users, roles and workflow risk.
4. Define anatomy, states and accessibility behavior.
5. Prototype in realistic clinical context.
6. Review design and implementation together.
7. Validate content and edge cases.
8. Add documentation and migration guidance.
9. Release with an owner and version.

### Ownership

Every shared pattern should have:

- Design owner
- Engineering owner
- Product or domain reviewer
- Accessibility reviewer
- Release status
- Last review date

### Change classification

| Change | Version impact |
| --- | --- |
| Documentation clarification | Patch |
| Backward-compatible component addition | Minor |
| New optional behavior | Minor |
| Changed visual token with broad impact | Minor or major |
| Removed API, token or behavior | Major |
| Changed clinical meaning or permission behavior | Major review |

## 14. Release and migration

Adoption should progress through controlled layers:

1. Shared foundations
2. Common controls
3. Navigation and shell
4. Operational components
5. Clinical workflow patterns
6. Role workspaces
7. Cross-organization workflows
8. Governance and measurement

Migration guidance must identify:

- Existing pattern
- Replacement
- Breaking differences
- Required product changes
- Accessibility implications
- Data or permission implications
- Owner
- Target release

## 15. Implementation map

| Location | Responsibility |
| --- | --- |
| `src/app/globals.css` | Global foundations and semantic style tokens |
| `src/app/layout.tsx` | Metadata, fonts and document shell |
| `src/app/page.tsx` | Documentation composition |
| `src/components/layout` | Header and documentation navigation |
| `src/components/sections` | Individual design-system chapters |
| `src/data/navigation.ts` | Section navigation data |
| `public/brand` | Spine identity assets |
| `docs/renders` | Generated interface renders |
| `scripts/capture-renders.mjs` | Reproducible documentation capture |

## 16. Definition of done

A component or pattern is complete only when:

- Its user and workflow need are explicit.
- Anatomy and supported variants are documented.
- All relevant states are implemented.
- Keyboard behavior is defined.
- Screen-reader semantics are validated.
- Content rules are included.
- Responsive behavior is tested.
- Privacy and permission effects are reviewed.
- Failure and recovery paths are designed.
- It is demonstrated in realistic context.
- Lint and production build pass.
- Documentation and migration guidance are current.

## 17. Review checklist

Before release, confirm:

- Is patient and encounter context preserved?
- Is the primary action clear?
- Are safety-relevant states explicit?
- Can the workflow be completed with a keyboard?
- Is focus visible and logically ordered?
- Are loading, empty, partial, error and offline states covered?
- Are role permissions accurately represented?
- Is sensitive data exposure minimized?
- Are actions traceable where required?
- Does translated content fit without loss?
- Does the implementation use shared tokens?
- Can a new contributor understand and reuse the pattern?
