---
package: addy
path: evals/fixtures/browser-testing-with-devtools/README.md
type: doc
bytes: 186
unit: inv-addy-2
---

# evals/fixtures/browser-testing-with-devtools/README.md

## Purpose — required, verbatim
> "# Signup reproduction\n\nRun `node server.js`, open `http://127.0.0.1:4173`, enter an email, and submit\nthe form. The report should be based on runtime console, network, and DOM\nevidence." — evals/fixtures/browser-testing-with-devtools/README.md:1-5 (no explicit purpose statement)

## Design intent — required
Provides reproduction instructions and evidence requirements for the `browser-testing-with-devtools` fixture, specifying that the diagnosis must be based on observed runtime console, network, and DOM evidence.

## Phase — required
`addy:TEST`

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- file `evals/fixtures/browser-testing-with-devtools/server.js` — evals/fixtures/browser-testing-with-devtools/README.md:3

## Invoked by — required
- config `evals/cases/browser-testing-with-devtools.json` — evals/cases/browser-testing-with-devtools.json:35
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `Signup reproduction` — evals/fixtures/browser-testing-with-devtools/README.md:1 — defined here
- `node server.js` — evals/fixtures/browser-testing-with-devtools/README.md:3 — used here
- `runtime console` — evals/fixtures/browser-testing-with-devtools/README.md:4 — used here
- `network` — evals/fixtures/browser-testing-with-devtools/README.md:4 — used here
- `DOM evidence` — evals/fixtures/browser-testing-with-devtools/README.md:4-5 — used here

## Structure
- `# Signup reproduction` — line 1

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Explicitly instructs that diagnosis must come from runtime evidence (console errors, network status, DOM state) rather than static code guessing alone.

## Context cost
186 bytes (~46 tokens).
