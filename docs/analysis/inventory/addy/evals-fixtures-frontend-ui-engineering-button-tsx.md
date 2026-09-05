---
package: addy
path: evals/fixtures/frontend-ui-engineering/Button.tsx
type: file
bytes: 306
unit: inv-addy-9
aliases: []
memo_inputs:
  - {path: evals/fixtures/frontend-ui-engineering/Button.tsx, sha256: 9acf939db2b4e31c4408d3d4e88c5b994e170fe63897b02e31ae163bb1542967}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/frontend-ui-engineering/Button.tsx

## Purpose — required, verbatim
> "export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(" — evals/fixtures/frontend-ui-engineering/Button.tsx:3
(no explicit purpose statement)

## Design intent — required
Provides an exemplar React UI component fixture for the `frontend-ui-engineering` skill evaluation. It establishes project conventions for reusable UI elements: exporting a typed component using React's `forwardRef`, accepting standard HTML button attributes (`ButtonHTMLAttributes<HTMLButtonElement>`), accepting an optional `className`, and forwarding the DOM ref. This serves as a pattern reference when building new components (such as a dropdown menu) to ensure convention compliance.

## Phase — required
none

## Inputs — required
Component props conforming to `ButtonHTMLAttributes<HTMLButtonElement>` with optional `className` and forwarded `ref` (evals/fixtures/frontend-ui-engineering/Button.tsx:3-4).

## Outputs — required
Rendered JSX `<button>` element with combined CSS class names (evals/fixtures/frontend-ui-engineering/Button.tsx:5).

## Invokes — required
none

## Invoked by — required
- config frontend-ui-engineering — evals/cases/frontend-ui-engineering.json:42

## Concepts named — required, verbatim
- `forwardRef` — evals/fixtures/frontend-ui-engineering/Button.tsx:1 — used here
- `Button` — evals/fixtures/frontend-ui-engineering/Button.tsx:3 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Demonstrates a clean, minimal pattern for React forwardRef wrapper components with class merging.

## Context cost
306 bytes, ~76 tokens.
