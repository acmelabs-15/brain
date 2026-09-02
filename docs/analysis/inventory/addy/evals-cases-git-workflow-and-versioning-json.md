---
package: addy
path: evals/cases/git-workflow-and-versioning.json
type: config
bytes: 1272
unit: inv-addy-2
---

# evals/cases/git-workflow-and-versioning.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"git-workflow-and-versioning\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Split this messy working tree into clean atomic commits\",\n        \"top_k\": 3\n      }," — evals/cases/git-workflow-and-versioning.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `git-workflow-and-versioning` skill. It evaluates routing precision on splitting messy working trees into atomic commits, resolving merge conflicts on feature branches, release tagging/versioning, and opening pull requests; verifies negative routing against frontend UI modifications and `test-driven-development`; and grades behavioral history cleanup where a mixed working tree (refactor, fix, feature) must be decomposed into separate atomic commits with imperative standalone messages that each leave the repository in a green, working state.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Split this messy working tree into clean atomic commits"` — evals/cases/git-workflow-and-versioning.json:6
  - `"Resolve the merge conflict on this feature branch"` — evals/cases/git-workflow-and-versioning.json:10
  - `"How should we tag and version this release?"` — evals/cases/git-workflow-and-versioning.json:14
  - `"Commit this work and open a pull request"` — evals/cases/git-workflow-and-versioning.json:18
  - `"Add a loading spinner to the submit button"` — evals/cases/git-workflow-and-versioning.json:24
  - `"Write integration tests for the payments API"` — evals/cases/git-workflow-and-versioning.json:27
  - Behavioral eval prompt: `"The working tree mixes a refactor, a bug fix, and a new feature. Turn it into a clean history."` — evals/cases/git-workflow-and-versioning.json:35
- Fixture directory in `evals/fixtures/git-workflow-and-versioning/` (`app.js`, `app.test.js`) — evals/cases/git-workflow-and-versioning.json:38

## Outputs — required
- Behavioral evaluation grading result: `evals/results/git-workflow-and-versioning.eval-1.grading.json` (produced by `scripts/run-evals.js` under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `git-workflow-and-versioning` — evals/cases/git-workflow-and-versioning.json:2
- skill `test-driven-development` — evals/cases/git-workflow-and-versioning.json:28
- fixture `git-workflow-and-versioning` — evals/cases/git-workflow-and-versioning.json:38

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `git-workflow-and-versioning` — evals/cases/git-workflow-and-versioning.json:2 — used here
- `atomic commits` — evals/cases/git-workflow-and-versioning.json:6, 36, 41 — used here
- `merge conflict` — evals/cases/git-workflow-and-versioning.json:10 — used here
- `feature branch` — evals/cases/git-workflow-and-versioning.json:10 — used here
- `pull request` — evals/cases/git-workflow-and-versioning.json:18 — used here
- `test-driven-development` — evals/cases/git-workflow-and-versioning.json:28 — used here
- `clean history` — evals/cases/git-workflow-and-versioning.json:35 — used here
- `commit messages` — evals/cases/git-workflow-and-versioning.json:36, 42 — used here

## Structure
- `skill_name` — line 2
- `trigger` — line 3
  - `positive` — line 4
  - `negative` — line 22
- `evals` — line 32
  - `id: 1` — line 34

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The evaluation enforces commit hygiene: separating refactor, fix, and feature into isolated commits, writing imperative standalone commit messages, and ensuring every commit is independently green and buildable.

## Context cost
1,272 bytes (~318 tokens) file size. When loaded with fixtures in `evals/fixtures/git-workflow-and-versioning/` (`app.js` 129 bytes, `app.test.js` 228 bytes, ~357 bytes total), total context cost is 1,629 bytes (~407 tokens).
