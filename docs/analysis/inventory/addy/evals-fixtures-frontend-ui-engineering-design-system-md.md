---
package: addy
path: evals/fixtures/frontend-ui-engineering/design-system.md
type: doc
bytes: 530
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/frontend-ui-engineering/design-system.md, sha256: 10c2d3e53e438a8200dcf83b11d6663d846a47ae9cd458d0c5ddd6950fda6f9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/frontend-ui-engineering/design-system.md

## Purpose — required, verbatim
> "- Framework: React with TypeScript." — evals/fixtures/frontend-ui-engineering/design-system.md:3
(no explicit purpose statement)

## Design intent — required
Provides specification and accessibility requirements for a Menu component in the `frontend-ui-engineering` eval. It mandates React + TypeScript, existing `menu-*` utility styling, `className` and `ref` forwarding, full keyboard navigation (Escape to close, arrows to navigate items), focus restoration to the trigger on close, and handling disabled actions (visible but non-focusable and non-executable). Tests whether an agent implements full a11y focus management and keyboard interaction patterns rather than just visual styling.

## Phase — required
none

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- config frontend-ui-engineering — evals/cases/frontend-ui-engineering.json:42

## Concepts named — required, verbatim
- `Menu component conventions` — evals/fixtures/frontend-ui-engineering/design-system.md:1 — defined here
- `Escape` — evals/fixtures/frontend-ui-engineering/design-system.md:8 — used here
- `arrow keys` — evals/fixtures/frontend-ui-engineering/design-system.md:8 — used here

## Structure
- `# Menu component conventions` — evals/fixtures/frontend-ui-engineering/design-system.md:1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly specifies accessible interaction rules including focus management (return focus to trigger on close, arrow key navigation, inert disabled items).

## Context cost
530 bytes, ~132 tokens.
