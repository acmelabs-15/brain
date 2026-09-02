---
package: addy
path: evals/cases/browser-testing-with-devtools.json
type: config
bytes: 1455
unit: inv-addy-1
---

# evals/cases/browser-testing-with-devtools.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"browser-testing-with-devtools\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Use Chrome DevTools to figure out why the checkout button click does nothing\",\n        \"top_k\": 3\n      }," — evals/cases/browser-testing-with-devtools.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `browser-testing-with-devtools` skill. It verifies routing for live Chrome DevTools debugging, network inspection, and browser verification; ensures negative routing to `spec-driven-development` and `planning-and-task-breakdown`; and evaluates the agent's ability to diagnose a silent form submission bug using observed runtime data (console, network, DOM) against fixture `evals/fixtures/browser-testing-with-devtools/`.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Use Chrome DevTools to figure out why the checkout button click does nothing"` — evals/cases/browser-testing-with-devtools.json:6
  - `"Inspect the network requests the dashboard makes when it first loads"` — evals/cases/browser-testing-with-devtools.json:10
  - `"Verify in a real browser that the form submits and the data persists in localStorage"` — evals/cases/browser-testing-with-devtools.json:14
  - `"Write a spec for the new billing feature before we start"` — evals/cases/browser-testing-with-devtools.json:20
  - `"Break this PRD into ordered implementation tasks"` — evals/cases/browser-testing-with-devtools.json:24
- Behavioral eval prompt: `"The signup form renders but submitting it appears to do nothing. Verify the real behavior in the browser and report findings."` — evals/cases/browser-testing-with-devtools.json:32
- Fixture files in `evals/fixtures/browser-testing-with-devtools/` (`index.html`, `server.js`, `README.md`) — evals/cases/browser-testing-with-devtools.json:35

## Outputs — required
- Behavioral evaluation grading result: `evals/results/browser-testing-with-devtools.eval-1.grading.json` (produced by `scripts/run-evals.js` when executed under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `browser-testing-with-devtools` — evals/cases/browser-testing-with-devtools.json:2
- skill `spec-driven-development` — evals/cases/browser-testing-with-devtools.json:21
- skill `planning-and-task-breakdown` — evals/cases/browser-testing-with-devtools.json:25
- fixture `browser-testing-with-devtools` — evals/cases/browser-testing-with-devtools.json:35

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `browser-testing-with-devtools` — evals/cases/browser-testing-with-devtools.json:2 — used here
- `Chrome DevTools` — evals/cases/browser-testing-with-devtools.json:6 — used here
- `localStorage` — evals/cases/browser-testing-with-devtools.json:14 — used here
- `spec-driven-development` — evals/cases/browser-testing-with-devtools.json:21 — used here
- `planning-and-task-breakdown` — evals/cases/browser-testing-with-devtools.json:25 — used here
- `PRD` — evals/cases/browser-testing-with-devtools.json:24 — used here
- `runtime evidence` — evals/cases/browser-testing-with-devtools.json:33 — used here
- `DOM state` — evals/cases/browser-testing-with-devtools.json:33 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 18
- `evals` — line 29
  - `id: 1` — line 30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The test assertions strictly require the agent to ground findings in observed runtime data (console errors, network requests, DOM mutations) rather than static code guessing alone, and demand that the report cleanly separates direct observation from logical inference.

## Context cost
1,455 bytes (~365 tokens) file size. When loaded with fixture files in `evals/fixtures/browser-testing-with-devtools/` (1,566 bytes total: `index.html` 869 bytes, `server.js` 511 bytes, `README.md` 186 bytes), total context cost is 3,021 bytes (~755 tokens).
