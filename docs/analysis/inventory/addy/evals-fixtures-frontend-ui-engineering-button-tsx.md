---
package: addy
path: evals/fixtures/frontend-ui-engineering/Button.tsx
type: file
bytes: 306
unit: inv-addy-9
deprecated: false
aliases: []
memo_inputs:
  - {path: evals/fixtures/frontend-ui-engineering/Button.tsx, sha256: 9acf939db2b4e31c4408d3d4e88c5b994e170fe63897b02e31ae163bb1542967}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# evals/fixtures/frontend-ui-engineering/Button.tsx

## Purpose — required, verbatim
> "export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(" — evals/fixtures/frontend-ui-engineering/Button.tsx:3
(no explicit purpose statement)

## Design intent — required
Evaluation fixture providing an exemplary reference implementation of an accessible React UI component following design system conventions for the `frontend-ui-engineering` skill. It utilizes TypeScript, React's `forwardRef`, native button attribute forwarding (`ButtonHTMLAttributes<HTMLButtonElement>`), and class name concatenation. Without it, the evaluation would lack a concrete code exemplar demonstrating the project's preferred component authoring conventions for newly synthesized UI components.

## Phase — required
none

## Inputs — required
Props `className` and standard HTML button attributes extending `ButtonHTMLAttributes<HTMLButtonElement>`, along with forwarded DOM `ref` — evals/fixtures/frontend-ui-engineering/Button.tsx:3-4.

## Outputs — required
Renders a native JSX `<button>` element with merged CSS classes and forwarded ref — evals/fixtures/frontend-ui-engineering/Button.tsx:5.

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Button` — evals/fixtures/frontend-ui-engineering/Button.tsx:3 — defined here
- `forwardRef` — evals/fixtures/frontend-ui-engineering/Button.tsx:3 — used here
- `ButtonHTMLAttributes` — evals/fixtures/frontend-ui-engineering/Button.tsx:3 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Standard modern React component pattern forwarding refs and spreading props to preserve accessibility and custom styling.

## Context cost
306 bytes, ~75 tokens.
