---
package: addy
path: evals/cases/planning-and-task-breakdown.json
type: config
bytes: 1233
unit: inv-addy-2
---

# evals/cases/planning-and-task-breakdown.json

## Purpose — required, verbatim
> "{\n  \"skill_name\": \"planning-and-task-breakdown\",\n  \"trigger\": {\n    \"positive\": [\n      {\n        \"prompt\": \"Break this spec into small verifiable tasks with acceptance criteria\",\n        \"top_k\": 3\n      }," — evals/cases/planning-and-task-breakdown.json:1-8 (no explicit purpose statement)

## Design intent — required
Defines trigger routing and behavioral execution tests for the `planning-and-task-breakdown` skill. It evaluates routing precision on prompts breaking specs into small verifiable tasks with acceptance criteria, turning PRDs into ordered task lists, and planning implementable chunks before coding; verifies negative routing against `debugging-and-error-recovery` and security/XSS prompts; and grades behavioral execution on creating an ordered task plan (`tasks/plan.md`) from a notifications specification (`evals/fixtures/planning-and-task-breakdown/notifications-spec.md`), enforcing dependency ordering, vertical slices rather than horizontal layers, explicit acceptance criteria per task, and zero implementation code during planning.

## Phase — required
`addy:VERIFY`

## Inputs — required
- User trigger queries for rank evaluation:
  - `"Break this spec into small verifiable tasks with acceptance criteria"` — evals/cases/planning-and-task-breakdown.json:6
  - `"Turn the PRD into an ordered task list we can execute"` — evals/cases/planning-and-task-breakdown.json:10
  - `"Plan the work into implementable chunks before we start coding"` — evals/cases/planning-and-task-breakdown.json:14
  - `"Debug the crash on startup"` — evals/cases/planning-and-task-breakdown.json:20
  - `"Encode the output so it is safe against XSS"` — evals/cases/planning-and-task-breakdown.json:24
- Behavioral eval prompt: `"Break the attached notifications spec into an executable plan."` — evals/cases/planning-and-task-breakdown.json:31
- Fixture directory in `evals/fixtures/planning-and-task-breakdown/` (`notifications-spec.md`) — evals/cases/planning-and-task-breakdown.json:34

## Outputs — required
- Behavioral evaluation grading result: `evals/results/planning-and-task-breakdown.eval-1.grading.json` (produced by `scripts/run-evals.js` under Tier 3)
- Routing evaluation score and rank classification in test runner output

## Invokes — required
- skill `planning-and-task-breakdown` — evals/cases/planning-and-task-breakdown.json:2
- skill `debugging-and-error-recovery` — evals/cases/planning-and-task-breakdown.json:21
- fixture `planning-and-task-breakdown` — evals/cases/planning-and-task-breakdown.json:34

## Invoked by — required
- script `scripts/run-evals.js` — scripts/run-evals.js:169

## Concepts named — required, verbatim
- `planning-and-task-breakdown` — evals/cases/planning-and-task-breakdown.json:2 — used here
- `spec` — evals/cases/planning-and-task-breakdown.json:6, 31 — used here
- `acceptance criteria` — evals/cases/planning-and-task-breakdown.json:6, 32, 37 — used here
- `PRD` — evals/cases/planning-and-task-breakdown.json:10 — used here
- `debugging-and-error-recovery` — evals/cases/planning-and-task-breakdown.json:21 — used here
- `XSS` — evals/cases/planning-and-task-breakdown.json:24 — used here
- `executable plan` — evals/cases/planning-and-task-breakdown.json:31 — used here
- `tasks/plan.md` — evals/cases/planning-and-task-breakdown.json:32 — used here
- `vertical slices` — evals/cases/planning-and-task-breakdown.json:39 — used here
- `horizontal layers` — evals/cases/planning-and-task-breakdown.json:39 — used here

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
The eval expectations enforce core task decomposition rules: tasks must represent vertical slices of functionality rather than horizontal architectural layers (e.g., database vs backend vs UI), each task must possess verifiable acceptance criteria and dependency relationships, and no implementation code is permitted during the planning step. Target output artifact is specified as `tasks/plan.md`.

## Context cost
1,233 bytes (~308 tokens) file size. When loaded with fixture `evals/fixtures/planning-and-task-breakdown/notifications-spec.md` (854 bytes), total context cost is 2,087 bytes (~522 tokens).
