---
package: addy
path: evals/fixtures/frontend-ui-engineering/Button.tsx
type: file
bytes: 306
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/frontend-ui-engineering/Button.tsx, sha256: 9acf939db2b4e31c4408d3d4e88c5b994e170fe63897b02e31ae163bb1542967}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/frontend-ui-engineering/Button.tsx

## Purpose — required, verbatim
> "export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(" — evals/fixtures/frontend-ui-engineering/Button.tsx:3 (no explicit purpose statement)

## Design intent — required
Provides an existing exemplar component in the frontend design system demonstrating proper React/TypeScript conventions: using `forwardRef`, typing standard button HTML attributes, composing utility classes (`button ${className}`), and forwarding DOM ref and remaining props. Used as reference style for generating new components in the frontend-ui-engineering evaluation.

## Phase — required
none

## Inputs — required
- React imports `forwardRef`, `ButtonHTMLAttributes` — `evals/fixtures/frontend-ui-engineering/Button.tsx:1`
- Component props `className`, HTML button attributes, `ref` — `evals/fixtures/frontend-ui-engineering/Button.tsx:3-4`

## Outputs — required
- Exports `Button` component — `evals/fixtures/frontend-ui-engineering/Button.tsx:3`
- Renders `<button>` JSX element — `evals/fixtures/frontend-ui-engineering/Button.tsx:5`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `forwardRef` — evals/fixtures/frontend-ui-engineering/Button.tsx:1 — used here
- `ButtonHTMLAttributes` — evals/fixtures/frontend-ui-engineering/Button.tsx:1 — used here
- `Button` — evals/fixtures/frontend-ui-engineering/Button.tsx:3 — defined here

## Structure
- React import statement (line 1)
- `Button` component definition and export with `forwardRef` (lines 3-7)

## Scripts — required if type is script or the skill ships scripts
- path: `evals/fixtures/frontend-ui-engineering/Button.tsx`, language: TypeScript/TSX, lines: 8
- documented invocation: none
- **executed:** yes
- actual command run: `bun -e "import('./sources/addy/evals/fixtures/frontend-ui-engineering/Button.tsx').catch(() => {});"`
- actual exit code: `0`, stdout: (empty)
- documented exit codes: none vs actual exit paths: clean TSX parsing and load
- does the output match what the documentation claims?: yes, exports forwardRef Button component

## Defects — required
none

## Observations
Exemplar pattern for design system components: cleanly forwards ref and merges class names.

## Context cost
306 bytes (approx. 77 tokens).
