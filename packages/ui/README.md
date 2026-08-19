# @naveenkishor305/spine-ui

Shared React components and design tokens for the Spine design system —
the single source of truth for both `apps/docs` (this repo's documentation
site) and Hospital OS product apps (e.g. Nadi).

## Install

```bash
npm install @naveenkishor305/spine-ui
```

Then import the stylesheet once, near the root of your app:

```ts
import "@naveenkishor305/spine-ui/styles.css";
```

## Usage

```tsx
import { Button, Alert, Panel, PanelBody, StatusBadge } from "@naveenkishor305/spine-ui";

<Button variant="primary">Admit patient</Button>
<StatusBadge tone="critical" showDot>Critical</StatusBadge>
```

## Scope

This package ships **core, role-agnostic primitives and tokens** shared
across every Spine surface: buttons, fields, panels, alerts, badges, and
system states. Product-specific extensions (brand marketing treatments,
a login screen's visual language, module-specific patterns like triage
acuity or trauma activation) belong in the consuming app, layered on top
of these tokens — not in this package.

See the repo root [DESIGN.md](../../DESIGN.md) for the full design
contract.
