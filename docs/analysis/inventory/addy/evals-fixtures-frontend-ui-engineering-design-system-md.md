---
package: addy
path: evals/fixtures/frontend-ui-engineering/design-system.md
type: doc
bytes: 530
unit: inv-addy-2
---

# evals/fixtures/frontend-ui-engineering/design-system.md

## Purpose — required, verbatim
> "- Framework: React with TypeScript." — evals/fixtures/frontend-ui-engineering/design-system.md:3 (no explicit purpose statement)

## Design intent — required
Specifies conventions and accessibility/interaction requirements for a dropdown menu component within a React/TypeScript design system. Defines styling rules (using existing `menu-*` utility classes without extra dependencies), DOM ref forwarding, keyboard navigation requirements (Escape to close, arrows to cycle enabled items, focus return on close), and screen-reader accessibility rules. Used to evaluate whether an agent builds frontend components adhering to strict accessibility and architectural standards.

## Phase — required
none

## Inputs — required
- Design system specifications and interaction contracts — `evals/fixtures/frontend-ui-engineering/design-system.md:3-11`

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config `evals/cases/frontend-ui-engineering.json` — evals/cases/frontend-ui-engineering.json:42
- script `scripts/run-evals.js` — scripts/run-evals.js:394

## Concepts named — required, verbatim
- `Menu component conventions` — evals/fixtures/frontend-ui-engineering/design-system.md:1 — used here
- `React` — evals/fixtures/frontend-ui-engineering/design-system.md:3 — used here
- `TypeScript` — evals/fixtures/frontend-ui-engineering/design-system.md:3 — used here
- `DOM ref` — evals/fixtures/frontend-ui-engineering/design-system.md:5 — used here
- `keyboard-only` — evals/fixtures/frontend-ui-engineering/design-system.md:6 — used here
- `screen-reader` — evals/fixtures/frontend-ui-engineering/design-system.md:6 — used here
- `Focus returns` — evals/fixtures/frontend-ui-engineering/design-system.md:7 — used here
- `dropdown` — evals/fixtures/frontend-ui-engineering/design-system.md:10 — used here

## Structure
- `# Menu component conventions` (line 1)
- Convention bullets (lines 3-8)
- Dropdown component specification (lines 10-11)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly mandates keyboard focus management, ARIA considerations, and ref forwarding.

## Context cost
530 bytes (approx. 133 tokens).
