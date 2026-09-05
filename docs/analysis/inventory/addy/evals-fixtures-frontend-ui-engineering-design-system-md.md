---
package: addy
path: evals/fixtures/frontend-ui-engineering/design-system.md
type: doc
bytes: 530
unit: inv-addy-9
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/frontend-ui-engineering/design-system.md, sha256: 10c2d3e53e438a8200dcf83b11d6663d846a47ae9cd458d0c5ddd6950fda6f9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/frontend-ui-engineering/design-system.md

## Purpose — required, verbatim
> "Framework: React with TypeScript." — evals/fixtures/frontend-ui-engineering/design-system.md:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture defining architectural constraints and accessibility requirements for a Menu component in the `frontend-ui-engineering` skill evaluation (`evals/cases/frontend-ui-engineering.json`). It specifies tech stack (React + TypeScript), zero styling dependencies (existing utility classes), ref forwarding, keyboard navigation patterns (Escape closes, arrow keys navigate enabled items), focus restoration to trigger, and non-focusable disabled item semantics. Without it, the evaluation would lack concrete design system specifications to verify whether an agent implements robust keyboard accessibility and focus management rather than naive UI components.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Menu component conventions` — evals/fixtures/frontend-ui-engineering/design-system.md:1 — defined here
- `React with TypeScript` — evals/fixtures/frontend-ui-engineering/design-system.md:3 — defined here
- `keyboard-only` — evals/fixtures/frontend-ui-engineering/design-system.md:6 — used here
- `screen-reader` — evals/fixtures/frontend-ui-engineering/design-system.md:6 — used here
- `trigger` — evals/fixtures/frontend-ui-engineering/design-system.md:7 — used here

## Structure
- `# Menu component conventions` — evals/fixtures/frontend-ui-engineering/design-system.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Outlines WAI-ARIA Menu button design pattern constraints: focus management, keyboard navigation (Escape, arrow keys), and accessible disabled state handling.

## Context cost
530 bytes, ~120 tokens.
