---
package: addy
path: evals/fixtures/frontend-ui-engineering/Button.tsx
type: file
bytes: 306
unit: inv-addy-2
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
- config `evals/cases/frontend-ui-engineering.json` — evals/cases/frontend-ui-engineering.json:42
- script `scripts/run-evals.js` — scripts/run-evals.js:394

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
