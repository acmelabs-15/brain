---
package: addy
path: evals/cases/code-simplification.json
type: config
bytes: 1330
unit: inv-addy-2
---

# evals/cases/code-simplification.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"code-simplification\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"This function works but it is way too clever, simplify it without changing behavior\",\n        \"top_k\": 3\n      }," — evals/cases/code-simplification.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `code-simplification` skill. It evaluates routing precision on prompts seeking to simplify overly clever code without changing behavior, reducing module complexity for junior maintainers, and cleaning up hard-to-follow working code; validates negative routing against feature additions and `debugging-and-error-recovery`; and grades simplifying an 80-line configuration parsing function (`evals/fixtures/code-simplification/config-parser.js`), enforcing behavioral preservation (unchanged passing tests or concrete equivalence proof), true complexity reduction rather than relocation, clear rationale of what was removed and why, and zero feature additions.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"This function works but it is way too clever, simplify it without changing behavior"` — evals/cases/code-simplification.json:6
  - `"Reduce the complexity of this module so juniors can maintain it"` — evals/cases/code-simplification.json:10
  - `"Clean up this working code, it has grown hard to follow"` — evals/cases/code-simplification.json:14
  - `"Add a feature flag system to the app"` — evals/cases/code-simplification.json:20
  - `"Diagnose why the build broke overnight"` — evals/cases/code-simplification.json:23
- Behavioral eval prompt: `"Simplify the provided 80-line function that parses config files, preserving exact behavior."` — evals/cases/code-simplification.json:31
- Fixture directory in `evals/fixtures/code-simplification/` (`config-parser.js`, `config-parser.test.js`) — evals/cases/code-simplification.json:34

## Outputs — required
- Behavioral evaluation grading result: `evals/results/code-simplification.eval-1.grading.json` (produced by `scripts/run-evals.js` under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `code-simplification` — evals/cases/code-simplification.json:2
- skill `debugging-and-error-recovery` — evals/cases/code-simplification.json:24
- fixture `code-simplification` — evals/cases/code-simplification.json:34

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `code-simplification` — evals/cases/code-simplification.json:2 — used here
- `feature flag` — evals/cases/code-simplification.json:20 — used here
- `debugging-and-error-recovery` — evals/cases/code-simplification.json:24 — used here
- `exact behavior` — evals/cases/code-simplification.json:31 — used here
- `equivalence` — evals/cases/code-simplification.json:37 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 18
- `evals` — line 28
  - `id: 1` — line 30

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The evaluation enforces pure refactoring discipline: behavioral invariance (verified by test execution or concrete equivalence proof), true complexity reduction (rather than shifting complexity across abstraction boundaries), explicit rationalization of deletions, and strict prohibition against opportunistic feature additions.

## Context cost
1,330 bytes (~333 tokens) file size. When loaded with fixtures (`config-parser.js` 1,592 bytes, `config-parser.test.js` 452 bytes, ~2,044 bytes total), total context cost is 3,374 bytes (~844 tokens).
