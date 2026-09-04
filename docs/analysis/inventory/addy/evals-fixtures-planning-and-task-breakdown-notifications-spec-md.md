---
package: addy
path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md
type: doc
bytes: 854
unit: inv-addy-6
memo_inputs:
  - {path: evals/fixtures/planning-and-task-breakdown/notifications-spec.md, sha256: 9705170691d53703e42a0494ead60b09c4d7aa0bd48444426ad8fe8ace6f87f4}
method_sha: 363a57b543666244096e150abfb5435c4aa6c3c72e543f90b5600ab3507ac791
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# evals/fixtures/planning-and-task-breakdown/notifications-spec.md

## Purpose — required, verbatim
> "Users can opt into email notifications when a task is assigned or becomes" — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:3 (no explicit purpose statement) (no explicit purpose statement)

## Design intent — required
Provides a multi-requirement feature specification fixture for evaluating `planning-and-task-breakdown` (eval id: 1). It outlines user preferences, job queuing, deduplication, email provider adapters, feature flags, verification requirements, and out-of-scope constraints, allowing the eval harness to verify whether the agent produces an executable, dependency-ordered plan of small vertical slices with acceptance criteria in `tasks/plan.md` without prematurely implementing code.

## Phase — required
`addy:VERIFY`

## Inputs — required
- Consumed by eval execution harness for eval `id: 1` in `evals/cases/planning-and-task-breakdown.json:29-43`.

## Outputs — required
- Evaluated agent decomposes this into `tasks/plan.md`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Notifications specification` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:1 — defined here
- `email notifications` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:3 — used here
- `boundary validation` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:9 — used here
- `notification jobs` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:10 — used here
- `Deduplicate jobs` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:11 — used here
- `provider adapter` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:12 — used here
- `Feature flag` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:14 — used here
- `Verification` — evals/fixtures/planning-and-task-breakdown/notifications-spec.md:16 — used here

## Structure
- `# Notifications specification` — line 1
- `Requirements:` — line 7
- `Verification must include...` — line 16

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
The specification specifies concrete constraints (safe default for feature flags, no message bodies stored, job deduplication by user/task/event type/version) and explicit scope boundaries (no SMS, push notifications, or UI history), testing whether the plan generator correctly identifies scope boundaries and acceptance criteria.

## Context cost
854 bytes (~215 tokens) file size. Loaded as part of `evals/fixtures/planning-and-task-breakdown/` directory (854 bytes total).
