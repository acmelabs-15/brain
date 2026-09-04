---
package: addy
path: evals/fixtures/frontend-ui-engineering/design-system.md
type: doc
bytes: 530
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/frontend-ui-engineering/design-system.md, sha256: 10c2d3e53e438a8200dcf83b11d6663d846a47ae9cd458d0c5ddd6950fda6f9f}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
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
orphan

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
